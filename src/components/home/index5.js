import React from 'react';
import {Home5Subtitle, Home5Title} from "../../assets/contents/HomeContents";
import {Link} from "react-router-dom";
import {menuList} from "../../assets/contents/MenuList";
import {PartnerList} from "../../assets/contents/PartnerList";

const Home5 = () => {

    return (
        <div className="home5_page_layout">
            <div className="home5_title_container">
                <div className='home5_title'>{Home5Title}</div>
                <div className='home5_subtitle'>{Home5Subtitle}</div>
                <Link to={menuList[menuList.length - 1].link} key={menuList[menuList.length - 1].title}
                      className='contact_us_button'>
                    with Progist
                </Link>
            </div>
            <div className='partner_wrapper'>
                <div className='partner_container origin'>
                    {PartnerList.map((partner, index) => (
                        <div className='partner'>
                            <img key={index} src={partner} alt='partner image'/>
                        </div>
                    ))}
                </div>
                <div className='partner_container clone'>
                    {PartnerList.map((partner, index) => (
                        <div className='partner'>
                            <img key={index} src={partner} alt='partner image'/>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
        ;
};

export default Home5;