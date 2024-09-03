import React from 'react';
import {Home4Subtitle} from "../../assets/contents/HomeContents";
import CI_text from "../../assets/images/CI_text.png";

const Home4 = () => {
    return (
        <div className="center_page_layout">
            <div className="home4_title_container">
                <img src={CI_text} alt="CI"/>
                <div className='home4_subtitle'>
                    {Home4Subtitle}
                </div>

            </div>

        </div>

    )
        ;
};

export default Home4;