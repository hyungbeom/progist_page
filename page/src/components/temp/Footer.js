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
                <div>

                </div>
                <div>

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
                    color: "white", fontSize: '150px', margin: '25px',
                    justifyContent: 'center', opacity: '40%',

                }}>
                    <span style={{
                        animation: 'marquee 15s linear infinite',
                        paddingRight: '10%',
                    }}>Are you interested in? Let's discuss today!
                    </span>
                    <span style={{
                        animation: 'marquee 15s linear infinite',
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
                height: '650px',
                position: 'absolute',
                backgroundColor: 'black',
                top: '40px',
                left: '150px'
            }}>
            <div>
                </div>

            </div>
        </div>
    );
};

export default Footer;