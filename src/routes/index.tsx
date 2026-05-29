import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Marquee } from "@/components/Marquee";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import manifestoBg from "@/assets/manifesto-bg.jpg";
import contactBg from "@/assets/contact-bg.jpg";
import processSketch from "@/assets/process-sketch.jpg";
import projectSpacecraft from "@/assets/project-spacecraft.jpg";
import projectAi from "@/assets/project-ai.jpg";
import projectEmergency from "@/assets/project-emergency.jpg";
import projectInclusive from "@/assets/project-inclusive.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhagesh Thupakula — UI/UX & Product Designer" },
      { name: "description", content: "Creative and research-driven UI/UX Designer building futuristic product experiences, adaptive interfaces, and emotionally intelligent interaction design." },
      { property: "og:title", content: "Bhagesh Thupakula — UI/UX & Product Designer" },
      { property: "og:description", content: "Futuristic product experiences, adaptive interfaces, accessibility-first systems." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { n: "01", title: "Futuristic Spacecraft Control Interface", sub: "Advanced Systems Design & Real-Time Data Visualization", tags: ["System Design", "Futuristic UI", "Data Viz", "Dashboard UX"], img: projectSpacecraft },
  { n: "02", title: "AI Emotion-Adaptive Learning Platform", sub: "AI-Powered Behavioral UX Ecosystem", tags: ["AI UX", "Behavioral Design", "Adaptive", "Emotional UX"], img: contactBg },
  { n: "03", title: "Disaster Response & Emergency Comms", sub: "High-Stress UX & Accessibility Design", tags: ["Accessibility", "Emergency UX", "Critical Systems"], img: projectEmergency },
  { n: "04", title: "Neurodivergent-Friendly Social Platform", sub: "Inclusive & Emotionally Intelligent UX", tags: ["Inclusive Design", "Accessibility", "Behavioral Research"], img: projectInclusive },
];

function Portfolio() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 md:px-10 py-6 text-cream">
          <a href="#" className="font-mono text-sm tracking-tight">BHAGESH®</a>
          <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest">
            <a href="#work">Work</a><a href="#about">About</a><a href="#process">Process</a><a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="font-mono text-xs uppercase tracking-widest">[ Let's talk ]</a>
        </div>
      </nav>

      {/* HERO — Trust the Process aesthetic */}
      <section className="relative min-h-screen flex items-center justify-center grain">
        <div className="absolute inset-0 ember-glow" />
        <div className="absolute top-24 left-6 md:left-10 font-mono text-xs text-muted-foreground uppercase tracking-widest">
          <div>(001) — Portfolio '26</div>
          <div className="mt-1">Vijayawada, AP · India</div>
        </div>
        <div className="absolute top-24 right-6 md:right-10 font-mono text-xs text-muted-foreground uppercase tracking-widest text-right">
          <div>UI / UX · Product</div>
          <div className="mt-1">Available for work</div>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[18vw] md:text-[12vw] leading-[0.85] text-cream tracking-tight"
          >
            Bhagesh<br />
            <span className="italic text-ember-soft">Thupakula</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
            className="mt-8 font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-cream/70"
          >
            UI / UX Designer · Product Designer · Creative Technologist
          </motion.p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-cream/50">
          ↓ Scroll · Trust the Process
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-8 bg-background">
        <Marquee items={["Human-Centered Design", "AI-Integrated UX", "Accessibility First", "Futuristic Interaction", "Design Systems", "Motion Design"]} />
      </section>

      {/* INTRO / ABOUT */}
      <section id="about" className="relative py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <div>(About)</div>
            <div className="mt-2 text-cream/60">— Index 002</div>
          </div>
          <div className="md:col-span-9">
            <p className="font-display text-3xl md:text-6xl leading-[1.05] text-balance text-cream">
              Creative and research-driven designer focused on <span className="italic text-ember">futuristic product experiences</span>, adaptive interfaces, and emotionally intelligent interaction — engineering clarity, usability, and meaning through intelligent systems.
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs uppercase tracking-widest">
              {["Human-Centered", "AI-Integrated UX", "Accessibility-First", "Futuristic UI", "Product Strategy", "Design Systems", "Motion Design", "Behavioral UX"].map(f => (
                <div key={f} className="border-t border-border pt-3 text-cream/70">{f}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST THE PROCESS — quote band */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img src={manifestoBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="relative z-10 text-center px-6">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cream/60">— Manifesto</p>
          <h2 className="mt-6 font-display text-5xl md:text-8xl text-cream leading-tight max-w-4xl mx-auto text-balance">
            Design is engineering <span className="italic text-ember-soft">emotions</span>.
          </h2>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 px-6 md:px-10 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">(Selected Work) — 004</div>
              <h2 className="mt-4 font-display text-6xl md:text-8xl text-cream">Case <span className="italic text-ember">studies</span></h2>
            </div>
            <div className="hidden md:block font-mono text-xs uppercase tracking-widest text-cream/60">{projects.length} Projects</div>
          </div>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <motion.a
                key={p.n}
                href="#"
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.05 }}
                className="group block border-t border-border py-8 hover:bg-card transition-colors px-4 -mx-4"
              >
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-1 font-mono text-xs text-muted-foreground">{p.n}</div>
                  <div className="md:col-span-5">
                    <h3 className="font-display text-3xl md:text-5xl text-cream group-hover:italic group-hover:text-ember transition-all">{p.title}</h3>
                  </div>
                  <div className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-cream/60">{p.sub}</div>
                  <div className="md:col-span-2 flex flex-wrap gap-1">
                    {p.tags.slice(0, 3).map(t => <span key={t} className="font-mono text-[10px] uppercase border border-border px-2 py-1 text-cream/70">{t}</span>)}
                  </div>
                  <div className="md:col-span-1 overflow-hidden aspect-video">
                    <img src={p.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / WHILE LOOP — black private site aesthetic */}
      <section id="process" className="relative py-32 px-6 md:px-10 bg-ink">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cream/40">— The Loop</p>
          <h2 className="mt-8 font-mono text-2xl md:text-5xl text-cream break-all md:break-normal">
            while ( ! ( <span className="text-ember">succeed</span> = try() ) );
          </h2>
          <p className="mt-10 font-display italic text-2xl md:text-3xl text-cream/70 max-w-2xl mx-auto">
            Iterate. Research. Prototype. Ship. Repeat until the interface disappears.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mt-24 grid md:grid-cols-4 gap-px bg-border">
          {[
            { k: "01", t: "Research", d: "Behavioral, contextual, qualitative." },
            { k: "02", t: "Architect", d: "IA, flows, scalable systems." },
            { k: "03", t: "Prototype", d: "Figma, Framer, ProtoPie, code." },
            { k: "04", t: "Refine", d: "Motion, accessibility, polish." },
          ].map(s => (
            <div key={s.k} className="bg-ink p-8">
              <div className="font-mono text-xs text-ember">{s.k}</div>
              <div className="mt-6 font-display text-3xl text-cream">{s.t}</div>
              <div className="mt-3 font-mono text-xs text-cream/50 uppercase tracking-wider">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE / SKILLS */}
      <section className="py-32 px-6 md:px-10 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">(Expertise) — 006</div>
            <h2 className="mt-4 font-display text-6xl md:text-7xl text-cream">Built to <span className="italic text-ember">ship</span>.</h2>
            <div className="mt-8 relative h-48 overflow-hidden rounded-md">
              <img src={processSketch} alt="" className="w-full h-full object-cover opacity-60" />
            </div>
          </div>
          <div className="md:col-span-7 space-y-6">
            {[
              { l: "UI Design", v: 95 }, { l: "UX Research", v: 90 },
              { l: "Prototyping", v: 92 }, { l: "Design Systems", v: 88 },
            ].map(s => (
              <div key={s.l}>
                <div className="flex justify-between font-mono text-xs uppercase tracking-widest text-cream/70 mb-2">
                  <span>{s.l}</span><span>{s.v}%</span>
                </div>
                <div className="h-px bg-border relative">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.v}%` }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-y-0 left-0 bg-ember h-[2px] -top-px" />
                </div>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-border">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Tools</div>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Framer", "ProtoPie", "Photoshop", "React", "Flutter", "Tailwind", "VS Code", "Git", "Electron"].map(t => (
                  <span key={t} className="font-mono text-xs px-3 py-2 border border-border text-cream/80 hover:bg-ember hover:text-cream hover:border-ember transition-colors">{t}</span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 font-mono text-xs uppercase tracking-widest">
              <div><div className="text-muted-foreground">English</div><div className="text-cream mt-1">Fluent</div></div>
              <div><div className="text-muted-foreground">Telugu</div><div className="text-cream mt-1">Native</div></div>
              <div><div className="text-muted-foreground">Hindi</div><div className="text-cream mt-1">Fluent</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL PROJECTS strip */}
      <section className="relative py-24 overflow-hidden">
        <img src={projectAi} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-12">(Also Built) — 007</div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "MotoMate", d: "Intelligent touring assistant" },
              { t: "Voting System", d: "Secure digital platform" },
              { t: "YouTube Clone", d: "React & Tailwind UI" },
            ].map(p => (
              <div key={p.t} className="border border-border bg-card/60 backdrop-blur p-8 hover:border-ember transition-colors">
                <div className="font-display text-4xl text-cream">{p.t}</div>
                <div className="mt-4 font-mono text-xs uppercase tracking-widest text-cream/60">{p.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 font-mono text-xs text-cream/60">
            ◆ 200+ problems solved on LeetCode &amp; CodeChef · Class Representative @ SRM AP · Technical Mentor
          </div>
        </div>
      </section>

      {/* EDUCATION + CERTS */}
      <section className="py-24 px-6 md:px-10 border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">(Education)</div>
            <h3 className="mt-4 font-display text-4xl md:text-5xl text-cream">B.Tech — Computer Science</h3>
            <p className="mt-3 font-mono text-sm text-cream/70 uppercase tracking-wider">SRM AP University · 2024 – 2028 · CGPA 8.0</p>
          </div>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">(Certifications)</div>
            <ul className="space-y-2 font-mono text-sm text-cream/80">
              {["Data Structures & Algorithms", "JavaScript", "Tailwind CSS", "Git & GitHub", "UI/UX Design", "Product Design"].map(c => (
                <li key={c} className="flex gap-3 border-b border-border pb-2"><span className="text-ember">→</span>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT — Do More aesthetic */}
      <section id="contact" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img src={contactBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
        <div className="relative z-10 w-full px-6 md:px-10 py-24">
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-ember">— Let's build</p>
            <h2 className="mt-6 font-display text-[18vw] md:text-[14vw] leading-[0.85] text-cream">
              Do <span className="italic text-ember">more.</span>
            </h2>
            <div className="mt-16 grid md:grid-cols-3 gap-8 font-mono text-sm">
              <a href="mailto:bhagesh_thupakula@srmapedu.in" className="group border-t border-cream/30 pt-4 text-cream hover:text-ember transition-colors">
                <div className="text-xs uppercase tracking-widest text-cream/50">Email</div>
                <div className="mt-2 break-all">bhagesh_thupakula@srmapedu.in →</div>
              </a>
              <a href="tel:+919966470499" className="group border-t border-cream/30 pt-4 text-cream hover:text-ember transition-colors">
                <div className="text-xs uppercase tracking-widest text-cream/50">Phone</div>
                <div className="mt-2">+91 99664 70499 →</div>
              </a>
              <a href="https://linkedin.com/in/bhagesh-thupakula" target="_blank" rel="noreferrer" className="group border-t border-cream/30 pt-4 text-cream hover:text-ember transition-colors">
                <div className="text-xs uppercase tracking-widest text-cream/50">LinkedIn</div>
                <div className="mt-2">/in/bhagesh-thupakula →</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-ink py-12 px-6 md:px-10 grain">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 font-mono text-xs uppercase tracking-widest text-cream/50">
          <div>© 2026 Bhagesh Thupakula · Vijayawada, AP</div>
          <div className="flex gap-6">
            <span>Trust the Process</span>
            <span className="text-ember">✦</span>
            <span>Do More</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8">
          <img src={processSketch} alt="" className="w-full max-h-24 object-cover opacity-30 rounded" />
        </div>
      </footer>
    </main>
  );
}
