import React, { useEffect, useRef } from "react";
import {Glow} from "./Glow";

const COLORS = [
    { r: 10, g: 51, b: 81 }, //blue
    { r: 147, g: 16, b: 63 }, //yellow
    { r: 0, g: 0, b: 0 }, //purple

];

export const Gradient = () => {
    const canvasRef = useRef(null);
    let ctx = null;
    let pixelRatio;
    let totalParticles;
    let particles;
    let maxRadius;
    let minRadius;
    let stageWidth;
    let stageHeight;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            ctx = canvas.getContext("2d");
            pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
            totalParticles = 15;
            particles = [];
            maxRadius = 1300;
            minRadius = 500;

            window.addEventListener("resize", resize, false);
            resize();
            window.requestAnimationFrame(animate);
        }

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    const resize = () => {
        if (ctx) {
            stageWidth = window.innerWidth;
            stageHeight = window.innerHeight;

            if (canvasRef.current) {
                canvasRef.current.width = stageWidth * pixelRatio;
                canvasRef.current.height = stageHeight * pixelRatio;
                canvasRef.current.style.width = `${stageWidth}px`;
                canvasRef.current.style.height = `${stageHeight}px`;
                ctx.scale(pixelRatio, pixelRatio);
            }

            createParticles();
        }
    };

    const createParticles = () => {
        let curColor = 0;
        particles = [];
        for (let i = 0; i < totalParticles; i++) {
            const item = new Glow(
                Math.random() * stageWidth,
                Math.random() * stageHeight,
                Math.random() * (maxRadius - minRadius) + minRadius,
                COLORS[curColor]
            );

            if (++curColor >= COLORS.length) {
                curColor = 0;
            }
            particles[i] = item;
        }
    };

    const animate = () => {
        // Animation logic
        window.requestAnimationFrame(animate);
        ctx?.clearRect(0, 0, stageWidth, stageHeight);

        for (let i = 0; i < totalParticles; i++) {
            const item = particles[i];
            item.animate(ctx, stageWidth, stageHeight);
        }
    };



    return (
        <canvas
            ref={canvasRef}
            style={{
                width: "100%",
                height: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                overflow: "hidden",
                zIndex: -1,
            }}
        />
    );
};
