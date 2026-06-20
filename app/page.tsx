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
    実務: "bg-blue-400/10 text-blue-200 border-blue-300/20",
    自主制作: "bg-emerald-400/10 text-emerald-200 border-emerald-300/20",
    HTML: "bg-orange-400/10 text-orange-200 border-orange-300/20",
    CSS: "bg-sky-400/10 text-sky-200 border-sky-300/20",
    JavaScript: "bg-yellow-400/10 text-yellow-200 border-yellow-300/20",
  }
  const works: Work[] = [{
    title: "製造業",
    category: "Corporate Site",
    image: "/tbk.png",
    popupImage: "/tbk01.png",
    href: "/works/tbk",
    description:
      "情報量の多い企業サイトのため、情報の優先順位と視認性を整理し、ユーザーが迷わず閲覧できる構成とデザインを意識して制作しました。",
    tags: ["デザイン", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "体操クラブ",
    category: "Column Site",
    image: "/besk.jpg",
    popupImage: "/besk01.png",
    href: "/works/besc-gym-yume",
    description:
      "子ども向けサービスとしての親しみやすさと安心感を重視し、写真の見せ方や余白設計、導線設計を工夫して制作しました。",
    tags: ["デザイン", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "美容室",
    category: "Salon Site",
    image: "/shigeki.png",
    popupImage: "/shigeki01.png",
    href: "/works/hairsalon-sigeki",
    description:
      "世界観を重視したビジュアル設計を行い、写真表現や余白、動きのバランスを調整しながらブランドイメージに沿って制作しました。",
    tags: ["デザイン", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "観光バス会社",
    category: "Travel Site",
    image: "/nagano.png",
    popupImage: "/nagano01.png",
    href: "/works/nagano-trip",
    description:
      "サービス内容が直感的に伝わるよう、情報整理と導線設計を意識し、閲覧ストレスの少ない構成で制作しました。",
    tags: ["デザイン", "HTML", "CSS", "JavaScript"]
  },
  ];

  return (
    <>
      <Navbar />
      <motion.main
        className="relative min-h-screen bg-[#111111] text-white overflow-x-hidden"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative z-10 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero */}
            <section className="relative pt-16 pb-32 md:pt-24 md:pb-20">
              {/* Hero背景：画面幅いっぱい */}
              <div className="absolute top-0 left-1/2 -z-10 h-full w-screen -translate-x-1/2 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[#111111]" />

                <div className="absolute top-[-120px] right-[-220px] w-[760px] h-[760px] rounded-full bg-[#d8b4fe]/7 blur-[260px]" />

                <div className="absolute top-[260px] right-[10vw] w-[520px] h-[520px] rounded-full bg-[#fbcfe8]/4 blur-[220px]" />
              </div>

              <div className="relative z-10 grid lg:grid-cols-[1fr_340px] gap-10 items-center">
                <div>
                  <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#fbcfe8]/15 bg-white/[0.03] px-4 py-2 text-xs tracking-[0.2em] text-[#fbcfe8]">
                    <span className="h-2 w-2 rounded-full bg-[#fbcfe8]" />
                    WEB PORTFOLIO
                  </div>
                  <p className="text-sm tracking-[0.3em] text-[#e9d5ff] uppercase mb-4">
                    Portfolio
                  </p>

                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6">
                    Yanagisawa
                    <span className="bg-gradient-to-r from-[#fbcfe8] to-[#d8b4fe] bg-clip-text text-transparent">
                      Yu
                    </span>
                  </h1>

                  <p className="text-base md:text-xl text-gray-400 mb-6">
                    Web Designer / Coder
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-4 py-1 rounded-full border border-[#fbcfe8]/20 bg-[#fbcfe8]/10 text-[#fbcfe8] text-sm">
                      Web Design
                    </span>
                    <span className="px-4 py-1 rounded-full border border-[#d8b4fe]/20 bg-[#d8b4fe]/10 text-[#d8b4fe] text-sm">
                      Coding
                    </span>
                    <span className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm">
                      Responsive
                    </span>
                  </div>

                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-3xl">
                    Webデザインからコーディングまで一貫して対応できるWebデザイナー
                  </p>

                  <div className="max-w-3xl mb-10 rounded-3xl border border-[#fbcfe8]/10 bg-white/[0.035] backdrop-blur-sm p-8">
                    <p className="text-base md:text-lg text-gray-300 leading-9">
                      現在は事業会社にてWebデザイナーとして約1年半勤務しており、<br />
                      コーポレートサイト・採用サイト・LP制作を担当しています。<br />
                      <br />

                      主にWebデザインおよびHTML/CSS/JavaScriptによるコーディングを担当し、<br />
                      デザインの調整からレスポンシブ対応まで一貫して対応しています。<br />
                      <br />

                      また、WordPressサイトの更新・運用業務にも携わっています。
                      制作業務を通じて、ユーザーにとって分かりやすい情報設計を意識しています。
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block self-end">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#fbcfe8]/10 to-[#d8b4fe]/10 blur-2xl" />

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                      <Image
                        src="/profile.jpg"
                        alt="Yu Yanagisawa"
                        width={500}
                        height={500}
                        className="w-full h-[500px] object-cover"
                      />

                      {/* 写真内プロフィール */}
                      <div className="absolute left-5 bottom-5 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md px-4 py-3">
                        <p className="text-xs tracking-[0.15em] text-gray-400 uppercase">
                          Tokyo, Japan
                        </p>

                        <p className="text-sm font-medium text-white mt-1">
                          Web Designer / Coder
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* スキルタグ */}
                  {/* <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 rounded-full bg-[#fbcfe8]/10 text-[#fbcfe8] text-xs">
                      Web Design
                    </span>

                    <span className="px-3 py-1 rounded-full bg-[#d8b4fe]/10 text-[#d8b4fe] text-xs">
                      Frontend
                    </span>

                    <span className="px-3 py-1 rounded-full bg-[#fbcfe8]/10 text-[#fbcfe8] text-xs">
                      Responsive
                    </span>


                  </div> */}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#works"
                    className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition"
                  >
                    Worksを見る
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition"
                  >
                    Aboutを見る
                  </a>
                </div>
              </div>
            </section>
            {/* Wave */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fbcfe8]/5 to-transparent" />
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
      bg-[#d8b4fe]/20
      blur-[180px]
      opacity-80
    " />

                <div className="
      absolute bottom-[-200px] left-[-180px]
      w-[460px] h-[460px]
      rounded-full
      bg-[#fbcfe8]/10
      blur-[160px]
      opacity-60
    " />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fbcfe8]/5 to-transparent" />
              <div className="mb-16">
                <span className="text-7xl font-bold text-white/5">
                  06
                </span>

                <p className="text-[#e9d5ff] tracking-[0.3em] text-sm uppercase mb-3 flex items-center gap-2">
                  <span className="text-pink-300">✦</span>
                  Selected Projects
                </p>

                <h2 className="text-5xl font-bold mt-2">
                  Works
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fbcfe8]/5 to-transparent pointer-events-none" />
                {works.map((work) => (
                  <button
                    key={work.title}
                    onClick={() => setSelectedWork(work)}
                    className="
                    group text-left rounded-3xl border border-white/15 bg-white/[0.03]
                    p-5 transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:scale-[1.015]
                    hover:border-white/30 hover:shadow-xl
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

                    <p className="text-xs uppercase tracking-[0.2em] text-violet-300 mb-2">
                      {work.category}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {work.tags.map((tag) => {
                        const style = tagStyle[tag] || "bg-white/5 text-gray-300 border-white/10"

                        return (
                          <span
                            key={tag}
                            className={`text-xs px-3 py-1 rounded-full border ${style}`}
                          >
                            {tag}
                          </span>
                        )
                      })}
                    </div>

                    <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                      {work.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-6 min-h-[72px]">
                      {work.description}
                    </p>
                  </button>
                ))}
                {selectedWork && (
                  <div
                    className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-5 pt-24 md:pt-28"
                    onClick={() => setSelectedWork(null)}
                  >
                    <div
                      className="relative w-full max-w-4xl max-h-[82vh] overflow-y-auto rounded-3xl bg-[#181818] border border-white/15 p-5 md:p-8"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setSelectedWork(null)}
                        className="absolute right-5 top-5 text-white/70 hover:text-white text-2xl"
                      >
                        ×
                      </button>

                      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-violet-300 mb-2">
                            {selectedWork.category}
                          </p>

                          <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            {selectedWork.title}
                          </h3>

                          <p className="text-gray-300 leading-7 max-w-2xl">
                            {selectedWork.description}
                          </p>
                        </div>

                        <Link
                          href={selectedWork.href}
                          onClick={(e) => e.stopPropagation()}
                          className="shrink-0 inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition"
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
                )}
                {/* TaskFlow */}
                <Link
                  href="/works/taskflow"
                  className="
                  group rounded-3xl border border-white/15 bg-white/[0.03] p-5 block
                  transition-all duration-300 ease-out
                  will-change-transform
                  hover:-translate-y-2 hover:scale-[1.02]
                  hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  active:scale-[0.99]
                  "
                >
                  <div className="transition-transform duration-500 group-hover:scale-[1.03]"></div>
                  <div className="rounded-xl mb-4 md:mb-5 h-40 md:h-52 bg-gradient-to-br from-white/[0.12] to-white/[0.03] border border-white/10 p-5 overflow-hidden">
                    <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                      <div className="flex justify-between mb-4">
                        <span className="font-semibold">Today</span>
                        <span className="text-xs text-gray-500">4 tasks</span>
                      </div>
                      <div className="space-y-2">
                        {["LP構成を確認", "UIパーツ作成", "レスポンシブ調整"].map((task) => (
                          <div key={task} className="rounded-lg bg-white/[0.06] p-3 text-sm text-gray-200">
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
                    <span className="text-xs bg-blue-400/10 text-blue-200 px-3 py-1 rounded-full border border-blue-300/20">
                      自主制作
                    </span>
                    <span className="text-xs bg-emerald-400/10 text-emerald-200 px-3 py-1 rounded-full border border-emerald-300/20">
                      Next.js
                    </span>
                    <span className="text-xs bg-fuchsia-400/10 text-fuchsia-200 px-3 py-1 rounded-full border border-fuchsia-300/20">
                      Frontend
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-6 min-h-[72px]">
                    タスクの追加・編集・完了切り替えなど、
                    <br />
                    操作感を意識して制作したタスク管理UIです。
                  </p>
                </Link>
                {/* コスメ */}
                <Link
                  href="/works/cosme-ec"
                  className="
                  group rounded-3xl border border-white/15 bg-white/[0.03] p-5 block
                  transition-all duration-300 ease-out
                  will-change-transform
                  hover:-translate-y-2 hover:scale-[1.02]
                  hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                  active:scale-[0.99]
                  "
                >
                  <div className="transition-transform duration-500 group-hover:scale-[1.03]"></div>
                  <div className="rounded-[1.5rem] mb-4 md:mb-5 h-40 md:h-52 bg-[#f3ede6] border border-black/5 p-5 overflow-hidden">
                    <div className="grid grid-cols-3 gap-3 h-full">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl bg-white border border-black/5 p-3 flex flex-col justify-between"
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
                    <span className="text-xs bg-blue-400/10 text-blue-200 px-3 py-1 rounded-full border border-blue-300/20">
                      自主制作
                    </span>

                    <span className="text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-3 py-1 rounded-full">
                      EC Design
                    </span>

                    <span className="text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full">
                      購入導線を意識
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-6 min-h-[72px]">
                    商品一覧・商品詳細・カート確認まで、
                    <br />
                    シンプルな購入導線を意識して制作した
                    <br />
                    コスメECサイトの自主制作です。

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

      bg-[#d8b4fe]/15

      max-md:w-[260px]
      max-md:h-[260px]
      max-md:top-auto
      max-md:bottom-[-120px]
      max-md:right-[-80px]

      max-md:bg-[#d8b4fe]/5
      max-md:blur-2xl
      max-md:opacity-70
    "
                />
              </div>
              <div className="mb-12">
                <div className="absolute top-8 right-10 w-24 h-24 border border-pink-300/10 rounded-full" />
                <div className="absolute top-16 right-20 w-40 h-40 border border-pink-300/5 rounded-full" />
                <p className="text-[#e9d5ff] tracking-[0.3em] text-sm uppercase mb-3">
                  <span className="text-pink-300">◌</span> About
                </p>

                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  About Me
                </h2>

                <p className="text-gray-300 leading-8 max-w-3xl">
                  Webデザインとコーディングを通じて、<br />
                  ユーザーにとって見やすく、情報が整理されたWebサイト制作を心がけています。                </p>
              </div>

              <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8">
                <div className="rounded-[2rem] border border-[#e9d5ff]/10 bg-gradient-to-br from-white/[0.055] to-[#d8b4fe]/[0.035] backdrop-blur-sm p-8 md:p-10 shadow-[0_24px_100px_rgba(216,180,254,0.08)]">
                  <p className="text-gray-300 leading-9">
                    事業会社にて約1年半、コーポレートサイトやLP制作に携わってきました。
                    <br />
                    主にHTML/CSS・JavaScriptを用いたコーディングを担当し、
                    <br />
                    デザイン調整からレスポンシブ対応まで一貫して対応しています。

                    <br />
                    <br />

                    前職では広告代理店にて営業・企画書作成・ディレクション業務を経験し、
                    <br />
                    「誰に何を伝えるサイトなのか」を意識した制作を大切にしています。
                  </p>
                </div>

                <div className="rounded-[2rem] border border-[#fbcfe8]/10 bg-white/[0.035] p-8 md:p-10">
                  <p className="text-sm text-[#fbcfe8] tracking-[0.2em] uppercase mb-4">
                    Mind
                  </p>

                  <ul className="space-y-5 text-gray-300 leading-8">
                    <li>情報整理と余白設計を大切にしています。</li>
                    <li>デザイン意図を理解したコーディングを心がけています。</li>
                    <li>ユーザー視点と目的意識を持って制作します。</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Profile */}
            <section className="mb-28 relative overflow-hidden">

              <div className="mb-12">
                <p className="text-[#e9d5ff] tracking-[0.3em] text-sm uppercase mb-3">
                  <span className="text-pink-300">✦</span>Profile
                </p>

                <h2 className="text-5xl md:text-6xl font-bold">
                  Career & Strength
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-[2rem] border border-[#e9d5ff]/10 bg-gradient-to-br from-[#fbcfe8]/[0.04] to-white/[0.025] p-8 md:p-10">
                  <h3 className="text-2xl font-semibold mb-8 text-[#fbcfe8]">
                    Career
                  </h3>

                  <div className="space-y-8">
                    <div className="relative pl-8">

                      {/* 縦ライン */}
                      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#fbcfe8] via-[#d8b4fe]/50 to-transparent" />

                      {/* 丸 */}
                      <span className="absolute -left-[4px] top-2 w-2.5 h-2.5 rounded-full bg-[#fbcfe8] shadow-[0_0_12px_rgba(251,207,232,.8)]" />

                      <p className="text-sm text-gray-500 mb-2">現在</p>
                      <p className="text-gray-300 leading-8">
                        Webデザイナーとして、コーポレートサイトやLP制作を担当。<br />
                        デザイン調整からHTML/CSSコーディング、<br />レスポンシブ対応まで行っています。
                      </p>
                    </div>

                    <div className="relative pl-8 relative pl-8">
                      <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#d8b4fe]" />
                      <p className="text-sm text-gray-500 mb-2">前職</p>
                      <p className="text-gray-300 leading-8">
                        広告代理店にて、営業・企画書作成・ディレクション業務を経験。<br />
                        ユーザー視点や目的を考える姿勢を制作にも活かしています。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[#d8b4fe]/10 bg-gradient-to-br from-[#d8b4fe]/[0.045] to-white/[0.025] p-8 md:p-10">
                  <h3 className="text-2xl font-semibold mb-8 text-[#d8b4fe]">
                    Strength
                  </h3>

                  <div className="space-y-5">
                    {[
                      "情報を整理し、見やすく伝わる構成を考えること",
                      "デザイン意図を理解したHTML/CSSコーディング",
                      "前職経験を活かしたユーザー視点・目的意識",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                      flex gap-3 items-start
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.035]
                      px-5 py-4
                      "
                      >
                        <span className="text-pink-300 mt-1">
                          ✦
                        </span>

                        <span className="text-gray-300 leading-7">
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
              <div className="mb-12">
                <p className="text-[#e9d5ff] tracking-[0.3em] text-sm uppercase mb-3">
                  <span className="text-pink-300">❀</span>Skills
                </p>

                <h2 className="text-5xl md:text-6xl font-bold">
                  Skills & Tools
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">

                {/* Coding */}
                <div className="rounded-[2rem] border border-[#d8b4fe]/10 bg-gradient-to-br from-[#d8b4fe]/[0.04] to-white/[0.025] p-8">
                  <h3 className="text-xl font-semibold mb-5 text-[#d8b4fe]">
                    Coding
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "WordPress",

                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full border border-[#d8b4fe]/20 bg-[#d8b4fe]/10 text-[#d8b4fe] text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Design */}
                <div className="rounded-[2rem] border border-[#fbcfe8]/10 bg-gradient-to-br from-[#fbcfe8]/[0.04] to-white/[0.025] p-8">
                  <h3 className="text-xl font-semibold mb-5 text-[#fbcfe8]">
                    Design
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Web Design",
                      "Figma",
                      "LP Design",
                      "Corporate Site Design",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full border border-[#fbcfe8]/20 bg-[#fbcfe8]/10 text-[#fbcfe8] text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Other */}
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                  <h3 className="text-xl font-semibold mb-5 text-white">
                    Other
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Client Communication",
                      "Project Coordination",
                      "Production Management",
                      "Quality Assurance",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </section>
            {/* Contact */}
            <section id="contact" className="pt-8 pb-24">
              <h2 className="text-4xl font-bold mb-6">Contact</h2>



              <div className="flex flex-col gap-2 text-gray-200">

                <a
                  href="mailto:stsp7.yy@gmail.com"
                  className="hover:text-white transition"
                >
                  📧 stsp7.yy@gmail.com
                </a>

                <a
                  href="https://github.com/yuyanagisawa-web"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  💻 GitHub
                </a>

              </div>
            </section>
          </div>
        </div>
      </motion.main>
      <BackToTop />
    </>
  )
}