import React from "react";
import TodayBrief from "./weather/TodayBrief";
import {GlobalService} from "../classes/GlobalService";
import {DailyBrief} from "./weather/DailyBrief";
import Footer from "./footer/Footer";

export default function Weather(props: { service: GlobalService }) {
    return <div className='flex justify-evenly flex-wrap'>
        <TodayBrief service={props.service}/>
        <DailyBrief service={props.service}/>
        <Footer/>
    </div>
}