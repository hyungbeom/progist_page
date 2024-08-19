import React from 'react';
import InfoCard from "../temp/InfoCard";

const HomeContent2 = () => {
    return (
        <div style={{
            backgroundColor: "#EAEEF0",
            height: "1080px",
            justifyContent: "flex-start",
            paddingTop: "478px",
            paddingRight: "100px",
            display: "flex",
            flexDirection: "row",
            gap: '30px'
        }}>
            <div style={{paddingLeft: '209px', width: "200px", height: "100vh", fontSize: "20px",
            position:'relative'}}>
                <span style={{opacity: "60%"}}>
                    Company</span>
            </div>
            <div style={{
                height: "100vh",
                width: "680px",
                fontSize: "67px",
                overflow: "hidden",
                transform: 'translateY(-478px)'
            }}>
                <div style={{
                    height: '313px',
                    width: '320px',
                    position: 'relative',
                    overflow: 'hidden',
                    marginBottom: '164px',
                }}>
                    <img src="././img/company2.png" alt="company" style={{width: "auto", position: 'absolute', bottom:0}}/>
                </div>
                <span>Tailored Solution,</span><br/>
                <span>Continuous Care,</span><br/>
                <span>And Empowering</span><br/>
                <span>Your Business</span>

            </div>
            <div style={{transform:'translate(110px)', display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                {/*<InfoCard*/}
                {/*    fonts={companyImg2} title={'We are a tech startup from Munich\n' +*/}
                {/*    'reinventing how goods are transported'}*/}
                {/*    subTitle={'Since our inception in 2020, we have been dedicated to pioneering groundbreaking technology solutions for the future of transport and logistics.'}*/}
                {/*/>*/}
                <span style={{color: "#D75A00", textDecoration: "underline", fontSize: "20px", marginTop: "20px"}}>
                More Progress
                </span>
            </div>

        </div>
    );
};

export default HomeContent2;