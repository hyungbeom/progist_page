import React, {useEffect, useRef, useState} from 'react';
import {colorList} from "../assets/utils/colorList";
import {coworkingImages, faqList, processContents, serviceContents} from "../assets/contents/LandingContents";
import arrowDown from "../assets/images/icon_arrow_down.png"
import arrowUp from "../assets/images/icon_arrow_up.png"
import iconFold from "../assets/images/icon_fold.png"
import iconUnfold from "../assets/images/icon_unFold.png"
import CI from "../assets/images/CI.png";
import CI_text from "../assets/images/CI_text.png";

import Header_m from "../components/header/header_m";
import handleSendEmail from "../components/tools/SendEmail";
import {menuList} from "../assets/contents/MenuList";
import Modal from "../components/modal";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);gsap.registerPlugin(ScrollTrigger);

const Landing_m = () => {

    const [activeId, setActiveId] = useState(null)
    const [closingId, setClosingId] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [customerContact, setCustomerContact] = useState('')

    const [modalMessage, setModalMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState(0);

    const refs = useRef({
        whoWeAre: null,
        services: null,
        process: null,
        whatWeDo: null,
        faq: null,
        contact: null,
    });

    const handleProcessCard=(i)=>{
        // console.log("Clicked index:", i);
        setCurrentCard(i)
    }

    const handleScrollTo = (section) => {
        if (refs.current[section]) {
            refs.current[section].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleClickQuestion = (e) => {
        // console.log(e.target.id)
        if (e.target.id===activeId) {
            setClosingId(e.target.id); // 닫기 애니메이션 트리거
            setTimeout(() => {
                setActiveId(null); // 애니메이션이 끝난 후 상태 변경
                setClosingId(null);
            }, 1000)
        }else {
            setActiveId(e.target.id);
            setClosingId(null);
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
        // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll);
        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useGSAP(()=>{
        gsap.to(".ripple-container", {
            y: 1900,
            scrollTrigger: {
                trigger: ".ripple-container",
                start: "top 5%",
                end: "+=1900px",
                scrub: 1,
                // markers: true,
            },
        });

        gsap.timeline({ repeat: -1 }) // 무한 반복
            .to(".ripple", {
                scale: 5, // 물결 확장
                opacity: 0, // 점차 사라짐
                duration: 5, // 애니메이션 지속 시간
                ease: "power1.out", // 부드러운 애니메이션 효과
                stagger: 0.3, // 각 물결 사이 간격
            });

        let tl1 = gsap.timeline()

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

    }, []);



    return (
        <div style={{width: '100vw', height: 'auto', display: 'flex', flexDirection: 'column'}}>
            <Header_m refs={refs}/>
            {/*page1*/}
            <div ref={(el) => (refs.current.whoWeAre = el)} style={{
                width: '100%',
                minWidth: 390,
                aspectRatio: '0.46/1',
                margin: '0 auto',
                boxSizing: 'border-box',
                backgroundColor: colorList['gray'],
                padding: '90% 4.5% 0 4.5%',
            }}>
                <div className='slide-up' style={{
                    width: '100%',
                    fontSize: '9.5vw',
                    fontWeight: 600,
                    color: 'white',
                    textAlign: 'center',
                    lineHeight: 1.2,
                }}>
                    Turn your Vision<br/>into Reality</div>
                    <div className='slide-up'
                    style={{color: 'white',  textAlign: 'center', opacity:0, fontSize: '5.4vw', lineHeight: 2.5}}>당신의 비전을 현실로, <span
                    style={{fontWeight: 600, fontSize: '6.8vw', color: colorList['mainColor']}}>PROGIST</span></div>


            </div>

            {/*page2*/}
            <div style={{
                width: '100%',
                minWidth: 390,
                aspectRatio: '0.46/1',
                margin: '0 auto',
                boxSizing: 'border-box',
                backgroundColor: colorList['gray'],
                padding: '90% 4.5% 0 4.5%',
            }}>
                <div className={scrollY>500 &&'slide-up'} style={{
                    width: '100%',
                    fontSize: '9vw',
                    fontWeight: 600,
                    color: 'white',
                    lineHeight: 1.5,
                    opacity:0
                }}>
                    우리는<br/>PROGIST<br/>입니다
                </div>
                <div className={scrollY>600 &&'slide-up'}
                    style={{
                        width: 'auto',
                        fontSize: '4vw',
                        color: 'white',
                        padding: '5%',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        lineHeight: 1.7,
                        marginTop: '27%',
                        opacity:0
                    }}>
                    : “프로그램(program)”과 특정 분야의 전문성을<br/>
                    지닌 사람을 나타내는 “-ist”의 조합으로,<br/>
                    고객의 비전을 실현하는<br/>
                    <span style={{fontWeight: 600}}>e-Business 토탈 서비스 기업</span> 입니다.
                </div>
            </div>

            {/*page3*/}
            <div style={{
                width: '100%',
                minWidth: 390,
                aspectRatio: '0.46/1',
                margin: '0 auto',
                boxSizing: 'border-box',
                backgroundColor: colorList['lightGray'],
                padding: '4.5%',
            }}>
                <div className={scrollY>1400 && 'fade-in'} style={{
                    width: '100%',
                    height: 'auto',
                    fontSize: '4.5vw',
                    color: colorList['black'],
                    textAlign: 'center',
                    lineHeight: 2,
                    marginTop: '60%',
                    opacity:0,
                }}>
                    프로지스트는<br/>고객의 비전을 실현하기 위해<br/>
                    <span style={{fontWeight: 600}}>전략적 컨설팅</span>과 혁신적인 IT 솔루션을 제공하며,<br/>
                    <span style={{fontWeight: 600}}>웹 개발, 전자상거래 솔루션,<br/>
                        마케팅 전략</span>, <span style={{fontWeight: 600}}>IT 인프라 지원</span>을 통해<br/>
                    고객의 성공을 돕습니다.<br/><br/>
                    변화하는 디지털 환경 속에서<br/>맞춤형 접근을 통해 최적의 솔루션을<br/>
                    제공하고, 명확한 목표 달성을 위한<br/>차별화된 성과를 창출합니다.
                </div>
            </div>

            {/*service*/}
            <div ref={(el) => (refs.current.services = el)} style={{
                width: '100%',
                minWidth: 390,
                aspectRatio: '0.135/1',
                margin: '0 auto',
                boxSizing: 'border-box',
                backgroundColor: colorList['backGray'],
                padding: '4.5%',
            }}>
                <div id='fade-in-line1' style={{
                    fontSize: '5.5vw',
                    width: '100%',
                    height: 'auto',
                    textAlign: 'center',
                    marginTop: '65%',
                    lineHeight: 1.4,
                    opacity:0,
                }}><span style={{fontWeight: 600}}>프로젝트 매니저, 디자이너, 개발자</span>가<br/></div>

                   <div id='fade-in-line2' style={{
                       fontSize: '5.5vw',
                       width: '100%',
                       height: 'auto',
                       textAlign: 'center',
                       lineHeight: 1.4,
                       opacity:0,
                   }}>한팀으로 하나의 프로젝트를 진행합니다.</div>

                    <div id='fade-in-line3' style={{
                        fontSize: '4vw',
                        width: '100%',
                        textAlign: 'center',
                        marginTop: '15%',
                        lineHeight: 1.5,
                        color: '#626262',
                        opacity:0,
                    }}>우리는 서로 끊임없는 피드백을 주고받으며</div>

                        <div id='fade-in-line4' style={{
                            fontSize: '4vw',
                            width: '100%',
                            textAlign: 'center',
                            lineHeight: 1.5,
                            opacity:0,
                            color: '#626262'}}>더 좋은 퀄리티를 위해 노력합니다.</div>


                <div id='service-flow' style={{display: 'grid', gridTemplateColumns: '1fr 10fr', marginTop: '100%',}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div
                            className="ripple-container"
                            style={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "21px",
                                width: "21px",
                                borderRadius: "50%",
                                border: '5px solid #86A4E8',
                                backgroundColor: colorList['navy'],
                                overflow: "hidden",
                            }}
                        >
                            <div
                                className="ripple"
                                style={{
                                    position: "absolute",
                                    borderRadius: "50%",
                                    width: "100%",
                                    height: "100%",
                                    border: "5px solid #86A4E8",
                                    backgroundColor: "transparent",
                                    transform: "scale(0)", // 초기 크기
                                    opacity: 1, // 초기 투명도
                                }}
                            ></div>
                            <div
                                className="ripple"
                                style={{
                                    position: "absolute",
                                    borderRadius: "50%",
                                    width: "100%",
                                    height: "100%",
                                    border: "5px solid #86A4E8",
                                    backgroundColor: "transparent",
                                    transform: "scale(0)", // 초기 크기
                                    opacity: 1, // 초기 투명도
                                }}
                            ></div>
                            <div
                                className="ripple"
                                style={{
                                    position: "absolute",
                                    borderRadius: "50%",
                                    width: "100%",
                                    height: "100%",
                                    border: "5px solid #86A4E8",
                                    backgroundColor: "transparent",
                                    transform: "scale(0)", // 초기 크기
                                    opacity: 1, // 초기 투명도
                                }}
                            ></div>
                        </div>
                        <div style={{backgroundColor: colorList['black'], height: '97.5%', width: 1}}/>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', rowGap: '130px', padding: '0 5%', boxSizing:'border-box' }}>
                        {serviceContents.map((v, i) => {
                            return (
                                <div key={i}>
                                    <div className={scrollY > 2800 + i * 520 && 'slide-up'} style={{
                                        width: '100%',
                                        height: 'auto',
                                        fontSize: '5.5vw',
                                        fontWeight: 600,
                                        color: colorList['navy'],
                                        whiteSpace: 'pre-line',
                                        boxSizing: 'border-box',
                                        opacity: 0,
                                    }}>{v.mainText}<br/>
                                        <div className={scrollY>2815+i*520 && 'slide-up'} style={{
                                            opacity:0,
                                            fontWeight: 500,
                                            fontSize: '3.4vw',
                                            color: colorList['black'],
                                            lineHeight:1.5,
                                            marginTop: 10,
                                        }}>{v.subText}</div>
                                    </div>
                                    <div>
                                        <img className={scrollY>2830+i*520 && 'slide-up'} src={v.src} alt='image' style={{
                                            objectFit: 'fill',
                                            objectPosition: 'center center',
                                            width: '105%',
                                            aspectRatio: '1.26/1',
                                            maxHeight: '100%',
                                            opacity:0,
                                            marginTop:20,
                                        }}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


            {/*process*/}
            <div ref={(el) => (refs.current.process = el)} style={{
                width: '100%',
                minWidth: 390,
                aspectRatio: '1.7/1',
                margin: '0 auto',
                boxSizing: 'border-box',
                backgroundColor: colorList['backGray'],
                padding: '4.5%',
                color: colorList['black']
            }}>
                <div className={scrollY>5200 && 'slide-up'} style={{opacity:0, fontSize: '5.4vw', fontWeight: 600, width: '100%', textAlign: 'center'}}>
                    Process
                </div>

                <div className={scrollY>5230 && 'slide-up'} style={{
                    marginTop: '5%',
                    fontSize: '3.4vw',
                    fontWeight: 500,
                    width: '100%',
                    padding: '2%',
                    lineHeight: 1.5,
                    opacity:0,
                }}>
                    Asana, Slack, 카카오톡 단톡방을 통해<br/>
                    모든 작업자와 클라이언트가 실시간으로 소통하며,<br/>
                    고객사는 프로젝트 진행 상황을 즉시 확인할 수 있습니다.<br/>
                    필요한 경우 Google Meet, Zoom, Slack을<br/>
                    활용해 신속하게 미팅을 진행합니다.
                </div>
            </div>

            <div
                style={{width: '100%', minWidth: 390, position: 'relative', margin: '0 auto', backgroundColor: colorList['backGray']}}>

                {processContents.map((v, i) => {
                    return (
                        <div onClick={() => handleProcessCard(i)} style={{
                            width: '99%', aspectRatio: '1/1', position: 'absolute',
                            top: currentCard >= i ? i * 100 : i * 100 + 230, margin: '0 auto', transition: 'top 1s ease'
                        }}>
                            <div key={i} style={{width: '100%', aspectRatio: '1/1', position: 'relative',}}>
                                <img src={v.src} style={{width: '100%', aspectRatio: '1/1', objectFit: 'fill'}}
                                     alt='process image'/>
                                <div style={{
                                    borderRadius: '10px',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'white',
                                    opacity: currentCard === i ? 0.8 : 0,
                                    top: 0,
                                }}/>
                                <div style={{
                                    fontSize: '5.4vw',
                                    fontWeight: 600,
                                    position: 'absolute',
                                    top: '7%',
                                    left: '6%',
                                    color: currentCard === i ? colorList['navy'] : 'white',
                                }}>
                                    STEP {i + 1}
                                </div>
                                <img style={{position: 'absolute', top: '7%', right: '6%', width: '18px'}}
                                     src={currentCard === i ? arrowDown : arrowUp} alt='arrow down'/>

                                {currentCard === i && <div style={{
                                    fontSize: '5.4vw',
                                    fontWeight: 600,
                                    position: 'absolute',
                                    top: '16.5%',
                                    left: '6%',
                                    color: colorList['mainColor']
                                }}>
                                    {v.title}
                                </div>}
                                <div style={{
                                    fontSize: '4vw',
                                    fontWeight: 400,
                                    position: 'absolute',
                                    top: '40%',
                                    left: '6%',
                                    whiteSpace: 'pre-line',
                                    lineHeight: 1.5,
                                    color: colorList['black']
                                }}>
                                    {currentCard === i && v.description}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div ref={(el) => (refs.current.whatWeDo = el)} style={{
                width: '100%',
                minWidth: 390,
                height: 'auto',
                backgroundColor: colorList['backGray'],
                position: 'relative',
                textAlign: 'center',
                marginTop: '630px',
            }}>
                <div style={{
                    paddingTop: "50%",
                    textAlign: 'center',
                    fontSize: '3.4vw',
                    fontWeight: 500,
                    lineHeight: 1.6,
                }}>
                    <div className={scrollY>6150 && 'slide-up'} style={{opacity:0, fontSize: '5.4vw', fontWeight: 600, paddingBottom: 10}}>What We do<br/></div>
                    <span className={scrollY>6200 && 'slide-up'} style={{opacity:0}}>All-in-one at Progist<br/>
                   꿈을 현실로 만들고 비전을 실현합니다.</span>

                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    columnGap: 15,
                    rowGap: 25,
                    gridAutoFlow: 'row',
                    width: '90%',
                    margin: '110px auto 130px auto',
                }}>

                    {coworkingImages.map((v, i) => {
                        return (
                            <div key={i}
                                 style={{
                                     borderRadius: '10px',
                                     boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)',
                                     width: '100%',
                                     aspectRatio: '2.57 / 1',
                                     backgroundColor: 'white',
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     cursor: 'pointer',

                                 }}>
                                <img style={{
                                    cursor: 'pointer',
                                    objectFit: 'scale-down',
                                    height: '50%',
                                    width: v.width = 150 ? 85 : v.width,
                                }} src={v.src} alt={`${i}`}/>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div ref={(el) => (refs.current.faq = el)} style={{
                width: '100%',
                minWidth: 390,
                height: 'auto',
                position: 'relative',
                padding: '90px 0 0 20px',
                boxSizing:'border-box'
            }}>
                <div className={scrollY>6800 && 'slide-up'} style={{ opacity:0, fontSize: 24, fontWeight: 600, textAlign: "center"}}>
                    FAQ's
                </div>
                <div style={{width: '93%', height: 'auto', marginTop: 74}}>
                    {faqList.map((v, i) => {
                        return (
                            <div className={scrollY>6830+i*30 && 'slide-up'} key={i} id={v.id} onClick={handleClickQuestion} style={{
                                opacity:0,
                                width: '100%',
                                height: 'auto',
                                padding: activeId === v.id ? "20px" : "20px",
                                marginBottom: activeId === v.id ? 20 : 0,
                                boxSizing: 'border-box',
                                backgroundColor: activeId === v.id ? colorList['backGray'] : "",
                                borderRadius: '10px',
                                boxShadow: activeId === v.id ? '5px 5px 20px rgba(0, 0, 0, 0.1)' : "",
                            }}>
                                <div id={v.id} onClick={handleClickQuestion} style={{
                                    fontWeight: 500,
                                    fontSize: '3.8vw',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    paddingBottom: 10,
                                }}>

                                    <div id={v.id} onClick={handleClickQuestion}
                                         style={{width: '92%', whiteSpace: 'pre-line',}}>
                                        {v.question}</div>
                                    <div style={{position: 'relative'}}>
                                        {activeId === v.id ? <img src={iconFold} alt='fold' style={{
                                                position: "absolute",
                                                width: 12,
                                                top: 12,
                                                right: 0
                                            }}/> :
                                            <img src={iconUnfold} alt='unfold'
                                                 style={{position: "absolute", top: 5, width: 12, right: 0}}/>}</div>
                                </div>
                                <div
                                    className={
                                        activeId === v.id
                                            ? 'card-open'
                                            : closingId === v.id
                                                ? 'card-close'
                                                : ''
                                    }
                                    style={{
                                        fontSize: '2.9vw',
                                        color: colorList['gray'],
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {(activeId === v.id || closingId === v.id) && v.answer}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div ref={(el) => (refs.current.contact = el)} style={{
                width: '100%',
                minWidth: 390,
                height: 'auto',
                position: 'relative',
                padding: '90px 25px 25px 20px',
                boxSizing: 'border-box'
            }}>
                <div className={scrollY>7600 && 'slide-up'} style={{opacity:0, fontSize: '5.4vw', fontWeight: 600, textAlign: "center"}}>
                    Contact
                </div>

                <div style={{textAlign: "center", width: '100%', marginTop: 55, fontSize: '4.5vw'}}>
                    <div className={scrollY>7700 && 'slide-up'} style={{opacity:0,}} >이메일 또는 전화번호를 남겨주세요</div>
                    <div className={scrollY>7720 && 'slide-up'} style={{opacity:0, marginTop: 35,fontSize: '4vw', lineHeight: 1.2}}>연락처를 남겨주시면<br/>
                        신속히 답변드리겠습니다.
                    </div>
                </div>

                <div style={{
                    width: '100%',
                    aspectRatio: '1.21/1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    marginTop: 30,
                    backgroundColor: '#D9D9D9',
                    fontSize: '3.4vw',
                }}>
                    <div style={{
                        width: '76%',
                        aspectRatio: '7.4/1',
                        color: '#AEAEAE',
                        lineHeight: 3,
                        borderRadius: 30,
                        border: '1px solid #121212'
                    }}>
                        <input value={customerContact} onChange={(e) => setCustomerContact(e.target.value)}
                               style={{
                                   fontSize: '3.4vw',
                                   background: "transparent",
                                   width: '90%',
                                   textAlign: 'center',
                                   border: 'none'
                               }} placeholder='이메일 또는 전화번호'/>
                    </div>
                    <div style={{
                        width: '76%',
                        aspectRatio: '7.4/1',
                        color: 'white',
                        fontWeight: 500,
                        lineHeight: 3,
                        backgroundColor: colorList['navy'],
                        borderRadius: 30,
                        marginTop: 20,
                    }} onClick={handleClickContactButton}>
                        문의하기
                    </div>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} message={modalMessage}/>
                </div>
            </div>

            <div style={{backgroundColor: colorList['gray'], height: '1px', minWidth: 390, width: '100%'}}/>
            <div style={{width: '100%', height: 'auto',}}>
                <div style={{
                    width: '100%',
                    minWidth: 390,
                    height: 'auto',
                    display: 'grid',
                    gridTemplateColumns: '6fr 4fr',
                    padding: '25px 25px',
                    boxSizing: 'border-box'
                }}>
                    <div style={{color: colorList['gray']}}>
                        <div style={{display: 'flex', gap: 13,}}>
                            <img src={CI} style={{width: 20}} alt="CI" id="ci"/>
                            <img src={CI_text} style={{width: 67, objectFit: 'contain'}} alt="CI" id="ci_text"/>
                        </div>
                        <div style={{fontSize: '1.8vw', marginTop: 8,}}>2024 @ progist All Rights Reserved.</div>

                        <div style={{marginTop: 35, fontSize: '2vw', display: 'flex', flexDirection: 'column', gap: 5}}>
                            <div><span style={{fontWeight: 500}}>본사</span> 서울특별시 강남구 논현동 36-11 401호</div>
                            <div><span style={{fontWeight: 500}}>연구소</span> 서울특별시 강남구 논현동 36-11 401호</div>
                            <div><span style={{fontWeight: 500}}>Project Request</span> hblee@progist.co.kr</div>
                            <div><span style={{fontWeight: 500}}>Tel</span> 010-8636-2553</div>
                        </div>
                    </div>

                    <div style={{fontSize:'2.9vw', color: colorList['mainColor'], display: 'flex', flexDirection: 'column', gap: 8}}>
                        {menuList.map((v, i) => {
                            return (
                                <div key={i}
                                     onClick={() => handleScrollTo(v.key)}>{v.title}</div>
                            )
                        })}
                    </div>


                </div>
                <div className="text_flow_container" style={{width: '100%',minWidth: 390, height:'38px', overflow:'hidden', margin: '0 auto'}}>
                    <p className="text_flow reverse origin" id='reverse'>{`Turn your Vision into Reality!\u00A0`}</p>
                    <p className="text_flow reverse clone" id='reverse'>{`Turn your Vision into Reality!\u00A0`}</p>
                </div>
            </div>

        </div>
    )
        ;
};

export default Landing_m;