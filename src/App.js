import './css/body.css';
import {Route, Routes} from "react-router-dom";

import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Services from "./views/Services";
import Contact from "./views/Contact";

function App() {
    return (

        <Routes>
            {/*<Route index element={<Home />}/>*/}
            <Route path='/' element={<Home />}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>

    );
}

export default App;
