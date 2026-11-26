import { Button, Container } from "@/components/ui";
import { Reveal } from "@/components/motion";

export function CtaBand({
  title = "Ready to build what's next?",
  text = "Tell us about your ambition. A senior partner will get back to you within one business day.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-white py-24">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 px-8 py-16 text-white sm:px-16 sm:py-20">
            <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
            <div className="absolute -right-24 -top-24 -z-10 size-96 rounded-full border border-white/20" />
            <div className="absolute -right-8 -top-8 -z-10 size-64 rounded-full border border-white/25" />
            <div className="grid items-end gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{title}</h2>
                <p className="mt-5 max-w-xl text-lg text-white/80">{text}</p>
              </div>
              <div className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
                <Button href="/contact" variant="light">
                  Contact us
                </Button>
                <Button href="/careers" variant="outline">
                  Join us
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
