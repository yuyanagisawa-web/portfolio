
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
        value: "Next.js / TypeScript /\nTailwind CSS / Framer Motion",
    },
    {
        label: "Type",
        value: "自主制作 / LP Design /\nHealthcare",
    },
    {
        label: "Target",
        value: "日々の体調や服薬、通院予定を\nまとめて管理したい方",
    },
];

const designPoints = [
    {
        number: "01",
        title: "信頼感と親しみやすさの両立",
        text: "健康・医療というテーマに対して、堅苦しい印象にならないよう、\n深いグリーンと淡いミントを基調に、落ち着いた配色と整理されたUIを採用しました。\n余白と細い罫線を使い、親しみやすさに加えて信頼感を意識しています。",
    },
    {
        number: "02",
        title: "課題から解決策への情報設計",
        text: "ユーザーが抱える健康管理の悩みを最初に提示し、\nサービスによって何が解決できるのかを段階的に紹介しました。\n共感からサービス理解へとつながるLP構成を意識しています。",
    },
    {
        number: "03",
        title: "サービスの特徴を伝える図解",
        text: "体調記録・服薬管理・通院予定の3つの機能を整理し、\nスマートフォンのUIモックアップと説明文を左右交互に配置しました。\n文章だけに頼らず、視覚的にも内容が伝わる構成にしています。",
    },
    {
        number: "04",
        title: "スクロールアニメーション",
        text: "各セクションにフェードインアニメーションを取り入れ、\nコンテンツが自然に表示されるよう実装しました。\n情報の読みやすさを損なわない控えめな動きを意識しています。",
    },
    {
        number: "05",
        title: "レスポンシブ対応",
        text: "PCではスマートフォン画面とテキストを左右に配置し、\nスマートフォンでは縦並びに切り替えることで、\n画面幅に応じた視認性と操作性を確保しました。",
    },
];

const uiPoints = [
    {
        title: "情報の優先順位",
        text: "ファーストビューではキャッチコピーとサービスの特徴を簡潔に伝え、\n詳細情報へ自然に進める構成にしました。",
    },
    {
        title: "CTAの視認性",
        text: "深いグリーンのボタンと明るい背景を組み合わせ、背景とのコントラストを確保。\n次に取る行動が分かりやすいデザインにしました。",
    },
    {
        title: "FAQの操作性",
        text: "よくある質問にはアコーディオンを採用し、必要な情報を選んで確認できるようにしました。",
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
                        className="mb-10 inline-flex items-center items-center gap-2 rounded-full border border-[#DED6D2] bg-[#F3ECE6] px-5 py-3 text-sm text-[#625B57] transition-colors hover:bg-[#E8DCD6] hover:text-[#965564]"
                    >
                        ← 制作実績に戻る
                    </Link>

                    <header className="mb-16 border-b border-border pb-10">
                        <p className="mb-4 text-xs tracking-[0.16em] text-muted">
                            LP DESIGN / PERSONAL PROJECT
                        </p>

                        <h1 className="font-heading-ja mb-5 text-3xl font-medium tracking-[0.08em] text-foreground md:text-4xl">
                            よりそい健康ノート
                        </h1>

                        <p className="text-sm leading-8 text-[#625B57] md:text-base">
                            体調記録・服薬管理・通院予定をまとめて管理できる、
                            <br className="hidden md:block" />
                            架空の健康管理サービスを想定したLPです。
                        </p>
                    </header>

                    {/* コンセプト */}
                    <section className="mb-16 rounded-3xl border border-border bg-white/70 p-6 md:p-10">
                        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">

                            <div>
                                <p className="font-editorial mb-4 text-sm tracking-[0.12em] text-[#B79D95]">
                                    CONCEPT
                                </p>

                                <h2 className="mb-6 text-2xl font-medium leading-relaxed tracking-[0.05em] text-foreground md:text-4xl">
                                    毎日の健康管理を、
                                    <br />
                                    もっとかんたんに。
                                </h2>

                                <div className="space-y-5 text-sm leading-8 text-[#625B57] md:text-base">
                                    <p>
                                        体調の記録やお薬の管理、通院予定など、
                                        <br />
                                        日々の健康に関する情報をひとつにまとめられるサービスを想定しました。
                                    </p>
                                    <p>
                                        健康管理に対する負担を少しでも軽くできるよう、
                                        <br />
                                        使いやすさ・見やすさ・信頼感を大切にしたLPを制作しました。
                                    </p>
                                </div>

                                <Link
                                    href="/works/health/site"
                                    className="mt-8 inline-flex items-center justify-center gap-4 rounded-full bg-[#965564] px-8 py-4 text-sm font-medium tracking-[0.08em] text-white transition hover:bg-[#7D4553]"
                                >
                                    制作したLPを見る
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>

                            {/* LPのプレビュー：サービス画面をイメージしたUI */}
                            <div className="relative overflow-hidden rounded-2xl border border-[#DFE9E2] bg-gradient-to-br from-[#EDF5EF] to-[#DAE9DF] px-6 py-10">
                                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/60" />
                                <div className="mx-auto max-w-[280px] rounded-[32px] border-[7px] border-[#29483E] bg-white px-5 pb-7 pt-3 shadow-[15px_22px_45px_rgba(30,65,50,0.15)]">
                                    <div className="mx-auto mb-6 h-2 w-16 rounded-full bg-[#29483E]" />
                                    <p className="text-[11px] font-bold text-[#29483E]">よりそい健康ノート</p>
                                    <p className="mt-5 text-[11px] text-[#81968B]">HEALTH OVERVIEW</p>
                                    <p className="mt-1 text-lg font-semibold text-[#29483E]">今日の健康記録</p>
                                    <div className="mt-5 rounded-xl bg-[#EAF4ED] p-4">
                                        <p className="text-xs text-[#668473]">今日の体調</p>
                                        <p className="mt-2 text-lg font-semibold text-[#29483E]">良好 <span className="text-xs font-normal">✓ 記録済み</span></p>
                                    </div>
                                    <div className="mt-4 space-y-3">
                                        {['お薬の記録', '通院スケジュール'].map((v) => (
                                            <div key={v} className="flex items-center justify-between rounded-lg border border-[#E5EEE7] px-3 py-4 text-xs text-[#456B58]"><span>{v}</span><span>→</span></div>
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-5 text-center text-[11px] tracking-wider text-[#668473]">UI CONCEPT / PERSONAL PROJECT</p>
                            </div>

                        </div>
                    </section>

                    {/* 制作情報 */}
                    <section className="mb-20">
                        <div className="grid gap-5 md:grid-cols-2">
                            {information.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-border bg-white/70 p-6"
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

                    <div className="mx-auto mb-20 max-w-5xl space-y-8">

                        {/* 制作背景 */}
                        <section className="rounded-3xl border border-border bg-white/70 p-6 md:p-10">
                            <div className="mb-8 flex items-center gap-5 border-b border-border pb-6">
                                <span className="font-editorial text-4xl text-[#B79D95] md:text-5xl">
                                    01
                                </span>
                                <div>
                                    <p className="font-editorial mb-1 text-sm tracking-[0.1em] text-[#B79D95]">
                                        BACKGROUND
                                    </p>
                                    <h2 className="text-xl font-medium tracking-[0.08em] md:text-2xl">
                                        制作背景
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-6 text-sm leading-8 text-[#625B57] md:text-base md:leading-9">
                                <p>
                                    健康管理において、体調の変化や服薬状況、
                                    <br />
                                    通院予定などの情報が分散しやすい点に着目しました。
                                </p>
                                <p>
                                    これらの情報をまとめて管理できる架空のWebサービスを企画し、
                                    <br />
                                    サービスの必要性や特徴を分かりやすく伝えるLPを自主制作しました。
                                </p>
                                <p>
                                    健康・医療というテーマでも堅苦しくなりすぎず、
                                    <br />
                                    日常的に利用するサービスとして安心感のあるデザインを目指しました。
                                </p>
                            </div>
                        </section>

                        {/* 工夫した点 */}
                        <section className="rounded-3xl border border-border bg-white/70 p-6 md:p-10">
                            <div className="mb-8 flex items-center gap-5 border-b border-border pb-6">
                                <span className="font-editorial text-4xl text-[#B79D95] md:text-5xl">
                                    02
                                </span>
                                <div>
                                    <p className="font-editorial mb-1 text-sm tracking-[0.1em] text-[#B79D95]">
                                        DESIGN & INTERACTION
                                    </p>
                                    <h2 className="text-xl font-medium tracking-[0.08em] md:text-2xl">
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
                                                <h3 className="text-sm font-medium md:text-base">
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

                        {/* UI設計 */}
                        <section className="rounded-3xl border border-border bg-white/70 p-6 md:p-10">
                            <div className="mb-8 flex items-center gap-5 border-b border-border pb-6">
                                <span className="font-editorial text-4xl text-[#B79D95] md:text-5xl">
                                    03
                                </span>
                                <div>
                                    <p className="font-editorial mb-1 text-sm tracking-[0.1em] text-[#B79D95]">
                                        UI DESIGN
                                    </p>
                                    <h2 className="text-xl font-medium tracking-[0.08em] md:text-2xl">
                                        UI設計で意識したこと
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {uiPoints.map((point, index) => (
                                    <div key={point.title}>
                                        {index > 0 && <div className="border-t border-border" />}
                                        <div className="pt-3">
                                            <h3 className="mb-3 text-base font-medium">
                                                {point.title}
                                            </h3>
                                            <p className="text-sm leading-8 text-[#625B57] md:text-base whitespace-pre-line">
                                                {point.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* LPへのリンク */}
                    <section className="rounded-3xl border border-border bg-white/70 px-6 py-14 text-center md:px-12">
                        <p className="font-editorial mb-4 text-sm tracking-[0.14em] text-[#B79D95]">
                            VIEW WEBSITE
                        </p>
                        <h2 className="mb-5 text-2xl font-medium md:text-3xl">
                            制作したLPを見る
                        </h2>
                        <p className="mx-auto mb-8 max-w-xl text-sm leading-8 text-[#625B57]">
                            スマートフォンUIを中心とした情報設計や、
                            <br />
                            スクロールアニメーションを取り入れたLPをご覧いただけます。
                        </p>
                        <Link
                            href="/works/health/site"
                            className="inline-flex items-center gap-4 rounded-full bg-[#965564] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#7D4553]"
                        >
                            LPを見る <span aria-hidden="true">→</span>
                        </Link>
                    </section>

                </div>
            </main>

            <BackToTop />
        </>
    );
}
