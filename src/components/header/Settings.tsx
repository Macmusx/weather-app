import {GlobalService, Unit} from "../../classes/GlobalService";
import React, {Fragment, useRef, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";

export function Settings(props: { service: GlobalService }) {
    const [open, setOpen] = useState(false);

    const cancelButtonRef = useRef(null);

    return (
        <>
            <div className='ml-2 w-8 h-8'>
                <img src={require('../../images/settings.png')} alt="Settings" className='cursor-pointer'
                     onClick={() => setOpen(true)}/>
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel
                                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 text-center mb-10 sm:mb-0">
                                        <div className='font-bold text-2xl'>Settings</div>
                                        <div className='flex items-center mt-5'>
                                            <span className='mr-5'>Unit</span>
                                            <select id="countries"
                                                    value={props.service.unit}
                                                    onChange={(e) => props.service.setUnit(e.target.value as Unit)}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                <option value="Metric">Metric</option>
                                                <option value="Imperial">Imperial</option>
                                            </select>
                                        </div>
                                        <div className='flex items-center mt-5 w-full justify-around'>
                                            <span>Persist settings</span>
                                            <label
                                                className="relative inline-flex items-center cursor-pointer ml-5 sm:ml-0">
                                                <input type="checkbox"
                                                       checked={props.service.persistSettings}
                                                       onChange={() => props.service.switchPersistSettings()}
                                                       className="sr-only peer"/>
                                                <div
                                                    className="w-11 h-6 bg-gray-200
                                                    rounded-full peer peer-checked:after:translate-x-full
                                                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
                                                    after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
                                                    after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                        <div className='flex items-center mt-5 w-full justify-around'>
                                            <span>Load current location on start</span>
                                            <label
                                                className="relative inline-flex items-center cursor-pointer ml-5 sm:ml-0">
                                                <input type="checkbox"
                                                       checked={props.service.loadCurrentLocationOnStart}
                                                       onChange={() => props.service.switchLoadCurrentLocationOnStart()}
                                                       className="sr-only peer"/>
                                                <div
                                                    className="w-11 h-6 bg-gray-200
                                                    rounded-full peer peer-checked:after:translate-x-full
                                                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
                                                    after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
                                                    after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div
                                        className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse hidden sm:px-6 sm:block ml-auto justify-center">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root></>
    )
}