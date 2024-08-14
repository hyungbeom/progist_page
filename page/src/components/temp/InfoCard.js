function InfoCard({img='', title ='', subTitle ='', width='600px'}){



    console.log(img,'info:')

    return (
        <div style={{width: width, alignItems: "flex-start",  display: "flex",
            flexDirection: "column", gap:"33px"}}>
            <div> <img src={img} alt={title} style={{ width: '100%' }} /></div>
            <div style={{fontSize: '31px'}}>{title}</div>
            <div style={{fontSize: '20px'}}>{subTitle}</div>
        </div>
    )

}

export default InfoCard;