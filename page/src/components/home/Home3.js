import React, {useEffect, useState} from 'react';
import BasicLayout from "../layouts/BasicLayout";
import {getHomeContents} from "../../resource/contents/HomeContents";
import '../../resource/css/body.css';

const Home3 = () => {

    const [content, setContent]=useState({})
    useEffect(() => {
        const data = getHomeContents()
        setContent(data)
    }, []);

    return (
        <BasicLayout style={{
            aspectRatio: '16 / 9',
            paddingTop:'15%',
            paddingBottom:'10%',
        }}>
            <div className='title' style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div className='head' style={{
                    marginBottom: '2%'
                }}>
                    solution
                </div>
                <span style={{
                    marginBottom: '1vh'
                }}>{content.homeTitle3 || ''}</span>
                <span className='highlight' style={{
                    marginBottom: '20%'
                }}
                >{content.homeTitle3_1 || ''}</span>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2.3vw'
            }}>
                {content.homeSubTitle || ''}
            </div>
        </BasicLayout>


    )
        ;
};

export default Home3;