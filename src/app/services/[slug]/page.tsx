import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { insights, services } from "@/lib/content";
import { Button, Container, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { ServiceIcon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { InsightCard } from "@/components/insight-card";
import { CtaBand } from "@/components/cta-band";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return service ? { title: service.title, description: service.description } : {};
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Services" title={service.title} text={service.description}>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact">Talk to an expert</Button>
          <Button href="#capabilities" variant="outline">
            Capabilities
          </Button>
        </div>
      </PageHero>

      {/* Outcomes */}
      <section className="border-b border-ink-900/10 bg-white">
        <Container>
          <dl className="grid divide-y divide-ink-900/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {service.outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.08} className="flex flex-col-reverse px-2 py-10 sm:px-10 sm:first:pl-0">
                <dt className="mt-2 text-ink-900/60">{o.label}</dt>
                <dd className="font-display text-5xl font-semibold tracking-tight text-brand-600">{o.value}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="scroll-mt-24 bg-white py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Capabilities"
              title="What we bring to the table."
              text={service.short}
            />
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {service.capabilities.map((c, i) => (
              <Reveal key={c} delay={i * 0.05}>
                <li className="flex h-full items-start gap-4 rounded-2xl border border-ink-900/10 bg-zinc-50 p-6">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                    <Check className="size-4" />
                  </span>
                  <span className="font-medium">{c}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Approach */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade opacity-60" />
        <Container>
          <Reveal>
            <SectionHeading dark eyebrow="Our approach" title="A proven path from ambition to impact." />
          </Reveal>
          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <li className="relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                  <span className="font-display text-6xl font-semibold text-white/10">0{i + 1}</span>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/60">{step.text}</p>
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-brand-400 to-accent-400" />
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Related insights */}
      <section className="bg-zinc-50 py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Related insights" title="Ideas from our experts." />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {insights.slice(0, 3).map((ins, i) => (
              <Reveal key={ins.slug} delay={i * 0.08}>
                <InsightCard insight={ins} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="bg-white pt-24">
        <Container>
          <Eyebrow>Explore more</Eyebrow>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-900/10 p-6 transition hover:border-brand-500/50"
              >
                <span className="flex items-center gap-4">
                  <ServiceIcon name={s.icon} className="size-6 text-brand-600" />
                  <span className="font-display text-lg font-semibold">{s.title}</span>
                </span>
                <ArrowUpRight className="size-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
