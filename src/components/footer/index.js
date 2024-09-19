import React, {useCallback, useState} from 'react';
import {Link} from "react-router-dom";
import {menuList} from "../../assets/contents/MenuList";
import GridContentsLayout from "../layouts/GridContentsLayout";
import mailIcon from "../../assets/images/footer_icon_mail.png";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import Modal from "../modal";
import handleLeaveContact from "../tools/LeaveConstact";

gsap.registerPlugin(useGSAP);

function Footer() {

    const [contact, setContact] = useState('')
    const [isChecked, setIsChecked] = useState(false);

    const [modalMessage, setModalMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleInputChange = useCallback((e) => {
        setContact(e.target.value)
        console.log(e.target.value)
    },[])

    const handlePrivacyAgreement = (e)=>{
        setIsChecked(e.target.checked);
    }

    // 제출 버튼 클릭 시 이메일 전송
    const handleClickSend = async (e) => {
        e.preventDefault();

        if(!isChecked){
            setModalMessage('개인정보 수집 및 이용에 동의해주세요.')
            setIsModalOpen(true)
            return;
        }

        try{
            await handleLeaveContact(contact)
            setModalMessage('연락처가 전송되었습니다. 확인 후 빠르게 회신드리겠습니다.')
        } catch (error) {
            setModalMessage('오류가 발생했습니다. 유선으로 문의 부탁드립니다.')
        }
        setIsModalOpen(true)
        setContact('')

    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // 모달 닫기
        setModalMessage(''); // 초기화
    };

    const LeaveContactCard = React.memo(()=> {

        return (
            <div style={{
                marginTop: '-5%',
                width: '100%',
                aspectRatio: '1/1.2',
                backgroundColor: '#212121',
                padding: '10%',
                boxSizing: 'border-box',
            }}>

                <img src={mailIcon} alt="mail"
                     style={{
                         width: '18%'
                     }}/>

                <div style={{
                    color: 'white', fontSize: '2.1vw',
                    paddingTop: '7%', lineHeight: 1.2
                }}>
                    <div>이메일 또는 전화번호를<br/>남겨주세요</div>
                </div>
                <div style={{
                    color: '#909090',
                    fontSize: '1vw',
                    fontWeight: '600'
                }}>
                    <div style={{
                        marginTop: '5%',
                        lineHeight: 1.5
                    }}>
                        연락처를 남겨주시면<br/>신속히 연락드리겠습니다.
                    </div>
                </div>

                {/*<input className='footer_input' type='text'*/}
                {/*       value={contact} name="contact"*/}
                {/*       onChange={handleInputChange}*/}
                {/*       placeholder='연락받으실 이메일 또는 전화번호'/>*/}

                <div className='shining_button'
                     style={{
                         width: '100%',
                         fontSize: '1vw',
                         marginTop: '30%',
                         padding: '5% 0'
                     }}
                     onClick={handleClickSend}>
                    Send
                </div>

                <div className="privacy_agreement"
                     style={{
                         color: '#909090',
                         fontSize: '0.7vw',
                         width: '100%',
                         display: 'flex',
                         flexDirection: 'row',
                         justifyContent: 'flex-end',
                         alignItems: 'center',
                         marginTop: '1.5%',
                     }}>
                    <div style={{}}>
                        {'상담을 위한 개인정보 수집 및 이용에 동의합니다.\u00A0\u00A0'}
                    </div>
                    <input className='privacy_checkbox'
                           type='checkbox' onChange={handlePrivacyAgreement}/>
                </div>

                {/* 모달 표시 */}
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} message={modalMessage}/>

            </div>
        )
    })

    function FooterCompanyInfo() {
        return (
            <div style={{
                position: 'relative',
                marginTop:'24%',
            }}>
                {/*메뉴*/}
                <div style={{
                    // backgroundColor: 'gray',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.1vw',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    width: '100%',
                    margin: '5% 0',
                }}>
                    {menuList.map((v) => {
                        return (
                            <Link key={v.title} to={v.link}
                                  style={{
                                      textDecoration: 'none',
                                      cursor: 'pointer',
                                      color: 'inherit', // 링크 연결 후에도 color를 유지함
                                  }}>
                            <span>
                            {v.title}
                            </span>
                            </Link>)
                    })}
                </div>
                <div style={{
                    backgroundColor: 'lightGray',
                    height: '1px',
                    width: '100%'
                }}/>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(8,1fr)',
                    gap:'2%',
                    marginTop: '14%',
                }}>
                    <div style={{
                        gridColumn: '1 / span 2',
                        width: '100%',
                        fontSize:'0.9vw',
                    }}>
                        <div style={{
                            fontWeight:700,

                        }}>Head office</div>
                        <div style={{
                            lineHeight:1.6,
                            marginTop:'11%',
                            color:'#4b4b4b',
                            fontWeight:500,
                        }}>서울 강남구 논현동<br/>36-11 능원빌딩<br/>401호</div>
                    </div>
                    <div style={{
                        gridColumn: '3 / span 2',
                        width: '100%',
                        fontSize:'0.9vw',
                    }}>
                        <div style={{
                            fontWeight: 700,

                        }}>Visitor address
                        </div>
                        <div style={{
                            lineHeight: 1.6,
                            marginTop: '11%',
                            color: '#4b4b4b',
                            fontWeight:500,
                        }}>서울 강남구 논현동<br/>36-11 능원빌딩<br/>401호
                        </div>
                    </div>
                    <div style={{
                        gridColumn: '6 / span 3'
                    }}>
                        <div style={{
                            fontWeight: 500,
                            fontSize:'0.8vw',
                            color:'#4b4b4b',
                        }}>Email</div>
                        <div style={{
                            whiteSpace: 'nowrap',
                            fontWeight:500,
                            marginTop:'2%',
                            fontSize:'1.7vw',
                            color:'#4b4b4b',
                        }}>info@progist.co.kr</div>
                        <div style={{
                            fontWeight:500,
                            marginTop:'5%',
                            fontSize:'0.8vw',
                            color:'#4b4b4b',
                        }}>
                            Phone</div>
                        <div style={{
                            whiteSpace: 'nowrap',
                            fontWeight:500,
                            marginTop:'2%',
                            fontSize:'1.7vw',
                            color:'#4b4b4b',
                        }}>+82 10 8835 7381</div>
                    </div>

                </div>

                <div style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection:'row',
                    justifyContent:'flex-between',
                    fontSize: '0.8vw',
                    color: '#4b4b4b',
                    whiteSpace: 'nowrap',
                    marginTop:'15%'
                }}>
                    ⓒ2024 Progist All Rights Reserved.
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        gap:'15%',
                        whiteSpace: 'nowrap',
                        marginLeft: '38%',
                    }}>
                        <span>Legal notice</span>
                        <span>Privacy policy</span>
                        <span>Linkedin</span>
                    </div>
                </div>
            </div>
        )
    }

    // const Input =() => (<input className='footer_input' type='text'
    //                            value={contact} name="contact"
    //                            onChange={handleInputChange}
    //                            placeholder='연락받으실 이메일 또는 전화번호'/>)

    return (
        <>
            <GridContentsLayout
                div1='2' span1='5' div2='9' span2='7' div3='0' span3='0'
                style={{
                    background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 40%, #E7EBEE 40%, #E7EBEE 100%)',
                    padding: '10% 3.5% 0 3.5%', aspectRatio: '2.25/1',
                }}
                first_contents={
                <div style={{position:'relative',}}>
                    <LeaveContactCard/>
                    <input className='footer_input' type='text'
                    value={contact} name="contact"
                onChange={handleInputChange}
                placeholder='연락받으실 이메일 또는 전화번호'/>
                </div>
            }
            second_contents={
                <FooterCompanyInfo/>
            }>
        </GridContentsLayout>
    <div className="text_flow_container">
                <p className="text_flow reverse origin" id='reverse'>{`Turn your Vision into Reality!\u00A0`}</p>
                <p className="text_flow reverse clone" id='reverse'>{`Turn your Vision into Reality!\u00A0`}</p>
            </div>
        </>
    )
        ;
};

export default Footer;