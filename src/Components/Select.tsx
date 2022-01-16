
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { State } from "../shared/interfaces"
import { First, Second } from "../shared/nums"

function classNames(...classes: Array<string>) {
    return classes.filter(Boolean).join(' ')
}

const list = (value: string, index: number) => (<Listbox.Option
    key={index}
    className={(target: { active: boolean }) =>
        classNames(
            target.active ? 'text-white bg-indigo-600' : 'text-gray-900',
            'cursor-default select-none relative py-2 pl-3 pr-9'
        )
    }
    value={value}
>
    {({ selected, active }) => (
        <>
            <div className="flex items-center">
                <span
                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                >
                    {value}
                </span>
            </div>

            {selected ? (
                <span
                    className={classNames(
                        active ? 'text-white' : 'text-indigo-600',
                        'absolute inset-y-0 right-0 flex items-center pr-4'
                    )}
                >
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
            ) : null}
        </>
    )}
</Listbox.Option>)
function listMap(numbers: Array<string>) { return (numbers.map((value, index) => (list(value, index)))) }
export function Select(props: { receiving: boolean, selectNumberOne: any, selectNumberTwo: any, numbers: State }) {

    return (
        <Listbox value={props.receiving ? props.numbers.first : props.numbers.second} onChange={props.receiving ? props.selectNumberOne : props.selectNumberTwo}>
            {({ open }) => (
                <>
                    <Listbox.Label className="block text-base font-medium text-gray-700">{props.receiving ? "Seu DDD:" : "DDD do outro número:"}<span className='text-red-500'>*</span></Listbox.Label>
                    <div className="mt-1 relative">
                        <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <span className="flex items-center">
                                {
                                    (props.receiving ? props.numbers.first : props.numbers.second) ?
                                        <span className="ml-3 block truncate">{props.receiving ? props.numbers.first : props.numbers.second}</span>
                                        :
                                        <span className="ml-3 block truncate text-gray-500">Selecione um DDD</span>
                                }

                            </span>
                            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                {
                                    () => {
                                        if (props.receiving) {
                                            if (First.find(value => value == props.numbers.first)) {
                                                if (First.find(value => value == props.numbers.second)) {
                                                    props.selectNumberTwo(null)
                                                }
                                            } else {
                                                if (Second.find(value => value == props.numbers.second)) {
                                                    props.selectNumberTwo(null)
                                                }
                                            }
                                            return listMap(props.numbers.numbers)

                                        }
                                        else {
                                            if (First.find(value => value == props.numbers.first)) {
                                                return listMap(props.numbers.numbers.filter(value => First.find(value2 => value2 != value)))
                                            } else {
                                                return listMap(props.numbers.numbers.filter(value => First.find(value2 => value2 == value)))
                                            }
                                        }
                                    }
                                }
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}