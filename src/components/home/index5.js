import React from 'react';
import {Home1Images, Home1Subtitle1, Home1Subtitle2, Home1Title} from "../../assets/contents/HomeContents";
import backgroundImage from "../../assets/images/home_1_4.jpg";

const Home1 = () => {

    const backgroundStyle={
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",  // 이미지 크기를 화면에 맞춤
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // 이미지 반복 방지
        height: "100%",
        animation: "zoomBackground 10s infinite", // 애니메이션 적용
    };

    return (
        <div className="layout flex" style={backgroundStyle}>
                <div className='title_container'>
                    <div className='slogan'>
                        {Home1Title}
                    </div>
                    <div className='subtitle' id='home_subtitle'>
                        {Home1Subtitle1}
                        <span className='signature'>{Home1Subtitle2}</span>
                    </div>
                </div>
                <div className='photo_container_wrapper'>
                    <div className='photo_container'>
                        {Home1Images ? Home1Images.map((image, index) => (
                            <div className='photo_item' key={index}>
                                <img src={image.src} alt={image.alt}/>
                            </div>
                        )) : null}
                    </div>
                </div>

            </div>

            )
            ;
            };

            export default Home1;