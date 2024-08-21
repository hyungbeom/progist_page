import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/temp/Header";
import Footer from "./components/temp/Footer";
import GetInTouch from "./components/getInTouch/GetInTouch";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header/>
        {/*<GetInTouch/>*/}
        <App />
        <Footer/>
    </BrowserRouter>

);
