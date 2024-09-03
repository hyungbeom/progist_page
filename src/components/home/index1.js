import React from 'react';
import {Home1Images, Home1Subtitle1, Home1Subtitle2, Home1Title} from "../../assets/contents/HomeContents";

const Home1 = () => {
    return (
        <div className="page_layout">

            <div className='title_container'>
                <div className='main_title'>
                    {Home1Title}
                </div>
                <div className='subtitle'>
                    {Home1Subtitle1}
                    <span>{Home1Subtitle2}</span>
                </div>
            </div>
            <div className='photo_container'>
                {Home1Images? Home1Images.map((image, index) => (
                    <div className='photo_item' key={index}>
                        <img src={image.src} alt={image.alt}/>
                    </div>
                )):null}
            </div>

        </div>

    )
        ;
};

export default Home1;