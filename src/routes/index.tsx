import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Marquee } from "@/components/Marquee";
import heroBold from "@/assets/bhagesh-hero.jpg";
import portraitRed from "@/assets/bhagesh-hero.jpg";
import chromeFlow from "@/assets/chrome-flow.jpg";
import brutalistSpace from "@/assets/brutalist-space.jpg";
import projectSpacecraft from "@/assets/project-spacecraft.jpg";
import projectAi from "@/assets/project-ai.jpg";
import projectEmergency from "@/assets/project-emergency.jpg";
import projectInclusive from "@/assets/project-inclusive.jpg";
import projectMotomate from "@/assets/project-motomate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhagesh Thupakula — Product & Interaction Designer" },
      { name: "description", content: "Independent product & interaction designer crafting bold, research-driven digital experiences. Available worldwide." },
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
  { n: "01", year: "2025", title: "Spacecraft Control", sub: "System Design · Real-time Viz", img: projectSpacecraft },
  { n: "02", year: "2025", title: "Emotion-Adaptive AI", sub: "AI · Behavioral UX", img: projectAi },
  { n: "03", year: "2024", title: "Emergency Comms", sub: "Critical Systems · A11y", img: projectEmergency },
  { n: "04", year: "2024", title: "Neuro-Inclusive Social", sub: "Inclusive · Research", img: projectInclusive },
  { n: "05", year: "2024", title: "MotoMate Touring", sub: "Travel · IoT", img: projectMotomate },
];

function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let x = 0, y = 0, tx = 0, ty = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const enter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor='hover']")) el.classList.add("is-hover");
      else el.classList.remove("is-hover");
    };
    const tick = () => {
      x += (tx - x) * 0.22; y += (ty - y) * 0.22;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", enter); };
  }, []);
  return <div ref={ref} className="cursor-dot hidden md:block" />;
}

function HoverImage({ src, visible }: { src: string | null; visible: boolean }) {
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = imgRef.current; if (!img) return;
    let tx = 0, ty = 0, x = 0, y = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      x += (tx - x) * 0.15; y += (ty - y) * 0.15;
      img.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", move);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", move); };
  }, []);
  useEffect(() => {
    const img = imgRef.current; if (!img) return;
    if (visible && src) img.classList.add("is-visible"); else img.classList.remove("is-visible");
  }, [visible, src]);
  if (!src) return null;
  return <img ref={imgRef} src={src} alt="" className="hover-reveal-img hidden md:block" />;
}

function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => { const t = setTimeout(() => setDone(true), 2900); return () => clearTimeout(t); }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-ink flex flex-col curtain-up">
      <div className="flex-1 flex items-end justify-between px-6 md:px-10 pb-10">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream">Bhagesh®</div>
        <div className="font-display text-[18vw] md:text-[14vw] leading-none text-cream">
          <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="inline-block">
            Portfolio<span className="text-ember">.</span>
          </motion.span>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream">'26</div>
      </div>
      <div className="h-px bg-border w-full">
        <div className="h-full bg-ember loader-bar" />
      </div>
    </div>
  );
}

function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const workRef = useRef<HTMLElement>(null);

  const [time, setTime] = useState("");
  const [hoverSrc, setHoverSrc] = useState<string | null>(null);
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date()) + " IST");
    update(); const i = setInterval(update, 1000); return () => clearInterval(i);
  }, []);

  return (
    <>
      <Loader />
      <Cursor />
      <HoverImage src={hoverSrc} visible={hoverSrc !== null} />

      <main className="bg-background text-foreground overflow-x-hidden">
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
          <div className="flex items-center justify-between px-6 md:px-10 py-6 text-cream">
            <a href="#" className="font-mono text-sm tracking-tight" data-cursor="hover">BHAGESH®</a>
            <div className="hidden md:flex gap-10 font-mono text-xs uppercase tracking-[0.2em]">
              {[["Work","#work"],["About","#about"],["Process","#process"],["Contact","#contact"]].map(([l,h]) => (
                <a key={l} href={h} className="morph-link" data-cursor="hover">
                  <span className="base">{l}</span><span className="alt text-ember">{l}</span>
                </a>
              ))}
            </div>
            <a href="#contact" className="font-mono text-xs uppercase tracking-[0.2em] morph-link" data-cursor="hover">
              <span className="base">[ Let's talk ]</span><span className="alt text-ember">[ → ]</span>
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section ref={heroRef} className="relative min-h-screen overflow-hidden grain">
          <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
            <img src={heroBold} alt="Bhagesh Thupakula portrait" className="w-full h-full object-cover object-[75%_center] md:object-[80%_center]" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          </motion.div>

          <div className="absolute top-24 left-6 md:left-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-cream/80 reveal" style={{ animationDelay: "2.2s" }}>
            <div>(001) — Portfolio '26</div>
            <div className="mt-1">Vijayawada · India</div>
          </div>
          <div className="absolute top-24 right-6 md:right-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-cream/80 text-right reveal" style={{ animationDelay: "2.3s" }}>
            <div>{time || "—"}</div>
            <div className="mt-1 flex items-center gap-2 justify-end"><span className="inline-block w-1.5 h-1.5 bg-ember rounded-full animate-pulse" />Available '26</div>
          </div>

          <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-10">
            <div className="font-display text-[20vw] md:text-[14vw] leading-[0.82] text-cream tracking-[-0.03em] reveal" style={{ animationDelay: "2.4s" }}>
              Bhagesh<br/><span className="italic text-ember">Thupakula</span><span className="text-cream">.</span>
            </div>
            <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <p className="max-w-md font-mono text-xs uppercase tracking-[0.2em] text-cream/70 reveal" style={{ animationDelay: "2.6s" }}>
                Independent product & interaction designer — building bold, research-driven digital experiences for ambitious teams worldwide.
              </p>
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-cream/60">↓ Scroll</div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="border-y border-border py-8 bg-ember overflow-hidden">
          <Marquee items={["Product Design", "★", "Interaction", "★", "AI-Native UX", "★", "Design Systems", "★", "Motion", "★", "Research"]} />
        </section>

        {/* INTRO */}
        <section id="about" className="py-32 md:py-48 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50 mb-12 flex justify-between">
              <span>(About) — 002</span><span>Index</span>
            </div>
            <p className="font-display text-3xl md:text-7xl leading-[1.05] text-cream text-balance">
              I design <span className="italic text-ember">interfaces</span> that feel inevitable — quiet systems doing loud work. Research first, pixels second, motion last.
            </p>
          </div>
        </section>

        {/* SPLIT IMAGE BAND */}
        <section className="relative h-screen overflow-hidden">
          <img src={brutalistSpace} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-cream/80">— Manifesto</p>
              <h2 className="mt-6 font-display text-5xl md:text-8xl text-cream leading-[0.95]">
                Trust the <span className="italic">process</span>.<br/>
                <span className="text-ember">Do</span> more.
              </h2>
            </div>
          </div>
        </section>

        {/* WORK — hover reveal */}
        <section id="work" ref={workRef} className="py-32 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-20">
              <h2 className="font-display text-6xl md:text-[10vw] leading-none text-cream">
                Selected<br/><span className="italic text-ember">work</span>
              </h2>
              <div className="hidden md:block font-mono text-xs uppercase tracking-[0.3em] text-cream/50">— 003 / {projects.length} Projects</div>
            </div>

            <div className="border-t border-border">
              {projects.map((p, i) => (
                <motion.a
                  key={p.n} href="#"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoverSrc(p.img)}
                  onMouseLeave={() => setHoverSrc(null)}
                  className="project-row border-b border-border py-8 md:py-10 grid grid-cols-12 items-baseline gap-4"
                  data-cursor="hover"
                >
                  <div className="col-span-1 font-mono text-xs text-cream/40">{p.n}</div>
                  <div className="col-span-7 md:col-span-6 font-display text-3xl md:text-7xl leading-none">{p.title}<span className="text-ember">.</span></div>
                  <div className="col-span-3 md:col-span-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-cream/60">{p.sub}</div>
                  <div className="col-span-1 md:col-span-2 font-mono text-xs text-cream/40 flex items-center justify-end gap-3">
                    <span>{p.year}</span><span className="arrow text-ember">→</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CHROME BAND */}
        <section className="relative h-[60vh] overflow-hidden">
          <img src={chromeFlow} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-end justify-end p-10">
            <div className="font-display italic text-cream text-4xl md:text-7xl text-right max-w-2xl">
              Form follows <span className="text-ember">feeling</span>.
            </div>
          </div>
        </section>

        {/* PROCESS — accordion-ish list */}
        <section id="process" className="py-32 px-6 md:px-10 bg-ink">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50">(Process) — 004</div>
              <h2 className="mt-6 font-display text-5xl md:text-7xl text-cream leading-none">
                while<br/>(<span className="text-ember">!done</span>)<br/>iterate();
              </h2>
            </div>
            <div className="md:col-span-8 border-t border-border">
              {[
                { k: "01", t: "Listen & Research", d: "Stakeholder interviews, behavioral mapping, contextual inquiry. The brief is rarely the brief." },
                { k: "02", t: "Architect Systems", d: "Information hierarchy, flows, scalable component libraries that survive contact with engineering." },
                { k: "03", t: "Prototype in Motion", d: "Figma → Framer → ProtoPie → code. Decisions live or die at 60fps." },
                { k: "04", t: "Refine & Ship", d: "Accessibility audits, micro-interactions, polish. Then ship. Then watch. Then iterate." },
              ].map((s) => (
                <div key={s.k} className="group border-b border-border py-8 grid grid-cols-12 gap-4 hover:bg-ember/5 transition-colors px-2 -mx-2" data-cursor="hover">
                  <div className="col-span-1 font-mono text-xs text-ember">{s.k}</div>
                  <div className="col-span-11 md:col-span-4 font-display text-3xl md:text-4xl text-cream group-hover:italic transition-all">{s.t}</div>
                  <div className="col-span-12 md:col-span-7 font-mono text-xs md:text-sm text-cream/60 leading-relaxed">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES grid */}
        <section className="py-32 px-6 md:px-10 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50 mb-16 flex justify-between">
              <span>(Capabilities) — 005</span><span>What I do</span>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
              {[
                ["Product Design", ["UX strategy","Wireframing","Prototyping","Usability testing"]],
                ["Interaction & Motion", ["Microinteractions","Framer Motion","ProtoPie","Lottie"]],
                ["Systems & Tools", ["Design systems","Figma libraries","Tokens","Documentation"]],
                ["Research", ["Behavioral UX","Interviews","Heuristics","Synthesis"]],
                ["Front-end", ["React","Tailwind","Three.js basics","Flutter"]],
                ["Direction", ["Brand systems","Art direction","Typography","Type-driven layouts"]],
              ].map(([t, items]) => (
                <div key={t as string} className="bg-background p-8 md:p-10 hover:bg-card transition-colors" data-cursor="hover">
                  <div className="font-display text-3xl text-cream">{t}<span className="text-ember">.</span></div>
                  <ul className="mt-6 space-y-2 font-mono text-xs uppercase tracking-[0.15em] text-cream/60">
                    {(items as string[]).map(i => <li key={i} className="flex gap-3"><span className="text-ember">+</span>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS marquee */}
        <section className="border-y border-border py-6 bg-cream text-ink overflow-hidden">
          <Marquee items={["Figma","◆","Framer","◆","ProtoPie","◆","React","◆","Tailwind","◆","Flutter","◆","GSAP","◆","Photoshop","◆","Git"]} />
        </section>

        {/* RECOGNITION / SIDE strip */}
        <section className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50 mb-6">(Education) — 006</div>
              <h3 className="font-display text-4xl md:text-6xl text-cream leading-none">B.Tech<br/>Computer Science<span className="text-ember">.</span></h3>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-cream/60">SRM AP · 2024–2028 · CGPA 8.0</p>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-cream/50 mb-6">(Beyond) — 007</div>
              <ul className="space-y-3 font-display text-2xl md:text-3xl text-cream">
                {["200+ DSA problems · LeetCode & CodeChef","Class Representative @ SRM AP","Technical Mentor","Open-source contributor"].map(x =>
                  <li key={x} className="flex gap-4 border-b border-border pb-3"><span className="text-ember font-mono text-xs">→</span><span>{x}</span></li>
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative min-h-screen flex flex-col justify-between bg-ember text-ink py-20 px-6 md:px-10 overflow-hidden">
          <div className="font-mono text-xs uppercase tracking-[0.3em] flex justify-between">
            <span>(Contact) — 008</span><span>Let's build something loud</span>
          </div>

          <div className="my-16">
            <h2 className="font-display text-[22vw] md:text-[18vw] leading-[0.82] text-ink">
              Do<br/><span className="italic">more</span><span className="text-cream">.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 font-mono text-xs uppercase tracking-[0.2em] border-t border-ink/20 pt-8">
            <a href="mailto:bhagesh_thupakula@srmapedu.in" className="group block" data-cursor="hover">
              <div className="opacity-60">Email →</div>
              <div className="mt-2 font-display text-2xl md:text-3xl normal-case tracking-normal group-hover:italic transition-all break-all">bhagesh_thupakula@srmapedu.in</div>
            </a>
            <a href="tel:+919966470499" className="group block" data-cursor="hover">
              <div className="opacity-60">Phone →</div>
              <div className="mt-2 font-display text-2xl md:text-3xl normal-case tracking-normal group-hover:italic transition-all">+91 99664 70499</div>
            </a>
            <a href="https://linkedin.com/in/bhagesh-thupakula" target="_blank" rel="noreferrer" className="group block" data-cursor="hover">
              <div className="opacity-60">LinkedIn →</div>
              <div className="mt-2 font-display text-2xl md:text-3xl normal-case tracking-normal group-hover:italic transition-all">/bhagesh-thupakula</div>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-ink py-10 px-6 md:px-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
            <div>© 2026 Bhagesh Thupakula</div>
            <div className="flex gap-6"><span>Vijayawada · IN</span><span className="text-ember">✦</span><span>Trust the Process</span></div>
            <div>{time}</div>
          </div>
        </footer>
      </main>
    </>
  );
}
