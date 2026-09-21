"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValueEvent,
} from "framer-motion";

export default function ConstructionDemo() {
    const animationRef = useRef<HTMLDivElement>(null);

    // スクロール進捗：0〜1
    const { scrollYProgress } = useScroll({
        target: animationRef,
        offset: ["start start", "end end"],
    });

    // スクロール進捗を0〜1の範囲に制限
    const progress = useTransform(scrollYProgress, (value) =>
        Math.min(1, Math.max(0, value))
    );

    // -------------------------
    // 01 ファーストビューの文字
    // -------------------------

    const title1Opacity = useTransform(
        scrollYProgress,
        [0.02, 0.13],
        [1, 0]
    );

    const title1Y = useTransform(
        scrollYProgress,
        [0.02, 0.13],
        [0, -80]
    );

    const title2Opacity = useTransform(
        scrollYProgress,
        [0.07, 0.19],
        [1, 0]
    );

    const title2Y = useTransform(
        scrollYProgress,
        [0.07, 0.19],
        [0, -80]
    );

    const subtitleOpacity = useTransform(
        scrollYProgress,
        [0.12, 0.23],
        [1, 0]
    );

    // -------------------------
    // 02 COMPANY
    // -------------------------

    const companyOpacity = useTransform(
        scrollYProgress,
        [0.18, 0.27, 0.38, 0.45],
        [0, 1, 1, 0]
    );

    const companyY = useTransform(
        scrollYProgress,
        [0.18, 0.27, 0.38, 0.45],
        [60, 0, 0, -60]
    );

    const companyLine1 = useTransform(
        scrollYProgress,
        [0.25, 0.32],
        [0, 1]
    );

    const companyLine2 = useTransform(
        scrollYProgress,
        [0.32, 0.39],
        [0, 1]
    );

    const companyLine3 = useTransform(
        scrollYProgress,
        [0.39, 0.46],
        [0, 1]
    );

    // -------------------------
    // 03 背景の形を変形
    // -------------------------

    // 全画面から左側のカードへ変形
    const mediaClip = useTransform(scrollYProgress, (value) => {
        // 変形開始前：全画面
        if (value <= 0.45) {
            return "inset(0% 0% 0% 0% round 0px)";
        }

        // 変形完了後：左側の画像サイズを固定
        if (value >= 0.6) {
            return "inset(23% 52% 23% 7% round 20px)";
        }

        // 0.45〜0.6の間だけ縮小
        const t = (value - 0.45) / 0.15;

        return `inset(${23 * t}% ${52 * t}% ${23 * t}% ${7 * t}% round ${20 * t}px)`;
    });

    // 背景色を白に変更
    const stageBackground = useTransform(
        scrollYProgress,
        [0.45, 0.6],
        ["#202423", "#F7F5F2"]
    );

    // ビジュアルの切り替え
    const heroVisualOpacity = useTransform(
        scrollYProgress,
        [0.48, 0.6],
        [1, 0]
    );

    const serviceVisualOpacity = useTransform(
        scrollYProgress,
        [0.48, 0.6],
        [0, 1]
    );

    // カード変形が終わってからSERVICEを表示
    const serviceOpacity = useTransform(
        scrollYProgress,
        (value) => (value < 0.6 ? 0 : 1)
    );

    const serviceY = useTransform(
        scrollYProgress,
        [0.6, 0.7],
        [60, 0]
    );
    // スクロール案内をSERVICE表示前に消す
    const scrollOpacity = useTransform(
        scrollYProgress,
        [0.35, 0.45],
        [1, 0]
    );

    // COMPANYが表示される前にKV全体を消す
    const kvOpacity = useTransform(
        scrollYProgress,
        [0.08, 0.15],
        [1, 0]
    );
    const kvVisibility = useTransform(
        scrollYProgress,
        (value) => value >= 0.15 ? "hidden" : "visible"
    );
    return (
        <main className="min-h-screen bg-[#F7F5F2]">

            {/* 戻るリンク */}
            <div className="flex h-20 items-center justify-between border-b border-[#DED6D2] px-6 md:px-12">
                <Link
                    href="/works/kizuna"
                    className="text-sm text-[#393735] transition hover:text-[#965564]"
                >
                    ← 作品詳細に戻る
                </Link>

                <span className="font-editorial text-sm tracking-[0.12em] text-[#8B7973]">
                    INTERACTION DEMO
                </span>
            </div>

            {/* デモ説明 */}
            <div className="mx-auto max-w-4xl px-6 py-14 text-center md:py-20">
                <p className="font-editorial mb-4 text-sm tracking-[0.15em] text-[#B79D95]">
                    SCROLL ANIMATION
                </p>

                <h1 className="mb-5 text-2xl font-medium tracking-[0.08em] text-[#393735] md:text-3xl">
                    スクロール演出デモ
                </h1>

                <p className="text-sm leading-8 text-[#625B57]">
                    下にスクロールすると、
                    <br className="md:hidden" />
                    ビジュアルとコンテンツが変化します。
                </p>

                <p className="mt-5 text-xs text-[#8B7973]">
                    ※ 架空の文章・ビジュアルを使用した再現デモです。
                </p>
            </div>

            {/* スクロール演出全体 */}
            <section
                className="relative"
                aria-label="スクロール演出デモ"
            >
                <div
                    ref={animationRef}
                    className="relative h-[350vh]"
                >
                    <motion.div
                        className="sticky top-0 h-screen overflow-hidden bg-[#F7F5F2]"
                        style={{ backgroundColor: stageBackground }}
                    >

                        {/* ==================================
              背景ビジュアル
          ================================== */}
                        <motion.div
                            className="absolute inset-0 z-0 overflow-hidden"
                            style={{
                                clipPath: mediaClip,
                            }}
                        >

                            {/* 動画風の背景 */}
                            <motion.div
                                className="absolute inset-0"
                                style={{
                                    opacity: heroVisualOpacity,
                                    background:
                                        "linear-gradient(125deg, #202423 0%, #505953 48%, #A5A79A 100%)",
                                }}
                            >

                                {/* 建築物をイメージした装飾 */}
                                <div className="absolute -right-[10%] -top-[10%] h-[120%] w-[55%] rotate-12 border-l border-white/20 bg-white/5" />

                                <div className="absolute bottom-0 left-[15%] h-[70%] w-[25%] -skew-x-12 border-x border-white/20 bg-black/10" />

                                <div className="absolute bottom-0 right-[10%] h-[85%] w-[20%] skew-x-6 border-x border-white/20 bg-white/5" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                            </motion.div>

                            {/* SERVICE用ビジュアル */}
                            <motion.div
                                className="absolute inset-0"
                                style={{
                                    opacity: serviceVisualOpacity,
                                    background:
                                        "linear-gradient(145deg, #9A9E95 0%, #5F6A63 45%, #2D3833 100%)",
                                }}
                            >

                                <div className="absolute inset-[12%] rotate-[-12deg] border border-white/30" />

                                <div className="absolute inset-[22%] rotate-12 border border-white/20" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                            </motion.div>

                        </motion.div>

                        {/* ==================================
              FV メインコピー
          ================================== */}
                        <motion.div
                            className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-center px-7 text-white md:px-[8%]"
                            style={{
                                opacity: kvOpacity,
                                visibility: kvVisibility,
                            }}
                        >

                            <motion.p
                                className="mb-8 text-xs tracking-[0.3em] text-white/70"
                                style={{ opacity: title1Opacity }}
                            >
                                CONSTRUCTION / DEMO
                            </motion.p>

                            <h2 className="font-editorial max-w-6xl text-[clamp(2.5rem,7vw,7rem)] leading-[1.12] tracking-[0.01em]">

                                <motion.span
                                    className="block"
                                    style={{
                                        opacity: title1Opacity,
                                        y: title1Y,
                                    }}
                                >
                                    PROTECT
                                    <br />
                                    WHAT MATTERS.
                                </motion.span>

                                <motion.span
                                    className="mt-4 block text-[0.55em]"
                                    style={{
                                        opacity: title2Opacity,
                                        y: title2Y,
                                    }}
                                >
                                    BUILD FOR THE FUTURE.
                                </motion.span>

                            </h2>

                            <motion.p
                                className="mt-10 text-sm tracking-[0.15em] text-white/80 md:text-base"
                                style={{ opacity: subtitleOpacity }}
                            >
                                建物の未来を、守る。
                            </motion.p>

                        </motion.div>

                        {/* ==================================
              COMPANY
          ================================== */}


                        <motion.div
                            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white"
                            style={{
                                opacity: companyOpacity,
                                y: companyY,
                            }}
                        >

                            <div className="max-w-4xl">

                                <p className="font-editorial mb-4 text-4xl tracking-[0.08em] md:text-6xl">
                                    COMPANY
                                </p>

                                <p className="mb-12 text-xs tracking-[0.2em] text-white/65">
                                    私たちについて
                                </p>

                                <div className="space-y-5 text-base leading-[2] tracking-[0.08em] md:text-2xl">

                                    <motion.p style={{ opacity: companyLine1 }}>
                                        建物と、人の暮らしをつなぐ。
                                    </motion.p>

                                    <motion.p style={{ opacity: companyLine2 }}>
                                        確かな技術と誠実な仕事で、
                                    </motion.p>

                                    <motion.p style={{ opacity: companyLine3 }}>
                                        未来へ続く価値を届けます。
                                    </motion.p>

                                </div>

                            </div>

                        </motion.div>

                        {/* ==================================
              SERVICE
          ================================== */}
                        <motion.div
                            className="pointer-events-none absolute inset-0 z-30 flex items-center"
                            style={{
                                opacity: serviceOpacity,
                                y: serviceY,
                                visibility: "visible",
                            }}
                        >

                            {/*
              左側は背景ビジュアルを見せるため空ける。
              右側に文章を配置。
            */}
                            <div className="flex w-full justify-end px-[5%]">

                                <div className="w-[43%] text-[#393735] max-md:w-[48%]">
                                    <p className="font-editorial mb-4 text-4xl tracking-[0.06em] md:text-6xl">
                                        SERVICE
                                    </p>

                                    <p className="mb-9 text-xs tracking-[0.2em] text-[#8B7973]">
                                        事業内容
                                    </p>

                                    <p className="text-sm leading-9 tracking-[0.05em] text-[#625B57] md:text-base">
                                        技術と経験を積み重ね、
                                        <br />
                                        一つひとつの建物に向き合う。
                                        <br />
                                        未来を支えるための仕事を、
                                        <br />
                                        私たちは大切にしています。
                                    </p>

                                    <p className="mt-8 text-xs tracking-[0.1em] text-[#8B7973]">
                                        SCROLL INTERACTION DEMO
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                        {/* スクロール案内 */}
                        <motion.div
                            className="pointer-events-none absolute bottom-8 left-1/2 z-40 -translate-x-1/2 text-center text-white"
                            style={{ opacity: scrollOpacity }}
                        >
                            <p className="text-[10px] tracking-[0.3em]">
                                SCROLL
                            </p>

                            <span className="mt-2 block animate-bounce text-lg">
                                ↓
                            </span>
                        </motion.div>
                    </motion.div>

                </div>

            </section>


            {/* デモ終了 */}
            <section className="px-6 pt-8 pb-24 text-center md:pt-12 md:pb-32">
                <p className="font-editorial mb-5 text-sm tracking-[0.15em] text-[#B79D95]">
                    END OF DEMO
                </p>

                <h2 className="mb-6 text-xl font-medium tracking-[0.08em] text-[#393735] md:text-2xl">
                    スクロール演出デモ
                </h2>

                <p className="mb-10 text-sm leading-8 text-[#625B57]">
                    スクロールに連動したコピーの切り替えと、
                    <br />
                    全画面ビジュアルの変形を再現しました。
                </p>

                <Link
                    href="/works/kizuna"
                    className="inline-flex items-center border-b border-[#B79D95] pb-3 text-sm text-[#393735] transition hover:text-[#965564]"
                >
                    ← 作品詳細に戻る
                </Link>

            </section>

        </main>

    );
}