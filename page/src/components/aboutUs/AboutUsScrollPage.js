import React from 'react';

const AboutUsScrollPage = () => {
    return (
        <div style={{
            // backgroundColor: 'gray',
            width: '1980px',
            height: '1080px',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
        }}>
            {/*좌측 설명*/}
            <div style={{
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '180px',
                padding: '30px',
                textAlign:'right'
            }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <span style={{fontSize: '30px', fontWeight: 'bold'}}>Customized and innovative</span>
                    <span style={{marginTop: '10px', fontSize: '20px', opacity: "60%"}}>We provide customized solutions optimized for the unique needs and business goals of our clients.
                    <br/>We offer flexible and scalable system integration services across various industries.</span>
                </div>
                <div style={{
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <span style={{fontSize: '30px', fontWeight: 'bold'}}>Customized and innovative</span>
                    <span style={{marginTop: '10px', fontSize: '20px', opacity: "60%"}}>We provide customized solutions optimized for the unique needs and business goals of our clients.
                    <br/>We offer flexible and scalable system integration services across various industries.</span>
                </div>
            </div>
            <div style={{
                width: '668px', height: '1121px', overflow: 'hidden', position: 'relative', top: 0,
                alignItems: 'center', justifyContent: 'center'
            }}>
                <img src='././img/aboutUs.png' alt='About Us' style={{position: "absolute", width: 'auto', bottom: 0}}/>
                <img src='././img/CI.png' alt='CI'
                     style={{width: '150px', position: 'absolute', zIndex: 50, top:'45%', left:'50%', transform: 'translate(-50%, -50%)'}}/>
            </div>
            {/*우측 설명*/}
            <div style={{
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '180px',
                padding: '30px'
            }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <span style={{fontSize: '30px', fontWeight: 'bold'}}>Customized and innovative</span>
                    <span style={{marginTop: '10px', fontSize: '20px', opacity: "60%"}}>We provide customized solutions optimized for the unique needs and business goals of our clients.
                    <br/>We offer flexible and scalable system integration services across various industries.</span>
                </div>
                <div style={{
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <span style={{fontSize: '30px', fontWeight: 'bold'}}>Customized and innovative</span>
                    <span style={{marginTop: '10px', fontSize: '20px', opacity: "60%"}}>We provide customized solutions optimized for the unique needs and business goals of our clients.
                    <br/>We offer flexible and scalable system integration services across various industries.</span>
                </div>
            </div>

        </div>
    );
};

export default AboutUsScrollPage;