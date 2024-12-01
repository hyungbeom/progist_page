import {menuList} from "../../assets/contents/MenuList";
import CI from '../../assets/images/CI.png';
import CI_text from '../../assets/images/CI_text.png';
import ToTopButton from '../../assets/images/header_to_top_button.png';
import {useEffect, useState} from "react";
import {colorList} from "../../assets/utils/colorList";

function Header({refs}) {

    const [colorChange, setColorChange] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 1250) {
            setColorChange(true)
        } else {
            setColorChange(false)
        }
    };

    const handleScrollTo = (section) => {
        if (refs.current[section]) {
            refs.current[section].scrollIntoView({ behavior: "smooth", block: "start" });
        }
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
        <div style={{top:0, width: '100%', height: 'auto',  position:'fixed', zIndex:5}}>

            <div style={{width: '1920px', height: 'auto',  margin:'0 auto',}}>
                <div style={{display:'flex', gap:13, margin:'50px 0 0 90px'}}>
                    <img src={CI} style={{width: 32}} alt="CI" id="ci"/>
                    <img src={CI_text} style={{width:107, objectFit:'contain'}} alt="CI" id="ci_text"/>
                </div>

                <div style={{fontSize:22, color: colorChange? colorList['navy']:'white', display:'flex', gap:80, position: 'absolute', top:52, transform:'translateX(50%)' }}>
                    {menuList.map((v,i)=>{
                        return(
                            <div key={i} style={{cursor:'pointer'}} onClick={()=>handleScrollTo(v.key)}>
                                {v.title}
                            </div>
                        )})}
                </div>

            </div>
        </div>

    )
}

export default Header;