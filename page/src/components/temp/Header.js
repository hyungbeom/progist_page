import '../../resource/css/HeaderCSS.css';

function Header() {


    return (

        <div style={{alignItems:'center', display:"flex", flexDirection:"row",
            position:'fixed', zIndex:100, height : 100, width:'auto', maxWidth:'1980px', flexWrap:'nowrap'}}>

            <div style={{
                // color: 'white',
                alignItems:'center', justifyContent:'flex-start', display:"flex", flexDirection:"row",}}>
                <img src="././img/CI.png" alt="CI"/>
                <div>
                    <span style={{fontSize: 40, marginLeft: 18}}>Pro</span>
                    <span style={{fontSize: 40, fontWeight: "700"}}>Gist</span>
                </div>
            </div>


            <div style={{
                // color: 'white',
                alignItems:'center', justifyContent:'flex-end', display:"flex", flexDirection:"row",
                gap:'20%', whiteSpace:'nowrap', position:"fixed", right:'5%'}}>
                <span>Home.</span>
                <span>About Us.</span>
                <span>Progress.</span>
                <span>Recruit.</span>
                <span>Contact.</span>
                <span style={{
                    marginLeft: 5,
                    backgroundColor: '#C17F00',
                    padding: 14,
                }}>Get in touch</span>
            </div>
        </div>

    )
}

export default Header;