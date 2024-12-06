import './css/body.css';
import {Route, Routes} from "react-router-dom";

import Landing from "./views/Landing";
import Landing_m from "./views/Landing_m";
import {useEffect, useState} from "react";

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)"); // 모바일 기준 너비 설정
        setIsMobile(mediaQuery.matches);

        const handleMediaChange = (e) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener("change", handleMediaChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaChange);
        };
    }, []);

    return (
        <>
            {isMobile ? <Landing_m /> : <Landing />}
        </>
    );
}

export default App;
