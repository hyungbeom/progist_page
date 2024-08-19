import React from 'react';

const HomeContentsLayout = ({first, second, third, style}) => {
    return (
        <div style={{
            // backgroundColor: 'gray',
            display: 'grid',
            gridTemplateColumns: 'repeat(16,1fr)',
            gap: '1%',
            // position: "relative",
            width: '93%',
            padding: "0 3.5% 0 3.5%",
            aspectRatio: '16 / 9',
            whiteSpace:'pre-line',
            ...style
        }}>
            <div style={{
                gridColumn:'1 / span 3',  // 시작열 / span 차지하는 열 개수
            }}>
                {first}

            </div>
            <div style={{
                gridColumn:'4 / span 7',
            }}>
                {second}

            </div>
            <div style={{
                gridColumn:'11 / span 6',
            }}>
                {third}

            </div>

        </div>
    );
};

export default HomeContentsLayout;