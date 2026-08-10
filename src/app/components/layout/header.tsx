"use client";

import { useEffect, useRef, useState } from "react";
import TerminalLogo from "./TerminalLogo";
import { usePathname } from "next/navigation";
const navItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const sentinel = document.getElementById("header-sentinel");

    if (!sentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      setScrolled(!entry.isIntersecting);
    });

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 h-px w-px" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out`}
      >
        <div
          className={`mx-auto max-w-6xl transition-all duration-300 ease-out ${
            scrolled ? "px-4 py-2 sm:px-6" : "px-4 py-4 sm:px-6"
          } `}
        >
          <nav
            className={`flex items-center justify-between gap-4 border px-4 transition-all duration-300 ease-out ${
              scrolled
                ? `rounded-xl border-white/10 bg-black/30 py-2 shadow-lg backdrop-blur-xl`
                : `rounded-2xl border-transparent bg-transparent py-3 shadow-none backdrop-blur-none`
            }I `}
          >
            <TerminalLogo />
            <div className="hidden shrink-0 items-center gap-6 md:flex">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative font-mono text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.name}

                    <span
                      className={`absolute -bottom-1 left-1/2 h-px -translate-x-1/2 bg-white transition-all duration-300 ease-out ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      } `}
                    />
                  </a>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="flex shrink-0 items-center font-mono text-sm text-zinc-400 transition-colors hover:text-white md:hidden"
            >
              <span className="text-zinc-600">[</span>

              <span className="relative mx-1 h-4 w-4">
                <span
                  className={`absolute top-1/2 left-0 h-px w-4 bg-current transition-all duration-200 ${
                    menuOpen ? "rotate-45" : "-translate-y-[3px]"
                  } `}
                />

                <span
                  className={`absolute top-1/2 left-0 h-px w-4 bg-current transition-all duration-200 ${
                    menuOpen ? "-rotate-45" : "translate-y-[3px]"
                  } `}
                />
              </span>

              <span className="text-zinc-600">]</span>
            </button>
          </nav>

          <div
            className={`grid transition-all duration-300 ease-out md:hidden ${
              menuOpen
                ? "mt-2 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            } `}
          >
            <div className="overflow-hidden">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-2 shadow-lg backdrop-blur-xl">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center rounded-xl px-4 py-3 font-mono text-sm text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                    style={{
                      transitionDelay: menuOpen ? `${index * 40}ms` : "0ms",
                    }}
                  >
                    <span className="mr-3 text-zinc-600">├─</span>

                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
