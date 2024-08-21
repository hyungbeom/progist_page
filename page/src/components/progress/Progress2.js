import React from 'react';
import Div3ContentsLayout from "../layouts/Div3ContentsLayout";

const Progress2 = () => {

    return (
        <div>
            <Div3ContentsLayout
                div1='2' span1='4' style={{
                paddingTop:'2%',
                // aspectRatio:'20/1'
            }}
                first={
                <div style={{
                    fontSize:'1.2vw'
                }}>
                    Scroll to Discover</div>
                }/>

            <Div3ContentsLayout
                div1='2' span1='14'
                style={{
                paddingTop:'10%',
                gap:'0%',
            }}
                first={
                    <div style={{
                        width:'100%',
                        aspectRatio:'16/9',
                        backgroundColor:'black',
                    }}>동영상</div>
                }/>
        </div>
    );
};

export default Progress2;