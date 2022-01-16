import { Component } from "react"
import { connect } from "react-redux"
import { selectNumberOne, selectNumberTwo, invert, selectPlan, selectMinutes } from "../redux/ActionCreators"
import { Plans, State, Props } from "../shared/interfaces"
import { RefreshIcon } from "@heroicons/react/solid"
import { Select } from "./Select"
import { Buttons } from "./Buttons"
import { First } from "../shared/nums"
import { Value } from "./Value"

const mapStateToProps = (state: { plans: Plans[]; numbers: State, planSelected: string, minutes: string }) => ({ plans: state.plans, numbers: state.numbers, planSelected: state.planSelected, minutes: state.minutes })

const mapDispatchToProps = (dispatch: (arg0: any | null) => void) => ({
    selectNumberOne: (number: string | null) => { dispatch(selectNumberOne(number)) },
    selectNumberTwo: (number: string | null) => { dispatch(selectNumberTwo(number)) },
    selectPlan: (plan: string) => { dispatch(selectPlan(plan)) },
    selectMinutes: (minutes: string) => { dispatch(selectMinutes(minutes)) },
    invert: () => { dispatch(invert()) }
});
function Selects(props: { selectNumberOne: any, selectNumberTwo: any, numbers: State }) {
    return (
        <>
            <div className="">
                <Select receiving={true} selectNumberOne={props.selectNumberOne} selectNumberTwo={props.selectNumberTwo} numbers={props.numbers} />
            </div>
            {props.numbers.first ?
                <div className="mt-2">
                    <Select receiving={false} selectNumberOne={props.selectNumberOne} selectNumberTwo={props.selectNumberTwo} numbers={props.numbers} />
                </div> : null}
        </>
    )
}

class Main extends Component<Props> {
    render() {
        return (
            <>
                <div className="text-4xl font-bold text-gray-600 ">Quanto custa?</div>

                <div className="min-h-[60vh] w-full lg:bg-blue-200 bg-blue-100  lg:w-1/2 flex items-center lg:rounded-lg justify-center py-12 px-4 sm:px-6 lg:px-8 ">
                    <div className="max-w-md w-full  space-y-4 min-h-[60vh]  ">
                        <div className=" flex items-center justify-center px-6 mt-5">
                            <div className="max-w-md w-full mr-4 ">
                                <Selects selectNumberOne={this.props.selectNumberOne} selectNumberTwo={this.props.selectNumberTwo} numbers={this.props.numbers} />
                            </div>
                            {this.props.numbers.first ?
                                <div className="appear flex items-center justify-center ">
                                    <button onClick={this.props.invert} type="button" className="py-2 px-4 group  text-sm font-small rounded-l-lg rounded-r-md border border-blue-900 hover:bg-blue-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-200 focus:bg-blue-700 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-blue-600 dark:focus:bg-blue-700">
                                        <RefreshIcon className="h-5 w-5 text-gray-400 group-focus:text-gray-100 group-hover:text-gray-100" aria-hidden="true" />
                                    </button>
                                </div> : null}
                        </div>
                        {this.props.numbers.second ? <div className="rounded-md  w-full shadow-sm m-2  px-4 appear ">
                            <label className="block text-base font-medium text-gray-700 ">Selecione seu plano:<span className='text-red-500'>*</span></label>
                            <div className="inline-flex rounded-md shadow-sm" role="group">
                                <Buttons selectPlan={this.props.selectPlan} plan={this.props.planSelected} />
                            </div>
                        </div>
                            : this.props.selectPlan("")}
                        {this.props.planSelected != "" ? <div className="rounded-md  w-full shadow-sm m-2 w-full appear px-4">
                            <label className="block text-base font-medium text-gray-700">Minutos:<span className='text-red-500'>*</span></label>
                            <input type="number" min="0" placeholder="minutos" value={this.props.minutes} onChange={({ target }) => { this.props.selectMinutes(target.value) }} className="px-5 py-2 w-64 m-0 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200" />

                        </div>
                            : this.props.selectMinutes("")
                        }
                        {this.props.minutes ?
                            First.find(value => value == this.props.numbers.first) ? <Value plan={this.props.planSelected} minutes={this.props.minutes} number={this.props.numbers.second} plans={this.props.plans[0]} /> : <Value minutes={this.props.minutes} plan={this.props.planSelected} number={this.props.numbers.first} plans={this.props.plans[1]} />
                            : null}

                    </div>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)