import React, {useEffect, useState} from 'react';
import Div3ContentsLayout from "../layouts/Div3ContentsLayout";
import {getProgressContent} from "../../resource/contents/ProgressContent";

const Progress1 = () => {

    const [content, setContent] = useState({});

    useEffect(() => {
        const data = getProgressContent()
        setContent(data)
    })

    return (
       <Div3ContentsLayout
           div1='2' span1='7' div2='13' span2='4'
           style={{
               aspectRatio:'3/1',
               paddingTop:'10%',
           }}
           first={
               <div style={{
                   position:'relative',
               }}>
                   <div className='head' style={{
                       position:'absolute',
                       top:'40%',
                   }}>Progress</div>
                       {content.progressTitle1?(
                           <div className='title' style={{
                               fontSize: '5.5vw',
                               position: 'absolute',
                               bottom: '10%',
                           }}>
                               {content.progressTitle1}
                           </div>
                       ) : null}
               </div>
           }
           second={
               <div style={{
                   position:'relative',
               }}>
                   {content.progressSubtitle1 ? (
                       <div style={{
                           position:'absolute',
                       }}>
                           {content.progressSubtitle1}
                       </div>
                   ):null}
               </div>
           }


/>
)
    ;
};

export default Progress1;