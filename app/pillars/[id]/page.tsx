"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/lib/useTranslation";

const content: Record<
  string,
  {
    en: { title: string; subtitle: string; intro: string; sections: { heading: string; body: string }[] };
    sq: { title: string; subtitle: string; intro: string; sections: { heading: string; body: string }[] };
  }
> = {
  "human-intelligence": {
    en: {
      title: "Human Intelligence",
      subtitle: "The heart of Hiros4ARN",
      intro:
        "This pillar is dedicated to the deepest exploration of who you are. Through self-inquiry, reflection and practice, you begin to remember your true nature and the purpose that moves you.",
      sections: [
        {
          heading: "What is Self-Inquiry?",
          body: "Self-inquiry is the simple yet powerful act of turning attention inward. Instead of looking for answers outside, we ask: Who am I? What is aware of this moment? What remains when all thoughts settle?",
        },
        {
          heading: "Daily Practice – 10 minutes",
          body: "1. Sit comfortably and close your eyes.\n2. Notice the breath without changing it.\n3. When thoughts arise, gently return to the sensation of being present.\n4. Ask silently: “Who is aware of this?”\n5. Rest in the silence that follows.",
        },
        {
          heading: "Life Purpose",
          body: "Purpose is not something you invent. It is something you uncover. It often appears as a quiet pull toward what feels most alive and true for you — beyond status, money or approval.",
        },
        {
          heading: "Reflection Questions",
          body: "• What makes me feel most alive?\n• What would I do if no one was watching?\n• What pain in the world touches me most deeply?\n• What unique gifts do I carry?",
        },
      ],
    },
    sq: {
      title: "Inteligjenca Njerëzore",
      subtitle: "Zemra e Hiros4ARN",
      intro:
        "Kjo shtyllë i kushtohet eksplorimit më të thellë të asaj se kush je. Përmes vetë-pyetjes, reflektimit dhe praktikës, fillon të kujtosh natyrën tënde të vërtetë dhe qëllimin që të lëviz.",
      sections: [
        {
          heading: "Çfarë është Vetë-Pyetja?",
          body: "Vetë-pyetja është akti i thjeshtë por i fuqishëm i kthimit të vëmendjes drejt brendësisë. Në vend që të kërkojmë përgjigje jashtë, pyesim: Kush jam unë? Çfarë është e ndërgjegjshme për këtë moment?",
        },
        {
          heading: "Praktikë Ditore – 10 minuta",
          body: "1. Ulu rehat dhe mbyll sytë.\n2. Vëre frymëmarrjen pa e ndryshuar.\n3. Kur vijnë mendime, kthehu butësisht te ndjesia e të qenit i pranishëm.\n4. Pyet në heshtje: “Kush është i ndërgjegjshëm për këtë?”\n5. Pushó në heshtjen që vjen.",
        },
        {
          heading: "Qëllimi i Jetës",
          body: "Qëllimi nuk është diçka që shpik. Është diçka që zbulon. Shpesh shfaqet si një tërheqje e qetë drejt asaj që ndihet më e gjallë dhe e vërtetë për ty.",
        },
        {
          heading: "Pyetje Reflektimi",
          body: "• Çfarë më bën të ndihem më i gjallë?\n• Çfarë do të bëja nëse askush nuk do të shikonte?\n• Cila dhimbje e botës më prek më thellë?\n• Cilat dhurata unike mbaj?",
        },
      ],
    },
  },
  "roots-of-science": {
    en: {
      title: "Roots of Science",
      subtitle: "Science in service of the human being",
      intro:
        "Science is not separate from the search for truth. Here we explore psychology, neuroscience, cosmology and the biology of consciousness as mirrors of the self.",
      sections: [
        {
          heading: "The Observing Mind",
          body: "Neuroscience shows that the brain constructs our sense of self. Yet there is an awareness that can observe the brain’s activity. Who or what is that awareness?",
        },
        {
          heading: "Psychology of Purpose",
          body: "Research on meaning (Viktor Frankl, positive psychology) confirms that a sense of purpose is one of the strongest predictors of psychological well-being and resilience.",
        },
        {
          heading: "Cosmology & Humility",
          body: "Looking at the scale of the universe invites profound humility and wonder. We are stardust that has become conscious of itself.",
        },
        {
          heading: "Suggested Exploration",
          body: "Read about the default mode network, contemplative neuroscience, and the hard problem of consciousness. Let science deepen your inquiry rather than close it.",
        },
      ],
    },
    sq: {
      title: "Rrënjët e Shkencës",
      subtitle: "Shkenca në shërbim të qenies njerëzore",
      intro:
        "Shkenca nuk është e ndarë nga kërkimi i së vërtetës. Këtu eksplorojmë psikologjinë, neuroshkencën, kozmologjinë dhe biologjinë e ndërgjegjes si pasqyra të vetes.",
      sections: [
        {
          heading: "Mendja Vëzhguese",
          body: "Neuroshkenca tregon se truri ndërton ndjesinë e vetes. Megjithatë ka një ndërgjegje që mund të vëzhgojë aktivitetin e trurit. Kush ose çfarë është ajo ndërgjegje?",
        },
        {
          heading: "Psikologjia e Qëllimit",
          body: "Kërkimet mbi kuptimin (Viktor Frankl, psikologjia pozitive) konfirmojnë se ndjenja e qëllimit është një nga parashikuesit më të fortë të mirëqenies psikologjike.",
        },
        {
          heading: "Kozmologjia & Përulësia",
          body: "Shikimi i shkallës së universit fton përulësi dhe mrekulli të thellë. Ne jemi pluhur yjesh që është bërë i ndërgjegjshëm për veten.",
        },
        {
          heading: "Eksplorim i Sugjeruar",
          body: "Lexo për rrjetin e mënyrës së paracaktuar, neuroshkencën kontemplative dhe problemin e vështirë të ndërgjegjes.",
        },
      ],
    },
  },
  "languages-expression": {
    en: {
      title: "Languages & Expression",
      subtitle: "Language as a bridge between worlds",
      intro:
        "Language shapes reality. Whether ancient, modern, poetic or coded — every form of expression is a way the soul speaks.",
      sections: [
        {
          heading: "The Power of Words",
          body: "The words we use daily create the world we live in. Choosing language consciously is a form of spiritual practice.",
        },
        {
          heading: "Ancient Languages",
          body: "Sanskrit, Greek, Latin, Arabic and others carry vibrational and philosophical depth. Studying them can open new dimensions of understanding.",
        },
        {
          heading: "Code as Expression",
          body: "Programming is a precise language. Building something useful or beautiful with code can be a meditative and creative act.",
        },
        {
          heading: "Art & Silence",
          body: "Not everything needs words. Music, movement, image and silence are also languages of the soul.",
        },
      ],
    },
    sq: {
      title: "Gjuhët & Shprehja",
      subtitle: "Gjuha si urë midis botëve",
      intro:
        "Gjuha formëson realitetin. Qoftë e lashtë, moderne, poetike apo e koduar — çdo formë shprehjeje është një mënyrë se si shpirti flet.",
      sections: [
        {
          heading: "Fuqia e Fjalëve",
          body: "Fjalët që përdorim çdo ditë krijojnë botën ku jetojmë. Zgjedhja e gjuhës me ndërgjegje është një formë e praktikës shpirtërore.",
        },
        {
          heading: "Gjuhë të Lashta",
          body: "Sanskritishtja, greqishtja, latinishtja, arabishtja dhe të tjerat mbajnë thellësi vibruese dhe filozofike.",
        },
        {
          heading: "Kodi si Shprehje",
          body: "Programimi është një gjuhë e saktë. Ndërtimi i diçkaje të dobishme ose të bukur me kod mund të jetë akt meditative dhe krijues.",
        },
        {
          heading: "Arti & Heshtja",
          body: "Jo gjithçka ka nevojë për fjalë. Muzika, lëvizja, imazhi dhe heshtja janë gjithashtu gjuhë të shpirtit.",
        },
      ],
    },
  },
  "ancient-wisdom": {
    en: {
      title: "Ancient Wisdom",
      subtitle: "The living wisdom of humanity",
      intro:
        "Across cultures and centuries, human beings have left maps of the inner journey. We explore them with respect, curiosity and freedom.",
      sections: [
        {
          heading: "The Common Thread",
          body: "From the Upanishads to Stoicism, from Sufism to indigenous traditions — a common thread appears: know yourself, live with integrity, serve something greater.",
        },
        {
          heading: "Religion & Beyond",
          body: "Religions can be doors or walls. We approach them as possible doors — without dogma, with open inquiry. Atheism and rational inquiry are also welcome here.",
        },
        {
          heading: "Holistic Living",
          body: "Body, mind and spirit are not separate. Ancient systems of medicine and practice (Ayurveda, Chinese medicine, yoga, etc.) offer practical wisdom for modern life.",
        },
        {
          heading: "An Invitation",
          body: "Take what resonates. Leave what does not. Wisdom is alive only when it is tested in your own experience.",
        },
      ],
    },
    sq: {
      title: "Mençuria e Lashtë",
      subtitle: "Mençuria e gjallë e njerëzimit",
      intro:
        "Nëpër kultura dhe shekuj, qeniet njerëzore kanë lënë harta të udhëtimit të brendshëm. I eksplorojmë me respekt, kureshtje dhe liri.",
      sections: [
        {
          heading: "Fija e Përbashkët",
          body: "Nga Upanishadet te Stoicizmi, nga Sufizmi te traditat indigjene — shfaqet një fije e përbashkët: njihe veten, jeto me integritet, shërbe diçka më të madhe.",
        },
        {
          heading: "Feja & Përtej",
          body: "Fetë mund të jenë dyer ose mure. I qasemi si dyer të mundshme — pa dogmë, me kërkim të hapur. Ateizmi dhe kërkimi racional janë gjithashtu të mirëpritur.",
        },
        {
          heading: "Jetesa Holistike",
          body: "Trupi, mendja dhe shpirti nuk janë të ndarë. Sistemet e lashta të mjekësisë dhe praktikës ofrojnë mençuri praktike për jetën moderne.",
        },
        {
          heading: "Një Ftesë",
          body: "Merr atë që rezonon. Lë atë që nuk rezonon. Mençuria është e gjallë vetëm kur testohet në përvojën tënde.",
        },
      ],
    },
  },
};

export default function PillarPage() {
  const params = useParams();
  const id = params.id as string;
  const { locale } = useTranslation();
  const isSq = locale === "sq";

  const data = content[id];
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-white">
        <p>Pillar not found</p>
      </div>
    );
  }

  const pillar = isSq ? data.sq : data.en;

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
            <Link href="/#pillars" className="text-sm text-muted hover:text-accent transition">
              {isSq ? "← Të gjitha shtyllat" : "← All pillars"}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <p className="mb-3 text-sm font-medium text-accent">{pillar.subtitle}</p>
        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white">
          {pillar.title}
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-muted">{pillar.intro}</p>

        <div className="space-y-8">
          {pillar.sections.map((section) => (
            <div key={section.heading} className="rounded-2xl border border-border bg-card p-7">
              <h2 className="mb-3 text-lg font-medium text-white">{section.heading}</h2>
              <p className="text-muted leading-relaxed whitespace-pre-line">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/login"
            className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-7 text-sm font-medium text-background transition hover:bg-accent-bright"
          >
            {isSq ? "Fillo Udhëtimin" : "Begin Your Journey"}
          </Link>
        </div>
      </main>
    </div>
  );
}
