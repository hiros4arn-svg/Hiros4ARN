"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  const pillars = [
    {
      id: "human-intelligence",
      title: t("hiTitle"),
      subtitle: t("hiSubtitle"),
      description: t("hiDesc"),
    },
    {
      id: "roots-of-science",
      title: t("rosTitle"),
      subtitle: t("rosSubtitle"),
      description: t("rosDesc"),
    },
    {
      id: "languages-expression",
      title: t("leTitle"),
      subtitle: t("leSubtitle"),
      description: t("leDesc"),
    },
    {
      id: "ancient-wisdom",
      title: t("awTitle"),
      subtitle: t("awSubtitle"),
      description: t("awDesc"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Hiros4ARN Logo"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold tracking-tight text-white">
              Hiros<span className="text-accent-bright">4</span>ARN
            </span>
          </Link>

          <nav className="flex items-center gap-3 md:gap-5 text-sm text-muted">
            <a href="#pillars" className="hidden lg:inline hover:text-accent transition-colors">
              {t("pillarsNav")}
            </a>
            <Link href="/courses" className="hidden md:inline hover:text-accent transition-colors">
              Courses
            </Link>
            <Link href="/community" className="hidden md:inline hover:text-accent transition-colors">
              Community
            </Link>
            <Link href="/creator" className="hidden md:inline hover:text-accent transition-colors">
              Creator
            </Link>
            <Link href="/support" className="hidden md:inline hover:text-accent transition-colors">
              Support
            </Link>
            <LanguageSwitcher />
            <Link
              href="/login"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition hover:bg-accent-bright"
            >
              {t("beginJourney")}
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex flex-1 flex-col items-center justify-center px-6 pt-20 pb-28 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(30,60,120,0.25)_0%,transparent_70%)]" />
        </div>

        <div className="mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,transparent_70%)] blur-xl scale-150" />
          <Image
            src="/logo.jpg"
            alt="Hiros4ARN"
            width={140}
            height={140}
            className="relative rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.25)]"
            priority
          />
        </div>

        <h1 className="mb-3 text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl text-white">
          Hiros<span className="text-accent-bright glow-gold">4</span>ARN
        </h1>

        <p className="mb-4 text-lg tracking-wide text-text-gold">
          {t("tagline")}
        </p>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {t("heroText")}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/login"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-medium text-background transition hover:bg-accent-bright shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          >
            {t("beginJourney")}
          </Link>
          <a
            href="#pillars"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-base font-medium text-foreground transition hover:border-accent/50 hover:bg-card"
          >
            {t("explorePillars")}
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("noTuition")}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("noBarriers")}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("onlyTruth")}
          </span>
        </div>
      </section>

      {/* Four Pillars */}
      <section id="pillars" className="border-t border-border bg-background-secondary px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
              {t("fourPillars")}
            </h2>
            <p className="mx-auto max-w-xl text-muted">
              {t("fourPillarsSubtitle")}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Link
                key={pillar.id}
                href={`/pillars/${pillar.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/40 hover:bg-card-hover hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-accent">
                    0{index + 1}
                  </span>
                  <span className="text-muted transition group-hover:text-accent">
                    →
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">
                  {pillar.title}
                </h3>
                <p className="mb-4 text-sm text-text-gold">{pillar.subtitle}</p>
                <p className="text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl text-white">
            {t("allFree")}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted">
            {t("aboutText")}
          </p>
          <Link
            href="/login"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-base font-medium text-background transition hover:bg-accent-bright"
          >
            {t("startFree")}
          </Link>
        </div>
      </section>

      {/* Phase 2 Features */}
      <section className="border-t border-border bg-background-secondary px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-semibold text-white">Grow with Hiros4ARN</h2>
            <p className="text-muted">Community, courses, creation and support</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/courses" className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/40">
              <p className="text-accent text-sm mb-2">01</p>
              <h3 className="font-medium text-white mb-1">Courses</h3>
              <p className="text-sm text-muted">Free and optional deeper paths</p>
            </Link>
            <Link href="/community" className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/40">
              <p className="text-accent text-sm mb-2">02</p>
              <h3 className="font-medium text-white mb-1">Community</h3>
              <p className="text-sm text-muted">Share and grow together</p>
            </Link>
            <Link href="/creator" className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/40">
              <p className="text-accent text-sm mb-2">03</p>
              <h3 className="font-medium text-white mb-1">Creator</h3>
              <p className="text-sm text-muted">Contribute your knowledge</p>
            </Link>
            <Link href="/support" className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/40">
              <p className="text-accent text-sm mb-2">04</p>
              <h3 className="font-medium text-white mb-1">Support</h3>
              <p className="text-sm text-muted">Help keep it free for all</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-medium text-white">
              Hiros<span className="text-accent-bright">4</span>ARN
            </span>
            <span>·</span>
            <span>{t("tagline")}</span>
          </div>
          <p>© 2026 Hiros4ARN. Free for everyone.</p>
        </div>
      </footer>
    </div>
  );
}
