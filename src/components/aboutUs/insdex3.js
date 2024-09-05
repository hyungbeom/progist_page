import React, {useEffect, useState} from 'react';
import {MemberList} from "../../assets/contents/AboutUsContents";

const AboutUs2 = () => {

    const [currentIndex, setCurrentIndex] = useState(6);
        console.log(currentIndex);

    const handleMouseEnter = (e) => {
        // console.log(e.target.accessKey);
        setCurrentIndex(e.target.accessKey); // alt는 string이므로 숫자로 변환
    }

    const handleMouseLeave = () => {
    }

    function MemberCard(){

        return(
            <div className="member_card_container">

                <div className="member_card">
                    {MemberList.map((member, index)=>{
                        return(
                            <>
                                <div key={index} accessKey={index} className="member name"
                                     onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{member.name}</div>
                                <div className='underline'/>
                            </>
                        )})}
                </div>

                <div className="member_card">
                    {MemberList.map((member, index) => {
                        return (
                            <>
                            <div key={index} accessKey={index} className="member position"
                                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{member.position}</div>
                                <div className='underline'/>
                            </>
                        )})}
                </div>

            </div>
    )
    }

    return (
        <div className='grid_page_layout'>

            <div className='subtitle_area'>
                <div className='subtitle'>
                    About Us.
                </div>
                <div className='mamber_photo_container'>
                    {MemberList.map((member, index) => {
                        return (
                                <img key={index} accessKey={index} className="member_photo"
                                src={member.photo} alt='photo'
                                     id={currentIndex===index? 'active':null}/>
                        )})}
                </div>
            </div>

            <div style={{
                gridColumn: '9 / span 8',
            }}>
                <MemberCard/>
            </div>


        </div>
    );
};

export default AboutUs2;