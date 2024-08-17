import React, {useState} from 'react';
import {div} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";

const Footer = () => {


    const menuList = [{title: 'Home.', link: '.'}, {title: 'About.', link: '.'}, {
        title: 'Progress.',
        link: '.'
    }, {title: 'Recruit.', link: '.'}, {title: 'Marketing', link: '.'}]


    const [email, setEmail] = useState('')

    function clickSubscribe() {

    }

    function writeEmail(e) {
        setEmail(e.target.value)
    }


    function SubscribeCard() {

        return (
            <div style={{height: 550, width: 370, backgroundColor: '#212121', padding: '35px 60px 0px 60px'}}>
                <img src="/img/mail_icon.png" alt=""/>

                <div style={{color: 'white', fontSize: 50, paddingTop: 50, lineHeight: 0.95}}>
                    <div>Subscribe to</div>
                    <div>Newsletters</div>
                </div>


                <div style={{color: '#909090', padding: '20px 0px'}}>
                    <div>
                        Want to stay up to date?
                    </div>
                    <div>
                        Sign up for CargoKite's biannual update.
                    </div>
                </div>


                <div style={{border: '1px solid lightGray'}}>
                    <input type="text"
                           value={email}
                           onChange={writeEmail}
                           style={{
                               background: 'none',
                               border: 'none',
                               width: '100%',
                               height: 55,
                               paddingLeft: 10,
                               color: "white"
                           }}
                           placeholder={'Enter your email'}/>
                </div>
                <div style={{
                    backgroundColor: '#ff461e',
                    height: 18,
                    marginTop: 20,
                    cursor: 'pointer',
                    textAlign: 'center',
                    color: 'white',
                    padding: 22
                }}
                     onClick={clickSubscribe}>
                    Subscribe
                </div>
                <div style={{color: 'white', fontSize: 11, padding: 10}}>Don't worry about spam. We hate it too</div>
            </div>
        )
    }

    function FooterCompanyInfo(){
        return (
            <div>
                <div>
                    {menuList.map((v) => {
                        return <span style={{paddingLeft: 25, cursor: 'pointer'}}>{v.title}</span>
                    })}
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
        <div style={{height: 500, backgroundColor: '#eaeef0'}}>

            <SubscribeCard/>

            <FooterCompanyInfo/>
        </div>
    );
};

export default Footer;