import React from 'react';

const Div3ContentsLayout = ({div1, span1, div2, span2, div3, span3, first, second, third, style}) => {
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
                gridColumn:`${div1} / span ${span1}`,  // 시작열 / span 차지하는 열 개수
            }}>
                {first}

            </div>
            <div style={{
                gridColumn:`${div2} / span ${span2}`,
            }}>
                {second}

            </div>
            <div style={{
                gridColumn:`${div3} / span ${span3}`,
            }}>
                {third}

            </div>

        </div>
    );
};

export default Div3ContentsLayout;