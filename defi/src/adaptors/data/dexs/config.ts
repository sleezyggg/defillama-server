import { CATEGORIES } from "../helpers/categories"
import { AdaptorsConfig } from "../types"

export default {
    "balancer": {
        "enabled": true,
        "id": "116",
        parentId: "Balancer",
        protocolsData: {
            v1: {
                id: "116",
                displayName: "Balancer V1",
                enabled: true,
            },
            v2: {
                id: "2611",
                displayName: "Balancer V2",
                enabled: true,
            }
        }
    },
    "bancor": {
        "enabled": true,
        "id": "162",
        parentId: "Bancor",
        protocolsData: {
            v3: {
                id: "1995",
                enabled: true,
            },
            "v2.1": {
                id: "162",
                enabled: true,
            }
        }
    },
    "champagneswap": {
        "enabled": true,
        "id": "1643"
    },
    "katana": {
        "enabled": true,
        "id": "797"
    },
    "pancakeswap": {
        "enabled": true,
        "id": "194",
        parentId: "PancakeSwap",
        protocolsData: {
            v1: {
                "disabled": true,
                enabled: true,
                "id": "2590"
            },
            v2: {
                enabled: true,
                "id": "194"
            },
            stableswap: {
                "enabled": true,
                "id": "2529",
                startFrom: 1663718400
            },
            v3: {
                "enabled": true,
                "id": "2769"
            }
        },
    },
    "raydium": {
        "enabled": true,
        "id": "214"
    },
    "uniswap": {
        "enabled": true,
        "id": "1",
        parentId: "Uniswap",
        "protocolsData": {
            "v1": {
                "enabled": true,
                "id": "2196"
            },
            "v2": {
                "enabled": true,
                "id": "2197"
            },
            "v3": {
                "enabled": true,
                "id": "2198"
            },
        },
    },
    "traderjoe": {
        "enabled": true,
        "id": "468",
        parentId: "Trader Joe",
        protocolsData: {
            v1: {
                enabled: true,
                id: "468"
            },
            v2: {
                enabled: true,
                id: "2393"
            }
        }
    },
    "sushiswap": {
        "enabled": true,
        "id": "119",
        parentId: "Sushi",
        protocolsData: {
            classic: {
                enabled: true,
                id: "119"
            },
            trident: {
                enabled: true,
                id: "2152"
            },
            v3: {
                enabled: true,
                id: "2776"
            }
        }
    },
    "spookyswap": {
        "enabled": true,
        "id": "302"
    },
    "spiritswap": {
        parentId: "SpiritSwap",
        "enabled": true,
        "id": "311"
    },
    "soulswap": {
        "enabled": true,
        "id": "544"
    },
    "klayswap": {
        "enabled": true,
        "id": "508"
    },
    "osmosis": {
        "enabled": true,
        "id": "383"
    },
    "serum": {
        disabled: true,
        "enabled": true,
        "includedVolume": [
            "raydium"
        ],
        "id": "145"
    },
    "curve": {
        "enabled": true,
        "id": "3"
    },
    "mooniswap": {
        "enabled": true,
        "id": "1053"
    },
    "dodo": {
        "enabled": true,
        "id": "146"
    },
    "velodrome": {
        "enabled": true,
        "id": "1799"
    },
    "gmx": {
        parentId: "337",
        "protocolsData": {
            "swap": {
                "id": "337",
                "enabled": true,
                "category": "Dexes",
                "displayName": "GMX - SWAP"
            }
        },
        "enabled": true,
        "id": "337"
    },
    "quickswap": {
        "enabled": true,
        "id": "306",
        parentId: "Quickswap",
        protocolsData: {
            v2: {
                id: "306",
                enabled: true,
                displayName: "Quickswap V2"
            },
            v3: {
                enabled: true,
                id: "2239"
            }
        }
    },
    "woofi": {
        parentId: "WOOFi",
        "enabled": true,
        "id": "1461"
    },
    "hashflow": {
        "enabled": true,
        "id": "1447"
    },
    "zipswap": {
        "enabled": true,
        "id": "1296"
    },
    "wardenswap": {
        "enabled": true,
        "id": "392"
    },
    "kyberswap": {
        "enabled": true,
        "id": "127",
        parentId: "KyberSwap",
        protocolsData: {
            classic: {
                id: "127",
                enabled: true,
                displayName: "KyberSwap - Classic"
            },
            elastic: {
                id: "2615",
                enabled: true,
                displayName: "KyberSwap - Elastic"
            }
        }
    },
    "ref-finance": {
        "enabled": true,
        "id": "541"
    },
    "solidly": {
        "enabled": true,
        "id": "1407"
    },
    "orca": {
        "enabled": true,
        "id": "283"
    },
    "saber": {
        "enabled": true,
        "id": "419"
    },
    "platypus": {
        "enabled": true,
        "id": "944"
    },
    "yoshi-exchange": {
        "enabled": true,
        "id": "863"
    },
    "biswap": {
        "enabled": true,
        "id": "373"
    },
    "apeswap": {
        parentId: "ApeSwap",
        "enabled": true,
        "id": "398"
    },
    "pangolin": {
        "enabled": true,
        "id": "246"
    },
    "minswap": {
        "enabled": true,
        "id": "1494"
    },
    "wingriders": {
        "enabled": true,
        "id": "1601"
    },
    "wombat-exchange": {
        "enabled": true,
        "id": "1700"
    },
    "dfyn": {
        "enabled": true,
        "id": "318"
    },
    "flamingo-finance": {
        "enabled": true,
        "id": "304"
    },
    "0x": {
        "enabled": true,
        "id": "2116",
        parentId: "2116",
        protocolsData: {
            "0x RFQ": {
                "id": "2116",
                enabled: true,
                displayName: "0x - RFQ"
            }
        }
    },
    "baryon": {
        "enabled": false,
        "id": "1950"
    },
    "cherryswap": {
        "enabled": true,
        "id": "543"
    },
    "clipper": {
        "enabled": true,
        "id": "622"
    },
    "cryptoswap": {
        "enabled": true,
        "id": "1750"
    },
    "ellipsis": {
        "enabled": true,
        "id": "238"
    },
    "klex-finance": {
        "enabled": true,
        "id": "2049"
    },
    "koyo": {
        "enabled": true,
        "id": "1766"
    },
    "pyeswap": {
        "enabled": true,
        "id": "2109"
    },
    "smbswap": {
        "enabled": true,
        parentId: "SMBSwap",
        id: "1632",
        protocolsData: {
            v2: {
                enabled: true,
                "id": "1632"
            },
            v3: {
                "enabled": true,
                "id": "2895"
            }
        },
    },
    "sunswap": {
        parentId: "SUN.io",
        "enabled": true,
        "id": "690"
    },
    "whaleswap": {
        "enabled": true,
        "id": "1884"
    },
    "nomiswap": {
        "enabled": true,
        "id": "1823"
    },
    "beethoven-x": {
        "enabled": true,
        "id": "654"
    },
    "defi-swap": {
        "enabled": true,
        "id": "221"
    },
    "wanswap-dex": {
        "enabled": true,
        "id": "186"
    },
    "solarbeam": {
        "enabled": true,
        "id": "551"
    },
    "tomb-swap": {
        parentId: "Tomb Finance",
        "enabled": true,
        "id": "2129"
    },
    "dfx-finance": {
        "enabled": true,
        "id": "366"
    },
    "frax-swap": {
        parentId: "Frax Finance",
        "enabled": true,
        "id": "2121"
    },
    "iziswap": {
        parentId: "iZUMI Finance",
        "enabled": true,
        "id": "1883"
    },
    "tinyman": {
        "enabled": true,
        "id": "680"
    },
    "junoswap": {
        "enabled": true,
        "id": "2052"
    },
    "knightswap-finance": {
        "enabled": true,
        "id": "942"
    },
    "mdex": {
        "enabled": true,
        "id": "334"
    },
    "meshswap": {
        "enabled": true,
        "id": "1726"
    },
    "mm-stableswap-polygon": {
        parentId: "MM Finance",
        "enabled": true,
        "id": "2015"
    },
    "radioshack": {
        "enabled": true,
        "id": "1616"
    },
    "mojitoswap": {
        "enabled": true,
        "id": "1181"
    },
    "yieldfields": {
        "enabled": true,
        "id": "1347"
    },
    "terraswap": {
        "enabled": true,
        disabled: true,
        "id": "491"
    },
    "saros": {
        "enabled": true,
        "id": "1262"
    },
    "vvs-finance": {
        "enabled": true,
        "id": "831"
    },
    "shibaswap": {
        "enabled": true,
        "id": "397"
    },
    "viperswap": {
        disabled: true,
        "enabled": true,
        "id": "313"
    },
    "oolongswap": {
        "enabled": true,
        "id": "794"
    },
    "swapr": {
        "enabled": true,
        "id": "292"
    },
    "cone": {
        "enabled": true,
        "id": "1970"
    },
    "claimswap": {
        "enabled": true,
        "id": "1455"
    },
    "spartacus-exchange": {
        "enabled": true,
        "id": "1755"
    },
    "beamswap": {
        "enabled": true,
        "id": "1289",
        parentId: "BeamSwap",
        protocolsData: {
            "classic": {
                id: "1289",
                enabled: true,
            },
            "stable-amm": {
                id: "2596",
                enabled: true,
            }
        }
    },
    "openleverage": {
        "enabled": true,
        "id": "1208"
    },
    "ubeswap": {
        "enabled": true,
        "id": "488"
    },
    "mobius-money": {
        "enabled": true,
        "id": "588"
    },
    "honeyswap": {
        "enabled": true,
        "id": "271"
    },
    "energiswap": {
        "enabled": true,
        "id": "242"
    },
    "stellaswap": {
        "enabled": true,
        "id": "1274"
    },
    "wagyuswap": {
        "enabled": true,
        "id": "1003"
    },
    "dystopia": {
        "enabled": true,
        "id": "1756"
    },
    "glide-finance": {
        "enabled": true,
        "id": "806"
    },
    "quipuswap": {
        "enabled": true,
        "id": "513"
    },
    "netswap": {
        "enabled": true,
        "id": "1140"
    },
    "astroport": {
        "enabled": true,
        disabled: true,
        "id": "1052"
    },
    "tethys-finance": {
        parentId: "Tethys Finance",
        "enabled": true,
        "id": "1139"
    },
    "mimo": {
        disabled: true,
        "enabled": true,
        "id": "1241"
    },
    "kaidex": {
        "enabled": true,
        "id": "712"
    },
    "lif3-swap": {
        parentId: "Lif3.com",
        "enabled": true,
        "id": "2040"
    },
    "swappi": {
        "enabled": true,
        "id": "1660"
    },
    "yodeswap": {
        "enabled": true,
        "id": "1980"
    },
    "defi-kingdoms": {
        "enabled": true,
        "id": "556"
    },
    "defiplaza": {
        "enabled": true,
        "id": "728"
    },
    "polycat": {
        parentId: "Polycat Finance",
        "enabled": true,
        "id": "499"
    },
    "voltswap": {
        "enabled": true,
        parentId: "Volt Finance",
        protocolsData: {
            v1: {
                "disabled": true,
                "id": "1225",
                displayName: "VoltSwap V1",
                enabled: true,
            },
            v2: {
                id: "2133",
                enabled: true,
            }
        },
        "id": "1225"
    },
    "yokaiswap": {
        "enabled": true,
        "id": "1002"
    },
    "protofi": {
        "enabled": true,
        "id": "1306"
    },
    "voltage": {
        "enabled": true,
        "id": "714"
    },
    "complus-network": {
        "enabled": true,
        "id": "471"
    },
    "padswap": {
        "enabled": true,
        "id": "644"
    },
    "sharkswap": {
        "enabled": true,
        "id": "1828"
    },
    "okcswap": {
        "enabled": true,
        "id": "2099"
    },
    "empiredex": {
        "enabled": true,
        "id": "812"
    },
    "makiswap": {
        disabled: true,
        "enabled": true,
        "id": "378"
    },
    "smartdex": {
        "enabled": true,
        "id": "883"
    },
    "cometh": {
        "enabled": true,
        "id": "261"
    },
    "xexchange": {
        "enabled": true,
        "id": "854"
    },
    "defichain-dex": {
        "enabled": true,
        "id": "1166"
    },
    "blue-planet": {
        parentId: "Planet",
        "enabled": true,
        "id": "2158"
    },
    "aldrin": {
        "enabled": true,
        "id": "739"
    },
    "capricorn-finance": {
        "enabled": true,
        "id": "2128"
    },
    "alex": {
        "enabled": true,
        "id": "1466"
    },
    "step-exchange": {
        "enabled": true,
        "id": "2312"
    },
    "pegasys": {
        "enabled": true,
        "id": "1432"
    },
    "crodex": {
        "enabled": true,
        disabled: true,
        "id": "828"
    },
    "babyswap": {
        "enabled": true,
        "id": "597"
    },
    "lifinity": {
        "enabled": true,
        "id": "2154"
    },
    "vanswap": {
        "enabled": true,
        "id": "2066"
    },
    "dao-swap": {
        parentId: "DAO Maker",
        "enabled": true,
        "id": "2167"
    },
    "jswap": {
        "enabled": true,
        "id": "678"
    },
    "babydogeswap": {
        "enabled": true,
        "id": "2169"
    },
    "wigoswap": {
        "enabled": true,
        "id": "1351"
    },
    "levinswap": {
        "enabled": true,
        "id": "299"
    },
    "templedao-trade": {
        parentId: "Temple DAO",
        "enabled": true,
        "id": "2178"
    },
    "karura-swap": {
        "enabled": true,
        "id": "451"
    },
    "sphynx": {
        "enabled": true,
        "id": "1992"
    },
    "kuswap": {
        "enabled": true,
        "id": "480"
    },
    "paint-swap": {
        "enabled": true,
        "id": "421"
    },
    "benswap": {
        "enabled": true,
        "id": "749"
    },
    "surfswap": {
        "enabled": true,
        "id": "1868",
        parentId: "Surfswap",
        protocolsData: {
            classic: {
                "id": "1868",
                enabled: true,
            },
            "stable-amm": {
                "id": "2598",
                enabled: true,
            }
        }
    },
    "bogged-finance": {
        "enabled": true,
        "id": "617"
    },
    "jetswap": {
        "enabled": true,
        "id": "659"
    },
    "saucerswap": {
        "enabled": true,
        "id": "1979"
    },
    "synthetify": {
        "enabled": true,
        "id": "731"
    },
    "pandora": {
        "enabled": true,
        "id": "1698"
    },
    "paycash": {
        "enabled": true,
        "id": "1452"
    },
    "soy-finance": {
        "enabled": true,
        "id": "1008"
    },
    "photonswap-finance": {
        "enabled": true,
        disabled: true,
        "id": "847"
    },
    "alita-finance": {
        "enabled": true,
        "id": "561"
    },
    "unifi": {
        "enabled": true,
        "id": "646"
    },
    "wineryswap": {
        "enabled": true,
        "id": "2118"
    },
    "huckleberry": {
        parentId: "Huckleberry",
        "enabled": true,
        "id": "630"
    },
    "hakuswap": {
        "enabled": true,
        "id": "1253"
    },
    "leonicornswap": {
        "enabled": true,
        "id": "923"
    },
    "autoshark": {
        "enabled": true,
        "id": "1074"
    },
    "saddle-finance": {
        "enabled": true,
        "id": "202"
    },
    "titano-swych": {
        "enabled": true,
        "id": "2102"
    },
    "stellarx": {
        "enabled": true,
        "id": "972"
    },
    "ultronswap": {
        "enabled": true,
        "id": "2032"
    },
    "humble-defi": {
        "enabled": true,
        "id": "1629"
    },
    "pact": {
        "enabled": true,
        "id": "1468"
    },
    "algofi": {
        parentId: "Algofi",
        "enabled": true,
        "id": "2091"
    },
    "elk": {
        "enabled": true,
        "id": "420"
    },
    "luaswap": {
        "enabled": true,
        "id": "707"
    },
    "unicly": {
        "enabled": true,
        "id": "324"
    },
    "crema-finance": {
        "enabled": true,
        "id": "1412"
    },
    "icecreamswap": {
        "enabled": true,
        "id": "1990"
    },
    "arctic": {
        "enabled": true,
        "id": "2176"
    },
    "swapsicle": {
        "enabled": false,
        "id": "1824"
    },
    "morpheus-swap": {
        "enabled": true,
        "id": "581"
    },
    "fairyswap": {
        parentId: "FairySwap",
        disabled: true,
        "enabled": true,
        "id": "1671"
    },
    "moon-swap": {
        "enabled": true,
        "id": "1942"
    },
    "fx-swap": {
        "enabled": true,
        "id": "2138"
    },
    "pinkswap": {
        "enabled": true,
        "id": "367"
    },
    "spartan": {
        "enabled": true,
        "id": "1246"
    },
    "penguin": {
        "enabled": true,
        "id": "1575"
    },
    "vortex-protocol": {
        "enabled": true,
        "id": "1706"
    },
    "dinosaur-eggs": {
        "enabled": true,
        "id": "695"
    },
    "mcdex": {
        "enabled": false,
        "id": "232"
    },
    "mistswap": {
        "enabled": true,
        "id": "748"
    },
    "bxh": {
        "enabled": true,
        "id": "404"
    },
    "auraswap": {
        "enabled": true,
        "id": "1859"
    },
    "carbonswap": {
        "enabled": true,
        "id": "670"
    },
    "pangea-swap": {
        "enabled": true,
        "id": "1987"
    },
    "gravity-finance": {
        "enabled": true,
        "id": "351"
    },
    "4swap": {
        parentId: "Pando",
        "enabled": true,
        "id": "951"
    },
    "gravis": {
        "enabled": true,
        "id": "2195"
    },
    "tetu": {
        parentId: "parent#tetu",
        "enabled": true,
        "id": "2203"
    },
    "muesliswap": {
        "enabled": true,
        "id": "747"
    },
    "gin-finance": {
        "enabled": true,
        "id": "1795"
    },
    "ferro": {
        "enabled": true,
        "id": "1882"
    },
    "increment-swap": {
        parentId: "incrementFinance",
        "enabled": true,
        "id": "1907"
    },
    "chainge-finance": {
        "enabled": true,
        "id": "704"
    },
    "minerswap": {
        "enabled": false,
        "id": "2233"
    },
    "wavelength-dao": {
        "enabled": true,
        "id": "2220"
    },
    "thorswap": {
        "enabled": true,
        "id": "2287"
    },
    "metatdex": {
        "enabled": true,
        "id": "2253"
    },
    "goosefx": {
        "enabled": true,
        "id": "2175"
    },
    "3xcalibur": {
        "enabled": true,
        "id": "2283"
    },
    "kava-swap": {
        "enabled": true,
        "id": "618"
    },
    "emdx": {
        "enabled": false,
        "id": "2299"
    },
    "cetus": {
        "enabled": true,
        "id": "2289"
    },
    "opx-finance": {
        "enabled": true,
        "id": "2256"
    },
    "camelot": {
        parentId: "Camelot",
        "enabled": true,
        "id": "2307"
    },
    "openbook": {
        "enabled": true,
        "id": "2322"
    },
    "orderly-network": {
        "enabled": true,
        "id": "2264"
    },
    "ghostmarket": {
        "enabled": false,
        "id": "2290"
    },
    "synfutures": {
        "enabled": false,
        "id": "2328"
    },
    "xswap-protocol": {
        "enabled": true,
        "id": "2145"
    },
    "kperp-exchange": {
        "enabled": false,
        "id": "2326"
    },
    "jojo": {
        "enabled": false,
        "id": "2320"
    },
    "vapordex": {
        "enabled": true,
        "id": "2342"
    },
    "10kswap": {
        "enabled": true,
        "id": "2345"
    },
    "solarflare": {
        "enabled": true,
        "id": "1269"
    },
    "sundaeswap": {
        "enabled": false,
        "id": "1302"
    },
    "wx.network": {
        "enabled": true,
        "id": "614"
    },
    "myswap": {
        "enabled": true,
        "id": "2367"
    },
    "liquidswap": {
        "enabled": true,
        "id": "2210"
    },
    "rubicon": {
        "enabled": true,
        "id": "799"
    },
    "aux-exchange": {
        disabled: true,
        "enabled": true,
        "id": "2213"
    },
    "wojak-finance": {
        "enabled": true,
        "id": "2113"
    },
    "ampleswap": {
        "enabled": true,
        "id": "2383"
    },
    "heliswap": {
        "enabled": true,
        "id": "2244"
    },
    "wingswap": {
        "enabled": true,
        "id": "976"
    },
    "zircon-gamma": {
        "enabled": true,
        "id": "2143"
    },
    "lumenswap": {
        "enabled": true,
        "id": "882"
    },
    "el-dorado-exchange": {
        "enabled": true,
        "id": "2356",
        "protocolsData": {
            "swap": {
                "id": "2356",
                "enabled": true,
                "category": "Dexes",
                "displayName": "El Dorado Exchange - SWAP"
            }
        },
    },
    "mummy-finance": {
        "enabled": true,
        "id": "2361"
    },
    "level-finance": {
        "enabled": true,
        "id": "2395"
    },
    "hyperjump": {
        "enabled": true,
        "id": "317"
    },
    "kokonut-swap": {
        "enabled": true,
        "id": "1790"
    },
    "demex": {
        "enabled": true,
        "id": "2001"
    },
    "syrup-finance": {
        disabled: true,
        "enabled": true,
        "id": "2401"
    },
    "axial": {
        disabled: true,
        "enabled": true,
        "id": "845"
    },
    "exinswap": {
        "enabled": true,
        "id": "1179"
    },
    "darkness": {
        "enabled": true,
        "id": "1555"
    },
    "zilswap": {
        "enabled": true,
        "id": "303"
    },
    "thena": {
        name: "Thena V1",
        displayName: "Thena V1",
        "enabled": true,
        "id": "2417"
    },
    "ttswap": {
        "enabled": true,
        "id": "705"
    },
    "aequinox": {
        "enabled": true,
        "id": "2090"
    },
    "vexchange": {
        "enabled": true,
        "id": "963"
    },
    "metropolis": {
        disabled: true,
        "enabled": true,
        "id": "2452"
    },
    "verse": {
        "enabled": true,
        "id": "1732"
    },
    "equalizer-exchange": {
        "enabled": true,
        "id": "2332"
    },
    "canto-dex": {
        "enabled": true,
        "id": "1985"
    },
    "solidlydex": {
        "enabled": true,
        "id": "2400"
    },
    "defibox": {
        "enabled": true,
        "id": "507"
    },
    "shell-protocol": {
        "enabled": true,
        "id": "133"
    },
    "archly-finance": {
        "enabled": true,
        "id": "2317"
    },
    "zyberswap": {
        "enabled": true,
        "id": "2467",
        parentId: "ZyberSwap",
        protocolsData: {
            "v2": {
                enabled: true,
                id: "2467"
            },
            "v3": {
                enabled: true,
                id: "2602"
            },
            "stable": {
                enabled: true,
                id: "2530"
            }
        }
    },
    "hermes-protocol": {
        "enabled": true,
        "id": "1384"
    },
    "hiveswap": {
        "enabled": true,
        "id": "2485"
    },
    "plenty": {
        "enabled": true,
        "id": "490"
    },
    "jediswap": {
        "enabled": true,
        "id": "2344"
    },
    "solidlizard": {
        "enabled": true,
        "id": "2528"
    },
    "onepunch": {
        "enabled": true,
        "id": "2534"
    },
    "thorwallet": {
        "enabled": false,
        "id": "2533"
    },
    "helix": {
        "enabled": true,
        "id": "2259"
    },
    "ashswap": {
        "enabled": true,
        "id": "2551"
    },
    "veniceswap": {
        enabled: true,
        "id": "2550"
    },
    "oraidex": {
        enabled: true,
        "id": "2564"
    },
    "subzero-zswap": {
        enabled: true,
        "id": "2556"
    },
    "megaton-finance": {
        enabled: true,
        "id": "2540"
    },
    "bakeryswap": {
        "enabled": false,
        "id": "602"
    },
    "bisq": {
        "enabled": true,
        "id": "2588"
    },
    "dexalot": {
        "enabled": true,
        "id": "2589"
    },
    "metavault.trade": {
        "enabled": true,
        "id": "1801"
    },
    "1inch": {
        enabled: false,
        id: "189"
    },
    /* "carthage": {
        enabled: false,
        id: 1944
    }, */
    "dexible": {
        enabled: false,
        id: "2249",
        parentId: "2249",
        protocolsData: {
            Dexible_v2: {
                id: "2249",
                enabled: false
            }
        }
    },
    "alienfi": {
        enabled: true,
        id: "2603"
    },
    "oswap": {
        parentId: "Oswap",
        enabled: true,
        id: "1778"
    },
    "maverick": {
        enabled: true,
        id: "2644"
    },
    "integral": {
        enabled: true,
        id: "291"
    },
    "archerswap": {
        enabled: true,
        id: "2648"
    },
    "ponytaswap": {
        enabled: true,
        id: "2657"
    },
    "equilibre": {
        enabled: true,
        id: "2586"
    },
    "wemix.fi": {
        parentId: "WEMIX.FI",
        enabled: true,
        id: "2674"
    },
    "ramses-exchange": {
        parentId: "Ramses Exchange",
        enabled: true,
        id: "2675"
    },
    "zigzag": {
        enabled: true,
        id: "800"
    },
    "mute.io": {
        enabled: true,
        id: "2727"
    },
    "dexter": {
        enabled: true,
        id: "2737"
    },
    "swapline": {
        "enabled": true,
        "id": "2731"
    },
    "hadouken-amm": {
        parentId: "Hadouken Finance",
        "enabled": true,
        "id": "2748"
    },
    "acala-swap": {
        "enabled": true,
        "id": "1847"
    },
    "maia-v3": {
        "enabled": true,
        "id": "2760"
    },
    "morphex": {
        parentId: "2662",
        "protocolsData": {
            "swap": {
                "id": "2662",
                "enabled": true,
                "category": "Dexes",
                "displayName": "Morphex - SWAP"
            }
        },
        "enabled": true,
        "id": "2662"
    },
    "kyotoswap": {
        "enabled": true,
        "id": "2350"
    },
    "SmarDex": {
        "enabled": true,
        "id": "2695"
    },
    "mm-finance-arbitrum": {
        parentId: "MM Finance",
        "enabled": true,
        "id": "2754"
    },
    "native": {
        "enabled": true,
        "id": "2803"
    },
    "spacedex": {
        parentId: "2814",
        "protocolsData": {
            "swap": {
                "id": "2814",
                "enabled": true,
                "category": "Dexes",
                "displayName": "SpaceDex - SWAP"
            }
        },
        "enabled": true,
        "id": "2814"
    },
    "camelot-v3": {
        parentId: "Camelot",
        "enabled": true,
        "id": "2792"
    },
    "satoshiswap": {
        "enabled": true,
        "id": "2827"
    },
    "wagmi": {
        "enabled": true,
        "id": "2837"
    },
    "auragi": {
        "enabled": true,
        "id": "2773"
    },
    "covo-v2": {
        "enabled": true,
        "id": "2730",
        parentId: "Covo Finance",
        "protocolsData": {
            "swap": {
                "id": "2730",
                "enabled": true,
                "category": "Dexes",
                "displayName": "Covo V2 - SWAP",
                cleanRecordsConfig: {
                    genuineSpikes: true
                }
            }
        },
    },
    "polkaswap": {
        "enabled": true,
        "id": "713"
    },
    "thena-v3": {
        parentId: "Thena",
        "enabled": true,
        "id": "2864"
    },
    "astroswap": {
        "enabled": true,
        "id": "1368"
    },
    "merlin": {
        "enabled": true,
        "id": "2849"
    },
    "tealswap": {
        "enabled": true,
        "id": "2874"
    },
    "hydradex": {
        "enabled": true,
        "id": "1673",
        protocolsData: {
            v2: {
                "enabled": true,
                "id": "1673",
                displayName: "Hydradex V2"
            },
            v3: {
                "enabled": true,
                "id": "2910",
                displayName: "Hydradex V3"
            }
        }
    },
    "pheasantswap": {
        "enabled": true,
        "id": "2896"
    },
    "velocimeter-v2": {
        parentId: "Velocimeter",
        "enabled": true,
        "id": "2668"
    },
    "joe-v2.1": {
        parentId: "Trader Joe",
        "enabled": true,
        "id": "2906",
        cleanRecordsConfig: {
            genuineSpikes: {
                "1682899200": true,
                "1682812800": true
            },
        }
    },
    "chronos": {
        "enabled": true,
        "id": "2907"
    },
    "stellaswap-v3": {
        "enabled": true,
        "id": "2934"
    },
    "e3": {
        "enabled": true,
        "id": "2926"
    },
    "clober": {
        "enabled": true,
        "id": "2541"
    },
    "airswap": {
        "enabled": true,
        "id": "2954"
    },
    "ArbitrumExchange": {
        "enabled": true,
        "id": "2685",
        protocolsData: {
            v2: {
                "enabled": true,
                "id": "2685",
                displayName: "Arbitrum Exchange V2"
            },
            v3: {
                "enabled": true,
                "id": "2962",
                displayName: "Arbitrum Exchange V3"
            }
        }
    },
    "vertex-protocol": {
        "enabled": true,
        "id": "2899",
        "protocolsData": {
            "swap": {
                "id": "2899",
                "enabled": true,
                "category": "Dexes"
            }
        },
    },
    "lighter": {
        "enabled": true,
        "id": "2636"
    },
    "fulcrom-finance": {
        "enabled": true,
        "id": "2641",
        "protocolsData": {
            "swap": {
                "id": "2641",
                "enabled": true,
                "category": "Dexes",
                "displayName": "Fulcrom - SWAP",
            }
        },
    },
    "veax": {
        "enabled": true,
        "id": "2928"
    },
    "dpex": {
        "enabled": true,
        "id": "2488"
    },
    "forge": {
        "enabled": true,
        "id": "2804"
    },
    "interest-protocol": {
        "enabled": true,
        "id": "3015"
    },
    "fxdx": {
        "enabled": true,
        "id": "3036"
    },
    "sunswap-v2": {
        parentId: "SUN.io",
        "enabled": true,
        "id": "3005"
    },
    "pulsex-v1": {
        parentId: "PulseX",
        "enabled": true,
        "id": "2995",
        cleanRecordsConfig: {
            genuineSpikes: {
                "1686009600": true,
            },
        }
    },
    "pulsex-v2": {
        parentId: "PulseX",
        "enabled": true,
        "id": "3060",
        cleanRecordsConfig: {
            genuineSpikes: {
                "1686009600": true,
            },
        }
    },
    "fathom-dex": {
        "enabled": true,
        "id": "3077"
    },
    "heraswap": {
        "enabled": true,
        "id": "3089"
    },
    "miaswap": {
        "enabled": true,
        "id": "3090"
    },
    "hummus": {
        "enabled": true,
        "id": "1715"
    },
    "tokenlon": {
        "enabled": true,
        "id": "405"
    },
    "ramses-exchange-v2": {
        parentId: "Ramses Exchange",
        enabled: true,
        id: "3096"
    },
    "MantisSwap": {
        enabled: true,
        id: "2702"
    },
    "abcdefx": {
        enabled: true,
        id: "2376"
    },
    "thalaswap": {
        enabled: true,
        id: "2795"
    },
    "pearlfi": {
        enabled: true,
        id: "3121"
    },
    "ambient": {
        enabled: true,
        id: "3104"
    },
    "doveswap": {
        "enabled": true,
        "id": "2763",
        parentId: "Dove Swap",
        "protocolsData": {
            "v3": {
                "id": "2809",
                "enabled": true,
            }
        },
    },
    "litx": {
        enabled: true,
        id: "3159"
    }
} as AdaptorsConfig
