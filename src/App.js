import './css/body.css';
import {BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter} from "react-router-dom";

import Landing from "./views/Landing";
import Landing_m from "./views/Landing_m";
import {useEffect, useState} from "react";

function App() {
    useEffect(() => {
        const hostname = window.location.hostname;
        const isMobile = /m.localhost/.test(hostname); // 모바일 호스트 이름 확인
        const isDesktop = !isMobile;

        const mediaQuery = window.matchMedia("(max-width: 450px)"); // 모바일 화면 기준
        const isMobileDevice = mediaQuery.matches;

        if (isMobileDevice && isDesktop) {
            // 모바일 디바이스인데 PC 주소로 접속한 경우
            window.location.href = "http://m.localhost:3000";
        } else if (!isMobileDevice && isMobile) {
            // 데스크톱 디바이스인데 모바일 주소로 접속한 경우
            window.location.href = "http://localhost:3000";
        }
    }, []);

    useEffect(() => {
        document.title = "Progist";
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {window.location.hostname === "m.localhost"? (
                    <>
                        <Route path="/" element={<Landing_m />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                ) : (
                    <>
                        <Route path="*" element={<Navigate to="/" />} />
                        <Route path="/" element={<Landing />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>

    );
}

export default App;
