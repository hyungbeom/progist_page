import React from 'react';
import {Services2text, Services2Title1, Services2Title2} from "../../assets/contents/ServicesContents";
import ServiceImage1 from '../../assets/images/services_1.png';

const Services2 = () => {
    return (
        <div className='grid_page_layout'>

            <div className='subtitle_area' style={{gridColumn : '1 / span 9', width: '100%'}}>
                <div className='subtitle bold'>
                    Services.
                </div>
                <div className='title' style={{textAlign: 'left', marginTop:'35%'}}>
                    <span className='bold'>{Services2Title1}</span>가
                </div>
                <div style={{ fontWeight: 500, fontSize: '2.5vw' }}>
                    {Services2Title2}
                </div>
                <div className='text' style={{marginTop:'10%'}}>
                    {Services2text}
                </div>
            </div>

            <div style={{gridColumn : '11 / span 5', width: '100%'}}>
                <img src={ServiceImage1} alt='services image' style={{width: '100%', borderRadius:'5%', marginTop:'20%'}} />
            </div>


        </div>
    );
};

export default Services2;