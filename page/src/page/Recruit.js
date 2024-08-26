import Div3ContentsLayout from "../components/layouts/Div3ContentsLayout";
import {useEffect, useState} from "react";
import {getRecruitContents} from "../resource/contents/RecruitContents";

const Recruit = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data=getRecruitContents()
        setContent(data)
    });

    return (
        <div>
            <Div3ContentsLayout
                div1='2' span1='2' div2='6' span2='7'
                style={{
                    backgroundColor: 'gray',
                    aspectRatio:'10/1',
                }}
                first={
                    <div className='head'>Job openings</div>
                }
                second={
                    <div className='title'>
                        {content.RecruitTitle1 || ''}
                    </div>
                }
            />
            <Div3ContentsLayout
                div1='2' span1='2' div2='6' span2='7'
                style={{
                    backgroundColor: 'gray',
                    aspectRatio:'10/1',
                }}
                first={
                    <div className='head'>Job openings</div>
                }
                second={
                    <div className='title'>Are you ready for your next challenge?</div>
                }

            />
            <Div3ContentsLayout>

            </Div3ContentsLayout>
        </div>

    );
};

export default Recruit;