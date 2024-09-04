import {Link} from "react-router-dom";
import {menuList} from "../../assets/contents/MenuList";
import CI from '../../assets/images/CI.png';
import CI_text from '../../assets/images/CI_text.png';
import ToTopButton from '../../assets/images/header_to_top_button.png';
import {useEffect, useState} from "react";

function Header() {

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
    }

    return (
        <div className='header_layout'>
            <div className='header_container'>
                <div className='ci_container'>
                    <img src={CI} alt="CI" id="ci"/>
                    <img src={CI_text} alt="CI" id="ci_text"/>
                </div>
                <div className='menu_container'>
                    {menuList.map((v) => {
                        return (
                            <Link to={v.link} key={v.title}
                                  className={`menu_item ${isMenuOpen ? 'open' : 'close'}`}>
                                {v.title}
                            </Link>)
                    })}
                    <div className={`menu_minimalized ${isMinMenuOpen ? 'open' : 'close'}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                        <div className='menu_minimalized_icon'/>
                        <div className='menu_minimalized_icon'/>
                        <div className='menu_minimalized_icon'/>
                    </div>
                    <Link to={menuList[menuList.length - 1].link} key={menuList[menuList.length - 1].title}
                          className='menu_item'>
                        {menuList[menuList.length - 1].title}
                    </Link>)

                </div>
            </div>

            <div className='to_top_button'
                 onClick={clickToTopButton}>
                <img src={ToTopButton} alt="To Top Button"/>
            </div>
        </div>
    )
}

export default Header;