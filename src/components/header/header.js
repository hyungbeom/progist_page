import {menuList} from "../../assets/contents/MenuList";
import CI from '../../assets/images/CI.png';
import CI_text from '../../assets/images/CI_text.png';
import {useEffect, useState} from "react";
import {colorList} from "../../assets/utils/colorList";

function Header({refs}) {

    const [colorChange, setColorChange] = useState(false)
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }

        if (currentScrollY > 1250) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }

        setLastScrollY(currentScrollY);
    };


    const handleScrollTo = (section) => {
        if (refs && refs.current[section]) {
            if(section==='whoWeAre'){
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                refs.current[section].scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }

        console.log(refs.current, 'refs.current')
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);


    return (
        <div style={{top:0, width: '100vw', height: 'auto',  position:'fixed', zIndex:5, transform: showHeader ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.3s ease-in-out',}}>
            {colorChange && <div style={{backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', width: '100%', height:'100%',  position:'absolute', top:0}}/>}
            <div style={{width: '100%', maxWidth:'1920px',minWidth: '1600px', height: 'auto',  margin:'0 auto', zIndex:10}}>
                <div onClick={()=>handleScrollTo('whoWeAre')} style={{cursor:'pointer', display:'flex', gap:'0.6vw', margin:'30px 0 30px 4.68vw',}}>
                    <img src={CI} style={{width: '1.66vw', objectFit:'contain', zIndex:10}} alt="CI" id="ci"/>
                    <img src={CI_text} style={{width:'5.57vw', objectFit:'contain', zIndex:10}} alt="CI" id="ci_text"/>
                </div>

                <div style={{fontSize:'1.04vw', color: colorChange? colorList['navy']:'white', display:'flex', gap:'4.16vw', position: 'absolute', top:33, transform:'translateX(55%)' }}>
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