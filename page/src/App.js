import './resource/css/body.css';
import IntroPage from "./components/home/IntroPage";
import Header from "./components/temp/Header";
import HomeScrollPage1 from "./components/home/HomeScrollPage1";
import HomeScrollPage2 from "./components/home/HomeScrollPage2";
import ContentLayout from "./components/temp/ContentLayout";

function App() {
    return (<>
            <Header/>
            <IntroPage/>

                <HomeScrollPage1/>


            {/*<HomeScrollPage2/>*/}



        </>
    );
}

export default App;



