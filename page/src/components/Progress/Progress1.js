import React, {useEffect, useState} from 'react';
import Div3ContentsLayout from "../layouts/Div3ContentsLayout";
import {getProgressContent} from "../../resource/contents/ProgressContent";
import {div} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";

const Progress1 = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data = getProgressContent()
        setContent(data)
    })

    return (
        <Div3ContentsLayout
            div1='2' span1='7' div2='13' span2='4' div3='' span3=''
            style={{
                aspectRatio: '2.2/1',
                backgroundColor: 'white',
                position: 'relative',
            }}
            first={
                <div style={{}}>
                    <div className='head' style={{
                        position: 'absolute',
                        bottom: '60%',
                    }}>Progress
                    </div>
                    {content.progressTitle1 ? (
                        <div className='title' style={{
                            fontSize: '5.5vw',
                            position: 'absolute',
                            bottom: '16%',
                        }}>
                            {content.progressTitle1}
                        </div>
                    ) : null}
                </div>
            }
            second={
                <div style={{}}>
                    {content.progressSubtitle1 ? (
                        <div style={{
                            fontSize: '1.5vw',
                            position: 'absolute',
                            bottom: '11%',
                            color: '#4b4b4b'
                        }}>
                            {content.progressSubtitle1}
                        </div>
                    ) : null}
                </div>
            }>
            <div style={{
                position: 'absolute', opacity: '60%',
                border: '1px solid lightGray', width: '82%',
                marginLeft: '9%',
                bottom: '0'
            }}/>
        </Div3ContentsLayout>
    )
        ;
};

export default Progress1;