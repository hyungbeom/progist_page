import React from 'react';

const GridContentsLayout = ({style, div1, span1, div2, span2, div3, span3,
                                first_contents, second_contents, third_contents, children}) => {
    return (
        <div className='layout_frame'
             style={{
                 display: 'grid',
                 gridTemplateColumns: 'repeat(16,1fr)',
                 gap: '1%',
                 width: '100%',
                 padding: "0 3.5% 0 3.5%",
                 boxSizing: 'border-box',
                 aspectRatio: '16 / 9',
                 whiteSpace:'pre-line',
                 ...style
        }}>
            <div className='first_grid' style={{
                gridColumn:`${div1} / span ${span1}`,  // 시작열 / span 차지하는 열 개수
            }}>
                {first_contents}

            </div>
            <div className='second_grid' style={{
                gridColumn:`${div2} / span ${span2}`,
            }}>
                {second_contents}

            </div>
            <div className='third_grid' style={{
                gridColumn:`${div3} / span ${span3}`,
            }}>
                {third_contents}
            </div>
            {children}
        </div>
    );
};

export default GridContentsLayout;