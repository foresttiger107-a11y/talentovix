import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import type { Insight } from "@/lib/content";

export function InsightCard({ insight, featured = false }: { insight: Insight; featured?: boolean }) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(10_12_29/0.35)]"
    >
      <div
        className={clsx(
          "relative overflow-hidden bg-gradient-to-br",
          insight.gradient,
          featured ? "aspect-[16/9] lg:aspect-auto lg:flex-1 lg:min-h-80" : "aspect-[16/9]",
        )}
      >
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -bottom-16 -right-16 size-64 rounded-full border border-white/30 transition-transform duration-700 group-hover:scale-125" />
        <div className="absolute -bottom-8 -right-8 size-40 rounded-full border border-white/40 transition-transform duration-700 group-hover:scale-125" />
        <span className="absolute left-6 top-6 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {insight.category}
        </span>
      </div>
      <div className="flex flex-col p-7">
        <p className="text-xs text-ink-900/50">
          {insight.date} · {insight.readTime}
        </p>
        <h3
          className={clsx(
            "mt-3 font-display font-semibold leading-snug tracking-tight text-balance transition-colors group-hover:text-brand-600",
            featured ? "text-2xl sm:text-3xl" : "text-xl",
          )}
        >
          {insight.title}
        </h3>
        {featured && <p className="mt-3 leading-relaxed text-ink-900/60">{insight.excerpt}</p>}
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
          Read more
          <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
