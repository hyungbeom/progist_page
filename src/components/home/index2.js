import React from 'react';
import CI_text from "../../assets/images/CI_text.png";
import {Home3Subtitle} from "../../assets/contents/HomeContents";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Home2 = () => {

    useGSAP(()=>{

        let tl=gsap.timeline({
            scrollTrigger: {
                trigger: '.center_page_layout',
                start: 'top center',
                toggleActions: "restart none reverse none",
                repeat:-1,
            }
        })

        tl.to('.home3_title',
            {startAt: {scale:0.01}, scale:1, duration:1,});

        tl.to('.prog',
            {x:'80%', opacity:0, duration:1,})
            .to('.ist',
            {x:'-80%', opacity:0, duration:1,},'-=1')
            .to('.plus',
                {opacity:0, duration:1,},'-=1');

        tl.to('.home3_title2_image',
                {opacity:1, duration:0.5,},'-=0.5');

        tl.to('.home3_subtitle',
            {opacity:1, duration:0.5,},'-=0.5')
    },[])

    return (
        <div className="center_page_layout">
            <div className="home3_title_container">
                <div className='home3_title prog'>
                    PROGRAM
                </div>
                <div className='home3_title plus'>
                    +
                </div>
                <div className='home3_title ist'>
                    -IST
                </div>
            </div>
            <div className="home3_title2_container">
                <img className="home3_title2_image" src={CI_text} alt="CI"/>
                <div className='home3_subtitle'>
                    {Home3Subtitle}
                </div>

            </div>

        </div>

    )
        ;
};

export default Home2;