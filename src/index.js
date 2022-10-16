 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import App from './App2';
import {About, Setting,Contact} from './compo';

 import { Routes, BrowserRouter as Router,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

