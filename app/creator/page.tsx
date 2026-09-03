"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/useTranslation";

export default function CreatorPage() {
  const { locale } = useTranslation();
  const isSq = locale === "sq";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
              {isSq ? "← Kthehu" : "← Back"}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-white mb-3">
            {isSq ? "Creator" : "Creator"}
          </h1>
          <p className="text-muted max-w-xl mx-auto">
            {isSq
              ? "Ndani njohuri, reflektime, praktika ose përvoja. Çdo kontribut ndihmon të tjerët."
              : "Share knowledge, reflections, practices or experiences. Every contribution helps others."}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 mb-10">
          <h2 className="text-lg font-medium text-white mb-6">
            {isSq ? "Shkruaj diçka" : "Write something"}
          </h2>

          <div className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm text-muted">
                {isSq ? "Titulli" : "Title"}
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none focus:border-accent"
                placeholder={isSq ? "P.sh. Reflektim mbi praninë" : "e.g. Reflection on presence"}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-muted">
                {isSq ? "Përmbajtja" : "Content"}
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-white outline-none focus:border-accent resize-none"
                placeholder={isSq ? "Shkruaj këtu..." : "Write here..."}
              />
            </div>

            <button className="w-full rounded-full bg-accent py-3 font-medium text-background transition hover:bg-accent-bright">
              {isSq ? "Publiko (së shpejti)" : "Publish (coming soon)"}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
          <p className="text-sm text-muted">
            {isSq
              ? "Postimet do të ruhen në Supabase dhe do të moderohen lehtë. Creator section do të jetë e hapur për të gjithë."
              : "Posts will be stored in Supabase and lightly moderated. The Creator section will be open to everyone."}
          </p>
        </div>
      </main>
    </div>
  );
}
