import {useEffect, useState} from 'react';
import Div3ContentsLayout from "../layouts/Div3ContentsLayout";
import {getProgressContent} from "../../resource/contents/ProgressContent";

const Progress3 = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data = getProgressContent()
        setContent(data)
    })

    return (
        <div>
            <Div3ContentsLayout
                div1='2' span1='6' div2='8' span2='9'
                style={{
                    paddingTop:'5%',
                    paddingBottom:'4%',
                }}
                first={
                    <div style={{
                        position: 'relative',
                        paddingBottom:'10%',
                    }}>
                        <div className='title' style={{
                            position: 'absolute',
                            fontSize: '4.6vw',
                        }}>
                            {content.progressTitle2 || ''}

                        </div>
                        <div style={{
                            position: 'absolute',
                            fontSize: '1.1vw',
                            marginTop: '51%',
                            lineHeight: 1.45,
                        }}>
                            {content.progressSubtitle2 || ''}
                        </div>
                    </div>
                }
                second={
                    <div style={{
                        position: 'relative',
                    }}>
                        <img src='././img/progressImg1.png' alt='progress img'
                             style={{
                                 position: 'absolute',
                                 width: '100%',
                                 marginTop: '20%',
                             }}/>
                    </div>
                }
            />
        </div>
    );
};

export default Progress3;