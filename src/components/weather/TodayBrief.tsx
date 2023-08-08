import {GlobalService} from "../../classes/GlobalService";

export default function TodayBrief(props: { service: GlobalService }) {
    const service = props.service;
    if (!service || !service.currentForecast) return <>Something went wrong!</>;
    const currentForecast = service.currentForecast;

    return (<div className="max-w-2xl rounded-2xl overflow-hidden shadow-lg m-5 sm:max-w-[30rem] bg-white">
        <>
            <div className='flex justify-evenly'>
                <div className='min-w-[8rem]'>
                    <img className="w-[5rem] m-auto mt-3"
                         src={require('../../images/weather/' + currentForecast.weatherIcon)}
                         alt="Weather logo"/>
                    <div className="text-center mt-4">{currentForecast.currentConditionMessage}</div>
                    <div className="font-bold text-4xl text-center">{currentForecast.temp}</div>
                    <div className="text-center">Feels like</div>
                    <div className="text-center mb-2">{currentForecast.feelslike}</div>
                </div>

                <div
                    className="m-0.5 min-h-[1em] w-px bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20"></div>

                <div className='mt-4 ml-3 mr-3'>
                    <div className="font-bold text-xl text-center">{currentForecast.wind}</div>
                    <div className="text-center">Wind Speed</div>
                    <div className="font-bold text-xl text-center">{currentForecast.pressure}</div>
                    <div className="text-center">Pressure</div>
                    <div className="font-bold text-xl text-center">{currentForecast.visibility}</div>
                    <div className="text-center">Visibility</div>
                    <div className="font-bold text-xl text-center">{currentForecast.precipitation}</div>
                    <div className="text-center mb-2">Precipitation</div>
                </div>

            </div>
        </>
    </div>)
}