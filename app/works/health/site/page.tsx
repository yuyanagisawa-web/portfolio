"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const green = "#244B3D";

const features = [
    { number: "01", eyebrow: "HEALTH RECORD", title: "体調の変化を、\nひと目でわかりやすく。", body: "その日の体調や気になる症状を、無理なく記録。\n毎日の振り返りに役立つよう、\n記録を日付ごとに整理します。", kind: "health", bg: "#EFF6F1", tags: ["日々の体調記録", "記録の振り返り"] },
    { number: "02", eyebrow: "MEDICATION", title: "お薬のことも、\nまとめて管理。", body: "飲むお薬や服薬タイミングを一覧で確認。\n日々の服薬管理を、もっとシンプルにします。", kind: "medicine", bg: "#F8F7F0", tags: ["服薬スケジュール", "チェック機能"] },
    { number: "03", eyebrow: "APPOINTMENT", title: "次の通院予定を、\n忘れずチェック。", body: "通院日や予定を一か所にまとめて確認。\n毎日の健康管理に必要な情報を\n探しやすくします。", kind: "calendar", bg: "#EFF4F7", tags: ["予定の一覧", "通院メモ"] },
] as const;

const faqs = [
    { q: "どんな人に向いているサービスですか？", a: "日々の体調、服薬、通院予定などを一つにまとめて管理したい方を想定しています。" },
    { q: "スマートフォンでも利用できますか？", a: "スマートフォンでの利用を想定したUIデザインです。画面幅に合わせてレイアウトが変わります。" },
    { q: "実際に登録して使えますか？", a: "こちらはポートフォリオ用の架空サービスLPです。現在、実際の会員登録や医療情報の保存には対応していません。" },
    { q: "医療機関と情報を共有できますか？", a: "医療機関との連携は実装していません。サービスのコンセプトを紹介するための自主制作です。" },
];

// TOPと同じように、透明度がゆっくり変化するスクロールアニメーション
// sectionごとに方向を変えつつ、移動距離は控えめにして柔らかく表示
type RevealDirection = "up" | "left" | "right" | "soft" | "zoom";

function Reveal({
    children,
    className = "",
    delay = 0,
    y = 24,
    direction = "up",
    duration = 1.4,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    direction?: RevealDirection;
    duration?: number;
}) {
    const reduced = false;
    const x = direction === "left" ? -28 : direction === "right" ? 28 : 0;
    const startY = direction === "soft" ? 10 : direction === "zoom" ? 18 : y;
    const startScale = direction === "zoom" ? 0.975 : 1;

    return (
        <motion.div
            className={className}
            initial={reduced ? false : {
                opacity: 0,
                x,
                y: startY,
                scale: startScale,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12, margin: "0px 0px -35px 0px" }}
            transition={{
                opacity: { duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: "linear" },
                x: { duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
                y: { duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
            }}
        >
            {children}
        </motion.div>
    );
}

function CardReveal({ children, index, className = "", direction = "up" }: {
    children: React.ReactNode;
    index: number;
    className?: string;
    direction?: RevealDirection;
}) {
    return (
        <Reveal className={className} direction={direction} delay={(index % 3) * 0.13} y={28} duration={1.75}>
            {children}
        </Reveal>
    );
}

function HeroItem({ children, delay = 0, className = "" }: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const reduced = false;
    return (
        <motion.div
            className={className}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                opacity: { duration: reduced ? 0 : 1.65, delay: reduced ? 0 : delay, ease: "linear" },
                y: { duration: reduced ? 0 : 1.65, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
            }}
        >
            {children}
        </motion.div>
    );
}

function HeroVisual() {
    const reduced = false;
    return (
        <div className="relative flex min-h-[470px] items-center justify-center">
            <motion.div
                className="absolute left-0 top-[3%] z-20 rounded-2xl border border-white bg-white/90 px-5 py-4 shadow-lg"
                initial={reduced ? false : { opacity: 0, x: -28, y: 12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: reduced ? 0 : 1.35, ease: [0.22, 1, 0.36, 1] }}
            >
                <p className="text-[10px] text-[#82988A]">HEALTH RECORD</p>
                <p className="mt-1 text-[13px] font-bold">毎日の体調を記録 ✓</p>
            </motion.div>

            <motion.div
                className="relative z-10"
                initial={reduced ? false : { opacity: 0, y: 32, scale: 0.96, rotate: -2 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                transition={{ duration: 1.8, delay: reduced ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
                <motion.div
                    animate={reduced ? undefined : { y: [0, -18, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Phone />
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-[6%] right-0 z-20 rounded-2xl border border-white bg-white/95 px-5 py-4 shadow-lg"
                initial={reduced ? false : { opacity: 0, x: 28, y: 12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: reduced ? 0 : 1.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <p className="text-[10px] text-[#82988A]">YOUR SCHEDULE</p>
                <p className="mt-1 text-[13px] font-bold">予定もまとめて確認</p>
            </motion.div>
        </div>
    );
}

function SectionTitle({ en, title, lead }: { en: string; title: string; lead?: string }) {
    return <div className="mb-10 md:mb-14"><p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-[#5D9676]">{en}</p><h2 className="text-[25px] font-bold leading-[1.55] tracking-[0.035em] text-[#244B3D] md:text-[34px]">{title}</h2>{lead && <p className="mt-4 text-[14px] leading-8 text-[#61746B] md:text-[15px]">{lead}</p>}</div>;
}

function Phone({ kind = "health", compact = false }: { kind?: "health" | "medicine" | "calendar"; compact?: boolean }) {
    return (
        <div
            className={`relative mx-auto w-full ${compact
                ? "max-w-[230px] h-[390px]"
                : "max-w-[292px]"
                } rounded-[35px] border-[7px] border-[#29493E] bg-[#29493E] p-[5px] shadow-[0_20px_45px_rgba(20,58,44,0.15)]`}
        >

            <div className="absolute left-1/2 top-[13px] z-10 h-[17px] w-[76px] -translate-x-1/2 rounded-full bg-[#29493E]" />

            <div
                className={`overflow-hidden rounded-[26px] bg-[#FAFCF9] text-[#244B3D] ${compact
                    ? "h-full px-3 pb-3 pt-8"
                    : "min-h-[410px] px-4 pb-3 pt-9"
                    }`}
            >


                <div className="mb-4 flex items-center justify-between"><span className="text-[11px] font-bold">よりそい健康ノート</span><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E3F0E6] text-sm">♡</span></div>
                {kind === "health" && <><p className="text-[11px] text-[#7A8D82]">今日も自分のペースで</p><h3
                    className={`mb-3 mt-1 font-bold leading-[1.5] ${compact ? "text-[16px] tracking-[-0.04em]" : "text-[21px]"
                        }`}
                >
                    おはようございます。
                </h3>
                    <div className="rounded-2xl bg-[#E4F1E7] p-4"><p className="text-[11px] font-semibold">今日の体調はいかがですか？</p><div className="mt-4 flex justify-between text-[24px]"><span>😊</span><span>🙂</span><span>😐</span><span>😔</span></div><div className="mt-4 rounded-full bg-[#2D6650] py-2 text-center text-[11px] font-semibold text-white">体調を記録する</div></div><div className="mt-3 rounded-2xl border border-[#E0EAE3] bg-white p-4"><p className="text-xs font-bold">最近の記録</p><div className="mt-3 flex h-16 items-end justify-between gap-2">{[46, 70, 52, 85, 65, 78, 56].map((h, i) => <div key={i} className="flex-1 rounded-t-md bg-[#8FBDA2]" style={{ height: `${h}%` }} />)}</div><div className="mt-2 flex justify-between text-[9px] text-[#84988C]"><span>月</span><span>火</span><span>水</span><span>木</span><span>金</span><span>土</span><span>日</span></div></div></>}
                {kind === "medicine" && (
                    <>
                        <p className="text-[10px] text-[#7A8D82]">
                            MEDICATION
                        </p>

                        <h3 className="mb-3 mt-1 text-[18px] font-bold">
                            お薬の管理
                        </h3>

                        <div className="rounded-2xl bg-[#E4F1E7] p-3">
                            <p className="text-[10px]">
                                今日の服薬状況
                            </p>

                            <p className="mt-2 text-[23px] font-bold">
                                2{" "}
                                <span className="text-xs font-normal">
                                    / 3 回
                                </span>
                            </p>

                            <div className="mt-3 h-2 rounded-full bg-white">
                                <div className="h-full w-2/3 rounded-full bg-[#397B5E]" />
                            </div>
                        </div>

                        <div className="mt-3 space-y-2">
                            {["朝食後", "昼食後", "夕食後"].map((t, i) => (
                                <div
                                    key={t}
                                    className="flex items-center justify-between rounded-xl border border-[#E0EAE3] bg-white px-3 py-3"
                                >
                                    <div>
                                        <p className="text-[11px] font-bold">
                                            {t}
                                        </p>
                                        <p className="mt-1 text-[9px] text-[#87988D]">
                                            お薬の確認
                                        </p>
                                    </div>

                                    <span
                                        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${i < 2
                                            ? "bg-[#D8EDDF] text-[#286348]"
                                            : "border border-[#D4E2D8]"
                                            }`}
                                    >
                                        {i < 2 ? "✓" : ""}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </>
                )}
                {kind === "calendar" && (
                    <>
                        <p className="text-[10px] text-[#7A8D82]">
                            APPOINTMENT
                        </p>

                        <h3 className="mb-3 mt-1 text-[18px] font-bold">
                            通院スケジュール
                        </h3>

                        <div className="rounded-2xl border border-[#E0EAE3] bg-white p-3">
                            <p className="text-center text-[11px] font-bold">
                                10月
                            </p>

                            <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[9px]">
                                {[
                                    "日", "月", "火", "水", "木", "金", "土",
                                    ...Array.from({ length: 28 }, (_, i) =>
                                        String(i + 1)
                                    ),
                                ].map((d, i) => (
                                    <span
                                        key={i}
                                        className={`flex aspect-square items-center justify-center rounded-full ${d === "15"
                                            ? "bg-[#347454] font-bold text-white"
                                            : ""
                                            }`}
                                    >
                                        {d}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-3 rounded-2xl bg-[#E4F1E7] p-3">
                            <p className="text-[10px] font-bold">
                                次回の予定
                            </p>

                            <p className="mt-2 text-[15px] font-bold">
                                10月15日 10:00
                            </p>

                            <p className="mt-2 text-[10px] text-[#61776B]">
                                定期受診・持ち物を確認
                            </p>
                        </div>
                    </>
                )}
                <div className="mt-4 flex justify-around border-t border-[#E3EAE4] pt-4 text-[10px] text-[#6E8878]"><span>⌂ ホーム</span><span>▤ 記録</span><span>▦ 予定</span></div>
            </div>
        </div>
    );
}


export default function HealthLpSite() {
    const reduced = false;

    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main className="overflow-x-hidden bg-[#FBFCFA] text-[#244B3D]">

            {/* ポートフォリオへの戻るリンク */}
            <div className="border-b border-[#E0E9E2] bg-white">
                <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-5 py-3 text-[12px] text-[#64776D] md:px-8">
                    <Link href="/works/health" className="hover:text-[#244B3D]">
                        ← 実績詳細に戻る
                    </Link>
                    <Link href="/#works" className="hover:text-[#244B3D]">
                        ← WORKS一覧に戻る
                    </Link>
                </div>
            </div>

            {/* ヘッダー */}
            <header className="sticky top-0 z-40 border-b border-[#E0E9E2] bg-white/95 backdrop-blur-md">
                <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:px-8">
                    <a href="#top" className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E2F0E6] text-xl">
                            ♡
                        </span>
                        <span className="text-[15px] font-bold tracking-[0.02em]">
                            よりそい健康ノート
                        </span>
                    </a>

                    <nav className="hidden items-center gap-8 text-[13px] font-medium text-[#536B5D] md:flex">
                        <a href="#about" className="hover:text-[#2B7554]">サービス紹介</a>
                        <a href="#features" className="hover:text-[#2B7554]">機能紹介</a>
                        <a href="#howto" className="hover:text-[#2B7554]">使い方</a>
                        <a href="#faq" className="hover:text-[#2B7554]">FAQ</a>
                    </nav>

                    <a
                        href="#features"
                        className="hidden rounded-full bg-[#244B3D] px-6 py-3 text-[12px] font-bold text-white transition hover:bg-[#3A7659] md:block"
                    >
                        機能を見る ↗
                    </a>

                    <button
                        type="button"
                        aria-label="メニュー"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="rounded-lg border border-[#DCE7DF] px-3 py-2 text-sm md:hidden"
                    >
                        {menuOpen ? "閉じる ×" : "メニュー ☰"}
                    </button>
                </div>

                {menuOpen && (
                    <nav className="flex flex-col gap-4 border-t border-[#E0E9E2] bg-white px-6 py-5 text-sm md:hidden">
                        {[
                            ["サービス紹介", "#about"],
                            ["機能紹介", "#features"],
                            ["使い方", "#howto"],
                            ["FAQ", "#faq"],
                        ].map(([label, href]) => (
                            <a
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                )}
            </header>

            {/* ファーストビュー */}
            <section id="top" className="relative isolate overflow-hidden bg-[#FFF9EC]">
                <div className="pointer-events-none absolute -right-24 top-10 h-[530px] w-[530px] rounded-full bg-[#F9E6BB] md:right-[-60px]" />
                <div className="pointer-events-none absolute bottom-8 left-[45%] h-28 w-28 rounded-full bg-[#F2AA58]/35" />

                <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-16 md:min-h-[650px] md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20">
                    <div>
                        <HeroItem delay={0.12} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9DED0] bg-white px-4 py-2 text-[11px] font-semibold tracking-[0.08em] text-[#397457]">
                            <span className="h-2 w-2 rounded-full bg-[#5E9E79]" />
                            HEALTH MANAGEMENT SERVICE
                        </HeroItem>

                        <h1 className="text-[34px] font-bold leading-[1.55] tracking-[0.015em] sm:text-[42px] md:text-[46px]">
                            <HeroItem delay={0.3}>体調も、お薬も。</HeroItem>
                            <HeroItem delay={0.5} className="text-[#D9853D]">毎日の健康を、</HeroItem>
                            <HeroItem delay={0.7}>ひとつに。</HeroItem>
                        </h1>

                        <HeroItem delay={0.95}>
                            <p className="mt-6 max-w-[460px] text-[14px] leading-[2.1] text-[#5D7466] md:text-[15px]">
                                体調の記録、服薬の管理、通院予定まで。
                                <br className="hidden sm:block" />
                                毎日の健康情報をまとめて、もっとわかりやすく。
                            </p>

                        </HeroItem>
                        <HeroItem delay={1.12}>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="#features"
                                    className="rounded-full bg-[#F2AA58] px-7 py-4 text-[13px] font-bold text-[#244B3D] shadow-[0_8px_22px_rgba(242,170,88,0.25)] transition hover:-translate-y-0.5 hover:bg-[#F5BF79]"
                                >
                                    できることを見る <span className="ml-3">↗</span>
                                </a>
                                <a
                                    href="#about"
                                    className="rounded-full border border-[#B7D0C0] bg-white px-7 py-4 text-[13px] font-bold text-[#244B3D] transition hover:bg-[#EDF5EF]"
                                >
                                    サービスについて ↓
                                </a>
                            </div>

                        </HeroItem>
                        <HeroItem delay={1.3}>
                            <p className="mt-7 text-[11px] text-[#809387]">
                                ※ ポートフォリオ用の架空サービスです
                            </p>
                        </HeroItem>
                    </div>

                    <HeroVisual />
                </div>
            </section>

            {/* お悩み */}

            <section
                id="about"
                className="relative scroll-mt-24 overflow-hidden bg-[#FFF9EF] py-20 md:py-28"
            >
                {/* 背景装飾 */}
                <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#E2EEE4]/70 blur-3xl" />
                <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#E8EDE2]/70 blur-3xl" />

                <div className="relative mx-auto max-w-6xl px-5 md:px-8">

                    {/* お悩みセクション見出し */}
                    <div className="relative mx-auto mb-12 max-w-5xl md:mb-16">
                        <div className="flex items-center justify-center gap-4 md:gap-8">

                            {/* 左イラスト */}
                            <motion.img
                                src="/worry-person01.png"
                                alt=""
                                className="hidden w-[100px] shrink-0 object-contain md:block lg:w-[130px]"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            />

                            {/* 中央：文章は変更なし */}
                            <Reveal className="min-w-0 text-center" delay={0.1} direction="soft">
                                <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-[#C48642]">
                                    YOUR DAILY CONCERNS
                                </p>

                                <h2 className="text-[24px] font-bold leading-[1.7] text-[#244B3D] md:text-[32px]">
                                    毎日の健康管理、
                                    <br />
                                    こんな
                                    <span className="relative inline-block text-[#D68B3F]">
                                        <span className="relative z-10">モヤモヤ</span>
                                        <span
                                            className="absolute bottom-[2px] left-0 h-[9px] w-full rounded-full bg-[#F8D77C]/70"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    ありませんか？
                                </h2>


                                <p className="mt-5 text-[13px] leading-[2] text-[#73877A] md:text-[14px]">
                                    ちょっとした不安や、毎日の小さな困りごと。
                                    <br />
                                    健康管理には、意外と手間がかかるものです。
                                </p>
                            </Reveal>

                            {/* 右イラスト */}
                            <motion.img
                                src="/worry-person02.png"
                                alt=""
                                className="hidden w-[100px] shrink-0 object-contain md:block lg:w-[130px]"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                        </div>

                        {/* スマホでは見出しの下にイラストを配置 */}
                        <Reveal className="mt-5 flex items-end justify-center gap-10 md:hidden" delay={0.15}>
                            <img
                                src="/worry-person01.png"
                                alt=""
                                className="h-[100px] w-auto object-contain"
                            />
                            <img
                                src="/worry-person02.png"
                                alt=""
                                className="h-[100px] w-auto object-contain"
                            />
                        </Reveal>
                    </div>

                    {/* お悩みカード */}
                    <div className="grid gap-5 md:grid-cols-3">
                        {[
                            {
                                number: "01",
                                label: "HEALTH RECORD",
                                image: "/worry01.jpg",
                                title: "あれ、昨日の体調って\nどうだったっけ…？",
                                text: "体調の変化を覚えておくのは意外と大変。\nあとから振り返りたいのに思い出せない。",
                            },
                            {
                                number: "02",
                                label: "MEDICATION",
                                image: "/worry02.jpg",
                                title: "今日のお薬、\nもう飲んだかな…？",
                                text: "飲む時間や回数が決まっているお薬。\n忙しい毎日では、つい確認が面倒に。",
                            },
                            {
                                number: "03",
                                label: "SCHEDULE",
                                image: "/worry03.jpg",
                                title: "次の通院日、\nいつだったかな…？",
                                text: "診察券やメモ、カレンダー。\n予定があちこちに分かれていて確認しづらい。",
                            },
                        ].map((item) => (
                            <CardReveal key={item.number} className="h-full" index={Number(item.number) - 1} direction="zoom">
                                <div className="group relative flex h-full flex-col rounded-[26px] border border-[#DDE8DF] bg-white px-7 pb-9 pt-8 shadow-[0_12px_35px_rgba(39,75,55,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(39,75,55,0.09)]">

                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-semibold tracking-[0.15em] text-[#91A99A]">
                                            {item.label}
                                        </span>
                                        <span className="text-[12px] text-[#A7BBAE]">
                                            {item.number}
                                        </span>
                                    </div>

                                    {/* PNGイラスト */}
                                    <div className="relative my-7 flex h-[170px] items-center justify-center rounded-[22px] bg-[#FFF3D9] md:h-[190px]">
                                        <div className="pointer-events-none absolute left-5 top-5 h-12 w-12 rounded-full bg-[#DDEDE1]/70" />
                                        <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 rounded-full bg-[#E6EFE5]" />

                                        <img
                                            src={item.image}
                                            alt={item.title.replace(/\n/g, "")}
                                            className="relative z-10 h-[85%] w-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <h3 className="whitespace-pre-line text-center text-[17px] font-bold leading-[1.9] text-[#2C5040] md:text-[18px]">
                                        {item.title}
                                    </h3>

                                    <div className="mx-auto my-6 h-px w-12 bg-[#C9DCCF]" />

                                    <p className="whitespace-pre-line text-center text-[13px] leading-[2] text-[#73877A]">
                                        {item.text}
                                    </p>
                                </div>
                            </CardReveal>
                        ))}
                    </div>
                    {/* お悩みから解決への誘導 */}
                    <Reveal>
                        <div className="relative flex flex-col items-center pb-7 pt-14 text-center md:pt-20">

                            <p className="mb-3 text-[11px] font-bold tracking-[0.18em] text-[#6A9A7B]">
                                SOLUTION
                            </p>

                            <h3 className="text-[21px] font-bold leading-[1.8] tracking-[0.04em] text-[#244B3D] md:text-[28px]">
                                そんな毎日のお悩み、
                                <br className="md:hidden" />
                                <span className="text-[#D9853D]">
                                    まとめて解決！
                                </span>
                            </h3>

                            <p className="mt-3 text-[13px] leading-7 text-[#728579] md:text-[14px]">
                                よりそい健康ノートが、
                                <br className="md:hidden" />
                                あなたの健康管理をサポートします。
                            </p>

                            {/* 下向き矢印：3連アニメーション */}
                            <div
                                className="mt-8 flex flex-col items-center gap-[9px] md:mt-10"
                                aria-hidden="true"
                            >
                                {[0, 1, 2].map((i) => (
                                    <motion.span
                                        key={i}
                                        className="block h-[20px] w-[58px] bg-[#F5C95B] md:h-[24px] md:w-[70px]"
                                        style={{
                                            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                                        }}
                                        animate={{
                                            opacity: [0.35, 1, 0.35],
                                            y: [-3, 3, -3],
                                        }}
                                        transition={{
                                            duration: 1.8,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                            ease: "easeInOut",
                                        }}
                                    />
                                ))}
                            </div>

                        </div>
                    </Reveal>

                    {/* 解決への導線 */}
                    <Reveal>
                        <div className="relative mt-8 overflow-hidden rounded-[30px] border border-[#F0DDAF] bg-[#FFF0CF] px-6 py-12 text-center md:mt-4 md:px-8 md:py-16">

                            {/* 装飾 */}
                            <div className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/40" />
                            <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-[#CDE5D4]/60" />

                            <div className="relative z-10">
                                <p className="mb-5 text-[11px] font-bold tracking-[0.18em] text-[#5A9872]">
                                    A SIMPLE WAY TO CARE
                                </p>

                                <h3 className="text-[22px] font-bold leading-[1.8] tracking-[0.03em] text-[#244B3D] md:text-[30px]">
                                    毎日の健康管理を、
                                    <br />
                                    <span className="text-[#D9853D]">
                                        もっと簡単に、もっと安心に。
                                    </span>
                                </h3>

                                <p className="mx-auto mt-5 max-w-[620px] text-[13px] leading-[2] text-[#60796A] md:text-[14px]">
                                    体調の記録も、お薬の管理も、通院予定も。
                                    <br className="hidden md:block" />
                                    必要な情報をひとつにまとめて、毎日の確認をスムーズに。
                                    <br className="hidden md:block" />
                                    健康管理を無理なく続けられるようサポートします。
                                </p>

                                <a
                                    href="#features"
                                    className="mt-8 inline-flex items-center gap-4 rounded-full bg-[#244B3D] px-8 py-4 text-[13px] font-bold text-white shadow-[0_8px_20px_rgba(36,75,61,0.18)] transition hover:-translate-y-0.5 hover:bg-[#397457]"
                                >
                                    できることを見る
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </section>

            {/* サービス紹介 */}
            <section className="relative overflow-hidden bg-[#244B3D] py-20 text-white md:py-20">
                {/* 背景装飾 */}
                <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -right-24 bottom-[-160px] h-96 w-96 rounded-full border border-white/10" />

                <div className="relative mx-auto max-w-6xl px-5 md:px-8">
                    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
                        {/* 左：テキスト */}
                        <div className="text-center md:text-left">
                            <Reveal delay={0}><p className="text-[11px] font-bold tracking-[0.2em] text-[#F5D96B]">
                                ONE PLACE FOR YOUR HEALTH
                            </p></Reveal>

                            <Reveal delay={0.18}><h2 className="mt-6 text-[26px] font-bold leading-[1.7] tracking-[0.04em] md:text-[36px]">
                                健康管理に必要なことを、
                                <br />
                                <span className="text-[#F5D96B]">
                                    このアプリひとつで。
                                </span>
                            </h2></Reveal>

                            <Reveal delay={0.36}><p className="mt-6 text-[13px] leading-[2] text-[#D8E9DE] md:text-[14px]">
                                体調の記録も、お薬の管理も、通院予定も。
                                <br />
                                毎日の健康情報をまとめて確認できる、
                                <br className="hidden md:block" />
                                シンプルな健康管理アプリです。
                            </p></Reveal>
                        </div>

                        {/* 右：イラスト */}
                        <Reveal delay={0.2} direction="right" className="relative mx-auto w-full max-w-[460px]">
                            <div className="absolute inset-6 rounded-full bg-[#40775A]/50 blur-2xl" />

                            <img
                                src="/service-health.jpg"
                                alt="スマートフォンで健康管理をする人物"
                                className="relative z-10 w-full object-contain"
                            />
                        </Reveal>
                    </div>


                    {/* 3つの機能カード */}
                    <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
                        {[
                            { n: "01", icon: "♡", title: "体調を記録する" },
                            { n: "02", icon: "✓", title: "お薬を管理する" },
                            { n: "03", icon: "▦", title: "通院予定を確認する" },
                        ].map((item, i) => (
                            <CardReveal key={item.n} index={i} direction="zoom" className="group h-full cursor-default">
                                <div className="flex h-full flex-col items-center justify-center rounded-[26px] border border-white/20 bg-white/10 px-6 py-10 text-center transition-colors duration-300 group-hover:border-[#F8D77C]/70 group-hover:bg-white/15 group-hover:shadow-[0_18px_35px_rgba(0,0,0,0.12)] md:min-h-[240px]">

                                    {/* アイコン */}
                                    <motion.div
                                        whileHover={
                                            reduced
                                                ? undefined
                                                : {
                                                    rotate: [0, -12, 10, 0],
                                                    scale: [1, 1.14, 1.08],
                                                }
                                        }
                                        transition={{ duration: 0.55 }}
                                        className="mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#FFF0C5] text-[34px] font-light text-[#244B3D] transition-colors duration-300 group-hover:bg-[#F8D77C]"
                                    >
                                        {item.icon}
                                    </motion.div>

                                    {/* FEATURE番号 */}
                                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#A8D0B7]">
                                        FEATURE {item.n}
                                    </p>

                                    {/* タイトル */}
                                    <h3 className="mt-4 text-[17px] font-bold text-white md:text-[19px]">
                                        {item.title}
                                    </h3>
                                </div>
                            </CardReveal>
                        ))}
                    </div>

                    {/* 次のセクションへの誘導 */}
                    <div>
                        <Reveal className="mt-12 flex flex-col items-center md:mt-16" y={25}>
                            <a
                                href="#features"
                                className="group flex flex-col items-center gap-5"
                                aria-label="3つの機能を詳しく見る"
                            >
                                <Reveal delay={0}><p className="text-[15px] font-bold tracking-[0.08em] text-white transition-colors group-hover:text-[#D7EDDD] md:text-[17px]">
                                    3つの機能を詳しく見る
                                </p></Reveal>

                                {/* アニメーション矢印 */}
                                <div className="relative flex h-[92px] w-[92px] items-center justify-center">

                                    {/* 外側に広がるリング */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full border border-[#F5D96B]/75"
                                        animate={{
                                            scale: [0.85, 1.2, 0.85],
                                            opacity: [0.7, 0.15, 0.7],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    {/* 内側の装飾リング */}
                                    <div className="absolute inset-[10px] rounded-full border border-white/25" />

                                    {/* 矢印の背景 */}
                                    <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#F5D96B] shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-110">

                                        {/* 下向き矢印 */}
                                        <motion.svg
                                            width="26"
                                            height="30"
                                            viewBox="0 0 26 30"
                                            fill="none"
                                            aria-hidden="true"
                                            animate={{ y: [-4, 5, -4] }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <path
                                                d="M13 2V26M3 16L13 26L23 16"
                                                stroke="#244B3D"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </motion.svg>
                                    </div>
                                </div>
                            </a>
                        </Reveal>
                    </div>

                </div>
            </section>

            {/* FEATURES */}
            <section
                id="features"
                className="scroll-mt-24 bg-[#FBFCFA] py-20 md:py-24"
            >
                <div className="mx-auto max-w-6xl px-5 md:px-8">

                    {/* 見出し */}
                    <div>
                        <div className="mb-10 text-center md:mb-12">
                            <Reveal delay={0}><p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-[#C48642]">
                                FEATURES
                            </p></Reveal>

                            <Reveal delay={0.18}><h2 className="text-[25px] font-bold leading-[1.6] text-[#244B3D] md:text-[34px]">
                                毎日の健康管理を支える、
                                <br className="md:hidden" />
                                <span className="text-[#D68B3F]">3つの機能</span>
                            </h2></Reveal>

                            <Reveal delay={0.36}><p className="mt-4 text-[13px] leading-7 text-[#6B8072] md:text-[14px]">
                                アプリの画面と一緒に、できることをご紹介します。
                            </p></Reveal>
                        </div>
                    </div>

                    {/* 3つの機能 */}
                    <div className="grid gap-5 md:grid-cols-3">
                        {features.map((f, i) => (
                            <CardReveal key={f.number} index={i} direction="zoom" className="h-full">
                                <div
                                    className="flex h-full flex-col rounded-[26px] border border-[#E3E9E2] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(39,75,55,0.08)] md:p-6"
                                    style={{
                                        backgroundColor:
                                            i === 0
                                                ? "#EFF6F1"
                                                : i === 1
                                                    ? "#FFF4E3"
                                                    : "#EEF3F8",
                                    }}
                                >

                                    {/* FEATURE番号 */}
                                    <div className="mb-6 flex items-center justify-between gap-2">
                                        <span className="text-[12px] font-bold tracking-[0.04em] text-[#C48642]">
                                            FEATURE {f.number}
                                        </span>

                                        <span className="text-[10px] tracking-[0.08em] text-[#809588]">
                                            {f.eyebrow}
                                        </span>
                                    </div>

                                    {/* スマホ表示エリア */}
                                    <div className="flex items-center justify-center rounded-[20px] bg-white/60 px-4 py-5">
                                        <div className="w-full max-w-[205px]">
                                            <Phone kind={f.kind} compact />
                                        </div>
                                    </div>


                                    {/* 機能説明 */}
                                    <div className="flex flex-1 flex-col pt-6">

                                        <h3 className="whitespace-pre-line text-[19px] font-bold leading-[1.6] text-[#244B3D] md:text-[20px]">
                                            {f.title}
                                        </h3>

                                        <p className="whitespace-pre-line mt-3 text-[13px] leading-[1.9] text-[#63776A]">
                                            {f.body}
                                        </p>

                                        {/* タグ */}
                                        <div className="mt-auto flex flex-wrap gap-2 pt-5">
                                            {f.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-[#D6E2D7] bg-white/80 px-3 py-2 text-[10px] font-semibold text-[#4F765D]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </CardReveal>
                        ))}
                    </div>

                </div>
            </section>

            {/* 使い方 */}
            <section
                id="howto"
                className="relative scroll-mt-24 overflow-hidden bg-[#FFF8EA] py-20 md:py-28"
            >
                {/* 背景装飾 */}
                <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#FBE6B7]/50 blur-3xl" />
                <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#E4F0E3]/70 blur-3xl" />

                <div className="relative mx-auto max-w-6xl px-5 md:px-8">
                    <div>
                        <div className="mb-12 text-center md:mb-16">
                            <Reveal delay={0}><p className="mb-4 text-[11px] font-bold tracking-[0.2em] text-[#C28B47]">
                                HOW TO USE
                            </p></Reveal>

                            <Reveal delay={0.18}><h2 className="text-[26px] font-bold leading-[1.6] text-[#244B3D] md:text-[34px]">
                                使い方は、かんたん
                                <span className="relative ml-1 inline-block text-[#D68B3F]">
                                    3ステップ
                                    <span className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-[#F5D96B]/70" />
                                </span>
                            </h2></Reveal>

                            <Reveal delay={0.36}><p className="mt-5 text-[13px] leading-8 text-[#687A6D] md:text-[14px]">
                                むずかしい操作は必要ありません。
                                <br className="md:hidden" />
                                毎日の健康管理を、気軽に続けられます。
                            </p></Reveal>
                        </div>
                    </div>

                    <div className="relative grid gap-8 md:grid-cols-3 md:gap-7">
                        {[
                            {
                                number: "01",
                                title: "今日の体調を記録",
                                text: "その日の気分や体調を選んで、\nかんたんに記録できます。",
                                type: "health",
                            },
                            {
                                number: "02",
                                title: "お薬・予定を確認",
                                text: "服薬状況や次の通院予定を、\nひとつの画面でチェック。",
                                type: "schedule",
                            },
                            {
                                number: "03",
                                title: "記録を振り返る",
                                text: "過去の記録を見ながら、\n日々の体調の変化を確認できます。",
                                type: "chart",
                            },
                        ].map((step, i) => (
                            <CardReveal key={step.number} className="relative h-full" index={i} direction="up">
                                <div className="relative flex h-full flex-col rounded-[26px] border border-[#F0E6D3] bg-white px-6 pb-9 pt-8 shadow-[0_12px_30px_rgba(97,77,42,0.05)] md:px-7">

                                    {/* STEP番号 */}
                                    <div className="mb-7 flex items-center justify-between">
                                        <span className="rounded-full bg-[#F5D96B] px-4 py-2 text-[12px] font-bold tracking-[0.08em] text-[#244B3D]">
                                            STEP {step.number}
                                        </span>
                                        <span className="text-[11px] font-semibold text-[#D5B68A]">
                                            0{i + 1} / 03
                                        </span>
                                    </div>

                                    {/* アプリ操作イメージ */}
                                    <div className="mb-7 flex h-[225px] items-center justify-center rounded-[20px] bg-[#EDF5EF] px-5 py-6">
                                        <div className="w-full max-w-[235px] rounded-[18px] border border-[#E0EAE2] bg-white p-4 shadow-[0_8px_20px_rgba(39,75,55,0.08)]">

                                            {step.type === "health" && (
                                                <>
                                                    <p className="text-[10px] font-bold text-[#244B3D]">
                                                        今日の体調はいかがですか？
                                                    </p>
                                                    <div className="mt-5 flex justify-between text-[26px]">
                                                        <span>😊</span>
                                                        <span>🙂</span>
                                                        <span>😐</span>
                                                        <span>😔</span>
                                                    </div>
                                                    <div className="mt-5 rounded-full bg-[#397B5E] py-2 text-center text-[10px] font-bold text-white">
                                                        記録する
                                                    </div>
                                                </>
                                            )}

                                            {step.type === "schedule" && (
                                                <>
                                                    <p className="mb-3 text-[11px] font-bold text-[#244B3D]">
                                                        今日の予定
                                                    </p>
                                                    <div className="flex items-center justify-between rounded-xl bg-[#EDF5EF] px-3 py-3">
                                                        <span className="text-[10px] text-[#244B3D]">
                                                            朝のお薬
                                                        </span>
                                                        <span className="text-[14px] font-bold text-[#397B5E]">
                                                            ✓
                                                        </span>
                                                    </div>
                                                    <div className="mt-2 flex items-center justify-between rounded-xl bg-[#FFF3DE] px-3 py-3">
                                                        <span className="text-[10px] text-[#244B3D]">
                                                            次回の通院
                                                        </span>
                                                        <span className="text-[10px] font-bold text-[#C27C35]">
                                                            10/15
                                                        </span>
                                                    </div>
                                                </>
                                            )}

                                            {step.type === "chart" && (
                                                <>
                                                    <p className="text-[11px] font-bold text-[#244B3D]">
                                                        最近の体調記録
                                                    </p>
                                                    <div className="mt-5 flex h-[85px] items-end justify-between gap-2">
                                                        {[42, 68, 54, 80, 63, 92, 74].map((h, j) => (
                                                            <div
                                                                key={j}
                                                                className={`flex-1 rounded-t-md ${j === 5 ? "bg-[#F2AA58]" : "bg-[#91C3A2]"
                                                                    }`}
                                                                style={{ height: `${h}%` }}
                                                            />
                                                        ))}
                                                    </div>
                                                    <div className="mt-2 flex justify-between text-[9px] text-[#91A396]">
                                                        <span>月</span>
                                                        <span>火</span>
                                                        <span>水</span>
                                                        <span>木</span>
                                                        <span>金</span>
                                                        <span>土</span>
                                                        <span>日</span>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* テキスト */}
                                    <h3 className="text-center text-[19px] font-bold text-[#244B3D]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 text-center text-[13px] leading-[1.9] text-[#718375] whitespace-pre-line">
                                        {step.text}
                                    </p>
                                </div>

                                {/* 次のステップへの矢印：PCのみ */}
                                {i < 2 && (
                                    <div className="pointer-events-none absolute -right-[28px] top-[45%] z-10 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-[#FFF8EA] bg-[#F5D96B] text-[23px] font-bold text-[#244B3D] md:flex">
                                        →
                                    </div>
                                )}
                            </CardReveal>
                        ))}
                    </div>

                    {/* 補足 */}
                    <Reveal>
                        <p className="mt-10 text-center text-[12px] leading-7 text-[#7B8B7C] md:mt-12">
                            毎日少しずつ、自分のペースで。
                            <br className="md:hidden" />
                            無理なく続けられる健康管理を目指しています。
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24 bg-[#F5F8F3] py-20 md:py-28">
                <div className="mx-auto max-w-3xl px-5 md:px-8">
                    <Reveal>
                        <SectionTitle en="FAQ" title="よくあるご質問" />
                    </Reveal>

                    <div className="space-y-3">
                        {faqs.map((f, i) => (
                            <Reveal key={f.q} delay={(i % 2) * 0.1} direction="soft">
                                <div
                                    className="overflow-hidden rounded-2xl border border-[#DFEAE2] bg-white"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        aria-expanded={openFaq === i}
                                        className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left md:px-7"
                                    >
                                        <span className="flex gap-3 text-[14px] font-bold leading-6">
                                            <span className="text-[#5C9B73]">Q.</span>
                                            {f.q}
                                        </span>
                                        <span className="text-xl text-[#D4873F]">
                                            {openFaq === i ? "−" : "＋"}
                                        </span>
                                    </button>

                                    {openFaq === i && (
                                        <div className="border-t border-[#ECF1ED] px-5 py-5 text-[13px] leading-8 text-[#64786C] md:px-7">
                                            {f.a}
                                        </div>
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 最終CTA */}
            <section className="bg-[#244B3D] px-5 py-20 text-center text-white md:py-28">
                <Reveal>
                    <p className="text-[11px] tracking-[0.2em] text-[#B4D6C0]">
                        YOUR HEALTH, YOUR PACE
                    </p>
                    <h2 className="mt-5 text-[26px] font-bold leading-[1.65] md:text-[36px]">
                        毎日の健康管理を、
                        <br />
                        もっと身近に。
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-[14px] leading-8 text-[#D5E6DA]">
                        体調も、お薬も、通院予定も。
                        <br />
                        必要な情報をひとつにまとめる、新しい健康管理のかたち。
                    </p>
                    <a
                        href="#features"
                        className="mt-9 inline-flex rounded-full bg-[#F5D96B] px-9 py-4 text-[13px] font-bold text-[#244B3D] shadow-[0_8px_24px_rgba(245,217,107,0.2)] transition hover:-translate-y-0.5 hover:bg-[#FFE48D]"
                    >
                        サービスの機能を見る ↗
                    </a>
                    <p className="mt-6 text-[11px] text-[#B6D1BE]">
                        ※ 本サイトは自主制作の架空サービス紹介ページです。
                    </p>
                </Reveal>
            </section>

            {/* フッター */}
            <footer className="bg-[#18382D] px-5 py-7 text-center text-[11px] text-[#BCD3C3]">
                <Reveal direction="soft">© よりそい健康ノート — Personal Portfolio Project</Reveal>
            </footer>
        </main>
    );
}
