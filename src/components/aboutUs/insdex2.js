import React from 'react';
import {AboutUsText1} from "../../assets/contents/AboutUsContents";
import AboutUs_image_1 from "../../assets/images/aboutUs_1.png"
import AboutUs_image_2 from "../../assets/images/aboutUs_2.png"

const AboutUs2 = () => {

    function Square({style}){
        return(
            <div style={{
                backgroundColor: '#EAEEF0',
                width: '100%',
                height: 'auto',
                aspectRatio:'1/1',
                borderRadius: '5%',
                    ...style
            }}>
            </div>
        )
    }
    function SquarePhoto({src, alt, style}){
        return(
            <img style={{
                width: '105%',
                height: 'auto',
                aspectRatio:'1/1',
                borderRadius: '5%',
                overflow: 'hidden',
                ...style
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
                <SquarePhoto src={AboutUs_image_2} alt='AboutUs_image_2'
                             style={{transform: 'translateX(-30%)'}}/>
                <Square style={{
                    width:'50%',
                    marginTop: '180%',
                    marginLeft: '0%',
                }}/>
            </div>
            <div style={{
                gridColumn: '12 / span 4',
                marginTop: '45%',
            }}>
                <SquarePhoto src={AboutUs_image_1} alt='AboutUs_image_1'/>
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

export default AboutUs2;