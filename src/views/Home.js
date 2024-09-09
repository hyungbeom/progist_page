import Home1 from "../components/home/index1";
// import Home2 from "../components/home/index2";
import Home3 from "../components/home/index3";
import Home4 from "../components/home/index4";
import ScrollToTop from "../components/tools/ScrollToTop";


const Home = () => {
    return (
        <>
            <ScrollToTop/>
            <Home1/>
            {/*<Home2/>*/}
            <Home3/>
            <Home4/>

        </>
    );
};

export default Home;