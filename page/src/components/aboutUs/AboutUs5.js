import React, {useEffect, useState} from 'react';
import Div3ContentsLayout from "../layouts/Div3ContentsLayout";
import {div} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import {getAboutUsContent} from "../../resource/contents/AboutUsContent";
import {Link} from "react-router-dom";

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
                div1='2' span1='5' div2='8' span2='3' div3='12' span3='4'
                style={{
                    backgroundColor: 'white',
                    aspectRatio: '5.5/1',
                }}
                first={
                    <div className='title' style={{}}>{content.aboutUsTitle3 || ''}</div>
                }
                third={
                    <div style={{
                        position: 'absolute',
                        top: '3%',
                        fontSize: '1vw',
                        lineHeight: 1.5,
                    }}>
                        {content.aboutUsSubtitle1 || ''}
                        <div style={{
                            marginTop: '12%',
                            color: '#fd471d',
                        }}>
                            <Link to='/recruit' style={{
                                color: 'inherit',
                                cursor: 'pointer',
                            }}>
                                Check our Job openings</Link>
                        </div>
                    </div>
                }
            />
            <div style={{
                position: 'absolute', opacity: '60%',
                border: '1px solid lightGray', width: '82%',
                marginLeft: '9%',
                bottom: '0'
            }}/>
        </div>
    );
};

export default AboutUs5;