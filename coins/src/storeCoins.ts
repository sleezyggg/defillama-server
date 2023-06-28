require("dotenv").config();
import adapters from "./adapters/index";
import { batchWriteWithAlerts } from "./adapters/utils/database";
import { filterWritesWithLowConfidence } from "./adapters/utils/database";
import { sendMessage } from "./../../defi/src/utils/discord";

const withTimeout = (millis: number, promise: any) => {
  const timeout = new Promise((resolve, reject) =>
    setTimeout(() => {
      reject(`timed out after ${millis / 1000} s.`);
      resolve;
    }, millis),
  );
  return Promise.race([promise, timeout]);
};

const step = 2000;
const timeout = process.env.LLAMA_RUN_LOCAL ? 8400000 : 840000; //14mins
export default async function handler(event: any) {
  const a = Object.entries(adapters);
  const timestamp = 0;
  await Promise.all(
    event.protocolIndexes.map(async (i: any) => {
      try {
        const results = await withTimeout(timeout, a[i][1][a[i][0]](timestamp));
        const resultsWithoutDuplicates = filterWritesWithLowConfidence(
          results.flat(),
        );
        for (let i = 0; i < resultsWithoutDuplicates.length; i += step) {
          await batchWriteWithAlerts(
            resultsWithoutDuplicates.slice(i, i + step),
            true,
          );
        }
        console.log(`${a[i][0]} done`);
      } catch (e) {
        console.error(
          `${a[i][0]} adapter failed ${
            process.env.LLAMA_RUN_LOCAL ? "" : `:${e}`
          }`,
        );
        if (!process.env.LLAMA_RUN_LOCAL)
          await sendMessage(
            `${a[i][0]} adapter failed: ${e}`,
            process.env.STALE_COINS_ADAPTERS_WEBHOOK!,
            true,
          );
      }
    }),
  );
}

// ts-node coins/src/storeCoins.ts
async function main() {
  let a = {
    protocolIndexes: [0],
  };
  await handler(a);
  if (process.env.LLAMA_RUN_LOCAL) process.exit(0);
}
if (process.env.LLAMA_RUN_LOCAL) main();
