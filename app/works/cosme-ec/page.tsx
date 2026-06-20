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
                        <br />
                        ミニマルなコスメブランドを想定したECサイトです。
                        <br />
                        毎日のスキンケア時間が、
                        <br />
                        少し静かで心地よい体験になる世界観を表現しました。
                    </p>

                    <p className="text-[#8b7d70] text-sm md:text-base leading-8 max-w-2xl mb-10 md:mb-12">
                        肌にやさしくなじむ質感や、
                        <br />
                        落ち着いた余白設計を通して、
                        <br />
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
                                    <br />
                                    商品の特徴・価格・購入アクションが自然に目に入る構成を意識しました。
                                </p>

                                <div className="flex flex-wrap gap-3">

                                    <Link
                                        href="/works/cosme-ec/site"
                                        className="
    w-full md:w-auto
    text-center
    rounded-full
    px-6 py-3
    text-sm font-medium
    bg-gradient-to-r
    from-[#e8ddd2]
    to-[#d8c7b5]
    text-[#3b322c]
    border border-[#d8c7b5]
    shadow-sm
    hover:opacity-90
    transition
  "
                                    >
                                        サイトを見る →
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
                            ["Role", "デザイン / コーディング /<br/> レスポンシブ対応"],
                            ["Tech", "Next.js / TypeScript /<br/> Tailwind CSS"],
                            ["Type", "自主制作 / EC Design /<br/> UI Design"],
                            ["Target", "20〜40代のスキンケアに<br/>関心のあるユーザー"],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm"
                            >
                                <h2 className="text-sm text-[#b6a99e] mb-3 uppercase tracking-widest">
                                    {label}
                                </h2>
                                <p
                                    className="leading-7 text-[#4f453d]"
                                    dangerouslySetInnerHTML={{ __html: value }}
                                />
                            </div>
                        ))}
                    </div>



                    <section id="concept" className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">制作背景</h2>
                        <p className="text-sm md:text-base text-[#6f6258] leading-8 max-w-3xl">
                            自然由来のスキンケアアイテムを展開するコスメブランドを想定し、ECサイトを自主制作しました。<br /><br />

                            商品の魅力を伝えるだけでなく、ユーザーが商品を比較しながらスムーズに購入できるサイトを目指し、<br />
                            デザインから実装まで一貫して制作しています。<br /><br />

                            ブランドの世界観を表現しながらも、商品情報や購入導線が分かりやすく伝わる構成を意識しました。
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">工夫した点</h2>
                        <p className="text-sm md:text-base text-[#6f6258] leading-8 max-w-3xl">
                            スキンケアブランドらしい上品で落ち着いた印象を表現するため、色数を抑え、余白や角丸を活かしたデザインにしました。<br /><br />

                            また、商品一覧では画像・商品名・価格・購入ボタンの優先順位を意識して配置し、<br />
                            ユーザーが商品を比較しやすいレイアウトを採用しています。<br /><br />

                            商品詳細ページでは商品の特徴や価格、購入ボタンを分かりやすく配置し、必要な情報を把握しやすい構成を意識しました。<br /><br />

                            スマートフォンでの閲覧も考慮し、レスポンシブ対応や操作性にも配慮して実装しています。
                        </p>
                    </section>
                    <section className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            UI設計で意識したこと
                        </h2>

                        <p className="text-sm md:text-base text-[#6f6258] leading-8 max-w-3xl">
                            ECサイトでは商品の魅力を伝えるだけでなく、ユーザーがストレスなく商品を選択できることが重要だと考えました。
                            <br /><br />
                            そのため、情報量が増えすぎないよう整理しながら、商品比較や購入までの流れが分かりやすくなるようレイアウトを検討しました。<br /><br />

                            制作を通して、ブランドイメージの表現と使いやすさを両立する重要性について学ぶことができました。
                        </p>
                    </section>
                </div>
            </main>
            <BackToTop />
        </>
    );
}