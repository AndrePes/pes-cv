import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowUpRight, BrainCircuit, Camera, Check, Code2,
  Download, GitFork, Link, Mail, MapPin, Menu, Mountain,
  Palette, Phone, Video, X, Zap,
} from 'lucide-react'

type Experience = {
  period: string
  company: string
  role: string
  description: string
  current?: boolean
}

const experience: Experience[] = [
  {
    period: '07/2024 — heute',
    company: 'Concircle Consulting GmbH',
    role: 'Software Engineer',
    description: 'Entwicklung und Beratung kundenspezifischer Erweiterungen für SAP Digital Manufacturing. Mitarbeit am Forschungsprojekt BePro-CEND zur Umsetzung von Circular Economy durch intelligente Datennutzung.',
    current: true,
  },
  {
    period: '10/2023 — 06/2024',
    company: 'TEQYARD GmbH · Braunschweig',
    role: 'IoT Developer',
    description: 'Entwicklung von Hardware und Software für eingebettete, batteriebetriebene Geräte.',
  },
  {
    period: '01/2020 — 10/2023',
    company: 'Bühler GmbH · Braunschweig',
    role: 'IoT Specialist',
    description: 'Konzeption und Implementierung von IoT-Lösungen für spezifische Anwendungen entlang der Digitalisierungsstrategie in Manufacturing & Logistics.',
  },
  {
    period: '04/2013 — 12/2019',
    company: 'Bühler GmbH · Braunschweig',
    role: 'IT System Administrator',
    description: 'Clientmanagement, Teilprojektleitung sowie Unterstützung bei Entwicklungs-, IoT- und Digitalisierungsthemen. Ergänzend tätig in Corporate Design und Video.',
  },
]

const skills = [
  { name: 'C / C++', detail: 'Embedded Systems', value: 82 },
  { name: 'Python', detail: 'Automation & IoT', value: 80 },
  { name: 'C# / .NET', detail: 'Software Engineering', value: 78 },
  { name: 'TypeScript / React', detail: 'Web Applications', value: 74 },
  { name: 'SQL', detail: 'Data & Integration', value: 70 },
  { name: 'Microsoft Azure', detail: 'IoT Hub, Data Factory, DevOps', value: 76 },
]

const domains = [
  ['SAP Applications', 'Digital Manufacturing Cloud · BTP · S/4HANA'],
  ['Agentic AI', 'Codex · Copilot · OpenClaw'],
  ['IoT / IIoT', 'MQTT · Modbus · CAN-Bus · LoRa'],
  ['Automation', 'SIMATIC S7-1200 · TIA Portal · OPC UA'],
  ['Embedded Systems', 'Raspberry Pi · Arduino · ESP32'],
  ['Project Management', 'Jira · Confluence · GitHub Projects'],
]

const interests = [
  { icon: Camera, label: 'Fotografie' },
  { icon: Palette, label: 'Grafik & Film' },
  { icon: Mountain, label: 'Outdoor' },
  { icon: Code2, label: 'Coding for good' },
]

const freelanceServices = [
  {
    icon: Camera,
    title: 'Fotografie',
    description: 'Authentische Bildwelten für Unternehmen, Menschen, Produkte und Veranstaltungen — von der Konzeption bis zur professionellen Nachbearbeitung.',
    tags: ['Business & Portrait', 'Event', 'Produkt & Dokumentation'],
  },
  {
    icon: Video,
    title: 'Videografie',
    description: 'Bewegtbild mit klarer Botschaft: Unternehmensporträts, Social Content und technische Dokumentationen aus einer Hand.',
    tags: ['Konzeption', 'Dreh & Schnitt', 'Social Media'],
  },
  {
    icon: Palette,
    title: 'Grafikdesign',
    description: 'Durchdachte visuelle Kommunikation für digitale und gedruckte Medien — konsistent, funktional und passend zur Marke.',
    tags: ['Brand Assets', 'Print & Digital', 'Layout'],
  },
]

const nav = [
  ['Über mich', 'about'], ['Erfahrung', 'experience'], ['Skills', 'skills'], ['Freelance', 'freelance'], ['Kontakt', 'contact'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? window.scrollY / total : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const copyEmail = async () => {
    await navigator.clipboard.writeText('mail@andre-peschyras.de')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="relative overflow-hidden bg-ink text-slate-300">
      <div className="noise" />
      <div className="fixed left-0 top-0 z-[60] h-0.5 bg-blue-500 shadow-[0_0_14px_#2997ff]" style={{ width: `${scrollProgress * 100}%` }} />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-ink/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="group flex items-center gap-3 text-white" aria-label="Zur Startseite">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500 text-sm font-black text-white shadow-[0_0_30px_rgba(41,151,255,.28)]">AP</span>
            <span className="hidden text-sm font-semibold tracking-wide sm:block">ANDRÉ PESCHYRAS</span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
            {nav.map(([label, target]) => <a key={target} href={`#${target}`} className="text-sm text-slate-400 transition hover:text-white">{label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href="/assets/cv_de_2026.pdf" download className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-blue-400/50 hover:bg-blue-500/10 sm:flex">
              <Download size={14} /> PDF CV
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden" aria-label="Menü öffnen">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/[0.06] bg-ink px-6 py-5 lg:hidden">
            {nav.map(([label, target]) => <a key={target} href={`#${target}`} onClick={() => setMenuOpen(false)} className="block border-b border-white/[0.06] py-3 text-sm text-slate-300">{label}</a>)}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative flex min-h-screen items-center pt-20">
          <div className="absolute right-[-12rem] top-36 h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-10">
            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" /></span>
                <span className="text-xs font-semibold uppercase tracking-[.22em] text-slate-400">Offen für Festanstellung & Freelance-Projekte</span>
              </div>
              <p className="eyebrow mb-4">Software Engineer · IoT Developer · Creative Freelancer</p>
              <h1 className="max-w-3xl text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[.88] tracking-[-.065em] text-white">
                Technik, die<br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">etwas bewegt.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
                Ich bin André — Softwareentwickler und kreativer Freelancer. In Festanstellung oder im Projekt verbinde ich <span className="text-white">IoT, Embedded Systems und Cloud-Technologien</span> zu Lösungen, die in der Praxis funktionieren. Freelance unterstütze ich außerdem mit <span className="text-white">Fotografie, Videografie und Grafikdesign</span>.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#experience" className="group flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400">
                  Meine Erfahrung <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
                </a>
                <a href="#freelance" className="flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/5">
                  Freelance-Angebot <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-blue-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel shadow-2xl">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src="/assets/Andre_Peschyras-04%20Large%20copy.jpeg" alt="Porträt von André Peschyras" className="h-full w-full object-cover object-[52%_35%] saturate-[.9] transition duration-700 hover:scale-[1.02]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent px-7 pb-7 pt-28">
                  <div className="flex items-end justify-between gap-5">
                    <div><p className="text-xl font-semibold text-white">André Peschyras</p><p className="mt-1 text-sm text-slate-400">Ribbesbüttel · Germany</p></div>
                    <div className="flex gap-2">
                      <a href="https://github.com/peschyras" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-blue-500"><GitFork size={17} /></a>
                      <a href="https://www.linkedin.com/in/andre-peschyras" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-blue-500"><Link size={17} /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-7 top-12 hidden rounded-2xl border border-white/10 bg-[#0b1220]/90 p-4 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500/15 text-blue-400"><Zap size={17} /></span><div><p className="text-[10px] uppercase tracking-wider text-slate-500">Fokus</p><p className="text-sm font-semibold text-white">Industrial IoT</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-white/[0.06] bg-white/[0.018] py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
            <div><p className="eyebrow mb-4">Über mich</p><h2 className="section-heading">Von der Werkbank<br />bis in die Cloud.</h2></div>
            <div>
              <p className="text-2xl font-medium leading-snug tracking-tight text-slate-200 sm:text-3xl">Ich denke Systeme ganzheitlich — vom Sensor über die Datenpipeline bis zur Anwendung.</p>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
                {[['13+', 'Jahre Tech-Erfahrung'], ['6', 'Kerntechnologien'], ['360°', 'IT & Produktion']].map(([n, label]) => <div key={label} className="bg-panel p-6"><p className="text-3xl font-semibold text-white">{n}</p><p className="mt-2 text-xs leading-snug text-slate-500">{label}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div><p className="eyebrow mb-4">Werdegang</p><h2 className="section-heading">Erfahrung, die aufbaut.</h2></div>
              <p className="max-w-md text-sm leading-relaxed text-slate-500">Technische Tiefe, Industrieerfahrung und ein klarer Blick für die Menschen, die digitale Lösungen täglich nutzen.</p>
            </div>
            <div className="relative ml-3 border-l border-white/10 pl-8 sm:ml-[11rem] sm:pl-12">
              {experience.map((item, index) => (
                <article key={item.company + item.period} className="relative pb-14 last:pb-0">
                  <span className={`absolute -left-[2.33rem] top-1.5 h-3 w-3 rounded-full border-2 border-ink sm:-left-[3.33rem] ${item.current ? 'bg-blue-400 shadow-[0_0_18px_#2997ff]' : 'bg-slate-600'}`} />
                  <p className="mb-3 text-xs font-medium uppercase tracking-[.12em] text-slate-500 sm:absolute sm:-left-[14rem] sm:top-1.5 sm:w-[10rem] sm:text-right">{item.period}</p>
                  <div className="card p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-blue-500/[.035] sm:p-8">
                    <div className="flex flex-wrap items-center gap-3"><h3 className="text-xl font-semibold text-white">{item.company}</h3>{item.current && <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400">Aktuell</span>}</div>
                    <p className="mt-1 text-sm font-medium text-blue-400">{item.role}</p>
                    <p className="mt-4 max-w-3xl leading-relaxed text-slate-400">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-white/[0.06] bg-white/[0.018] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-14"><p className="eyebrow mb-4">Kompetenzen</p><h2 className="section-heading">Technischer Werkzeugkasten.</h2></div>
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="card p-7 sm:p-9">
                <div className="mb-8 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 text-blue-400"><Code2 size={19} /></span><h3 className="font-semibold text-white">Sprachen & Plattformen</h3></div>
                <div className="space-y-6">{skills.map(skill => <div key={skill.name}><div className="mb-2 flex items-end justify-between gap-4"><div><p className="text-sm font-semibold text-slate-200">{skill.name}</p><p className="text-xs text-slate-500">{skill.detail}</p></div><span className="font-mono text-[11px] text-slate-600">{skill.value}</span></div><div className="h-1 overflow-hidden rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" style={{ width: `${skill.value}%` }} /></div></div>)}</div>
              </div>
              <div className="card p-7 sm:p-9">
                <div className="mb-8 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 text-blue-400"><BrainCircuit size={19} /></span><h3 className="font-semibold text-white">Domänen & Tools</h3></div>
                <div className="grid gap-3 sm:grid-cols-2">{domains.map(([name, detail]) => <div key={name} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-blue-400/20"><div className="mb-2 flex items-center gap-2"><Check size={13} className="text-blue-400" /><p className="text-sm font-semibold text-slate-200">{name}</p></div><p className="text-xs leading-relaxed text-slate-500">{detail}</p></div>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="freelance" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
              <div><p className="eyebrow mb-4">Freelance-Leistungen</p><h2 className="section-heading">Technisches Verständnis.<br />Kreativ in Szene gesetzt.</h2></div>
              <p className="max-w-xl text-sm leading-relaxed text-slate-400 lg:justify-self-end">Für Unternehmen, Agenturen und Selbstständige entwickle ich visuelle Inhalte mit einem sicheren Gespür für Technik, Marke und Zielgruppe — flexibel als einzelnes Gewerk oder als stimmiges Gesamtpaket.</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {freelanceServices.map(({ icon: Icon, title, description, tags }) => (
                <article key={title} className="card group flex flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-blue-500/[.035] sm:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white"><Icon size={22} /></span>
                  <h3 className="mt-7 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-400">{description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] text-slate-400">{tag}</span>)}</div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-blue-400/15 bg-blue-500/[.05] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div><p className="font-semibold text-white">Ein Projekt im Kopf?</p><p className="mt-1 text-sm text-slate-400">Schreiben Sie mir kurz, worum es geht — ich melde mich mit einer passenden Einschätzung.</p></div>
              <a href="mailto:mail@andre-peschyras.de?subject=Freelance-Anfrage" className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400">Projekt anfragen <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] bg-white/[0.018] py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
            <div><p className="eyebrow mb-4">Ausbildung</p><h2 className="section-heading mb-10">Fundament.</h2><div className="space-y-8 border-l border-white/10 pl-7"><div><p className="text-xs font-mono text-blue-400">2005 — 2009</p><h3 className="mt-2 text-lg font-semibold text-white">Ausbildung zum Industriemechaniker</h3><p className="mt-1 text-sm text-slate-500">Bildungswerkstatt Georgsmarienhütte</p><p className="mt-3 leading-relaxed text-slate-400">Herstellung, Instandhaltung und Überwachung technischer Systeme sowie Einrichtung und Inbetriebnahme von Produktionsanlagen.</p></div><div><p className="text-xs font-mono text-blue-400">2003</p><h3 className="mt-2 text-lg font-semibold text-white">Hauptschulabschluss</h3><p className="mt-1 text-sm text-slate-500">Schule am roten Berg · Hasbergen</p></div></div></div>
            <div><p className="eyebrow mb-4">Abseits des Codes</p><h2 className="section-heading mb-10">Interessen.</h2><div className="grid grid-cols-2 gap-3">{interests.map(({icon: Icon, label}) => <div key={label} className="card group flex min-h-32 flex-col justify-between p-5 transition hover:border-blue-400/20 hover:bg-blue-500/[.04]"><Icon size={24} className="text-blue-400 transition group-hover:scale-110" /><p className="text-sm font-medium text-slate-300">{label}</p></div>)}</div></div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="relative mx-auto max-w-[1480px] overflow-hidden rounded-[2rem] border border-blue-400/20 bg-blue-600 px-6 py-20 text-center shadow-[0_0_100px_rgba(37,99,235,.18)] sm:py-28">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-white/10" /><div className="absolute -right-24 -bottom-32 h-96 w-96 rounded-full border border-white/10" />
            <div className="relative mx-auto max-w-3xl"><p className="mb-5 text-xs font-semibold uppercase tracking-[.22em] text-blue-100">Festanstellung oder Freelance</p><h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Bereit, gemeinsam etwas zu bewegen?</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">Ob langfristige Position im Team, technisches Projekt oder kreativer Auftrag in Fotografie, Videografie und Grafikdesign — ich freue mich auf Ihre Anfrage.</p><button onClick={copyEmail} className="mx-auto mt-9 flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 transition hover:scale-[1.02]">{copied ? <><Check size={17} /> E-Mail kopiert</> : <><Mail size={17} /> mail@andre-peschyras.de</>}</button></div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col justify-between gap-8 border-b border-white/[0.06] pb-10 md:flex-row">
          <div><p className="text-lg font-semibold text-white">André Peschyras</p><p className="mt-2 text-sm text-slate-500">Software Engineer · IoT Developer · Creative Freelancer</p></div>
          <div className="grid gap-3 text-sm sm:grid-cols-2 sm:gap-x-10"><a href="tel:+4917630475008" className="flex items-center gap-2 text-slate-400 hover:text-white"><Phone size={14} /> +49 176 30 47 5008</a><span className="flex items-center gap-2 text-slate-400"><MapPin size={14} /> 38551 Ribbesbüttel</span><a href="https://peschyras.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white"><ArrowUpRight size={14} /> peschyras.com</a><a href="mailto:mail@andre-peschyras.de" className="flex items-center gap-2 text-slate-400 hover:text-white"><Mail size={14} /> E-Mail senden</a></div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} André Peschyras</p><p>Entwickelt mit React · TypeScript · Tailwind CSS</p></div>
      </footer>
    </div>
  )
}

export default App
