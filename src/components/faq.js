import React, {useMemo} from "react";
import {faqList} from "../assets/contents/LandingContents";
import iconFold from "../assets/images/icon_fold.png";
import iconUnfold from "../assets/images/icon_unFold.png";
import {colorList} from "../assets/utils/colorList";

export default function Faq({func, selectId}) {

    const newNumb = useMemo(() => {
        return selectId
    }, [selectId])

    return (
<>
            {faqList.map((v, i)=>{
                return (
                    <div key={i} id={v.id} onClick={func} className={newNumb === v.id ? 'card-on' : 'card-off'} style={{
                        width: '43vw',
                        height: 'auto',
                        boxSizing: 'border-box',
                        borderRadius: '10px',
                        cursor: 'pointer',
                    }}>
                        <div id={v.id} onClick={func} style={{
                            fontWeight: 500,
                            fontSize: '1.25vw',
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingBottom: 30,
                            zIndex: 5
                        }}>{v.question}
                            <div style={{position: 'relative'}}>
                                {newNumb === v.id ?
                                    <img id={v.id} onClick={func} src={iconFold} alt='fold' style={{
                                        position: "absolute",
                                        width: '1.25vw',
                                        right: '2.3vw',
                                        top: 12
                                    }}/> :
                                    <img id={v.id} onClick={func} src={iconUnfold} alt='unfold'
                                         style={{position: "absolute", width: '1.25vw', right: '2.3vw'}}/>}</div>
                        </div>
                        <div className={newNumb === v.id ? 'card-open' : 'card-close'} style={{
                            lineHeight: 1.3,
                            height: 'auto',
                            fontSize: '0.93vw',
                            overflow: 'hidden',
                        }}>
                            {v.answer}
                        </div>
                    </div>
                )
            })}
</>
    );
}