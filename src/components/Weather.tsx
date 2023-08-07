import React from "react";
import TodayBrief from "./weather/TodayBrief";
import {GlobalService} from "../classes/GlobalService";

export default function Weather(props: { service: GlobalService }) {
    return <>
        <TodayBrief service={props.service}/>
    </>
}