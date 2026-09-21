import type { Metadata } from "next";
import {
  Noto_Sans_JP,
  Bodoni_Moda,
} from "next/font/google";
import "./globals.css";

// 日本語フォント
const notoSans = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// 英字見出し用フォント
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// サイト情報
export const metadata: Metadata = {
  title: "Yu Yanagisawa Portfolio",
  description: "Web Designer / Coder Portfolio",
};

// 共通レイアウト
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSans.variable} ${bodoni.variable} antialiased`}
      >
        <div className="page-fade">
          {children}
        </div>
      </body>
    </html>
  );
}