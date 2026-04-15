import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <nav className="flex items-center justify-between h-14 md:h-16">

          {/* ロゴ */}
          <Link
  href="/"
  className="text-base md:text-lg font-semibold tracking-wide"
>
  Yanagisawa Yu
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