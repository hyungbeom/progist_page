import React, {useEffect, useState} from 'react';
import {getHomeContents} from "../../assets/contents/HomeContents";
import InfoCard from "../temp/InfoCard";
import Div3ContentsLayout from "../layouts/GridContentsLayout";

const Home2 = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data = getHomeContents();
        setContent(data)
    },[])

    return (

            <Div3ContentsLayout
                div1='1' div2='4' div3='11' span1='3' span2='7' span3='6'
                style={{
                    paddingTop:'18vw',
                    paddingBottom:'67vw'
                }}
                first={
                    <div style={{
                        position:'relative',
                    }}>
                        <div style={{
                            marginTop: '1vw',
                            float: 'right',
                            width: '70%',
                            textAlign: 'left',
                        }}>
                            <div className='head' style={{
                                fontSize: '1.2vw',
                                fontWeight: '500',
                                opacity: '50%'
                            }}>
                                problem
                            </div>
                        </div>
                        {content.infoCardContents5?
                            (<InfoCard
                                    title={content.infoCardContents5.title}
                                    subtitle={content.infoCardContents5.subtitle}
                                    img={content.infoCardContents5.img}
                                    width='100%'
                                    style={{
                                        position:"absolute",
                                        marginTop:'420%'
                                    }}
                                />
                            ) :null}
                    </div>
                }
                second={
                    <div style={{
                        position:'relative',
                    }}>
                        <div className='title' style={{
                            fontSize: '4vw',
                            fontWeight: '500',
                        }}>
                            {content.homeTitle2 || ''}
                        </div>
                        {content.infoCardContents2?
                            (<InfoCard
                                    title={content.infoCardContents2.title}
                                    subtitle={content.infoCardContents2.subtitle}
                                    img={content.infoCardContents2.img}
                                    width='52%'
                                    style={{
                                        position:'absolute',
                                        top: '170%',
                                    }}
                                />
                            ) :null}
                        {content.infoCardContents6?
                            (<InfoCard
                                    title={content.infoCardContents6.title}
                                    subtitle={content.infoCardContents6.subtitle}
                                    img={content.infoCardContents6.img}
                                    width='72%'
                                    style={{
                                        position:'absolute',
                                        top: '600%',
                                        right:'0',
                                    }}
                                />
                            ) :null}
                    </div>
                }
                third={
                    <div style={{
                        position:'relative',
                    }}>
                         {content.infoCardContents3 ?
                            (<InfoCard
                                    img={content.infoCardContents3.img}
                                    title={content.infoCardContents3.title}
                                    subtitle={content.infoCardContents3.subtitle}
                                    width='65%'
                                style={{
                                    position:'absolute',
                                    right:0,
                                    top:'-1vh'
                                }}/>
                              ): null}

                        {content.infoCardContents4 ?
                            (<InfoCard
                                    img={content.infoCardContents4.img}
                                    title={content.infoCardContents4.title}
                                    subtitle={content.infoCardContents4.subtitle}
                                    width='82%'
                                    style={{
                                        position:'absolute',
                                        left:0,
                                        marginTop:'150%',
                                        zIndex:10,
                                    }}
                                />
                            ): null}
                    </div>
                }
            />

    );
};

export default Home2;