import { Component } from "react"

export function Buttons(props: { selectPlan: (arg0: string) => void, plan: string }) {
    return (
        <>
            <button onClick={() => props.selectPlan("30")} type="button" className={`py-2 px-2 lg:px-4 text-sm font-small  rounded-l-lg border  ${props.plan == "30" ? "bg-blue-700 ring-2 " : "bg-blue-600"} border-white text-white hover:text-white hover:bg-blue-700 `}>
                faleMais 30
            </button>
            <button type="button" onClick={() => props.selectPlan("60")} className={`py-2 px-2 lg:px-4  text-sm font-small rounded border   ${props.plan == "60" ? "bg-blue-700 ring-2 " : "bg-blue-600"}  border-white text-white hover:text-white hover:bg-blue-700 `}>
                faleMais 60
            </button>
            <button type="button" onClick={() => props.selectPlan("120")} className={`py-2 px-2 lg:px-4  text-sm font-small rounded-r-lg border ${props.plan == "120" ? "bg-blue-700 ring-2 " : "bg-blue-600"}  border-white text-white hover:text-white hover:bg-blue-700 `}>
                faleMais 120
            </button>
        </>
    )
}