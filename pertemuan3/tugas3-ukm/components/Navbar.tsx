"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const daftarMenu = [
  { href: "/", label: "Beranda" },
  { href: "/ukm", label: "Direktori UKM" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900"
        >
          <span className="text-xl">🏛️</span>
          <span>RuangUKM</span>
        </Link>

        <nav aria-label="Navigasi Utama" className="flex flex-wrap items-center gap-2">
          {daftarMenu.map((menu) => {
            const isActive =
              menu.href === "/"
                ? pathname === "/"
                : pathname === menu.href || pathname.startsWith(`${menu.href}/`);

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {menu.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}