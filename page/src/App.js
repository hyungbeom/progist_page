import './resource/css/body.css';
import {Route, Routes} from "react-router-dom";

import Home from "./page/Home";
import AboutUs from "./page/AboutUs";
import Progress from "./page/Progress";
import Recruit from "./page/Recruit";
import Contact from "./page/Contact";

function App() {
    return (

        <Routes>
            <Route path='/' element={<Home />}/>
            {/*<Route index element={<Home />}/>*/}
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/progress' element={<Progress/>}/>
            <Route path='/recruit' element={<Recruit/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>

    );
}

export default App;
