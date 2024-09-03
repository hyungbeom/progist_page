import {useEffect, useState} from 'react';
import Div3ContentsLayout from "../layouts/GridContentsLayout";
import {getAboutUsContent} from "../../assets/contents/AboutUsContents";

const AboutUs1 = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data = getAboutUsContent()
        setContent(data)
    }, []);

    return (

            <Div3ContentsLayout
                div1='3' div2='5' span1='2' span2='12'
                style={{
                    aspectRatio:'1.8/1',
                    position:'relative',
                }}
                first={
                    <div className='head' style={{
                        position:'absolute',
                        bottom:'56%',
                    }}>Introduction</div>
                    }
                second={
                    <div className='title' style={{
                        position:'absolute',
                        bottom:'20%',
                        fontSize:'5.7vw',
                    }}>
                        {content.aboutUsTitle1||''}
                    </div>
                }
            />
    );
};

export default AboutUs1;