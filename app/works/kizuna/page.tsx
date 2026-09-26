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
        { src: "/kizuna02.png", alt: "会社概要" },
        { src: "/kizuna03.png", alt: "採用ページ" },
    ];
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground px-6 md:px-10">
                <div className="max-w-7xl mx-auto py-20">
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

                        <h1 className="font-heading-ja mb-5 text-3xl md:text-4xl font-medium tracking-[0.08em] text-foreground">
                            建設業
                        </h1>

                        <p className="text-sm md:text-base leading-8 text-[#625B57]">
                            デザイン / コーディング / レスポンシブ対応
                        </p>
                    </header>
                    {/* <img
                        src="/tbk.png"
                        alt="製造業"
                        className="w-full rounded-2xl border border-white/10 mb-12"
                    /> */}
                    <section className="mb-16">

                        {/* 見出し */}
                        <div className="mb-10 text-center">
                            <h2 className="font-editorial text-3xl md:text-4xl font-normal tracking-[0.06em] text-[#B79D95]">
                                SITE IMAGE
                            </h2>

                            <p className="mt-3 text-xs md:text-sm tracking-[0.15em] text-[#965564]">
                                サイトイメージ
                            </p>
                        </div>
                        <p className="mt-4 text-right text-xs leading-6 text-[#625B57]">
                            クリックすると拡大することができます
                        </p>
                        {/* PC：3枚横並び / スマホ：1枚 */}
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
                                            className="block h-[800px] w-full object-cover object-top"
                                        />
                                    </div>
                                </button>

                            ))}
                        </div>
                        <p className="mt-4 text-right text-xs leading-6 text-[#625B57]">
                            ※守秘義務に配慮し、社名・一部情報の差し替え、および画像のぼかし加工を行って掲載しています。
                        </p>
                    </section>
                    {/* スクロール演出デモへのリンク */}
                    <div className="mb-20 rounded-3xl border border-border bg-white/70 px-6 py-10 text-center md:px-10 md:py-14">

                        <p className="font-editorial mb-4 text-sm tracking-[0.12em] text-[#B79D95]">
                            INTERACTION DEMO
                        </p>

                        <h2 className="mb-5 text-xl font-medium tracking-[0.08em] text-foreground md:text-2xl">
                            スクロール演出を見る
                        </h2>

                        <p className="mx-auto mb-9 max-w-xl text-sm leading-8 text-[#625B57]">
                            TOPページのファーストビューから、
                            <br />
                            スクロールに合わせてコンテンツやビジュアルが切り替わる演出を
                            <br />
                            デモでご覧いただけます。
                        </p>

                        <Link
                            href="/works/kizuna/demo"
                            className="inline-flex items-center gap-5 border-b border-[#B79D95] px-2 pb-3 text-xs tracking-[0.15em] text-foreground transition-colors hover:text-[#965564]"
                        >
                            VIEW INTERACTION DEMO
                            <span>↗</span>
                        </Link>

                        <p className="mt-6 text-xs text-muted">
                            ※ デモ用の文章・ビジュアルを使用しています。
                        </p>

                    </div>
                    {/* 制作情報 */}
                    <div className="mb-20 grid gap-5 md:grid-cols-6">

                        {[
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
                                value: "防水・シーリング工事などの\n施工を検討しているユーザー",
                            },
                            {
                                label: "Period",
                                value: "2026.07 / 約7日",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-border bg-white/70 p-6 md:col-span-2"
                            >
                                <h2 className="font-editorial mb-4 text-xl md:text-2xl font-normal tracking-[0.06em] text-[#B79D95]">
                                    {item.label}
                                </h2>

                                <p className="text-sm leading-8 text-foreground whitespace-pre-line">
                                    {item.value}
                                </p>
                            </div>
                        ))}

                    </div>
                    {/* 制作背景・工夫した点 */}
                    <div className="mx-auto mb-20 max-w-5xl space-y-8">

                        {/* 01 制作背景 */}
                        <section className="rounded-3xl border border-border bg-white/70 p-6 md:p-10">

                            {/* 見出し */}
                            <div className="mb-8 flex items-center gap-5 border-b border-border pb-6">

                                <span className="font-editorial text-4xl md:text-5xl text-[#B79D95]">
                                    01
                                </span>

                                <div>
                                    <p className="font-editorial mb-1 text-sm tracking-[0.1em] text-[#B79D95]">
                                        BACKGROUND
                                    </p>

                                    <h2 className="text-xl md:text-2xl font-medium tracking-[0.08em] text-foreground">
                                        制作背景
                                    </h2>
                                </div>

                            </div>

                            {/* 本文 */}
                            <div className="space-y-6 text-sm md:text-base leading-8 md:leading-9 text-[#625B57]">

                                <p>
                                    防水・シーリング工事を行う企業のコーポレートサイトとして、
                                    <br />
                                    事業内容や施工内容を分かりやすく伝え、
                                    <br />
                                    企業としての信頼感を感じてもらえるサイトを目指して制作しました。
                                </p>

                                <p>
                                    防水工事やシーリング工事など、専門性の高いサービスを扱うため、
                                    <br />
                                    文章だけではなく施工写真も活用し、
                                    <br />
                                    実際の施工内容が視覚的に伝わる構成を意識しました。
                                </p>

                                <p>
                                    また、コンテンツをただ並べるのではなく、
                                    <br />
                                    スクロールに合わせて情報が展開される構成を取り入れ、
                                    <br />
                                    ユーザーが自然に各サービスを見ていけるよう設計しました。
                                </p>

                            </div>

                        </section>

                        {/* 02 工夫した点 */}
                        <section className="rounded-3xl border border-border bg-white/70 p-6 md:p-10">

                            {/* 見出し */}
                            <div className="mb-8 flex items-center gap-5 border-b border-border pb-6">

                                <span className="font-editorial text-4xl md:text-5xl text-[#B79D95]">
                                    02
                                </span>

                                <div>
                                    <p className="font-editorial mb-1 text-sm tracking-[0.1em] text-[#B79D95]">
                                        DESIGN & INTERACTION
                                    </p>

                                    <h2 className="text-xl md:text-2xl font-medium tracking-[0.08em] text-foreground">
                                        工夫した点
                                    </h2>
                                </div>

                            </div>

                            {/* 工夫した点を3つに整理 */}
                            <div className="space-y-8">

                                {/* 01 */}
                                <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">

                                    <div>
                                        <p className="font-editorial mb-1 text-xs tracking-[0.1em] text-[#B79D95]">
                                            POINT 01
                                        </p>

                                        <h3 className="text-sm md:text-base font-medium text-foreground">
                                            動画を活用したFV
                                        </h3>
                                    </div>

                                    <p className="text-sm md:text-base leading-8 text-[#625B57]">
                                        ファーストビューでは動画を背景として使用し、
                                        <br />
                                        企業の雰囲気や施工現場の臨場感が伝わるようにしました。
                                    </p>

                                </div>

                                <div className="border-t border-border" />

                                {/* 02 */}
                                <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">

                                    <div>
                                        <p className="font-editorial mb-1 text-xs tracking-[0.1em] text-[#B79D95]">
                                            POINT 02
                                        </p>

                                        <h3 className="text-sm md:text-base font-medium text-foreground">
                                            スクロール演出
                                        </h3>
                                    </div>

                                    <p className="text-sm md:text-base leading-8 text-[#625B57]">
                                        スクロールに合わせてコンテンツや施工写真が切り替わる
                                        <br />
                                        インタラクションを取り入れ、
                                        <br />
                                        ページを読み進めることで各サービスの情報が
                                        <br />
                                        順番に現れる構成を設計しました。
                                    </p>

                                </div>

                                <div className="border-t border-border" />

                                {/* 03 */}
                                <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">

                                    <div>
                                        <p className="font-editorial mb-1 text-xs tracking-[0.1em] text-[#B79D95]">
                                            POINT 03
                                        </p>

                                        <h3 className="text-sm md:text-base font-medium text-foreground">
                                            視認性と導線設計
                                        </h3>
                                    </div>

                                    <p className="text-sm md:text-base leading-8 text-[#625B57]">
                                        右側のナビゲーションをスクロール位置に合わせて切り替え、
                                        <br />
                                        現在どのコンテンツを見ているのかが分かるよう工夫しました。
                                        <br />
                                        また、施工写真を大きく見せるレイアウトや余白の取り方にもこだわり、
                                        <br />
                                        専門性や信頼感を保ちながら印象に残るサイトを目指しました。
                                    </p>

                                </div>

                            </div>

                        </section>

                    </div>


                </div>
            </main>
            <BackToTop />
        </>
    );
}