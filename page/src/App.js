import './resource/css/body.css';
import IntroPage from "./components/home/IntroPage";
import Header from "./components/temp/Header";
import Footer from "./components/temp/Footer";

import HomeContentPage3 from "./components/home/HomeContentPage3";
import HomesContentPage4 from "./components/home/HomesContentPage4";
import HomeContentsPage1 from "./components/home/HomeContentsPage1";
import HomeContentsPage2 from "./components/home/HomeContentsPage2";
import HomeContentPage5 from "./components/home/HomeContentPage5";
import FAQ from "./components/home/FAQ";

function App() {
    return (<>
            <Header/>
            {/*<IntroPage/>*/}
            {/*<HomeContent1/>*/}
            {/*<HomeContent2/>*/}

            <HomeContentsPage1/>
            <HomeContentsPage2/>
            <HomeContentPage3/>
            <HomesContentPage4/>
            <HomeContentPage5/>
            <FAQ/>

            {/*<Footer/>*/}
        </>
    );
}

export default App;
