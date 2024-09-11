import React from 'react';
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Services5 = () => {

    useGSAP(()=>{

        const tl = gsap.timeline();

        tl.to('.block_color',{
            backgroundColor: '#C17F02',
            duration: 0.5,
            opacity:0.5,
            ease:'sine',
            width:'38%',})

        ScrollTrigger.create({
            animation: tl,
            trigger:'#services5',
            start: "top top+=10%",
            markers: true,
            toggleActions: "restart none restart none", /* onEnter onLeave onEnterBack onLeaveBack*/
            repeat:-1,
            },)

    },[])

    function StepCard({step, text}){
        return (
        <div className='step_card' style={{width:'100%'}}>
            <div className='subtitle bold'>
                {step}
            </div>
            <div className='underline' style={{transition:"none", margin: '0 0 5% 0'}}/>
            <div className='step_card_description' style={{transition:"none", padding: '0 2%'}}>
                {text}
            </div>
        </div>
        )
    }

    return (
        <div className='layout flex column' style={{backgroundColor: '#EAEEF0'}} id='services5'>
            <div className='subtitle bold subtitle_in_contents'>
                Services.> Communication
            </div>
            <div style={{padding:'7%'}}>
                <div className='comu_description_container flex column' style={{width:'100%', height:"30%", margin:'1% 0 19% 0', lineHeight:1.6}}>
                    <p style={{zIndex:2, fontSize:'1.5vw'}}>
                        Asana, Slack, 카카오톡 단톡방을 통해 모든 작업자와 클라이언트가
                        <span className='bold'>실시간으로 소통</span>하며,<br/>고객사는 프로젝트 <span className='bold'>진행 상황을 즉시 확인</span>할
                        수 있습니다.<br/>
                        필요한 경우 Google Meet, Zoom, Slack을 활용해 신속하게 미팅을 진행합니다.
                    </p>
                    <div className='block_color'
                          style={{width:'0%', height:'18%', margin:'-4.2% 0 0 8.5%', zIndex:1}}/>
                </div>

                <div className='flex row' style={{width:'100%', gap:'4%', justifyItems:'space-between',  lineHeight:1.7}}>
                    <StepCard step={'1 Step'} text={'서비스 기획'}/>
                    <StepCard step={'2 Step'} text={'UI/UX 디자인'}/>
                    <StepCard step={'3 Step'} text={'디자인 피드백 반영'}/>
                    <StepCard step={'4 Step'} text={'퍼블리싱\n백엔드 개발\n서버 세팅'}/>
                    <StepCard step={'5 Step'} text={'프론트엔드 개발'}/>
                </div>
            </div>
        </div>
    );
};

export default Services5;