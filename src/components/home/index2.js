import React from 'react';
import {Home2Images} from "../../assets/contents/HomeContents";

const Home2 = () => {
    return (
        <div className="center_page_layout">

            <div className='home2_title'>
                {'우리는 '}
                <span>{'Progist '}</span>
                <span className='home2_title_photo'>
                {Home2Images ?
                    <img src={Home2Images[0].src} alt={Home2Images[0].alt}/> : null}
                </span>
                {' 입니다.'}
            </div>
            <div className='home2_photo_container'>
                {Home2Images ?<>
                <img src={Home2Images[1].src} alt={Home2Images[1].alt}/>
                <img src={Home2Images[2].src} alt={Home2Images[2].alt}/></> : null}
            </div>

        </div>

    )
        ;
};

export default Home2;