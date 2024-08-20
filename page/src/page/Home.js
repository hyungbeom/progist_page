import React from 'react';

import HomeContentsPage1 from "../components/home/HomeContentsPage1";
import HomeContentsPage2 from "../components/home/HomeContentsPage2";
import HomeContentPage3 from "../components/home/HomeContentPage3";
import HomesContentPage4 from "../components/home/HomesContentPage4";
import HomeContentPage5 from "../components/home/HomeContentPage5";
import HomeContentPage6 from "../components/home/HomeContentPage6";
import FAQ from "../components/home/FAQ";
import Header from "../components/temp/Header";
import Footer from "../components/temp/Footer";
import LandingPage from "../components/home/LandingPage";

const Home = () => {
    return (
        <>
            <Header/>
            {/*<LandingPage/>*/}
            <HomeContentsPage1/>
            <HomeContentsPage2/>
            <HomeContentPage3/>
            <HomesContentPage4/>
            <HomeContentPage5/>
            <HomeContentPage6/>
            <FAQ/>
            <Footer/>
        </>
    );
};

export default Home;