import React, {useRef} from 'react';

const Landing = () => {

    const ref=useRef()


    return (
        <div style={{width:'100%', height:'auto',}}>


            <div ref={ref} style={{width:'1920px', height:'1080px', margin:'0 auto', backgroundColor:'darkorange'}}>

                <div style={{width:'100%'}} >
                    <span>Turn your Vision into Reality</span><br/>당신의 비전을 현실로, <span style={{width:'100%'}}>PROGIST</span>
                </div>

            </div>
        </div>
    );
};

export default Landing;