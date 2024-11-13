import './css/body.css';
import {Route, Routes} from "react-router-dom";

import Landing from "./views/Landing";

function App() {
    return (
        <Landing/>

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
