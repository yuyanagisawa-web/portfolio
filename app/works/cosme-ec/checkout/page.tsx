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

export default function Page() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(cart);
    }, []);

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const updateQuantity = (slug: string, type: "increase" | "decrease") => {
        const updated = cartItems.map((item) => {
            if (item.slug !== slug) return item;

            const newQuantity =
                type === "increase"
                    ? item.quantity + 1
                    : Math.max(1, item.quantity - 1);

            return {
                ...item,
                quantity: newQuantity,
            };
        });

        setCartItems(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
    };

    const removeItem = (slug: string) => {
        const updated = cartItems.filter((item) => item.slug !== slug);

        setCartItems(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
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

                    <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                        Cart
                    </h1>

                    <p className="text-sm md:text-base text-[#6f6258] mb-8 md:mb-10">
                        購入前の確認画面を想定したカートUIです。
                    </p>

                    <div className="space-y-6 mb-8">

                        {cartItems.map((item) => (
                            <div
                                key={item.slug}
                                className="rounded-[2rem] bg-white p-5 md:p-7 shadow-sm border border-black/5"
                            >

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-8">

                                        <div className="h-24 w-20 rounded-[1.5rem] bg-[#e7ddd2] flex items-center justify-center">
                                            <div className="h-12 w-6 rounded-full bg-white/80" />
                                        </div>

                                        <div>

                                            <h2 className="text-xl md:text-2xl font-semibold mb-1">
                                                {item.name}
                                            </h2>

                                            <p className="text-[#6f6258] text-sm md:text-base mb-2">
                                                {item.category} / {item.size}
                                            </p>

                                            <div className="flex items-center gap-3 mt-3">

                                                <button
                                                    onClick={() => updateQuantity(item.slug, "decrease")}
                                                    className="h-8 w-8 rounded-full border border-black/10 bg-white hover:bg-black hover:text-white transition text-sm"
                                                >
                                                    -
                                                </button>

                                                <span className="min-w-6 text-center font-medium">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() => updateQuantity(item.slug, "increase")}
                                                    className="h-9 w-9 rounded-full border border-black/10 bg-white hover:bg-black hover:text-white transition"
                                                >
                                                    +
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="text-right">

                                        <p className="text-xl md:text-2xl font-semibold mb-3">
                                            ¥{(item.price * item.quantity).toLocaleString()}
                                        </p>

                                        <button
                                            onClick={() => removeItem(item.slug)}
                                            className="text-sm text-[#8b7d70] hover:text-black transition"
                                        >
                                            削除
                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                    <div className="rounded-[2rem] bg-white p-5 md:p-7 shadow-sm border border-black/5">

                        <div className="space-y-5 text-[#6f6258] text-xl">

                            <div className="flex justify-between">
                                <p>小計</p>

                                <p>
                                    ¥{totalPrice.toLocaleString()}
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <p>送料</p>
                                <p>¥0</p>
                            </div>

                        </div>

                        <div className="border-t border-black/10 my-8" />

                        <div className="flex justify-between items-center mb-10">

                            <p className="text-2xl md:text-3xl font-semibold">
                                合計
                            </p>

                            <p className="text-4xl font-bold">
                                ¥{totalPrice.toLocaleString()}
                            </p>

                        </div>

                        <button className="w-full rounded-full bg-[#1f1b18] text-white py-4 text-sm md:text-base font-medium hover:opacity-80 transition">
                            購入手続きへ進む
                        </button>

                    </div>

                </div>
            </main>

            <BackToTop />
        </>
    );
}