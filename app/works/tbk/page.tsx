import Link from "next/link";
import Navbar from "../../../components/Navbar";
import BackToTop from "../../../components/BackToTop";

export default function TBKPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#050505] text-white px-6 md:px-10">
                <div className="max-w-5xl mx-auto py-20">

                    <Link
                        href="/#works"
                        className="inline-flex items-center gap-2 text-sm md:text-base text-gray-300 hover:text-white transition mb-8 px-3 py-2 rounded-md hover:bg-white/10"
                    >
                        ← Works一覧に戻る
                    </Link>

                    <img
                        src="/tbk.jpg"
                        alt="都波岐精巧"
                        className="rounded-2xl mb-10 w-full"
                    />

                    <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-6">
                        株式会社都波岐精巧
                    </h1>

                    <div className="flex flex-wrap gap-3 mb-10">
                        <span className="text-sm px-4 py-2 rounded-full border border-white/15 bg-white/5">
                            デザイン
                        </span>

                        <span className="text-sm px-4 py-2 rounded-full border border-white/15 bg-white/5">
                            コーディング
                        </span>

                        <span className="text-sm px-4 py-2 rounded-full border border-white/15 bg-white/5">
                            レスポンシブ
                        </span>

                        <span className="text-sm px-4 py-2 rounded-full border border-white/15 bg-white/5">
                            公開
                        </span>
                    </div>

                    <section className="mb-14">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">
                            制作背景
                        </h2>

                        <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8">
                            製造業のコーポレートサイトとして、
                            企業情報や事業内容が分かりやすく伝わる構成を意識して制作しました。
                        </p>
                    </section>

                    <section className="mb-14">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">
                            担当範囲
                        </h2>

                        <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8">
                            デザイン調整、HTML/CSSコーディング、
                            レスポンシブ対応、公開まで一貫して担当しました。
                        </p>
                    </section>

                    <section className="mb-14">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">
                            工夫した点
                        </h2>

                        <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8">
                            情報量の多い企業サイトのため、
                            視認性や導線を意識しながらレイアウトを設計しました。
                            Figmaをベースにしつつ、
                            余白や配置、見出しバランスを調整し、
                            見やすく信頼感のあるデザインになるよう工夫しています。
                        </p>
                    </section>

                    <a
                        href="https://tbk-1978.graws-service.com/"
                        target="_blank"
                        rel="noreferrer"
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