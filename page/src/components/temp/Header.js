function Header() {

    const menuList = [
        {title: 'Home.', link: '/'},
        {title: 'About Us.', link: '/'},
        {title: 'Progress.', link: '/'},
        {title: 'Recruit.', link: '/'},
        {title: 'Contact.', link: '/'}
    ]


    return (
        <div style={{
            // backgroundColor:'gray',
            padding: '1.5% 3% 1.5% 3%',
            width: '94%',
            height: 'auto',
            color: 'white',
            position: 'fixed', top: 0, zIndex : 20}}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'space-between',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <img src="././img/CI.png" alt="CI" style={{float: 'left', width: '3.5vw'}}/>
                    <div style={{float: 'left'}}>
                        <span style={{fontSize: '2vw', fontWeight: 400, marginLeft: '15%'}}>Pro</span>
                        <span style={{fontSize: '2vw', fontWeight: 600}}>Gist</span>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    fontSize: '0.9vw'
                }}>
                    {menuList.map((v) => {
                        return <span style={{paddingLeft: '5vw'}}>{v.title}</span>
                    })}

                    <span style={{
                        marginLeft: '5vw',
                        backgroundColor: '#C17F00',
                        padding: 14,
                        color: 'white'
                    }}>Get in touch</span>
                </div>
            </div>

        </div>

    )
}

export default Header;