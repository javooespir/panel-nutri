import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Leaf,
  Users,
  CalendarDays,
  TrendingUp,
  Search,
  Plus,
  ArrowLeft,
  Phone,
  Mail,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Lucía Romero" },
      { name: "description", content: "Panel de gestión: pacientes, citas y progreso." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Dashboard,
});

type Patient = {
  id: string;
  name: string;
  age: number;
  goal: string;
  startWeight: number;
  currentWeight: number;
  targetWeight: number;
  email: string;
  phone: string;
  status: "Activo" | "Pausa" | "Alta";
  progress: { week: string; weight: number }[];
};

const patients: Patient[] = [
  {
    id: "p1",
    name: "Marta García",
    age: 34,
    goal: "Pérdida de peso saludable",
    startWeight: 78,
    currentWeight: 71.4,
    targetWeight: 68,
    email: "marta.g@example.com",
    phone: "+34 612 345 678",
    status: "Activo",
    progress: [
      { week: "S1", weight: 78 },
      { week: "S2", weight: 77.2 },
      { week: "S3", weight: 76.1 },
      { week: "S4", weight: 75 },
      { week: "S5", weight: 74.2 },
      { week: "S6", weight: 73.1 },
      { week: "S7", weight: 72.3 },
      { week: "S8", weight: 71.4 },
    ],
  },
  {
    id: "p2",
    name: "Carlos Pérez",
    age: 41,
    goal: "Salud digestiva",
    startWeight: 84,
    currentWeight: 82.1,
    targetWeight: 80,
    email: "carlos.p@example.com",
    phone: "+34 633 221 109",
    status: "Activo",
    progress: [
      { week: "S1", weight: 84 },
      { week: "S2", weight: 83.7 },
      { week: "S3", weight: 83.2 },
      { week: "S4", weight: 82.8 },
      { week: "S5", weight: 82.5 },
      { week: "S6", weight: 82.1 },
    ],
  },
  {
    id: "p3",
    name: "Nuria Romero",
    age: 28,
    goal: "Nutrición deportiva",
    startWeight: 62,
    currentWeight: 63.5,
    targetWeight: 64,
    email: "nuria.r@example.com",
    phone: "+34 644 555 222",
    status: "Activo",
    progress: [
      { week: "S1", weight: 62 },
      { week: "S2", weight: 62.2 },
      { week: "S3", weight: 62.6 },
      { week: "S4", weight: 63.0 },
      { week: "S5", weight: 63.3 },
      { week: "S6", weight: 63.5 },
    ],
  },
  {
    id: "p4",
    name: "Andrea López",
    age: 37,
    goal: "Salud hormonal",
    startWeight: 70,
    currentWeight: 68.4,
    targetWeight: 66,
    email: "andrea.l@example.com",
    phone: "+34 655 100 200",
    status: "Pausa",
    progress: [
      { week: "S1", weight: 70 },
      { week: "S2", weight: 69.5 },
      { week: "S3", weight: 69.0 },
      { week: "S4", weight: 68.7 },
      { week: "S5", weight: 68.4 },
    ],
  },
  {
    id: "p5",
    name: "Iván Soto",
    age: 45,
    goal: "Pérdida de peso",
    startWeight: 95,
    currentWeight: 88.2,
    targetWeight: 85,
    email: "ivan.s@example.com",
    phone: "+34 666 909 808",
    status: "Activo",
    progress: [
      { week: "S1", weight: 95 },
      { week: "S2", weight: 93.8 },
      { week: "S3", weight: 92.4 },
      { week: "S4", weight: 91.1 },
      { week: "S5", weight: 90.2 },
      { week: "S6", weight: 89.3 },
      { week: "S7", weight: 88.2 },
    ],
  },
];

type Appointment = {
  id: string;
  patientId: string;
  date: string; // ISO
  type: "Primera" | "Seguimiento" | "Revisión";
};

const appointments: Appointment[] = [
  { id: "a1", patientId: "p1", date: "2026-05-22T10:00", type: "Seguimiento" },
  { id: "a2", patientId: "p3", date: "2026-05-22T12:30", type: "Revisión" },
  { id: "a3", patientId: "p5", date: "2026-05-23T09:00", type: "Seguimiento" },
  { id: "a4", patientId: "p2", date: "2026-05-23T16:00", type: "Primera" },
  { id: "a5", patientId: "p4", date: "2026-05-24T11:00", type: "Revisión" },
];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("es-ES", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Sidebar({ tab, setTab }: { tab: string; setTab: (t: string) => void }) {
  const items = [
    { id: "overview", label: "Resumen", icon: TrendingUp },
    { id: "patients", label: "Pacientes", icon: Users },
    { id: "appointments", label: "Citas", icon: CalendarDays },
  ];
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar p-4 md:flex">
      <Link to="/" className="mb-8 flex items-center gap-2 px-2 font-display font-semibold">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
          <Leaf className="h-4 w-4" />
        </span>
        Lucía Romero
      </Link>
      <nav className="flex flex-col gap-1">
        {items.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
              tab === id
                ? "bg-primary text-primary-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>
      <div className="mt-auto rounded-2xl bg-card p-4 text-sm">
        <p className="font-display font-medium">¿Vuelves a la web?</p>
        <Link
          to="/"
          className="mt-2 inline-flex items-center gap-1 text-xs text-primary hover:underline"
        >
          <ArrowLeft className="h-3 w-3" /> Ir a la landing
        </Link>
      </div>
    </aside>
  );
}

function StatCard({
  label,
  value,
  hint,
  icon: Icon,
}: {
  label: string;
  value: string;
  hint: string;
  icon: any;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-accent/50 text-accent-foreground">
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-3 font-display text-3xl font-medium">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}

function ProgressChart({ patient }: { patient: Patient }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-4 flex items-baseline justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Evolución</p>
          <h3 className="font-display text-lg font-medium">{patient.name}</h3>
        </div>
        <div className="text-right">
          <p className="font-display text-2xl font-medium text-primary">
            {patient.currentWeight} kg
          </p>
          <p className="text-xs text-muted-foreground">
            Objetivo {patient.targetWeight} kg
          </p>
        </div>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={patient.progress} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="week" stroke="var(--muted-foreground)" fontSize={12} />
            <YAxis stroke="var(--muted-foreground)" fontSize={12} domain={["dataMin - 1", "dataMax + 1"]} />
            <Tooltip
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                fontSize: 12,
              }}
            />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="var(--primary)"
              strokeWidth={2.5}
              dot={{ r: 3, fill: "var(--primary)" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Overview() {
  const today = appointments.slice(0, 3);
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Pacientes activos" value="14" hint="+2 este mes" icon={Users} />
        <StatCard label="Citas esta semana" value="9" hint="3 hoy" icon={CalendarDays} />
        <StatCard label="Adherencia media" value="86%" hint="+4% vs mes pasado" icon={TrendingUp} />
        <StatCard label="Pérdida acumulada" value="38 kg" hint="entre todos los pacientes" icon={Leaf} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <ProgressChart patient={patients[0]} />
          <ProgressChart patient={patients[4]} />
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <h3 className="font-display text-lg font-medium">Próximas citas</h3>
          <ul className="mt-4 space-y-3">
            {today.map((a) => {
              const p = patients.find((x) => x.id === a.patientId)!;
              return (
                <li
                  key={a.id}
                  className="flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3"
                >
                  <div>
                    <p className="font-display text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{formatDate(a.date)}</p>
                  </div>
                  <Badge variant="secondary" className="rounded-full">
                    {a.type}
                  </Badge>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PatientsTab() {
  const [q, setQ] = useState("");
  const [selectedId, setSelectedId] = useState(patients[0].id);
  const filtered = useMemo(
    () =>
      patients.filter((p) =>
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.goal.toLowerCase().includes(q.toLowerCase())
      ),
    [q]
  );
  const selected = patients.find((p) => p.id === selectedId)!;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      <div className="rounded-2xl border border-border bg-card">
        <div className="flex items-center gap-2 border-b border-border p-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar paciente..."
              className="pl-9"
            />
          </div>
          <Button size="sm" className="rounded-full">
            <Plus className="h-4 w-4" /> Nuevo
          </Button>
        </div>
        <ul className="divide-y divide-border">
          {filtered.map((p) => {
            const delta = (p.currentWeight - p.startWeight).toFixed(1);
            const isLoss = Number(delta) < 0;
            return (
              <li key={p.id}>
                <button
                  onClick={() => setSelectedId(p.id)}
                  className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition ${
                    selectedId === p.id ? "bg-secondary/70" : "hover:bg-secondary/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/50 font-display text-sm text-accent-foreground">
                      {p.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                    <div>
                      <p className="font-display text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.goal}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{p.currentWeight} kg</p>
                    <p
                      className={`text-xs ${
                        isLoss ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {Number(delta) > 0 ? "+" : ""}
                      {delta} kg
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                {selected.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </span>
              <div>
                <h3 className="font-display text-xl font-medium">{selected.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {selected.age} años · {selected.goal}
                </p>
              </div>
            </div>
            <Badge className="rounded-full">{selected.status}</Badge>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Inicio</p>
              <p className="mt-1 font-display text-xl">{selected.startWeight} kg</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Actual</p>
              <p className="mt-1 font-display text-xl text-primary">{selected.currentWeight} kg</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Objetivo</p>
              <p className="mt-1 font-display text-xl">{selected.targetWeight} kg</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> {selected.email}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> {selected.phone}
            </span>
          </div>
        </div>
        <ProgressChart patient={selected} />
      </div>
    </div>
  );
}

function AppointmentsTab() {
  return (
    <div className="rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border p-5">
        <h3 className="font-display text-lg font-medium">Agenda</h3>
        <Button size="sm" className="rounded-full">
          <Plus className="h-4 w-4" /> Nueva cita
        </Button>
      </div>
      <table className="w-full text-sm">
        <thead className="bg-secondary/50 text-left text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-5 py-3">Fecha</th>
            <th className="px-5 py-3">Paciente</th>
            <th className="px-5 py-3">Tipo</th>
            <th className="px-5 py-3 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {appointments.map((a) => {
            const p = patients.find((x) => x.id === a.patientId)!;
            return (
              <tr key={a.id} className="hover:bg-secondary/30">
                <td className="px-5 py-4 font-medium">{formatDate(a.date)}</td>
                <td className="px-5 py-4">{p.name}</td>
                <td className="px-5 py-4">
                  <Badge variant="secondary" className="rounded-full">
                    {a.type}
                  </Badge>
                </td>
                <td className="px-5 py-4 text-right">
                  <Button variant="ghost" size="sm">
                    Ver
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Dashboard() {
  const [tab, setTab] = useState("overview");
  const titles: Record<string, string> = {
    overview: "Resumen",
    patients: "Pacientes",
    appointments: "Citas",
  };
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar tab={tab} setTab={setTab} />
      <main className="flex-1">
        <header className="flex items-center justify-between border-b border-border bg-background/80 px-6 py-5 backdrop-blur md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Dashboard</p>
            <h1 className="font-display text-2xl font-medium">{titles[tab]}</h1>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            {["overview", "patients", "appointments"].map((id) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`rounded-full px-3 py-1.5 text-xs ${
                  tab === id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {titles[id]}
              </button>
            ))}
          </div>
        </header>
        <div className="p-6 md:p-10">
          {tab === "overview" && <Overview />}
          {tab === "patients" && <PatientsTab />}
          {tab === "appointments" && <AppointmentsTab />}
        </div>
      </main>
    </div>
  );
}
