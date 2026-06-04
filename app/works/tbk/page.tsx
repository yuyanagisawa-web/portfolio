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

                    <h1 className="text-2xl md:text-5xl font-bold tracking-tight mb-4">
                        株式会社都波岐精巧
                    </h1>

                    <p className="text-lg text-gray-400 mb-10">
                        デザイン / コーディング / レスポンシブ対応
                    </p>

                    <img
                        src="/tbk.jpg"
                        alt="株式会社都波岐精巧"
                        className="w-full rounded-2xl border border-white/10 mb-12"
                    />

                    <div className="grid gap-8 md:grid-cols-5 mb-12">
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
                                コーポレートサイト
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
                                Target
                            </h2>
                            <p className="leading-7 text-gray-200">
                                企業情報や事業内容を確認したいユーザー
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h2 className="text-sm text-gray-500 mb-3 uppercase tracking-widest">
                                Period
                            </h2>
                            <p className="leading-7 text-gray-200">
                                2026.04 / 約5日
                            </p>
                        </div>
                    </div>

                    <section className="mb-10">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">制作背景</h2>
                        <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8">
                            製造業のコーポレートサイトとして、
                            <br />
                            企業情報や事業内容が分かりやすく伝わる構成を意識して制作しました。
                            <br />
                            <br />
                            初めて訪れるユーザーにも信頼感が伝わるよう、
                            <br />
                            情報整理や視認性を重視しています。
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl md:text-3xl font-bold mb-4">工夫した点</h2>
                        <p className="text-sm md:text-base text-gray-300 leading-7 md:leading-8">
                            情報量の多い企業サイトのため、
                            <br />
                            視認性や導線を意識しながらレイアウトを設計しました。
                            <br />
                            <br />
                            Figmaをベースにしつつ、余白や配置、見出しバランスを調整し、
                            <br />
                            見やすく信頼感のあるデザインになるよう工夫しています。
                        </p>
                    </section>


                </div>
            </main>
            <BackToTop />
        </>
    );
}