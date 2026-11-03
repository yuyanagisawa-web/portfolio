
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yu Yanagisawa Portfolio",
  description: "Web Designer / Coder Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <div className="page-fade">{children}</div>
      </body>
    </html>
  );
}
