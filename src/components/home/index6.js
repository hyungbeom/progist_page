import React from 'react';
import {
    Home2Images, Home2Text, Home2Title1_1, Home2Title1_2, Home2Title1_3, Home2Title2,
} from "../../assets/contents/HomeContents";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home6 = () => {

    useGSAP(()=>{
        gsap.to('#home2_title_photo',
            // {filter: 'brightness(100%)',},
            {
                startAt: {filter: 'brightness(100%)'},
                x: '-65%',
                y: '1100%',
                filter: 'brightness(60%)',
                borderRadius: 0,
                scale: 11,
                ease: "sine",
                scrollTrigger: {
                    trigger: '.long_page_layout', // 스크롤 트리거 요소
                    start: 'top top', // 트리거가 시작되는 시점
                    end: '+=100%', // 트리거가 끝나는 시점
                    scrub: true,
                    // pin: true,
                },
            })
    },[])

    return (
        <div className="long_page_layout slide-in">

            {/*<div className='title' id='home2_title1'>*/}
            {/*    {Home2Title1_1}*/}
            {/*    <span className='bold'>{Home2Title1_2}</span>*/}
            {/*    <img id='home2_title_photo' src={Home2Images[0].src} alt={Home2Images[0].alt}/>*/}
            {/*    {Home2Title1_3}*/}
            {/*</div>*/}

            {/*<div id='home2_photo_container'>*/}
            {/*    <img src={Home2Images[1].src} alt={Home2Images[1].alt}/>*/}
            {/*    <img src={Home2Images[2].src} alt={Home2Images[2].alt}/>*/}
            {/*</div>*/}

            {/*<div className='title_container center' id='home2_title2'>*/}
            {/*    <span className='title bold'>{Home2Title2}</span><br/>*/}
            {/*    <span className='text' id='home2_text'>{Home2Text}</span>*/}
            {/*</div>*/}

        </div>

    )
};

export default Home6;