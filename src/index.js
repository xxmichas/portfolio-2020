import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Fluid from './containers/Fluid/Fluid';


const MobileBrowser = !(window.matchMedia("(pointer: coarse)").matches);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

if (MobileBrowser) {
    ReactDOM.render(
        <React.StrictMode>
            <Fluid />
        </React.StrictMode>,
        document.getElementById('fluid-background')
    )
}