import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Index from "./components/footer";
import Header from "./components/header/header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
        {/*<Index/>*/}
    </BrowserRouter>

);
