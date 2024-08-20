import React from 'react';

import Header from "../components/temp/Header";
import Footer from "../components/temp/Footer";
import AboutUs1 from "../components/aboutUs/AboutUs1";
import AboutUs2 from "../components/aboutUs/AboutUs2";
import AboutUs3 from "../components/aboutUs/AboutUs3";
import AboutUs4 from "../components/aboutUs/AboutUs4";
import AboutUs5 from "../components/aboutUs/AboutUs5";
import Members from "../components/aboutUs/Members";

const AboutUs = () => {
    return (
        <>
            <AboutUs1/>
            <AboutUs2/>
            <AboutUs3/>
            <AboutUs4/>
            <AboutUs5/>
            <Members/>
        </>
    );
};

export default AboutUs;