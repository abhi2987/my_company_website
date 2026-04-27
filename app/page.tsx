import Link from 'next/link';
import {
  ArrowRight, Code2, Database, BarChart3, Layers,
  Bot, Braces, ShieldCheck, Eye, Lightbulb, Sparkles,
  CheckCircle, Globe, Award, Cpu, Star, Users, TrendingUp, ChevronRight,
} from 'lucide-react';
import HeroVisual from '@/components/HeroVisual';

const services = [
  {
    icon: Code2,
    title: 'Survey Programming',
    description: 'Expert scripting across Decipher, Confirmit, Qualtrics, Voxco, and more — logic-tight, respondent-friendly, and QA-verified before every launch.',
    href: '/services#survey-programming',
    iconBg: 'bg-emerald-500/12',
    iconColor: 'text-emerald-400',
    accent: '#10b981',
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Raw survey responses transformed into clean, coded, weighted, and analysis-ready datasets. Every file undergoes multi-stage QC before delivery.',
    href: '/services#data-processing',
    iconBg: 'bg-cyan-500/12',
    iconColor: 'text-cyan-400',
    accent: '#06b6d4',
  },
  {
    icon: Layers,
    title: 'Data Engineering',
    description: 'Scalable ETL pipelines, cloud warehouse integrations, and real-time data flows that connect survey data to your entire analytics ecosystem.',
    href: '/services#data-engineering',
    iconBg: 'bg-blue-500/12',
    iconColor: 'text-blue-400',
    accent: '#3b82f6',
  },
  {
    icon: BarChart3,
    title: 'Dashboarding',
    description: 'Interactive Power BI, Tableau, and custom web dashboards that convert complex research data into decision-ready intelligence for any audience.',
    href: '/services#dashboarding',
    iconBg: 'bg-amber-500/12',
    iconColor: 'text-amber-400',
    accent: '#f59e0b',
  },
];

const aiTools = [
  { icon: Bot,        title: 'Survey Programming Co-Pilot',  desc: 'AI-assisted scripting that suggests routing logic and catches errors before launch.',                      color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { icon: Braces,     title: 'Automated OE Coding',          desc: 'NLP-powered verbatim coding at scale — consistent, fast, and multi-language.',                             color: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20'    },
  { icon: ShieldCheck,title: 'Automated Data Validation',    desc: 'Intelligent QC that detects routing anomalies, out-of-range values, and inconsistencies automatically.',   color: 'text-blue-400',    bg: 'bg-blue-500/10',    border: 'border-blue-500/20'    },
  { icon: Eye,        title: 'Fraud Detection',              desc: 'Real-time identification of bots, speeders, straight-liners, and duplicate respondents.',                  color: 'text-purple-400',  bg: 'bg-purple-500/10',  border: 'border-purple-500/20'  },
  { icon: Lightbulb,  title: 'Automated Data Insights',      desc: 'Instant narrative summaries, key-driver highlights, and anomaly flags from your processed dataset.',       color: 'text-amber-400',   bg: 'bg-amber-500/10',   border: 'border-amber-500/20'   },
  { icon: Sparkles,   title: 'More Tools On the Roadmap',    desc: 'We\'re continuously building co-pilots for every pain point in the research lifecycle.',                  color: 'text-pink-400',    bg: 'bg-pink-500/10',    border: 'border-pink-500/20'    },
];

const stats = [
  { value: '20+',  label: 'Years of\nMarket Research Expertise',   icon: Award },
  { value: '500+', label: 'Research Projects\nSuccessfully Delivered', icon: CheckCircle },
  { value: '50+',  label: 'Global Research\nPartners Served',       icon: Globe },
  { value: '5',    label: 'AI Tools Under\nActive Development',     icon: Cpu },
];

const whyUs = [
  { icon: Star,       title: 'Deep Domain Expertise',    desc: '20+ years of hands-on market research — not just technical knowledge, but operational know-how.' },
  { icon: TrendingUp, title: 'AI-First Methodology',     desc: "We build the AI tools we always wished we had — purpose-designed for research workflows." },
  { icon: Users,      title: 'True Research Partnership', desc: 'We embed into your workflow. No handoffs, no silos — direct, accountable delivery.' },
  { icon: CheckCircle,title: 'Uncompromising Quality',   desc: 'Multi-stage QC and documentation-first processes mean every deliverable is audit-ready.' },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ════════════════════════════════ HERO ════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-[68px]">

        {/* ── Background ── */}
        <div className="absolute inset-0 bg-[#080d14]" />

        {/* Neural network as subtle full-bleed backdrop */}
        <div className="absolute inset-0 opacity-[0.18] pointer-events-none select-none">
          <HeroVisual />
        </div>

        {/* Radial colour washes */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: [
            'radial-gradient(ellipse 70% 60% at 20% 40%, rgba(16,185,129,0.14) 0%, transparent 60%)',
            'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(59,130,246,0.12) 0%, transparent 60%)',
            'radial-gradient(ellipse 50% 60% at 55% 80%, rgba(6,182,212,0.10) 0%, transparent 55%)',
          ].join(','),
        }} />

        {/* Dot-grid overlay */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080d14] to-transparent pointer-events-none" />

        {/* ── Content ── */}
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center">

          {/* Headline */}
          <h1 className="text-[2.4rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-extrabold leading-[1.08] tracking-tight mb-6 mx-auto">
            <span className="text-white">Intelligent Survey Operations</span>
            <br />
            <span style={{
              background: 'linear-gradient(100deg, #10b981 0%, #06b6d4 55%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              for the Modern Research Era
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            End-to-end market research infrastructure — from precision survey scripting
            to AI-powered automation — backed by{' '}
            <span className="text-emerald-400 font-semibold">20+ years of domain expertise</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/services" className="btn-primary text-[15px] px-7 py-3">
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/ai-tools" className="btn-secondary text-[15px] px-7 py-3">
              AI Tools &nbsp;<span className="badge-coming-soon">Soon</span>
            </Link>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {['Survey Programming','Data Processing','Data Engineering','Dashboarding','AI Co-Pilots'].map((t) => (
              <span key={t} className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.09] text-slate-400 text-xs font-medium hover:border-emerald-500/40 hover:text-emerald-400 transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Floating stat pills */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
          {[
            { label: 'Experience', value: '20+ yrs' },
            { label: 'Projects', value: '500+' },
          ].map(({ label, value }) => (
            <div key={label} className="glass-card px-4 py-3 float-anim">
              <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-1">{label}</p>
              <p className="font-bold text-base leading-none stat-shimmer">{value}</p>
            </div>
          ))}
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
          {[
            { label: 'AI Tools', value: '5 Building' },
            { label: 'Partners', value: '50+' },
          ].map(({ label, value }) => (
            <div key={label} className="glass-card px-4 py-3 float-anim-reverse">
              <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-1">{label}</p>
              <p className="font-bold text-base leading-none stat-shimmer">{value}</p>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-slate-600/60 to-transparent" />
          <span className="text-slate-600 text-[9px] tracking-[0.25em] uppercase">Scroll</span>
        </div>
      </section>

      {/* ════════════════════════════════ STATS ════════════════════════════════ */}
      <div className="section-divider" />
      <section className="py-14 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center text-center px-4 py-2">
                <Icon className="w-5 h-5 text-emerald-400/70 mb-3" />
                <div className="text-3xl sm:text-4xl font-black stat-shimmer mb-1.5">{value}</div>
                <div className="text-slate-500 text-xs leading-snug whitespace-pre-line">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider" />

      {/* ════════════════════════════════ SERVICES ════════════════════════════════ */}
      <section className="py-24 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-live mb-5">Core Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              End-to-End Survey Operations,<br />
              <span style={{ background: 'linear-gradient(100deg, #10b981 0%, #06b6d4 55%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Delivered With Precision</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Every service is engineered around the realities of live research — tight deadlines, complex data, and zero tolerance for error.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, title, description, href, iconBg, iconColor, accent }) => (
              <Link
                key={title}
                href={href}
                className="card p-7 group block"
                style={{ '--hover-accent': accent } as React.CSSProperties}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-emerald-400 transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-emerald-400 transition-colors">
                      Learn more <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ AI TOOLS ════════════════════════════════ */}
      <div className="section-divider" />
      <section className="py-24 section-alt relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none float-anim-reverse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none float-anim" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-coming-soon mb-5">AI-Powered Suite</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              The Future of Survey Operations<br />
              <span style={{ background: 'linear-gradient(100deg, #10b981 0%, #06b6d4 55%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Is Already Being Built</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Five proprietary AI tools in development — each targeting a high-friction pain point we've personally experienced over 20+ years in research operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiTools.map(({ icon: Icon, title, desc, color, bg, border }) => (
              <div key={title} className={`card p-6 ${border} relative overflow-hidden group`}>
                <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full ${bg} opacity-50 group-hover:opacity-100 transition-opacity`} />
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div className="flex items-start gap-2 mb-2.5">
                  <h3 className="text-white font-semibold text-base leading-snug">{title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{desc}</p>
                <span className="badge-coming-soon">Coming Soon</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/ai-tools" className="btn-primary">
              Explore All AI Tools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <div className="section-divider" />

      {/* ════════════════════════════════ WHY US ════════════════════════════════ */}
      <section className="py-24 mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left text */}
            <div>
              <span className="badge-live mb-5">Why NeuralWeave</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Where Deep Experience Meets<br />
                <span style={{ background: 'linear-gradient(100deg, #10b981 0%, #06b6d4 55%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Intelligent Innovation</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8 text-base">
                We are market research veterans who have spent 20+ years in survey operations — and we're building the AI tools we always wished existed. NeuralWeave is where that experience and ambition meet.
              </p>
              <div className="space-y-3.5 mb-10">
                {[
                  'Proven on complex, high-volume, multi-market research projects',
                  'Platform-agnostic — we work with your tools, not against them',
                  'Transparent processes with documentation at every milestone',
                  'Direct researcher-to-client communication, always',
                  'AI roadmap grounded in 20 years of real operational pain points',
                ].map((pt) => (
                  <div key={pt} className="flex items-start gap-3">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{pt}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/about" className="btn-primary">Our Story <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/contact" className="btn-secondary">Start a Conversation</Link>
              </div>
            </div>

            {/* Right cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card p-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ CTA ════════════════════════════════ */}
      <div className="section-divider" />
      <section className="py-24 section-alt relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(16,185,129,0.07) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)',
        }} />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161b27] border border-[#1e2d3d] text-slate-400 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-glow" />
            Ready to transform your research operations?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build Something<br />
            <span style={{ background: 'linear-gradient(100deg, #10b981 0%, #06b6d4 55%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Remarkable Together</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Whether you need expert survey programming, scalable data pipelines, or early access to our AI tools — we want to hear about your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base w-full sm:w-auto justify-center">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-secondary text-base w-full sm:w-auto justify-center">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
