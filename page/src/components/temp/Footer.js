import React, {useState} from 'react';
import {div} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import {menuList} from "../../resource/contents/MenuList";
import Div3ContentsLayout from "../layouts/Div3ContentsLayout";
import {Link} from "react-router-dom";

const Footer = () => {

    const [email, setEmail] = useState('')

    function clickSubscribe() {

    }

    function writeEmail(e) {
        setEmail(e.target.value)
    }


    function SubscribeCard() {

        return (
            <div style={{
                width: '23vw',
                aspectRatio:'1/1.2',
                backgroundColor: '#212121',
                padding:'12%',
                position: 'absolute',
            }}>
                <img src="/img/mail_icon.png" alt="mail"
                style={{
                    width:'18%'
                }}/>

                <div style={{color: 'white', fontSize: '3vw', paddingTop: '7%', lineHeight: 0.95}}>
                    <div>Subscribe to</div>
                    <div>Newsletters</div>
                </div>


                <div style={{
                    color: '#909090',
                    fontSize: '1vw',
                    fontWeight: '600'
                }}>
                    <div style={{
                        marginTop:'2%'
                    }}>
                        Want to stay up to date?
                    </div>
                    <div style={{
                        marginTop:'1.5%'
                    }}>
                        Sign up for CargoKite's biannual update.
                    </div>
                </div>


                <div style={{
                    border: '0.5px solid Darkgray',
                    marginTop:'3%',
                    height:'14%',
                }}>
                    <input type="text"
                           value={email}
                           onChange={writeEmail}
                           style={{
                               background: 'none',
                               border: 'none',
                               width: '100%',
                               paddingLeft: '5%',
                               paddingTop: '6%',
                               color: "white",
                               fontSize: '0.9vw'
                           }}
                           placeholder={'Enter your email'}/>
                </div>
                <div style={{
                    backgroundColor: '#ff461e',
                    height: '15%',
                    marginTop: '3%',
                    cursor: 'pointer',
                    textAlign: 'center',
                    color: 'white',
                    display:'flex',
                    alignItems:'center',
                    justifyContent: 'center',
                    fontSize: '1vw',
                    fontWeight: '600'
                }}
                     onClick={clickSubscribe}>
                    Subscribe
                </div>
                <div style={{color: '#909090', fontSize: '0.7vw', padding: '3% 0'}}>Don't worry about spam. We hate it too</div>
            </div>
        )
    }

    function FooterCompanyInfo(){
        return (
            <div style={{
                position:'relative',
            }}>
                <div style={{
                    // backgroundColor: 'gray',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.1vw',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    width: '100%',
                    margin: '3% 0',
                }}>
                    {/*메뉴*/}
                    <div style={{
                        // backgroundColor: 'gray',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                    }}>
                        {menuList.map((v) => {
                            return (
                                <Link to={v.link}
                                      style={{
                                          textDecoration: 'none',
                                          cursor: 'pointer',
                                          color: 'inherit', // 링크 연결 후에도 color를 유지함
                                      }}>
                            <span
                                key={v.title}
                            >
                            {v.title}
                            </span>
                                </Link>)
                        })}
                    </div>
                    <span style={{
                        marginLeft: '2vw',
                        width: '6.5vw',
                        padding: '1.8%',
                        color: '#fd461e',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        textAlign: 'center'
                    }}>Get in touch.</span>
                </div>
                <div style={{border: '1px solid lightGray', width: '100%'}}/>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(8,1fr)',
                    gap:'2%'
                }}>
                    <div style={{
                        gridColumn: '1 / span 2',
                        width: '100%',
                        fontSize:'0.9vw',
                    }}>
                        <div style={{
                            fontWeight:500,
                            marginTop:'45%',
                        }}>Head office</div>
                        <div style={{
                            lineHeight:1.5,
                            marginTop:'11%',
                            color:'#4b4b4b',
                        }}>서울 강남구 논현동<br/>36-11 능원빌딩<br/>401호</div>
                    </div>
                    <div style={{
                        gridColumn: '3 / span 2',
                        width: '100%',
                        fontSize:'0.9vw',
                    }}>
                        <div style={{
                            fontWeight: 500,
                            marginTop: '45%',
                        }}>Postal & Visitor address
                        </div>
                        <div style={{
                            lineHeight: 1.5,
                            marginTop: '11%',
                            color: '#4b4b4b',
                        }}>서울 강남구 논현동<br/>36-11 능원빌딩<br/>401호
                        </div>
                    </div>
                    <div style={{
                        gridColumn: '6 / span 3'
                    }}>
                        <div style={{
                            fontWeight: 500,
                            marginTop: '28%',
                            fontSize:'0.8vw',
                            color:'#4b4b4b',
                        }}>Email</div>
                        <div style={{
                            fontWeight:500,
                            marginTop:'2%',
                            fontSize:'1.5vw',
                            color:'#4b4b4b',
                        }}>info@progist.co.kr</div>
                        <div style={{
                            fontWeight:500,
                            marginTop:'10%',
                            fontSize:'0.8vw',
                            color:'#4b4b4b',
                        }}>
                            Phone</div>
                        <div style={{
                            fontWeight:500,
                            marginTop:'2%',
                            fontSize:'1.5vw',
                            color:'#4b4b4b',
                        }}>+82 10 1111 1111</div>
                    </div>

                </div>

                <div style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection:'row',
                    justifyContent:'flex-between',
                    fontSize: '0.8vw',
                    color: '#4b4b4b',
                    position:'absolute',
                    whiteSpace: 'nowrap',
                    bottom:'-34%'
                }}>
                    ⓒ2023 Progist All Rights Reserved.
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        gap:'15%',
                        whiteSpace: 'nowrap',
                        marginLeft: '43%',
                        }}>
                        <span>Legal notice</span>
                        <span>Privacy policy</span>
                        <span>Linkedin</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Div3ContentsLayout
            div1='2' div2='8' div3='' span1='4' span2='8' span3=''
            style={{
                backgroundColor: '#e8ecee',
                aspectRatio: '3.5/1',
            }}
            first={
                <div style={{
                    width:'100%',
                    height: '100%',
                    position:'relative',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    top:'-33%'
            }}>
                <SubscribeCard/>
            </div>
            }
            second={
                <FooterCompanyInfo/>
            }
            />
    );
};

export default Footer;