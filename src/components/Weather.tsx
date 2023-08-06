import {GlobalService} from "../services/GlobalService";
import React from "react";
import TodayBrief from "./weather/TodayBrief";

export default function Weather(props: { service: GlobalService }) {
    return <>
        <TodayBrief service={props.service}/>
    </>
}