import React, {useRef} from 'react';
import {Home2Images} from "../../assets/contents/HomeContents";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home2 = () => {

    const home2TitlePhoto = useRef();

    useGSAP(()=>{
        gsap.to('.home2_title_photo', {
            x: '-47%',
            y: '940%',
            borderRadius: 0,
            scale: 8.5,
            scrollTrigger: {
                trigger: '.home2_title_photo', // 스크롤 트리거 요소
                start: 'top +30%', // 트리거가 시작되는 시점 (뷰포트 상단에서 중앙까지)
                end: '+=98%', // 트리거가 끝나는 시점
                scrub: true, // 스크롤에 따라 애니메이션이 동기화
            },
        })
    },[])

    return (
        <div className="home2_page_layout">
            <div className='home2_title_photo_container' ref={home2TitlePhoto}>
                <img className='home2_title_photo' src={Home2Images[0].src} alt={Home2Images[0].alt}/>
            </div>
            <div className='home2_title'>
                우리는
                <span className='bold'>
                    {'\u00A0\u00A0Progist\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
                </span>
                입니다.
            </div>
            <div className='home2_title2'>
                <span className='bold'>아이디어를 현실로 만드는 IT 전문기업
                </span><br/>
                <span className='home2_subtitle'>
                우리는 고객의 비전을 실현하기 위해<br/>
                전략적 컨설팅과 혁신적인 IT 솔루션을 제공하며,<br/>
                명확한 목표 달성을 위해 맞춤형 접근을 통한 차별화된 성과를 창출합니다.
                </span>
            </div>
            <div className='home2_photo_container'>
                {Home2Images ? <>
                    <img src={Home2Images[1].src} alt={Home2Images[1].alt}/>
                    <img src={Home2Images[2].src} alt={Home2Images[2].alt}/></> : null}
            </div>

        </div>

    )
};

export default Home2;