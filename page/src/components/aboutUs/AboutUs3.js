import React, {useEffect, useState} from 'react';
import Div3ContentsLayout from "../layouts/Div3ContentsLayout";
import {getAboutUsContent} from "../../resource/contents/AboutUsContent";

const AboutUs3 = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data = getAboutUsContent()
        setContent(data)
    }, []);

    return (
        <div style={{
            
            display: 'grid',
            gridTemplateColumns: 'repeat(16,1fr)',
            gap: '1%',
            width: '93%',
            padding: "0 3.5% 0 3.5%",
            aspectRatio: '5 / 1',
            whiteSpace: 'pre-line',

        }}>
            <div style={{
                gridColumn: `1 / span 6`, // 시작열 / span 차지하는 열 개수
                position: "relative",
            }}>
                <div style={{
                    backgroundColor: 'black',
                    position: 'absolute',
                    width: '35vw',
                    aspectRatio: '1 / 1.08',
                    bottom: '0',
                    boxSizing: 'border-box',
                    padding: '14% 0% 0 17%',
                }}>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        color: '#fdfdfd',
                        fontSize: '1.7vw',
                        opacity: '75%',
                    }}>
                        {content.aboutUsTitle2 || ''}
                    </div>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        color: '#fdfdfd',
                        fontSize: '1.7vw',
                        fontWeight: 'bold',
                        top: '78%'
                    }}>
                        Lee Hyung beom
                    </div>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        color: '#fdfdfd',
                        fontSize: '1vw',
                        opacity: '75%',
                        top: '84%'
                    }}>
                        Co-Founder & CTO of CargoKite
                    </div>
                </div>
            </div>
            <div style={{
                gridColumn: `12 / span 1`, // 시작열 / span 차지하는 열 개수
                position: "relative",
            }}>
                <div style={{
                    position: "absolute",
                    backgroundColor: '#e8ecee',
                    width: '6.25vw',
                    aspectRatio: '1/1',
                    bottom:'0',
                    left:'-15%'
                }}></div>
            </div>

        </div>
    );
};

export default AboutUs3;