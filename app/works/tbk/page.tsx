"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import BackToTop from "../../../components/BackToTop";

export default function Page() {
    const [selectedImage, setSelectedImage] = useState<{
        src: string;
        alt: string;
    } | null>(null);

    const siteImages = [
        { src: "/tbk01.png", alt: "トップページ" },
        { src: "/tbk02.png", alt: "特徴ページ" },
        { src: "/tbk03.png", alt: "設備ページ" },
    ];

    const information = [
        {
            label: "Role",
            value: "デザイン／コーディング／レスポンシブ対応\n（全て単独担当）",
        },
        {
            label: "Tech",
            value: "HTML / CSS / JavaScript",
        },
        {
            label: "Type",
            value: "コーポレートサイト",
        },
        {
            label: "Target",
            value: "企業情報や事業内容を確認したい\nユーザー",
        },
        {
            label: "Period",
            value: "2026.04 / 約5日",
        },
    ];

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-background px-6 text-foreground md:px-10">
                <div className="mx-auto max-w-7xl py-20">

                    {/* ページ上部 */}
                    <p className="font-editorial mb-5 text-sm tracking-[0.14em] text-muted">
                        WORKS DETAIL
                    </p>

                    <Link
                        href="/#works"
                        className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#DED6D2] bg-[#F3ECE6] px-5 py-3 text-sm text-[#625B57] transition-colors hover:bg-[#E8DCD6] hover:text-[#965564]"
                    >
                        ← Works一覧に戻る
                    </Link>

                    <header className="mb-16 border-b border-border pb-10">
                        <p className="mb-4 text-xs tracking-[0.16em] text-muted">
                            CORPORATE SITE
                        </p>

                        <h1 className="font-heading-ja mb-5 text-3xl font-medium tracking-[0.08em] text-foreground md:text-4xl">
                            製造業
                        </h1>

                        <p className="text-sm leading-8 text-[#625B57] md:text-base">
                            デザイン / コーディング / レスポンシブ対応
                        </p>
                    </header>

                    {/* SITE IMAGE */}
                    <section className="mb-16">
                        <div className="mb-10 text-center">
                            <h2 className="font-editorial text-3xl font-normal tracking-[0.06em] text-[#B79D95] md:text-4xl">
                                SITE IMAGE
                            </h2>

                            <p className="mt-3 text-xs tracking-[0.15em] text-[#965564] md:text-sm">
                                サイトイメージ
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {siteImages.map((image) => (
                                <button
                                    key={image.src}
                                    type="button"
                                    onClick={() => setSelectedImage(image)}
                                    className="min-w-0 rounded-2xl border border-border bg-white/70 p-3 text-left transition hover:shadow-lg"
                                >
                                    <div className="overflow-hidden rounded-xl bg-white">
                                        <p className="my-4 px-1 text-center text-sm text-foreground">
                                            {image.alt}
                                        </p>

                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="block h-[700px] w-full object-cover object-top"
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>

                        <p className="mt-4 text-right text-xs leading-6 text-[#625B57]">
                            ※守秘義務に配慮し、社名・一部情報の差し替え、および画像のぼかし加工を行って掲載しています。
                        </p>
                    </section>

                    {/* 制作情報 */}
                    <section className="mb-20">
                        <div className="grid gap-5 md:grid-cols-6">
                            {information.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-border bg-white/70 p-6 md:col-span-2"
                                >
                                    <h2 className="font-editorial mb-4 text-xl font-normal tracking-[0.06em] text-[#B79D95] md:text-2xl">
                                        {item.label}
                                    </h2>

                                    <p className="whitespace-pre-line text-sm leading-8 text-foreground">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 制作背景・工夫した点 */}
                    <div className="mx-auto mb-20 max-w-5xl space-y-8">

                        {/* 01 制作背景 */}
                        <section className="rounded-3xl border border-border bg-white/70 p-6 md:p-10">
                            <div className="mb-8 flex items-center gap-5 border-b border-border pb-6">
                                <span className="font-editorial text-4xl text-[#B79D95] md:text-5xl">
                                    01
                                </span>

                                <div>
                                    <p className="font-editorial mb-1 text-sm tracking-[0.1em] text-[#B79D95]">
                                        BACKGROUND
                                    </p>

                                    <h2 className="text-xl font-medium tracking-[0.08em] text-foreground md:text-2xl">
                                        制作背景
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-6 text-sm leading-8 text-[#625B57] md:text-base md:leading-9">
                                <p>
                                    会社案内としての役割に加え、製品・加工内容の訴求強化および
                                    <br />
                                    採用応募の促進を目的としたコーポレートサイトの制作を担当しました。
                                </p>

                                <p>
                                    既存サイトでは情報量が多く、初見ユーザーにとって
                                    <br />
                                    製品情報・加工内容・採用情報への到達がしづらいという課題がありました。
                                </p>

                                <p>
                                    そのため、主要コンテンツへの導線を整理するとともに、
                                    <br />
                                    見出しや余白の設計を見直し、必要な情報を探しやすい構成を意識して制作しました。
                                </p>

                                <p>
                                    また、工場・設備・製品写真を活用し、
                                    <br />
                                    企業の技術力や信頼感を適切に伝えられるデザインを目指しました。
                                </p>
                            </div>
                        </section>

                        {/* 02 工夫した点 */}
                        <section className="rounded-3xl border border-border bg-white/70 p-6 md:p-10">
                            <div className="mb-8 flex items-center gap-5 border-b border-border pb-6">
                                <span className="font-editorial text-4xl text-[#B79D95] md:text-5xl">
                                    02
                                </span>

                                <div>
                                    <p className="font-editorial mb-1 text-sm tracking-[0.1em] text-[#B79D95]">
                                        DESIGN & INTERACTION
                                    </p>

                                    <h2 className="text-xl font-medium tracking-[0.08em] text-foreground md:text-2xl">
                                        工夫した点
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-8">

                                {/* POINT 01 */}
                                <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                                    <div>
                                        <p className="font-editorial mb-1 text-xs tracking-[0.1em] text-[#B79D95]">
                                            POINT 01
                                        </p>

                                        <h3 className="text-sm font-medium text-foreground md:text-base">
                                            ブランドトーンの両立
                                        </h3>
                                    </div>

                                    <p className="text-sm leading-8 text-[#625B57] md:text-base">
                                        クライアント要件として、技術力や信頼感を表現しつつ、
                                        <br />
                                        親しみやすさも感じられるデザインが求められていたため、
                                        <br />
                                        両者のバランスを意識して制作しました。
                                    </p>
                                </div>

                                <div className="border-t border-border" />

                                {/* POINT 02 */}
                                <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                                    <div>
                                        <p className="font-editorial mb-1 text-xs tracking-[0.1em] text-[#B79D95]">
                                            POINT 02
                                        </p>

                                        <h3 className="text-sm font-medium text-foreground md:text-base">
                                            UIデザイン
                                        </h3>
                                    </div>

                                    <p className="text-sm leading-8 text-[#625B57] md:text-base">
                                        ボタンやカードに角丸を採用することで親しみやすさを表現しつつ、
                                        <br />
                                        背景や装飾にはシャープなラインを取り入れ、
                                        <br />
                                        製造業としての精度や技術力が伝わるよう工夫しました。
                                    </p>
                                </div>

                                <div className="border-t border-border" />

                                {/* POINT 03 */}
                                <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                                    <div>
                                        <p className="font-editorial mb-1 text-xs tracking-[0.1em] text-[#B79D95]">
                                            POINT 03
                                        </p>

                                        <h3 className="text-sm font-medium text-foreground md:text-base">
                                            情報整理と視認性
                                        </h3>
                                    </div>

                                    <p className="text-sm leading-8 text-[#625B57] md:text-base">
                                        見出しの階層や情報のグルーピングを整理し、
                                        <br />
                                        ユーザーが目的の情報を見つけやすいレイアウトを意識しました。
                                        <br />
                                        余白やコンテンツ間の間隔も調整し、
                                        <br />
                                        情報量が多くても読み進めやすいデザインを目指しました。
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* 画像拡大モーダル */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        type="button"
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-5 top-5 z-10 rounded-full bg-white px-4 py-2 text-sm text-[#393735]"
                    >
                        閉じる ×
                    </button>

                    <div
                        className="max-h-[90vh] max-w-5xl overflow-y-auto rounded-xl bg-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="block h-auto w-full"
                        />
                    </div>
                </div>
            )}

            <BackToTop />
        </>
    );
}