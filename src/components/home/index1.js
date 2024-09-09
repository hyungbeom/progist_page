import React from 'react';
import {Home1Subtitle1, Home1Title} from "../../assets/contents/HomeContents";
import backgroundImage1 from "../../assets/images/home_1_4.jpg";
import backgroundImage2 from "../../assets/images/home_1_2.jpg";
import backgroundImage3 from "../../assets/images/home_1_3.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home1 = () => {

    return (
        <div className="layout flex cloumn container" id='home1'>
            {/*<div className='background_image'>*/}
            {/*</div>*/}
            <div>
                <img src={backgroundImage1} style={{zIndex:1}} className='home_background_image' alt='home_background_image'/>
                <img src={backgroundImage2} style={{zIndex:2}} className='home_background_image' alt='home_background_image'/>
                <img src={backgroundImage3} style={{zIndex:3}} className='home_background_image' alt='home_background_image'/>
            </div>

            <div className='contents'>
                <div className='container'>
                    <div className='slogan'>
                        {Home1Title}
                    </div>
                    <div className='subtitle'  style={{padding:'1% 0 0 9%'}}>
                        {Home1Subtitle1}
                    </div>
                    <div className='container flex row' style={{padding:'1.5% 0 0 9%', gap: '1.5%'}}>
                        <div className='image_navi' style={{width:'10%'}}/>
                        <div className='image_navi'/>
                        <div className='image_navi'/>
                    </div>
                </div>
            </div>
        </div>

            ) ;
            };

            export default Home1;