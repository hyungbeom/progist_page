import React, {useEffect, useState} from 'react';

const useSendEmail = (contents) => {

    const [status, setStatus] = useState('');
    const [emailData, setEmailData] = useState(contents);

    useEffect(() => {
        setEmailData(contents);
    }, [contents]);

    async function handleSendEmail() {
        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: emailData.email,
                    subject: '프로젝트 의뢰: ' + emailData.phone,
                    message:
                        'email: ' + emailData.email + '\n' +
                        '이름: ' + emailData.name + '\n' +
                        '전화번호: ' + emailData.phone + '\n' +
                        '회사: ' + emailData.company + '\n' +
                        '직책: ' + emailData.position + '\n' +
                        '프로젝트 설명: ' + emailData.message,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setStatus('프로젝트 의뢰가 접수되었습니다. 확인 후 빠르게 회신드리겠습니다.');
            } else {
                setStatus('접수에 실패했습니다.');
            }
        } catch (error) {
            setStatus('오류가 발생했습니다.');
        }
    }
    console.log(status);

    return { handleSendEmail };
};

export default useSendEmail;