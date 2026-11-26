import type { Metadata } from "next";
import { insights } from "@/lib/content";
import { Container, PageHero } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { InsightCard } from "@/components/insight-card";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Insights",
  description: "Research, perspectives and case studies on talent, technology and transformation.",
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Research and ideas for leaders who build the future."
        text="Data-driven perspectives on AI, talent markets, cloud and transformation — from the people doing the work."
      />
      <section className="bg-zinc-50 py-24 sm:py-32">
        <Container>
          <Reveal>
            <InsightCard insight={featured} featured />
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((ins, i) => (
              <Reveal key={ins.slug} delay={(i % 3) * 0.08}>
                <InsightCard insight={ins} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="Get insights in your inbox." text="Monthly research and perspectives from our experts. No noise." />
    </>
  );
}
