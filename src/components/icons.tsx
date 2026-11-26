import { Cloud, Compass, Cpu, ShieldCheck, Sparkles, Users } from "lucide-react";
import type { Service } from "@/lib/content";

const map = {
  users: Users,
  cpu: Cpu,
  compass: Compass,
  cloud: Cloud,
  sparkles: Sparkles,
  shield: ShieldCheck,
} as const;

export function ServiceIcon({ name, className }: { name: Service["icon"]; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden strokeWidth={1.6} />;
}

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="tvx-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="0.5" stopColor="#6c4dff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#tvx-g)" />
      <path d="M8 10h16v3.2h-6.4V24h-3.2V13.2H8z" fill="#fff" />
      <circle cx="22.5" cy="21.5" r="2.5" fill="#fff" />
    </svg>
  );
}
