"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../../../../components/Navbar";
import BackToTop from "../../../../../components/BackToTop";

export default function Page() {
    const [quantity, setQuantity] = useState(1);
    const router = useRouter();

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");

        const newItem = {
            slug: "glow-serum",
            name: "Glow Serum",
            category: "美容液",
            size: "30ml",
            price: 4800,
            quantity,
        };

        const existingItem = cart.find(
            (item: any) => item.slug === newItem.slug
        );

        const updatedCart = existingItem
            ? cart.map((item: any) =>
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

            <main className="min-h-screen bg-[#f7f3ee] text-[#1f1b18] px-6 md:px-10">
                <div className="max-w-6xl mx-auto py-20">

                    <Link
                        href="/works/cosme-ec/site"
                        className="inline-flex items-center text-sm text-[#6f6258] hover:text-[#1f1b18] mb-10"
                    >
                        ← 商品一覧に戻る
                    </Link>

                    <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] items-start">

                        <div className="rounded-[2rem] bg-[#efe7dd] p-8">
                            <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-white via-[#eadfd3] to-[#cdbdaa] border border-white/70 flex items-center justify-center">

                                <div className="text-center">

                                    <div className="mx-auto h-56 w-32 rounded-t-full rounded-b-2xl bg-white/80 border border-white shadow-sm mb-5" />

                                    <p className="text-xs tracking-[0.25em] uppercase text-[#8b7d70]">
                                        Lumière
                                    </p>

                                </div>

                            </div>
                        </div>

                        <div>

                            <p className="text-sm tracking-[0.2em] text-[#b6a99e] uppercase mb-4">
                                美容液
                            </p>

                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Glow Serum
                            </h1>

                            <p className="text-2xl font-semibold mb-6">
                                ¥4,800
                            </p>

                            <p className="text-[#6f6258] leading-8 mb-8">
                                肌にうるおいと透明感を与えるデイリーセラムです。
                                軽やかなテクスチャで肌になじみやすく、
                                朝晩どちらのスキンケアにも取り入れやすい使用感を想定しています。

                                <br /><br />

                                毎日のケアの中で、
                                心地よく使い続けられるミニマルな美容液として設計しました。
                            </p>

                            <div className="grid gap-4 mb-8">

                                <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
                                    <h2 className="font-semibold mb-2">
                                        特徴
                                    </h2>

                                    <p className="text-sm text-[#6f6258] leading-7">
                                        うるおい感と軽やかな使用感のバランスを意識した美容液です。
                                        シンプルなスキンケア導線を想定し、
                                        商品情報が自然に伝わるUIで構成しています。
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white border border-black/5 p-5 shadow-sm">
                                    <h2 className="font-semibold mb-2">
                                        こんな方におすすめ
                                    </h2>

                                    <ul className="text-sm text-[#6f6258] leading-7 space-y-1">
                                        <li>・乾燥やくすみが気になる方</li>
                                        <li>・軽い使用感の美容液を探している方</li>
                                        <li>・毎日使いやすいスキンケアを求める方</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="grid gap-3 mb-8 text-sm text-[#6f6258]">
                                <p>内容量：30ml</p>
                                <p>使用目安：朝・夜</p>
                                <p>肌タイプ：乾燥・くすみが気になる肌へ</p>
                            </div>

                            <div className="flex items-center gap-4 mb-8">

                                <button
                                    onClick={() =>
                                        setQuantity((prev) =>
                                            Math.max(1, prev - 1)
                                        )
                                    }
                                    className="h-10 w-10 rounded-full border border-black/10 bg-white"
                                >
                                    -
                                </button>

                                <span className="min-w-6 text-center font-medium">
                                    {quantity}
                                </span>

                                <button
                                    onClick={() =>
                                        setQuantity((prev) => prev + 1)
                                    }
                                    className="h-10 w-10 rounded-full border border-black/10 bg-white"
                                >
                                    +
                                </button>

                            </div>
                            <button
                                onClick={addToCart}
                                className="w-full md:w-auto inline-flex justify-center rounded-full bg-[#1f1b18] text-white px-8 py-4 text-sm font-medium hover:opacity-80 transition"
                            >
                                カートに入れる
                            </button>

                        </div>

                    </div>

                </div>
            </main>

            <BackToTop />
        </>
    );
}