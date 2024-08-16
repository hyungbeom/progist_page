import {useEffect} from "react";

export default function ContentLayout({children, width = '100vw', color = 'white'}) {


    const fixPadding = 25




    return (
        <div style={{width: width, backgroundColor: color,  height: 1080}}>
            <div style={{padding : fixPadding}}>
            {children}
            </div>
        </div>
    )


}