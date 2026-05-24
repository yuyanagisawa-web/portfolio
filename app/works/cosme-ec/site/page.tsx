import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import BackToTop from "../../../../components/BackToTop";

export default function Page() {
    const products = [
        {
            name: "Glow Serum",
            slug: "glow-serum",
            category: "美容液",
            price: "¥4,800",
            text: "肌にうるおいと透明感を与えるデイリーセラム。",
        },
        {
            name: "Moisture Cream",
            slug: "moisture-cream",
            category: "保湿クリーム",
            price: "¥3,900",
            text: "乾燥しやすい肌をやさしく包み込むクリーム。",
        },
        {
            name: "Clear Toner",
            slug: "clear-toner",
            category: "化粧水",
            price: "¥3,200",
            text: "肌のキメを整え、なめらかな印象へ導く化粧水。",
        },
    ];

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f7f3ee] text-[#1f1b18] px-6 md:px-10">

                <div className="max-w-6xl mx-auto py-20">

                    <Link
                        href="/works/cosme-ec"
                        className="inline-flex items-center gap-2 text-sm text-[#6f6258] hover:text-black transition mb-8"
                    >
                        ← 作品詳細へ戻る
                    </Link>

                    <section className="mb-20">
                        <p className="text-sm tracking-[0.25em] uppercase text-[#b6a99e] mb-5">
                            Lumière Skin
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                            肌に、
                            <br />
                            静かなうるおいを。
                        </h1>

                        <p className="text-[#6f6258] text-xl leading-[2.2] max-w-4xl mb-16">
                            自然由来のスキンケアアイテムを通して、
                            毎日のケア時間を心地よく整える
                            ミニマルなスキンケアブランド。
                        </p>

                        <p className="text-[#8b7d70] text-lg leading-[2.2] max-w-4xl">
                            肌になじむ軽やかな使用感と、
                            落ち着いた空気感を大切にしながら、
                            静かで上品なスキンケア体験を提案します。
                        </p>
                    </section>

                    <section className="grid gap-6 md:grid-cols-3 mb-20">

                        {products.map((product) => (
                            <article
                                key={product.name}
                                className="rounded-[1.5rem] bg-white border border-black/5 p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
                            >

                                <div className="aspect-[4/5] rounded-[1.25rem] bg-[#efe7dd] mb-5 flex items-center justify-center">

                                    <div className="text-center">
                                        <div className="mx-auto h-36 w-24 rounded-t-full rounded-b-2xl bg-white border border-white shadow-sm mb-4" />

                                        <p className="text-xs tracking-[0.2em] uppercase text-[#b6a99e]">
                                            Lumière
                                        </p>
                                    </div>
                                </div>

                                <p className="text-xs tracking-[0.2em] uppercase text-[#b6a99e] mb-2">
                                    {product.category}
                                </p>

                                <h2 className="text-2xl font-bold mb-3">
                                    {product.name}
                                </h2>

                                <p className="text-sm leading-7 text-[#6f6258] mb-5">
                                    {product.text}
                                </p>

                                <div className="flex items-center justify-between">

                                    <p className="font-semibold">
                                        {product.price}
                                    </p>

                                    <Link
                                        href={`/works/cosme-ec/products/${product.slug}`}
                                        className="rounded-full bg-[#1f1b18] text-white px-5 py-2 text-sm hover:opacity-80 transition"
                                    >
                                        商品詳細
                                    </Link>

                                </div>
                            </article>
                        ))}

                    </section>

                    <section className="mb-16">
                        <p className="text-sm tracking-[0.2em] uppercase text-[#b6a99e] mb-4">
                            Lumière Skin
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            肌に、
                            静かなうるおいを。
                        </h1>

                        <p className="max-w-2xl text-[#6f6258] leading-8">
                            毎日のスキンケアを、
                            心地よく選べるミニマルなスキンケアブランド。
                        </p>
                    </section>

                </div>

            </main>

            <BackToTop />
        </>
    );
}