"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Works", href: "/#works" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#DED6D2]/60 bg-[#F7F5F2]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">

        {/* ロゴ */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#D0C0BC] transition-colors group-hover:bg-[#E5DEDA]">
            <span className="font-editorial text-xl text-[#965564]">
              Y
            </span>

            {/* 小さな装飾 */}
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#D0C0BC]" />
          </div>

          <span className="font-editorial text-lg md:text-xl font-normal tracking-[0.02em] text-[#393735]">
            Yu Yanagisawa
          </span>
        </Link>

        {/* PCメニュー */}
        <nav
          aria-label="メインナビゲーション"
          className="hidden items-center gap-10 md:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 font-editorial text-base tracking-[0.04em] text-[#625B57] transition-colors hover:text-[#965564] group"
            >
              {link.label}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#B79D95] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* スマホメニューボタン */}
        <button
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-[#393735] transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
          />
          <span
            className={`h-px w-6 bg-[#393735] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`h-px w-6 bg-[#393735] transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
          />
        </button>

      </div>

      {/* スマホメニュー */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="スマートフォン用ナビゲーション"
          className="border-t border-[#DED6D2] bg-[#F7F5F2] px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-editorial text-xl text-[#393735] transition-colors hover:text-[#965564]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

    </header>
  );
}