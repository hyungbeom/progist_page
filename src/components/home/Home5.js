import React, {useEffect, useState} from 'react';
import {getHomeContents} from "../../assets/contents/HomeContents";
import Div3ContentsLayout from "../layouts/GridContentsLayout";
import InfoCard from "../temp/InfoCard";
import BasicLayout from "../layouts/BasicLayout";
import {Link} from "react-router-dom";

const Home5 = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data=getHomeContents();
        setContent(data)
    }, []);


    const SquareCard=({img='', text='', style})=>{
        return(
            <div style={{
                width:'100%',
                aspectRatio: '1 / 1',
                backgroundColor:'#1d1d1e',
                position:'relative',
                ...style,
            }}>
                <img src={img} alt='icon' style={{
                    width:'18%',
                    aspectRatio: '1 / 1',
                    position:'absolute',
                    top:'10%',
                    right:'10%'
                }}/>
                <div style={{
                    fontSize:'1.4vw',
                    position:'absolute',
                    bottom: '0',
                    margin: '10%',
                    color: 'white',
                }}>
                    {text}
                </div>
            </div>
        )
    }

    return (
        <BasicLayout style={{
            backgroundColor:'black',
            height:'100%',
            paddingTop:'10%',
            paddingBottom:'37.2%'
        }}>
            <div style={{
                display: 'flex',
                justifyItems: 'space-between',
                flexDirection: 'row',
                width: '100%',
            }}>
                <div style={{ // flex1
                    flex:1,
                    position:'relative',
                }}>
                    <div style={{
                        width: '200%',
                        aspectRatio: '1 / 0.95',
                        backgroundColor: '#ff471d',
                        position: 'relative',
                        top: '-50%',
                        zIndex: 10
                    }}>
                        <div style={{
                            fontSize: '1.3vw',
                            fontWeight: 500,
                            position: 'absolute',
                            bottom: '0',
                            margin: '8%',
                            color: 'white',
                            top: '5%'
                        }}>
                            progress
                        </div>
                        <div style={{
                            width: '100%',
                            height:'100%',
                            fontSize: '3.5vw',
                            fontWeight: 500,
                            lineHeight: 0.98,
                            position: 'absolute',
                            bottom: '0',
                            margin: '8%',
                            color: 'white',
                            top: '17%'
                        }}>
                            {content.homeTitle4 || ''}
                        </div>
                    </div>
                </div>
                <div style={{ // flex2
                    flex: 1,
                    position: 'relative',
                }}>
                    {content.squareCardContents1 ? (
                        <SquareCard
                            img={content.squareCardContents1.img}
                            text={content.squareCardContents1.text}
                            style={{
                                top:'100%',
                            }}
                        />
                    ) : null}
                </div>
                <div style={{ // flex3
                    flex: 1,
                    position:'relative',
                }}>
                    {content.squareCardContents2 ? (
                        <SquareCard
                            img={content.squareCardContents2.img}
                            text={content.squareCardContents2.text}
                            style={{
                                top:'50%',
                            }}
                        />
                    ) : null}
                    <div style={{
                        width: '100%',
                        aspectRatio: '1 / 1',
                        backgroundColor: '#ff471d',
                        position: 'absolute',
                        top: '150%',
                    }}>
                        <Link to='/progress'>
                            <div style={{
                                fontSize: '2.2vw',
                                fontWeight: 600,
                                lineHeight: 1.1,
                                position: 'absolute',
                                top: '0',
                                margin:'13%',
                                color: 'white',
                            }}>
                                Explore<br/>Progist<br/>Progress
                            </div>
                        </Link>
                    </div>

                </div>
                <div style={{  // flex4
                    flex: 1,
                    position: 'relative',
                }}>
                    {content.squareCardContents3 ? (
                        <SquareCard
                            img={content.squareCardContents3.img}
                            text={content.squareCardContents3.text}
                            style={{
                                top:0
                            }}
                        />
                    ) : null}
                    {content.squareCardContents4 ? (
                        <SquareCard
                            img={content.squareCardContents4.img}
                            text={content.squareCardContents4.text}
                            style={{
                                top:'50%'
                            }}
                        />
                    ) : null}
                </div>
                <div style={{  // flex5
                    flex:1,
                    position:'relative',
                }}>
                    {content.squareCardContents5 ? (
                        <SquareCard
                            img={content.squareCardContents5.img}
                            text={content.squareCardContents5.text}
                            style={{
                                top:'50%'
                            }}
                        />
                    ) : null}
                </div>
            </div>


        </BasicLayout>

    );
};

export default Home5;