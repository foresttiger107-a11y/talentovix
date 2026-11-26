import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/content";
import { Container, PageHero } from "@/components/ui";
import { ServiceIcon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description: "Talent solutions, strategy consulting, engineering, data & AI, cloud and cybersecurity — delivered globally.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Six capabilities. <span className="font-serif font-normal italic text-gradient">One</span> accountable partner.
          </>
        }
        text="We combine consulting, engineering and a global talent engine to help organizations design, build and run what's next."
      />

      <section className="bg-white py-24 sm:py-32">
        <Container className="space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid gap-10 rounded-[2rem] border border-ink-900/10 p-8 transition duration-500 hover:border-brand-500/40 hover:shadow-[0_40px_80px_-40px_rgb(108_77_255/0.35)] sm:p-12 lg:grid-cols-12"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4">
                    <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                      <ServiceIcon name={s.icon} className="size-6" />
                    </span>
                    <span className="text-sm tabular-nums text-ink-900/40">0{i + 1}</span>
                  </div>
                  <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-900/60">{s.description}</p>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-600">
                    Explore {s.title}
                    <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
                <ul className="grid content-start gap-x-8 gap-y-4 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3 border-b border-ink-900/10 pb-4 text-ink-900/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
