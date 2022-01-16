import react from "react"
import { Plans } from "../shared/interfaces"
export function calc1(minutes: number, plan: number, rate: number) {
    var gap = minutes - plan

    var value = (plan * rate) + (gap * (rate + rate / 10))
    return value.toFixed(2)
}
export function calc2(minutes: number, rate: number) {

    return (minutes * (rate + rate / 10)).toFixed(2)
}
export function Value(props: { minutes: string, plans: Plans, number: string | null, plan: string }) {
    var minutes: number = parseInt(props.minutes)
    var plan: number = parseInt(props.plan)
    var rate: number = 0;
    props.plans.to.map((value) => { if (value.DDD === props.number) { rate = value.value } })
    var value: number | string;
    if (plan >= minutes) {
        value = (minutes * rate).toFixed(2)
    } else {
        value = calc1(minutes, plan, rate)
    }
    return (
        <div className="rounded-md shadow-sm m-3 appear px-5">
            <div>
                <label className="block text-xl font-medium text-gray-700">Com o <span className="font-bold text-blue-600 text-xl bg-blue-300 border border-blue-400 ring-2 px-2 rounded-lg">Fale mais {props.plan}</span>:</label>
                <p className="text-green-600 text-4xl font-bold">R$ {value}</p>
            </div>
            <div>
                <label className="block text-xs font-medium text-gray-700">Sem o fale mais {props.plan}:</label>
                <p className="text-red-600 text-lg">R$ {calc2(minutes, rate)}</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Taxa:</label>
                <p className="block text-xs font-medium text-gray-700">R$ {rate}/minuto</p>
            </div>
        </div>
    )
}