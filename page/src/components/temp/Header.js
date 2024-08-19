

function Header() {

    const menuList = [
        {title: 'Home.', link: '/'},
        {title: 'About Us.', link: '/'},
        {title: 'Progress.', link: '/'},
        {title: 'Recruit.', link: '/'},
        {title: 'Contact.', link: '/'}
    ]


    return (
        <div style={{width: '100%', height: 100, color: 'white', position: 'fixed', top: 0}}>

            <div style={{float: 'left', padding: '30px 30px'}}>
                <img src="././img/CI.png" alt="CI" style={{float: 'left'}}/>
                <div style={{float: 'left', paddingTop: 10}}>
                    <span style={{fontSize: 40, paddingLeft: 21}}>Pro</span>
                    <span style={{fontSize: 40, fontWeight: "bold"}}>Gist</span>
                </div>
            </div>


            <div style={{float: 'right', padding: '50px 30px 0px 0px'}}>

                {menuList.map((v)=>{
                    return <span style={{paddingLeft: 75}}>{v.title}</span>
                })}

                <span style={{
                    marginLeft: 85,
                    backgroundColor: '#C17F00',
                    padding: 14,
                    color: 'white'
                }}>Get in touch</span>
            </div>
        </div>
        // <div className="header-container" style={{display: 'flex', justifyContent: 'space-between', alignItems:'center',
        //     width:"95%", paddingTop: 14, paddingBottom:14, paddingRight:35, paddingLeft:35, backgroundColor:"grey"}}>
        //     <div className="CI" style={{display: 'flex', justifyContent: 'flex-start', alignItems:'center'}}>
        //         <div style={{marginRight:10}}>
        //             <fonts src="././fonts/CI.png" alt="CI" />
        //         </div>
        //         <div style={{fontSize:'50px', marginBottom:"7px"}}>Pro</div>
        //         <div style={{fontSize:'50px', marginBottom:"7px", fontWeight:"bold"}}>Gist</div>
        //     </div>
        //     <div className="menu" style={{display: 'flex', justifyContent: 'flex-end', alignItems:'flex-end', gap:"10%", }}>
        //         <div className="menu-item">Home.</div>
        //         <div className="menu-item">About Us.</div>
        //         <div className="menu-item">Progress.</div>
        //         <div className="menu-item">Recruit</div>
        //         <div className="menu-item">Contact</div>
        //         <div className="menu-item">
        //             <button>Get in touch</button></div>
        //     </div>
        // </div>
    )
}

export default Header;