"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/useTranslation";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export default function LoginPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    if (!isSupabaseConfigured) {
      setMessage(
        "Supabase is not configured yet. Create a free project at supabase.com and add the keys to .env.local"
      );
      setLoading(false);
      return;
    }

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage("Check your email to confirm your account.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    if (!isSupabaseConfigured) {
      setMessage("Supabase is not configured yet.");
      return;
    }
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/dashboard` },
    });
  };

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

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="mb-8">
          <Image
            src="/logo.jpg"
            alt="Hiros4ARN"
            width={90}
            height={90}
            className="rounded-xl shadow-[0_0_40px_rgba(212,175,55,0.2)]"
          />
        </div>

        <h1 className="mb-2 text-3xl font-semibold text-white">
          {mode === "login" ? t("login") : t("signup")}
        </h1>
        <p className="mb-8 text-muted text-center max-w-sm">
          {t("journeyText")}
        </p>

        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm text-muted">{t("email")}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none focus:border-accent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-muted">{t("password")}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none focus:border-accent"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-accent py-3 font-medium text-background transition hover:bg-accent-bright disabled:opacity-60"
            >
              {loading ? "..." : mode === "login" ? t("login") : t("signup")}
            </button>
          </form>

          {message && <p className="mt-4 text-center text-sm text-text-gold">{message}</p>}
          {error && <p className="mt-4 text-center text-sm text-red-400">{error}</p>}

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted">or</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <button
            type="button"
            onClick={handleGoogle}
            className="w-full rounded-full border border-border py-3 text-sm font-medium text-white transition hover:border-accent/50 hover:bg-card-hover"
          >
            {t("continueGoogle")}
          </button>

          <p className="mt-6 text-center text-sm text-muted">
            {mode === "login" ? t("noAccount") : t("hasAccount")}{" "}
            <button
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="text-accent hover:underline"
            >
              {mode === "login" ? t("signup") : t("login")}
            </button>
          </p>
        </div>

        <p className="mt-8 text-xs text-muted text-center max-w-sm">
          100% free · Supabase free tier
        </p>
      </main>
    </div>
  );
}
