import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { insights } from "@/lib/content";
import { Container } from "@/components/ui";
import { InsightCard } from "@/components/insight-card";
import { CtaBand } from "@/components/cta-band";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  return insight ? { title: insight.title, description: insight.excerpt } : {};
}

export default async function InsightPage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) notFound();

  const related = insights.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <section className={`relative isolate overflow-hidden bg-gradient-to-br ${insight.gradient} pb-24 pt-40 text-white`}>
        <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/30 to-transparent" />
        <Container className="max-w-4xl">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white">
            <ArrowLeft className="size-4" /> All insights
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">{insight.category}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {insight.title}
          </h1>
          <p className="mt-6 text-white/80">
            {insight.date} · {insight.readTime}
          </p>
        </Container>
      </section>

      <article className="bg-white py-20">
        <Container className="max-w-3xl">
          <p className="font-display text-2xl leading-relaxed text-ink-900 text-pretty">{insight.excerpt}</p>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-900/75">
            {insight.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </Container>
      </article>

      <section className="bg-zinc-50 py-24">
        <Container>
          <h2 className="font-display text-3xl font-semibold tracking-tight">Keep reading</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <InsightCard key={r.slug} insight={r} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
