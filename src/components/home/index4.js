import React from 'react';
import {Home5Title} from "../../assets/contents/HomeContents";
import {Link} from "react-router-dom";
import {menuList} from "../../assets/contents/MenuList";
import {PartnerList} from "../../assets/contents/PartnerList";

const Home4 = () => {

    return (
        <div className="layout flex center">
            <div className="container flex center" style={{marginBottom:'5%'}}>
                <div style={{
                    width: '100%',
                    whiteSpace: 'pre-line',
                    fontSize: '2.8vw',
                    textAlign: 'center',
                    marginBottom:'5%',
                }}>{Home5Title}
                </div>
                <a href={menuList[menuList.length - 1].link} key={menuList[menuList.length - 1].title}
                      className='contact_us_button'>
                    문의하기
                </a>
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
            <div className='partner_wrapper'>
                <div className='partner_container origin'  id='reverse'>
                    {PartnerList.map((partner, index) => (
                        <div className='partner'>
                            <img key={index} src={partner} alt='partner image'/>
                        </div>
                    ))}
                </div>
                <div className='partner_container clone'  id='reverse'>
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

export default Home4;