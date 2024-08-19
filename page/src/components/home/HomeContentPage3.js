import React, {useEffect, useState} from 'react';
import BasicLayout from "../layouts/BasicLayout";
import {getHomeContents} from "../../resource/contents/HomeContents";
import '../../resource/css/body.css';

const HomeContentPage3 = () => {

    const [content, setContent]=useState({})
    useEffect(() => {
        const data = getHomeContents()
        setContent(data)
    }, []);

    return (
        <BasicLayout style={{
            // backgroundColor: 'gray',
        }}>
            <div className='title' style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div className='head' style={{
                    marginBottom:'8vh'
                }}>
                    solution
                </div>
                <span style={{
                    marginBottom:'6vh'
                }}>{content.homeTitle3 || ''}</span>
                <span className='highlight' style={{
                    marginBottom:'8vh'
                }}
                >{content.homeTitle3_1 || ''}</span>
            </div>
        </BasicLayout>


)
    ;
};

export default HomeContentPage3;