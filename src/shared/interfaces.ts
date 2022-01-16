export interface Plans {
    origin?: string,
    receiving?: string,
    to: Array<{ DDD: string, value: number }>,
}
export interface State { first: string | null, second: string | null, numbers: Array<string> }
export interface Props {
    selectNumberOne: (arg0: string | null) => void,
    selectNumberTwo: (arg0: string | null) => void,
    selectPlan: (arg0: string) => void,
    invert: () => void,
    selectMinutes: (arg0: string) => void,
    minutes: string,
    plans: Plans[],
    numbers: State,
    planSelected: string,
}
