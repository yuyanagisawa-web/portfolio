import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import BackToTop from "../../../../components/BackToTop";

export default function Page() {
    const products = [
        {
            name: "Clear Toner",
            slug: "clear-toner",
            image: "/clear-toner.png",
            category: "化粧水",
            price: "¥3,200",
            text: "肌のキメを整え、なめらかな印象へ導く化粧水。",
        },
        {
            name: "Glow Serum",
            slug: "glow-serum",
            image: "/glow-serum.png",
            category: "美容液",
            price: "¥4,800",
            text: "肌にうるおいと透明感を与えるデイリーセラム。",
        },
        {
            name: "Moisture Cream",
            slug: "moisture-cream",
            image: "/moisture-cream.png",
            category: "保湿クリーム",
            price: "¥3,900",
            text: "乾燥しやすい肌をやさしく包み込むクリーム。",
        },
    ];

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f7f3ee] text-[#1f1b18] px-5 md:px-10">
                <div className="max-w-6xl mx-auto py-12 md:py-16">
                    <Link
                        href="/works/cosme-ec"
                        className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#DED6D2] bg-[#F3ECE6] px-5 py-3 text-sm text-[#625B57] transition-colors hover:bg-[#E8DCD6] hover:text-[#965564]"
                    >
                        ← 作品詳細へ戻る
                    </Link>

                    {/* メインビジュアル */}
                    <section className="relative mb-20 overflow-hidden rounded-[2rem] bg-[#EDE5DC] md:rounded-[2.5rem]">
                        <div className="grid min-h-[580px] items-center md:grid-cols-2">

                            {/* 左：ブランドメッセージ */}
                            <div className="relative z-10 px-7 py-16 md:px-12 lg:px-16">
                                <p className="mb-7 text-xs tracking-[0.35em] text-[#9B8574] md:text-sm">
                                    LUMIÈRE SKIN
                                </p>

                                <p className="mb-5 text-xs tracking-[0.2em] text-[#8B7D70]">
                                    NATURAL SKINCARE
                                </p>

                                <h1 className="mb-8 text-3xl font-medium leading-[1.5] tracking-[0.08em] text-[#3B322C] md:text-4xl lg:text-[2.5rem]">
                                    肌に、
                                    <br />
                                    静かなうるおいを。
                                </h1>

                                <p className="mb-10 max-w-md text-sm leading-9 text-[#6F6258] md:text-base">
                                    自然の恵みを、毎日の肌へ。
                                    <br />
                                    肌と向き合う時間を、
                                    <br />
                                    もっと心地よく、もっと自分らしく。
                                </p>

                                <a
                                    href="#products"
                                    className="inline-flex items-center justify-center gap-8 rounded-full border border-[#6F6258] bg-[#6F6258] px-8 py-4 text-xs tracking-[0.15em] text-white transition hover:bg-transparent hover:text-[#6F6258]"
                                >
                                    VIEW PRODUCTS
                                    <span aria-hidden="true">→</span>
                                </a>

                                <p className="mt-12 text-[10px] tracking-[0.3em] text-[#A49486]">
                                    SIMPLE · NATURAL · ESSENTIAL
                                </p>
                            </div>

                            {/* 右：商品ビジュアル */}
                            <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-[#E4D8CA] p-10 md:min-h-[580px]">
                                <div className="absolute left-[-70px] top-[-70px] h-64 w-64 rounded-full bg-white/20 blur-2xl" />
                                <div className="absolute bottom-[-100px] right-[-50px] h-80 w-80 rounded-full bg-[#CDBBA9]/50 blur-3xl" />

                                <div className="relative z-10 flex w-full max-w-[320px] items-center justify-center">
                                    <img
                                        src="/glow-serum.png"
                                        alt="Lumière Skin Glow Serum"
                                        className="h-[320px] w-full object-contain drop-shadow-2xl md:h-[430px]"
                                    />
                                </div>

                                <p className="absolute bottom-7 right-8 text-[10px] tracking-[0.25em] text-[#8B7D70]">
                                    YOUR DAILY SKINCARE
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* 商品一覧の見出し */}
                    <div
                        id="products"
                        className="mb-10 flex flex-col gap-5 border-b border-[#DED6D2] pb-8 md:flex-row md:items-end md:justify-between"
                    >
                        <div>
                            <p className="mb-3 text-xs tracking-[0.25em] text-[#B79D95]">
                                OUR PRODUCTS
                            </p>

                            <h2 className="mb-3 text-2xl font-medium tracking-[0.08em] text-[#3B322C] md:text-3xl">
                                肌に寄り添う、毎日のケア。
                            </h2>

                            <p className="text-sm leading-8 text-[#8B7D70]">
                                あなたの肌と暮らしに合うアイテムを。
                            </p>
                        </div>

                        <p className="text-xs tracking-[0.15em] text-[#A49486]">
                            ALL ITEMS — 03
                        </p>
                    </div>

                    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 mb-12 md:mb-16">
                        {products.map((product) => (
                            <article
                                key={product.name}
                                className="rounded-[1.5rem] bg-white border border-black/5 p-4 md:p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
                            >

                                <div className="aspect-[4/5] rounded-[1.25rem] bg-[#efe7dd] mb-5 flex items-center justify-center p-6">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <p className="text-xs tracking-[0.2em] uppercase text-[#b6a99e] mb-2">
                                    {product.category}
                                </p>

                                <h2 className="text-xl md:text-2xl font-bold mb-2">
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
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#6F6258] bg-[#6F6258] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#6F6258]"
                                    >
                                        商品詳細
                                        <span aria-hidden="true">→</span>
                                    </Link>

                                </div>
                            </article>
                        ))}

                    </section>



                </div>

            </main>

            <BackToTop />
        </>
    );
}