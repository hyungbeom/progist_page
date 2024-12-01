import {menuList} from "../../assets/contents/MenuList";
import CI from '../../assets/images/CI.png';
import CI_text from '../../assets/images/CI_text.png';
import foldedMenuGray from "../../assets/images/folded_menu_gray.png"
import foldedMenu from "../../assets/images/folded_menu.png"
import {useEffect, useState} from "react";

function Header_m({refs}) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [colorChange, setColorChange] = useState(false)

    // useEffect(() => {
    //
    //     const handleScroll = () => {
    //         if (refs?.current?.services && window.scrollY > refs.current.services.offsetTop) {
    //             setColorChange(true)
    //         } else {
    //             setColorChange(false)
    //         }
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [refs]);


    const handleScrollTo = (section) => {
        if (refs.current[section]) {
            refs.current[section].scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };


    const handleMenuOpen = () => {
        setIsMenuOpen(true)
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);


    function clickToTopButton(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 스크롤을 부드럽게 이동하게 합니다. ('auto'로 설정하면 즉시 이동)
        });
    }

    return (
        <div style={{width: '100%', minWidth:350, height: 'auto',  position:'fixed', zIndex:5}}>
            <div style={{width: '100%', height: 'auto', display:'flex', padding:'40px 24px 0 24px',
            alignItems:'flex-start', justifyContent:'space-between', boxSizing:'border-box'}}>
                <div style={{display:'flex', gap:8, alignItems:'center'}}>
                    <img src={CI} style={{width:20, height:20}} alt="CI" id="ci"/>
                    <img src={CI_text} style={{width: 67, objectFit:'contain'}} alt="CI" id="ci_text"/>
                </div>

                <div style={{
                    maxHeight: isMenuOpen? '300px':0,
                    opacity: isMenuOpen? 1:0,
                    position: 'absolute',
                    right:24,
                    fontSize: 15,
                    color: 'white',
                    display: 'flex',
                    flexDirection:'column',
                    gap: 15,
                    textAlign:'right',
                    transition: 'max-height 0.5s ease, opacity 0.5s ease'
                }}>
                    {menuList.map((v, i) => {
                        return (
                            <div key={i} style={{cursor: 'pointer'}} onClick={()=>handleScrollTo(v.key)}>
                                {v.title}
                            </div>
                        )})}
                </div>
                {!isMenuOpen && <img style={{zIndex:2}} src={colorChange?foldedMenuGray:foldedMenu} alt='menu' onClick={handleMenuOpen}/>}

            </div>
        </div>

    )
}

export default Header_m;