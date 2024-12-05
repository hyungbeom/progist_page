import React from 'react';

// 모달 컴포넌트
const Modal = ({ isOpen, onClose, message }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '80%',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex:30,
        }}>
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '5px',
                minWidth: '300px',
                textAlign: 'center'
            }}>
                <p>{message}</p>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    );
};

export default Modal;