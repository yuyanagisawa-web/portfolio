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
              Webデザイナー / コーディング
            </p>

            <p className="text-sm md:text-lg text-gray-500 leading-7 md:leading-8 max-w-2xl mb-8">
              事業会社にて約1年半、
              コーポレートサイトやLP制作に携わってきました。

              <br />
              <br />

              HTML/CSSを中心としたコーディングを担当し、
              デザイン調整からレスポンシブ対応まで一貫して対応しています。

              <br />
              <br />

              前職では広告代理店にて営業・企画書作成・ディレクション業務を経験し、
              ユーザー視点や目的を意識したWeb制作を大切にしています。
            </p>
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
                実務で制作したサイトを中心に、デザイン・コーディング・レスポンシブ対応まで
                一貫して担当した案件を掲載しています。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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
                  落ち着いた世界観を意識し、
                  写真が引き立つ余白設計とシンプルな導線設計を意識しました。
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
                  情報整理と視認性を意識してデザイン・実装を行いました。
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
                主にHTML/CSSを中心としたコーディングを担当し、JavaScriptやWordPressを用いた
                サイト構築も経験しています。

                <br />
                <br />

                前職では広告代理店にて営業・企画書作成・ディレクション業務を経験し、
                「誰に何を伝えるサイトなのか」を意識した制作を大切にしています。

                <br />
                <br />

                デザイン調整からコーディング、レスポンシブ対応まで一貫して担当しており、
                現在はNext.jsを学習しながらフロントエンド領域のスキルも伸ばしています。

                <br />
                <br />

                ユーザー視点や情報の伝わりやすさを意識しながら、
                見た目だけでなく目的に沿ったWeb制作を心がけています。              </p>
            </div>
          </section>
          <section className="mb-28">
            <h2 className="text-4xl font-bold mb-8">Skills</h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03] hover:-translate-y-1 hover:border-white/20 transition duration-300">
                <h3 className="text-xl font-semibold mb-4">Coding</h3>

                <ul className="space-y-2 text-gray-300">
                  <li>HTML</li>
                  <li>CSS / SCSS</li>
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
                  <li>Layout Design</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.03] hover:-translate-y-1 hover:border-white/20 transition duration-300">
                <h3 className="text-xl font-semibold mb-4">Other</h3>

                <ul className="space-y-2 text-gray-300">
                  <li>Direction</li>
                  <li>Proposal Creation</li>
                  <li>Client Work</li>
                  <li>Information Design</li>
                </ul>
              </div>

            </div>
          </section>
          {/* Contact */}
          <section id="contact" className="pt-8 pb-24">
            <h2 className="text-4xl font-bold mb-6">Contact</h2>

            <p className="text-gray-400 mb-4">
              お問い合わせはメールまたはGitHubからお願いします。
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