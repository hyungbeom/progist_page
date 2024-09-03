import React, {useEffect, useState} from 'react';
import Div3ContentsLayout from "../layouts/GridContentsLayout";
import InfoCard from "../temp/InfoCard";
import {getAboutUsContent} from "../../assets/contents/AboutUsContents";

const AboutUs4 = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data = getAboutUsContent()
        setContent(data)
    })

    return (
        <Div3ContentsLayout
            div1='2' div2='7' div3='14' span1='4' span2='5' span3='3'
            style={{
            }}
            first={
                <div style={{
                    position:'relative',
                    paddingTop: '30%',
                }}>
                    <div style={{
                        position:"absolute",
                        backgroundColor:'#e8ecee',
                        width:'7vw',
                        aspectRatio: '1/1',
                        padding:'8%',
                    }}>
                        <div style={{
                            fontSize:'4.2vw',
                            fontWeight:600,
                        }}>
                            16
                        </div>
                        <div style={{
                            fontSize:'0.8vw',
                            fontWeight:600,
                            marginTop:'9%'
                        }}>
                            Team members
                        </div>
                    </div>
                    {content.aboutUsImg1 ?
                        (<img src={content.aboutUsImg1} alt='about us img' style={{
                            width:'100%',
                            marginTop:'110%'
                        }}/>) : null}
                </div>
            }
            second={
                <div style={{}}>
                {content.infoCardContents1? (<InfoCard
                        img={content.infoCardContents1.img}
                        title={content.infoCardContents1.title}
                        subtitle={content.infoCardContents1.subtitle}
                        width='100%'/>):null}
                </div>
            }
            third={
                <div style={{
                    position:'relative',

                }}>
                    <div style={{
                        position:'absolute',
                        marginTop:'187%',
                    }}>
                    {content.infoCardContents2 ? (<InfoCard
                        title={content.infoCardContents2.title}
                        subtitle={content.infoCardContents2.subtitle}
                        width='100%'/>) : null}
                </div>
                </div>
            }
        />

    );
};

export default AboutUs4;