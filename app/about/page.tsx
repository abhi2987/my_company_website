import Link from 'next/link';
import {
  ArrowRight, ChevronRight, Target, Eye,
  CheckCircle, Users, Globe, Award, Cpu,
  TrendingUp, Shield, Lightbulb, Zap,
} from 'lucide-react';

const milestones = [
  { year: '20+',  label: 'Years of combined market research and survey operations experience', icon: Award },
  { year: '500+', label: 'Research projects delivered across consumer, B2B, and public sector', icon: CheckCircle },
  { year: '50+',  label: 'Global research firms and agencies served across three continents',   icon: Globe },
  { year: '5+',   label: 'AI-powered tools currently in active development',                   icon: Cpu },
];

const values = [
  {
    icon: Shield,
    title: 'Integrity in Every Deliverable',
    description: "We never cut corners on quality. Every dataset, script, and dashboard we deliver is held to the same standard — whether it's a quick turnaround or a six-month program.",
    color: 'text-emerald-400', bg: 'bg-emerald-500/10', glow: 'rgba(16,185,129,0.08)',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity-Driven Innovation',
    description: 'We are market research practitioners who ask "what if this could be automated?" at every step. That curiosity is what drives our AI tools roadmap.',
    color: 'text-cyan-400', bg: 'bg-cyan-500/10', glow: 'rgba(6,182,212,0.08)',
  },
  {
    icon: Users,
    title: 'Partnership Over Vendor',
    description: "We believe the best research outcomes happen when we work alongside clients — not just for them. We invest in understanding your business, not just your brief.",
    color: 'text-blue-400', bg: 'bg-blue-500/10', glow: 'rgba(59,130,246,0.08)',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Every project teaches us something. We apply those lessons systematically — improving our processes, updating our tools, and delivering better outcomes with every engagement.',
    color: 'text-amber-400', bg: 'bg-amber-500/10', glow: 'rgba(245,158,11,0.08)',
  },
  {
    icon: Globe,
    title: 'Global Perspective, Local Accountability',
    description: "We serve global research programs while maintaining the accountability and responsiveness of a dedicated local team. Your project is never just a ticket in a queue.",
    color: 'text-purple-400', bg: 'bg-purple-500/10', glow: 'rgba(168,85,247,0.08)',
  },
  {
    icon: Zap,
    title: 'Speed Without Sacrifice',
    description: 'Market research timelines are relentless. We are built for that reality — combining process efficiency and AI tools to deliver fast without trading away accuracy.',
    color: 'text-pink-400', bg: 'bg-pink-500/10', glow: 'rgba(236,72,153,0.08)',
  },
];

const expertise = [
  {
    category: 'Research Operations',
    color: 'text-emerald-400',
    dot: 'bg-emerald-500',
    skills: ['Survey Scripting & Programming', 'Data Processing & Weighting', 'Verbatim Coding & NLP', 'Quality Control Frameworks'],
  },
  {
    category: 'Data & Technology',
    color: 'text-cyan-400',
    dot: 'bg-cyan-500',
    skills: ['Data Engineering & Pipelines', 'Dashboard & Report Design', 'Market Research Automation', 'AI/ML for Research Operations'],
  },
  {
    category: 'Research Domains',
    color: 'text-blue-400',
    dot: 'bg-blue-500',
    skills: ['Quantitative Research Design', 'Tracker & Panel Management', 'Consumer & B2B Research', 'Multi-market Studies'],
  },
];

const gradientStyle = {
  background: 'linear-gradient(100deg, #10b981 0%, #06b6d4 55%, #22d3ee 100%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden pt-20">

      {/* ── HERO ── */}
      <section className="relative py-24 mesh-bg">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-500/6 blur-3xl float-anim" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl float-anim-reverse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-emerald-400 text-sm">About Us</span>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-live mb-4 inline-block mx-auto">Who We Are</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Built by Researchers,
              <br />
              <span style={gradientStyle}>Driven by Curiosity</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              NeuralWeave Solutions LLP was founded on a straightforward premise: the best people to build
              AI tools for market research are the ones who have spent their careers doing the work by hand.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#090d13] border-y border-[#1e2d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#1e2d3d]">
            {milestones.map(({ year, label, icon: Icon }) => (
              <div key={year} className="flex flex-col items-center text-center px-6 py-10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-4xl lg:text-5xl font-black mb-2" style={gradientStyle}>
                  {year}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[150px]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-24 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* Story text */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-widest shrink-0">Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
                20+ Years in the Trenches of
                <br />
                <span style={gradientStyle}>Survey Operations</span>
              </h2>
              <div className="space-y-5 text-slate-400 leading-relaxed text-[15px]">
                <p>
                  Before NeuralWeave existed, our founding team spent over two decades working at the heart of global
                  market research — scripting thousands of surveys, processing millions of responses, and building
                  dashboards for some of the world&apos;s most recognized consumer brands.
                </p>
                <p>
                  We know what it feels like to receive a 150-question multi-market tracker brief at 5 PM on a Friday
                  with a Monday morning launch deadline. We know the anxiety of discovering a routing error post-launch.
                  We know the hours lost to manual verbatim coding and the frustration of building the same data
                  validation checks from scratch on every project.
                </p>
                <p>
                  NeuralWeave was created to solve those problems — first by delivering expert operations services with
                  the kind of quality and accountability that only comes from real experience, and then by building the
                  AI tools that make those operations faster, smarter, and more reliable for everyone.
                </p>
                <p>
                  We are headquartered in New Delhi, India, and serve research teams globally. Every client gets a
                  dedicated team that understands both the technical and commercial realities of market research.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5 lg:sticky lg:top-28">
              <div className="card border-emerald-500/25 p-7" style={{ boxShadow: '0 0 40px rgba(16,185,129,0.07)' }}>
                <div className="text-5xl text-emerald-500/20 font-black leading-none mb-3 select-none">&ldquo;</div>
                <blockquote className="text-slate-300 text-[15px] leading-relaxed italic mb-5">
                  We are not a generic tech agency that discovered market research. We are researchers who built
                  a technology company — and that distinction shapes everything about how we work.
                </blockquote>
                <div className="pt-4 border-t border-[#1e2d3d]">
                  <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">NeuralWeave Founding Team</p>
                </div>
              </div>

              <div className="card border-blue-500/20 p-7">
                <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Company at a Glance</h4>
                <div className="space-y-0">
                  {[
                    { label: 'Headquarters',    value: 'New Delhi, India' },
                    { label: 'Markets Served',  value: 'Asia · Europe · Americas' },
                    { label: 'Founded',         value: '2024' },
                    { label: 'Team Background', value: '20+ yrs MR operations' },
                    { label: 'Engagement Model', value: 'Dedicated project teams' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start justify-between gap-4 py-3 border-b border-[#1e2d3d] last:border-0">
                      <span className="text-slate-500 text-xs uppercase tracking-wide shrink-0">{label}</span>
                      <span className="text-slate-300 text-sm font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION ── */}
      <section className="py-20 mesh-bg border-t border-[#1e2d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-live mb-4 inline-block mx-auto">Our Purpose</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why We Exist &amp; <span style={gradientStyle}>Where We&apos;re Going</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="card border-emerald-500/25 p-8 card-hover" style={{ boxShadow: '0 0 40px rgba(16,185,129,0.07)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Our Mission</p>
                  <h3 className="text-white font-bold text-lg leading-tight">What We Are Here to Do</h3>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-emerald-500/40 to-transparent mb-5" />
              <p className="text-slate-300 leading-relaxed text-[15px]">
                To deliver world-class survey operations services that research teams can depend on — and to build
                the AI tools that eliminate the repetitive, error-prone work that has always slowed the industry down.
                We exist to make market research faster, more accurate, and more accessible to every organisation
                that needs it.
              </p>
            </div>

            <div className="card border-blue-500/25 p-8 card-hover" style={{ boxShadow: '0 0 40px rgba(59,130,246,0.07)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-0.5">Our Vision</p>
                  <h3 className="text-white font-bold text-lg leading-tight">Where We Are Going</h3>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-blue-500/40 to-transparent mb-5" />
              <p className="text-slate-300 leading-relaxed text-[15px]">
                A future where every market researcher has an intelligent co-pilot handling the operational complexity
                of survey work — so that human expertise can focus entirely on strategy, storytelling, and insight.
                We are building that future one tool at a time, grounded in the realities of the industry we know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 section-alt border-t border-[#1e2d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-live mb-4 inline-block mx-auto">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Principles That Drive
              <span style={gradientStyle}> Everything We Do</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              These aren&apos;t aspirational statements — they are the standards we hold ourselves to on every
              project, every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, description, color, bg, glow }) => (
              <div key={title} className="card p-6 card-hover" style={{ boxShadow: `0 0 30px ${glow}` }}>
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className={`font-semibold mb-2 ${color}`}>{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="py-20 mesh-bg border-t border-[#1e2d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Domain Expertise</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Spanning the full spectrum of quantitative research operations — from data collection to final
              insight delivery.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {expertise.map(({ category, color, dot, skills }) => (
              <div key={category} className="card p-7">
                <h4 className={`text-xs font-bold uppercase tracking-widest mb-5 ${color}`}>{category}</h4>
                <ul className="space-y-3">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${dot} opacity-70 shrink-0`} />
                      <span className="text-slate-300 text-sm leading-snug">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 section-alt border-t border-[#1e2d3d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Work With a Team That{' '}
            <span style={gradientStyle}>Gets It</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            If you want a partner who understands market research from the inside out, we should talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              <span className="flex items-center gap-2">Start a Conversation <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link href="/services" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
              View Our Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
