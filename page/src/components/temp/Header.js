// import '../../resource/css/HeaderCSS.css';

function Header() {


    return (

        <div style={{width : '100%', height : 100, color: 'white', position : 'fixed', top : 10, left : 0}}>

            <div style={{float: 'left'}}>
                <img src="././img/CI.png" alt="CI" style={{float: 'left'}}/>
                <div style={{float: 'left', paddingTop: 10}}>
                    <span style={{fontSize: 40, paddingLeft: 21}}>Pro</span>
                    <span style={{fontSize: 40, fontWeight: "bold"}}>Gist</span>
                </div>
            </div>


            <div style={{float: 'right', paddingTop: 29}}>
                <span style={{paddingLeft: 75}}>Home.</span>
                <span style={{paddingLeft: 75}}>About Us.</span>
                <span style={{paddingLeft: 75}}>Progress.</span>
                <span style={{paddingLeft: 75}}>Recruit.</span>
                <span style={{paddingLeft: 75}}>Contact.</span>
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
        //             <img src="././img/CI.png" alt="CI" />
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