"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../../../../components/Navbar";
import BackToTop from "../../../../../components/BackToTop";

type CartItem = {
    slug: string;
    name: string;
    category: string;
    size: string;
    price: number;
    quantity: number;
};

export default function Page() {
    const [quantity, setQuantity] = useState(1);
    const router = useRouter();

    const addToCart = () => {
        const cart: CartItem[] = JSON.parse(
            localStorage.getItem("cart") || "[]"
        );

        const newItem: CartItem = {
            slug: "clear-toner",
            name: "Clear Toner",
            category: "化粧水",
            size: "150ml",
            price: 3200,
            quantity,
        };

        const existingItem = cart.find(
            (item) => item.slug === newItem.slug
        );

        const updatedCart = existingItem
            ? cart.map((item) =>
                item.slug === newItem.slug
                    ? {
                        ...item,
                        quantity: item.quantity + quantity,
                    }
                    : item
            )
            : [...cart, newItem];

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        router.push("/works/cosme-ec/checkout");
    };

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#F7F3EE] px-5 text-[#1F1B18] md:px-10">
                <div className="mx-auto max-w-6xl py-12 md:py-16">

                    {/* 戻るボタン */}
                    <Link
                        href="/works/cosme-ec/site"
                        className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#DED6D2] bg-[#F3ECE6] px-5 py-3 text-sm text-[#625B57] transition-colors hover:bg-[#E8DCD6] hover:text-[#965564]"
                    >
                        ← 商品一覧に戻る
                    </Link>

                    {/* パンくずリスト */}
                    <nav
                        aria-label="パンくずリスト"
                        className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#9B8F84]"
                    >
                        <Link
                            href="/works/cosme-ec/site"
                            className="transition hover:text-[#6F6258]"
                        >
                            Lumière Skin
                        </Link>

                        <span>/</span>
                        <span>化粧水</span>
                        <span>/</span>
                        <span className="text-[#6F6258]">Clear Toner</span>
                    </nav>

                    {/* 商品メインエリア */}
                    <section className="grid items-start gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">

                        {/* 左：商品画像 */}
                        <div>
                            <div className="overflow-hidden rounded-[2rem] bg-[#EFE7DD] p-6 md:p-10">
                                <div className="flex aspect-[4/5] items-center justify-center rounded-[1.5rem] border border-white/70 bg-gradient-to-br from-white via-[#EADFD3] to-[#CDBDAA] p-8">
                                    <img
                                        src="/clear-toner.png"
                                        alt="Lumière Skin Clear Toner"
                                        className="h-full w-full object-contain drop-shadow-xl"
                                    />
                                </div>
                            </div>

                            <p className="mt-5 text-center text-xs tracking-[0.2em] text-[#A49486]">
                                LUMIÈRE SKIN — DAILY SKINCARE
                            </p>
                        </div>

                        {/* 右：商品情報 */}
                        <div>
                            <p className="mb-4 text-xs tracking-[0.25em] text-[#B79D95]">
                                LUMIÈRE SKIN / TONER
                            </p>

                            <h1 className="mb-3 text-3xl font-medium tracking-[0.03em] text-[#3B322C] md:text-5xl">
                                Clear Toner
                            </h1>

                            <p className="mb-7 text-sm text-[#8B7D70]">
                                クリアトナー / 化粧水
                            </p>

                            {/* 価格 */}
                            <div className="mb-7 flex flex-wrap items-baseline gap-3 border-b border-[#DED6D2] pb-7">
                                <p className="text-3xl font-medium tracking-[0.03em] text-[#3B322C]">
                                    ¥3,200
                                </p>

                                <span className="text-xs text-[#8B7D70]">
                                    / 150ml
                                </span>
                            </div>

                            {/* 商品説明 */}
                            <p className="mb-9 text-sm leading-8 text-[#6F6258] md:text-base">
                                みずみずしいテクスチャで肌に素早くなじみ、
                                うるおいを与えながらキメを整える化粧水です。
                                毎日のスキンケアを軽やかに整え、
                                透明感のある印象へ導きます。
                            </p>
                            {/* 商品詳細へのページ内リンク */}
                            <a
                                href="#product-details"
                                className="mb-9 inline-flex items-center gap-2 border-b border-[#B79D95] pb-2 text-sm text-[#6F6258] transition hover:text-[#965564]"
                            >
                                商品の特徴・おすすめ情報を見る
                                <span aria-hidden="true">↓</span>
                            </a>

                            {/* 購入エリア */}
                            <div className="rounded-2xl border border-[#E5DCD7] bg-white/80 p-6 shadow-sm md:p-7">

                                <div className="mb-6 flex items-center justify-between gap-4">
                                    <span className="text-sm font-medium text-[#625B57]">
                                        数量
                                    </span>

                                    <div className="inline-flex items-center overflow-hidden rounded-full border border-[#DED6D2] bg-white">
                                        <button
                                            type="button"
                                            aria-label="数量を減らす"
                                            onClick={() =>
                                                setQuantity((prev) => Math.max(1, prev - 1))
                                            }
                                            disabled={quantity === 1}
                                            className="flex h-11 w-11 items-center justify-center text-lg text-[#6F6258] transition hover:bg-[#F3ECE6] disabled:cursor-not-allowed disabled:opacity-30"
                                        >
                                            −
                                        </button>

                                        <span
                                            aria-live="polite"
                                            className="min-w-10 text-center text-sm font-medium text-[#3B322C]"
                                        >
                                            {quantity}
                                        </span>

                                        <button
                                            type="button"
                                            aria-label="数量を増やす"
                                            onClick={() => setQuantity((prev) => prev + 1)}
                                            className="flex h-11 w-11 items-center justify-center text-lg text-[#6F6258] transition hover:bg-[#F3ECE6]"
                                        >
                                            ＋
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-6 flex items-center justify-between border-t border-[#EEE6E1] pt-5">
                                    <span className="text-sm text-[#8B7D70]">
                                        小計
                                    </span>

                                    <span className="text-xl font-medium text-[#3B322C]">
                                        ¥{(3200 * quantity).toLocaleString("ja-JP")}
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={addToCart}
                                    className="flex w-full items-center justify-center gap-4 rounded-full border border-[#6F6258] bg-[#6F6258] px-8 py-4 text-sm font-medium tracking-[0.08em] text-white transition-colors hover:bg-transparent hover:text-[#6F6258]"
                                >
                                    カートに入れる
                                    <span aria-hidden="true">→</span>
                                </button>

                                <p className="mt-4 text-center text-xs leading-6 text-[#9B8F84]">
                                    カートに追加後、購入内容の確認画面へ進みます。
                                </p>
                            </div>

                            {/* 商品スペック */}
                            <dl className="mt-8 divide-y divide-[#DED6D2] border-y border-[#DED6D2] text-sm">
                                <div className="grid grid-cols-[90px_1fr] gap-4 py-4">
                                    <dt className="text-[#9B8F84]">内容量</dt>
                                    <dd className="text-[#625B57]">150ml</dd>
                                </div>

                                <div className="grid grid-cols-[90px_1fr] gap-4 py-4">
                                    <dt className="text-[#9B8F84]">使用目安</dt>
                                    <dd className="text-[#625B57]">朝・夜</dd>
                                </div>

                                <div className="grid grid-cols-[90px_1fr] gap-4 py-4">
                                    <dt className="text-[#9B8F84]">肌タイプ</dt>
                                    <dd className="text-[#625B57]">
                                        乾燥・キメの乱れが気になる肌へ
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </section>

                    {/* 商品の特徴 */}
                    <section
                        id="product-details"
                        className="mt-20 scroll-mt-24 border-t border-[#DED6D2] pt-14 md:mt-28 md:pt-20"
                    >
                        <div className="mb-10 text-center">
                            <p className="mb-3 text-xs tracking-[0.25em] text-[#B79D95]">
                                PRODUCT DETAILS
                            </p>

                            <h2 className="text-2xl font-medium tracking-[0.08em] text-[#3B322C] md:text-3xl">
                                商品について
                            </h2>

                            <p className="mt-4 text-sm leading-8 text-[#8B7D70]">
                                毎日のスキンケアに取り入れやすい、
                                <br />
                                軽やかな使い心地を目指して。
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">

                            {/* 特徴 */}
                            <article className="rounded-2xl border border-[#E5DCD7] bg-white/80 p-7 md:p-9">
                                <p className="mb-4 text-xs tracking-[0.2em] text-[#B79D95]">
                                    01 / FEATURES
                                </p>

                                <h3 className="mb-5 text-lg font-medium text-[#3B322C]">
                                    軽やかで、心地よい使用感。
                                </h3>

                                <p className="text-sm leading-8 text-[#6F6258]">
                                    肌になじみやすい軽やかな使用感を想定し、
                                    朝晩どちらでも使いやすいベーシックな化粧水として
                                    設計しています。
                                </p>
                            </article>

                            {/* おすすめ */}
                            <article className="rounded-2xl border border-[#E5DCD7] bg-white/80 p-7 md:p-9">
                                <p className="mb-4 text-xs tracking-[0.2em] text-[#B79D95]">
                                    02 / RECOMMENDED FOR
                                </p>

                                <h3 className="mb-5 text-lg font-medium text-[#3B322C]">
                                    こんな方におすすめ
                                </h3>

                                <ul className="space-y-3 text-sm leading-7 text-[#6F6258]">
                                    <li className="flex gap-3">
                                        <span className="text-[#B79D95]">✓</span>
                                        肌のキメを整えたい方
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#B79D95]">✓</span>
                                        軽い使用感のスキンケアが好きな方
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#B79D95]">✓</span>
                                        毎日使いやすい化粧水を探している方
                                    </li>
                                </ul>
                            </article>
                        </div>
                    </section>

                    {/* 商品一覧へ戻る */}
                    <div className="mt-16 text-center">
                        <Link
                            href="/works/cosme-ec/site"
                            className="inline-flex items-center gap-3 border-b border-[#6F6258] px-2 pb-2 text-sm text-[#6F6258] transition hover:opacity-70"
                        >
                            ← 他の商品を見る
                        </Link>
                    </div>
                </div>
            </main>

            <BackToTop />
        </>
    );
}