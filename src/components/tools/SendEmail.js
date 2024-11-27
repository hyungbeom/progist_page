import emailjs from "@emailjs/browser";

const handleSendEmail = async (contact) => {

    try {
        const templateParams = {
            contact: contact,
        };

        await emailjs.send(
            'service_nc8eb5v',
            'template_u8x9818',
            templateParams, // 폼 대신 templateParams 참조
            'S8TdM4w0s5_wxoM_H'
        )
        // setStatus('프로젝트 의뢰가 접수되었습니다. 확인 후 빠르게 회신드리겠습니다.')
        console.log('정상 발송');
    } catch (error) {
        // setStatus('오류가 발생했습니다. 휴대전화로 문의 주세요.');
        console.error('오류 발생', error.text);
    }
}

export default handleSendEmail;