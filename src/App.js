import './css/body.css';
import {Route, Routes} from "react-router-dom";

import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Progress from "./views/Progress";

function App() {
    return (

        <Routes>
            {/*<Route index element={<Home />}/>*/}
            <Route path='/' element={<Home />}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/service' element={<Progress/>}/>
        </Routes>

    );
}

export default App;
