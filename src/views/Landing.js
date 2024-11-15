import React, {useRef} from 'react';
import {colorList} from "../assets/utils/colorList";
import {landingContents} from "../assets/contents/LandingContents";

const Landing = () => {

    const back1=useRef()


    return (
        <div style={{width: '100%', height: 'auto',}}>

            <div ref={back1} style={{
                top:0,
                width: '100%',
                height: 'auto',
                margin: '0 auto',
                // position: 'fixed',
                zIndex:2
            }}>
                <div style={{width: '1920px', height: '1080px', margin: '0 auto', position: 'relative', backgroundImage: 'url(/temp_background.png)',}}>

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
                        width: '100%',
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
                        fontSize: 36,
                        color: colorList['black'],
                        textAlign: 'center',
                        position: 'absolute',
                        top: 400,
                        lineHeight: 1.3
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
                height: '1080px',
                margin: '0 auto',
                backgroundColor: 'white',
                position: 'relative',
                marginTop: '1080px',
            }}>
                <div style={{fontSize: 50, width:'100%', height:'auto', textAlign:'center', paddingTop: 145, lineHeight:1.4}}><span style={{fontWeight: 600}}>프로젝트 매니저, 디자이너, 개발자</span>가<br/>
                    한팀으로 하나의 프로젝트를 진행합니다.
                </div>

                <div style={{fontSize: 24, width:'100%', textAlign:'center', lineHeight:1.5, paddingTop: 55}}>우리는 서로 끊임없는 피드백을 주고받으며<br/>
                    더 좋은 퀄리티를 위해 노력합니다.
                </div>

                {landingContents.map((v, i)=>{
                    return (
                        <div key={i} style={{
                            width: 1440,
                            display: 'grid',
                            gridTemplateColumns: '625px 1fr 625PX',
                            margin: '214px auto 0 auto'
                        }}>
                            {i % 2 === 0 ?
                                <div style={{width: 580, height: 500}}>
                                    <img src={v.src} alt='image' style={{objectFit: 'contain', width:580, height:500}}/>
                                </div>:
                                <div>
                                    <span style={{
                                        fontSize: 50,
                                        fontWeight: 600,
                                        color: colorList['navy'],
                                        whiteSpace: 'pre-line'
                                    }}>{v.mainText}</span><br/>
                                    <span style={{lineHeight: 3.7}}>{v.subText}</span>
                                </div>
                            }

                            <div/>
                            {i % 2 === 0 ?
                                <div>
                                    <span style={{
                                        fontSize: 50,
                                        fontWeight: 600,
                                        color: colorList['navy'],
                                        whiteSpace: 'pre-line'
                                    }}>{v.mainText}</span><br/>
                                    <span style={{lineHeight: 3.7}}>{v.subText}</span>
                                </div> :
                                <div style={{width: 580, height: 500}}>
                                    <img src={v.src} alt='image' style={{objectFit: 'contain', width:580, height:500}}/>
                                </div>
                            }

                        </div>
                    )
                })}


            </div>


        </div>
    );
};

export default Landing;