"use client";
import { useState, useEffect } from "react"
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import WaveCanvas from "@/components/WaveCanvas";
import Image from "next/image"

type Work = {
  title: string
  category: string
  image: string
  popupImage: string
  href: string
  description: string
  tags: string[]
}

export default function Home() {

  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  useEffect(() => {
    if (!selectedWork) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedWork(null)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [selectedWork])
  const tagStyle: Record<string, string> = {
    実務: "bg-[#F7F5F2] text-[#625B57] border-[#DED6D2]",
    自主制作: "bg-[#F7F5F2] text-[#625B57] border-[#DED6D2]",
    HTML: "bg-[#F7F5F2] text-[#625B57] border-[#DED6D2]",
    CSS: "bg-[#F7F5F2] text-[#625B57] border-[#DED6D2]",
    JavaScript: "bg-[#F7F5F2] text-[#625B57] border-[#DED6D2]",
  }
  const works: Work[] = [{
    title: "建設業",
    category: "Corporate Site",
    image: "/kizuna.png",
    popupImage: "/kizuna01.png",
    href: "/works/kizuna",
    description:
      "動画を活かしたファーストビューや、スクロールに合わせてコンテンツ・画像が\n切り替わる動きを取り入れ、企業の魅力を印象的に伝えられるサイトを制作しました。",
    tags: ["Design", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "福祉事業",
    category: "Corporate Site",
    image: "/welfare.png",
    popupImage: "/welfare01.png",
    href: "/works/welfare",
    description:
      "利用者やご家族に安心感が伝わるよう、写真を活かした親しみやすいデザインと、\n事業内容を分かりやすく伝える情報設計を意識して制作しました。",
    tags: ["Design", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "製造業",
    category: "Corporate Site",
    image: "/tbk.png",
    popupImage: "/tbk01.png",
    href: "/works/tbk",
    description:
      "製品情報・加工内容・採用情報を分かりやすく伝えることを目的に、\n情報整理と視認性を意識して制作しました。",
    tags: ["Design", "HTML", "CSS", "JavaScript"]
  },
  // {
  //   title: "体操クラブ",
  //   category: "Column Site",
  //   image: "/besk.jpg",
  //   popupImage: "/besk01.png",
  //   href: "/works/besc-gym-yume",
  //   description:
  //     "子ども向けサービスとしての親しみやすさと安心感を重視し、保護者にも信頼感が伝わるよう写真表現やレイアウトを工夫して制作しました。",
  //   tags: ["Design", "HTML", "CSS", "JavaScript"]
  // },
  // {
  //   title: "美容室",
  //   category: "Salon Site",
  //   image: "/shigeki.png",
  //   popupImage: "/shigeki01.png",
  //   href: "/works/hairsalon-sigeki",
  //   description:
  //     "店舗の世界観や雰囲気が伝わるよう、写真を活かしたビジュアル設計と余白のバランスを意識して制作しました。",
  //   tags: ["Design", "HTML", "CSS", "JavaScript"]
  // },
  {
    title: "観光バス会社",
    category: "Travel Site",
    image: "/nagano.png",
    popupImage: "/nagano01.png",
    href: "/works/nagano-trip",
    description:
      "観光プランやサービス内容を分かりやすく伝えるため、\n情報整理と視認性を意識して制作しました。",
    tags: ["Design", "HTML", "CSS", "JavaScript"]
  },
  ];

  return (
    <>
      <Navbar />
      <motion.main
        className="relative min-h-screen bg-background text-foreground overflow-x-hidden"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative z-10 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero */}
            <section className="relative min-h-[80vh] flex items-center py-20 md:py-28">
              <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
                <div className="text-center md:text-left">
                  <p className="mb-6 text-[11px] tracking-[0.25em] text-[#965564]">WEB DESIGNER & CODER</p>
                  <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.2] tracking-[0.01em] text-foreground">Yu Yanagisawa</h1>
                  <div className="mx-auto my-8 h-px w-12 bg-[#B79D95] md:ml-0" />
                  <p className="text-base md:text-xl leading-loose tracking-[0.08em] text-foreground">想いを汲み取り、伝わるデザインへ。</p>
                  <p className="mt-5 text-sm leading-8 text-[#625B57]">デザインから実装まで、目的に寄り添ったWebサイトを制作します。</p>
                  <a href="#works" className="group mt-10 inline-flex items-center gap-8 border-b border-[#B79D95] pb-3 text-xs tracking-[0.2em] text-foreground transition hover:text-[#965564]">VIEW WORKS <span className="transition-transform group-hover:translate-x-1">↗</span></a>
                </div>
                <div className="mx-auto w-full max-w-[330px] md:max-w-[390px]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-t-[170px] rounded-b-[12px] bg-secondary shadow-[0_18px_50px_rgba(57,55,53,0.08)]">
                    <Image src="/profile.jpg" alt="Yu Yanagisawaのプロフィール写真" fill sizes="(max-width: 768px) 330px, 390px" className="object-cover" priority />
                  </div>
                  <p className="mt-4 text-center text-[10px] tracking-[0.25em] text-muted">WEB DESIGN / CODING</p>
                </div>
              </div>
            </section>
            {/* Wave */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
            <div className="w-full relative z-10 -mt-20 -mb-20">
              <WaveCanvas />
            </div>
            {/* Works */}
            <section id="works" className="relative pt-24 md:pt-32 pb-28">
              <div className="pointer-events-none absolute inset-0">
                <div className="
      absolute top-[-180px] right-[-200px]
      w-[420px] h-[420px]
      rounded-full
      bg-primary/20
      blur-[180px]
      opacity-80
    " />

                <div className="
      absolute bottom-[-200px] left-[-180px]
      w-[460px] h-[460px]
      rounded-full
      bg-secondary
      blur-[160px]
      opacity-60
    " />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
              <div className="mb-12 md:mb-16 text-center">
                <h2 className="font-editorial text-4xl md:text-5xl font-normal tracking-[0.06em] text-[#B79D95] leading-tight">
                  WORKS
                </h2>

                <p className="mt-4 text-xs md:text-sm tracking-[0.15em] text-[#965564]">
                  制作実績
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
                {works.map((work) => (
                  <button
                    key={work.title}
                    onClick={() => setSelectedWork(work)}
                    className="
                    group text-left rounded-3xl border border-border bg-primary/70
                    p-5 transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:scale-[1.015]
                    hover:border-primary hover:shadow-xl
                    cursor-pointer
                    will-change-transform
                    "
                  >
                    <div className="overflow-hidden rounded-xl mb-4 md:mb-5">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="mb-4 md:mb-5 rounded-xl h-40 md:h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">
                      {work.category}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {work.tags.map((tag) => {
                        const style = tagStyle[tag] || "bg-[#F7F5F2] text-[#625B57] border-[#DED6D2]"

                        return (
                          <span
                            key={tag}
                            className={`text-xs px-3 py-1 rounded-full border font-medium tracking-[0.02em] ${style}`}
                          >
                            {tag}
                          </span>
                        )
                      })}
                    </div>

                    <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                      {work.title}
                    </h3>

                    <p className="text-sm text-muted leading-6 min-h-[72px] whitespace-pre-line">
                      {work.description}
                    </p>
                  </button>
                ))}
                {selectedWork && (
                  <div
                    className="fixed inset-0 z-50 flex items-start justify-center bg-[#393735]/70 px-5 pt-24 md:pt-28"
                    onClick={() => setSelectedWork(null)}
                  >
                    <div
                      className="relative w-full max-w-4xl max-h-[82vh] rounded-3xl bg-background border border-border"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* ×ボタン：常に右上に表示 */}
                      <button
                        onClick={() => setSelectedWork(null)}
                        className="absolute right-5 top-5 z-10 text-muted hover:text-foreground text-2xl"
                      >
                        ×
                      </button>

                      {/* スクロールする部分 */}
                      <div className="max-h-[82vh] overflow-y-auto p-5 md:p-8">
                        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2 whitespace-pre-line">
                              {selectedWork.category}
                            </p>

                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                              {selectedWork.title}
                            </h3>

                            <p className="text-foreground leading-7 max-w-2xl whitespace-pre-line">
                              {selectedWork.description}
                            </p>
                          </div>

                          <Link
                            href={selectedWork.href}
                            onClick={(e) => e.stopPropagation()}
                            className="shrink-0 inline-flex items-center justify-center rounded-full bg-primary text-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
                          >
                            詳細を見る
                          </Link>
                        </div>

                        <img
                          src={selectedWork.popupImage}
                          alt={selectedWork.title}
                          className="mx-auto w-full max-w-[280px] md:max-w-[340px] object-contain rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {/* TaskFlow */}
                <Link
                  href="/works/taskflow"
                  className="
                  group rounded-3xl border border-border bg-primary/70 p-5 block
                  transition-all duration-300 ease-out
                  will-change-transform
                  hover:-translate-y-2 hover:scale-[1.02]
                  hover:border-primary hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  active:scale-[0.99]
                  "
                >
                  <div className="transition-transform duration-500 group-hover:scale-[1.03]"></div>
                  <div className="rounded-xl mb-4 md:mb-5 h-40 md:h-52 bg-gradient-to-br from-secondary to-background border border-border p-5 overflow-hidden">
                    <div className="rounded-xl border border-border bg-secondary p-4">
                      <div className="flex justify-between mb-4">
                        <span className="font-semibold">Today</span>
                        <span className="text-xs text-muted">4 tasks</span>
                      </div>
                      <div className="space-y-2">
                        {["LP構成を確認", "UIパーツ作成", "レスポンシブ調整"].map((task) => (
                          <div key={task} className="rounded-lg bg-background p-3 text-sm text-foreground">
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                    TaskFlow
                  </h3>

                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="text-xs bg-secondary text-foreground px-3 py-1 rounded-full border border-border">
                      自主制作
                    </span>
                    <span className="text-xs bg-secondary text-foreground px-3 py-1 rounded-full border border-border">
                      Next.js
                    </span>
                    <span className="text-xs bg-secondary text-foreground px-3 py-1 rounded-full border border-border">
                      Frontend
                    </span>
                  </div>

                  <p className="text-sm text-muted leading-6 min-h-[72px]">
                    タスクの追加・編集・完了切り替えを直感的に行えるよう、
                    <br />
                    操作性と視認性を意識して制作したタスク管理UIです。
                  </p>
                </Link>
                {/* コスメ */}
                <Link
                  href="/works/cosme-ec"
                  className="
                  group rounded-3xl border border-border bg-primary/70 p-5 block
                  transition-all duration-300 ease-out
                  will-change-transform
                  hover:-translate-y-2 hover:scale-[1.02]
                  hover:border-primary hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  active:scale-[0.99]
                  "
                >
                  <div className="transition-transform duration-500 group-hover:scale-[1.03]"></div>
                  <div className="rounded-[1.5rem] mb-4 md:mb-5 h-40 md:h-52 bg-[#f3ede6] border border-black/5 p-5 overflow-hidden">
                    <div className="grid grid-cols-3 gap-3 h-full">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl bg-primary border border-black/5 p-3 flex flex-col justify-between"
                        >
                          <div className="rounded-xl bg-[#efe7dd] h-20 flex items-center justify-center">
                            <div className="h-12 w-6 rounded-t-full rounded-b-lg bg-[#d8c7b5]" />
                          </div>

                          <div>
                            <p className="text-[10px] text-[#9c8d80] mb-1">
                              skincare
                            </p>

                            <div className="h-2 rounded bg-[#1f1b18]/10 mb-1" />
                            <div className="h-2 w-2/3 rounded bg-[#1f1b18]/10" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                    Lumière Skin
                  </h3>

                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="text-xs bg-secondary text-foreground px-3 py-1 rounded-full border border-border">
                      自主制作
                    </span>

                    <span className="text-xs bg-secondary text-foreground border border-border px-3 py-1 rounded-full">
                      EC Design
                    </span>

                    <span className="text-xs bg-secondary text-foreground border border-border px-3 py-1 rounded-full">
                      購入導線を意識
                    </span>
                  </div>

                  <p className="text-sm text-muted leading-6 min-h-[72px]">
                    ブランドの世界観を表現しながら、
                    <br />
                    商品比較から購入までを分かりやすく設計した
                    <br />
                    コスメECサイトです。
                  </p>
                </Link>
              </div>
            </section>

            {/* About */}
            <section id="about" className="mb-28 relative">

              <div className="absolute inset-0 pointer-events-none -z-10">
                <div
                  className="
      animate-pulse blur-3xl rounded-full absolute

      w-[400px] h-[400px]
      top-[-200px] right-[-200px]

      bg-primary/15

      max-md:w-[260px]
      max-md:h-[260px]
      max-md:top-auto
      max-md:bottom-[-120px]
      max-md:right-[-80px]

      max-md:bg-primary/5
      max-md:blur-2xl
      max-md:opacity-70
    "
                />
              </div>
              <div className="mb-12">
                <div className="absolute top-8 right-10 w-24 h-24 border border-pink-300/10 rounded-full" />
                <div className="absolute top-16 right-20 w-40 h-40 border border-pink-300/5 rounded-full" />
                <div className="mb-12 md:mb-16 text-center">
                  <h2 className="font-editorial text-4xl md:text-5xl font-normal tracking-[0.06em] text-[#B79D95] leading-tight">
                    ABOUT
                  </h2>

                  <p className="mt-4 text-xs md:text-sm tracking-[0.15em] text-[#965564]">
                    私について
                  </p>
                </div>

                {/* 装飾ライン */}
                {/* <div className="mx-auto my-8 h-px w-10 bg-[#B79D95]" /> */}

                {/* 説明文 */}
                <p className="mx-auto max-w-2xl text-center text-sm md:text-base leading-9 tracking-[0.04em] text-[#625B57]">
                  Webデザインからコーディングまで一貫して対応し、
                  <br className="hidden md:block" />
                  目的や伝えたい情報を整理しながら、
                  <br className="hidden md:block" />
                  分かりやすいWebサイト制作を心がけています。
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8 items-stretch">
                <div className="rounded-[2rem] border border-border bg-white/80 p-6 md:p-10 shadow-[0_12px_40px_rgba(57,55,53,0.04)]">
                  <h3 className="font-editorial mb-6 text-3xl font-normal text-[#965564]">Experience</h3>
                  <div className="space-y-6 text-sm md:text-[15px] leading-8 text-[#514B47]">
                    <p>現在は事業会社にてWebデザイナーとして約1年半、コーポレートサイト・採用サイト・LP制作に携わっています。WebデザインからHTML/CSS・JavaScriptを用いたコーディング、レスポンシブ対応まで一貫して担当しています。</p>
                    <div className="h-px bg-border" />
                    <p>前職では広告代理店にて営業・企画書作成・ディレクション業務を経験し、制作においても「誰に何を伝えるサイトなのか」を意識しながら、情報の優先順位や見せ方を整理することを大切にしています。</p>
                  </div>
                </div>
                <div className="rounded-[2rem] border border-border bg-primary/45 p-6 md:p-10">
                  <h3 className="font-editorial mb-7 text-3xl font-normal text-[#704F50]">Mind</h3>
                  <ul className="space-y-5">
                    {[
                      "目的やターゲットに合わせて、情報の見せ方を整理することを大切にしています。",
                      "デザイン意図を理解したうえで、実装まで一貫して対応することを心がけています。",
                      "見た目だけでなく、ユーザーにとって分かりやすい導線や視認性も意識して制作します。",
                    ].map((item, index) => (
                      <li key={item} className="flex gap-4 border-b border-[#B79D95]/40 pb-4 last:border-0 last:pb-0">
                        <span className="font-editorial shrink-0 text-xl leading-8 text-[#704F50]">0{index + 1}</span>
                        <span className="text-sm leading-8 text-[#393735]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Profile */}
            <section className="mb-28 relative overflow-hidden">

              <div className="mb-12 md:mb-16 text-center">
                <h2 className="font-editorial text-4xl md:text-5xl font-normal tracking-[0.06em] text-[#B79D95] leading-tight">
                  PROFILE
                </h2>

                <p className="mt-4 text-xs md:text-sm tracking-[0.15em] text-[#965564]">
                  経歴と強み
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-[2rem] border border-border bg-gradient-to-br from-primary/[0.04] to-white/[0.025] p-8 md:p-10">
                  <h3 className="font-editorial text-3xl font-normal tracking-[0.03em] mb-7 text-[#704F50]">
                    Career
                  </h3>

                  <div className="space-y-8">
                    <div className="relative pl-8">

                      {/* 縦ライン */}
                      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                      {/* 丸 */}
                      <span className="absolute -left-[4px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(251,207,232,.8)]" />

                      <p className="text-sm text-muted mb-2">現在</p>
                      <p className="text-foreground leading-8">
                        事業会社にてWebデザイナーとして、コーポレートサイトや採用サイト、LP制作に携わっています。<br />
                        WebデザインからHTML/CSS・JavaScriptを用いたコーディング、<br />
                        レスポンシブ対応まで一貫して担当しています。
                      </p>
                    </div>

                    <div className="relative pl-8">
                      <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary" />
                      <p className="text-sm text-muted mb-2">前職</p>
                      <p className="text-foreground leading-8">
                        広告代理店にて、営業・企画書作成・ディレクション業務を経験しました。<br />
                        その経験を活かし、現在の制作でも「誰に何を伝えるか」を意識しながら、<br />
                        情報の見せ方や訴求の整理を大切にしています。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-border bg-gradient-to-br from-primary/[0.045] to-white/[0.025] p-8 md:p-10">
                  <h3 className="font-editorial text-3xl font-normal tracking-[0.03em] mb-7 text-[#704F50]">
                    Strength
                  </h3>

                  <div className="space-y-5">
                    {[
                      "情報の優先順位を整理し、分かりやすく見せること",
                      "デザイン意図を踏まえたコーディング・実装",
                      "目的やターゲットを意識したサイト制作",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                      flex gap-3 items-start
                      rounded-2xl
                      border border-border
                      bg-primary/70
                      px-5 py-4
                      "
                      >
                        <span className="text-primary mt-1">
                          ✦
                        </span>

                        <span className="text-foreground leading-7">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {/* Skills */}
            <section className="relative mb-28">



              {/* Skills内容 */}
              <div className="mb-12 md:mb-16 text-center">
                <h2 className="font-editorial text-4xl md:text-5xl font-normal tracking-[0.06em] text-[#B79D95] leading-tight">
                  SKILLS
                </h2>

                <p className="mt-4 text-xs md:text-sm tracking-[0.15em] text-[#965564]">
                  スキル・使用ツール
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">

                {/* Coding */}
                <div className="rounded-[2rem] border border-border bg-gradient-to-br from-primary/[0.04] to-white/[0.025] p-8">
                  <h3 className="font-editorial text-3xl font-normal tracking-[0.03em] mb-7 text-[#704F50]">
                    Coding
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "Responsive Design",

                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full border border-border bg-secondary text-foreground text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Design */}
                <div className="rounded-[2rem] border border-border bg-gradient-to-br from-primary/[0.04] to-white/[0.025] p-8">
                  <h3 className="font-editorial text-3xl font-normal tracking-[0.03em] mb-7 text-[#704F50]">
                    Design
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Web Design",
                      "LP Design",
                      "Corporate Site Design",
                      "Figma",
                      "Information Design",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full border border-border bg-secondary text-foreground text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Other */}
                <div className="rounded-[2rem] border border-border bg-gradient-to-br from-primary/[0.04] to-white/[0.025] p-8">
                  <h3 className="font-editorial mb-7 text-3xl font-normal tracking-[0.03em] text-[#704F50]">
                    Other
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Client Communication",
                      "Project Management",
                      "Schedule Management",
                      "Quality Control",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#DED6D2] bg-[#F7F5F2] px-4 py-2 text-sm font-medium text-[#514B47]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {/* Contact */}
            {/* Contact */}
            <section
              id="contact"
              className="relative py-24 md:py-32 text-center"
            >

              <div className="mx-auto max-w-3xl">

                {/* 英字見出し */}
                <h2 className="font-editorial text-4xl md:text-5xl font-normal tracking-[0.06em] text-[#B79D95] leading-tight">
                  CONTACT
                </h2>

                {/* 日本語 */}
                <p className="mt-4 text-xs md:text-sm tracking-[0.15em] text-[#965564]">
                  お問い合わせ
                </p>

                {/* 装飾ライン */}
                <div className="mx-auto my-10 h-px w-10 bg-[#B79D95]" />

                {/* 説明 */}
                <p className="text-sm md:text-base leading-9 text-[#625B57] tracking-[0.04em]">
                  お仕事のご相談やお問い合わせは、
                  <br />
                  メールにてお気軽にご連絡ください。
                </p>

                {/* メール */}
                <a
                  href="mailto:stsp7.yy@gmail.com"
                  className="
        mt-12 inline-flex items-center gap-4
        border-b border-[#B79D95]
        pb-3
        text-sm md:text-base
        text-[#393735]
        transition-colors
        hover:text-[#965564]
      "
                >
                  stsp7.yy@gmail.com
                  <span>↗</span>
                </a>

                {/* GitHub */}
                <div className="mt-10">
                  <a
                    href="https://github.com/yuyanagisawa-web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          text-xs tracking-[0.2em]
          text-[#8B7973]
          transition-colors
          hover:text-[#965564]
        "
                  >
                    GITHUB ↗
                  </a>
                </div>

              </div>

            </section>
          </div>
        </div>
      </motion.main>
      <BackToTop />
    </>
  )
}