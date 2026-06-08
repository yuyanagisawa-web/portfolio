"use client";
import { useEffect, useRef } from "react";

export default function WaveCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = 130);

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = 130;
        };

        window.addEventListener("resize", resize);

        let t = 0;

        const drawWave = (
            baseY: number,
            color: string,
            amp: number,
            speed: number,
            freq: number,
            phase: number
        ) => {
            ctx.beginPath();

            for (let x = 0; x < width; x++) {
                // 👉 横のうねり
                const waveX = Math.sin(x * freq + t * speed + phase) * amp;

                // 👉 縦の“呼吸”を追加（ここが重要）
                const waveY =
                    Math.sin(t * 0.6 + phase) * 6 + // ゆっくり上下する
                    Math.sin(x * freq * 0.3 + t * speed * 0.5) * (amp * 0.3);

                const y = baseY + waveX + waveY;

                ctx.lineTo(x, y);
            }

            ctx.strokeStyle = color;
            ctx.lineWidth = 1.3;
            ctx.stroke();
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // 奥（ゆったり大きい波）
            drawWave(
                height / 2,
                "rgba(216,180,254,0.18)",
                16,
                0.7,
                0.008,
                0
            );

            // 中（メイン）
            drawWave(
                height / 2,
                "rgba(251,207,232,0.25)",
                12,
                1.0,
                0.012,
                2
            );

            // 前（細かく軽く）
            drawWave(
                height / 2,
                "rgba(255,255,255,0.12)",
                8,
                1.3,
                0.016,
                4
            );

            t += 0.02;
            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="block w-full"
            style={{
                height: "130px",
                marginBottom: "-55px", // Worksに自然に“乗る”
            }}
        />
    );
}