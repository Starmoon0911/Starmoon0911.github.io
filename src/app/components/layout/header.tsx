"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import TerminalLogo from "./TerminalLogo";
const navItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 10) {
        setScrolled(false);
        setVisible(true);

        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      setScrolled(true);

      const delta = currentScrollY - lastScrollY;

      if (Math.abs(delta) >= 5) {
        if (delta > 0) {
          setVisible(false);
        } else {
          setVisible(true);
        }

        lastScrollY = currentScrollY;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-300 ease-out ${
          scrolled ? "px-4 py-2 sm:px-6" : "px-4 py-4 sm:px-6"
        }`}
      >
        <nav
          className={`flex items-center justify-between gap-4 border px-4 transition-all duration-300 ease-out ${
            scrolled
              ? "rounded-xl border-white/10 bg-black/30 py-2 shadow-lg backdrop-blur-xl"
              : "rounded-2xl border-transparent bg-transparent py-3 shadow-none backdrop-blur-none"
          }`}
        >
          <TerminalLogo />

          {/* Desktop navigation */}
          <div className="hidden shrink-0 items-center gap-6 md:flex">
            {navItems.map((item) => {
              const active =
                item.name === "About" ? false : pathname === item.href;

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
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
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
                }`}
              />

              <span
                className={`absolute top-1/2 left-0 h-px w-4 bg-current transition-all duration-200 ${
                  menuOpen ? "-rotate-45" : "translate-y-[3px]"
                }`}
              />
            </span>

            <span className="text-zinc-600">]</span>
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`grid overflow-hidden transition-[grid-template-rows,margin,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
            menuOpen
              ? "mt-2 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-100"
          }`}
        >
          <div className="min-h-0">
            <div
              className={`rounded-2xl border p-2 shadow-lg backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen
                  ? "border-white/10 bg-black/30 opacity-100"
                  : "border-transparent bg-black/0 opacity-0"
              }`}
            >
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
  );
}
