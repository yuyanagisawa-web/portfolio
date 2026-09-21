"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-20 flex-col items-center justify-center rounded-full border border-[#6F6258] bg-[#6F6258] text-white shadow-lg transition hover:bg-[#51483F] hover:shadow-xl"
      aria-label="ページ上部へ戻る"
    >
      ↑ Top
    </button>
  );
}