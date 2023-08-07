import {GlobalService} from "../../classes/GlobalService";

export default function TodayBrief(props: { service: GlobalService }) {
    const service = props.service;
    if (!service || !service.currentForecast) return <>Something went wrong!</>;
    const currentForecast = service.currentForecast;

    return (<div className="max-w-2xl rounded-2xl overflow-hidden shadow-lg m-5 sm:max-w-[10rem] bg-white">
        <>
            <img className="w-[5rem] m-auto mt-3" src={require('../../images/weather/' + currentForecast.weatherIcon)}
                 alt="Weather logo"/>
            <div className="text-center mt-4">{currentForecast.currentConditionMessage}</div>
            <div className="font-bold text-4xl text-center">{currentForecast.temp}</div>
            <div className="text-center">Feels like</div>
            <div className="text-center mb-2">{currentForecast.feelslike}</div>
        </>
    </div>)
}