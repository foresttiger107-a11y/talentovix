import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, HeartPulse, Laptop, Plane } from "lucide-react";
import { jobs } from "@/lib/content";
import { Button, Container, PageHero, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join 12,000+ Talentovians across 32 countries. Explore open roles in consulting, engineering, data, cloud and talent.",
};

const perks = [
  { icon: Laptop, title: "Flexible & remote-first", text: "Work from one of 17 hubs or from home — we're built for distributed teams." },
  { icon: GraduationCap, title: "Learning budget", text: "Annual budget for certifications, conferences and our Talentovix Academy." },
  { icon: Plane, title: "Global mobility", text: "Opportunities to relocate or work on international engagements." },
  { icon: HeartPulse, title: "Wellbeing", text: "Comprehensive health cover, mental health support and wellness days." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Do the best work <span className="font-serif font-normal italic text-gradient">of your life.</span>
          </>
        }
        text="Join a global community of consultants, engineers and talent experts solving meaningful problems for the world's leading organizations."
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="#open-roles">See open roles</Button>
        </div>
      </PageHero>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Life at Talentovix" title="Grow faster, together." />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-zinc-50 p-8">
                  <p.icon className="size-7 text-brand-600" strokeWidth={1.6} />
                  <h3 className="mt-6 font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-900/60">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="open-roles" className="scroll-mt-20 bg-zinc-50 py-24 sm:py-32">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Open roles" title={`${jobs.length} positions open right now.`} />
          </Reveal>
          <ul className="mt-12 divide-y divide-ink-900/10 overflow-hidden rounded-3xl border border-ink-900/10 bg-white">
            {jobs.map((job) => (
              <li key={job.title}>
                <Link
                  href="/contact"
                  className="group grid items-center gap-2 p-6 transition hover:bg-zinc-50 sm:grid-cols-12 sm:gap-6 sm:px-8"
                >
                  <span className="font-display text-lg font-semibold transition group-hover:text-brand-600 sm:col-span-5">
                    {job.title}
                  </span>
                  <span className="text-sm text-ink-900/60 sm:col-span-3">{job.team}</span>
                  <span className="text-sm text-ink-900/60 sm:col-span-3">{job.location}</span>
                  <ArrowUpRight className="hidden size-5 justify-self-end transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:col-span-1 sm:block" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
