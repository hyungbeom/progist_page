import './resource/css/body.css';
import IntroPage from "./components/home/IntroPage";
import Header from "./components/temp/Header";
import Footer from "./components/temp/Footer";
import HomeContent1 from "./components/home/HomeContent1";
import HomeContent2 from "./components/home/HomeContent2";
import HomeContentPage3 from "./components/home/HomeContentPage3";
import HomesContentPage4 from "./components/home/HomesContentPage4";
import HomeContentsPage1 from "./components/home/HomeContentsPage1";
import HomeContentsPage2 from "./components/home/HomeContentsPage2";

function App() {
    return (<>
            {/*<Header/>*/}
            {/*<IntroPage/>*/}
            {/*<HomeContent1/>*/}
            {/*<HomeContent2/>*/}

            <HomeContentsPage1/>
            <HomeContentsPage2/>
            <HomeContentPage3/>
            <HomesContentPage4/>


            {/*<Footer/>*/}
        </>
    );
}

export default App;
