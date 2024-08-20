import React, {useEffect, useState} from 'react';
import Div3ContentsLayout from "../layouts/Div3ContentsLayout";
import {div} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import {getAboutUsContent} from "../../resource/contents/AboutUsContent";
import {Link} from "react-router-dom";
import InfoCard from "../temp/InfoCard";

const AboutUs5 = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data = getAboutUsContent()
        setContent(data)
    })

    return (
        <div style={{
            position: 'relative',
        }}>
            <Div3ContentsLayout
                div1='2' span1='6' div2='8' span2='3' div3='12' span3='4'
                style={{
                    backgroundColor: '#e8ecee',
                    aspectRatio: '5.5/1',
                    paddingTop:'9%',
                    paddingBottom:'2%',
                }}
                first={
                    <div className='title' style={{
                        fontSize:'4.2vw'
                    }}>{content.aboutUsTitle3 || ''}</div>
                }
                third={
                    <div style={{
                        position: 'absolute',
                        // top: '0%',
                        fontSize: '1.1vw',
                        lineHeight: 1.5,
                    }}>
                        {content.infoCardContents3?(
                            <InfoCard

                                subtitle={content.infoCardContents3.subtitle}
                                link={content.infoCardContents3.link}
                                width='100%'/>
                        ):null}

                    </div>
                }
            />
            <div style={{
                backgroundColor: 'lightGray',
                height: '0.2vh',
                width: '100%',
                position: 'absolute',
                marginLeft: '9%',
                bottom: '0'
            }}/>
        </div>
    );
};

export default AboutUs5;