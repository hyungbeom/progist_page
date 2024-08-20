import React from 'react';

const BasicLayout = ({children, style}) => {
    return (
        <div style={{
            backgroundColor: 'white',
            display: 'grid',
            gridTemplateColumns: 'repeat(16,1fr)',
            gap: '1%',
            width: '93%',
            padding: "0 3.5% 0 3.5%",
            aspectRatio: '16 / 6',
            whiteSpace:'pre-line',
            justifyContent: 'flex-start',
            alignItems: 'center',
            ...style
        }}>
            <div style={{
                gridColumn: '1 / span 16'
            }}>
                {children}
            </div>
        </div>
    );
};

export default BasicLayout;