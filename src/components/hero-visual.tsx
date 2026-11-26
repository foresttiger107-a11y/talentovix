"use client";

import { motion, useReducedMotion } from "motion/react";

// Abstract "global network" visual: concentric orbits with nodes representing hubs.
const nodes = [
  { r: 120, a: 20, label: "London" },
  { r: 120, a: 200, label: "Dubai" },
  { r: 185, a: 80, label: "New York" },
  { r: 185, a: 250, label: "Singapore" },
  { r: 185, a: 330, label: "Warsaw" },
  { r: 250, a: 140, label: "São Paulo" },
  { r: 250, a: 300, label: "Bengaluru" },
  { r: 250, a: 30, label: "Toronto" },
];

export function HeroVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]" aria-hidden>
      <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-brand-500/40 via-brand-600/10 to-accent-500/30 blur-3xl" />
      <motion.svg
        viewBox="-280 -280 560 560"
        className="absolute inset-0 size-full"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <radialGradient id="core" cx="0" cy="0" r="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#6c4dff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="orbit" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#a78bfa" stopOpacity="0.6" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {[120, 185, 250].map((r, i) => (
          <circle
            key={r}
            r={r}
            fill="none"
            stroke="url(#orbit)"
            strokeWidth="1"
            strokeDasharray={i === 1 ? "2 6" : undefined}
          />
        ))}
        {nodes.map((n, i) => {
          const rad = (n.a * Math.PI) / 180;
          const x = Math.cos(rad) * n.r;
          const y = Math.sin(rad) * n.r;
          return (
            <g key={n.label}>
              <line x1="0" y1="0" x2={x} y2={y} stroke="#8b7bff" strokeOpacity="0.15" />
              <circle cx={x} cy={y} r="14" fill="#6c4dff" fillOpacity="0.12">
                {!reduce && (
                  <animate attributeName="r" values="8;18;8" dur={`${3 + (i % 3)}s`} repeatCount="indefinite" />
                )}
              </circle>
              <circle cx={x} cy={y} r="4.5" fill={i % 2 ? "#22d3ee" : "#c4b5fd"} />
            </g>
          );
        })}
        <circle r="70" fill="url(#core)" opacity="0.6" />
      </motion.svg>

      <div className="absolute inset-[38%] grid place-items-center rounded-full border border-white/15 bg-ink-900/60 backdrop-blur-md">
        <div className="text-center">
          <p className="font-display text-3xl font-semibold text-white">32</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Countries</p>
        </div>
      </div>

      <FloatingCard className="left-0 top-[12%]" delay={0.6} title="Senior AI Engineer" meta="Placed in 14 days · Warsaw" />
      <FloatingCard className="bottom-[14%] right-0" delay={0.9} title="Cloud migration" meta="1,200 workloads · −35% cost" />
    </div>
  );
}

function FloatingCard({
  className,
  title,
  meta,
  delay,
}: {
  className: string;
  title: string;
  meta: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${className}`}
    >
      <div className="animate-float rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="text-xs text-white/60">{meta}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
