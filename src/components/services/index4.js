import React from 'react';
import {ServicesProcessContents} from "../../assets/contents/ServicesContents";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Services4 = () => {

    useGSAP(()=>{

        const tl = gsap.timeline({defaults: {scrub: 1, duration: 3, ease: "power1.inOut"} });

        tl
            .to("#process_card_01>:nth-child(1), #process_card_01>:nth-child(2)", {opacity:1, scrub: false, duration: 3})
            .to("#process_card_01", {yPercent: -30})

        tl
            .to("#process_card_01>:nth-child(1), #process_card_01>:nth-child(2)", {opacity:0},)
            .to("#process_card_01", {yPercent: 0})

        tl
            .to("#process_card_02>:nth-child(1), #process_card_02>:nth-child(2)", {opacity:1},)
            .to("#process_card_02", {yPercent: -30})

        tl
            .to("#process_card_02>:nth-child(1), #process_card_02>:nth-child(2)", {opacity:0},)
            .to("#process_card_02", {yPercent: 0})

        tl
            .to("#process_card_03>:nth-child(1), #process_card_03>:nth-child(2)", {opacity:1},)
            .to("#process_card_03", {yPercent: -30})

        tl
            .to("#process_card_03>:nth-child(1), #process_card_03>:nth-child(2)", {opacity:0},)
            .to("#process_card_03", {yPercent: 0})

        tl
            .to("#process_card_04>:nth-child(1), #process_card_04>:nth-child(2)", {opacity:1},)
            .to("#process_card_04", {yPercent: -30})

        tl
            .to("#process_card_04>:nth-child(1), #process_card_04>:nth-child(2)", {opacity:0},)
            .to("#process_card_04", {yPercent: 0})

        ScrollTrigger.create({
            animation: tl,
            snap: [0.125, 0.375, 0.625, 0.875], //스크롤 트리거의 전체 구간을 등분
            trigger: ".pin",
            start: "top top",
            end: "+=500%",
            pin: true,
            scrub: true,
            anticipatePin: 1,
        },);

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
        <>
            <div className='layout flex pin'>
                <div className='subtitle bold subtitle_in_contents'>
                    Services.>Process
                </div>
                <div className='process_container'>
                    <div>
                        <ProcessCard number={'01'} title={ServicesProcessContents[0].title}
                                     id={'process_card_01'} description={ServicesProcessContents[0].description}
                                     src={ServicesProcessContents[0].src}/>
                    </div>
                    <div>
                        <ProcessCard number={'02'} title={ServicesProcessContents[1].title}
                                     id={'process_card_02'} description={ServicesProcessContents[1].description}
                                     src={ServicesProcessContents[1].src}/>
                    </div>
                    <div>
                        <ProcessCard number={'03'} title={ServicesProcessContents[2].title}
                                     id={'process_card_03'} description={ServicesProcessContents[2].description}
                                     src={ServicesProcessContents[2].src}/>
                    </div>
                    <div>
                        <ProcessCard number={'04'} title={ServicesProcessContents[3].title}
                                     id={'process_card_04'} description={ServicesProcessContents[3].description}
                                     src={ServicesProcessContents[3].src}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services4;