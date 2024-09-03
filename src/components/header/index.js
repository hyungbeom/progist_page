import {Link} from "react-router-dom";
import {menuList} from "../../assets/contents/MenuList";
import CI from '../../assets/images/CI.png';
import CI_text from '../../assets/images/CI_text.png';

function Header() {

    return (
        <div className='header_layout'>
            <div className='header_container'>
                <div className='ci_container'>
                    <img src={CI} alt="CI" id="ci"/>
                    <img src={CI_text} alt="CI" id="ci_text"/>
                </div>
                <div className='menu_container'>
                    {menuList.map((v) => {
                        return(
                            <Link to={v.link} key={v.title} className='menu_item'>
                            {v.title}
                            </Link>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header;