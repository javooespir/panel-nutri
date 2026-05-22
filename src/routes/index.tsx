import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, HeartPulse, Salad, NotebookPen, ArrowRight, Check, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-nutritionist.jpg";
import mealImg from "@/assets/service-meal.jpg";
import planImg from "@/assets/service-plan.jpg";
import coachImg from "@/assets/service-coach.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucía Romero — Nutrición consciente y planes personalizados" },
      {
        name: "description",
        content:
          "Nutricionista clínica. Acompañamiento personalizado, planes de alimentación reales y seguimiento cercano para mejorar tu salud y tu energía.",
      },
      { property: "og:title", content: "Lucía Romero — Nutrición consciente" },
      {
        property: "og:description",
        content:
          "Planes de alimentación personalizados y seguimiento cercano. Comer mejor sin dietas imposibles.",
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
          Lucía Romero
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#servicios" className="hover:text-foreground">Servicios</a>
          <a href="#metodo" className="hover:text-foreground">Método</a>
          <a href="#testimonios" className="hover:text-foreground">Testimonios</a>
          <a href="#contacto" className="hover:text-foreground">Contacto</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">Dashboard</Button>
          </Link>
          <a href="#contacto">
            <Button size="sm" className="rounded-full">Reservar cita</Button>
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
            Nutrición clínica · Online y presencial
          </span>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] text-foreground text-balance md:text-6xl">
            Comer bien, <em className="not-italic text-primary">sin dietas</em> imposibles.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Soy Lucía, nutricionista clínica. Te acompaño con planes reales,
            adaptados a tu vida y a tu cocina — para que comer sano sea sostenible,
            sabroso y tuyo.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contacto">
              <Button size="lg" className="rounded-full">
                Reservar primera consulta
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
            <a href="#metodo">
              <Button size="lg" variant="ghost" className="rounded-full">
                Cómo trabajo
              </Button>
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["+8", "años de experiencia"],
              ["+500", "pacientes acompañados"],
              ["4.9★", "valoración media"],
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
              alt="Lucía Romero, nutricionista, en su consulta"
              width={1080}
              height={1350}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-56 rounded-2xl border border-border bg-card p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground">
                <HeartPulse className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-medium">Plan a tu medida</p>
                <p className="text-xs text-muted-foreground">Sin restricciones extremas</p>
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
      icon: Salad,
      title: "Nutrición personalizada",
      desc: "Plan alimentario diseñado para tu rutina, gustos y objetivos.",
      img: mealImg,
    },
    {
      icon: NotebookPen,
      title: "Seguimiento mensual",
      desc: "Revisiones, ajustes y herramientas para mantener el cambio.",
      img: planImg,
    },
    {
      icon: HeartPulse,
      title: "Salud hormonal y deportiva",
      desc: "Acompañamiento específico para mujeres activas y deportistas.",
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
              Acompañamiento que se adapta a ti, no al revés.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Cada cuerpo, cada historia y cada nevera es distinta. Por eso ningún
            plan se parece a otro.
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
    ["01", "Primera consulta", "Hablamos de ti: historia, hábitos, objetivos y analíticas."],
    ["02", "Plan a medida", "Diseño un plan flexible, con recetas y listas de la compra."],
    ["03", "Seguimiento real", "Revisiones cada 2–4 semanas y soporte por mensaje."],
    ["04", "Hábitos para siempre", "Aprendes a sostener tu nueva forma de comer sin culpa."],
  ];
  return (
    <section id="metodo" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-primary">Método</p>
      <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium text-balance">
        Un proceso amable, basado en evidencia y centrado en tu día a día.
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
    "Colegiada N.º 12345 — Nutricionista clínica",
    "Especialista en salud digestiva y hormonal",
    "Enfoque sin dietas restrictivas",
    "Atención online en español y catalán",
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
            Comer no debería ser un problema. Sino una de las cosas buenas del día.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Llevo más de 8 años acompañando a personas a reconciliarse con su
            alimentación. Mi enfoque combina ciencia, sentido común y muchísima
            escucha — porque cambiar la forma de comer es también cambiar la
            forma de tratarte.
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
      q: "Por primera vez siento que un plan es para mí, no contra mí. He perdido peso sin obsesionarme.",
      a: "Marta G.",
      r: "Paciente · 9 meses",
    },
    {
      q: "Lucía explica con una claridad enorme. He recuperado energía y digestión sin dejar de comer rico.",
      a: "Carlos P.",
      r: "Paciente · 6 meses",
    },
    {
      q: "Después de años de dietas, por fin entiendo cómo alimentarme. El seguimiento es muy cercano.",
      a: "Nuria R.",
      r: "Paciente · 1 año",
    },
  ];
  return (
    <section id="testimonios" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-primary">Testimonios</p>
      <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium text-balance">
        Lo que cuentan quienes ya han hecho el cambio.
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
            <h2 className="font-display text-4xl font-medium text-balance md:text-5xl">
              Empieza con una consulta gratuita de 20 minutos.
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              Te cuento cómo trabajo, resolvemos dudas y vemos si encajamos. Sin
              compromiso.
            </p>
          </div>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Tu nombre"
              className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-sm placeholder:text-primary-foreground/60 outline-none focus:border-primary-foreground/60"
            />
            <input
              type="email"
              placeholder="Tu email"
              className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-sm placeholder:text-primary-foreground/60 outline-none focus:border-primary-foreground/60"
            />
            <Button
              type="button"
              size="lg"
              variant="secondary"
              className="rounded-full"
            >
              Reservar mi llamada
            </Button>
          </form>
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
          Lucía Romero · Nutrición
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lucía Romero. Hecho con cuidado.
        </p>
      </div>
    </footer>
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
    </div>
  );
}
