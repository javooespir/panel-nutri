import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Leaf,
  Dumbbell,
  Ruler,
  Activity,
  Target,
  ArrowRight,
  Check,
  Quote,
  MapPin,
  Video,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-nutritionist.jpg";
import mealImg from "@/assets/service-meal.jpg";
import planImg from "@/assets/service-plan.jpg";
import coachImg from "@/assets/service-coach.jpg";

const WHATSAPP_URL = "https://wa.me/message/4N5KY3Z4W2XAC1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucía Morbidoni — Nutricionista | Ramos Mejía y Virtual" },
      {
        name: "description",
        content:
          "Nutrición deportiva, cambio de hábitos y antropometría ISAK II. Turnos presenciales en Ramos Mejía y consultas virtuales. MN 11722.",
      },
      { property: "og:title", content: "Lucía Morbidoni — Nutricionista" },
      {
        property: "og:description",
        content:
          "Cambio de hábitos, nutrición deportiva y antropometría ISAK II. Ramos Mejía y virtual.",
      },
    ],
  }),
  component: Landing,
});

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-4 w-4" />
          </span>
          Lucía Morbidoni
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#servicios" className="hover:text-foreground">Servicios</a>
          <a href="#metodo" className="hover:text-foreground">Método</a>
          <a href="#testimonios" className="hover:text-foreground">Testimonios</a>
          <a href="#contacto" className="hover:text-foreground">Turnos</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">Dashboard</Button>
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="rounded-full">
              <MessageCircle className="h-4 w-4" />
              Pedir turno
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:pt-24">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <MapPin className="h-3 w-3" /> Ramos Mejía
            <span className="text-border">·</span>
            <Video className="h-3 w-3" /> Virtual
          </span>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] text-foreground text-balance md:text-6xl">
            Te ayudo a alcanzar <em className="not-italic text-primary">tus objetivos</em>.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Soy Lucía, Licenciada en Nutrición y Antropometrista ISAK II.
            Especialista en <strong className="font-medium text-foreground">cambio de hábitos</strong> y
            <strong className="font-medium text-foreground"> nutrición deportiva</strong>.
            Planes reales, medibles y sostenibles.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full">
                <MessageCircle className="h-4 w-4" />
                Pedir turno por WhatsApp
              </Button>
            </a>
            <a href="#metodo">
              <Button size="lg" variant="ghost" className="rounded-full">
                Cómo trabajo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["ISAK II", "Antropometrista certificada"],
              ["+500", "deportistas y pacientes"],
              ["100%", "planes personalizados"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-2xl font-medium text-foreground">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 hidden h-72 w-72 rounded-full bg-accent/40 blur-3xl md:block" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_80px_-30px_oklch(0.55_0.06_145/0.35)]">
            <img
              src={heroImg}
              alt="Lucía Morbidoni, nutricionista deportiva"
              width={1080}
              height={1350}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-60 rounded-2xl border border-border bg-card p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground">
                <Ruler className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-medium">Antropometría ISAK II</p>
                <p className="text-xs text-muted-foreground">Mediciones precisas y seguimiento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Nutrición deportiva",
      desc: "Estrategias de alimentación y suplementación para entrenar, rendir y recuperar mejor.",
      img: mealImg,
    },
    {
      icon: Target,
      title: "Cambio de hábitos",
      desc: "Acompañamiento real para sostener tu plan: sin restricciones extremas ni rebote.",
      img: planImg,
    },
    {
      icon: Ruler,
      title: "Antropometría ISAK II",
      desc: "Mediciones profesionales de composición corporal con protocolo internacional.",
      img: coachImg,
    },
  ];
  return (
    <section id="servicios" className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Servicios</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-medium text-balance">
              Plan, seguimiento y mediciones para que entrenes con sentido.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Todo lo que necesitás para que tu alimentación trabaje a favor de
            tus objetivos — no en contra.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, img }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/60 text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-medium">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    ["01", "Primera consulta", "Hablamos de tu historia, entrenamientos, hábitos y objetivos."],
    ["02", "Antropometría", "Mediciones ISAK II para conocer tu punto de partida real."],
    ["03", "Plan a medida", "Diseño tu plan según tu deporte, tus tiempos y tu cocina."],
    ["04", "Seguimiento", "Revisiones quincenales y soporte por WhatsApp para sostenerlo."],
  ];
  return (
    <section id="metodo" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-primary">Método</p>
      <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium text-balance">
        Un proceso claro, medible y centrado en resultados reales.
      </h2>
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {steps.map(([n, t, d]) => (
          <div key={n} className="bg-card p-8">
            <span className="font-display text-sm text-primary">{n}</span>
            <h3 className="mt-4 font-display text-lg font-medium">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const points = [
    "Licenciada en Nutrición — Matrícula vigente",
    "Antropometrista certificada ISAK Nivel II",
    "Especialista en nutrición deportiva y cambio de hábitos",
    "Consultas presenciales en Ramos Mejía y online",
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div className="overflow-hidden rounded-3xl border border-border">
          <img
            src={heroImg}
            alt="Lucía en consulta"
            loading="lazy"
            width={1080}
            height={1350}
            className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Sobre mí</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-balance">
            Comer bien para entrenar mejor, sentirte mejor y seguir sumando.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Acompaño a deportistas amateurs y profesionales, y a personas que
            buscan ordenar su alimentación para siempre. Combino ciencia,
            mediciones objetivas y mucho seguimiento para que cada plan funcione
            en tu vida real.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      q: "Bajé grasa y subí masa muscular sin perder rendimiento en el gym. El plan se adapta a mis entrenamientos.",
      a: "Marta G.",
      r: "CrossFit · 9 meses",
    },
    {
      q: "Las mediciones ISAK me cambiaron la cabeza: dejé de mirar solo la balanza y empecé a ver progresos reales.",
      a: "Carlos P.",
      r: "Running · 6 meses",
    },
    {
      q: "Por fin un cambio de hábitos que sostengo. Lucía explica todo y el seguimiento por WhatsApp es clave.",
      a: "Nuria R.",
      r: "Recomposición · 1 año",
    },
  ];
  return (
    <section id="testimonios" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-primary">Testimonios</p>
      <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium text-balance">
        Resultados de quienes ya están entrenando con plan.
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map(({ q, a, r }) => (
          <figure
            key={a}
            className="flex h-full flex-col rounded-3xl border border-border bg-card p-7"
          >
            <Quote className="h-6 w-6 text-primary" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
              “{q}”
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <p className="font-display text-sm font-medium">{a}</p>
              <p className="text-xs text-muted-foreground">{r}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
              Turnos
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium text-balance md:text-5xl">
              Reservá tu turno por WhatsApp.
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              Presencial en Ramos Mejía o virtual desde donde estés. Te respondo
              personalmente y coordinamos.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Ramos Mejía, Buenos Aires
              </li>
              <li className="flex items-center gap-2">
                <Video className="h-4 w-4" /> Consultas virtuales (todo el país)
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="w-full rounded-full">
                <MessageCircle className="h-5 w-5" />
                Escribime por WhatsApp
              </Button>
            </a>
            <p className="text-center text-xs text-primary-foreground/60">
              Respuesta en el día · Lun a Vie
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-2 font-display font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-3.5 w-3.5" />
          </span>
          Lucía Morbidoni · MN 11722
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-foreground"
          >
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
          <span>© {new Date().getFullYear()} Lucía Morbidoni</span>
          <span>·</span>
          <a
            href="https://encende.click"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Creado por encende.click
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir turno por WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-5px_oklch(0.55_0.06_145/0.5)] transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Method />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
