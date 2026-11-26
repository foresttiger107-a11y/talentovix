import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { offices, site } from "@/lib/content";
import { Container, PageHero } from "@/components/ui";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Talk to a Talentovix expert about talent, consulting and technology.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something remarkable together."
        text="Whether you need a team, a strategy or both — tell us what you're working on."
      />
      <section className="bg-zinc-50 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="space-y-8 lg:col-span-4 lg:col-start-9">
            <div className="space-y-5">
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 text-lg font-medium hover:text-brand-600">
                <span className="grid size-11 place-items-center rounded-full bg-brand-500/10 text-brand-600"><Mail className="size-5" /></span>
                {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-4 text-lg font-medium hover:text-brand-600">
                <span className="grid size-11 place-items-center rounded-full bg-brand-500/10 text-brand-600"><Phone className="size-5" /></span>
                {site.phone}
              </a>
            </div>
            <div className="rounded-3xl border border-ink-900/10 bg-white p-8">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                <MapPin className="size-4" /> Our offices
              </p>
              <dl className="mt-6 space-y-5">
                {offices.map((o) => (
                  <div key={o.region}>
                    <dt className="font-semibold">{o.region}</dt>
                    <dd className="mt-1 text-sm text-ink-900/60">{o.cities.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
