import {Link} from "react-router-dom";
import {menuList} from "../../assets/contents/MenuList";
import CI from '../../assets/images/CI.png';
import CI_text from '../../assets/images/CI_text.png';
import foldedMenu from "../../assets/images/folded_menu.png"
import ToTopButton from '../../assets/images/header_to_top_button.png';
import {useEffect, useState} from "react";

function Header_m() {

    const mobile = false;

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isMinMenuOpen, setIsMinMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsMenuOpen(true);
        setIsMinMenuOpen(false);
    }
    const handleMouseLeave = () => {
        setIsMenuOpen(false);
        setIsMinMenuOpen(true);
    }

    // let lastScrollY = window.scrollY;

    const handleScroll = () => {
        if (window.scrollY <= 10) {
            // 스크롤이 창의 최상단일 때 펼치기
            setIsMenuOpen(true);
            setIsMinMenuOpen(false);
        } else {
            // 그 외 스크롤 위치일 때 접기
            setIsMenuOpen(false);
            setIsMinMenuOpen(true);
        }
        // lastScrollY = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function clickToTopButton(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 스크롤을 부드럽게 이동하게 합니다. ('auto'로 설정하면 즉시 이동)
        });
    }

    return (
        <div style={{width: '100%', minWidth:350, height: 'auto',  position:'fixed', zIndex:5}}>

            <div style={{width: mobile? '100%':'1920px', height: 'auto',  margin:'0 auto',
            display:mobile?'flex':'', justifyContent:mobile?'space-between':'', padding:mobile?'40px 24px 0 24px':'', boxSizing:'border-box'}}>
                    <div style={{display:'flex', gap:mobile?8:13, margin:mobile?'':'50px 0 0 90px'}}>
                        <img src={CI} style={{width: mobile?20:32, height:mobile?20:''}} alt="CI" id="ci"/>
                        <img src={CI_text} style={{width: mobile?67:107, objectFit:'contain'}} alt="CI" id="ci_text"/>
                    </div>

                {mobile?
                    <img src={foldedMenu} alt='menu'/>
                    : <div style={{width:'100%', fontSize:22, color: 'white', display:'flex', gap:80, position: 'absolute', top:52, transform:'translateX(28%)' }}>
                        {menuList.map((v,i)=>{
                        return(
                            <div key={i} style={{cursor:'pointer'}}>
                                {v.title}
                            </div>
                        )})}
                    </div>}

                </div>
        </div>

    )
}

export default Header_m;