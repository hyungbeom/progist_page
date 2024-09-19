import emailjs from "@emailjs/browser";

const handleLeaveContact = async (contact) => {

    try {
        const templateParams = {
            contact: contact
        };

        await emailjs.send(
            'service_nc8eb5v',
            'template_u8x9818',
            templateParams, // 폼 대신 templateParams 참조
            'S8TdM4w0s5_wxoM_H'
        )
        console.log('정상 발송');
    } catch (error) {
        console.error('오류 발생', error.text);
    }
}

export default handleLeaveContact;