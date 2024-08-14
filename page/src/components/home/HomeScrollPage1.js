import React from 'react';
import InfoCard from "../temp/InfoCard";
import companyImg from '../../resource/img/company.png';
import '../../resource/css/HeaderCSS.css';

const HomeScrollPage1 = () => {
    return (
        <div style={{
            // backgroundColor: "gray",
            height: "1080px",
            justifyContent: "flex-start",
            paddingTop: "145px",
            paddingRight: "100px",
            display: "flex",
            flexDirection: "row",
            gap: '30px'
        }}>
            <div style={{paddingLeft: '209px', float: "left", width: "200px", height: "100vh", fontSize: "20px"}}>
                <span style={{opacity: "60%"}}>
                    company</span>
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
                <div style={{marginTop: "419px", height:'116px', width:'320px', position:'relative', overflow:'hidden'}}>
                    <img src="././img/company1.png" alt="CI" style={{width: "auto", position: 'absolute', top:0}}/>
                </div>

            </div>
            <div style={{float: 'right', display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <InfoCard
                    img={companyImg} title={'We are a tech startup from Munich\n' +
                    'reinventing how goods are transported \n' +
                    'across the ocean.'}
                    subTitle={'Since our inception in 2020, we have been dedicated to pioneering groundbreaking technology solutions for the future of transport and logistics. Spun out of the Technical University of Munich as one of the world-leading institutions for robotics and automation, our team combines German engineering tradition with the fast development cycles of a startup.'}
                />
                <span style={{color: "#D75A00", textDecoration: "underline", fontSize: "20px", marginTop: "20px"}}>
                More About Us
                </span>
            </div>
        </div>
    );
};

export default HomeScrollPage1;