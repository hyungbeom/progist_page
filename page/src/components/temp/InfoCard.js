function InfoCard({img='', title ='', subtitle ='', link='',
                      width='auto', imgWidth='100%', style}){


    return (
        <div style={{alignItems: "flex-start",  display: "flex", flexDirection: "column",
            whiteSpace: 'pre-line',
             gap:"1vw", width:width, ...style}}>

            <img src={img} alt={title} style={{width:imgWidth}} />
            {/* 이미지 사이즈에 전체 사이즈를 맞춤*/}
            <div style={{
                fontSize: '1.5vw',
            }}>{title}</div>
            <div style={{
                fontSize: '1vw',
                lineHeight: '1.5',
            }}>{subtitle}</div>
            <div style={{
                fontSize: '1vw',
                color:'#ff471d'
            }}>{link}</div>


        </div>
    )

}

export default InfoCard;