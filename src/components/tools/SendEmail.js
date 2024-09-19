import emailjs from "@emailjs/browser";

const handleSendEmail = async (emailContents) => {
    // e.preventDefault();

    try {
        const templateParams = {
            name: emailContents.name,
            email: emailContents.email,
            contact: emailContents.contact,
            message: emailContents.message,
            phone: emailContents.phone,
            company: emailContents.company,
            position: emailContents.position,
            file: emailContents.file,
        };

        await emailjs.send(
            'service_nc8eb5v',
            'template_aqaydw8',
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