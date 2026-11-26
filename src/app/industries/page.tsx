import type { Metadata } from "next";
import { industries } from "@/lib/content";
import { Container, PageHero } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Industries",
  description: "Sector expertise across financial services, healthcare, technology, energy, retail, manufacturing, telecom and the public sector.",
};

const gradients = [
  "from-violet-600 to-indigo-700",
  "from-emerald-500 to-teal-700",
  "from-sky-500 to-blue-700",
  "from-amber-400 to-orange-600",
  "from-rose-500 to-fuchsia-700",
  "from-slate-600 to-slate-900",
  "from-cyan-500 to-indigo-600",
  "from-indigo-500 to-violet-800",
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Fluent in the language of <span className="font-serif font-normal italic text-gradient">your</span> industry.
          </>
        }
        text="Specialist teams that combine sector know-how, regulatory depth and the right talent to accelerate change where it counts."
      />
      <section className="bg-white py-24 sm:py-32">
        <Container className="grid gap-6 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 2) * 0.08}>
              <article
                id={ind.slug}
                className="group relative isolate flex h-full min-h-80 scroll-mt-28 flex-col justify-end overflow-hidden rounded-[2rem] p-10 text-white"
              >
                <div className={`absolute inset-0 -z-20 bg-gradient-to-br ${gradients[i % gradients.length]}`} />
                <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
                <div className="absolute -right-24 -top-24 -z-10 size-80 rounded-full border border-white/25 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute -right-10 -top-10 -z-10 size-52 rounded-full border border-white/30 transition-transform duration-700 group-hover:scale-125" />
                <span className="text-sm tabular-nums text-white/60">0{i + 1}</span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{ind.title}</h2>
                <p className="mt-3 max-w-md text-lg text-white/80">{ind.text}</p>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>
      <CtaBand title="Let's talk about your sector." />
    </>
  );
}
