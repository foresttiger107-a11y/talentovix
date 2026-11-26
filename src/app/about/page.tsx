import type { Metadata } from "next";
import { stats, values } from "@/lib/content";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { Counter, Reveal } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About us",
  description: "Our story, values and leadership — an international group built around talent.",
};

const timeline = [
  { year: "2012", text: "Founded in London as a specialist technology talent firm." },
  { year: "2015", text: "Opened first nearshore delivery centers in Warsaw and Lisbon." },
  { year: "2018", text: "Launched Strategy & Consulting practice; expanded to North America." },
  { year: "2021", text: "Crossed 5,000 professionals; entered Latin America and the Middle East." },
  { year: "2024", text: "Established Data & AI practice and Asia Pacific hubs." },
  { year: "2026", text: "12,000+ professionals in 32 countries serving 650+ enterprises." },
];

const leaders = [
  { name: "Elena Marković", role: "Chief Executive Officer", initials: "EM" },
  { name: "David Okafor", role: "Chief Operating Officer", initials: "DO" },
  { name: "Priya Raman", role: "Global Head, Data & AI", initials: "PR" },
  { name: "Lucas Ferreira", role: "President, Americas", initials: "LF" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Built around <span className="font-serif font-normal italic text-gradient">people</span>, since day one.
          </>
        }
        text="Talentovix started with a simple belief: transformation succeeds or fails on talent. Today we're an international group combining consulting, engineering and talent services under one roof."
      />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <dl className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="flex flex-col-reverse border-l border-ink-900/10 pl-6">
                <dt className="mt-2 text-sm text-ink-900/60">{s.label}</dt>
                <dd className="font-display text-5xl font-semibold tracking-tight text-brand-600">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-zinc-50 py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="Our values" title="What we stand for." text="Four principles guide every decision we make — from who we hire to how we deliver." />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-ink-900/10 bg-white p-8">
                  <span className="font-display text-sm font-semibold text-brand-600">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-900/60">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade opacity-60" />
        <Container>
          <Reveal>
            <SectionHeading dark eyebrow="Our journey" title="From boutique to global group." />
          </Reveal>
          <ol className="relative mt-16 grid gap-10 md:grid-cols-3 lg:grid-cols-6">
            <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-brand-400 via-accent-400 to-transparent lg:block" />
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <li className="relative">
                  <span className="block size-4 rounded-full border-2 border-accent-400 bg-ink-950" />
                  <p className="mt-6 font-display text-3xl font-semibold">{t.year}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{t.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Leadership" title="Meet the people leading Talentovix." />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.08}>
                <div className="group">
                  <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-3xl bg-gradient-to-br from-ink-800 via-ink-900 to-brand-600">
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <span className="relative font-display text-6xl font-semibold text-white/80 transition-transform duration-500 group-hover:scale-110">
                      {l.initials}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{l.name}</h3>
                  <p className="text-ink-900/60">{l.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
