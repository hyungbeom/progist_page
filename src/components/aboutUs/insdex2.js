import React from 'react';
import {AboutUsText1} from "../../assets/contents/AboutUsContents";
import AboutUs_image_1 from "../../assets/images/aboutUs_1.png"
import AboutUs_image_2 from "../../assets/images/aboutUs_2.png"

const AboutUs3 = () => {

    function Square({style}){
        return(
            <div style={{
                backgroundColor: '#EAEEF0',
                width: '100%',  // 그리드 셀에 맞도록 너비를 자동으로 조정
                height: 'auto',
                aspectRatio:'1/1',
                borderRadius: '5%',
                    ...style
            }}>
            </div>
        )
    }
    function SquarePhoto({src, alt}){
        return(
            <img style={{
                width: '105%',  // 그리드 셀에 맞도록 너비를 자동으로 조정
                height: 'auto',
                aspectRatio:'1/1',
                borderRadius: '5%',
            }}
                 src={src}
                 alt={alt}
                />
        )
    }

    return (
        <div className='grid_page_layout'>

            <div className='subtitle_area'>
                <div className='subtitle'>
                    About Us.
                </div>
                <div className='text' id='aboutus_text'>
                    {AboutUsText1}
                </div>
            </div>

            <div style={{
                gridColumn: '9 / span 1',
                marginTop: '200%',
            }}>
                <Square/>
            </div>
            <div style={{
                gridColumn: '10 / span 2',
            }}>
                <SquarePhoto src={AboutUs_image_2} alt={'AboutUs_image_2'}/>
                <Square style={{width:'50%',
                    marginTop: '180%',
                    marginLeft: '50%',
                }}/>
            </div>
            <div style={{
                gridColumn: '12 / span 4',
                marginTop: '45%',
            }}>
                <SquarePhoto src={AboutUs_image_1} alt={'AboutUs_image_1'}/>
            </div>
            <div style={{
                gridColumn: '16 / span 1',
                marginTop: '100%',
            }}>
                <Square/>
            </div>


        </div>
    );
};

export default AboutUs3;