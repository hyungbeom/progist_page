import {Link} from "react-router-dom";
import {menuList} from "../../resource/contents/MenuList";
import {useState} from "react";
import GetInTouch from "../getInTouch/GetInTouch";

function Header() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    }

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    }


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
                    fontSize: '0.9vw',
                }}>
                    {menuList.map((v) => {
                        return(
                            <Link to={v.link}
                            style={{
                                textDecoration: 'none',
                                cursor:'pointer',
                                color:'inherit', // 링크 연결 후에도 color를 유지함
                                whiteSpace: 'nowrap',
                            }}>
                            <span
                            key={v.title}
                            style={{paddingLeft: '5vw'}}
                            >
                            {v.title}
                            </span>
                            </Link>)
                    })}

                    <span style={{
                        marginLeft: '5vw',
                        width:'5.4vw',
                        backgroundColor: '#C17F00',
                        padding: '1.8%',
                        color: 'white',
                        cursor:'pointer',
                        whiteSpace: 'nowrap',
                        textAlign:'center'
                    }} onClick={handleOpenPopup}
                    >Get in touch</span>
                </div>
            </div>

            {isPopupOpen && <GetInTouch onClose={handleClosePopup} />}

        </div>

    )
}

export default Header;