"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import BackToTop from "../../../components/BackToTop";

export default function Page() {
    const [selectedImage, setSelectedImage] = useState<null | {
        src: string;
        alt: string;
    }>(null);

    const siteImages = [
        { src: "/kizuna01.png", alt: "トップページ" },
        { src: "/kizuna02.png", alt: "トップページKVスクロール後ビュー" },
        { src: "/kizuna03.png", alt: "事業内容ページ" },
        { src: "/kizuna04.png", alt: "採用ページ" },

    ];
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#050505] text-white px-6 md:px-10">
                <div className="max-w-5xl mx-auto py-20">
                    <p className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4">
                        Works Detail
                    </p>

                    <Link
                        href="/#works"
                        className="inline-flex items-center gap-2 text-sm md:text-base text-gray-300 hover:text-white transition mb-8 px-3 py-2 rounded-md hover:bg-white/10"
                    >
                        ← Works一覧に戻る
                    </Link>

                    <h1 className="text-2xl md:text-5xl font-bold tracking-tight mb-4">
                        建設業
                    </h1>

                    <p className="text-lg text-gray-400 mb-10">
                        デザイン / コーディング / レスポンシブ対応
                    </p>

                    {/* <img
                        src="/tbk.png"
                        alt="製造業"
                        className="w-full rounded-2xl border border-white/10 mb-12"
                    /> */}
                    <section className="mb-12">
                        <h2 className="text-xl md:text-3xl font-bold mb-6">
                            サイトイメージ
                        </h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            {siteImages.map((image, index) => (
                                <button
                                    key={image.src}
                                    type="button"
                                    onClick={() => setSelectedImage(image)}
                                    className="group rounded-3xl border border-white/10 bg-white/[0.03] p-3 text-left hover:border-white/30 transition"
                                >
                                    <div className="h-[300px] overflow-hidden rounded-2xl bg-white">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-[1.01]"
                                        />
                                    </div>

                                    <p className="mt-3 text-sm text-gray-400">
                                        {image.alt}を拡大
                                    </p>
                                </button>
                            ))}
                        </div>

                        {selectedImage && (
                            <div
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5 py-10"
                                onClick={() => setSelectedImage(null)}
                            >
                                <div
                                    className="relative w-full max-w-5xl max-h-[85vh] rounded-3xl bg-[#181818] border border-white/15 overflow-hidden"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* 固定ヘッダー */}
                                    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#181818]/95 px-5 py-3 backdrop-blur">
                                        <p className="text-sm text-gray-400">
                                            {selectedImage.alt}
                                        </p>

                                        <button
                                            onClick={() => setSelectedImage(null)}
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 text-2xl"
                                        >
                                            ×
                                        </button>
                                    </div>

                                    {/* ここだけスクロール */}
                                    <div className="max-h-[calc(85vh-73px)] overflow-y-auto p-5">
                                        <img
                                            src={selectedImage.src}
                                            alt={selectedImage.alt}
                                            className="mx-auto w-full rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                    <div className="grid gap-8 md:grid-cols-6 mb-12">
                        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
                                Role
                            </h2>
                            <p className="leading-7 text-gray-200">
                                デザイン / コーディング /<br /> レスポンシブ対応
                            </p>
                        </div>

                        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
                                Tech
                            </h2>
                            <p className="leading-7 text-gray-200">
                                HTML / CSS / JavaScript
                            </p>
                        </div>

                        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
                                Type
                            </h2>
                            <p className="leading-7 text-gray-200">
                                コーポレートサイト
                            </p>
                        </div>

                        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
                                Target
                            </h2>
                            <p className="leading-7 text-gray-200">
                                防水・シーリング工事などの<br />
                                施工を検討しているユーザー
                            </p>
                        </div>

                        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
                                Period
                            </h2>
                            <p className="leading-7 text-gray-200">
                                2026.07 / 約7日
                            </p>
                        </div>
                    </div>
                    <section className="mb-10">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">制作背景</h2>

                        <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8">
                            防水・シーリング工事を行う企業のコーポレートサイトとして、
                            事業内容や施工内容を分かりやすく伝え、<br />
                            企業としての信頼感を感じてもらえるサイトを目指して制作しました。
                            <br /><br />

                            防水工事やシーリング工事など、専門性の高いサービスを扱うため、
                            文章だけではなく施工写真も活用し、<br />
                            実際の施工内容が視覚的に伝わる構成を意識しました。
                            <br /><br />

                            また、コンテンツをただ並べるのではなく、
                            スクロールに合わせて情報が展開される構成を取り入れ、
                            <br />
                            ユーザーが自然に各サービスを見ていけるよう設計しました。
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">工夫した点</h2>

                        <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8">
                            ファーストビューでは動画を背景として使用し、
                            <br />
                            企業の雰囲気や施工現場の臨場感が伝わるようにしました。
                            <br /><br />

                            また、スクロールに合わせてコンテンツや施工写真が切り替わるインタラクションを取り入れ、
                            <br />
                            ページを読み進めることで各サービスの情報が順番に現れる構成を設計しました。
                            <br /><br />

                            右側のナビゲーションもスクロール位置に合わせて表示を切り替えることで、
                            <br />
                            現在どのコンテンツを見ているのかが分かりやすいよう工夫しています。
                            <br /><br />

                            施工写真を大きく見せるレイアウトや余白の取り方にもこだわり、
                            <br />
                            専門性や信頼感を保ちながら、印象に残るサイトになるようデザインしました。
                        </p>
                    </section>



                </div>
            </main>
            <BackToTop />
        </>
    );
}