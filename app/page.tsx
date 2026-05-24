import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050505] text-white px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <section className="pt-16 pb-20 md:pt-24 md:pb-24">
            <p className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-4">
              Portfolio
            </p>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6">
              Yanagisawa Yu
            </h1>

            <p className="text-base md:text-xl text-gray-400 mb-6">
              Web Designer / Frontend Coder
            </p>

            <p className="text-sm md:text-lg text-gray-500 leading-7 md:leading-8 max-w-2xl mb-8">
              事業会社にて約1年半、
              コーポレートサイトやLP制作に携わってきました。

              <br />
              <br />

              HTML/CSSを中心としたコーディングを担当し、
              <br />
              デザイン調整からレスポンシブ対応まで一貫して対応しています。

              <br />
              <br />

              前職では広告代理店にて営業・企画書作成・ディレクション業務を経験し、
              <br />
              ユーザー視点や目的を意識したWeb制作を大切にしています。
              <br />
              <br />
              現在はNext.jsを用いた自主制作にも取り組み、
              <br />
              UI設計や情報整理を意識したフロントエンド実装を学習しています。            </p>
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
          </section>

          {/* Works */}
          <section id="works" className="mb-28">
            <div className="mb-10">
              <h2 className="text-4xl font-bold mb-3">Works</h2>
              <p className="text-gray-400 leading-7">
                実務制作に加え、自主制作ではNext.jsを用いた
                <br />
                フロントエンド実装にも取り組んでいます。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* TaskFlow */}
              <Link
                href="/works/taskflow"
                className="group rounded-2xl border border-white/15 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 block"
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
                className="group rounded-2xl border border-white/15 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 block"
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
              {/* ジム */}
              <Link
                href="/works/besc-gym-yume"
                className="group rounded-2xl border border-white/15 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 block"
              >
                <div className="overflow-hidden rounded-xl mb-4 md:mb-5">

                  <img
                    src="/besk.jpg"
                    alt="BESC GYM YUME"
                    className="mb-4 md:mb-5 rounded-xl h-40 md:h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />

                </div>
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">ベスク体操クラブ</h3>

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
                className="group rounded-2xl border border-white/15 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 block"
              >
                <div className="overflow-hidden rounded-xl mb-4 md:mb-5">
                  <img
                    src="/shigeki.jpg"
                    alt="Hair Salon Shigeki"
                    className="mb-4 md:mb-5 rounded-xl h-40 md:h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                </div>
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">Hair Salon Shigeki</h3>

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
                className="group rounded-2xl border border-white/15 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 block"
              >
                <div className="overflow-hidden rounded-xl mb-4 md:mb-5">

                  <img
                    src="/nagano.jpg"
                    alt="Nagano Trip"
                    className="mb-4 md:mb-5 rounded-xl h-40 md:h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                </div>
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">有限会社信州観光バス</h3>

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
              {/* TBK */}
              <Link
                href="/works/tbk"
                className="group rounded-2xl border border-white/15 bg-white/[0.03] p-5 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-300 block"
              >
                <div className="overflow-hidden rounded-xl mb-4 md:mb-5">

                  <img
                    src="/tbk.jpg"
                    alt="株式会社都波岐精巧"
                    className="mb-4 md:mb-5 rounded-xl h-40 md:h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />

                </div>

                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                  株式会社都波岐精巧
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

            </div>

          </section>
          {/* About */}
          <section id="about" className="mb-28">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-6">About</h2>

              <p className="text-gray-300 leading-8">
                事業会社にて約1年半、コーポレートサイトやLP制作に携わってきました。
                <br />
                主にHTML/CSSを中心としたコーディングを担当し、JavaScriptやWordPressを用いた
                <br />
                サイト構築も経験しています。

                <br />
                <br />

                前職では広告代理店にて、
                <br />
                営業・企画書作成・ディレクション業務を経験し、
                <br />
                「誰に何を伝えるサイトなのか」を意識した制作を大切にしています。
                <br />
                <br />

                デザイン調整からコーディング、
                <br />
                レスポンシブ対応まで一貫して担当しており、
                <br />
                現在はNext.jsを用いた自主制作にも取り組んでいます。
                <br />
                <br />

                情報整理や余白設計を意識しながら、
                <br />
                見やすさと使いやすさを両立したWeb制作を心がけています。
              </p>
            </div>
          </section>
          <section className="mb-28">
            <h2 className="text-4xl font-bold mb-8">Skills</h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03] hover:-translate-y-1 hover:border-white/20 transition duration-300">
                <h3 className="text-xl font-semibold mb-4">Coding</h3>

                <ul className="space-y-2 text-gray-300">
                  <li>HTML / CSS</li>
                  <li>JavaScript</li>
                  <li>Responsive Design</li>
                  <li>WordPress</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03] hover:-translate-y-1 hover:border-white/20 transition duration-300">
                <h3 className="text-xl font-semibold mb-4">Design</h3>

                <ul className="space-y-2 text-gray-300 ">
                  <li>Figma</li>
                  <li>LP Design</li>
                  <li>Corporate Site Design</li>
                  <li>UI Layout Design</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03] hover:-translate-y-1 hover:border-white/20 transition duration-300">
                <h3 className="text-xl font-semibold mb-4">Other</h3>

                <ul className="space-y-2 text-gray-300">
                  <li>Direction</li>
                  <li>Proposal Creation</li>
                  <li>Layout Design</li>
                  <li>Client Communication</li>
                  <li>Information Design</li>
                </ul>
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