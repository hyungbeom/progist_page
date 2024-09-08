import Home1 from "../components/home/index1";
import Home2 from "../components/home/index2";
import Home3 from "../components/home/index3";
import Home5 from "../components/home/index5";
import ScrollToTop from "../components/tools/ScrollToTop";


const Home = () => {
    return (
        <>
            <ScrollToTop/>
            <Home1/>
            <Home2/>
            <Home3/>
            {/*<Home4/>*/}
            <Home5/>

        </>
    );
};

export default Home;