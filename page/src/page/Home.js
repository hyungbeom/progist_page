import React from 'react';

import Home1 from "../components/home/Home1";
import Home2 from "../components/home/Home2";
import Home3 from "../components/home/Home3";
import Home4 from "../components/home/Home4";
import Home5 from "../components/home/Home5";
import Home6 from "../components/home/Home6";
import FAQ from "../components/home/FAQ";
import Header from "../components/temp/Header";
import Footer from "../components/temp/Footer";
import LandingPage from "../components/home/LandingPage";

const Home = () => {
    return (
        <>
            {/*<LandingPage/>*/}
            <Home1/>
            <Home2/>
            <Home3/>
            <Home4/>
            <Home5/>
            <Home6/>
            <FAQ/>

        </>
    );
};

export default Home;