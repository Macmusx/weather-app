import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {GlobalService} from "./classes/GlobalService";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const service = new GlobalService();

root.render(
    <React.StrictMode>
        <App service={service}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
