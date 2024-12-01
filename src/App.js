import './css/body.css';
import {Route, Routes} from "react-router-dom";

import Landing from "./views/Landing";
import Landing_m from "./views/Landing_m";

function App() {
    return (
        // <Landing/>
        <Landing_m/>
        //
        // <Routes>
        //     {/*<Route index element={<Home />}/>*/}
        //     <Route path='/' element={<Home />}/>
        //     <Route path='/aboutus' element={<AboutUs/>}/>
        //     <Route path='/services' element={<Services/>}/>
        //     <Route path='/contact' element={<Contact/>}/>
        // </Routes>

    );
}

export default App;
