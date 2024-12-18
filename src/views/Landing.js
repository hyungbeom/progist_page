import React, {useEffect, useRef, useState} from 'react';
import {colorList} from "../assets/utils/colorList";
import {coworkingImages, faqList, processContents, serviceContents} from "../assets/contents/LandingContents";

import iconFold from "../assets/images/icon_fold.png"
import iconUnfold from "../assets/images/icon_unFold.png"
import CI from "../assets/images/CI.png";
import CI_text from "../assets/images/CI_text.png";
import Header from "../components/header/header";
import {menuList} from "../assets/contents/MenuList";
import handleSendEmail from "../components/tools/SendEmail";
import Modal from "../components/modal";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import Faq from "../components/faq";

gsap.registerPlugin(useGSAP);gsap.registerPlugin(ScrollTrigger);

const Landing = () => {

    const [scrollY, setScrollY] = useState(0);
    const [customerContact, setCustomerContact] = useState('')

    const [modalMessage, setModalMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentLogo, setCurrentLogo] = useState(null);

    const [selectId, setSelectId] = useState(null);

    const refs = useRef({
        whoWeAre: null,
        services: null,
        process: null,
        whatWeDo: null,
        faq: null,
        contact: null,
    });

    const handleScrollTo = (section) => {
        if (refs.current[section]) {
            refs.current[section].scrollIntoView({behavior: "smooth", block: "start"});
        }
    };

    const handleClickContactButton = async (e) => {
        e.preventDefault();

        try{
            await handleSendEmail(customerContact)
            setModalMessage('연락처가 성공적으로 전송되었습니다. 확인 후 빠르게 회신드리겠습니다.')
            setCustomerContact('')
        } catch (error) {
            setModalMessage('오류가 발생했습니다. 유선으로 문의 부탁드립니다.')
        }
        setIsModalOpen(true)
    };

    const handleScroll = () => {
        // 현재 스크롤 위치를 추적
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useGSAP(()=>{

        ScrollTrigger.create({
            trigger: "#whoWeAre",
            start: "top top",
            end: "2400px",
            pin: true,
            scrub: false,
            toggleActions: 'restart none restart none',
            // markers: true,
        },);

        let tl1 = gsap.timeline({})

        tl1.to("#fade-in-line1", {
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
        }).to("#fade-in-line2", {
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
        }).to("#fade-in-line3", {
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
        }).to("#fade-in-line4",{
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
        })

        ScrollTrigger.create({
            animation: tl1,
            trigger: "#fade-in-line1",
            start: "top 50%",
            scrub: false,
            toggleActions: 'restart none restart none',
            onEnter: () => tl1.restart(),
            // markers: true,
        },);


        // let tl2 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '#whoWeAre',
        //         start: "top +=1%",
        //         end: "+=10000",
        //         scrub: 10,
        //         snap: {
        //             snapTo: "labels",
        //             duration: 1,
        //             delay: 0.1,
        //             ease: "power1.inOut",
        //         },
        //         markers: true,
        //     },
        // });
        //
        // // 섹션별 애니메이션 정의
        // sections.forEach((section) => {
        //     tl2.addLabel(section.id); // 레이블 추가
        //     tl2.to(`#${section.id}`, {
        //         opacity: 1,
        //         duration: 1,
        //         pin:true,
        //         ease: "power1.out",
        //     });
        // });

    },[])

    function selectIdFunc(e){
        if(e.target.id === selectId){
            // console.log('first check')
            setSelectId(null);
        }else{
            // console.log('second check')
            setSelectId(e.target.id)
        }

    }


    return (
        <>
            <Header refs={refs}/>
            <div id='whoWeAre' ref={(el) => (refs.current.whoWeAre = el)} style={{width: '100vw', height: 'auto',}}>
                <div style={{
                    width: '100%',
                    height: 'auto',
                    margin: '0 auto',
                    boxSizing: 'border-box',
                    zIndex: 2,
                }}>

                    <div style={{
                        width: '100%',
                        aspectRatio: '1.77/1',
                        margin: '0 auto',
                        position: 'relative',
                        backgroundImage: 'url(/temp_background.png)',
                    }}>
                        {/* 배경 비디오 추가 */}
                        {/*<video*/}
                        {/*    autoPlay*/}
                        {/*    muted*/}
                        {/*    loop*/}
                        {/*    playsInline*/}
                        {/*    style={{*/}
                        {/*        position: "absolute",*/}
                        {/*        top: 0,*/}
                        {/*        left: 0,*/}
                        {/*        width: "100%",*/}
                        {/*        height: "100%",*/}
                        {/*        objectFit: "cover",*/}
                        {/*        zIndex: -1, // 배경으로 설정*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <source*/}
                        {/*        src="https://a.slack-edge.com/2e396bc/img/app-directory/splash-ui-ai-apps.webm"*/}
                        {/*        type="video/webm"*/}
                        {/*    />*/}
                        {/*    Your browser does not support the video tag.*/}
                        {/*</video>*/}

                        <div style={{
                            position: 'absolute',
                            backgroundColor: 'white',
                            opacity: scrollY >= 1200 ? '0.9' : 0,
                            width: '100%',
                            height: '100%',
                            transition: 'opacity 0.5s ease'
                        }}/>
                        <div className={scrollY >= 550 ? 'fade-out' : 'fade-in'} style={{
                            width: '100%',
                            fontSize: '4.1vw',
                            color: 'white',
                            textAlign: 'center',
                            position: 'absolute',
                            top: 400,
                            lineHeight: 1.3,
                            opacity: 0,
                        }}>
                            <span style={{fontWeight: 600}}>Turn your Vision into Reality</span><br/>당신의 비전을 현실로,
                            <span style={{fontWeight: 600, color: colorList['mainColor']}}>PROGIST</span>
                        </div>
                        <div
                            className={scrollY >= 550 && scrollY < 1200 ? 'slide-up' : scrollY >= 1200 ? 'fade-out' : null}
                            style={{
                                width: 'auto',
                                fontSize: '4.16vw',
                                color: 'white',
                                position: 'absolute',
                                top: 550,
                                fontWeight: 600,
                                lineHeight: 1.3,
                                left: 240,
                                opacity: 0,
                            }}>
                            우리는<br/>PROGIST<br/>입니다.
                        </div>
                        <div
                            className={scrollY >= 550 && scrollY < 1200 ? 'fade-in' : scrollY >= 1200 ? 'fade-out' : null}
                            style={{
                                width: 'auto',
                                fontSize: '1.25vw',
                                color: 'white',
                                position: 'absolute',
                                top: 658,
                                right: 280,
                                padding: '32px 22px',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                lineHeight: 1.7,
                                opacity: 0,
                            }}>
                            : “프로그램(program)”과 특정 분야의 전문성을<br/>
                            지닌 사람을 나타내는 “-ist”의 조합으로,<br/>
                            고객의 비전을 실현하는<br/>
                            <span style={{fontWeight: 600}}>e-Business 토탈 서비스 기업</span> 입니다.
                        </div>
                        <div className={scrollY >= 1200 ? 'slide-up' : null} style={{
                            width: '100%',
                            height: 'auto',
                            fontSize: '1.87vw',
                            color: colorList['black'],
                            textAlign: 'center',
                            position: 'absolute',
                            top: 400,
                            lineHeight: 1.8,
                            opacity: 0,
                        }}>
                            프로지스트는 고객의 비전을 실현하기 위해<br/>
                            <span style={{fontWeight: 600}}>전략적 컨설팅</span>과 혁신적인 IT 솔루션을 제공하며, <span
                            style={{fontWeight: 600}}>웹 개발, 전자상거래 솔루션, 마케팅 전략</span>,<br/>
                            <span style={{fontWeight: 600}}>IT 인프라 지원</span>을 통해 고객의 성공을 돕습니다. 변화하는 디지털 환경 속에서 맞춤형 접근을
                            통해
                            최적의<br/>
                            솔루션을 제공하고, 명확한 목표 달성을 위한 차별화된 성과를 창출합니다.<br/>
                        </div>

                    </div>
                </div>


                <div id='service' ref={(el) => (refs.current.services = el)} style={{
                    width: '100%',
                    aspectRatio: '0.6/1',
                    margin: '0 auto',
                    paddingBottom: '150px',
                    backgroundColor: colorList['backGray'],
                    position: 'relative',
                }}>

                    <div style={{width: '100%', height: '500px'}}>
                        <div id='fade-in-line1' style={{
                            fontSize: '2.6vw',
                            width: '100%',
                            height: 'auto',
                            textAlign: 'center',
                            paddingTop: 145,
                            lineHeight: 1.4,
                            opacity:0
                        }}>
                            <span style={{fontWeight: 600}}>프로젝트 매니저, 디자이너, 개발자</span>가</div>
                        <div id='fade-in-line2' style={{
                            fontSize: '2.6vw',
                            width: '100%',
                            height: 'auto',
                            textAlign: 'center',
                            lineHeight: 1.4,
                            opacity:0
                        }}>
                            한 팀으로 하나의 프로젝트를 진행합니다.
                        </div>
                        <div id='fade-in-line3' style={{
                            fontSize: '1.25vw',
                            width: '100%',
                            textAlign: 'center',
                            lineHeight: 1.5,
                            paddingTop: 55,
                            opacity:0
                        }}>우리는 서로 끊임없는 피드백을 주고받으며
                        </div>
                        <div id='fade-in-line4' style={{
                            fontSize: '1.25vw',
                            width: '100%',
                            textAlign: 'center',
                            lineHeight: 1.5,
                            marginBottom: 214,
                            opacity:0
                        }}>
                            더 좋은 퀄리티를 위해 노력합니다.
                        </div>
                    </div>


                    {serviceContents.map((v, i) => {
                        return (
                            <div key={i} style={{
                                width: '76vw',
                                // height: 516,
                                aspectRatio: '2.83/1',
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                margin: '0 auto 0 auto',
                                columnGap: '8vw',
                                boxSizing: 'border-box',
                                marginTop: 170,
                                overflow: 'hidden',
                                maxHeight: scrollY > 3300 + i * 706 ? '600px' : '0',
                                transform: scrollY > 3300 + i * 706 ? '' : 'translateY(50%)',
                                transition: 'max-height 1.5s ease, transform 1.5s ease'
                            }}>
                                {i % 2 === 0 ?
                                    <>
                                        <div style={{
                                            width: '100%',
                                            fontSize: '2.6vw',
                                            fontWeight: 600,
                                            color: colorList['navy'],
                                            whiteSpace: 'pre-line',
                                            marginTop: 150,
                                            boxSizing: 'border-box',
                                        }}>{v.mainText}<br/>
                                            <div style={{
                                                lineHeight: 1.6,
                                                marginTop: 12,
                                                fontSize: '1.04vw',
                                                color: colorList['black'],
                                                fontWeight: 400,
                                            }}>{v.subText}</div>
                                        </div>
                                        <div style={{textAlign:'right'}}>
                                            <img src={v.src} alt='image' style={{
                                                objectFit: 'contain',
                                                width: '90%',
                                                height: 'auto',
                                                maxHeight: '100%'
                                            }}/>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div>
                                            <img src={v.src} alt='image' style={{
                                                objectFit: 'contain',
                                                width: '90%',
                                                height: 'auto',
                                                maxHeight: '100%'
                                            }}/>
                                        </div>
                                        <div style={{
                                            width: '100%',
                                            fontSize: '2.6vw',
                                            fontWeight: 600,
                                            color: colorList['navy'],
                                            whiteSpace: 'pre-line',
                                            marginTop: 150,
                                            boxSizing: 'border-box',
                                        }}>{v.mainText}<br/>
                                            <div style={{
                                                lineHeight: 1.6,
                                                marginTop: 12,
                                                fontSize: '1.04vw',
                                                color: colorList['black'],
                                                fontWeight: 400,
                                            }}>{v.subText}</div>
                                        </div>
                                    </>
                                }
                            </div>
                        )
                    })}
                </div>


                <div id='process' ref={(el) => (refs.current.process = el)} style={{
                    width: '100%',
                    aspectRatio: '1.77/1',
                    margin: '0 auto',
                    backgroundColor: colorList['backGray'],
                    position: 'relative',
                    textAlign: 'center',
                    padding: '184px 0 135px 0',
                }}>
                    <div className={scrollY >= 6100 && 'slide-up'} style={{opacity:0, fontSize: '2.6vw', fontWeight: 600,}}>
                        Process
                    </div>
                    <div className={scrollY >= 6120 && 'slide-up'} style={{opacity:0, fontSize: '1.25vw', marginTop: 55, lineHeight: 1.6}}>
                        Asana, Slack, 카카오톡 단톡방을 통해 모든 작업자와 클라이언트가 <span
                        style={{fontWeight: 600}}>실시간으로 소통하며,</span><br/>
                        고객사는 프로젝트 <span style={{fontWeight: 600}}>진행 상황을 즉시 확인</span>할 수 있습니다.<br/>
                        필요한 경우 Google Meet, Zoom, Slack을 활용해 신속하게 미팅을 진행합니다.
                    </div>

                    <div style={{
                        display: 'flex',
                        width: '75vw',
                        justifyContent: 'space-between',
                        margin: '170px auto 0 auto'
                    }}>

                        {processContents.map((v, i) => {
                            return (
                                <div key={i} className={`step-card ${scrollY>6500? 'slide-up':''}`} style={{position: 'relative',}}>
                                    <img src={v.src} alt='image' style={{width: '17vw', aspectRatio:'0.78/1'}}/>
                                    <div style={{
                                        textAlign: "left",
                                        width: '17vw',
                                        aspectRatio:'0.78/1',
                                        backgroundColor: 'white',
                                        position: 'absolute',
                                        top: 0,
                                        borderRadius: 8,
                                        padding: '36px 1.87vw',
                                        boxSizing: 'border-box',
                                        opacity: 0
                                    }}>
                                        <div style={{
                                            whiteSpace: 'pre-line',
                                            color: colorList['mainColor'],
                                            fontSize: '1.25vw',
                                            position: 'absolute',
                                            bottom: i === 3 ? 170 : 190,
                                        }}>
                                            {v.title}
                                        </div>
                                        <div style={{
                                            whiteSpace: 'pre-line',
                                            textAlign: "left",
                                            fontSize: '0.94vw',
                                            position: 'absolute',
                                            bottom: 40,
                                            lineHeight: 1.3
                                        }}>
                                            {v.description}
                                        </div>
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        top: 45,
                                        left: 36,
                                        fontWeight: 600,
                                        fontSize: '1.87vw',
                                        color: 'white',
                                    }}>STEP{i + 1}
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div id='whatWeDo' ref={(el) => (refs.current.whatWeDo = el)} style={{
                    width: '100%',
                    aspectRatio: '2.43/1',
                    margin: '0 auto',
                    backgroundColor: colorList['backGray'],
                    position: 'relative',
                    textAlign: 'center',
                }}>
                    <div className={scrollY >= 7500 && 'slide-up'} style={{opacity:0, textAlign: 'center', fontSize: '2.6vw', fontWeight: 600, paddingTop: 111}}>
                        What We do
                    </div>
                    <div className={scrollY >= 7550 && 'slide-up'} style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        columnGap: '1vw',
                        rowGap: 30,
                        gridAutoFlow: 'row',
                        width: '75vw',
                        margin: '10% auto 0 auto',
                        opacity:0,
                    }}>

                        {coworkingImages.map((v, i) => {
                            return (
                                <div className='company-logo' key={i} id={`${i}`} onMouseEnter={() => setCurrentLogo(i)}
                                     onMouseLeave={() => setCurrentLogo(null)}
                                     style={{
                                         borderRadius: '10px',
                                         boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.1)',
                                         width: '17.7vw',
                                         aspectRatio:'2.57',
                                         backgroundColor: 'white',
                                         display: 'flex',
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                     }}>
                                    {currentLogo === i ?
                                        <img style={{
                                            objectFit: 'scale-down',
                                            height: '50%',
                                            width: v.width
                                        }} id={`${i}`} onMouseEnter={() => setCurrentLogo(i)}
                                             onMouseLeave={() => setCurrentLogo(null)} src={v.src} alt={`${i}`}/> :
                                        <img style={{
                                            objectFit: 'scale-down',
                                            height: '50%',
                                            width: v.width
                                        }} id={`${i}`} onMouseEnter={() => setCurrentLogo(i)}
                                             onMouseLeave={() => setCurrentLogo(null)} src={v.src2} alt={`${i}`}/>}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div id='faq' ref={(el) => (refs.current.faq = el)} style={{
                    width: '100%',
                    aspectRatio: '1.3/1',
                    margin: '0 auto',
                    position: 'relative',
                    boxSizing: 'border-box'
                }}>
                    <div className={scrollY >= 8200 && 'slide-up'} style={{opacity:0, fontSize: '2.6vw', fontWeight: 600, padding: '145px 12.23vw',}}>
                        FAQ's
                    </div>
                    <div className={scrollY >= 8220 && 'slide-up'} style={{opacity:0, position: 'absolute', top: 205, right: '12.2vw'}}>
                        <Faq func={selectIdFunc} selectId={selectId}/>
                    </div>
                </div>

                <div id='contact' ref={(el) => (refs.current.contact = el)} style={{
                    width:'100%',
                    margin: '0 auto',
                    position: 'relative',
                    paddingTop: '80px',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        width: '75vw',
                        aspectRatio:'2.21',
                        margin: 'auto',
                        position: 'relative',
                    }}>
                        <img src={'/temp_background.png'} alt='contact' width={'100%'}
                             style={{borderRadius: '20px', aspectRatio:'2.22'}}/>
                        <div style={{
                            width: '100%',
                            aspectRatio: '2.2',
                            backgroundColor: 'white',
                            opacity: 0.8,
                            position: 'absolute',
                            top: 0
                        }}/>
                        <div style={{
                            position: 'absolute',
                            top: '20%',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <div style={{fontWeight: 600, fontSize: '2.6vw', lineHeight: 1.4}}>Contact<br/>
                                <div style={{fontWeight: 400}}>이메일 또는 전화번호를 남겨주세요</div>
                            </div>
                            <div style={{marginTop: 30, lineHeight: 1.4, fontSize: '1.25vw'}}>연락처를 남겨주시면<br/>
                                신속히 답변드리겠습니다.
                            </div>
                            <div style={{
                                width: '15.3vw',
                                aspectRatio:'4.9',
                                color: '#AEAEAE',
                                fontSize: '1vw',
                                fontWeight: 500,
                                lineHeight: 2.9,
                                borderRadius: 30,
                                marginTop: 35,
                                border: '1px solid #AEAEAE'
                            }}>
                                <input value={customerContact} onChange={(e) => setCustomerContact(e.target.value)}
                                       style={{
                                           fontSize: '1vw',
                                           background: "transparent",
                                           width: '90%',
                                           textAlign: 'center',
                                           border: 'none'
                                       }} placeholder='이메일 또는 전화번호'/>
                            </div>
                            <div style={{
                                width: '15vw',
                                aspectRatio: '4.9',
                                color: 'white',
                                fontSize: '1vw',
                                fontWeight: 500,
                                lineHeight: 2.9,
                                backgroundColor: colorList['navy'],
                                borderRadius: 30,
                                marginTop: 20,
                                cursor: 'pointer'
                            }} onClick={handleClickContactButton}>
                                문의하기
                            </div>
                            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} message={modalMessage}/>
                        </div>
                    </div>
                </div>



                <div style={{width: '100%', height: 'auto', margin: '210px auto 0 auto'}}>
                    <div style={{backgroundColor: colorList['gray'], height: '1px', width: '100%'}}/>
                    <div style={{
                        width: '100%',
                        height: 'auto',
                        display: 'grid',
                        gridTemplateColumns: '4fr 2fr 3fr',
                        padding: '65px 170px 58px 170px',
                        boxSizing: 'border-box',
                        fontSize: '0.93vw'
                    }}>
                        <div>
                            <div style={{display: 'flex', gap: '0.67vw', margin: '22px 0 0 0'}}>
                                <img src={CI} style={{width: '1.66vw'}} alt="CI" id="ci"/>
                                <img src={CI_text} style={{width: '5.57vw', objectFit: 'contain'}} alt="CI" id="ci_text"/>
                            </div>
                            <div style={{fontSize: '1vw', marginTop: 25}}>2024 @ progist All Rights Reserved.</div>
                        </div>

                        <div style={{color: colorList['mainColor'], display: 'flex', flexDirection: 'column', gap: '0.67vw'}}>
                            {menuList.map((v, i) => {
                                return (
                                    <div key={i} style={{cursor: 'pointer'}}
                                         onClick={() => handleScrollTo(v.key)}>{v.title}</div>
                                )
                            })}
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', gap: '0.67vw'}}>
                            <div><span style={{fontWeight: 500}}>본사</span> 서울특별시 강남구 논현동 36-11 401호</div>
                            <div><span style={{fontWeight: 500}}>연구소</span> 서울특별시 강남구 논현동 36-11 401호</div>
                            <div><span style={{fontWeight: 500}}>Project Request</span> hblee@progist.co.kr</div>
                            <div><span style={{fontWeight: 500}}>Tel</span> 010-8636-2553</div>
                        </div>

                    </div>
                </div>
                <div className="text_flow_container" style={{width: '100%', height:'160px', overflow:'hidden', margin: '0 auto'}}>
                    <p className="text_flow reverse origin" id='reverse'>{`Turn your Vision into Reality!\u00A0`}</p>
                    <p className="text_flow reverse clone" id='reverse'>{`Turn your Vision into Reality!\u00A0`}</p>
                </div>


            </div>

        </>
    );
};

export default Landing;