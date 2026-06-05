import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <nav className="flex items-center justify-between h-14 md:h-16">

          {/* ロゴ */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#fbcfe8]/20 bg-white/[0.03] text-sm font-bold text-[#fbcfe8]">
              Y
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#d8b4fe]" />
            </span>

            <span className="text-lg font-bold tracking-wide text-white">
              Yu Yanagisawa
            </span>
          </Link>

          {/* メニュー */}
          <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base text-gray-300">
            <a href="/#works" className="hover:text-white transition">
              Works
            </a>
            <a href="/#about" className="hover:text-white transition">
              About
            </a>
            <a href="/#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

        </nav>
      </div>
    </header>
  );
}