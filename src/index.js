import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PanelPortal from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const panelPortal = ReactDOM.createRoot(document.getElementById('panelPortal'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
panelPortal.render(
    <React.StrictMode>
        <PanelPortal/>
    </React.StrictMode>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
