import Link from "next/link";
import Navbar from "../../../components/Navbar";
import BackToTop from "../../../components/BackToTop";

const information = [
    {
        label: "Role",
        value: "デザイン / コーディング /\nレスポンシブ対応",
    },
    {
        label: "Tech",
        value: "Next.js / TypeScript /\nTailwind CSS",
    },
    {
        label: "Type",
        value: "自主制作 / EC Design /\nUI Design",
    },
    {
        label: "Target",
        value: "20〜40代のスキンケアに\n関心のあるユーザー",
    },
];

const designPoints = [
    {
        number: "01",
        title: "ブランドの世界観",
        text: "スキンケアブランドらしい上品で落ち着いた印象を表現するため、\n色数を抑え、余白や角丸を活かしたデザインにしました。",
    },
    {
        number: "02",
        title: "商品を比較しやすい設計",
        text: "商品一覧では画像・商品名・価格・購入ボタンの優先順位を意識して配置し、\nユーザーが商品を比較しやすいレイアウトを採用しました。",
    },
    {
        number: "03",
        title: "購入導線の分かりやすさ",
        text: "商品詳細ページでは商品の特徴や価格、購入ボタンを分かりやすく配置し、\n必要な情報を把握しやすい構成を意識しました。",
    },
    {
        number: "04",
        title: "レスポンシブ対応",
        text: "スマートフォンでの閲覧も考慮し、\n画面幅に応じたレイアウトや操作性に配慮して実装しました。",
    },
];

export default function Page() {
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
                            EC DESIGN / PERSONAL PROJECT
                        </p>

                        <h1 className="font-heading-ja mb-5 text-3xl font-medium tracking-[0.08em] text-foreground md:text-4xl">
                            Lumière Skin
                        </h1>

                        <p className="text-sm leading-8 text-[#625B57] md:text-base">
                            自然由来のスキンケアアイテムを展開する、
                            <br />
                            ミニマルなコスメブランドを想定したECサイトです。
                        </p>
                    </header>

                    {/* コンセプト */}
                    <section className="mb-16 rounded-3xl border border-border bg-white/70 p-6 md:p-10">
                        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">

                            {/* 左側：説明 */}
                            <div>
                                <p className="font-editorial mb-4 text-sm tracking-[0.12em] text-[#B79D95]">
                                    CONCEPT
                                </p>

                                <h2 className="mb-6 text-2xl font-medium leading-relaxed tracking-[0.05em] text-foreground md:text-4xl">
                                    肌に、静かな
                                    <br />
                                    うるおいを。
                                </h2>

                                <div className="space-y-5 text-sm leading-8 text-[#625B57] md:text-base">
                                    <p>
                                        毎日のスキンケア時間が、
                                        <br />
                                        少し静かで心地よい体験になる世界観を表現しました。
                                    </p>

                                    <p>
                                        肌にやさしくなじむ質感や落ち着いた余白設計を通して、
                                        <br />
                                        シンプルで上品なブランド体験を目指しています。
                                    </p>
                                </div>
                                <Link
                                    href="/works/cosme-ec/site"
                                    className="mt-8 inline-flex items-center justify-center gap-4 rounded-full bg-[#965564] px-8 py-4 text-sm font-medium tracking-[0.08em] text-white transition hover:bg-[#7D4553]"
                                >
                                    制作したサイトを見る
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>

                            {/* 右側：ビジュアル */}
                            <div className="rounded-2xl border border-[#E5DCD7] bg-[#EFE7DD] p-5 shadow-sm">
                                <div className="flex aspect-[4/5] items-center justify-center rounded-xl border border-white/70 bg-gradient-to-br from-white via-[#EADF D3] to-[#CDBDAA]">
                                    <div className="text-center">
                                        <p className="mb-5 text-sm tracking-[0.3em] text-[#8B7D70]">
                                            Lumière
                                        </p>

                                        <div className="mx-auto h-40 w-24 rounded-t-full rounded-b-2xl border border-white bg-white/70 shadow-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* サイトへの導線 */}
                    {/* <section className="mb-20 overflow-hidden rounded-3xl border border-[#DCCBC4] bg-[#F3ECE6] px-6 py-10 text-center md:px-12 md:py-14">
                        <p className="font-editorial mb-4 text-sm tracking-[0.15em] text-[#965564]">
                            WEBSITE PREVIEW
                        </p>

                        <h2 className="mb-5 text-2xl font-medium tracking-[0.06em] text-[#625B57] md:text-3xl">
                            制作したサイトを見る
                        </h2>

                        <p className="mx-auto mb-8 max-w-2xl text-sm leading-8 text-[#625B57] md:text-base">
                            商品一覧や商品詳細ページなど、
                            <br />
                            ブランドの世界観と購入導線を意識したECサイトをご覧いただけます。
                        </p>

                        <Link
                            href="/works/cosme-ec/site"
                            className="inline-flex items-center justify-center gap-4 rounded-full bg-[#965564] px-8 py-4 text-sm font-medium tracking-[0.08em] text-white transition hover:bg-[#7D4553]"
                        >
                            サイトを見る
                            <span aria-hidden="true">→</span>
                        </Link>
                    </section> */}

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

                    {/* 制作背景・工夫した点・UI設計 */}
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
                                    自然由来のスキンケアアイテムを展開するコスメブランドを想定し、
                                    <br />
                                    ECサイトを自主制作しました。
                                </p>

                                <p>
                                    商品の魅力を伝えるだけでなく、
                                    <br />
                                    ユーザーが商品を比較しながらスムーズに購入できるサイトを目指し、
                                    <br />
                                    デザインから実装まで一貫して制作しています。
                                </p>

                                <p>
                                    ブランドの世界観を表現しながらも、
                                    <br />
                                    商品情報や購入導線が分かりやすく伝わる構成を意識しました。
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
                                {designPoints.map((point, index) => (
                                    <div key={point.number}>
                                        {index > 0 && (
                                            <div className="mb-8 border-t border-border" />
                                        )}

                                        <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                                            <div>
                                                <p className="font-editorial mb-1 text-xs tracking-[0.1em] text-[#B79D95]">
                                                    POINT {point.number}
                                                </p>

                                                <h3 className="text-sm font-medium text-foreground md:text-base">
                                                    {point.title}
                                                </h3>
                                            </div>

                                            <p className="whitespace-pre-line text-sm leading-8 text-[#625B57] md:text-base">
                                                {point.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 03 UI設計 */}
                        <section className="rounded-3xl border border-border bg-white/70 p-6 md:p-10">
                            <div className="mb-8 flex items-center gap-5 border-b border-border pb-6">
                                <span className="font-editorial text-4xl text-[#B79D95] md:text-5xl">
                                    03
                                </span>

                                <div>
                                    <p className="font-editorial mb-1 text-sm tracking-[0.1em] text-[#B79D95]">
                                        UI DESIGN
                                    </p>

                                    <h2 className="text-xl font-medium tracking-[0.08em] text-foreground md:text-2xl">
                                        UI設計で意識したこと
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-6 text-sm leading-8 text-[#625B57] md:text-base md:leading-9">
                                <p>
                                    ECサイトでは商品の魅力を伝えるだけでなく、
                                    <br />
                                    ユーザーがストレスなく商品を選択できることが重要だと考えました。
                                </p>

                                <p>
                                    そのため、情報量が増えすぎないよう整理しながら、
                                    <br />
                                    商品比較や購入までの流れが分かりやすくなるよう
                                    <br />
                                    レイアウトを検討しました。
                                </p>

                                <p>
                                    制作を通して、ブランドイメージの表現と使いやすさを
                                    <br />
                                    両立する重要性について学ぶことができました。
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <BackToTop />
        </>
    );
}