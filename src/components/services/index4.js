import React from 'react';
import {ServicesProcessContents} from "../../assets/contents/ServicesContents";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Services4 = () => {

    useGSAP(()=>{
        gsap.to('#process_card_01',
            {
                y: '-30%',
                ease: "sine",
                scrollTrigger: {
                    trigger: '.process_container', // 스크롤 트리거 요소
                    start: 'top =+30%', // 트리거가 시작되는 시점
                    end: '+=30%', // 트리거가 끝나는 시점
                    scrub: true,
                    pin: true,
                },
            })
    },[])

    function ProcessCard({number, title, description, src, id}) {


        return (
        <div className='process_card' id={id}>
            <div className='process_card_title_container'>
                <div className='process_card_no'>
                    {number}
                </div>
                <div className='process_card_title'>{title}</div>
            </div>
            <div className='process_card_description'>{description}</div>
            <img src={src} atl='process image'/>
        </div>
            )
    }
    return (
        <div className='layout flex'>
            <div className='subtitle bold subtitle_in_contents'>
                Services.>Process
            </div>
            <div className='process_container'>
                <div>
                    <ProcessCard number={'01'} title={ServicesProcessContents[0].title}
                                 id={'process_card_01'} description={ServicesProcessContents[0].description} src={ServicesProcessContents[0].src}/>
                </div>
                <div>
                    <ProcessCard number={'02'} title={ServicesProcessContents[1].title}
                                 id={'process_card_02'} description={ServicesProcessContents[1].description} src={ServicesProcessContents[1].src}/>
                </div>
                <div>
                    <ProcessCard number={'03'} title={ServicesProcessContents[2].title}
                                 id={'process_card_03'} description={ServicesProcessContents[2].description} src={ServicesProcessContents[2].src}/>
                </div>
                <div>
                    <ProcessCard number={'04'} title={ServicesProcessContents[3].title}
                                 id={'process_card_04'} description={ServicesProcessContents[3].description} src={ServicesProcessContents[3].src}/>
                </div>
            </div>
        </div>
    );
};

export default Services4;