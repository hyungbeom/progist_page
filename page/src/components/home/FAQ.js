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
                        marginTop:'4vh'
                    }}>
                        Quick<br/>answers to<br/>questions you<br/>may have
                    </div>
                    <div style={{
                        fontSize:'1.2vw',
                        lineHeight:'2.9vh',
                        marginTop:'7vh'
                    }}>
                        Can't find what you're looking for?<br/>Contact us here:<br/>
                        <div style={{
                            fontSize:'1.2vw',
                            color:'#ff471d',
                            marginTop :'0.5vh'
                        }}>info@cargokite.com
                        </div>
                        <div style={{backgroundColor: '#ff471d', height:'0.12vh', width:'10.2vw', marginTop:'0.2vh'}}></div>
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
                    {content.faq? (<div className='FAQ'>{content.faq[0]}</div>):null}
                    {content.faq? (<div className='FAQ'>{content.faq[1]}</div>):null}
                    {content.faq? (<div className='FAQ'>{content.faq[2]}</div>):null}
                    {content.faq? (<div className='FAQ'>{content.faq[3]}</div>):null}
                    {content.faq? (<div className='FAQ'>{content.faq[4]}</div>):null}
                    {content.faq? (<div className='FAQ'>{content.faq[5]}</div>):null}
                    {content.faq? (<div className='FAQ'>{content.faq[6]}</div>):null}
                    {content.faq? (<div className='FAQ'>{content.faq[7]}</div>):null}
                </div>
            }
        />

    );
};

export default FAQ;