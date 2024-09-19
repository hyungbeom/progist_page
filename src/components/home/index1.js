import React from 'react';
import {
    Home1Images,
    Home1Subtitle1,
    Home1Subtitle2, Home1Text,
    Home1Title,
    Home1Title2_1,
    Home1Title2_2,
    Home1Title2_3
} from "../../assets/contents/HomeContents";
import backgroundImage1 from "../../assets/images/home_1_4.jpg";
import backgroundImage2 from "../../assets/images/home_1_2.jpg";
import backgroundImage3 from "../../assets/images/home_2_1.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);gsap.registerPlugin(ScrollTrigger);

const Home1 = () => {

    useGSAP(()=>{

            function timeline1() {
                let tl1 = gsap.timeline({})

                tl1.addLabel("label1")

                tl1.to(".background_image>:nth-child(2)", { xPercent: -100 })
                    .to('.image_navi:nth-child(1)', { width: '1%' }, "-=0.2")
                    .to('.image_navi:nth-child(2)', { width: '10%',  }, "-=0.4")
                    .addLabel("label2")

                tl1.to(".background_image>:nth-child(3)", { xPercent: -100 })
                    .to('.image_navi:nth-child(2)', { width: '1%' },"-=0.2")
                    .to('.image_navi:nth-child(3)', { width: '10%' }, "-=0.4")
                    .addLabel("label3")

                tl1.to(".background_image>:nth-child(3)", { scale:1.2},'+=0.2')
                    .to("#slogan_container",{opacity:0},'-=0.1')
                    .to("#home_title_container",{opacity:1}, '-=0.1')
                    .addLabel("label4",'+=3')

                ScrollTrigger.create({
                    animation: tl1,
                    snap: {
                        snapTo: "labels",
                        duration: { min: 0.3, max: 1 },
                        delay: 1,
                        ease: "power1.in",
                    },
                    trigger: "#home1",
                    start: "top top",
                    end: "+=450%",
                    pin: true,
                    scrub: 2,
                    anticipatePin: 1,
                    toggleActions: 'restart none restart none',
                    // markers: true,
                },);

                return tl1;
            }
            timeline1();

            function timeline2(){
                let tl2 = gsap.timeline()

                tl2.to("#home_background_image3",
                    {
                        startAt:{filter:"brightness(0.5)"},
                        position:'absolute',
                        borderRadius: '5%',
                        filter:'brightness(1)',
                        xPercent: -67,
                        yPercent: 230,
                        scale:0.28,
                        ease:"sine",
                    }, )

                ScrollTrigger.create({
                    animation: tl2,
                    trigger: "#home2",
                    start: "top +=40%",
                    end: "center -=20%",
                    scrub:3,
                    // markers: true,
                    // ontoggleActions: "restart none reverse none",
                },);
                return tl2;
            }
            timeline2();

            function timeline3(){
                let tl3 = gsap.timeline({})

                tl3
                    .to('.photo_container',{
                        x:'0',
                        duration:2,
                    },'-=1')

                ScrollTrigger.create({
                    animation: tl3,
                    trigger: "#home2",
                    start: "top top",
                    pin: true,
                    // markers: true,
                    toggleActions: "restart none restart none",

                },);
                return tl3;
            }
            timeline3();
        }
        ,[])

    return (
        <>
            <div className="layout grid_container" style={{padding: 0, overflow: 'visible'}} id='home1'>
                <div className='background_image'>
                    <img src={backgroundImage1} style={{zIndex: 1}} className='home_background_image'
                         alt='home_background_image1'/>
                    <img src={backgroundImage2} style={{zIndex: 2, transform: 'translateX(100%)'}}
                         className='home_background_image' alt='home_background_image2'/>
                    <img src={backgroundImage3} style={{zIndex: 3, transform: 'translateX(100%)'}}
                         className='home_background_image' alt='home_background_image3' id='home_background_image3'/>
                    <div id='home_title_container'>
                        <div style={{
                            fontSize: '2.8vw',
                            padding: '1% 0 0 0',
                        }}>
                            {Home1Subtitle2}
                        </div>
                        <div style={{
                            fontSize: '5.2vw',
                            padding: '1% 0 0 0',
                        }}>
                            {Home1Title2_1}<span className='bold'>{Home1Title2_2}</span>{Home1Title2_3}
                        </div>
                    </div>
                </div>

                <div className='contents flex column'>
                    <div className='grid_container' style={{
                        color: '#FFFFFF', margin : '25% 0 0 9%', width: '70%'}} id='slogan_container'>
                        <div className='main_title'>
                            {Home1Title}
                        </div>
                        <div className='subtitle' style={{padding: '1% 0 0 9%'}}>
                            {Home1Subtitle1}
                        </div>

                        <div className='grid_container flex row' style={{padding: '2% 0 0 9%', gap: '1.5%'}}>
                            <div className='image_navi' style={{width: '10%'}}/>
                            <div className='image_navi'/>
                            <div className='image_navi'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="layout" id='home2' style={{padding: '14.5% 0 0 0', zIndex:1,  overflow: 'visible'}}>
                <div className='text center' style={{textAlign:'center'}}>
                    {Home1Text}
                </div>
                <div className='photo_container_wrapper'>
                    <div className='photo_container'>
                        {Home1Images ? Home1Images.map((image, index) => (
                            <div className='photo_item' key={index}>
                                <img src={image.src} alt={image.alt}/>
                            </div>
                        )) : null}
                    </div>
                </div>

            </div>
        </>

    )
        ;
};

export default Home1;