import React from 'react';
import {Home1Images, Home1Subtitle1, Home1Subtitle2, Home1Title} from "../../assets/contents/HomeContents";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Home1 = () => {

    const photoList = document.querySelectorAll(".photo_item");

    useGSAP(() => {

        photoList.forEach((item, index) => {

            const tl1 = gsap.timeline({
                repeat: -1 // 무한 반복
            });

            tl1.fromTo(
                item,{x: `-=100%`},
                {
                    x:'+=700%',
                    duration:4,
                    ease: 'sine.in'
                }, index*0.8
            )
        }, { scope: ".photo_container" })


    })
    return (
        <div className="page_layout">

            <div className='title_container'>
                <div className='main_title'>
                    {Home1Title}
                </div>
                <div className='subtitle'>
                    {Home1Subtitle1}
                    <span>{Home1Subtitle2}</span>
                </div>
            </div>
            <div className='photo_container'>
                {/*<div className='photo_container' id='photo_container1'>*/}
                    {Home1Images ? Home1Images.map((image, index) => (
                        <div className='photo_item' key={index}>
                            <img src={image.src} alt={image.alt}/>
                        </div>
                    )) : null}
            </div>

        </div>

    )
        ;
};

export default Home1;