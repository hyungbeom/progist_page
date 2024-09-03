import React from 'react';
import GridContentsLayout from "../layouts/GridContentsLayout";
import {LandingpageSubtitle1, LandingpageSubtitle2, LandingpageTitle} from "../../assets/contents/HomeContents";

const Home1 = () => {
    return (
        <GridContentsLayout
            style={{
                backgroundColor:'gray',
                aspectRatio:'1.57 / 1',
                padding:'0',
                width:'100%',
                position:'relative',
            }}

            div1='1' span1='16' div2='0' span2='0' div3='0' span3='0'

            first_contents={
                <div className='contents_container'>
                    <div className='main_title'>
                        {LandingpageTitle}
                    </div>
                    <div className='subtitle'>
                        <div>
                            {LandingpageSubtitle1}
                        </div>
                        <div className='signature'>
                            {LandingpageSubtitle2}
                        </div>
                    </div>
                </div>

            }

        />
    );
};

export default Home1;