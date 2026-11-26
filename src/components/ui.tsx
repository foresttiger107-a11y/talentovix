import Link from "next/link";
import clsx from "clsx";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={clsx("mx-auto w-full max-w-7xl px-5 sm:px-8", className)} {...props} />;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline" | "outline-dark";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400",
        variant === "primary" &&
          "bg-brand-500 text-white shadow-[0_8px_30px_-8px_rgb(108_77_255/0.7)] hover:bg-brand-600 hover:shadow-[0_12px_40px_-8px_rgb(108_77_255/0.9)]",
        variant === "light" && "bg-white text-ink-900 hover:bg-white/90",
        variant === "outline" && "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
        variant === "outline-dark" && "border border-ink-900/15 text-ink-900 hover:border-ink-900/50",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
    </Link>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={clsx(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
        dark ? "text-accent-400" : "text-brand-600",
      )}
    >
      <span className={clsx("h-px w-8", dark ? "bg-accent-400" : "bg-brand-500")} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  dark = false,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("max-w-3xl", className)}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={clsx(
          "mt-5 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl",
          dark ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {text && (
        <p className={clsx("mt-5 text-lg leading-relaxed text-pretty", dark ? "text-white/65" : "text-ink-900/65")}>
          {text}
        </p>
      )}
    </div>
  );
}

export function TextLink({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-1.5 text-sm font-semibold",
        dark ? "text-white" : "text-ink-900",
      )}
    >
      <span className="bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pb-20 pt-40 text-white sm:pb-28 sm:pt-48">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade opacity-70" aria-hidden />
      <div
        className="absolute -right-40 -top-40 -z-10 size-[600px] rounded-full bg-brand-500/30 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-60 left-1/4 -z-10 size-[500px] rounded-full bg-accent-500/20 blur-[140px]"
        aria-hidden
      />
      <Container>
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">{text}</p>}
        {children}
      </Container>
    </section>
  );
}
