import React, {useEffect, useState} from 'react';
import InfoCard from "../temp/InfoCard";
import ContentLayout from "../temp/ContentLayout";
import {contentList} from "../../temp/contentList";

const HomeContent1 = () => {
    const [contents, setContents] = useState({})
    useEffect(() => {
        const {homeContents1} = contentList;
        setContents(homeContents1)
    }, [])
    return (
        <ContentLayout>

            <div style={{
                backgroundColor: "gray",
                justifyContent: "flex-start",
                display: "flex",
                flexDirection: "row",
                gap: '30px'
            }}>


                <div style={{paddingLeft: '209px', float: "left", width: "200px", height: "100vh", fontSize: "20px"}}>
                <span style={{opacity: "60%"}}>
                    Company</span>
                </div>


                <div style={{
                    float: "left",
                    height: "100vh",
                    width: "680px",
                    fontSize: "67px",
                    position: "relative",
                    overflow: "hidden"
                }}>
                    <span>Welcome to</span><br/>
                    <span>Progist, where</span><br/>
                    <span>engineering</span><br/>
                    <span>excellence meets</span><br/>
                    <span>innovation</span>
                    <div style={{
                        marginTop: "419px",
                        height: '116px',
                        width: '320px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <img src="././img/company2.png" alt="company"
                             style={{width: "auto", position: 'absolute', top: 0}}/>
                    </div>

                </div>
                <div style={{float: 'right', display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    {/*<InfoCard*/}
                    {/*    fonts={} title={contents.title}*/}
                    {/*    subTitle={contents.subTitle}/>*/}
                    {/*{contents.etc}*/}
                </div>
            </div>


        </ContentLayout>
    );
};

export default HomeContent1;