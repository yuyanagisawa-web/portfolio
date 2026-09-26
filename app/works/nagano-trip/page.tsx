"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import BackToTop from "../../../components/BackToTop";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const siteImages = [
    { src: "/nagano01.png", alt: "トップページ" },
    { src: "/nagano02.png", alt: "観光スポットページ" },
    { src: "/nagano03.png", alt: "団体旅行ページ" },
  ];

  const information = [

    {
      label: "Role",
      value: "デザイン／コーディング／レスポンシブ対応\n（全て単独担当）",
    },
    {
      label: "Tech",
      value: "HTML / CSS / JavaScript",
    },
    {
      label: "Type",
      value: "観光情報サイト",
    },
    {
      label: "Target",
      value: "観光や団体利用を検討している\nユーザー",
    },
    {
      label: "Period",
      value: "2025.12 / 約6日",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background px-6 text-foreground md:px-10">
        <div className="mx-auto max-w-7xl py-20">

          {/* ページ上部 */}
          <p className="font-editorial mb-5 text-sm tracking-[0.14em] text-muted">
            WORKS DETAIL
          </p>

          <Link
            href="/#works"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#DED6D2] bg-[#F3ECE6] px-5 py-3 text-sm text-[#625B57] transition-colors hover:bg-[#E8DCD6] hover:text-[#965564]"
          >
            ← Works一覧に戻る
          </Link>

          <header className="mb-16 border-b border-border pb-10">
            <p className="mb-4 text-xs tracking-[0.16em] text-muted">
              TRAVEL SITE
            </p>

            <h1 className="font-heading-ja mb-5 text-3xl font-medium tracking-[0.08em] text-foreground md:text-4xl">
              観光バス会社
            </h1>

            <p className="text-sm leading-8 text-[#625B57] md:text-base">
              デザイン / コーディング / レスポンシブ対応
            </p>
          </header>

          {/* SITE IMAGE */}
          <section className="mb-16">
            <div className="mb-10 text-center">
              <h2 className="font-editorial text-3xl font-normal tracking-[0.06em] text-[#B79D95] md:text-4xl">
                SITE IMAGE
              </h2>

              <p className="mt-3 text-xs tracking-[0.15em] text-[#965564] md:text-sm">
                サイトイメージ
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {siteImages.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="min-w-0 rounded-2xl border border-border bg-white/70 p-3 text-left transition hover:shadow-lg"
                >
                  <div className="overflow-hidden rounded-xl bg-white">
                    <p className="my-4 px-1 text-center text-sm text-foreground">
                      {image.alt}
                    </p>

                    <img
                      src={image.src}
                      alt={image.alt}
                      className="block h-[800px] w-full object-cover object-top"
                    />
                  </div>
                </button>
              ))}
            </div>

            <p className="mt-4 text-right text-xs leading-6 text-[#625B57]">
              ※守秘義務に配慮し、社名・一部情報の差し替え、および画像のぼかし加工を行って掲載しています。
            </p>
          </section>

          {/* 制作情報 */}
          <section className="mb-20">
            <div className="grid gap-5 md:grid-cols-6">
              {information.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-white/70 p-6 md:col-span-2"
                >
                  <h2 className="font-editorial mb-4 text-xl font-normal tracking-[0.06em] text-[#B79D95] md:text-2xl">
                    {item.label}
                  </h2>

                  <p className="whitespace-pre-line text-sm leading-8 text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 制作背景・工夫した点 */}
          <div className="mx-auto mb-20 max-w-5xl space-y-8">

            {/* 01 制作背景 */}
            <section className="rounded-3xl border border-border bg-white/70 p-6 md:p-10">
              <div className="mb-8 flex items-center gap-5 border-b border-border pb-6">
                <span className="font-editorial text-4xl text-[#B79D95] md:text-5xl">
                  01
                </span>

                <div>
                  <p className="font-editorial mb-1 text-sm tracking-[0.1em] text-[#B79D95]">
                    BACKGROUND
                  </p>

                  <h2 className="text-xl font-medium tracking-[0.08em] text-foreground md:text-2xl">
                    制作背景
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-sm leading-8 text-[#625B57] md:text-base md:leading-9">
                <p>
                  長野旅行の魅力やサービス内容が伝わるよう、
                  <br />
                  観光サイトのデザイン・コーディングを担当しました。
                </p>

                <p>
                  旅行を検討しているユーザーが実際の旅行イメージを持ちやすいよう、
                  <br />
                  写真を活かしたデザインと分かりやすい情報整理を意識しています。
                </p>
              </div>
            </section>

            {/* 02 工夫した点 */}
            <section className="rounded-3xl border border-border bg-white/70 p-6 md:p-10">
              <div className="mb-8 flex items-center gap-5 border-b border-border pb-6">
                <span className="font-editorial text-4xl text-[#B79D95] md:text-5xl">
                  02
                </span>

                <div>
                  <p className="font-editorial mb-1 text-sm tracking-[0.1em] text-[#B79D95]">
                    DESIGN & INTERACTION
                  </p>

                  <h2 className="text-xl font-medium tracking-[0.08em] text-foreground md:text-2xl">
                    工夫した点
                  </h2>
                </div>
              </div>

              <div className="space-y-8">

                {/* POINT 01 */}
                <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                  <div>
                    <p className="font-editorial mb-1 text-xs tracking-[0.1em] text-[#B79D95]">
                      POINT 01
                    </p>

                    <h3 className="text-sm font-medium text-foreground md:text-base">
                      写真を活かしたデザイン
                    </h3>
                  </div>

                  <p className="text-sm leading-8 text-[#625B57] md:text-base">
                    長野の自然や観光地の魅力が伝わるよう、
                    <br />
                    写真を大きく配置し、
                    <br />
                    視覚的に楽しめるデザインを目指しました。
                  </p>
                </div>

                <div className="border-t border-border" />

                {/* POINT 02 */}
                <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                  <div>
                    <p className="font-editorial mb-1 text-xs tracking-[0.1em] text-[#B79D95]">
                      POINT 02
                    </p>

                    <h3 className="text-sm font-medium text-foreground md:text-base">
                      情報整理と導線設計
                    </h3>
                  </div>

                  <p className="text-sm leading-8 text-[#625B57] md:text-base">
                    観光プランやサービス内容を比較しやすいよう情報を整理し、
                    <br />
                    必要な情報へアクセスしやすいレイアウトを意識しました。
                  </p>
                </div>

                <div className="border-t border-border" />

                {/* POINT 03 */}
                <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                  <div>
                    <p className="font-editorial mb-1 text-xs tracking-[0.1em] text-[#B79D95]">
                      POINT 03
                    </p>

                    <h3 className="text-sm font-medium text-foreground md:text-base">
                      読みやすさへの配慮
                    </h3>
                  </div>

                  <p className="text-sm leading-8 text-[#625B57] md:text-base">
                    余白や文字サイズのバランスを調整し、
                    <br />
                    幅広い年代のユーザーにも読みやすい構成としました。
                  </p>
                </div>

                <div className="border-t border-border" />

                {/* POINT 04 */}
                <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8">
                  <div>
                    <p className="font-editorial mb-1 text-xs tracking-[0.1em] text-[#B79D95]">
                      POINT 04
                    </p>

                    <h3 className="text-sm font-medium text-foreground md:text-base">
                      レスポンシブ対応
                    </h3>
                  </div>

                  <p className="text-sm leading-8 text-[#625B57] md:text-base">
                    スマートフォンでの閲覧も考慮し、
                    <br />
                    視認性や操作性を意識して実装しています。
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* 画像拡大モーダル */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 rounded-full bg-white px-4 py-2 text-sm text-[#393735]"
          >
            閉じる ×
          </button>

          <div
            className="max-h-[90vh] max-w-5xl overflow-y-auto rounded-xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="block h-auto w-full"
            />
          </div>
        </div>
      )}

      <BackToTop />
    </>
  );
}