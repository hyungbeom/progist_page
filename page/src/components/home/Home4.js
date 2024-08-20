import React, {useEffect, useState} from 'react';
import BasicLayout from "../layouts/BasicLayout";
import {getHomeContents} from "../../resource/contents/HomeContents";

const Home4 = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data=getHomeContents();
        setContent(data)
    }, []);

    return (
        <BasicLayout>
            <div style={{
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2.3vw'
            }} >
                {content.homeSubTitle || ''}
            </div>
        </BasicLayout>
    );
};

export default Home4;