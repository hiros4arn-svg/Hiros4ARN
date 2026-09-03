"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/useTranslation";

const pillars = [
  { id: "human-intelligence", key: "hiTitle" as const },
  { id: "roots-of-science", key: "rosTitle" as const },
  { id: "languages-expression", key: "leTitle" as const },
  { id: "ancient-wisdom", key: "awTitle" as const },
];

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="Hiros4ARN" width={36} height={36} className="rounded-lg" />
            <span className="text-lg font-semibold tracking-tight text-white">
              Hiros<span className="text-accent-bright">4</span>ARN
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/" className="text-sm text-muted hover:text-accent transition">
              {t("logout")}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-white mb-2">
            {t("welcome")} 👋
          </h1>
          <p className="text-muted">{t("yourPath")}</p>
        </div>

        <div className="mb-8 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-medium text-white mb-4">{t("continueLearning")}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Link
                key={p.id}
                href={`/pillars/${p.id}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition hover:border-accent/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent text-sm font-medium">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-medium text-white">{t(p.key)}</p>
                  <p className="text-xs text-muted">Start exploring →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
          <p className="text-muted text-sm">
            Progress tracking, saved lessons and personal notes will appear here
            once Supabase is connected.
          </p>
        </div>
      </main>
    </div>
  );
}
