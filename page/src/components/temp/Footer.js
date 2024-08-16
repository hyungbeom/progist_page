import React from 'react';

const Footer = () => {

    return (
        <div style={{
            // backgroundColor:'gray',
            height:'1080px',
            width: '100%',
            display:"flex",
            flexDirection:'column',
            position:'relative',
            flexWrap: 'nowrap',
        }}>
            <div style={{
                width: '100%',
                height:'200px',
                backgroundColor:'white',
                // backgroundColor:'green',
            }}>

            </div>
            <div style={{
                width: '100%',
                height: '780px',
                backgroundColor: 'gray',
                position:'relative',
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'flex-end',
            }}>
                {/*메뉴*/}
                <div style={{
                    fontSize:'20px',
                    fontWeight:'600',
                    width:'70%',
                    alignItems: 'center', justifyContent: 'flex-end', display: "flex", flexDirection: "row",
                    gap: '10%', whiteSpace: 'nowrap', marginTop:'60px', marginRight:'80px'
                }}>
                    <span style={{color:'orange'}}>Home.</span>
                    <span>About Us.</span>
                    <span>Progress.</span>
                    <span>Recruit.</span>
                    <span>Get in touch</span>
                </div>
                <div style={{
                    width:'55%',
                    height:'1px',
                    backgroundColor:'black',
                    opacity:'60%',
                    marginTop:'60px',
                    marginRight:'55px'
                }}>

                </div>
                {/*연락처*/}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'

                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <span style={{
                            fontSize: '22px',
                            fontWeight: 'bold'
                        }}>
                            address
                        </span>
                        <span style={{
                            fontSize: '20px',
                        }}>
                            서울특별시 강남구 논현로133길 12
                        </span>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <span style={{
                            fontSize: '22px',
                            fontWeight: 'bold'
                        }}>
                            E-mail
                        </span>
                        <span style={{
                            fontSize: '20px',
                        }}>
                            progist@progist.co.kr
                        </span>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <span style={{
                            fontSize: '22px',
                            fontWeight: 'bold'
                        }}>
                            Phone
                        </span>
                        <span style={{
                            fontSize: '20px',
                        }}>
                            +82 010-1234-5678
                        </span>
                    </div>
                    <div>

                    </div>
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    marginBottom: '100px',
                    alignItems: 'flex-start',
                    width: '58%'
                }}>
                    <div style={{
                        position: "relative",
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        fontSize: '20px',
                    }}>
                        <span>
                        @2024, Progist. All Right Reserved.
                        </span>
                        <div style={{
                            position:'absolute',
                            width: '500px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            right:0,
                            marginRight:'55px',
                            gap: '7%'
                        }}>
                            <div>
                                Ligal notice
                            </div>
                            <div>
                                Privacy policy
                            </div>
                            <div>
                                Linkedin
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*하단 텍스트 플로우*/}
            <div style={{
                width: '100%',
                height: '300px',
                backgroundColor: 'black',
                overflow: 'hidden',
                position: 'relative',
            }}>
                <div style={{
                    display: 'flex',
                    whiteSpace: 'nowrap',
                    color: "white", fontSize: '150px', margin: '22px',
                    justifyContent: 'center', opacity: '40%',

                }}>
                    <span style={{
                        animation: 'marquee 15s linear infinite',
                        paddingRight: '10%',
                    }}>Are you interested in? Let's discuss today!
                    </span>
                    <span style={{
                        animation: 'marquee 5s linear infinite',
                        // paddingRight: '10%',
                        // animationDelay: '6s'
                    }}
                    > Are you interested in? Let's discuss today!
                    </span>
                </div>
                <style>
                    {`
                    @keyframes marquee {
                    from {transform: translateX(100%);}
                    to {transform: translateX(-100%);}
                    }
                    `}
                </style>
            </div>
            {/*구독창*/}
            <div style={{
                width: '550px',
                height: '660px',
                position: 'absolute',
                backgroundColor: 'black',
                top: '70px',
                left: '150px'
            }}>
            <div>
                </div>

            </div>
        </div>
    );
};

export default Footer;