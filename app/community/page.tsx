"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/useTranslation";

export default function CommunityPage() {
  const { locale } = useTranslation();
  const isSq = locale === "sq";

  const topics = [
    {
      title: isSq ? "Vetë-Zbulim" : "Self-Discovery",
      posts: 24,
      desc: isSq ? "Reflektime dhe pyetje mbi rrugën e brendshme" : "Reflections and questions about the inner path",
    },
    {
      title: isSq ? "Shkencë & Ndërgjegje" : "Science & Consciousness",
      posts: 18,
      desc: isSq ? "Diskutime mbi neuroshkencën dhe kozmologjinë" : "Discussions on neuroscience and cosmology",
    },
    {
      title: isSq ? "Praktika Ditore" : "Daily Practices",
      posts: 31,
      desc: isSq ? "Ndani ushtrime dhe përvojat tuaja" : "Share exercises and your experiences",
    },
    {
      title: isSq ? "Mençuri e Lashtë" : "Ancient Wisdom",
      posts: 15,
      desc: isSq ? "Tradita, filozofi dhe mësimet e kohërave" : "Traditions, philosophy and timeless teachings",
    },
  ];

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

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-white mb-3">
            {isSq ? "Komuniteti" : "Community"}
          </h1>
          <p className="text-muted max-w-xl mx-auto">
            {isSq
              ? "Një hapësirë e hapur ku çdo njeri mund të ndajë, pyesë dhe rritet së bashku."
              : "An open space where everyone can share, ask and grow together."}
          </p>
        </div>

        <div className="grid gap-4 mb-10">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition hover:border-accent/40"
            >
              <div>
                <h3 className="font-medium text-white mb-1">{topic.title}</h3>
                <p className="text-sm text-muted">{topic.desc}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-accent">{topic.posts}</p>
                <p className="text-xs text-muted">{isSq ? "poste" : "posts"}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
          <p className="text-muted text-sm mb-4">
            {isSq
              ? "Forumi i vërtetë do të lidhet me Supabase (komentet, postimet, moderimi)."
              : "The real forum will be connected to Supabase (comments, posts, moderation)."}
          </p>
          <button className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-background hover:bg-accent-bright transition">
            {isSq ? "Bashkohu me komunitetin" : "Join the community"}
          </button>
        </div>
      </main>
    </div>
  );
}
