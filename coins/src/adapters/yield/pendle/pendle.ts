import { ChainApi } from "@defillama/sdk";
import { getLogs } from "../../../utils/cache/getLogs";
import { CoinData, Write } from "../../utils/dbInterfaces";
import { getApi } from "../../utils/sdk";
import {
  addToDBWritesList,
  getTokenAndRedirectData,
} from "../../utils/database";

export default async function getTokenPrices(
  timestamp: number,
  chain: string,
  config: any,
): Promise<Write[]> {
  const writes: Write[] = [];
  const { factory, fromBlock, toAsset } = config;
  const api: ChainApi = await getApi(chain, timestamp);
  const logs: any[][] = await newMarkets();

  const markets: string[] = logs.map((l: any) => l.market);
  const tokens: string[][] = await api.multiCall({
    calls: markets,
    abi:
      "function readTokens() view returns (address _SY, address _PT, address _YT)",
  });

  const SYs: string[] = tokens.map((t: any) => t._SY.toLowerCase());
  const PTs: string[] = tokens.map((t: any) => t._PT.toLowerCase());
  const yieldTokens: string[] = (
    await api.multiCall({
      abi: "function yieldToken() view returns (address )",
      calls: SYs,
    })
  ).map((i: any) => i.toLowerCase());
  const underlyingTokens: string[] = (
    await api.multiCall({
      abi:
        "function assetInfo() view returns (uint8 asseetType, address assetAddress, uint8 assetDecimals)",
      calls: SYs,
    })
  ).map((i: any) => i.assetAddress.toLowerCase());

  const underlyingTokenData: CoinData[] = await getTokenAndRedirectData(
    [...new Set([...yieldTokens, ...underlyingTokens])],
    chain,
    timestamp,
  );

  async function newMarkets() {
    return await getLogs({
      api,
      target: factory,
      topics: [
        "0x166ae5f55615b65bbd9a2496e98d4e4d78ca15bd6127c0fe2dc27b76f6c03143",
      ],
      eventAbi:
        "event CreateNewMarket (address indexed market, address indexed PT, int256 scalarRoot, int256 initialAnchor)",
      onlyArgs: true,
      fromBlock,
    });
  }

  async function syWrites() {
    const [decimals, symbols] = await Promise.all([
      api.multiCall({ abi: "uint8:decimals", calls: SYs }),
      api.multiCall({ abi: "string:symbol", calls: SYs }),
    ]);

    SYs.map((SY: string, i: number) => {
      const underlying: CoinData | undefined = underlyingTokenData.find(
        (u: CoinData) => u.address == yieldTokens[i],
      );

      const redirect: string =
        underlying && underlying.redirect
          ? underlying.redirect
          : `asset#${chain}:${yieldTokens[i]}`;

      addToDBWritesList(
        writes,
        chain,
        SY,
        undefined,
        decimals[i],
        symbols[i],
        timestamp,
        "pendle-sy",
        1,
        redirect,
      );
    });
  }

  async function ptWrites() {
    const [exchangeRates, decimals, symbols] = await Promise.all([
      Promise.all(
        // PromisePool error when multicalled on mainnet
        markets.map((params: string) =>
          api.call({
            target: toAsset,
            params,
            abi:
              "function getPtToAssetRate(address) public view returns (uint256 ptToAssetRate)",
          }),
        ),
      ),
      // api.multiCall({
      //   calls: markets.map((params: string) => ({ target: toAsset, params })),
      //   abi:
      //     "function getPtToAssetRate(address) public view returns (uint256 ptToAssetRate)",
      //   requery: true,
      // }),
      api.multiCall({
        abi: "uint8:decimals",
        calls: PTs,
      }),
      api.multiCall({
        abi: "string:symbol",
        calls: PTs,
      }),
    ]);

    PTs.map((PT: string, i: number) => {
      const underlying: CoinData | undefined = underlyingTokenData.find(
        (u: CoinData) => u.address == underlyingTokens[i],
      );

      if (!underlying || !exchangeRates[i] || !decimals[i] || !symbols[i])
        return;

      const price = (underlying.price * exchangeRates[i]) / 10 ** 18;

      addToDBWritesList(
        writes,
        chain,
        PT,
        price,
        decimals[i],
        symbols[i],
        timestamp,
        "pendle-pt",
        1,
      );
    });
  }

  async function ytWrites() {
    const YTs: string[] = tokens.map((t: any) => t._YT);

    const [decimals, symbols] = await Promise.all([
      api.multiCall({
        abi: "uint8:decimals",
        calls: YTs,
      }),
      api.multiCall({
        abi: "string:symbol",
        calls: YTs,
      }),
    ]);

    YTs.map((YT: string, i: number) => {
      const underlying: CoinData | undefined = underlyingTokenData.find(
        (u: CoinData) => u.address == underlyingTokens[i],
      );
      const PT: Write | undefined = writes.find((u: Write) =>
        u.PK.includes(PTs[i]),
      );

      if (!underlying || !PT || !decimals[i] || !symbols[i] || !PT.price)
        return;

      const price = underlying.price - PT.price;

      addToDBWritesList(
        writes,
        chain,
        YT,
        price,
        decimals[i],
        symbols[i],
        timestamp,
        "pendle-yt",
        1,
      );
    });
  }

  async function lpWrites() {
    const [
      ptBalances,
      syBalances,
      supplies,
      decimals,
      symbols,
    ] = await Promise.all([
      api.multiCall({
        abi: "erc20:balanceOf",
        calls: markets.map((m: string, i: number) => ({
          target: PTs[i],
          params: m,
        })),
      }),
      api.multiCall({
        abi: "erc20:balanceOf",
        calls: markets.map((m: string, i: number) => ({
          target: SYs[i],
          params: m,
        })),
      }),
      api.multiCall({
        abi: "erc20:totalSupply",
        calls: markets,
      }),
      api.multiCall({
        abi: "erc20:decimals",
        calls: markets,
      }),
      api.multiCall({
        abi: "erc20:symbol",
        calls: markets,
      }),
    ]);

    markets.map((m: string, i: number) => {
      if (!m || !PTs[i] || !SYs[i]) return;
      const underlying: CoinData | undefined = underlyingTokenData.find(
        (u: CoinData) => u.address == yieldTokens[i],
      );
      const PT: Write | undefined = writes.find(
        (u: Write) => u.PK.includes(PTs[i]) && u.SK == 0,
      );

      if (!PT || !underlying || !PT.price || !PT.decimals) return;

      const price: number =
        ((ptBalances[i] * PT.price) / 10 ** PT.decimals +
          (syBalances[i] * underlying.price) / 10 ** underlying.decimals) /
        (supplies[i] / 10 ** decimals[i]);

      if (isNaN(price)) return;

      addToDBWritesList(
        writes,
        chain,
        m,
        price,
        decimals[i],
        symbols[i],
        timestamp,
        "pendle-lp",
        1,
      );
    });
  }

  await Promise.all([syWrites(), ptWrites()]);
  await Promise.all([ytWrites(), lpWrites()]);

  return writes;
}
