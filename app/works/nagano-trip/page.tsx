import Link from "next/link";
import Navbar from "../../../components/Navbar";
import BackToTop from "../../../components/BackToTop";
export default function Page() {
  return (
    <>
  <Navbar />
    <main className="min-h-screen bg-[#050505] text-white px-6 md:px-10">
      <div className="max-w-5xl mx-auto py-20">
        <p className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-4">
          Works Detail
        </p>
        <Link
  href="/#works"
  className="inline-flex items-center gap-2 text-sm md:text-base text-gray-300 hover:text-white transition mb-8 px-3 py-2 rounded-md hover:bg-white/10"
>
  ← Works一覧に戻る
</Link>
<h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-4">
         有限会社信州観光バス
        </h1>

        <p className="text-lg text-gray-400 mb-10">
          デザイン / コーディング / レスポンシブ対応
        </p>

        <img
          src="/nagano.jpg"
          alt="Nagano Trip"
          className="w-full rounded-2xl border border-white/10 mb-12"
        />

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
              Role
            </h2>
            <p className="leading-7 text-gray-200">
              デザイン / コーディング / レスポンシブ対応
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
              Tech
            </h2>
            <p className="leading-7 text-gray-200">
              HTML / CSS / JavaScript
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
              Type
            </h2>
            <p className="leading-7 text-gray-200">
              観光情報サイト
            </p>
          </div>
        </div>

        <section className="mb-10">
        <h2 className="text-xl md:text-3xl font-bold mb-4">制作背景</h2>
        <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8">
            観光情報を分かりやすく届けることを目的に、情報整理と視認性を意識して
            制作しました。初めて長野県を訪れる人でも必要な情報にたどり着きやすいよう、
            構成や見せ方を工夫しています。
          </p>
        </section>

        <section className="mb-10">
        <h2 className="text-xl md:text-3xl font-bold mb-4">工夫した点</h2>
        <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8">
            情報量が多くなりやすいサイトのため、セクションごとの区切りや余白を調整し、
            読みやすさを高めました。写真とテキストのバランスを整え、観光サイトとして
            楽しさや親しみやすさが伝わるように意識しています。
          </p>
        </section>

        <a
          href="https://nagano-trip.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition"
        >
          サイトを見る
        </a>
      </div>
    </main>
    <BackToTop />
    </>
  );
}