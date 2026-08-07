"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Boxes,
  Brain,
  Calendar,
  Car,
  Cloud,
  Database,
  Dices,
  Gamepad2,
  Landmark,
  Layers,
  Layout,
  Megaphone,
  Rocket,
  Server,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { InlineWidget } from "react-calendly";
import { FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";
import {
  SiApachekafka,
  SiClickhouse,
  SiDocker,
  SiGithub,
  SiGraphql,
  SiModelcontextprotocol,
  SiNextdotjs,
  SiNodedotjs,
  SiNx,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const CALENDLY_URL = "https://calendly.com/artem-yeryshev/30min";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const services = [
  {
    icon: Brain,
    title: "AI & LLM Integration",
    description:
      "Adding smart features to your existing product. From ChatGPT/Claude API integrations to custom AI assistants and workflow automations.",
  },
  {
    icon: Rocket,
    title: "Rapid MVP Development",
    description:
      "Taking your project from zero to a fully functioning production launch in weeks, not months. Predictable, fast, and scalable.",
  },
  {
    icon: Layers,
    title: "Independent Tech Partner",
    description:
      "Jumping into your active project to handle complex full-stack architecture, resolve bottlenecks, and speed up your release cycle.",
  },
];

const techCategories: {
  title: string;
  icon: typeof Brain;
  skills: { name: string; Icon: IconType | typeof Bot }[];
}[] = [
  {
    title: "AI & LLM",
    icon: Brain,
    skills: [
      { name: "AI Agents", Icon: Bot },
      { name: "MCP Servers", Icon: SiModelcontextprotocol },
      { name: "Context Management", Icon: Layers },
      { name: "LLM Integration", Icon: Sparkles },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Data",
    icon: Database,
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Apache Kafka", Icon: SiApachekafka },
      { name: "ClickHouse", Icon: SiClickhouse },
      { name: "GraphQL", Icon: SiGraphql },
    ],
  },
  {
    title: "Architecture & Cloud",
    icon: Server,
    skills: [
      { name: "Microfrontends", Icon: Boxes },
      { name: "AWS", Icon: Cloud },
      { name: "Docker", Icon: SiDocker },
      { name: "Monorepos (Nx)", Icon: SiNx },
    ],
  },
];

const trustedLogos = [
  { name: "Bottomline", src: "/logos/bottomline-logo.svg" },
  { name: "BRO", src: "/logos/bro-logo.svg" },
  { name: "GlobalLogic", src: "/logos/globallogic-logo.jpg" },
  { name: "GPC", src: "/logos/gpc-logo.svg" },
  { name: "Hitachi", src: "/logos/hitachi-logo.jpg" },
  { name: "Zeta", src: "/logos/zeta_logo.svg" },
];

const industries = [
  { name: "FinTech", icon: Landmark },
  { name: "iGaming", icon: Gamepad2 },
  { name: "Gambling", icon: Dices },
  { name: "Advertising", icon: Megaphone },
  { name: "Automotive", icon: Car },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      {/* Ambient glow + tech pattern */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="glow-orb -left-32 top-[-10%] h-[420px] w-[420px] bg-[var(--glow-blue)] opacity-70" />
        <div className="glow-orb right-[-12%] top-[18%] h-[380px] w-[380px] bg-[var(--glow-purple)] opacity-60" />
        <div className="glow-orb bottom-[8%] left-[30%] h-[320px] w-[320px] bg-[var(--glow-blue)] opacity-30" />
        <div className="bg-pattern" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050508]/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="font-[family-name:var(--font-display)] text-[15px] font-semibold tracking-tight text-white transition hover:text-blue-200"
          >
            Artem Yeryshev{" "}
            <span className="font-normal text-white/45">|</span>{" "}
            <span className="font-medium text-white/70">Tech Consultant</span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/90 transition hover:border-blue-400/40 hover:bg-white/[0.08] hover:text-white"
          >
            Let&apos;s Talk
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </motion.header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-24 pt-20 md:grid-cols-2 md:gap-10 lg:gap-16 sm:px-8 sm:pb-32 sm:pt-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium tracking-wide text-blue-200/80"
            >
              <Sparkles className="h-3.5 w-3.5 text-violet-300" />
              Artem · Available for new engagements
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-display)] text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]"
            >
              <span className="text-gradient">
                AI & Fullstack Software Consultant
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-muted sm:text-lg"
            >
              Helping businesses and founders build rapid MVPs and integrate
              custom AI solutions—without the agency overhead.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(99,102,241,0.7)] transition hover:brightness-110"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0 transition group-hover:opacity-100" />
                Book a Free Consultation
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                Explore services
              </a>
            </motion.div>
          </motion.div>

          {/* Floating glass code window */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-lg md:mx-0 md:justify-self-end"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-transparent to-violet-500/25 blur-2xl"
            />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-2xl border border-white/12 bg-[rgba(12,14,22,0.72)] shadow-[0_24px_80px_-24px_rgba(59,130,246,0.45)] backdrop-blur-xl"
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-white/[0.08] bg-white/[0.03] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 truncate font-mono text-[11px] text-white/45">
                  app/api/chat/route.ts
                </span>
              </div>

              <pre className="overflow-x-auto p-4 text-[12px] leading-6 sm:p-5 sm:text-[13px]">
                <code className="font-mono">
                  <div>
                    <span className="text-violet-300">import</span>{" "}
                    <span className="text-sky-200">OpenAI</span>{" "}
                    <span className="text-violet-300">from</span>{" "}
                    <span className="text-emerald-300">&quot;openai&quot;</span>
                    <span className="text-white/50">;</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-violet-300">const</span>{" "}
                    <span className="text-sky-200">openai</span>{" "}
                    <span className="text-white/60">=</span>{" "}
                    <span className="text-violet-300">new</span>{" "}
                    <span className="text-amber-200">OpenAI</span>
                    <span className="text-white/60">()</span>
                    <span className="text-white/50">;</span>
                  </div>
                  <div className="mt-3">
                    <span className="text-violet-300">export async function</span>{" "}
                    <span className="text-blue-300">POST</span>
                    <span className="text-white/60">(</span>
                    <span className="text-orange-200">req</span>
                    <span className="text-white/50">:</span>{" "}
                    <span className="text-sky-200">Request</span>
                    <span className="text-white/60">) {"{"}</span>
                  </div>
                  <div>
                    <span className="text-violet-300">{"  "}const</span>{" "}
                    <span className="text-white/80">{"{ "}</span>
                    <span className="text-orange-200">prompt</span>
                    <span className="text-white/80">{" }"}</span>{" "}
                    <span className="text-white/60">=</span>{" "}
                    <span className="text-violet-300">await</span>{" "}
                    <span className="text-orange-200">req</span>
                    <span className="text-white/60">.</span>
                    <span className="text-blue-300">json</span>
                    <span className="text-white/60">()</span>
                    <span className="text-white/50">;</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-violet-300">{"  "}const</span>{" "}
                    <span className="text-sky-200">completion</span>{" "}
                    <span className="text-white/60">=</span>{" "}
                    <span className="text-violet-300">await</span>{" "}
                    <span className="text-sky-200">openai</span>
                    <span className="text-white/60">.chat.completions.</span>
                    <span className="text-blue-300">create</span>
                    <span className="text-white/60">({"{"}</span>
                  </div>
                  <div>
                    <span className="text-white/50">{"    "}</span>
                    <span className="text-sky-200">model</span>
                    <span className="text-white/50">:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;gpt-4.1-mini&quot;
                    </span>
                    <span className="text-white/50">,</span>
                  </div>
                  <div>
                    <span className="text-white/50">{"    "}</span>
                    <span className="text-sky-200">messages</span>
                    <span className="text-white/50">: [</span>
                    <span className="text-white/60">{"{"}</span>{" "}
                    <span className="text-sky-200">role</span>
                    <span className="text-white/50">:</span>{" "}
                    <span className="text-emerald-300">&quot;user&quot;</span>
                    <span className="text-white/50">,</span>{" "}
                    <span className="text-sky-200">content</span>
                    <span className="text-white/50">:</span>{" "}
                    <span className="text-orange-200">prompt</span>{" "}
                    <span className="text-white/60">{"}"}</span>
                    <span className="text-white/50">],</span>
                  </div>
                  <div>
                    <span className="text-white/60">{"  "}{"}"})</span>
                    <span className="text-white/50">;</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-violet-300">{"  "}return</span>{" "}
                    <span className="text-sky-200">Response</span>
                    <span className="text-white/60">.</span>
                    <span className="text-blue-300">json</span>
                    <span className="text-white/60">({"{"} </span>
                    <span className="text-sky-200">reply</span>
                    <span className="text-white/50">:</span>{" "}
                    <span className="text-sky-200">completion</span>
                    <span className="text-white/60">.choices[0].message</span>
                    <span className="text-white/60"> {"}"})</span>
                    <span className="text-white/50">;</span>
                  </div>
                  <div>
                    <span className="text-white/60">{"}"}</span>
                  </div>
                </code>
              </pre>
            </motion.div>
          </motion.div>
        </section>

        {/* Trusted By */}
        <section
          aria-label="Trusted by"
          className="relative overflow-hidden border-y border-white/[0.05] py-12 sm:py-14"
        >
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
            Trusted by
          </p>
          <div className="marquee-fade">
            <div className="marquee-track gap-14 px-6 sm:gap-20 sm:px-8">
              {[...trustedLogos, ...trustedLogos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex h-10 shrink-0 items-center opacity-45 grayscale transition duration-300 hover:opacity-70 hover:grayscale-0 sm:h-12"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={160}
                    height={48}
                    className="h-full w-auto max-w-[140px] object-contain brightness-110 sm:max-w-[170px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/70">
              Services
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How I Can Help Your Business
            </h2>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-5 md:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="glass group relative overflow-hidden rounded-2xl p-6 sm:p-7"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl transition duration-500 group-hover:bg-violet-500/20" />
                  <div className="relative mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300 transition group-hover:border-violet-400/30 group-hover:text-violet-200">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="relative font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* Industry Expertise */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/70">
              Domains
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Industry Expertise
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
              Deep experience shipping production systems across regulated and
              high-throughput domains.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5"
          >
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.article
                  key={industry.name}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="glass group relative flex flex-col items-center overflow-hidden rounded-2xl px-4 py-6 text-center transition duration-300 hover:border-violet-400/35 hover:bg-white/[0.05] hover:shadow-[0_0_32px_-8px_rgba(139,92,246,0.45)] sm:py-7"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/0 via-transparent to-violet-500/0 transition duration-500 group-hover:from-blue-500/[0.07] group-hover:to-violet-500/[0.1]" />
                  <div className="relative mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300 transition duration-300 group-hover:border-violet-400/40 group-hover:text-violet-200 sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="relative font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-white/90 sm:text-[15px]">
                    {industry.name}
                  </h3>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* Tech Stack & Experience */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300/70">
              Tech Stack & Experience
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              10+ Years of Engineering Excellence
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              From building high-load back-office systems to integrating
              cutting-edge LLMs. I design architectures that are ready to scale
              from day one.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {techCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <motion.article
                  key={category.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="glass group relative flex flex-col overflow-hidden rounded-2xl p-5 transition duration-300 hover:border-violet-400/30 hover:shadow-[0_0_36px_-12px_rgba(139,92,246,0.4)] sm:p-6"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl transition duration-500 group-hover:bg-violet-500/20" />
                  <div className="relative mb-5 flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300 transition group-hover:border-violet-400/35 group-hover:text-violet-200">
                      <CategoryIcon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-[15px] font-semibold tracking-tight text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="relative flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.Icon;
                      return (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-white/75 transition duration-200 hover:border-blue-400/40 hover:bg-white/[0.08] hover:text-white"
                        >
                          <SkillIcon className="h-3.5 w-3.5 shrink-0 text-white/70" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* Meet Your Tech Partner */}
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-14 lg:gap-20">
            <Reveal className="relative mx-auto w-full max-w-md md:mx-0">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.35)_0%,rgba(139,92,246,0.22)_40%,transparent_70%)] blur-2xl"
              />
              <div className="group relative">
                <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-1.5 shadow-[0_24px_80px_-28px_rgba(99,102,241,0.55)] backdrop-blur-sm">
                  <Image
                    src="/avatar.png"
                    alt="Artem — AI & Fullstack Software Consultant"
                    width={500}
                    height={500}
                    priority
                    className="aspect-square w-full rounded-[1.35rem] object-cover grayscale transition duration-700 ease-out group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute -bottom-3 right-3 z-10 rounded-full border border-white/15 bg-[rgba(10,10,16,0.65)] px-3.5 py-2 text-xs font-medium tracking-wide text-white/90 shadow-lg backdrop-blur-xl sm:right-4 sm:text-[13px]">
                  ✦ 10+ Years Experience
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="md:pl-2">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
                Hi, I&apos;m Artem
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                From complex frontends to scalable AI architecture.
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-gray-300 sm:text-base">
                I am a Senior Fullstack Engineer &amp; AI Consultant. Over the
                last decade, I&apos;ve transitioned from building intricate UI
                architectures to engineering high-load back-office systems
                (ClickHouse, Kafka) and integrating cutting-edge LLMs. I
                don&apos;t just write code—I design resilient systems that help
                businesses ship faster and scale predictably.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/artem-yeryshev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-white/85 transition hover:border-blue-400/40 hover:bg-white/[0.05] hover:text-white"
                >
                  View my LinkedIn
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://github.com/yeryshevArtem"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition hover:border-violet-400/40 hover:bg-white/[0.07] hover:text-white"
                >
                  <SiGithub className="h-5 w-5" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA / Footer */}
        <section id="contact" className="mx-auto max-w-6xl px-5 pb-10 pt-8 sm:px-8 sm:pb-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-violet-500/[0.06] p-8 sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl"
              />

              <div className="relative grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
                    Next step
                  </p>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to accelerate your development?
                  </h2>
                  <p className="mt-4 max-w-md text-muted">
                    Let&apos;s skip the long hiring process. Book a direct call
                    with me to discuss your project, architecture, and how we
                    can launch your next feature faster.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a0a12] transition hover:bg-blue-50"
                  >
                    <Calendar className="h-4 w-4" />
                    View My Calendly
                  </a>
                </div>

                <div
                  id="calendly"
                  className="overflow-hidden rounded-2xl"
                  style={{ backgroundColor: "#0a0a0a" }}
                >
                  <InlineWidget
                    url={CALENDLY_URL}
                    pageSettings={{
                      backgroundColor: "0a0a0a",
                      textColor: "ffffff",
                      primaryColor: "8b5cf6", // use brand's primary button color if needed change to '3b82f6'
                      hideGdprBanner: true,
                    }}
                    styles={{
                      height: "680px",
                      minWidth: "280px",
                      border: "none",
                    }}
                    iframeTitle="Book a consultation with Artem"
                  />
                </div>
              </div>
            </div>
          </Reveal>
  

          <footer className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
            <p className="text-center text-xs text-gray-500 sm:text-left">
              © 2026 Artem Yeryshev. All rights reserved.
            </p>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/in/artem-yeryshev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/35 hover:bg-white/[0.06] hover:text-white"
              >
                <FaLinkedin className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://github.com/yeryshevArtem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/35 hover:bg-white/[0.06] hover:text-white"
              >
                <SiGithub className="h-[18px] w-[18px]" />
              </a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
