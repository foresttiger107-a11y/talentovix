import Link from "next/link";
import { ArrowUpRight, Globe2, Layers, Rocket, Users } from "lucide-react";
import { clients, industries, insights, offices, services, stats } from "@/lib/content";
import { Button, Container, Eyebrow, SectionHeading, TextLink } from "@/components/ui";
import { ServiceIcon } from "@/components/icons";
import { Counter, Reveal } from "@/components/motion";
import { HeroVisual } from "@/components/hero-visual";
import { InsightCard } from "@/components/insight-card";
import { CtaBand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <ServicesSection />
      <StatsSection />
      <DifferenceSection />
      <IndustriesSection />
      <InsightsSection />
      <GlobalSection />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade" aria-hidden />
      <div className="absolute -left-40 top-20 -z-10 size-[620px] rounded-full bg-brand-600/30 blur-[150px]" aria-hidden />
      <div className="absolute -right-20 bottom-0 -z-10 size-[520px] rounded-full bg-accent-500/20 blur-[150px]" aria-hidden />

      <Container className="grid min-h-[100svh] items-center gap-12 pb-20 pt-32 lg:grid-cols-12 lg:pt-28">
        <div className="lg:col-span-7">
          <Reveal>
            <Link
              href="/insights/agentic-ai-workforce-2027"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-4 text-sm text-white/80 backdrop-blur transition hover:border-white/30"
            >
              <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-semibold text-white">New</span>
              The Agentic Enterprise 2027 report
              <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[5.25rem]">
              Where great talent meets{" "}
              <span className="font-serif font-normal italic text-gradient">bold</span>{" "}
              transformation.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Talentovix is an international talent and consulting group. We bring together 12,000 experts in
              strategy, technology and people to help enterprises reinvent how they grow.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">Start a conversation</Button>
              <Button href="/services" variant="outline">
                Explore services
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="lg:col-span-5">
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  );
}

function ClientMarquee() {
  const row = [...clients, ...clients];
  return (
    <section className="border-b border-ink-900/5 bg-white py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-900/45">
          Trusted by 650+ enterprises across five continents
        </p>
      </Container>
      <div className="mask-x mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {row.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-ink-900/30"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Capabilities that move the needle — from{" "}
                  <span className="font-serif font-normal italic text-brand-600">people</span> to platforms.
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.1}>
            <TextLink href="/services">View all services</TextLink>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08} className="bg-white">
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden p-8 transition-colors duration-500 hover:bg-ink-950 sm:p-10"
              >
                <div className="absolute -right-20 -top-20 size-56 rounded-full bg-brand-500/0 blur-3xl transition-all duration-700 group-hover:bg-brand-500/40" />
                <span className="relative grid size-14 place-items-center rounded-2xl bg-brand-500/10 text-brand-600 transition-colors duration-500 group-hover:bg-white/10 group-hover:text-accent-400">
                  <ServiceIcon name={s.icon} className="size-6" />
                </span>
                <h3 className="relative mt-8 font-display text-2xl font-semibold text-ink-900 transition-colors duration-500 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="relative mt-3 flex-1 leading-relaxed text-ink-900/60 transition-colors duration-500 group-hover:text-white/70">
                  {s.short}
                </p>
                <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors duration-500 group-hover:text-white">
                  Learn more
                  <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-24 text-white sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgb(108_77_255/0.35),transparent_60%)]" />
      <Container>
        <Reveal>
          <p className="max-w-3xl font-display text-3xl font-medium leading-snug text-balance sm:text-4xl">
            One integrated group. <span className="text-white/50">Talent, consulting and engineering under one roof —
            delivering at global scale with local depth.</span>
          </p>
        </Reveal>
        <dl className="mt-16 grid grid-cols-2 gap-y-12 border-t border-white/10 pt-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="flex flex-col-reverse">
              <dt className="mt-2 text-sm text-white/60">{s.label}</dt>
              <dd className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                <span className="text-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function DifferenceSection() {
  const pillars = [
    { icon: Users, title: "Talent at the core", text: "A 40,000-strong vetted network and in-house recruiters in every region mean the right experts, fast." },
    { icon: Layers, title: "Integrated delivery", text: "Strategy, engineering and staffing combined in one accountable team — no hand-offs, no gaps." },
    { icon: Globe2, title: "Global, yet local", text: "Delivery centers across 32 countries with nearshore options in every major time zone." },
    { icon: Rocket, title: "Outcome-based", text: "Commercial models tied to the value we create, with transparent KPIs from day one." },
  ];
  return (
    <section className="relative overflow-hidden bg-zinc-50 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-dark mask-fade" aria-hidden />
      <Container className="relative grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Why Talentovix"
            title="The partner that brings both the strategy and the people to deliver it."
            text="Most firms advise. Others staff. We do both — combining consulting rigor with a global talent engine so transformation doesn't stall for lack of the right expertise."
          />
          <div className="mt-10">
            <Button href="/about" variant="outline-dark">
              Our story
            </Button>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className={i % 2 ? "sm:translate-y-12" : ""}>
              <div className="h-full rounded-3xl border border-ink-900/10 bg-white p-8 shadow-[0_1px_0_rgb(0_0_0/0.03),0_20px_40px_-24px_rgb(10_12_29/0.15)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(108_77_255/0.35)]">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                  <p.icon className="size-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-900/60">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Deep sector expertise where it matters most."
            text="Specialist teams who speak your industry's language — its regulation, economics and customers."
          />
        </Reveal>
        <ul className="mt-16 divide-y divide-ink-900/10 border-y border-ink-900/10">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={0.03 * i} y={12}>
              <li>
                <Link
                  href={`/industries#${ind.slug}`}
                  className="group grid items-center gap-2 py-7 sm:grid-cols-12 sm:gap-6"
                >
                  <span className="text-sm tabular-nums text-ink-900/40 sm:col-span-1">0{i + 1}</span>
                  <span className="font-display text-2xl font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-brand-600 sm:col-span-5 sm:text-3xl">
                    {ind.title}
                  </span>
                  <span className="text-ink-900/60 sm:col-span-5">{ind.text}</span>
                  <span className="hidden justify-self-end sm:col-span-1 sm:block">
                    <span className="grid size-11 place-items-center rounded-full border border-ink-900/15 transition-all duration-300 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function InsightsSection() {
  const [featured, ...rest] = insights;
  return (
    <section className="bg-zinc-50 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading eyebrow="Insights" title="Thinking that shapes what's next." />
          </Reveal>
          <Reveal delay={0.1}>
            <TextLink href="/insights">All insights</TextLink>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <InsightCard insight={featured} featured />
          </Reveal>
          {rest.slice(0, 2).map((ins, i) => (
            <Reveal key={ins.slug} delay={0.1 * (i + 1)}>
              <InsightCard insight={ins} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function GlobalSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade opacity-60" aria-hidden />
      <div className="absolute left-1/2 top-1/2 -z-10 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-[160px]" />
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow dark>Global footprint</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              17 hubs. 32 countries. <span className="font-serif font-normal italic text-gradient">One team.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              Follow-the-sun delivery with nearshore centers serving every major market — so your teams are always
              within reach and in your time zone.
            </p>
            <div className="mt-10">
              <Button href="/contact">Find an office</Button>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {offices.map((o, i) => (
              <Reveal key={o.region} delay={i * 0.06} className={i === 0 ? "sm:col-span-2" : ""}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.06]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-400">{o.region}</p>
                  <p className="mt-4 font-display text-xl font-medium text-white/90">{o.cities.join(" · ")}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
