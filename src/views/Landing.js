import React, {useEffect, useRef, useState} from 'react';
import {colorList} from "../assets/utils/colorList";
import {coworkingImages, faqList, landingContents} from "../assets/contents/LandingContents";

import process01 from "../assets/images/process_01.png"
import process02 from "../assets/images/process_02.png"
import process03 from "../assets/images/process_03.png"
import process04 from "../assets/images/process_04.png"

import iconFold from "../assets/images/icon_fold.png"
import iconUnfold from "../assets/images/icon_unFold.png"
import CI from "../assets/images/CI.png";
import CI_text from "../assets/images/CI_text.png";

const Landing = () => {

    const back1=useRef()

    const [activeId, setActiveId] = useState(null)

    const handleClickQuestion = (e) => {
        console.log(e.target.id)
        setActiveId(e.target.id);
    };

    // useEffect(()=>{
    // }, [activeId])


    return (
        <div style={{width: '98vw', height: 'auto',}}>

            <div ref={back1} style={{
                top: 0,
                width: '98vw',
                height: 'auto',
                margin: '0 auto',
                boxSizing: 'border-box',
                // position: 'fixed',
                zIndex: 2
            }}>
                <div style={{
                    width: '1920px',
                    height: '1080px',
                    margin: '0 auto',
                    position: 'relative',
                    backgroundImage: 'url(/temp_background.png)',
                }}>

                    <div style={{
                        width: '100%',
                        fontSize: 80,
                        color: 'white',
                        textAlign: 'center',
                        position: 'absolute',
                        top: 400,
                        lineHeight: 1.3
                    }}>
                        <span style={{fontWeight: 600}}>Turn your Vision into Reality</span><br/>당신의 비전을 현실로, <span
                        style={{fontWeight: 600, color: colorList['mainColor']}}>PROGIST</span>
                    </div>
                    <div style={{
                        width: 'auto',
                        fontSize: 80,
                        color: 'white',
                        position: 'absolute',
                        top: 550,
                        fontWeight: 600,
                        lineHeight: 1.3,
                        left: 240
                    }}>
                        우리는<br/>PROGIST<br/>입니다.
                    </div>
                    <div style={{
                        width: 'auto',
                        fontSize: 24,
                        color: 'white',
                        position: 'absolute',
                        top: 658,
                        right: 280,
                        padding: '32px 22px',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        lineHeight: 1.7,
                    }}>
                        : “프로그램(program)”과 특정 분야의 전문성을<br/>
                        지닌 사람을 나타내는 “-ist”의 조합으로,<br/>
                        고객의 비전을 실현하는<br/>
                        <span style={{fontWeight: 600}}>e-Business 토탈 서비스 기업</span> 입니다.
                    </div>
                    <div style={{
                        width: '100%',
                        height: 'auto',
                        fontSize: 36,
                        color: colorList['black'],
                        textAlign: 'center',
                        position: 'absolute',
                        top: 400,
                        lineHeight: 1.3,
                    }}>
                        프로지스트는 고객의 비전을 실현하기 위해<br/>
                        <span style={{fontWeight: 600}}>전략적 컨설팅</span>과 혁신적인 IT 솔루션을 제공하며, <span
                        style={{fontWeight: 600}}>웹 개발, 전자상거래 솔루션, 마케팅 전략</span>,<br/>
                        <span style={{fontWeight: 600}}>IT 인프라 지원</span>을 통해 고객의 성공을 돕습니다. 변화하는 디지털 환경 속에서 맞춤형 접근을 통해
                        최적의<br/>
                        솔루션을 제공하고, 명확한 목표 달성을 위한 차별화된 성과를 창출합니다.<br/>
                    </div>

                </div>
            </div>


            <div ref={back1} style={{
                width: '1920px',
                height: 'auto',
                margin: '1080px auto 0 auto',
                paddingBottom: '215px',
                backgroundColor: colorList['backGray'],
                position: 'relative',
            }}>
                <div style={{
                    fontSize: 50,
                    width: '100%',
                    height: 'auto',
                    textAlign: 'center',
                    paddingTop: 145,
                    lineHeight: 1.4,
                }}><span style={{fontWeight: 600}}>프로젝트 매니저, 디자이너, 개발자</span>가<br/>
                    한팀으로 하나의 프로젝트를 진행합니다.
                </div>

                <div style={{
                    fontSize: 24,
                    width: '100%',
                    textAlign: 'center',
                    lineHeight: 1.5,
                    paddingTop: 55,
                    marginBottom: 214
                }}>우리는 서로 끊임없는 피드백을 주고받으며<br/>
                    더 좋은 퀄리티를 위해 노력합니다.
                </div>

                {landingContents.map((v, i) => {
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
                                        <span style={{fontSize: 20, color: colorList['black']}}>{v.subText}</span>
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
                                        <span style={{fontSize: 20, color: colorList['black']}}>{v.subText}</span>
                                    </div>
                                </>
                            }
                        </div>
                    )
                })}
            </div>


            <div ref={back1} style={{
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
                    Asana, Slack, 카카오톡 단톡방을 통해 모든 작업자와 클라이언트가 <span style={{fontWeight: 600}}>실시간으로 소통하며,</span><br/>
                    고객사는 프로젝트 <span style={{fontWeight: 600}}>진행 상황을 즉시 확인</span>할 수 있습니다.<br/>
                    필요한 경우 Google Meet, Zoom, Slack을 활용해 신속하게 미팅을 진행합니다.
                </div>

                <div style={{
                    display: 'flex',
                    width: '1440px',
                    justifyContent: 'space-between',
                    margin: '170px auto 0 auto'
                }}>

                    <div style={{position: 'relative'}}>
                        <img src={process01} alt='image' style={{width: 330, height: 420}}/>
                        <div style={{
                            textAlign: "left",
                            width: 330,
                            height: 420,
                            backgroundColor: 'gray',
                            position: 'absolute',
                            top: 0,
                            borderRadius: 10,
                            padding: 36,
                            boxSizing: 'border-box'
                        }}>
                            <div style={{color: colorList['mainColor'], fontSize: 24, marginTop: 155}}>서비스 기획</div>
                            <div style={{textAlign: "left", fontSize: 18, marginTop: 76, lineHeight: 1.3}}>고객의 목표와 니즈를
                                바탕으로<br/>
                                서비스 구조와 핵심 기능을 기획하여<br/>
                                프로젝트의 방향성을 설정합니다.
                            </div>
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: 45,
                            left: 36,
                            fontWeight: 600,
                            fontSize: 36,
                            color: 'white'
                        }}>STEP1
                        </div>
                    </div>

                    <div style={{position: 'relative'}}>
                        <img src={process02} alt='image' style={{width: 330, height: 420}}/>
                        <div style={{
                            textAlign: "left",
                            width: 330,
                            height: 420,
                            backgroundColor: 'gray',
                            position: 'absolute',
                            top: 0,
                            borderRadius: 10,
                            padding: 36,
                            boxSizing: 'border-box'
                        }}>
                            <div style={{color: colorList['mainColor'], fontSize: 24, marginTop: 155}}>UI/UX 디자인</div>
                            <div style={{textAlign: "left", fontSize: 18, marginTop: 76, lineHeight: 1.3}}>직관적인 인터페이스와
                                브랜드<br/>
                                아이덴티티를 반영한 시각 디자인을<br/> 설계해 사용자 경험을 극대화합니다.
                            </div>
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: 45,
                            left: 36,
                            fontWeight: 600,
                            fontSize: 36,
                            color: 'white'
                        }}>STEP2
                        </div>
                    </div>

                    <div style={{position: 'relative'}}>
                        <img src={process03} alt='image' style={{width: 330, height: 420}}/>
                        <div style={{
                            textAlign: "left",
                            width: 330,
                            height: 420,
                            backgroundColor: 'gray',
                            position: 'absolute',
                            top: 0,
                            borderRadius: 10,
                            padding: 36,
                            boxSizing: 'border-box'
                        }}>
                            <div style={{color: colorList['mainColor'], fontSize: 24, marginTop: 155}}>디자인 피드백 반영</div>
                            <div style={{textAlign: "left", fontSize: 18, marginTop: 76, lineHeight: 1.3}}>고객 피드백을 반영하여
                                디자인을<br/>
                                수정, 보완해 최종 디자인을<br/>
                                완성합니다.
                            </div>
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: 45,
                            left: 36,
                            fontWeight: 600,
                            fontSize: 36,
                            color: 'white'
                        }}>STEP2
                        </div>
                    </div>

                    <div style={{position: 'relative'}}>
                        <img src={process04} alt='image' style={{width: 330, height: 420}}/>
                        <div style={{
                            textAlign: "left",
                            width: 330,
                            height: 420,
                            backgroundColor: 'gray',
                            position: 'absolute',
                            top: 0,
                            borderRadius: 10,
                            padding: 36,
                            boxSizing: 'border-box'
                        }}>
                            <div style={{color: colorList['mainColor'], fontSize: 24, marginTop: 120}}>프론트엔드 개발<br/>
                                백엔드 개발<br/>
                                서버 세팅
                            </div>
                            <div style={{textAlign: "left", fontSize: 18, marginTop: 54, lineHeight: 1.3}}>프론트엔드와 백엔드
                                개발을 통해<br/>
                                기능을 구현하고, 서버 세팅으로<br/>
                                안정적인 운영 환경을 구축합니다.
                            </div>
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: 45,
                            left: 36,
                            fontWeight: 600,
                            fontSize: 36,
                            color: 'white'
                        }}>STEP2
                        </div>
                    </div>

                </div>
            </div>

            <div ref={back1} style={{
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
                            <div style={{
                                borderRadius: '10px',
                                boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.1)',
                                width: 340,
                                height: 132,
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img src={v.src} alt={`${v.src} image`}/>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div ref={back1} style={{
                width: '1920px',
                height: '1250px',
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
                            <div key={i} id={v.id} style={{
                                width: 840,
                                height: 'auto',
                                padding: activeId === v.id ? "40px" : "20px 40px",
                                boxSizing: 'border-box',
                                backgroundColor: activeId === v.id ? colorList['backGray'] : "",
                                borderRadius: '10px',
                                boxShadow: activeId === v.id ? '5px 5px 20px rgba(0, 0, 0, 0.1)' : "",
                                cursor: 'pointer',
                            }} onClick={handleClickQuestion}>
                                <div onClick={handleClickQuestion} style={{
                                    fontWeight: 550,
                                    fontSize: 24,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    paddingBottom: 30
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
                                    height: activeId === v.id ? 'auto' : 0
                                }}>{activeId === v.id ? v.answer : ""}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div ref={back1} style={{
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
                        <div style={{fontWeight: 600, fontSize: 50}}>Contact<br/>
                            <div style={{fontWeight: 400}}>이메일 또는 전화번호를 남겨주세요</div>
                        </div>
                        <div style={{marginTop: 43, lineHeight: 1.4}}>연락처를 남겨주시면<br/>
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
                            marginTop: 43,
                            border: '1px solid #AEAEAE'
                        }}>
                            이메일 또는 전화번호
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
                        }}>
                            문의하기
                        </div>
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
                    padding: '82px 170px 58px 170px'
                }}>
                    <div>
                        <div style={{display: 'flex', gap: 13, margin: '22px 0 0 0'}}>
                            <img src={CI} style={{width: 32}} alt="CI" id="ci"/>
                            <img src={CI_text} style={{width: 107, objectFit: 'contain'}} alt="CI" id="ci_text"/>
                        </div>
                        <div style={{fontSize: 20, marginTop: 25}}>2024 @ progist All Rights Reserved.</div>
                    </div>

                    <div style={{color: colorList['mainColor'], display: 'flex', flexDirection: 'column', gap: 13}}>
                        <div>Who We Are</div>
                        <div>Service</div>
                        <div>Process</div>
                        <div>What We do</div>
                        <div>Contact</div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', gap: 13}}>
                        <div><span style={{fontWeight: 550}}>본사</span> 서울특별시 강남구 논현동 36-11 401호</div>
                        <div><span style={{fontWeight: 550}}>연구소</span> 서울특별시 강남구 논현동 36-11 401호</div>
                        <div><span style={{fontWeight: 550}}>Project Request</span> hblee@progist.co.kr</div>
                        <div><span style={{fontWeight: 550}}>Tel</span> 010-8636-2553</div>
                    </div>

                </div>
            </div>
            <div className="text_flow_container">
                <p className="text_flow reverse origin" id='reverse'>{`Turn your Vision into Reality!\u00A0`}</p>
                <p className="text_flow reverse clone" id='reverse'>{`Turn your Vision into Reality!\u00A0`}</p>
            </div>


        </div>
    )
        ;
};

export default Landing;