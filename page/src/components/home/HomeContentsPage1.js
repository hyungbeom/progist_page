import React, {useEffect, useState} from 'react';
import HomeContentsLayout from "../layouts/HomeContentsLayout";
import {getHomeContents} from "../../resource/contents/HomeContents";
import InfoCard from "../temp/InfoCard";

const HomeContentsPage1 = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data = getHomeContents();
        setContent(data)
    },[])

    return (
        <div>
            <HomeContentsLayout
                first={
                    <div style={{
                        marginTop: '1vw',
                        float:'right',
                        width:'70%',
                        textAlign:'left',
                    }}>
                        <div style={{
                            fontSize: '1.2vw',
                            fontWeight: '500',
                            opacity: '50%'
                        }}>
                            Company
                        </div>
                    </div>
                }
                second={
                    <div style={{
                        position:'relative' // infocard 화면 밖으로 밀어내기
                    }}>
                        <div style={{
                            fontSize: '4vw',
                            fontWeight: '500',
                            lineHeight: '0.9'
                        }}>
                            {content.homeTitle1 || ''}
                        </div>
                        {content.infoCardContents1_1 ?
                            (<InfoCard img={content.infoCardContents1_1.img}
                                  width='42%'
                                  style={{
                                      position:'absolute', // infocard 화면 밖으로 밀어내기
                                      top:'165%',
                                      left:0,
                                      zIndex:10
                        }}/>):null}
                    </div>
                }
                third={
                    <div>
                        {content.infoCardContents1 ?
                            (<InfoCard
                                    style={{
                                        marginTop: '1vw',
                                }}
                                img={content.infoCardContents1.img}
                                title={content.infoCardContents1.title}
                                subtitle={content.infoCardContents1.subtitle}
                                link={content.infoCardContents1.link}
                                width='90%' imgWidth='70%'/>
                        ): null}
                </div>}
            />

        </div>
    );
};

export default HomeContentsPage1;