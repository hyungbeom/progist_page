import IntroPage from "./components/home/IntroPage";
import LandingPage from "./components/home/LandingPage";
import Header from "./components/temp/Header";
import AboutUs from "./components/aboutUs/AboutUs";
import HomeScrollPage1 from "./components/home/HomeScrollPage1";
import HomeScrollPage2 from "./components/home/HomeScrollPage2";
import './resource/css/body.css';
import AboutUsScrollPage from "./components/aboutUs/AboutUsScrollPage";
import Footer from "./components/temp/Footer";

function App() {
    return (
        <div>

            <Header/>
            <HomeScrollPage1/>
            <HomeScrollPage2/>
            <AboutUs/>
            <AboutUsScrollPage/>
            <Footer/>

        </div>
    );
}

export default App;



