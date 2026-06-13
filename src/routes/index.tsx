import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  ArrowRight, Mail, Phone, Github, Linkedin, MapPin, Sparkles,
  Code2, Database, Boxes, Cloud, Brain, Cpu, GraduationCap, Briefcase,
  Bot, Workflow, Eye, MessageSquare, Send, ExternalLink,
} from "lucide-react";
import { Particles } from "@/components/portfolio/Particles";
import { Nav } from "@/components/portfolio/Nav";
import profileImg from "@/assets/profile.jpg";
import solentrexImg from "@/assets/solentrex.jpg";
import twigoImg from "@/assets/twigo.jpg";
import ragImg from "@/assets/rag-chatbot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohamed Aslam — AI/ML Engineer Portfolio" },
      { name: "description", content: "AI/ML Engineer building production-grade machine learning systems across Computer Vision, NLP, and LLM applications." },
      { property: "og:title", content: "Mohamed Aslam — AI/ML Engineer" },
      { property: "og:description", content: "Building intelligent systems across Computer Vision, NLP, and LLM-powered applications." },
    ],
  }),
  component: Index,
});

const EMAILJS_SERVICE_ID = "service_q3cbkpq";
const EMAILJS_TEMPLATE_ID = "template_ix28rua";
const EMAILJS_PUBLIC_KEY = "PogD-VWEGvugo28Lm";

const skillGroups = [
  { title: "Programming", icon: Code2, items: ["Python", "SQL"] },
  { title: "Databases", icon: Database, items: ["MongoDB", "MySQL"] },
  { title: "Frameworks & Libraries", icon: Boxes, items: ["PyTorch", "TensorFlow", "LangChain", "LangGraph", "LlamaIndex"] },
  { title: "Tools & Platforms", icon: Cloud, items: ["FastAPI", "Docker", "Git", "Azure", "GCP", "CI/CD", "Postman"] },
  { title: "AI Domains", icon: Brain, items: ["Computer Vision", "NLP", "Generative AI", "LLMs"] },
];

const services = [
  { icon: Cpu, title: "AI/ML Model Development", desc: "End-to-end design, training, and deployment of robust models for vision, language and multimodal tasks." },
  { icon: Workflow, title: "API Development", desc: "Scalable, production-ready FastAPI services with caching, observability and clean async pipelines." },
  { icon: Bot, title: "LLM Applications", desc: "Chatbots, AI agents, RAG systems and automation built with LangChain, LangGraph and LlamaIndex." },
];

const projects = [
  {
    name: "Solentrex",
    img: solentrexImg,
    tagline: "Solar panel placement optimization powered by computer vision.",
    desc: "AI-driven solar automation that uses YOLO roof segmentation, geospatial analytics and external simulation services to estimate energy yield.",
    tags: ["YOLOv8", "Computer Vision", "GIS", "FastAPI", "GPT-4o"],
  },
  {
    name: "Twigo",
    img: twigoImg,
    tagline: "Medical AI assistant analyzing doctor–patient conversations.",
    desc: "Speech-to-text transcription combined with LLM-based symptom extraction, diagnosis suggestions and auto-generated case sheets.",
    tags: ["Speech-to-Text", "LLMs", "NLP", "Healthcare", "LangChain"],
  },
  {
    name: "RAG Chatbot",
    img: ragImg,
    tagline: "Retrieval-Augmented Generation chatbot for PDF, text & HTML.",
    desc: "Built a RAG chatbot using FAISS vector search and FLAN-T5 to answer queries from PDF, text and HTML documents. Implemented semantic retrieval with Hugging Face embeddings for improved contextual accuracy.",
    tags: ["LLMs", "FAISS", "LangChain", "RAG", "Hugging Face"],
  },
];

const experience = [
  "Developed real-time audio transcription and speech-to-text systems using Google Speech-to-Text API, improving accuracy by 70%.",
  "Built multilingual transcription pipelines and used LLMs for insight extraction from conversational data.",
  "Architected an AI-driven solar automation platform combining computer vision, geospatial analytics, and generative AI.",
  "Developed a 3D roof reconstruction pipeline using DSM data with Sobel-based slope detection and geometric segmentation.",
  "Implemented YOLO (v8/v11) for roof detection and segmentation with DBSCAN clustering and RANSAC optimization.",
  "Integrated GPT-4o Vision for extracting structured billing data from PDFs and images, improving accuracy by 30%.",
  "Introduced a MongoDB caching layer, reducing API cost and latency by 30%.",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
      <span>{children}</span>
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
    </div>
  );
}

function Index() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast.success("Message sent! I'll get back to you soon.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div id="top" className="relative min-h-screen overflow-hidden font-[Inter] text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative isolate overflow-hidden pb-24 pt-36 sm:pt-40">
        <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} aria-hidden />
        <Particles />

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for new AI/ML opportunities
              </div>
              <h1 className="font-[Space_Grotesk] text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Mohamed Aslam,
                <br />
                <span className="text-gradient">AI/ML Engineer</span> crafting
                <br />
                intelligent systems.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Building intelligent systems across Computer Vision, NLP, and LLM-powered
                applications — from research notebooks to production-grade APIs.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] glow-soft"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Contact Me
                </a>
                <div className="ml-1 flex items-center gap-2">
                  <a href="https://www.linkedin.com/in/mohamedaslam033" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                     className="glass grid h-10 w-10 place-items-center rounded-full transition-colors hover:text-primary">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="https://github.com/mhdaslam17" target="_blank" rel="noreferrer" aria-label="GitHub"
                     className="glass grid h-10 w-10 place-items-center rounded-full transition-colors hover:text-primary">
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px]">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/40 via-accent/30 to-transparent blur-3xl" aria-hidden />
              <div className="relative animate-float">
                <div className="rounded-full p-[2px]" style={{ background: "var(--gradient-border)" }}>
                  <div className="rounded-full bg-background p-2">
                    <img
                      src={profileImg}
                      alt="Portrait of Mohamed Aslam, AI/ML Engineer"
                      width={512}
                      height={512}
                      className="aspect-square w-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="glass-strong absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl px-3 py-2 text-xs">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>LLM · CV · NLP</span>
                </div>
                <div className="glass-strong absolute -right-4 top-6 flex items-center gap-2 rounded-2xl px-3 py-2 text-xs">
                  <Cpu className="h-4 w-4 text-accent" />
                  <span>Production AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionLabel>About</SectionLabel>
          <h2 className="font-[Space_Grotesk] text-3xl font-bold sm:text-4xl">
            Engineering AI that ships.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I design, develop and deploy end-to-end machine learning systems across computer
            vision, natural language processing and LLM applications. My focus is scalable,
            production-ready AI — built with FastAPI, Docker and cloud platforms like GCP
            and Azure — with a strong track record of improving model reliability, reducing
            LLM hallucinations and optimizing inference efficiency.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative py-20">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>Education</SectionLabel>
          <h2 className="text-center font-[Space_Grotesk] text-3xl font-bold sm:text-4xl">
            Academic journey
          </h2>
          <div className="relative mt-14 pl-6 sm:pl-0">
            <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-accent/30 to-transparent sm:left-1/2" />
            {[
              { school: "Yenepoya University", degree: "BCA — Artificial Intelligence, Machine Learning & Robotics", years: "2021 – 2024" },
              { school: "Jain University (Online)", degree: "MCA — NLP and LLM Development", years: "2025 – 2027" },
            ].map((e, i) => (
              <div key={e.school} className={`relative mb-10 sm:grid sm:grid-cols-2 sm:gap-12 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}>
                <div className="absolute -left-[15px] top-1.5 grid h-5 w-5 place-items-center rounded-full bg-background sm:left-1/2 sm:-translate-x-1/2">
                  <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_var(--neon-cyan)]" />
                </div>
                <div className={`glass rounded-2xl p-5 ${i % 2 ? "sm:ml-10" : "sm:mr-10"}`}>
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <GraduationCap className="h-4 w-4" /> {e.years}
                  </div>
                  <h3 className="mt-2 font-[Space_Grotesk] text-lg font-semibold">{e.school}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-center font-[Space_Grotesk] text-3xl font-bold sm:text-4xl">
            Where I&apos;ve built things
          </h2>
          <div className="glass-strong mt-12 rounded-3xl p-8 shadow-elevated sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-[Space_Grotesk] text-xl font-semibold">AI/ML Engineer</h3>
                  <p className="text-sm text-muted-foreground">Gritstone Technologies · On-site (Calicut)</p>
                </div>
              </div>
              <span className="glass rounded-full px-3 py-1 text-xs text-primary">Jan 2025 – Mar 2026</span>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {experience.map((point) => (
                <li key={point} className="flex gap-3 rounded-xl border border-border/40 bg-secondary/30 p-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_10px_var(--neon-cyan)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-center font-[Space_Grotesk] text-3xl font-bold sm:text-4xl">
            Tools of the trade
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(({ title, items, icon: Icon }) => (
              <div key={title} className="group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:bg-primary/30" />
                <div className="relative">
                  <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-[Space_Grotesk] text-lg font-semibold">{title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span key={s} className="rounded-full border border-border/60 bg-secondary/50 px-3 py-1 text-xs text-foreground/90 transition-colors hover:border-primary/60 hover:text-primary">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-center font-[Space_Grotesk] text-3xl font-bold sm:text-4xl">
            How I can help
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative rounded-2xl p-[1px] transition-all hover:-translate-y-1"
                   style={{ background: "linear-gradient(135deg, oklch(0.6 0.08 240 / 30%), transparent 60%)" }}>
                <div className="glass-strong h-full rounded-2xl p-7">
                  <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_0_25px_var(--neon-cyan)] transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-[Space_Grotesk] text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="text-center font-[Space_Grotesk] text-3xl font-bold sm:text-4xl">
            Projects I&apos;ve shipped
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.name} className="group glass-strong overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_30px_80px_-20px_oklch(0.78_0.16_210_/_40%)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-xs backdrop-blur">
                    {p.name === "Solentrex" ? <Eye className="h-3.5 w-3.5 text-primary" /> : <MessageSquare className="h-3.5 w-3.5 text-primary" />}
                    {p.name}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[Space_Grotesk] text-xl font-semibold">{p.tagline}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border/60 bg-secondary/50 px-2.5 py-1 text-[11px] text-foreground/80">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs text-primary opacity-80 transition-opacity group-hover:opacity-100">
                    Case study <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-center font-[Space_Grotesk] text-3xl font-bold sm:text-4xl">
            Let&apos;s build something intelligent
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            Have a project in mind or want to discuss an idea? Drop a message — I usually reply within a day.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.2fr]">
            <div className="glass rounded-3xl p-6">
              <h3 className="font-[Space_Grotesk] text-lg font-semibold">Direct channels</h3>
              <div className="mt-5 space-y-4 text-sm">
                <a href="mailto:mohamedaslam033@gmail.com" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary/60"><Mail className="h-4 w-4" /></span>
                  <span className="truncate">mohamedaslam033@gmail.com</span>
                </a>
                <a href="tel:+971543384413" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary/60"><Phone className="h-4 w-4" /></span>
                  <span>+971 54 33 84413</span>
                </a>
                <a href="tel:+917034846188" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary/60"><Phone className="h-4 w-4" /></span>
                  <span>+91 70348 46188</span>
                </a>
                <a href="https://www.linkedin.com/in/mohamedaslam033" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary/60"><Linkedin className="h-4 w-4" /></span>
                  <span>linkedin.com/in/mohamedaslam033</span>
                </a>
                <a href="https://github.com/mhdaslam17" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary/60"><Github className="h-4 w-4" /></span>
                  <span>github.com/mhdaslam17</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary/60"><MapPin className="h-4 w-4" /></span>
                  <span>Open to remote & on-site roles</span>
                </div>
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative rounded-3xl p-[1.5px]"
              style={{ background: "var(--gradient-border)" }}
            >
              <div className="glass-strong rounded-3xl p-6 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Name</span>
                    <input name="from_name" required maxLength={100} className="w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="Your name" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                    <input name="reply_to" required type="email" maxLength={255} className="w-full rounded-xl border border-border bg-input/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="you@email.com" />
                  </label>
                </div>
                <label className="mt-4 block">
                  <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Message</span>
                  <textarea name="message" required maxLength={1000} rows={5} className="w-full resize-none rounded-xl border border-border bg-input/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" placeholder="Tell me about your project…" />
                </label>
                <button
                  type="submit"
                  disabled={sending}
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] glow-soft disabled:opacity-60 disabled:hover:scale-100"
                >
                  {sending ? "Sending…" : "Send Message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Mohamed Aslam. Crafted with care.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/mhdaslam17" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
            <a href="https://www.linkedin.com/in/mohamedaslam033" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
            <a href="mailto:mohamedaslam033@gmail.com" className="hover:text-primary">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
