import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowUpRight, BrainCircuit, Camera, Check, Code2,
  Download, GitFork, Globe2, Link, Mail, MapPin, Menu, Mountain,
  Palette, Phone, X,
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
    description: 'Entwicklung kundenspezifischer Erweiterungen und Integrationen für SAP Digital Manufacturing. SAP-DM-Customizing, POD-Design, JavaScript/Node.js/TypeScript und SAP UI5 in Cloud Foundry sowie EDC-Installation und Deployment. Dazu Schnittstellen- und Architekturdokumentation, Maschinenanbindung und technische Kundenabstimmung.',
    current: true,
  },
  {
    period: '10/2023 — 06/2024',
    company: 'TEQYARD GmbH · Braunschweig',
    role: 'IoT Developer',
    description: 'Konzeption und Entwicklung von Hardware und Software für batteriebetriebene IoT-Geräte zur satellitengestützten Überwachung von Seefrachtcontainern. Technische Projektleitung, Requirements Engineering und Koordination externer Entwicklungspartner.',
  },
  {
    period: '01/2020 — 10/2023',
    company: 'Bühler GmbH · Braunschweig',
    role: 'IoT Specialist',
    description: 'Konzeption, Entwicklung und Rollout IoT-basierter Monitoringlösungen für Verbrauchsdaten und Industriemaschinen. Planung und Betreuung von Smart-Metering-Lösungen für Strom, Gas und Wasser, Entwicklung eines internen IoT-Grundkurses sowie Industrial-IoT-Lösungen auf Basis von Azure IoT, MQTT und OPC UA.',
  },
  {
    period: '04/2013 — 12/2019',
    company: 'Bühler GmbH · Braunschweig',
    role: 'IT System Administrator',
    description: 'Clientmanagement, Teilprojektleitung sowie Unterstützung bei Entwicklungs-, IoT- und Digitalisierungsthemen. Ergänzend tätig in Corporate Design und Video.',
  },
]

const skills = [
  { name: 'Applied AI & Agents', detail: 'ChatGPT · Microsoft Foundry · Agenten' },
  { name: 'AI-assisted Development', detail: 'Codex · Claude Code · Kimi · OpenCode' },
  { name: 'C# / .NET', detail: 'Desktop- & Enterprise-Anwendungen' },
  { name: 'Python', detail: 'Automation, IoT & Datenverarbeitung' },
  { name: 'C / C++', detail: 'Embedded Systems & hardwarenahe Entwicklung' },
  { name: 'SQL', detail: 'Datenhaltung & Systemintegration' },
  { name: 'JavaScript / TypeScript', detail: 'React · Node.js · Vite' },
  { name: 'Microsoft Azure', detail: 'IoT Hub · Data Factory · Functions · Static Web Apps' },
]

const domains = [
  ['AI Automation', 'n8n · OpenClaw Gateway · OpenRouter · Ollama'],
  ['SAP Applications', 'Digital Manufacturing Cloud · BTP · S/4HANA'],
  ['AI Implementation', 'Agentische Workflows · KI-gestützte Web-Apps · EU AI Act'],
  ['Industrial IoT & OT', 'MQTT · OPC UA · Modbus · CAN-Bus · LoRa'],
  ['Automation', 'Siemens S7-1200 · TIA Portal'],
  ['Embedded Systems', 'ESP32 · Raspberry Pi · Arduino'],
  ['Solution Architecture', 'Shopfloor · Manufacturing · Enterprise Integration'],
]

const projects = [
  {
    title: 'AI Agents & Automation Lab',
    type: 'Applied AI',
    description: 'Praktische Entwicklung und Erprobung von KI-Agenten mit ChatGPT und Microsoft Foundry sowie KI-gestützter Webentwicklung mit Codex, Claude Code und Kimi. Ergänzend Erfahrungen mit OpenCode, OpenRouter, Ollama, OpenClaw Gateway und n8n.',
  },
  {
    title: 'Medical Device Monitoring',
    type: 'Freelance',
    description: 'C#/.NET-Desktopanwendung zur Anbindung eines medizinischen Multiparameter-Diagnostikgeräts über USB/Serial sowie zur Echtzeiterfassung und Visualisierung der Messdaten mit ScottPlot.',
  },
  {
    title: 'Event Equipment Platform',
    type: 'Open Source',
    description: 'Webplattform zur Vermittlung von Equipment und Dienstleistungen für Veranstaltungen.',
  },
  {
    title: 'Sports Results Application',
    type: 'Open Source',
    description: 'Webanwendung zur Erfassung und Darstellung von Schießergebnissen für eine Sportveranstaltung.',
  },
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
    description: 'Authentische Bildwelten für Unternehmen, Produkte und persönliche Marken – von der Konzeption bis zur finalen Auswahl.',
    tags: ['Businessporträts', 'Produktfotografie', 'Reportage'],
  },
  {
    icon: Palette,
    title: 'Grafikdesign',
    description: 'Klar gestaltete visuelle Kommunikation, die technische Inhalte verständlich macht und Marken konsistent weiterentwickelt.',
    tags: ['Corporate Design', 'Digital & Print', 'Social Media'],
  },
  {
    icon: Code2,
    title: 'Web & digitale Inhalte',
    description: 'Moderne Webauftritte und digitale Inhalte, bei denen Gestaltung, technische Umsetzung und Nutzererlebnis zusammenspielen.',
    tags: ['Webdesign', 'React', 'Content'],
  },
]

const profiles = [
  {
    icon: Link,
    name: 'LinkedIn',
    handle: '/andre-peschyras',
    description: 'Beruflicher Werdegang, Fachthemen und mein professionelles Netzwerk.',
    url: 'https://www.linkedin.com/in/andre-peschyras',
  },
  {
    icon: GitFork,
    name: 'GitHub',
    handle: '/AndrePes',
    description: 'Code, Experimente und ausgewählte Projekte aus Software und IoT.',
    url: 'https://github.com/AndrePes',
  },
  {
    icon: Camera,
    name: 'Instagram',
    handle: '@pes.and',
    description: 'Fotografie, kreative Perspektiven und Eindrücke abseits des Codes.',
    url: 'https://www.instagram.com/pes.and',
  },
  {
    icon: Globe2,
    name: 'Website',
    handle: 'peschyras.com',
    description: 'Meine persönliche Website als zentraler Einstieg in meine Arbeit.',
    url: 'https://peschyras.com',
  },
  {
    icon: Globe2,
    name: 'malt.com',
    handle: 'andrepeschyras1',
    description: 'Mein Profil auf der Plattform für freiberufliche Experten und Projekte.',
    url: 'https://www.malt.de/profile/andrepeschyras1',
  },
]

const nav = [
  ['Über mich', 'about'], ['AI-Fokus', 'ai'], ['Erfahrung', 'experience'], ['Skills', 'skills'], ['Projekte', 'projects'], ['Profile', 'profiles'], ['Kontakt', 'contact'],
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
            <a href="/assets/cv_de_2026_v2.pdf" download className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-blue-400/50 hover:bg-blue-500/10 sm:flex">
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
              <p className="eyebrow mb-4">Applied AI · Software Engineering · Industrial IoT</p>
              <h1 className="max-w-3xl text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[.88] tracking-[-.065em] text-white">
                KI, die<br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">ins Tun kommt.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
                Ich bin André — Software Engineer mit praktischer Erfahrung in <span className="text-white">angewandter KI, KI-Agenten und KI-gestützter Webentwicklung</span>. Ich verbinde moderne AI-Tools mit meinem Hintergrund in Industrial IoT, Manufacturing, Cloud und Enterprise-Integration — von der Idee bis zur nutzbaren Lösung.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#ai" className="group flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-400">
                  Mein AI-Fokus <ArrowDown size={16} className="transition group-hover:translate-y-0.5" />
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
                      <a href="https://github.com/AndrePes" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-blue-500"><GitFork size={17} /></a>
                      <a href="https://www.linkedin.com/in/andre-peschyras" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-blue-500"><Link size={17} /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-7 top-12 hidden rounded-2xl border border-white/10 bg-[#0b1220]/90 p-4 shadow-xl backdrop-blur-xl sm:block">
                 <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500/15 text-blue-400"><BrainCircuit size={17} /></span><div><p className="text-[10px] uppercase tracking-wider text-slate-500">Fokus</p><p className="text-sm font-semibold text-white">Applied AI</p></div></div>
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

        <section id="ai" className="relative overflow-hidden border-b border-white/[0.06] py-24 sm:py-32">
          <div className="absolute -right-40 top-8 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
            <div><p className="eyebrow mb-4">Aktueller Schwerpunkt</p><h2 className="section-heading">AI praktisch<br />in die Anwendung bringen.</h2></div>
            <div>
              <p className="text-2xl font-medium leading-snug tracking-tight text-slate-200 sm:text-3xl">Ich nutze KI nicht nur als Thema, sondern als Werkzeug für Entwicklung, Automatisierung und bessere Arbeitsabläufe.</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  ['Agenten', 'Erstellen und Erproben von KI-Agenten mit ChatGPT und Microsoft Foundry.'],
                  ['AI Development', 'Web-Apps mit Codex, Claude Code und Kimi entwickeln und iterativ verbessern.'],
                  ['Automation', 'n8n und OpenClaw für praktische Automatisierungs- und Integrationsszenarien einsetzen.'],
                  ['Local AI', 'Erste Erfahrungen mit lokaler LLM-Bereitstellung über Ollama sowie OpenCode und OpenRouter.'],
                ].map(([title, description]) => <div key={title} className="card p-5"><p className="font-semibold text-white">{title}</p><p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p></div>)}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-slate-500">Praxisnah und umsetzungsorientiert: mit Blick auf sinnvolle Use Cases, Integration und verantwortungsvollen Einsatz. Kein Anspruch auf Forschung oder Modelltraining.</p>
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
                 <div className="mb-8 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 text-blue-400"><Code2 size={19} /></span><h3 className="font-semibold text-white">AI, Sprachen & Plattformen</h3></div>
                <div className="grid gap-3 sm:grid-cols-2">{skills.map(skill => <div key={skill.name} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-blue-400/20"><div className="mb-2 flex items-center gap-2"><Check size={13} className="shrink-0 text-blue-400" /><p className="text-sm font-semibold text-slate-200">{skill.name}</p></div><p className="text-xs leading-relaxed text-slate-500">{skill.detail}</p></div>)}</div>
              </div>
              <div className="card p-7 sm:p-9">
                <div className="mb-8 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 text-blue-400"><BrainCircuit size={19} /></span><h3 className="font-semibold text-white">Domänen & Tools</h3></div>
                <div className="grid gap-3 sm:grid-cols-2">{domains.map(([name, detail]) => <div key={name} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-blue-400/20"><div className="mb-2 flex items-center gap-2"><Check size={13} className="text-blue-400" /><p className="text-sm font-semibold text-slate-200">{name}</p></div><p className="text-xs leading-relaxed text-slate-500">{detail}</p></div>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
              <div><p className="eyebrow mb-4">Eigene & Freelance-Projekte</p><h2 className="section-heading">Ideen in funktionierende<br />Produkte übersetzt.</h2></div>
               <p className="max-w-xl text-sm leading-relaxed text-slate-400 lg:justify-self-end">Ausgewählte Anwendungen von praktischer AI-Erprobung bis zu Medizintechnik, Veranstaltungsmanagement und Sport — eigenständig konzipiert und umgesetzt.</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map(project => <article key={project.title} className="card flex flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-blue-500/[.035] sm:p-8"><span className="w-fit rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400">{project.type}</span><h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3><p className="mt-3 leading-relaxed text-slate-400">{project.description}</p></article>)}
            </div>
          </div>
        </section>

        <section id="freelance" className="border-y border-white/[0.06] bg-white/[0.018] py-24 sm:py-32">
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

        <section className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
             <div><p className="eyebrow mb-4">Ausbildung & Weiterbildung</p><h2 className="section-heading mb-10">Fundament.</h2><div className="space-y-8 border-l border-white/10 pl-7"><div><p className="text-xs font-mono text-blue-400">08/2005 — 01/2009</p><h3 className="mt-2 text-lg font-semibold text-white">Ausbildung zum Industriemechaniker</h3><p className="mt-1 text-sm text-slate-500">Bildungswerkstatt Georgsmarienhütte · IHK-Abschluss</p><p className="mt-3 leading-relaxed text-slate-400">Schwerpunkt Produktionstechnik, Maschinen- und Anlagenbau sowie Instandhaltung.</p></div><div><p className="text-xs font-mono text-blue-400">Abgeschlossen</p><h3 className="mt-2 text-lg font-semibold text-white">EU AI Act</h3><p className="mt-3 leading-relaxed text-slate-400">Online-Weiterbildung zu den Grundlagen des EU AI Act mit Zertifikat.</p></div></div></div>
            <div><p className="eyebrow mb-4">Abseits des Codes</p><h2 className="section-heading mb-10">Interessen.</h2><div className="grid grid-cols-2 gap-3">{interests.map(({icon: Icon, label}) => <div key={label} className="card group flex min-h-32 flex-col justify-between p-5 transition hover:border-blue-400/20 hover:bg-blue-500/[.04]"><Icon size={24} className="text-blue-400 transition group-hover:scale-110" /><p className="text-sm font-medium text-slate-300">{label}</p></div>)}</div></div>
          </div>
        </section>

        <section id="profiles" className="border-t border-white/[0.06] bg-white/[0.018] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow mb-4">Online entdecken</p>
                <h2 className="section-heading">Meine öffentlichen Profile.</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-slate-500">
                Mehr über meine Arbeit, Projekte und kreativen Interessen — auf den Plattformen, auf denen ich aktiv bin.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {profiles.map(({ icon: Icon, name, handle, description, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name}-Profil von André Peschyras öffnen`}
                  className="card group flex min-h-64 flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[.045]"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400 transition group-hover:border-blue-300/30 group-hover:bg-blue-500 group-hover:text-white">
                      <Icon size={19} />
                    </span>
                    <ArrowUpRight size={18} className="text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
                  </div>
                  <div className="mt-auto pt-10">
                    <h3 className="text-lg font-semibold text-white">{name}</h3>
                    <p className="mt-1 font-mono text-xs text-blue-400">{handle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-500">{description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="relative mx-auto max-w-[1480px] overflow-hidden rounded-[2rem] border border-blue-400/20 bg-blue-600 px-6 py-20 text-center shadow-[0_0_100px_rgba(37,99,235,.18)] sm:py-28">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-white/10" /><div className="absolute -right-24 -bottom-32 h-96 w-96 rounded-full border border-white/10" />
             <div className="relative mx-auto max-w-3xl"><p className="mb-5 text-xs font-semibold uppercase tracking-[.22em] text-blue-100">Applied AI · Software Engineering · Industrial IoT</p><h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Lassen wir AI praktisch werden.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">Ob AI-Integration, Agenten und Automatisierung, industrielle Software oder ein technisches Projekt: Ich freue mich auf den Austausch über eine konkrete Herausforderung.</p><button onClick={copyEmail} className="mx-auto mt-9 flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 transition hover:scale-[1.02]">{copied ? <><Check size={17} /> E-Mail kopiert</> : <><Mail size={17} /> mail@andre-peschyras.de</>}</button></div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col justify-between gap-8 border-b border-white/[0.06] pb-10 md:flex-row">
           <div><p className="text-lg font-semibold text-white">André Peschyras</p><p className="mt-2 text-sm text-slate-500">Applied AI · Software Engineering · Industrial IoT</p></div>
          <div className="grid gap-3 text-sm sm:grid-cols-2 sm:gap-x-10"><a href="tel:+4917630475008" className="flex items-center gap-2 text-slate-400 hover:text-white"><Phone size={14} /> +49 176 30 47 5008</a><span className="flex items-center gap-2 text-slate-400"><MapPin size={14} /> 38551 Ribbesbüttel</span><a href="https://peschyras.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white"><ArrowUpRight size={14} /> peschyras.com</a><a href="mailto:mail@andre-peschyras.de" className="flex items-center gap-2 text-slate-400 hover:text-white"><Mail size={14} /> E-Mail senden</a></div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} André Peschyras</p><p>Entwickelt mit React · TypeScript · Tailwind CSS</p></div>
      </footer>
    </div>
  )
}

export default App
