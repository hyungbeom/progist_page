import React from 'react';

const AboutUs = () => {
    return (
        <div style={{
            // backgroundColor:'gray',
            width:'1980px',
            height:'1080px',
            justifyContent:'flex-end',
            alignItems:'center',
            display:'flex',
            flexDirection:'column',
        }}>
            <div style={{
                width: '730px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <span style={{fontSize: '40px', fontWeight: 'bold'}}>We offer Customized and innovative</span>
                <span style={{fontSize: '40px', fontWeight: 'bold', color: 'orange'}}>platform solutions!</span><br/>
                <span style={{fontSize: '30px', opacity:"60%", marginTop:'300px', paddingLeft:'10px'}}>We provide customized solutions optimized for the unique needs and business goals of our clients.
                    <br/>We offer flexible and scalable system integration services across various industries, contributing to the growth of our clients businesses.</span>
            </div>
            <div style={{
                width:'668px',
                height:'103px',
                overflow:'hidden',
                position:'relative',
                bottom:0}}>
                <img src='././img/aboutUs.png' alt='About Us' style={{position:"absolute", width:'auto', top:0}}/>
            </div>
        </div>
    );
};

export default AboutUs;