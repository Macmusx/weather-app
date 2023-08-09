import {GlobalService} from "../../classes/GlobalService";

export function DailyBrief(props: { service: GlobalService }) {
    const service = props.service;
    if (!service || !service.currentForecast) return <>Something went wrong!</>;

    const forecast = service.forecast;
    if (!forecast) return <>Something went wrong!</>;

    return <div
        className="flex flex-auto max-w-2xl min-w-[25rem] rounded-2xl shadow-lg m-5 sm:max-w-[30rem] bg-white">

        <div className='flex-auto flex justify-evenly items-center'>
            {forecast.forecastDays.map((dayDetails, index: number) => {
                return (
                    <>
                        <div key={dayDetails.epoch} className='min-w-[8rem]'>
                            <img className="w-[5rem] m-auto mt-3"
                                 src={require('../../images/weather/' + dayDetails.day.weatherIcon)}
                                 alt="Weather logo"/>
                            <div className='text-center mt-4'>{dayDetails.dateMessageRelativeToToday}</div>
                            <div className="text-center">{dayDetails.day.currentConditionMessage}</div>
                            <div className="font-bold text-3xl text-center">{dayDetails.day.temp}</div>
                        </div>

                        {
                            forecast && index < forecast.forecastDays.length - 1 ? (
                                <div key={dayDetails.epoch + '-divider'}
                                     className="mt-5 mb-5 h-[13rem] m-0.5 w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20"></div>
                            ) : null
                        }
                    </>
                )
            })}
        </div>
    </div>
}