import React, {useState} from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Modal from "../Modal";
import useSendEmail from "../tools/SendEmail";

const ContactNow1 = () => {

    useGSAP(()=> {

        let tl3 = gsap.timeline({})

        tl3.to(".main_title", {xPercent: -83, yPercent: 465, scale:0.28, fontWeight:600, position:'absolute', zIndex:5})

        ScrollTrigger.create({
            animation: tl3,
            trigger: ".main_title",
            start: "top +=10%",
            scrub: 1,
            markers: true,
        },);

    })

    function EssentialSign({style}){
        return(
            <div className='EssentialSign signature_bg' style={{...style}}/>
        )
    }

    const [emailContents, setEmailContents] = useState({
        email: '',
        name: '',
        phone: '',
        company: '',
        position: '',
        // file: null,
        message: '',
    });


    //TODO 필수 입력 구현 필요
    // 입력 필드별 핸들러 함수
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmailContents({
            ...emailContents,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setEmailContents({
            ...emailContents,
            file: e.target.files[0],
        });
    };

    const { handleSendEmail, status } = useSendEmail(emailContents);
    const [modalMessage, setModalMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 제출 버튼 클릭 시 이메일 전송
    const handleClickSubmit = async () => {
        if (!emailContents.email || !emailContents.name || !emailContents.phone || !emailContents.message) {
            setModalMessage('이메일, 이름, 전화번호, 프로젝트 설명은 필수 항목입니다.');
            setIsModalOpen(true); // 모달 열기
            return;
        }

        await handleSendEmail().then(r => console.log(status+'contact'));
        setModalMessage(status);
        setIsModalOpen(true); // 모달 열기
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // 모달 닫기
        setModalMessage(''); // 초기화
    };

    return (
        <>
            <div className='layout flex center signature_bg'>
                <div className='main_title'>
                    Contact Now.
                </div>
            </div>

            <div className='layout flex column' id='contact_now1' style={{aspectRatio: '1.23/1', gap: '2%'}}>
                <div style={{padding: '13% 0 0 8%'}}>
                    <div style={{fontSize: '3.1vw', fontWeight: 750}}>맞춤형 솔루션 받기</div>
                    <div className='text' style={{marginTop: '0.8%'}}>프로지스트와 함께 꿈을 실현시켜보세요.</div>
                </div>
                <div className='contact_input'>
                    <div className='text bold' style={{gridColumn: '1 / span 2'}}>
                        1.기본 정보
                    </div>
                    <div style={{gridColumn: '3 / span 4', display: 'flex', flexDirection: 'column',}}>
                        <label>
                            <div className='label_container'>성명<EssentialSign/></div>
                            <input type='text' name="name" value={emailContents.name} onChange={handleInputChange}
                                   placeholder='성명을 입력해주세요.'/>
                        </label>
                        <label>
                            <div className='label_container'>연락처<EssentialSign/></div>
                            <input type='text' name="phone" value={emailContents.phone} onChange={handleInputChange}
                                   placeholder='연락받으실 전화번호를 입력해주세요.'/>
                        </label>
                        <label>
                            회사명<input type='text' name="company" value={emailContents.company}
                                      onChange={handleInputChange} placeholder='회사명을 입력해주세요.'/>
                        </label>
                    </div>
                    <div style={{gridColumn: '7 / span 4', display: 'flex', flexDirection: 'column',}}>
                        <label>
                            <div className='label_container'>이메일<EssentialSign/></div>
                            <input type='email' name="email" value={emailContents.email} onChange={handleInputChange}
                                   placeholder='이메일을 입력해주세요.'/>
                        </label>
                        <label>
                            직책<input type='text' name="position" value={emailContents.position}
                                     onChange={handleInputChange} placeholder='직책을 입력해주세요.'/>
                        </label>
                    </div>
                </div>
                <div className='contact_input'>
                    <div className='text bold' style={{gridColumn: '1 / span 2'}}>
                        2. 프로젝트 정보
                    </div>
                    <div style={{gridColumn: '3 / span 8', display: 'flex', flexDirection: 'column',}}>
                        <label>
                            파일첨부<input type='file' onChange={handleFileChange}
                                       style={{cursor: 'pointer', padding: '1% 2.5%'}} placeholder='파일 업로드하기'/>
                        </label>
                        <label>
                            <div className='label_container'>프로젝트 설명<EssentialSign
                                style={{width: '0.7%', marginBottom: '1.2%'}}/></div>
                            <input type='text' name="message" value={emailContents.message} onChange={handleInputChange}
                                   style={{padding: '1.5% 2.5% 5% 2.5%'}} placeholder='의뢰하시는 프로젝트에 대한 설명을 작성해주세요.'/>
                        </label>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    width: '100%',
                    height: 'auto',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <button className='shining_button' style={{
                        fontSize: '0.93vw',
                        width: '25%',
                        margin: '1.5% 8% 0 0',
                        padding: '1% 10%',
                        border: "none"
                    }}
                            onClick={handleClickSubmit}>제출하기
                    </button>
                    {/* 모달 표시 */}
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} message={modalMessage} />
                </div>
            </div>
        </>
    );
};

export default ContactNow1;