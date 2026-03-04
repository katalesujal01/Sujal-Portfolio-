import Section from "../components/Section";
import ProgressBar from "../components/ProgressBar";
import { FiDownload, FiDatabase, FiBarChart2, FiZap, FiAward } from "react-icons/fi";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import dynamic from "next/dynamic";
const MiniLineChart = dynamic(() => import("../components/charts/MiniLineChart"), { ssr: false });

export default function Page() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-grid bg-grid bg-[length:40px_40px] opacity-20 pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <Section id="hero" className="pt-24 md:pt-20">
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full border border-cyan-400/30 text-xs text-neon-blue mb-3">Analytics Dashboard Portfolio</div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                  Hi, I’m <span className="text-neon-blue">Sujal</span>
                </h1>
                <p className="mt-2 text-lg text-white/90">Data Analyst — Dahisar, Mumbai</p>
                <p className="mt-3 text-white/80 max-w-2xl">
                  I turn raw data into actionable insights using SQL, Python, and Power BI — building clean reporting frameworks that support better decisions.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#projects">
                    <Button>View Case Studies</Button>
                  </a>
                  <a href="/Sujal_Suhas_Katale_CV.pdf" download>
                    <Button variant="outline"><FiDownload />&nbsp;Download CV</Button>
                  </a>
                </div>
              </div>
              <Card className="hidden md:flex items-center justify-center size-40 rounded-full">
                <div className="relative size-32 rounded-full border border-cyan-400/30">
                  <div className="absolute inset-0 rounded-full shadow-glow" />
                  <div className="absolute -inset-2 rounded-full border border-neon-blue/20 animate-pulse" />
                </div>
              </Card>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              <Card className="p-4 col-span-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/70">Weekly Insight Preview</p>
                    <p className="text-xl font-semibold text-slate-50">Data Trend</p>
                  </div>
                  <Badge variant="indigo">Preview</Badge>
                </div>
                <div className="mt-3">
                  <MiniLineChart />
                </div>
              </Card>
              <KPI icon={<FiDatabase />} label="Tools" value="3" hint="SQL • Python • Power BI" />
              <KPI icon={<FiBarChart2 />} label="Data Integrity" value="97%" hint="Reporting-ready datasets" />
              <KPI icon={<FiZap />} label="Problem Solving" value="90" hint="Structured logic building" />
              <KPI icon={<FiAward />} label="Training" value="10" hint="NetTech modules" />
            </div>
          </div>
        </Section>

        <Section id="summary">
          <div className="card p-6 md:p-8">
            <h2 className="section-title text-neon-blue mb-4">Professional Summary</h2>
            <p className="text-white/85 leading-relaxed">
              Detail-oriented B.Sc. IT student with a strong analytical mindset. Proficient in SQL, Python, and Power BI. Strong in data integrity, logical reporting frameworks, and data visualization. Motivated to contribute to a collaborative BI team.
            </p>
          </div>
        </Section>

        <Section id="skills">
          <h2 className="section-title text-neon-blue mb-6">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="font-semibold mb-3 text-slate-50">Core Analytics</h3>
              <ProgressBar label="SQL / MySQL" value={90} />
              <ProgressBar label="Data Handling & Management" value={85} />
              <ProgressBar label="Reporting Frameworks" value={82} />
              <ProgressBar label="Process Optimization" value={78} />
            </div>
            <div className="card p-6">
              <h3 className="font-semibold mb-3 text-slate-50">Programming & BI Tools</h3>
              <ProgressBar label="Python (OOP)" value={80} />
              <ProgressBar label="Power BI & Data Visualization" value={85} />
              <ProgressBar label="Excel (VLOOKUP, Pivot, Advanced)" value={85} />
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>SQL</Badge>
                <Badge variant="indigo">Python</Badge>
                <Badge>Power BI</Badge>
                <Badge variant="muted">Excel</Badge>
                <Badge variant="purple">PowerPoint</Badge>
              </div>
            </div>
          </div>
        </Section>

        <Section id="projects">
          <h2 className="section-title text-neon-blue mb-6">Case Studies</h2>
          <CaseStudyCard />
        </Section>

        <Section id="education">
          <h2 className="section-title text-neon-blue mb-6">Education</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="card p-5">
              <h3 className="font-semibold">B.Sc. Information Technology</h3>
              <p className="text-white/70 text-sm">Mumbai University • 2023–2025</p>
              <p className="text-neon-blue mt-2 text-sm">CGPA: 7.02</p>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold">HSC</h3>
              <p className="text-white/70 text-sm">Year: 2022</p>
              <p className="text-neon-blue mt-2 text-sm">52.67%</p>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold">SSC</h3>
              <p className="text-white/70 text-sm">Year: 2020</p>
              <p className="text-neon-blue mt-2 text-sm">77%</p>
            </div>
          </div>
        </Section>

        <Section id="timeline">
          <h2 className="section-title text-neon-blue mb-6">Experience & Timeline</h2>
          <div className="card p-6">
            <ol className="relative border-s border-cyan-400/20 pl-6 space-y-6">
              <li>
                <div className="absolute -left-2 top-0 size-3 rounded-full bg-neon-blue shadow-glow" />
                <p className="font-semibold">Team Lead — Employee Management System</p>
                <p className="text-sm text-white/70">Focused on data modeling, automated reporting, and integrity</p>
              </li>
              <li>
                <div className="absolute -left-2 top-20 size-3 rounded-full bg-neon-indigo shadow-glow" />
                <p className="font-semibold">B.Sc IT — Mumbai University (2023–2025)</p>
                <p className="text-sm text-white/70">Core foundation in programming, databases, and analytics</p>
              </li>
            </ol>
          </div>
        </Section>

        <Section id="certs">
          <h2 className="section-title text-neon-blue mb-6">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <p className="text-white/85">Data Analytics Training — NetTech India Institute</p>
            </div>
            <div className="card p-6">
              <p className="text-white/85">Process Compliance & Data-Driven Problem Solving (Core Competency)</p>
            </div>
          </div>
        </Section>

        <Section id="strengths">
          <h2 className="section-title text-neon-blue mb-6">Strengths</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Analytical Rigor",
              "Communication & Reporting",
              "Adaptability (including night-shift flexibility)",
              "Data-Driven Problem Solving"
            ].map((s) => (
              <span key={s} className="px-4 py-2 rounded-full border border-cyan-400/25 bg-white/5 text-white/90 shadow-glow">
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section id="languages">
          <h2 className="section-title text-neon-blue mb-6">Languages</h2>
          <div className="card p-6">
            <ProgressBar label="English" value={85} />
            <ProgressBar label="Hindi" value={90} />
            <ProgressBar label="Marathi" value={95} />
          </div>
        </Section>

        <Section id="contact" className="pb-24">
          <h2 className="section-title text-neon-blue mb-6">Contact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <p className="text-white/85 mb-2">Email: <a className="text-neon-blue" href="mailto:katalesujal0131@gmail.com">katalesujal0131@gmail.com</a></p>
              <p className="text-white/85 mb-4">Phone: <a className="text-neon-blue" href="tel:+919653273534">+91-9653273534</a></p>
              <div className="flex gap-3">
                <a href="#" aria-label="LinkedIn"><Button variant="outline">LinkedIn</Button></a>
                <a href="#" aria-label="GitHub"><Button variant="outline">GitHub</Button></a>
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>
      </div>
    </div>
  );
}

function KPI({ icon, label, value, hint }: { icon: any; label: string; value: string; hint: string }) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-3">
        <div className="text-neon-blue text-xl">{icon}</div>
        <div>
          <p className="text-sm text-white/70">{label}</p>
          <p className="text-2xl font-semibold text-slate-50 leading-none mt-1">{value}</p>
          <p className="text-xs text-white/60 mt-1">{hint}</p>
        </div>
      </div>
    </Card>
  );
}

function CaseStudyCard() {
  return (
    <CaseStudy />
  );
}

// Client-side modal wrapper
function CaseStudy() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-6 hover-lift">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold text-lg">Employee Management System — Team Lead</h3>
          <span className="text-xs text-neon-blue">Case Study</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge>Data Logic</Badge>
          <Badge variant="indigo">Automation</Badge>
          <Badge>Reporting</Badge>
          <Badge variant="purple">Team Leadership</Badge>
        </div>
        <div className="space-y-2 text-white/85">
          <p><span className="text-neon-blue">Problem:</span> Employee records and reporting needed structure and consistency.</p>
          <p><span className="text-neon-blue">Approach:</span> Built data models, streamlined workflows, and implemented automated reporting logic.</p>
          <p><span className="text-neon-blue">Outcome:</span> Improved integrity, operational efficiency, and documentation clarity.</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="muted">Dataset: Internal HR records</Badge>
          <Badge variant="muted">Tools: SQL, Python, Power BI</Badge>
        </div>
      </Card>
    </div>
  );
}
function ContactForm() {
  return (
    <form
      className="card p-6 space-y-4"
      onSubmit={(e: any) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const data = new FormData(form);
        const name = String(data.get("name") || "").trim();
        const email = String(data.get("email") || "").trim();
        const message = String(data.get("message") || "").trim();
        const emailValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
        if (!name || !emailValid || message.length < 10) {
          alert("Please provide a valid name, email, and a message of at least 10 characters.");
          return;
        }
        window.location.href = `mailto:katalesujal0131@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
          name
        )}&body=${encodeURIComponent(message)}%0A%0AContact:%20${encodeURIComponent(email)}`;
      }}
    >
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          name="name"
          required
          minLength={2}
          className="w-full px-3 py-2 rounded-md bg-white/5 border border-cyan-400/20 focus:outline-none focus:border-neon-blue"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-3 py-2 rounded-md bg-white/5 border border-cyan-400/20 focus:outline-none focus:border-neon-blue"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          required
          minLength={10}
          rows={4}
          className="w-full px-3 py-2 rounded-md bg-white/5 border border-cyan-400/20 focus:outline-none focus:border-neon-blue"
          placeholder="How can I help you?"
        />
      </div>
      <div className="flex justify-end">
        <Button>Send Message</Button>
      </div>
    </form>
  );
}
