"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { navigation, services, site } from "@/lib/content";
import { Logo, ServiceIcon } from "@/components/icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (adjust state during render instead of in an effect)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setMegaOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || megaOpen
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-white" aria-label={`${site.name} home`}>
          <Logo className="size-8" />
          <span className="font-display text-xl font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navigation.map((item) =>
            item.label === "Services" ? (
              <button
                key={item.href}
                type="button"
                onMouseEnter={() => setMegaOpen(true)}
                onClick={() => setMegaOpen((v) => !v)}
                aria-expanded={megaOpen}
                className={clsx(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(item.href) || megaOpen ? "text-white" : "text-white/70 hover:text-white",
                )}
              >
                {item.label}
                <ChevronDown className={clsx("size-4 transition-transform", megaOpen && "rotate-180")} aria-hidden />
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setMegaOpen(false)}
                className={clsx(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(item.href) ? "text-white" : "text-white/70 hover:text-white",
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-brand-400 to-accent-400" />
                )}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-white/90 sm:inline-flex"
          >
            Contact us
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <button
            type="button"
            className="rounded-full p-2 text-white lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-0 top-full hidden border-b border-white/10 bg-ink-950/95 backdrop-blur-xl lg:block"
          >
            <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10 px-8 py-10">
              <div className="col-span-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">What we do</p>
                <p className="mt-4 font-display text-2xl font-semibold text-white text-balance">
                  End-to-end capabilities that connect talent, technology and strategy.
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent-400"
                >
                  Explore all services <ArrowRight className="size-4" />
                </Link>
              </div>
              <ul className="col-span-8 grid grid-cols-2 gap-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex gap-4 rounded-2xl p-4 transition hover:bg-white/5"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/5 text-accent-400 ring-1 ring-white/10 transition group-hover:bg-brand-500 group-hover:text-white">
                        <ServiceIcon name={s.icon} className="size-5" />
                      </span>
                      <span>
                        <span className="block font-semibold text-white">{s.title}</span>
                        <span className="mt-1 block text-sm leading-snug text-white/55">{s.short}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto bg-ink-950 px-5 pb-10 pt-6 lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between border-b border-white/10 py-5 font-display text-3xl font-semibold text-white"
                  >
                    {item.label}
                    <ArrowRight className="size-6 text-white/40" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link
              href="/contact"
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 font-semibold text-white"
            >
              Contact us <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
