import React, {useEffect, useRef, useState} from 'react';
import {colorList} from "../assets/utils/colorList";
import {coworkingImages, faqList, processContents, serviceContents} from "../assets/contents/LandingContents";

import iconFold from "../assets/images/icon_fold.png"
import iconUnfold from "../assets/images/icon_unFold.png"
import CI from "../assets/images/CI.png";
import CI_text from "../assets/images/CI_text.png";

const Landing_m = () => {

    const back1=useRef()

    const [activeId, setActiveId] = useState(null)
    const [scrollY, setScrollY] = useState(0);


    const handleClickQuestion = (e) => {
        // console.log(e.target.id)
        setActiveId(e.target.id);
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



    return (
        <div style={{width: '100vw', height: 'auto', display: 'flex', flexDirection: 'column'}}>

            {/*page1*/}
            <div ref={back1} style={{
                width: '100%',
                minWidth: 390,
                aspectRatio: '0.46/1',
                margin: '0 auto',
                boxSizing: 'border-box',
                backgroundColor: colorList['gray'],
                padding: '90% 4.5% 0 4.5%',
            }}>
                <div style={{
                    width: '100%',
                    fontSize: '9.5vw',
                    fontWeight: 600,
                    color: 'white',
                    textAlign: 'center',
                    lineHeight: 1.2,
                }}>
                    Turn your Vision<br/>into Reality<br/><span
                    style={{fontSize: '5.4vw', lineHeight: 2.5}}>당신의 비전을 현실로, <span
                    style={{fontWeight: 600, fontSize: '6.8vw', color: colorList['mainColor']}}>PROGIST</span></span>
                </div>
            </div>

                {/*page2*/}
                <div ref={back1} style={{
                    width: '100%',
                    minWidth: 390,
                    aspectRatio: '0.46/1',
                    margin: '0 auto',
                    boxSizing: 'border-box',
                    backgroundColor: colorList['gray'],
                    padding: '90% 4.5% 0 4.5%',
                }}>
                <div style={{
                    width: '100%',
                    fontSize: '9vw',
                    fontWeight: 600,
                    color: 'white',
                    lineHeight: 1.1,
                }}>
                    우리는<br/>PROGIST<br/>입니다
                </div>
                <div
                    style={{
                        width: 'auto',
                        fontSize: '4vw',
                        color: 'white',
                        padding: '1%',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        lineHeight: 1.7,
                        marginTop:'27%'
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
                <div style={{
                    width: '100%',
                    height: 'auto',
                    fontSize: '4.5vw',
                    color: colorList['black'],
                    textAlign: 'center',
                    lineHeight: 2,
                    marginTop: '60%',
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
            <div style={{
                width: '100%',
                minWidth: 390,
                aspectRatio: '0.135/1',
                margin: '0 auto',
                boxSizing: 'border-box',
                backgroundColor: colorList['backGray'],
                padding: '4.5%',
            }}>
                <div style={{
                    fontSize: '5.5vw',
                    width: '100%',
                    height: 'auto',
                    textAlign: 'center',
                    marginTop: '70%',
                    lineHeight: 1.4,
                }}><span style={{fontWeight: 600}}>프로젝트 매니저, 디자이너, 개발자</span>가<br/>
                    한팀으로 하나의 프로젝트를 진행합니다.
                </div>

                    <div style={{
                        fontSize: '4vw',
                        width: '100%',
                        textAlign: 'center',
                        marginTop: '20%',
                        lineHeight: 1.5,
                        color:'#626262'
                    }}>우리는 서로 끊임없는 피드백을 주고받으며<br/>
                        더 좋은 퀄리티를 위해 노력합니다.
                    </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 10fr', marginTop: '100%',}}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <div style={{borderRadius:'50%', width:'4.5vw', aspectRatio:'1/1', border: '5px solid #86A4E8', backgroundColor:colorList['navy'] }}/>
                        <div style={{backgroundColor:colorList['black'], height:'97.5%', width:1}}/>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', rowGap:'140px'}}>
                        {serviceContents.map((v, i)=>{
                            return (
                                <div key={i}>
                        <div style={{
                            width: '100%',
                            height: 'auto',
                            fontSize: '5.5vw',
                            fontWeight: 600,
                            color: colorList['navy'],
                            whiteSpace: 'pre-line',
                            margin: '0 0 0 5%',
                            boxSizing: 'border-box',
                        }}>{v.mainText}<br/>
                            <span style={{
                                fontWeight: 500,
                                fontSize: '3.4vw',
                                color: colorList['black']
                            }}>{v.subText}</span>
                        </div>
                        <div>
                            <img src={v.src} alt='image' style={{
                                objectFit: 'fill',
                                objectPosition: 'center center',
                                width: '105%',
                                aspectRatio: '1.26/1',
                                maxHeight: '100%'
                            }}/>
                        </div>
                                </div>
                            )})}
                    </div>
            </div>
        </div>


            {/*process*/}
            <div style={{
                width: '100%',
                minWidth: 390,
                aspectRatio: '1.5/1',
                margin: '0 auto',
                boxSizing: 'border-box',
                backgroundColor: colorList['backGray'],
                padding: '4.5%',
                color:colorList['black']
            }}>
                <div style={{fontSize: '5.4vw', fontWeight: 600, width: '100%', textAlign: 'center'}}>
                    Process
                </div>

                <div style={{marginTop:'5%', fontSize: '3.4vw', fontWeight: 500, width: '100%', padding:'2%', lineHeight:1.5}}>
                    Asana, Slack, 카카오톡 단톡방을 통해<br/>
                    모든 작업자와 클라이언트가 실시간으로 소통하며,<br/>
                    고객사는 프로젝트 진행 상황을 즉시 확인할 수 있습니다.<br/>
                    필요한 경우 Google Meet, Zoom, Slack을<br/>
                    활용해 신속하게 미팅을 진행합니다.
                </div>
            </div>

                <div style={{width:'100%', position:'relative', margin:'0 auto',backgroundColor: colorList['backGray']}}>

                    {processContents.map((v, i)=>{
                        return (
                            <div key={i} style={{width: '99%', aspectRatio: '1/1', position: 'relative',}}>
                                <img src={v.src} style={{width: '100%', aspectRatio: '1/1', objectFit: 'fill'}}/>
                                <div style={{position:'absolute', width:'100%', height:'100%', backgroundColor:'white', opacity:0.3}}>sss</div>
                                <div style={{
                                    fontSize: '5.4vw',
                                    fontWeight: 600,
                                    position: 'absolute',
                                    top: '5%',
                                    left: '5%',
                                    color: colorList['navy']
                                }}>
                                    STEP {i + 1}
                                </div>
                                <div style={{
                                    fontSize: '5.4vw',
                                    fontWeight: 600,
                                    position: 'absolute',
                                    top: '14%',
                                    left: '5%',
                                    color: colorList['mainColor']
                                }}>
                                    {v.title}
                                </div>
                                <div style={{
                                    fontSize: '4vw',
                                    fontWeight: 600,
                                    position: 'absolute',
                                    top: '38%',
                                    left: '5%',
                                    whiteSpace:'pre-line',
                                    lineHeight:1.5,
                                    color: colorList['black']
                                }}>
                                    {v.description}
                                </div>

                            </div>
                        )
                    })}


                </div>


            {/*        <div className='step-card' style={{position: 'relative', cursor:'pointer'}}>*/}
            {/*            <img src={process01} alt='image' style={{width: 330, height: 420}}/>*/}
            {/*            <div style={{*/}
            {/*                textAlign: "left",*/}
            {/*                width: 330,*/}
            {/*                height: 420,*/}
            {/*                backgroundColor: 'white',*/}
            {/*                position: 'absolute',*/}
            {/*                top: 0,*/}
            {/*                borderRadius: 10,*/}
            {/*                padding: 36,*/}
            {/*                boxSizing: 'border-box',*/}
            {/*                opacity:0*/}
            {/*            }}>*/}
            {/*                <div style={{color: colorList['mainColor'], fontSize: 24, marginTop: 155}}>서비스 기획</div>*/}
            {/*                <div style={{textAlign: "left", fontSize: 18, marginTop: 76, lineHeight: 1.3}}>고객의 목표와 니즈를*/}
            {/*                    바탕으로<br/>*/}
            {/*                    서비스 구조와 핵심 기능을 기획하여<br/>*/}
            {/*                    프로젝트의 방향성을 설정합니다.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div style={{*/}
            {/*                position: 'absolute',*/}
            {/*                top: 45,*/}
            {/*                left: 36,*/}
            {/*                fontWeight: 600,*/}
            {/*                fontSize: 36,*/}
            {/*                color: 'white',*/}
            {/*            }}>STEP1*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className='step-card' style={{position: 'relative', cursor:'pointer'}}>*/}
            {/*            <img src={process02} alt='image' style={{width: 330, height: 420}}/>*/}
            {/*            <div style={{*/}
            {/*                textAlign: "left",*/}
            {/*                width: 330,*/}
            {/*                height: 420,*/}
            {/*                backgroundColor: 'white',*/}
            {/*                position: 'absolute',*/}
            {/*                top: 0,*/}
            {/*                borderRadius: 10,*/}
            {/*                padding: 36,*/}
            {/*                boxSizing: 'border-box',*/}
            {/*                opacity:0,*/}
            {/*            }}>*/}
            {/*                <div style={{color: colorList['mainColor'], fontSize: 24, marginTop: 155}}>UI/UX 디자인</div>*/}
            {/*                <div style={{textAlign: "left", fontSize: 18, marginTop: 76, lineHeight: 1.3}}>직관적인 인터페이스와*/}
            {/*                    브랜드<br/>*/}
            {/*                    아이덴티티를 반영한 시각 디자인을<br/> 설계해 사용자 경험을 극대화합니다.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div style={{*/}
            {/*                position: 'absolute',*/}
            {/*                top: 45,*/}
            {/*                left: 36,*/}
            {/*                fontWeight: 600,*/}
            {/*                fontSize: 36,*/}
            {/*                color: 'white'*/}
            {/*            }}>STEP2*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className='step-card' style={{position: 'relative', cursor:'pointer'}}>*/}
            {/*            <img src={process03} alt='image' style={{width: 330, height: 420}}/>*/}
            {/*            <div style={{*/}
            {/*                textAlign: "left",*/}
            {/*                width: 330,*/}
            {/*                height: 420,*/}
            {/*                backgroundColor: 'white',*/}
            {/*                position: 'absolute',*/}
            {/*                top: 0,*/}
            {/*                borderRadius: 10,*/}
            {/*                padding: 36,*/}
            {/*                boxSizing: 'border-box',*/}
            {/*                opacity:0*/}
            {/*            }}>*/}
            {/*                <div style={{color: colorList['mainColor'], fontSize: 24, marginTop: 155}}>디자인 피드백 반영</div>*/}
            {/*                <div style={{textAlign: "left", fontSize: 18, marginTop: 76, lineHeight: 1.3}}>고객 피드백을 반영하여*/}
            {/*                    디자인을<br/>*/}
            {/*                    수정, 보완해 최종 디자인을<br/>*/}
            {/*                    완성합니다.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div style={{*/}
            {/*                position: 'absolute',*/}
            {/*                top: 45,*/}
            {/*                left: 36,*/}
            {/*                fontWeight: 600,*/}
            {/*                fontSize: 36,*/}
            {/*                color: 'white'*/}
            {/*            }}>STEP2*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className='step-card' style={{position: 'relative', cursor:'pointer'}}>*/}
            {/*            <img src={process04} alt='image' style={{width: 330, height: 420}}/>*/}
            {/*            <div style={{*/}
            {/*                textAlign: "left",*/}
            {/*                width: 330,*/}
            {/*                height: 420,*/}
            {/*                backgroundColor: 'white',*/}
            {/*                position: 'absolute',*/}
            {/*                top: 0,*/}
            {/*                borderRadius: 10,*/}
            {/*                padding: 36,*/}
            {/*                boxSizing: 'border-box',*/}
            {/*                opacity:0*/}
            {/*            }}>*/}
            {/*                <div style={{color: colorList['mainColor'], fontSize: 24, marginTop: 120}}>프론트엔드 개발<br/>*/}
            {/*                    백엔드 개발<br/>*/}
            {/*                    서버 세팅*/}
            {/*                </div>*/}
            {/*                <div style={{textAlign: "left", fontSize: 18, marginTop: 54, lineHeight: 1.3}}>프론트엔드와 백엔드*/}
            {/*                    개발을 통해<br/>*/}
            {/*                    기능을 구현하고, 서버 세팅으로<br/>*/}
            {/*                    안정적인 운영 환경을 구축합니다.*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div style={{*/}
            {/*                position: 'absolute',*/}
            {/*                top: 45,*/}
            {/*                left: 36,*/}
            {/*                fontWeight: 600,*/}
            {/*                fontSize: 36,*/}
            {/*                color: 'white'*/}
            {/*            }}>STEP2*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}

            {/*<div ref={back1} style={{*/}
            {/*    width: '1920px',*/}
            {/*    height: '790px',*/}
            {/*    margin: '0 auto',*/}
            {/*    backgroundColor: colorList['backGray'],*/}
            {/*    position: 'relative',*/}
            {/*    textAlign: 'center',*/}
            {/*}}>*/}
            {/*    <div style={{textAlign: 'center', fontSize: 50, fontWeight: 600, paddingTop: 111}}>*/}
            {/*        What We do*/}
            {/*    </div>*/}
            {/*    <div style={{*/}
            {/*        display: 'grid',*/}
            {/*        gridTemplateColumns: 'repeat(4, 1fr)',*/}
            {/*        columnGap: 20,*/}
            {/*        rowGap: 30,*/}
            {/*        gridAutoFlow: 'row',*/}
            {/*        width: '1440px',*/}
            {/*        margin: '230px auto 0 auto'*/}
            {/*    }}>*/}

            {/*        {coworkingImages.map((v, i) => {*/}
            {/*            return (*/}
            {/*                <div className='cooperate_company' style={{*/}
            {/*                    borderRadius: '10px',*/}
            {/*                    boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.1)',*/}
            {/*                    width: 340,*/}
            {/*                    height: 132,*/}
            {/*                    backgroundColor: 'white',*/}
            {/*                    display: 'flex',*/}
            {/*                    alignItems: 'center',*/}
            {/*                    justifyContent: 'center'*/}
            {/*                }}>*/}
            {/*                    <img src={v.src} alt={`${v.src} image`}/>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div ref={back1} style={{*/}
            {/*    width: '1920px',*/}
            {/*    height: '1400px',*/}
            {/*    margin: '0 auto',*/}
            {/*    position: 'relative',*/}
            {/*    boxSizing: 'border-box'*/}
            {/*}}>*/}
            {/*    <div style={{fontSize: 50, fontWeight: 600, padding: '145px 235px',}}>*/}
            {/*        FAQ's*/}
            {/*    </div>*/}
            {/*    <div style={{position: 'absolute', top: 205, right: 235}}>*/}
            {/*        {faqList.map((v, i) => {*/}
            {/*            return (*/}
            {/*                <div key={i} id={v.id} onClick={handleClickQuestion} style={{*/}
            {/*                    width: 840,*/}
            {/*                    height: 'auto',*/}
            {/*                    padding: activeId === v.id ? "40px" : "20px 40px",*/}
            {/*                    marginBottom: activeId === v.id ? 20 : 0,*/}
            {/*                    boxSizing: 'border-box',*/}
            {/*                    backgroundColor: activeId === v.id ? colorList['backGray'] : "",*/}
            {/*                    borderRadius: '10px',*/}
            {/*                    boxShadow: activeId === v.id ? '5px 5px 20px rgba(0, 0, 0, 0.1)' : "",*/}
            {/*                    cursor: 'pointer',*/}
            {/*                    transition:'padding 0.5s ease, marginBottom 0.5s ease, boxShadow 0.5s ease, backgroundColor 0.5s ease,'*/}
            {/*                }}>*/}
            {/*                    <div id={v.id} onClick={handleClickQuestion} style={{*/}
            {/*                        fontWeight: 550,*/}
            {/*                        fontSize: 24,*/}
            {/*                        display: 'flex',*/}
            {/*                        justifyContent: 'space-between',*/}
            {/*                        paddingBottom: 30,*/}
            {/*                        zIndex:5*/}
            {/*                    }}>{v.question}*/}
            {/*                        <div style={{position: 'relative'}}>*/}
            {/*                            {activeId === v.id ? <img src={iconFold} alt='fold' style={{*/}
            {/*                                    position: "absolute",*/}
            {/*                                    width: 25,*/}
            {/*                                    right: 45,*/}
            {/*                                    top: 12*/}
            {/*                                }}/> :*/}
            {/*                                <img src={iconUnfold} alt='unfold'*/}
            {/*                                     style={{position: "absolute", width: 25, right: 45}}/>}</div>*/}
            {/*                    </div>*/}
            {/*                    <div style={{*/}
            {/*                        fontSize: 18,*/}
            {/*                        maxHeight: activeId === v.id ? '1000px' : 0,*/}
            {/*                        transition:'max-height 1.5s ease'*/}
            {/*                    }}>{activeId === v.id ? v.answer : ""}</div>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })}*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div ref={back1} style={{*/}
            {/*    width: '1920px',*/}
            {/*    height: '900px',*/}
            {/*    margin: '0 auto',*/}
            {/*    position: 'relative',*/}
            {/*    padding: '80px 0',*/}
            {/*    boxSizing: 'border-box'*/}
            {/*}}>*/}
            {/*    <div style={{*/}
            {/*        width: 1440,*/}
            {/*        height: 650,*/}
            {/*        margin: '0 auto',*/}
            {/*        position: 'relative',*/}
            {/*    }}>*/}
            {/*        <img src={'/temp_background.png'} alt='contact' width={1440} height={650}*/}
            {/*             style={{borderRadius: '20px'}}/>*/}
            {/*        <div style={{*/}
            {/*            width: '1440px',*/}
            {/*            height: '652px',*/}
            {/*            backgroundColor: 'white',*/}
            {/*            opacity: 0.8,*/}
            {/*            position: 'absolute',*/}
            {/*            top: 0*/}
            {/*        }}/>*/}
            {/*        <div style={{*/}
            {/*            position: 'absolute',*/}
            {/*            top: 130,*/}
            {/*            width: '100%',*/}
            {/*            display: 'flex',*/}
            {/*            flexDirection: 'column',*/}
            {/*            alignItems: 'center',*/}
            {/*            textAlign: 'center'*/}
            {/*        }}>*/}
            {/*            <div style={{fontWeight: 600, fontSize: 50}}>Contact<br/>*/}
            {/*                <div style={{fontWeight: 400}}>이메일 또는 전화번호를 남겨주세요</div>*/}
            {/*            </div>*/}
            {/*            <div style={{marginTop: 43, lineHeight: 1.4}}>연락처를 남겨주시면<br/>*/}
            {/*                신속히 답변드리겠습니다.*/}
            {/*            </div>*/}
            {/*            <div style={{*/}
            {/*                width: 295,*/}
            {/*                height: 60,*/}
            {/*                color: '#AEAEAE',*/}
            {/*                fontSize: 20,*/}
            {/*                fontWeight: 500,*/}
            {/*                lineHeight: 2.9,*/}
            {/*                borderRadius: 30,*/}
            {/*                marginTop: 43,*/}
            {/*                border: '1px solid #AEAEAE'*/}
            {/*            }}>*/}
            {/*                이메일 또는 전화번호*/}
            {/*            </div>*/}
            {/*            <div style={{*/}
            {/*                width: 295,*/}
            {/*                height: 60,*/}
            {/*                color: 'white',*/}
            {/*                fontSize: 20,*/}
            {/*                fontWeight: 500,*/}
            {/*                lineHeight: 2.9,*/}
            {/*                backgroundColor: colorList['navy'],*/}
            {/*                borderRadius: 30,*/}
            {/*                marginTop: 20,*/}
            {/*            }}>*/}
            {/*                문의하기*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*</div>*/}

            {/*<div style={{width: '1920px', height: 'auto', margin: '0 auto'}}>*/}
            {/*    <div style={{backgroundColor: colorList['gray'], height: '1px', width: '100%'}}/>*/}
            {/*    <div style={{*/}
            {/*        width: '100%',*/}
            {/*        height: 'auto',*/}
            {/*        display: 'grid',*/}
            {/*        gridTemplateColumns: '4fr 2fr 3fr ',*/}
            {/*        padding: '82px 170px 58px 170px'*/}
            {/*    }}>*/}
            {/*        <div>*/}
            {/*            <div style={{display: 'flex', gap: 13, margin: '22px 0 0 0'}}>*/}
            {/*                <img src={CI} style={{width: 32}} alt="CI" id="ci"/>*/}
            {/*                <img src={CI_text} style={{width: 107, objectFit: 'contain'}} alt="CI" id="ci_text"/>*/}
            {/*            </div>*/}
            {/*            <div style={{fontSize: 20, marginTop: 25}}>2024 @ progist All Rights Reserved.</div>*/}
            {/*        </div>*/}

            {/*        <div style={{color: colorList['mainColor'], display: 'flex', flexDirection: 'column', gap: 13}}>*/}
            {/*            <div>Who We Are</div>*/}
            {/*            <div>Service</div>*/}
            {/*            <div>Process</div>*/}
            {/*            <div>What We do</div>*/}
            {/*            <div>Contact</div>*/}
            {/*        </div>*/}

            {/*        <div style={{display: 'flex', flexDirection: 'column', gap: 13}}>*/}
            {/*            <div><span style={{fontWeight: 550}}>본사</span> 서울특별시 강남구 논현동 36-11 401호</div>*/}
            {/*            <div><span style={{fontWeight: 550}}>연구소</span> 서울특별시 강남구 논현동 36-11 401호</div>*/}
            {/*            <div><span style={{fontWeight: 550}}>Project Request</span> hblee@progist.co.kr</div>*/}
            {/*            <div><span style={{fontWeight: 550}}>Tel</span> 010-8636-2553</div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="text_flow_container">*/}
            {/*    <p className="text_flow reverse origin" id='reverse'>{`Turn your Vision into Reality!\u00A0`}</p>*/}
            {/*    <p className="text_flow reverse clone" id='reverse'>{`Turn your Vision into Reality!\u00A0`}</p>*/}


        </div>
    )
        ;
};

export default Landing_m;