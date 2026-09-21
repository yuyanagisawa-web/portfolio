"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../../../../components/Navbar";
import BackToTop from "../../../../components/BackToTop";

type CartItem = {
    slug: string;
    name: string;
    category: string;
    size: string;
    price: number;
    quantity: number;
};

const productImages: Record<string, string> = {
    "clear-toner": "/clear-toner.png",
    "glow-serum": "/glow-serum.png",
    "moisture-cream": "/moisture-cream.png",
};

export default function Page() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        try {
            const cart: CartItem[] = JSON.parse(
                localStorage.getItem("cart") || "[]"
            );
            setCartItems(Array.isArray(cart) ? cart : []);
        } catch {
            setCartItems([]);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const updateQuantity = (
        slug: string,
        type: "increase" | "decrease"
    ) => {
        const updated = cartItems.map((item) => {
            if (item.slug !== slug) return item;

            return {
                ...item,
                quantity:
                    type === "increase"
                        ? item.quantity + 1
                        : Math.max(1, item.quantity - 1),
            };
        });

        setCartItems(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    };

    const removeItem = (slug: string) => {
        const updated = cartItems.filter(
            (item) => item.slug !== slug
        );

        setCartItems(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
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

                        <span className="text-[#6F6258]">
                            ショッピングカート
                        </span>
                    </nav>

                    {/* ページタイトル */}
                    <header className="mb-12 border-b border-[#DED6D2] pb-9">
                        <p className="mb-4 text-xs tracking-[0.25em] text-[#B79D95]">
                            SHOPPING CART
                        </p>

                        <div className="flex flex-wrap items-end justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-medium tracking-[0.05em] text-[#3B322C] md:text-3xl">
                                    カート
                                </h1>

                                <p className="mt-4 text-sm leading-7 text-[#8B7D70]">
                                    カートに入れた商品をご確認ください。
                                </p>
                            </div>

                            {isLoaded && (
                                <p className="text-sm text-[#8B7D70]">
                                    {totalQuantity} ITEMS
                                </p>
                            )}
                        </div>
                    </header>

                    {!isLoaded ? (
                        <p className="py-20 text-center text-sm text-[#8B7D70]">
                            カートを読み込んでいます...
                        </p>
                    ) : cartItems.length === 0 ? (

                        /* カートが空の場合 */
                        <section className="rounded-[2rem] border border-[#E5DCD7] bg-white/80 px-6 py-20 text-center md:py-28">
                            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#F3ECE6]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="34"
                                    height="34"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#6F6258"
                                    strokeWidth="1.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                            </div>

                            <h2 className="mb-4 text-2xl font-medium text-[#3B322C]">
                                カートに商品がありません
                            </h2>

                            <p className="mb-9 text-sm leading-8 text-[#8B7D70]">
                                気になるアイテムを見つけて、
                                <br />
                                毎日のスキンケアに取り入れてみませんか。
                            </p>

                            <Link
                                href="/works/cosme-ec/site"
                                className="inline-flex items-center justify-center gap-5 rounded-full border border-[#6F6258] bg-[#6F6258] px-9 py-4 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#6F6258]"
                            >
                                商品一覧を見る
                                <span aria-hidden="true">→</span>
                            </Link>
                        </section>

                    ) : (

                        /* カートに商品がある場合 */
                        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">

                            {/* 左：商品一覧 */}
                            <section>
                                <div className="mb-6 flex items-center justify-between">
                                    <h2 className="text-lg font-medium text-[#3B322C]">
                                        カートの商品
                                    </h2>

                                    <span className="text-xs tracking-[0.15em] text-[#9B8F84]">
                                        {totalQuantity} ITEMS
                                    </span>
                                </div>

                                <div className="space-y-5">
                                    {cartItems.map((item) => (
                                        <article
                                            key={item.slug}
                                            className="rounded-[1.5rem] border border-[#E5DCD7] bg-white/80 p-4 shadow-sm md:p-6"
                                        >
                                            <div className="flex flex-col gap-5 sm:flex-row">

                                                {/* 商品画像 */}
                                                <Link
                                                    href={`/works/cosme-ec/products/${item.slug}`}
                                                    className="flex h-44 w-full shrink-0 items-center justify-center overflow-hidden rounded-[1.25rem] bg-[#EFE7DD] p-4 transition hover:opacity-80 sm:h-40 sm:w-32"
                                                >
                                                    <img
                                                        src={
                                                            productImages[item.slug] ||
                                                            "/clear-toner.png"
                                                        }
                                                        alt={item.name}
                                                        className="h-full w-full object-contain"
                                                    />
                                                </Link>

                                                {/* 商品情報 */}
                                                <div className="flex min-w-0 flex-1 flex-col justify-between">

                                                    <div>
                                                        <p className="mb-2 text-[11px] tracking-[0.18em] text-[#B79D95]">
                                                            LUMIÈRE SKIN
                                                        </p>

                                                        <Link
                                                            href={`/works/cosme-ec/products/${item.slug}`}
                                                            className="inline-block text-xl font-medium text-[#3B322C] transition hover:text-[#965564] md:text-2xl"
                                                        >
                                                            {item.name}
                                                        </Link>

                                                        <p className="mt-2 text-xs text-[#8B7D70]">
                                                            {item.category} / {item.size}
                                                        </p>

                                                        <p className="mt-4 text-sm font-medium text-[#625B57]">
                                                            単価 ¥{item.price.toLocaleString("ja-JP")}
                                                        </p>
                                                    </div>

                                                    {/* 数量・削除・小計 */}
                                                    <div className="mt-6 flex flex-wrap items-end justify-between gap-5">

                                                        <div>
                                                            <p className="mb-2 text-xs text-[#9B8F84]">
                                                                数量
                                                            </p>

                                                            <div className="inline-flex items-center overflow-hidden rounded-full border border-[#DED6D2] bg-white">
                                                                <button
                                                                    type="button"
                                                                    aria-label={`${item.name}の数量を減らす`}
                                                                    onClick={() =>
                                                                        updateQuantity(
                                                                            item.slug,
                                                                            "decrease"
                                                                        )
                                                                    }
                                                                    disabled={item.quantity === 1}
                                                                    className="flex h-9 w-9 items-center justify-center text-lg text-[#6F6258] transition hover:bg-[#F3ECE6] disabled:cursor-not-allowed disabled:opacity-30"
                                                                >
                                                                    −
                                                                </button>

                                                                <span
                                                                    aria-live="polite"
                                                                    className="min-w-9 text-center text-sm font-medium text-[#3B322C]"
                                                                >
                                                                    {item.quantity}
                                                                </span>

                                                                <button
                                                                    type="button"
                                                                    aria-label={`${item.name}の数量を増やす`}
                                                                    onClick={() =>
                                                                        updateQuantity(
                                                                            item.slug,
                                                                            "increase"
                                                                        )
                                                                    }
                                                                    className="flex h-9 w-9 items-center justify-center text-lg text-[#6F6258] transition hover:bg-[#F3ECE6]"
                                                                >
                                                                    ＋
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="text-right">
                                                            <p className="mb-3 text-xl font-medium text-[#3B322C]">
                                                                ¥{(
                                                                    item.price * item.quantity
                                                                ).toLocaleString("ja-JP")}
                                                            </p>

                                                            <button
                                                                type="button"
                                                                onClick={() => removeItem(item.slug)}
                                                                className="text-xs text-[#9B8F84] underline underline-offset-4 transition hover:text-[#965564]"
                                                            >
                                                                商品を削除
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>

                                {/* 買い物を続ける */}
                                <Link
                                    href="/works/cosme-ec/site"
                                    className="mt-8 inline-flex items-center gap-3 border-b border-[#6F6258] px-1 pb-2 text-sm text-[#6F6258] transition hover:opacity-70"
                                >
                                    ← 買い物を続ける
                                </Link>
                            </section>

                            {/* 右：注文内容 */}
                            <aside className="rounded-[1.75rem] border border-[#E5DCD7] bg-white/90 p-6 shadow-sm lg:sticky lg:top-24 lg:p-7">
                                <p className="mb-3 text-xs tracking-[0.2em] text-[#B79D95]">
                                    ORDER SUMMARY
                                </p>

                                <h2 className="mb-8 text-xl font-medium text-[#3B322C]">
                                    ご注文内容
                                </h2>

                                <div className="space-y-5 text-sm text-[#6F6258]">

                                    <div className="flex items-center justify-between gap-4">
                                        <span>
                                            商品小計（{totalQuantity}点）
                                        </span>

                                        <span className="font-medium text-[#3B322C]">
                                            ¥{totalPrice.toLocaleString("ja-JP")}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-4">
                                        <span>送料</span>

                                        <span className="text-[#3B322C]">
                                            ¥0
                                        </span>
                                    </div>

                                    <p className="text-xs leading-6 text-[#9B8F84]">
                                        ※ 送料はデモ用に無料で設定しています。
                                    </p>
                                </div>

                                <div className="my-7 border-t border-[#DED6D2]" />

                                {/* 合計 */}
                                <div className="mb-8 flex items-end justify-between gap-3">
                                    <span className="text-base font-medium text-[#3B322C]">
                                        合計
                                    </span>

                                    <span className="text-3xl font-medium tracking-tight text-[#3B322C]">
                                        ¥{totalPrice.toLocaleString("ja-JP")}
                                    </span>
                                </div>

                                {/* デモ用ボタン */}
                                <button
                                    type="button"
                                    disabled
                                    className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-full bg-[#6F6258] px-5 py-4 text-sm font-medium tracking-[0.04em] text-white opacity-60"
                                >
                                    購入手続きへ進む
                                    <span aria-hidden="true">→</span>
                                </button>

                                <p className="mt-4 text-center text-xs leading-6 text-[#9B8F84]">
                                    ポートフォリオ用デモのため、
                                    <br />
                                    実際の購入・決済はできません。
                                </p>
                            </aside>
                        </div>
                    )}

                    {/* ブランドメッセージ */}
                    <div className="mt-20 border-t border-[#DED6D2] pt-10 text-center">
                        <p className="mb-3 text-xs tracking-[0.25em] text-[#B79D95]">
                            LUMIÈRE SKIN
                        </p>

                        <p className="text-sm leading-8 text-[#8B7D70]">
                            肌に、静かなうるおいを。
                            <br />
                            毎日のケアを、もっと心地よく。
                        </p>
                    </div>
                </div>
            </main>

            <BackToTop />
        </>
    );
}