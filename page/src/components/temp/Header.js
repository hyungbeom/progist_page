import '../../resource/css/HeaderCSS.css';
import React from "react";

function Header() {


    return (

        <div style={{
            // backgroundColor:'gray',
            position: 'fixed',
            zIndex:100,
            display:"flex",
            flexDirection:'column',
            height: '1080px',
            width:'100%'
        }}>
            {/*상단 메뉴바*/}
            <div style={{
                height: '100px', width: 'auto', flexWrap: 'nowrap',
                // backgroundColor:'green',
                alignItems: 'center',
                justifyContent: 'flex-start',
                display: "flex",
                flexDirection: "row",
            }}>
                {/*회사 로고*/}
                <div style={{
                    // color: 'white',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    display: "flex",
                    flexDirection: "row",
                    height: '100px',
                    marginLeft:'80px'
                }}>
                    <img src="././img/CI.png" alt="CI"/>
                    <div>
                        <span style={{fontSize: 40, marginLeft: 18}}>Pro</span>
                        <span style={{fontSize: 40, fontWeight: "700"}}>Gist</span>
                    </div>
                </div>

                {/*메뉴*/}
                <div style={{
                    // color: 'white',
                    alignItems: 'center', justifyContent: 'flex-end', display: "flex", flexDirection: "row",
                    gap: '20%', whiteSpace: 'nowrap', position: 'fixed', right: 0, marginRight:'110px', marginTop:'7px'
                }}>
                    <span>Home.</span>
                    <span>About Us.</span>
                    <span>Progress.</span>
                    <span>Recruit.</span>
                    <span>Contact.</span>
                    <span style={{
                        marginLeft: 5,
                        backgroundColor: '#C17F00',
                        padding: 14,
                    }}>Get in touch</span>
                </div>
                {/*우측 사이드바*/}
                <div style={{
                    width: '66px',
                    height: '203px',
                    backgroundColor: '#C17F00',
                    position: 'fixed',
                    right: '85px',
                    top: '50%'
                }}>

                </div>
            </div>
        </div>

    )
}

export default Header;