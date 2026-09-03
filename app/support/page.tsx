"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/useTranslation";

export default function SupportPage() {
  const { t, locale } = useTranslation();

  const isSq = locale === "sq";

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
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link href="/" className="text-sm text-muted hover:text-accent transition">
              {t("backHome")}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 text-center">
        <div className="mb-8">
          <Image src="/logo.jpg" alt="Hiros4ARN" width={90} height={90} className="mx-auto rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.2)]" />
        </div>

        <h1 className="mb-4 text-4xl font-semibold text-white">
          {isSq ? "Mbështet Hiros4ARN" : "Support Hiros4ARN"}
        </h1>
        <p className="mb-10 text-lg text-muted leading-relaxed">
          {isSq
            ? "Hiros4ARN mbetet gjithmonë falas. Nëse dëshiron të ndihmosh që të rritet dhe të arrijë më shumë njerëz, mund të kontribuosh vullnetarisht."
            : "Hiros4ARN remains free forever. If you wish to help it grow and reach more people, you can contribute voluntarily."}
        </p>

        <div className="grid gap-4 sm:grid-cols-3 mb-12">
          {[
            { amount: "$5", label: isSq ? "Kafe simbolike" : "Symbolic coffee" },
            { amount: "$15", label: isSq ? "Mbështetje mujore" : "Monthly support" },
            { amount: "$50", label: isSq ? "Mbështetës i fortë" : "Strong supporter" },
          ].map((tier) => (
            <button
              key={tier.amount}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/50 hover:bg-card-hover"
            >
              <p className="text-2xl font-semibold text-accent mb-1">{tier.amount}</p>
              <p className="text-sm text-muted">{tier.label}</p>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8">
          <p className="text-sm text-muted mb-4">
            {isSq
              ? "Pagesat do të lidhen me Stripe / PayPal (falas për fillim). Për momentin kjo është faqja e gatshme."
              : "Payments will be connected to Stripe / PayPal (free to start). This page is ready for integration."}
          </p>
          <p className="text-xs text-muted">
            {isSq ? "Faleminderit për çdo mbështetje 💛" : "Thank you for any support 💛"}
          </p>
        </div>
      </main>
    </div>
  );
}
