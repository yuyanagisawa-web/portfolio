import Link from "next/link";
import Navbar from "../../../components/Navbar";
import BackToTop from "../../../components/BackToTop";

export default function Page() {

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#f7f3ee] text-[#1f1b18] px-5 md:px-10">
                <div className="max-w-6xl mx-auto py-14 md:py-16">
                    <p className="text-sm tracking-[0.2em] text-[#9b8f84] uppercase mb-4">
                        Works Detail
                    </p>

                    <Link
                        href="/#works"
                        className="inline-flex items-center gap-2 text-sm md:text-base text-[#6f6258] hover:text-[#1f1b18] transition mb-8 px-3 py-2 rounded-md hover:bg-black/5"
                    >
                        ← Works一覧に戻る
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-bold mb-5 md:mb-6">
                        Lumière Skin
                    </h1>

                    <p className="text-[#6f6258] text-base md:text-xl leading-8 md:leading-[2.2] max-w-4xl mb-8 md:mb-16">
                        自然由来のスキンケアアイテムを展開する、
                        ミニマルなコスメブランドを想定したECサイトです。
                        毎日のスキンケア時間が、
                        少し静かで心地よい体験になる世界観を表現しました。
                    </p>

                    <p className="text-[#8b7d70] text-sm md:text-base leading-8 max-w-2xl mb-10 md:mb-12">
                        肌にやさしくなじむ質感や、
                        落ち着いた余白設計を通して、
                        シンプルで上品なブランド体験を目指しています。
                    </p>

                    <section className="rounded-[1.5rem] md:rounded-[2rem] bg-white border border-black/5 p-5 md:p-7 mb-12 shadow-sm">
                        <div className="grid gap-8 md:gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
                            <div>
                                <p className="text-sm tracking-[0.25em] text-[#b6a99e] uppercase mb-5">
                                    Skincare EC Concept
                                </p>

                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-5">
                                    肌に、静かな
                                    <br />
                                    うるおいを。
                                </h2>

                                <p className="text-[#6f6258] leading-8 mb-8">
                                    毎日のスキンケアを心地よく選べるよう、
                                    商品の特徴・価格・購入アクションが自然に目に入る構成を意識しました。
                                </p>

                                <div className="flex flex-wrap gap-3">

                                    <Link
                                        href="/works/cosme-ec/site"
                                        className="w-full md:w-auto text-center rounded-full bg-[#1f1b18] text-white px-6 py-3 text-sm font-medium hover:opacity-80 transition"
                                    >
                                        サイトを見る
                                    </Link>



                                </div>
                            </div>

                            <div className="rounded-[1.5rem] bg-[#efe7dd] p-5 md:p-6">
                                <div className="aspect-[4/5] rounded-[1.25rem] bg-gradient-to-br from-[#ffffff] via-[#eadfd3] to-[#cdbdaa] border border-white/70 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-sm tracking-[0.3em] text-[#8b7d70] uppercase mb-4">
                                            Lumière
                                        </p>
                                        <div className="mx-auto h-40 w-24 rounded-t-full rounded-b-2xl bg-white/70 border border-white shadow-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="grid gap-6 md:grid-cols-4 mb-14">
                        {[
                            ["Role", "デザイン / コーディング / レスポンシブ対応"],
                            ["Tech", "Next.js / TypeScript / Tailwind CSS"],
                            ["Type", "自主制作 / EC Design / UI Design"],
                            ["Target", "20〜40代のスキンケアに関心のあるユーザー"],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm"
                            >
                                <h2 className="text-sm text-[#b6a99e] mb-3 uppercase tracking-widest">
                                    {label}
                                </h2>
                                <p className="leading-7 text-[#4f453d]">{value}</p>
                            </div>
                        ))}
                    </div>



                    <section id="concept" className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">制作背景</h2>
                        <p className="text-sm md:text-base text-[#6f6258] leading-8 max-w-3xl">
                            コスメECでは、商品の魅力だけでなく、購入まで迷わず進める導線設計が重要だと考えました。
                            <br /><br />
                            そのため、Lumière Skinではブランドの上品さが伝わる余白設計と、
                            商品情報・価格・購入ボタンが自然に目に入るカードUIを意識して制作しました。
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">工夫した点</h2>
                        <p className="text-sm md:text-base text-[#6f6258] leading-8 max-w-3xl">
                            全体の色数を抑え、余白・角丸・淡い背景色でスキンケアブランドらしい落ち着いた印象を作りました。
                            <br /><br />
                            また、商品カードでは画像領域、カテゴリ、商品名、説明文、価格、購入ボタンの順に情報を整理し、
                            スマートフォンでも購入導線が分かりやすい構成にしています。
                        </p>
                    </section>
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            UI設計で意識したこと
                        </h2>

                        <p className="text-sm md:text-base text-[#6f6258] leading-8 max-w-3xl">
                            ECサイトでは、ユーザーが迷わず商品詳細へ進める導線設計を意識しました。

                            <br /><br />

                            商品一覧では視線が自然に流れるカードレイアウトを採用し、
                            商品詳細では価格・特徴・購入CTAが分かりやすく伝わる構成にしています。

                            <br /><br />

                            また、余白や色数を抑えることで、
                            スキンケアブランドらしい上品で落ち着いた世界観を表現しました。
                        </p>
                    </section>
                </div>
            </main>
            <BackToTop />
        </>
    );
}