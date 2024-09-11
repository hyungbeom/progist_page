import React, {useEffect, useState} from 'react';
import {MemberList} from "../../assets/contents/AboutUsContents";

const AboutUs2 = () => {

    const [currentIndex, setCurrentIndex] = useState(6);
        console.log(currentIndex);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleMouseEnter = (e) => {
        setCurrentIndex(e.target.accessKey);
        setIsTransitioning(true)
    }
    const handleMouseLeave = () => {
        setIsTransitioning(false)
    }

    useEffect(() => {
        setIsTransitioning(false)
    }, [currentIndex]);

    function MemberCard(){

        return(
            <div className="member_card_container">

                <div className="member_card">
                    {MemberList.map((member, index)=>{
                        return(
                            <>
                                <div className='member'>
                                    <div key={index} accessKey={index} className="name"
                                         onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{member.name}</div>
                                    <div key={index} accessKey={index} className="position"
                                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{member.position}</div>
                                </div>
                                    <div className='underline'/>
                            </>
                        )})}
                </div>
            </div>
    )
    }

    return (
        <div className='grid_page_layout'>

            <div className='member_photo_area'>
                <div className='subtitle bold'>
                    About Us.
                </div>
                <div className='mamber_photo_container'>
                    <img className={`member_photo ${isTransitioning ? 'photo_transition' : ''}`}
                         src={MemberList[currentIndex].photo} alt='photo'/>
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