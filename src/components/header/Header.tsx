import React, {Fragment, useCallback, useEffect, useState} from 'react'
import {Combobox, Disclosure, Transition} from '@headlessui/react'
import {debounce} from "lodash";
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import {LocationDto} from "../../interfaces/LocationDto";
import {apiKey} from "../../apiKey";
import {GlobalService} from "../../classes/GlobalService";
import {Settings} from "./Settings";


function Header({service}: { service: GlobalService }) {

    const [query, setQuery] = useState('')
    const [options, setOptions] = useState<LocationDto[]>([])
    const [formLoading, setFormLoading] = useState(false);

    useEffect(() => {
        setQuery(service.location?.name || '');
    }, []);

    const searchLocation = async (value: string) => {
        if (value === '') return;

        const autocomplete = await (await fetch(
            `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${value}`
        )).json();

        setOptions(autocomplete);
        setFormLoading(false);
    }

    const delayedSearch = useCallback(
        debounce(async (value: string) => await searchLocation(value), 300),
        []
    );

    const handleChange = (event: { target: { value: string } }) => {
        const value = event.target.value;

        setFormLoading(true);

        const found = options.find((location: LocationDto) => location.name === value);

        if (found) {
            setQuery(found.name);
            setOptions([]);
            service.setLocationAndFetch(found);
            return setFormLoading(false);
        } else {
            setQuery(value);
        }

        if (!value) {
            setFormLoading(false);
            return setOptions([]);
        }
        delayedSearch(value);
    }

    return (
        <Disclosure as="nav" className="bg-transparent">
            <div className="mx-auto max-w-7xl px-3 flex items-center">
                <div className="relative h-16 items-center justify-between hidden sm:flex">
                    <div className="flex flex-1 items-stretch justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                        </div>
                    </div>
                </div>

                <Combobox>
                    <div className="relative w-[90%] focus:border-none ml-4 h-[4rem] flex items-center">
                        <div
                            className="w-full cursor-default overflow-hidden rounded-lg
                                    bg-white text-left shadow-md focus:outline-none focus:border-none
                                    focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2
                                    focus-visible:ring-offset-teal-300 sm:text-sm">

                            <Combobox.Button
                                className="absolute inset-y-0 right-0 flex items-center pr-2  focus:border-none">
                                <MagnifyingGlassIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </Combobox.Button>
                            <Combobox.Input
                                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
                                value={query}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='absolute w-[inherit] mt-12'>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Combobox.Options
                                    className="absolute max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {formLoading ? (
                                        <div
                                            className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                            Loading...
                                        </div>
                                    ) : (
                                        query === '' ? (
                                                <div
                                                    className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                    Start typing to search for a location.
                                                </div>
                                            ) :
                                            options.length === 0 && query !== '' ? (
                                                <>
                                                    <div
                                                        className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Nothing found.
                                                    </div>
                                                </>
                                            ) : (
                                                options.map((location: LocationDto) => (
                                                        <>
                                                            <Combobox.Option
                                                                key={location.id}
                                                                value={location}
                                                                onClick={() => {
                                                                    handleChange({target: {value: location.name}})
                                                                }}
                                                                className='cursor-pointer select-none relative py-2 px-4'
                                                            >
                                                                {location.name}
                                                            </Combobox.Option></>
                                                    )
                                                )))}
                                </Combobox.Options>
                            </Transition>
                        </div>
                    </div>
                    <Settings service={service}/>
                </Combobox>
            </div>
        </Disclosure>
    )

}

export default Header