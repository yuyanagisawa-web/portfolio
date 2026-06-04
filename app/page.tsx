import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#111111] text-white px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-24">
            <div className="absolute -top-28 -right-20 w-[420px] h-[420px] rounded-full bg-[#d8b4fe]/18 blur-3xl animate-float" />
            <div className="absolute top-56 -left-24 w-[360px] h-[360px] rounded-full bg-[#fbcfe8]/12 blur-3xl animate-float-slow" />
            <div className="absolute bottom-10 right-1/4 w-32 h-32 rounded-full bg-[#e9d5ff]/15 blur-2xl animate-pulse" />
            <div className="absolute top-28 right-24 hidden md:block w-32 h-32 rounded-full border border-pink-200/20 animate-spin-slow" />
            <div className="absolute bottom-28 right-40 hidden md:block w-2 h-2 rounded-full bg-pink-200/80 animate-ping" />
            <div className="absolute bottom-40 right-24 hidden md:block w-20 h-[1px] bg-gradient-to-r from-transparent via-pink-200/50 to-transparent rotate-[-25deg]" />

            <div className="relative z-10">
              <p className="text-sm tracking-[0.3em] text-[#e9d5ff] uppercase mb-4">
                Portfolio
              </p>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6">
                Yanagisawa
                <span className="bg-gradient-to-r from-[#fbcfe8] to-[#d8b4fe] bg-clip-text text-transparent">
                  Yu
                </span>
              </h1>

              <p className="text-base md:text-xl text-gray-400 mb-6 shadow-[0_20px_80px_rgba(244,194,214,0.08)]">
                Web Designer / Frontend Coder
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
                コーディングを中心に、
                見やすく伝わるWebサイト制作を心掛けています。
              </p>
              <div className="max-w-3xl mb-10 rounded-3xl border border-[#fbcfe8]/10 bg-gradient-to-br from-white/[0.055] to-[#d8b4fe]/[0.035] backdrop-blur-sm p-8 shadow-[0_24px_100px_rgba(216,180,254,0.08)]">
                <p className="text-base md:text-lg text-gray-300 leading-9">

                  事業会社にて約1年半、
                  コーポレートサイトやLP制作に携わってきました。

                  <br /><br />

                  主に
                  <span className="text-pink-200 font-medium">
                    HTML/CSS・JavaScript
                  </span>
                  を用いたコーディングを担当し、
                  デザイン調整からレスポンシブ対応まで一貫して対応しています。

                  <br /><br />

                  前職では広告代理店にて
                  <span className="text-pink-200 font-medium">
                    営業・企画書作成・ディレクション
                  </span>
                  を経験し、
                  ユーザー視点や目的を意識したWeb制作を大切にしています。

                  <br /><br />

                  現在は
                  <span className="text-pink-200 font-medium">
                    Next.js
                  </span>
                  を用いた自主制作にも取り組み、
                  UI設計や情報整理を意識したフロントエンド実装を学習しています。

                </p>
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
              </div></div>
          </section>

          {/* Works */}
          <section id="works" className="mb-28">
            <div className="mb-16">
              <span className="text-7xl font-bold text-white/5">
                06
              </span>

              <p className="-mt-10 text-pink-200 tracking-[0.3em] text-sm uppercase">
                Selected Projects
              </p>

              <h2 className="text-5xl font-bold mt-2">
                Works
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">              {/* TBK */}
              <Link
                href="/works/tbk"
                className="group rounded-3xl border border-white/15 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 block"
              >
                <div className="overflow-hidden rounded-xl mb-4 md:mb-5">

                  <img
                    src="/tbk.jpg"
                    alt="金属加工業"
                    className="mb-4 md:mb-5 rounded-xl h-40 md:h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />

                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-violet-300 mb-2">
                  Corporate Site
                </p>
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                  金属加工業
                </h3>

                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="text-xs bg-blue-400/10 text-blue-200 px-3 py-1 rounded-full border border-blue-300/20">
                    デザイン
                  </span>

                  <span className="text-xs bg-emerald-400/10 text-emerald-200 px-3 py-1 rounded-full border border-emerald-300/20">
                    コーディング
                  </span>

                  <span className="text-xs bg-fuchsia-400/10 text-fuchsia-200 px-3 py-1 rounded-full border border-fuchsia-300/20">
                    レスポンシブ
                  </span>
                </div>

                <p className="text-sm text-gray-400 leading-6 min-h-[72px]">
                  情報量の多い企業サイトのため、
                  <br />
                  視認性や導線を意識しながらレイアウトを設計しました。
                </p>
              </Link>
              {/* ジム */}
              <Link
                href="/works/besc-gym-yume"
                className="group rounded-3xl border border-white/15 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 block"
              >
                <div className="overflow-hidden rounded-xl mb-4 md:mb-5">

                  <img
                    src="/besk.jpg"
                    alt="GYM"
                    className="mb-4 md:mb-5 rounded-xl h-40 md:h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />

                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-violet-300 mb-2">
                  Column Site
                </p>
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">体操クラブ</h3>

                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="text-xs bg-blue-400/10 text-blue-200 px-3 py-1 rounded-full border border-blue-300/20">
                    デザイン
                  </span>
                  <span className="text-xs bg-emerald-400/10 text-emerald-200 px-3 py-1 rounded-full border border-emerald-300/20">
                    コーディング
                  </span>
                  <span className="text-xs bg-fuchsia-400/10 text-fuchsia-200 px-3 py-1 rounded-full border border-fuchsia-300/20">
                    レスポンシブ
                  </span>
                </div>

                <p className="text-sm text-gray-400 leading-6 min-h-[72px]">
                  子ども向けの親しみやすさと安心感を意識し、
                  <br />
                  情報量が多くなりすぎないよう余白や視線導線を工夫しました。
                </p>
              </Link>

              {/* 美容室 */}
              <Link
                href="/works/hairsalon-sigeki"
                className="group rounded-3xl border border-white/15 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 block"
              >
                <div className="overflow-hidden rounded-xl mb-4 md:mb-5">
                  <img
                    src="/shigeki.jpg"
                    alt="Hair Salon"
                    className="mb-4 md:mb-5 rounded-xl h-40 md:h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-violet-300 mb-2">
                  Salon Site
                </p>
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">美容室</h3>

                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="text-xs bg-blue-400/10 text-blue-200 px-3 py-1 rounded-full border border-blue-300/20">
                    デザイン
                  </span>
                  <span className="text-xs bg-emerald-400/10 text-emerald-200 px-3 py-1 rounded-full border border-emerald-300/20">
                    コーディング
                  </span>
                  <span className="text-xs bg-fuchsia-400/10 text-fuchsia-200 px-3 py-1 rounded-full border border-fuchsia-300/20">
                    レスポンシブ
                  </span>
                </div>

                <p className="text-sm text-gray-400 leading-6 min-h-[72px]">
                  サイト全体の世界観を意識し、
                  <br />
                  パララックスや写真の見せ方を工夫して制作しました。
                </p>
              </Link>

              {/* 長野 */}
              <Link
                href="/works/nagano-trip"
                className="group rounded-3xl border border-white/15 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 block"
              >
                <div className="overflow-hidden rounded-xl mb-4 md:mb-5">

                  <img
                    src="/nagano.jpg"
                    alt="Trip"
                    className="mb-4 md:mb-5 rounded-xl h-40 md:h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-violet-300 mb-2">
                  Travel Site
                </p>
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">観光バス会社</h3>

                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="text-xs bg-blue-400/10 text-blue-200 px-3 py-1 rounded-full border border-blue-300/20">
                    デザイン
                  </span>
                  <span className="text-xs bg-emerald-400/10 text-emerald-200 px-3 py-1 rounded-full border border-emerald-300/20">
                    コーディング
                  </span>
                  <span className="text-xs bg-fuchsia-400/10 text-fuchsia-200 px-3 py-1 rounded-full border border-fuchsia-300/20">
                    レスポンシブ
                  </span>
                </div>

                <p className="text-sm text-gray-400 leading-6 min-h-[72px]">
                  サービス内容が伝わりやすいよう、
                  <br />
                  情報整理と視認性を意識してデザイン・実装を行いました。
                </p>
              </Link>

              {/* TaskFlow */}
              <Link
                href="/works/taskflow"
                className="group rounded-3xl border border-white/15 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 block"
              >
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
                className="group rounded-3xl border border-white/15 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 block"
              >
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
            <div className="mb-12">
              <p className="text-[#e9d5ff] tracking-[0.3em] text-sm uppercase mb-3">
                About
              </p>

              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                About Me
              </h2>

              <p className="text-gray-300 leading-8 max-w-3xl">
                Webデザインとコーディングを通じて、
                ユーザーにとって見やすく伝わりやすいWebサイト制作を心がけています。
              </p>
            </div>

            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="rounded-[2rem] border border-[#e9d5ff]/10 bg-gradient-to-br from-white/[0.055] to-[#d8b4fe]/[0.035] backdrop-blur-sm p-8 md:p-10 shadow-[0_24px_100px_rgba(216,180,254,0.08)]">
                <p className="text-gray-300 leading-9">
                  事業会社にて約1年半、コーポレートサイトやLP制作に携わってきました。
                  主にHTML/CSS・JavaScriptを用いたコーディングを担当し、
                  デザイン調整からレスポンシブ対応まで一貫して対応しています。

                  <br />
                  <br />

                  前職では広告代理店にて営業・企画書作成・ディレクション業務を経験し、
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
          <section className="mb-28">
            <div className="mb-12">
              <p className="text-[#e9d5ff] tracking-[0.3em] text-sm uppercase mb-3">
                Profile
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
                  <div className="relative pl-8 border-l border-[#fbcfe8]/20">
                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#fbcfe8]" />
                    <p className="text-sm text-gray-500 mb-2">現在</p>
                    <p className="text-gray-300 leading-8">
                      Webデザイナーとして、コーポレートサイトやLP制作を担当。
                      デザイン調整からHTML/CSSコーディング、レスポンシブ対応まで行っています。
                    </p>
                  </div>

                  <div className="relative pl-8 border-l border-[#fbcfe8]/20">
                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#d8b4fe]" />
                    <p className="text-sm text-gray-500 mb-2">前職</p>
                    <p className="text-gray-300 leading-8">
                      広告代理店にて、営業・企画書作成・ディレクション業務を経験。
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
                      className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-gray-300 leading-7"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* Skills */}
          <section className="mb-28">
            <div className="mb-12">
              <p className="text-[#e9d5ff] tracking-[0.3em] text-sm uppercase mb-3">
                Skills
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
                    "Responsive",
                    "WordPress",
                    "React",
                    "Gatsby",
                    "Next.js",
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
                    "Figma",
                    "LP Design",
                    "Corporate Site",
                    "UI Design",
                    "Wireframe",
                    "Responsive Design",
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
                    "Direction",
                    "Proposal",
                    "Client Work",
                    "Information Design",
                    "Communication",
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

            <p className="text-gray-400 mb-4">
            </p>

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
      </main>
      <BackToTop />
    </>
  )
}