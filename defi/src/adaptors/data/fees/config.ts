import { AdaptorsConfig } from "../types"

export default {
    "aave": {
        "enabled": true,
        "startFrom": 1647648000,
        "id": "111",
        parentId: "AAVE",
        protocolsData: {
            /*  v1: {
                 "id": "1838",
                 enabled: false,
             }, */
            v2: {
                "id": "111",
                enabled: true,
            },
            v3: {
                "id": "1599",
                enabled: true,
            }
        }
    },
    "angle": {
        "enabled": true,
        "id": "756"
    },
    "balancer": {
        "enabled": true,
        "id": "116",
        parentId: "Balancer",
        protocolsData: {
            v1: {
                id: "116",
                enabled: true,
                displayName: "Balancer V1"
            },
            v2: {
                id: "2611",
                enabled: true,
                displayName: "Balancer V2"
            }
        }
    },
    "biswap": {
        "enabled": true,
        "id": "373"
    },
    "bitcoin": {
        "enabled": true,
        "id": "1"
    },
    "bsc": {
        "enabled": true,
        "id": "1839"
    },
    "compound": {
        parentId: "Compound Finance",
        "enabled": true,
        "id": "114"
    },
    "convex": {
        "enabled": true,
        "id": "319"
    },
    "curve": {
        "enabled": true,
        "id": "3"
    },
    "doge": {
        "enabled": true,
        "id": "74"
    },
    "ethereum": {
        "enabled": true,
        "id": "1027"
    },
    "frax-swap": {
        parentId: "Frax Finance",
        "enabled": true,
        "id": "2121"
    },
    "gmx": {
        "enabled": true,
        "id": "337",
        parentId: "337",
        protocolsData: {
            "swap": {
                "id": "337",
                "enabled": true,
                "category": "Dexes",
                "displayName": "GMX - SWAP"
            },
            "derivatives": {
                displayName: "GMX - Derivatives",
                "id": "337",
                "enabled": true
            }
        },
    },
    "lido": {
        "enabled": true,
        "id": "182"
    },
    "litecoin": {
        "enabled": true,
        "id": "2"
    },
    "looksrare": {
        "enabled": true,
        "id": "1229"
    },
    "makerdao": {
        "enabled": true,
        "id": "118"
    },
    "mooniswap": {
        "enabled": true,
        "id": "1053"
    },
    "opensea": {
        "enabled": true,
        "id": "2258",
        parentId: "OpenSea",
        protocolsData: {
            v1: {
                "id": "2630",
                enabled: true,
                displayName: "Opensea V1"
            },
            v2: {
                "id": "2631",
                enabled: true,
                displayName: "Opensea V2"
            },
            seaport: {
                "id": "2258",
                enabled: true,
                displayName: "Opensea Seaport"
            }
        }
    },
    "osmosis": {
        "enabled": true,
        "id": "383"
    },
    "pancakeswap": {
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
                "id": "2529"
            },
            v3: {
                "enabled": true,
                "id": "2769"
            }
        },
        "enabled": true,
        "id": "194"
    },
    "pangolin": {
        "enabled": true,
        "id": "246"
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
                id: "2239",
                enabled: true,
            }
        }
    },
    "raydium": {
        "enabled": true,
        "id": "214"
    },
    "spookyswap": {
        "enabled": true,
        "id": "302"
    },
    "sushiswap": {
        "enabled": true,
        "id": "119",
        parentId: "Sushi",
        protocolsData: {
            classic: {
                id: "119",
                enabled: true,
            },
            trident: {
                id: "2152",
                enabled: true,
            },
            v3: {
                enabled: true,
                id: "2776"
            }
        }
    },
    "synthetix": {
        "enabled": true,
        "id": "115"
    },
    "tarot": {
        "enabled": true,
        "id": "434"
    },
    "traderjoe": {
        "enabled": true,
        "id": "468",
        parentId: "Trader Joe",
        protocolsData: {
            v1: {
                id: "468",
                enabled: true,
            },
            v2: {
                id: "2393",
                enabled: true,
            }
        }
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
    "velodrome": {
        "enabled": true,
        "id": "1799"
    },
    "wombat-exchange": {
        "enabled": true,
        "id": "1700"
    },
    "woofi": {
        parentId: "WOOFi",
        "enabled": true,
        "id": "1461"
    },
    "metavault.trade": {
        "enabled": true,
        "id": "1801"
    },
    "aurora": {
        "enabled": true,
        "id": "14803"
    },
    "celo": {
        "enabled": true,
        "id": "5567"
    },
    "optimism": {
        "category": "Rollup",
        "enabled": true,
        "id": "11840"
    },
    "moonbeam": {
        "enabled": true,
        "id": "6836"
    },
    "moonriver": {
        "enabled": true,
        "id": "9285"
    },
    "tron": {
        "enabled": true,
        "id": "1958"
    },
    "arbitrum": {
        "category": "Rollup",
        "enabled": true,
        "startFrom": 1660608000,
        "id": "42161"
    },
    "avalanche": {
        "enabled": true,
        "id": "5805"
    },
    "canto": {
        "enabled": true,
        "id": "21516"
    },
    "cardano": {
        "enabled": false,
        "id": "2010"
    },
    "cronos": {
        "enabled": true,
        "id": "3635"
    },
    "klaytn": {
        "enabled": false,
        "id": "4256"
    },
    "dodo": {
        "enabled": true,
        "id": "146"
    },
    "fantom": {
        "enabled": true,
        "id": "3513"
    },
    "mixin": {
        "enabled": false,
        "id": "2349"
    },
    "polygon": {
        "enabled": true,
        "id": "3890"
    },
    "solana": {
        "enabled": true,
        "id": "5426"
    },
    "xdai": {
        "enabled": true,
        "id": "1659"
    },
    "abracadabra": {
        "enabled": true,
        "id": "347"
    },
    "liquity": {
        "enabled": true,
        "id": "270"
    },
    "geist-finance": {
        "enabled": true,
        "id": "643"
    },
    "boba": {
        "enabled": false,
        "id": "14556"
    },
    "mojitoswap": {
        "enabled": true,
        "id": "1181"
    },
    "mimo": {
        "enabled": true,
        "id": "1241"
    },
    "junoswap": {
        "enabled": true,
        "id": "2052"
    },
    "honeyswap": {
        "enabled": true,
        "id": "271"
    },
    "solarbeam": {
        "enabled": true,
        "id": "551"
    },
    "spiritswap": {
        parentId: "SpiritSwap",
        "enabled": true,
        "id": "311"
    },
    "apeswap": {
        parentId: "ApeSwap",
        "enabled": true,
        "id": "398"
    },
    "nomiswap": {
        "enabled": true,
        "id": "1823"
    },
    "stellaswap": {
        "enabled": true,
        "id": "1274"
    },
    "lifinity": {
        "enabled": true,
        "id": "2154"
    },
    "shibaswap": {
        "enabled": true,
        "id": "397"
    },
    "perp88": {
        "enabled": true,
        "id": "2296"
    },
    "mux": {
        "name": "MUX Protocol",
        "enabled": true,
        "id": "2254"
    },
    "emdx": {
        "enabled": true,
        "id": "2299"
    },
    "defi-swap": {
        "enabled": true,
        "id": "221"
    },
    "babydogeswap": {
        "enabled": true,
        "id": "2169"
    },
    "stargate": {
        "enabled": true,
        "id": "1571"
    },
    "mm-stableswap-polygon": {
        parentId: "MM Finance",
        "enabled": true,
        "id": "2015"
    },
    "elk": {
        "enabled": true,
        "id": "420"
    },
    "lyra": {
        "enabled": true,
        "id": "503"
    },
    "radioshack": {
        "enabled": true,
        "id": "1616"
    },
    "valas-finance": {
        "enabled": true,
        "id": "1584"
    },
    "gains-network": {
        "enabled": true,
        "id": "1018"
    },
    "ghostmarket": {
        category: "NFT Marketplace",
        allAddresses: [
            "neo:0x9b049f1283515eef1d3f6ac610e1595ed25ca3e9",
            "ethereum:0x35609dc59e15d03c5c865507e1348fa5abb319a8",
            "polygon:0x6a335ac6a3cdf444967fe03e7b6b273c86043990",
            "avax:0x0b53b5da7d0f275c31a6a182622bdf02474af253",
            "bsc:0x0b53b5da7d0f275c31a6a182622bdf02474af253"
        ],
        "enabled": true,
        "id": "2290"
    },
    "moonwell-artemis": {
        "enabled": true,
        "id": "1853"
    },
    "moonwell-apollo": {
        "enabled": true,
        "id": "1401"
    },
    "kperp-exchange": {
        "enabled": true,
        "id": "2326"
    },
    "premia": {
        "enabled": true,
        "id": "381"
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
    "llamalend": {
        "enabled": true,
        "id": "2252"
    },
    "0vix": {
        "enabled": true,
        "id": "1614"
    },
    "mummy-finance": {
        "enabled": true,
        "id": "2361"
    },
    "bluemove": {
        "enabled": true,
        "id": "2396"
    },
    "hegic": {
        "enabled": true,
        "id": "128"
    },
    "el-dorado-exchange": {
        "enabled": true,
        "id": "2356"
    },
    "gearbox": {
        "enabled": true,
        "id": "1108"
    },
    "predy-finance": {
        "enabled": true,
        "id": "1657",
        parentId: "Predy Finance",
        protocolsData: {
            "v3": {
                id: "3074",
                enabled: true
            },
            "v320": {
                id: "1657",
                enabled: true
            }
        }
    },
    "verse": {
        "enabled": true,
        "id": "1732"
    },
    "level-finance": {
        "enabled": true,
        "id": "2395"
    },
    "blur": {
        "enabled": true,
        "id": "2414"
    },
    "solidlydex": {
        "enabled": true,
        "id": "2400"
    },
    "archly-finance": {
        "enabled": true,
        "id": "2317"
    },
    "stride": {
        "enabled": true,
        "id": "2251"
    },
    "plenty": {
        "enabled": true,
        "id": "490"
    },
    "firebird-finance": {
        "enabled": true,
        "id": "384"
    },
    "x2y2": {
        "enabled": true,
        "id": "1431"
    },
    "buffer": {
        "enabled": true,
        "id": "1304"
    },
    "betswirl": {
        "enabled": true,
        "id": "1911"
    },
    "zonic": {
        "enabled": true,
        "id": "2532"
    },
    "covo-finance": {
        parentId: "Covo Finance",
        "enabled": false,
        "id": "2525"
    },
    "nftearth": {
        "enabled": true,
        "id": "2546"
    },
    "liquid-bolt": {
        "enabled": true,
        "id": "2513"
    },
    "frax-ether": {
        parentId: "Frax Finance",
        enabled: true,
        "id": "2221"
    },
    "frax-fpi": {
        enabled: true,
        parentId: "Frax Finance",
        id: "2607"
    },
    "zora": {
        enabled: true,
        id: "2610"
    },
    "solidlizard": {
        enabled: true,
        id: "2528"
    },
    "zyberswap": {
        enabled: true,
        id: "2467",
        parentId: "ZyberSwap",
        protocolsData: {
            "v2": {
                id: "2467",
                enabled: true
            },
            "v3": {
                id: "2602",
                enabled: true
            },
            "stable": {
                id: "2530",
                enabled: true
            }
        }
    },
    "cow-protocol": {
        enabled: true,
        id: "2643"
    },
    "maverick": {
        enabled: true,
        id: "2644"
    },
    "equalizer-exchange": {
        enabled: true,
        id: "2332"
    },
    "camelot": {
        parentId: "Camelot",
        enabled: true,
        id: "2307"
    },
    "thena": {
        name: "Thena V1",
        displayName: "Thena V1",
        enabled: true,
        id: "2417"
    },
    "paraswap": {
        enabled: true,
        id: "894",
        cleanRecordsConfig: {
            genuineSpikes: {
                "1684800000": true
            },
        }
    },
    "ramses-exchange": {
        parentId: "Ramses Exchange",
        enabled: true,
        id: "2675"
    },
    "blastapi": {
        enabled: true,
        id: "2734"
    },
    "get-protocol": {
        enabled: true,
        id: "2735"
    },
    "radiant": {
        enabled: true,
        id: "2706"
    },
    "chainlink-vrf-v1": {
        enabled: true,
        displayName: "Chainlink VRF V1",
        id: "2623",
    },
    "chainlink-vrf-v2": {
        enabled: true,
        displayName: "Chainlink VRF V2",
        id: "2623"
    },
    "chainlink-keepers": {
        enabled: true,
        displayName: "Chainlink Keepers",
        id: "2623"
    },
    "chainlink-requests": {
        enabled: true,
        displayName: "Chainlink Requests",
        id: "2623"
    },
    "aura": {
        enabled: true,
        id: "1918"
    },
    "synapse": {
        enabled: true,
        id: "657"
    },
    "plexus": {
        enabled: true,
        id: "2740"
    },
    "vela": {
        enabled: true,
        id: "2548"
    },
    "equilibre-exchange": {
        enabled: true,
        id: "2586"
    },
    "waves": {
        enabled: true,
        id: "1274"
    },
    "maia-v3": {
        "enabled": true,
        "id": "2760"
    },
    "morphex": {
        "enabled": true,
        "id": "2662"
    },
    "kyotoswap": {
        "enabled": true,
        "id": "2350"
    },
    "sonne-finance": {
        "enabled": true,
        "id": "2142"
    },
    "SmarDex": {
        "enabled": true,
        "id": "2695"
    },
    "ens": {
        "enabled": true,
        "id": "2519"
    },
    "azuro": {
        "enabled": true,
        "id": "1892"
    },
    "covo-v2": {
        "enabled": true,
        "id": "2730",
        parentId: "Covo Finance",
        cleanRecordsConfig: {
            genuineSpikes: true
        }
    },
    "camelot-v3": {
        parentId: "Camelot",
        "enabled": true,
        "id": "2792"
    },
    "auragi": {
        "enabled": true,
        "id": "2773"
    },
    "vesta-finance": {
        "enabled": true,
        "id": "1444"
    },
    "thena-v3": {
        parentId: "Thena",
        "enabled": true,
        "id": "2864"
    },
    "merlin": {
        "enabled": true,
        "id": "2849"
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
    "pika-protocol": {
        "enabled": true,
        "id": "916"
    },
    "chronos": {
        "enabled": true,
        "id": "2907"
    },
    "unidex": {
        "enabled": true,
        "id": "1833"
    },
    "joe-v2.1": {
        parentId: "Trader Joe",
        "enabled": true,
        "id": "2906"
    },
    "e3": {
        "enabled": true,
        "id": "2926"
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
    "across": {
        "enabled": true,
        "id": "1207"
    },
    "gnd-protocol": {
        "enabled": true,
        "id": "2968"
    },
    "kwenta": {
        "enabled": true,
        "id": "2981"
    },
    "gamma": {
        "enabled": true,
        "id": "355"
    },
    "fulcrom-finance": {
        "enabled": true,
        "id": "2641"
    },
    "veax": {
        "enabled": true,
        "id": "2928"
    },
    "maestro": {
        "enabled": true,
        "id": "3019"
    },
    "forge": {
        "enabled": true,
        "id": "2804"
    },
    "metamask": {
        "enabled": true,
        "id": "3031"
    },
    "rainbow-wallet": {
        "enabled": true,
        "id": "3038"
    },
    "lybra-finance": {
        "enabled": true,
        "id": "2904"
    },
    "houdini-swap": {
        "enabled": true,
        "id": "3041"
    },
    "unlimited-network": {
        "enabled": true,
        "id": "3055"
    },
    "cryptex-v2": {
        parentId: "Cryptex Finance",
        "enabled": true,
        "id": "3051"
    },
    "usdo": {
        "enabled": true,
        "id": "3098"
    },
    "unibot": {
        "enabled": true,
        "id": "3106"
    },
    "ramses-exchange-v2": {
        parentId: "Ramses Exchange",
        enabled: true,
        id: "3096"
    },
    "abcdefx": {
        enabled: true,
        id: "2376"
    },
    "liondex": {
        enabled: true,
        id: "2898"
    },
    "stealcam": {
        enabled: true,
        id: "3123"
    },
    "pearlfi": {
        enabled: true,
        id: "3121"
    },
    "scatter": {
        enabled: true,
        id: "3146"
    },
    "alchemix": {
        enabled: true,
        id: "204"
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
    "foundation": {
        enabled: true,
        id: "3168"
    }
} as AdaptorsConfig
