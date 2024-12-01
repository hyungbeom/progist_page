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

gsap.registerPlugin(useGSAP);gsap.registerPlugin(ScrollTrigger);

const Landing = () => {

    const [activeId, setActiveId] = useState(null)
    const [scrollY, setScrollY] = useState(0);
    const [customerContact, setCustomerContact] = useState('')

    const [modalMessage, setModalMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentLogo, setCurrentLogo] = useState(null);

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
            refs.current[section].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleClickQuestion = (e) => {
        // console.log(e.target.id)
        setActiveId(e.target.id);
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

    const TypewriterEffect = () => {
        const txt1 = '프로젝트 매니저, 디자이너, 개발자';
        const txt2 = '가\n';
        const txt3 = '한팀팀으로 하나의 프로젝트를 진행합니다.';
        const [typedText1, setTypedText1] = useState('');
        const [typedText2, setTypedText2] = useState('');
        const [typedText3, setTypedText3] = useState('');
        const [slideUp, setSlideUp] = useState(false)

        useEffect(() => {
            let i = 0; // 인덱스 관리

            const typeWriter1 = () => {
                if (i < txt1.length) {
                    setTypedText1((prevText) => prevText + txt1.charAt(i));
                    i++;
                    setTimeout(typeWriter1, 50);
                } else {
                    i = 0;
                    typeWriter2();
                }
            };

            // 두 번째 문장 타이핑
            const typeWriter2 = () => {
                if (i < txt2.length) {
                    setTypedText2((prevText) => prevText + txt2.charAt(i));
                    i++;
                    setTimeout(typeWriter2, 50);
                } else {
                    i = 0;
                    typeWriter3();
                }
            };

            // 세 번째 문장 타이핑
            const typeWriter3 = () => {
                if (i < txt3.length) {
                    setTypedText3((prevText) => prevText + txt3.charAt(i));
                    i++;
                    setTimeout(typeWriter3, 50);
                } else {
                    setSlideUp(true)
                }
            };
            if (scrollY>2600) {
                typeWriter1();
            }

        }, [scrollY<2600]);


        return (
            <div style={{width:'100%', height:'400px'}}>
            <div id='service-typing' style={{
                fontSize: 50,
                width: '100%',
                height: 'auto',
                textAlign: 'center',
                paddingTop: 145,
                lineHeight: 1.4,
                whiteSpace: 'pre-line'
            }}>
                <span style={{fontWeight: 600}}>{typedText1}</span>{typedText2}<br/>
                {typedText3}
            </div>
            <div style={{
                fontSize: 24,
                width: '100%',
                textAlign: 'center',
                lineHeight: 1.5,
                paddingTop: 55,
                marginBottom: 214,
                overflow:'hidden',
                maxHeight:slideUp?'126px':'0',
                transform:slideUp?'':'translateY(30%)',
                transition:'max-height 2s ease, transform 1s ease'
            }}>우리는 서로 끊임없는 피드백을 주고받으며<br/>
                더 좋은 퀄리티를 위해 노력합니다.
            </div>
        </div>
    );
    };

    useGSAP(()=>{

        ScrollTrigger.create({
            trigger: "#landing-page",
            start: "top top",
            end: "2400px",
            pin: true,
            scrub: false,
            toggleActions: 'restart none restart none',
            markers: true,
        },);

        },[])

    return (
        <>
            <Header refs={refs}/>
            <div id='landing-page' ref={(el) => (refs.current.whoWeAre = el)} style={{width: '98vw', height: 'auto',}}>
                <div style={{
                    width: '100%',
                    height: 'auto',
                    margin: '0 auto',
                    boxSizing: 'border-box',
                    zIndex: 2,
                }}>
                    <div style={{
                        width: '1920px',
                        height: '1080px',
                        margin: '0 auto',
                        position: 'relative',
                        backgroundImage: 'url(/temp_background.png)',
                    }}>
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
                            fontSize: 80,
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
                                fontSize: 80,
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
                                fontSize: 24,
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
                            fontSize: 36,
                            color: colorList['black'],
                            textAlign: 'center',
                            position: 'absolute',
                            top: 400,
                            lineHeight: 1.3,
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


                <div ref={(el) => (refs.current.services = el)} style={{
                    width: '1920px',
                    height: '3264px',
                    margin: '0 auto',
                    paddingBottom: '215px',
                    backgroundColor: colorList['backGray'],
                    position: 'relative',
                }}>

                    <TypewriterEffect/>


                    {serviceContents.map((v, i) => {
                        return (
                            <div key={i} style={{
                                width: 1460,
                                height: 516,
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                margin: '0 auto 0 auto',
                                columnGap: 200,
                                boxSizing: 'border-box',
                                marginTop: 200,
                                overflow: 'hidden',
                                maxHeight: scrollY > 3300 + i * 716 ? '600px' : '0',
                                transform: scrollY > 3300 + i * 716 ? '' : 'translateY(50%)',
                                transition: 'max-height 1.5s ease, transform 1.5s ease'
                            }}>
                                {i % 2 === 0 ?
                                    <>
                                        <div style={{
                                            width: '100%',
                                            height: 516,
                                            fontSize: 50,
                                            fontWeight: 600,
                                            color: colorList['navy'],
                                            whiteSpace: 'pre-line',
                                            marginTop: 190,
                                            boxSizing: 'border-box',
                                        }}>{v.mainText}<br/>
                                            <div style={{
                                                lineHeight: 1.6,
                                                marginTop: 12,
                                                fontSize: 20,
                                                color: colorList['black']
                                            }}>{v.subText}</div>
                                        </div>
                                        <div>
                                            <img src={v.src} alt='image' style={{
                                                objectFit: 'contain',
                                                width: '100%',
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
                                                width: '100%',
                                                height: 'auto',
                                                maxHeight: '100%'
                                            }}/>
                                        </div>
                                        <div style={{
                                            width: '110%',
                                            height: 500,
                                            fontSize: 50,
                                            fontWeight: 600,
                                            color: colorList['navy'],
                                            whiteSpace: 'pre-line',
                                            marginTop: 190,
                                            boxSizing: 'border-box',
                                        }}>{v.mainText}<br/>
                                            <div style={{
                                                lineHeight: 1.6,
                                                marginTop: 12,
                                                fontSize: 20,
                                                color: colorList['black']
                                            }}>{v.subText}</div>
                                        </div>
                                    </>
                                }
                            </div>
                        )
                    })}
                </div>


                <div ref={(el) => (refs.current.process = el)} style={{
                    width: '1920px',
                    height: '1080px',
                    margin: '0 auto',
                    backgroundColor: colorList['backGray'],
                    position: 'relative',
                    textAlign: 'center',
                }}>
                    <div style={{fontSize: 50, fontWeight: 600, paddingTop: 184}}>
                        Process
                    </div>
                    <div style={{fontSize: 24, marginTop: 55, lineHeight: 1.6}}>
                        Asana, Slack, 카카오톡 단톡방을 통해 모든 작업자와 클라이언트가 <span
                        style={{fontWeight: 600}}>실시간으로 소통하며,</span><br/>
                        고객사는 프로젝트 <span style={{fontWeight: 600}}>진행 상황을 즉시 확인</span>할 수 있습니다.<br/>
                        필요한 경우 Google Meet, Zoom, Slack을 활용해 신속하게 미팅을 진행합니다.
                    </div>

                    <div style={{
                        display: 'flex',
                        width: '1440px',
                        justifyContent: 'space-between',
                        margin: '170px auto 0 auto'
                    }}>

                        {processContents.map((v, i) => {
                            return (
                                <div key={i} className='step-card' style={{position: 'relative', cursor: 'pointer'}}>
                                    <img src={v.src} alt='image' style={{width: 330, height: 420}}/>
                                    <div style={{
                                        textAlign: "left",
                                        width: 330,
                                        height: 420,
                                        backgroundColor: 'white',
                                        position: 'absolute',
                                        top: 0,
                                        borderRadius: 10,
                                        padding: 36,
                                        boxSizing: 'border-box',
                                        opacity: 0
                                    }}>
                                        <div style={{
                                            whiteSpace: 'pre-line',
                                            color: colorList['mainColor'],
                                            fontSize: 24,
                                            position: 'absolute',
                                            bottom: i === 3 ? 170 : 190,
                                        }}>
                                            {v.title}
                                        </div>
                                        <div style={{
                                            whiteSpace: 'pre-line',
                                            textAlign: "left",
                                            fontSize: 18,
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
                                        fontSize: 36,
                                        color: 'white',
                                    }}>STEP{i + 1}
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div ref={(el) => (refs.current.whatWeDo = el)} style={{
                    width: '1920px',
                    height: '790px',
                    margin: '0 auto',
                    backgroundColor: colorList['backGray'],
                    position: 'relative',
                    textAlign: 'center',
                }}>
                    <div style={{textAlign: 'center', fontSize: 50, fontWeight: 600, paddingTop: 111}}>
                        What We do
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        columnGap: 20,
                        rowGap: 30,
                        gridAutoFlow: 'row',
                        width: '1440px',
                        margin: '230px auto 0 auto'
                    }}>

                        {coworkingImages.map((v, i) => {
                            return (
                                <div className='company-logo' key={i} id={`${i}`} onMouseEnter={() => setCurrentLogo(i)}
                                     onMouseLeave={() => setCurrentLogo(null)}
                                     style={{
                                         borderRadius: '10px',
                                         boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.1)',
                                         width: 340,
                                         height: 132,
                                         backgroundColor: 'white',
                                         display: 'flex',
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         cursor: 'pointer',

                                     }}>
                                    {currentLogo === i ?
                                        <img style={{
                                            cursor: 'pointer',
                                            objectFit: 'scale-down',
                                            height: '50%',
                                            width: v.width
                                        }} id={`${i}`} onMouseEnter={() => setCurrentLogo(i)}
                                             onMouseLeave={() => setCurrentLogo(null)} src={v.src} alt={`${i}`}/> :
                                        <img style={{
                                            cursor: 'pointer',
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

                <div ref={(el) => (refs.current.faq = el)} style={{
                    width: '1920px',
                    height: '1400px',
                    margin: '0 auto',
                    position: 'relative',
                    boxSizing: 'border-box'
                }}>
                    <div style={{fontSize: 50, fontWeight: 600, padding: '145px 235px',}}>
                        FAQ's
                    </div>
                    <div style={{position: 'absolute', top: 205, right: 235}}>
                        {faqList.map((v, i) => {
                            return (
                                <div key={i} id={v.id} onClick={handleClickQuestion} style={{
                                    width: 840,
                                    height: 'auto',
                                    padding: activeId === v.id ? "40px" : "20px 40px",
                                    marginBottom: activeId === v.id ? 20 : 0,
                                    boxSizing: 'border-box',
                                    backgroundColor: activeId === v.id ? colorList['backGray'] : "",
                                    borderRadius: '10px',
                                    boxShadow: activeId === v.id ? '5px 5px 20px rgba(0, 0, 0, 0.1)' : "",
                                    cursor: 'pointer',
                                    transition: 'padding 0.5s ease, marginBottom 0.5s ease, boxShadow 0.5s ease, backgroundColor 0.5s ease,'
                                }}>
                                    <div id={v.id} onClick={handleClickQuestion} style={{
                                        fontWeight: 550,
                                        fontSize: 24,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        paddingBottom: 30,
                                        zIndex: 5
                                    }}>{v.question}
                                        <div style={{position: 'relative'}}>
                                            {activeId === v.id ? <img src={iconFold} alt='fold' style={{
                                                    position: "absolute",
                                                    width: 25,
                                                    right: 45,
                                                    top: 12
                                                }}/> :
                                                <img src={iconUnfold} alt='unfold'
                                                     style={{position: "absolute", width: 25, right: 45}}/>}</div>
                                    </div>
                                    <div style={{
                                        fontSize: 18,
                                        maxHeight: activeId === v.id ? '1000px' : 0,
                                        transition: 'max-height 1.5s ease'
                                    }}>{activeId === v.id ? v.answer : ""}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div ref={(el) => (refs.current.contact = el)} style={{
                    width: '1920px',
                    height: '900px',
                    margin: '0 auto',
                    position: 'relative',
                    padding: '80px 0',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        width: 1440,
                        height: 650,
                        margin: '0 auto',
                        position: 'relative',
                    }}>
                        <img src={'/temp_background.png'} alt='contact' width={1440} height={650}
                             style={{borderRadius: '20px'}}/>
                        <div style={{
                            width: '1440px',
                            height: '652px',
                            backgroundColor: 'white',
                            opacity: 0.8,
                            position: 'absolute',
                            top: 0
                        }}/>
                        <div style={{
                            position: 'absolute',
                            top: 130,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <div style={{fontWeight: 600, fontSize: 50, lineHeight: 1.4}}>Contact<br/>
                                <div style={{fontWeight: 400}}>이메일 또는 전화번호를 남겨주세요</div>
                            </div>
                            <div style={{marginTop: 30, lineHeight: 1.4, fontSize: 24}}>연락처를 남겨주시면<br/>
                                신속히 답변드리겠습니다.
                            </div>
                            <div style={{
                                width: 295,
                                height: 60,
                                color: '#AEAEAE',
                                fontSize: 20,
                                fontWeight: 500,
                                lineHeight: 2.9,
                                borderRadius: 30,
                                marginTop: 35,
                                border: '1px solid #AEAEAE'
                            }}>
                                <input value={customerContact} onChange={(e) => setCustomerContact(e.target.value)}
                                       style={{
                                           fontSize: 20,
                                           background: "transparent",
                                           width: '90%',
                                           textAlign: 'center',
                                           border: 'none'
                                       }} placeholder='이메일 또는 전화번호'/>
                            </div>
                            <div style={{
                                width: 295,
                                height: 60,
                                color: 'white',
                                fontSize: 20,
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

                <div style={{width: '1920px', height: 'auto', margin: '0 auto'}}>
                    <div style={{backgroundColor: colorList['gray'], height: '1px', width: '100%'}}/>
                    <div style={{
                        width: '100%',
                        height: 'auto',
                        display: 'grid',
                        gridTemplateColumns: '4fr 2fr 3fr ',
                        padding: '65px 170px 58px 170px',
                        boxSizing: 'border-box'
                    }}>
                        <div>
                            <div style={{display: 'flex', gap: 13, margin: '22px 0 0 0'}}>
                                <img src={CI} style={{width: 32}} alt="CI" id="ci"/>
                                <img src={CI_text} style={{width: 107, objectFit: 'contain'}} alt="CI" id="ci_text"/>
                            </div>
                            <div style={{fontSize: 20, marginTop: 25}}>2024 @ progist All Rights Reserved.</div>
                        </div>

                        <div style={{color: colorList['mainColor'], display: 'flex', flexDirection: 'column', gap: 13}}>
                            {menuList.map((v, i) => {
                                return (
                                    <div key={i} style={{cursor: 'pointer'}}
                                         onClick={() => handleScrollTo(v.key)}>{v.title}</div>
                                )
                            })}
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', gap: 13}}>
                            <div><span style={{fontWeight: 550}}>본사</span> 서울특별시 강남구 논현동 36-11 401호</div>
                            <div><span style={{fontWeight: 550}}>연구소</span> 서울특별시 강남구 논현동 36-11 401호</div>
                            <div><span style={{fontWeight: 550}}>Project Request</span> hblee@progist.co.kr</div>
                            <div><span style={{fontWeight: 550}}>Tel</span> 010-8636-2553</div>
                        </div>

                    </div>
                </div>
                <div className="text_flow_container" style={{width: '1920px', margin: '0 auto'}}>
                    <p className="text_flow reverse origin" id='reverse'>{`Turn your Vision into Reality!\u00A0`}</p>
                    <p className="text_flow reverse clone" id='reverse'>{`Turn your Vision into Reality!\u00A0`}</p>
                </div>


            </div>
        </>
    );
};

export default Landing;