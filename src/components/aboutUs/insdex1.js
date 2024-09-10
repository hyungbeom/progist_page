import React from 'react';
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {AboutUsText1} from "../../assets/contents/AboutUsContents";
import AboutUs_image_2 from "../../assets/images/aboutUs_2.png";
import AboutUs_image_1 from "../../assets/images/aboutUs_1.png";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const AboutUs1 = () => {

    useGSAP(()=> {

        function timeline3() {
            let tl3 = gsap.timeline({})

            tl3.to(".main_title", {xPercent: -122, yPercent: 520, scale:0.28, fontWeight:600, position:'absolute', zIndex:5})

            ScrollTrigger.create({
                animation: tl3,
                trigger: ".main_title",
                start: "top +=10%",
                end: "+=56%",
                scrub: 1,
                markers: true,
            },);

            return tl3;
        }
        timeline3();

        function timeline4() {
            let tl4 = gsap.timeline({})

            tl4.to(".text", {x:0,  duration:1})
                .to('#about_us_image2', {x:0, rotation:360, duration:2})
                .to('#about_us_image1', {x:0,  rotation:360, duration:2})

            ScrollTrigger.create({
                animation: tl4,
                trigger: "#about_us2",
                start: "top +=10%",
                end: "+=10%",
                // scrub: 1,
                pin: true,
                markers: true,
                toggleActions: "play none none none",
                onToggleActions: "restart none reverse none",
            },);

            return tl4;
        }

        timeline4()

    })

    function Square({style}){
    return(
        <div style={{
            backgroundColor: '#EAEEF0',
            width: '110%',  // 그리드 셀에 맞도록 너비를 자동으로 조정
            height: 'auto',
            aspectRatio:'1/1',
            borderRadius: '5%',
            ...style
        }}>
        </div>
    )
    }
    function SquarePhoto({src, alt, style}){
        return(
            <img style={{
                height: 'auto',
                aspectRatio:'1/1',
                borderRadius: '5%',
                ...style
                // transform:'translateX(200%)'
            }}
                 src={src}
                 alt={alt}
            />
        )
    }

    return (
        <>
            <div className='layout flex center'>
                <div className='main_title'>
                    About Us.
                </div>
            </div>

            <div className='layout flex row' id='about_us2'>

                <div className='subtitle_area'>
                    <div className='text' style={{
                        margin:'65% 0 0 14%',
                        transform:'translateX(-92%)'
                    }}>
                        {AboutUsText1}
                    </div>
                </div>

                <div className='contents_area' style={{
                    // marginTop: '300%',
                }}>
                    <div className='flex row' style={{
                        alignItems: 'flex-end',
                    }}>
                        <SquarePhoto src={AboutUs_image_2} id='about_us_image2' alt='about_us_image'
                                  style={{width:'25%', margin:'0 0 -4% 9%', transform:'translateX(200%)'}}/>
                        <Square
                            style={{width:'8%', height:'33%', margin:'0 0 -1.5% 44%'}}/>
                    </div>
                    <div className='flex row' style={{

                    }}>
                        <Square
                            style={{width:'9%', height:'18%', margin:'2% 0 0 2%'}}/>
                        <SquarePhoto src={AboutUs_image_1} id='about_us_image1' alt='about_us_image'
                                 style={{width:'50%', margin:'0 0 0 19%'}}/>
                    </div>
                    <div className='flex row'>
                        <Square
                            style={{width:'12%',margin:'-3% 0 0 20%'}}/>
                    </div>

                </div>
            </div>

        </>
    );
};

export default AboutUs1;