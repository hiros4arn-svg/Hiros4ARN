"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/useTranslation";

export default function CoursesPage() {
  const { locale } = useTranslation();
  const isSq = locale === "sq";

  const courses = [
    {
      title: isSq ? "Hyrje në Vetë-Zbulim" : "Introduction to Self-Discovery",
      level: isSq ? "Falas" : "Free",
      duration: isSq ? "7 ditë" : "7 days",
      desc: isSq
        ? "Praktika të thjeshta për të filluar rrugën e njohjes së vetes."
        : "Simple practices to begin the path of knowing yourself.",
    },
    {
      title: isSq ? "Ndërgjegjja & Prania" : "Consciousness & Presence",
      level: isSq ? "Falas" : "Free",
      duration: isSq ? "14 ditë" : "14 days",
      desc: isSq
        ? "Ushtrime ditore për të rritur ndërgjegjen dhe praninë."
        : "Daily exercises to increase awareness and presence.",
    },
    {
      title: isSq ? "Qëllimi i Jetës – Thellim" : "Life Purpose – Deep Dive",
      level: isSq ? "Opsionale" : "Optional",
      duration: isSq ? "21 ditë" : "21 days",
      desc: isSq
        ? "Një udhëtim më i thellë për të zbuluar qëllimin tënd."
        : "A deeper journey to discover your purpose.",
    },
    {
      title: isSq ? "Mençuria e Lashtë në Jetën Moderne" : "Ancient Wisdom in Modern Life",
      level: isSq ? "Opsionale" : "Optional",
      duration: isSq ? "30 ditë" : "30 days",
      desc: isSq
        ? "Si t’i aplikosh parimet e lashta në jetën e sotme."
        : "How to apply ancient principles in today’s life.",
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
            {isSq ? "Kurse" : "Courses"}
          </h1>
          <p className="text-muted max-w-xl mx-auto">
            {isSq
              ? "Disa kurse janë plotësisht falas. Të tjerat janë opsionale me pagesë për të mbështetur platformën."
              : "Some courses are completely free. Others are optional paid to support the platform."}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/40"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    course.level === "Free" || course.level === "Falas"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {course.level}
                </span>
                <span className="text-xs text-muted">{course.duration}</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{course.title}</h3>
              <p className="text-sm text-muted mb-4">{course.desc}</p>
              <button className="text-sm text-accent hover:underline">
                {isSq ? "Shiko detajet →" : "View details →"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
