import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Fluid from './containers/Fluid/Fluid';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

ReactDOM.render(
    <React.StrictMode>
        <Fluid />
    </React.StrictMode>,
    document.getElementById('fluid-background')
)