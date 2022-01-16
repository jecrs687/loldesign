import { Plans } from "./interfaces"
export const PLANS: Array<Plans> = [
    {
        origin: "011",
        to: [
            { DDD: "016", value: 1.9 },
            { DDD: "017", value: 1.7 },
            { DDD: "018", value: 0.9 }
        ],
    },
    {
        receiving: "011",
        to: [
            { DDD: "016", value: 1.7 },
            { DDD: "017", value: 2.7 },
            { DDD: "018", value: 1.9 }
        ],
    },

]

