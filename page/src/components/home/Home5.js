import React, {useEffect, useState} from 'react';
import {getHomeContents} from "../../resource/contents/HomeContents";
import Div3ContentsLayout from "../layouts/Div3ContentsLayout";
import InfoCard from "../temp/InfoCard";

const Home5 = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data=getHomeContents();
        setContent(data)
    }, []);

    return (
        <Div3ContentsLayout
            div1='1' div2='6' div3='12' span1='5' span2='6' span3='5'
            style={{
                paddingBottom:'15%'
            }}
            first={
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width:'100%',
                    }}>
                        {content.infoCardContents7 ?
                            (<InfoCard
                                title={content.infoCardContents7.title}
                                subtitle={content.infoCardContents7.subtitle}
                                style={{
                                    textAlign:'end',
                                    marginTop: '30%',
                                }}
                            />):null}
                        {content.infoCardContents8 ?
                            (<InfoCard
                                title={content.infoCardContents8.title}
                                subtitle={content.infoCardContents8.subtitle}
                                style={{
                                    textAlign:'end',
                                    marginTop: '30%'
                                }}
                            />):null}
                    </div>
            }
            second={
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'auto',
                    height: '100%',
                    position: "relative",
                    justifyItems: 'center',
                    alignItems: 'center',
                }}>
                    <img src='img/homePhone.png' alt='homeImg'
                         style={{
                             position: "absolute",
                             width: '80%',
                             marginTop: '3%'
                         }}/>
                    <img src='././img/CI.png' alt='CI'
                         style={{
                             width: '20%',
                             position: 'absolute',
                             zIndex: 10,
                             top: '42%',
                         }}/>
                </div>
            }
            third={
                <div style={{}}>
                    {content.infoCardContents9 ?
                        (<InfoCard
                            title={content.infoCardContents9.title}
                            subtitle={content.infoCardContents9.subtitle}
                            style={{
                                marginTop: '30%'
                            }}
                        />):null}
                    {content.infoCardContents10 ?
                        (<InfoCard
                            title={content.infoCardContents10.title}
                            subtitle={content.infoCardContents10.subtitle}
                            style={{
                                marginTop: '30%'
                            }}
                        />):null}
                </div>
            }
        />

    );
};

export default Home5;