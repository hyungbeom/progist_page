import React from 'react';
import {Services2text, Services2Title1, Services2Title2} from "../../assets/contents/ServicesContents";
import ServiceImage1 from "../../assets/images/services_1.png";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


const Services1 = () => {

    useGSAP(()=> {

        function timeline1() {
            let tl1 = gsap.timeline({})

            tl1.to(".main_title", {xPercent: -120, yPercent: 520, scale:0.28, fontWeight:600, position:'absolute', zIndex:5})

            ScrollTrigger.create({
                animation: tl1,
                trigger: "#services2",
                start: "top top+=70%",
                end: "center center+=50%",
                scrub: 1.5,
                // markers: true,
            },);

            return tl1;
        }
        timeline1();

    })

    return (
        <>
            <div className='center_page_layout' id='services1'>
                <div className='main_title'>
                    Services.
                </div>
            </div>
            <div className='grid_page_layout' id='services2'>
                <div className='subtitle_area' style={{gridColumn: '2 / span 9', width: '100%'}}>
                    <div className='title' style={{textAlign: 'left', marginTop: '38%'}}>
                        <span className='bold'>{Services2Title1}</span>가
                    </div>
                    <div style={{fontWeight: 500, fontSize: '2.5vw'}}>
                        {Services2Title2}
                    </div>
                    <div className='text' style={{marginTop: '10%'}}>
                        {Services2text}
                    </div>
                </div>

                <div style={{gridColumn: '12 / span 5', width: '100%'}}>
                    <img src={ServiceImage1} alt='services image'
                         style={{width: '100%', borderRadius: '5%', marginTop: '20%'}}/>
                </div>
            </div>
        </>
)
    ;
};

export default Services1;