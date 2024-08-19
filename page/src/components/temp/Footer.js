import React, {useState} from 'react';
import {div} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import {menuList} from "../../resource/contents/MenuList";
import Div3ContentsLayout from "../layouts/Div3ContentsLayout";

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
                width: '25vw',
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
            <div>
                {/*메뉴*/}
                <div>
                    {menuList.map((v) => {
                        return <span style={{paddingLeft: 25, cursor: 'pointer'}}>{v.title}</span>
                    })}
                    <span style={{
                        marginLeft: '5vw',
                        backgroundColor: '#C17F00',
                        padding: 14,
                        color: 'white',
                        cursor: 'pointer',
                    }}>Get in touch</span>
                </div>
                <div style={{border: '1px solid lightGray', margin: '30px 0px 80px 0px'}}/>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1.5fr 3fr'}}>
                    <div>
                        <div>Head office</div>
                        <div>1</div>
                    </div>
                    <div>
                        <div>Postal & Visitor address</div>
                        <div>1</div>
                    </div>
                    <div>3</div>


                    <div style={{gridColumn: '1/3'}}>
                        2023 Progist All Rights Reserved.
                    </div>
                    <div>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
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
                aspectRatio: '3/1',
            }}
            first={
            <div style={{
                width:'100%',
                height: '100%',
                position:'relative',
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                top:'-20%'
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