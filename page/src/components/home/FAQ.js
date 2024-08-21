import React, {useEffect, useState} from 'react';
import {getHomeContents} from "../../resource/contents/HomeContents";
import Div3ContentsLayout from "../layouts/Div3ContentsLayout";
import InfoCard from "../temp/InfoCard";

const FAQ = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data=getHomeContents();
        setContent(data)
    }, []);

    return (
        <Div3ContentsLayout
            div1='2' div2='9' div3='' span1='7' span2='7' span3=''
            style={{
                // backgroundColor: 'gray',
                height: 'auto',
                marginTop:'5%'
            }}
            first={
                <div style={{
                    marginTop:'2%'
                }}>
                    <div className='head'>FAQ</div>
                    <div className='title' style={{
                        marginTop:'5%'
                    }}>
                        Quick<br/>answers to<br/>questions you<br/>may have
                    </div>
                    <div style={{
                        fontSize:'1.2vw',
                        lineHeight:1.3,
                        marginTop:'10%'
                    }}>
                        Can't find what you're looking for?<br/>Contact us here:<br/>
                        <div style={{
                            fontSize:'1.2vw',
                            color:'#ff471d',
                            marginTop :'1%'
                        }}>info@progist.co.kr
                        </div>
                        <div style={{backgroundColor: '#ff471d', height:'0.1vh', width:'10.2vw', marginTop:'0.5%'}}/>
                    </div>
                </div>
            }
            second={
                <div style={{
                    display:'flex',
                    flexDirection: 'column',
                    height: '100%',
                    // gap: '5%',
                }}>
                    {content.faq &&
                        content.faq.map((item, index)=>{
                            return (
                                <div key={index} className='FAQ'>{item}</div>
                            )
                        })}
                </div>
            }
        />

    );
};

export default FAQ;