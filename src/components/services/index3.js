import React from 'react';
import {ServicesTechContents} from "../../assets/contents/ServicesContents";
import ServicePrograms from '../../assets/images/servics_programs_image.png';

const Services3 = () => {

    function StackCard({title, content}){
        return(
            <div className='stack_card'>
                <div className='stack_card_title signature'>{title}</div>
                <div className='stack_card_contents'>{content}</div>
            </div>
        )
    }

    return (
        <div className='layout flex lightgray'>
            <div className='subtitle bold subtitle_in_contents'>
                Services.>Tech Stack
            </div>
            <div className='tech_image_container wrapper'>
                <img src={ServicePrograms} alt='using programs' className='tech_image origin'/>
                <img src={ServicePrograms} alt='using programs' className='tech_image clone'/>
            </div>
            <div className='stack_card_container grid'>
                <div style={{gridColumn: '2 / span 4', width: '100%'}}>
                    <StackCard title={ServicesTechContents[0].title} content={ServicesTechContents[0].content}/>
                </div>
                <div style={{gridColumn: '7 / span 4', width: '100%'}}>
                    <StackCard title={ServicesTechContents[1].title} content={ServicesTechContents[1].content}/>
                </div>
                <div style={{gridColumn: '12 / span 4', width: '100%'}}>
                    <StackCard title={ServicesTechContents[2].title} content={ServicesTechContents[2].content}/>
                </div>
            </div>
        </div>
    );
};

export default Services3;