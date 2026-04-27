import Link from 'next/link';
import {
  Bot, Braces, ShieldCheck, Eye, Lightbulb, Sparkles,
  ArrowRight, ChevronRight, Clock, Cpu, Brain,
  TrendingUp, Zap, CheckCircle, Bell,
} from 'lucide-react';

const tools = [
  {
    id: 'co-pilot',
    icon: Bot,
    title: 'Survey Programming Co-Pilot',
    subtitle: 'AI-assisted scripting for faster, smarter surveys',
    description:
      'Survey Programming Co-Pilot is an AI assistant that lives inside your scripting workflow. It reads your questionnaire, understands the research intent, and proactively suggests routing logic, piping structures, validation rules, and error checks — dramatically reducing the time spent on manual programming and pre-launch QA.',
    status: 'In Development',
    eta: 'Q3 2025',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/25',
    glowColor: 'rgba(16,185,129,0.08)',
    impact: ['Faster delivery', 'Fewer errors', 'Lower cost'],
    benefits: [
      'Dramatically reduces manual scripting time on complex questionnaires',
      'AI-generated logic suggestions based on questionnaire context',
      'Auto-detects potential routing errors before launch',
      'Platform-specific code generation (Decipher, Qualtrics, Confirmit)',
      'Natural language to survey logic translation',
      'Integrated QA checklist generation',
    ],
  },
  {
    id: 'oe-code',
    icon: Braces,
    title: 'Automated OE Coding',
    subtitle: 'Scale your verbatim analysis without scaling your team',
    description:
      'Open-ended responses are among the richest data in any survey — and among the most expensive to process. Our Automated OE Coding engine uses natural language processing to read, classify, and assign codes to thousands of verbatim responses in minutes, with human-level consistency and a full audit trail.',
    status: 'In Development',
    eta: 'Q3 2025',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/25',
    glowColor: 'rgba(6,182,212,0.08)',
    impact: ['10x faster coding', 'Consistent quality', 'Multi-language'],
    benefits: [
      'Processes thousands of responses in minutes, not days',
      'Consistent coding across languages and markets',
      'Customizable code frames with AI-suggested category merging',
      'Confidence scoring and human-review flagging for edge cases',
      'Multi-language support with cross-market harmonization',
      'Full coder decision audit trail for client transparency',
    ],
  },
  {
    id: 'data-validation',
    icon: ShieldCheck,
    title: 'Automated Data Validation',
    subtitle: 'Catch data quality issues before they reach your analysis',
    description:
      'Data validation is critical — but manual checks are slow, inconsistent, and prone to human fatigue. Our Automated Data Validation engine runs a comprehensive suite of intelligent checks across your dataset, flagging structural errors, logical inconsistencies, out-of-range values, and missing data patterns automatically.',
    status: 'Planned',
    eta: 'Q4 2025',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/25',
    glowColor: 'rgba(59,130,246,0.08)',
    impact: ['Zero manual QC', 'Faster turnaround', 'Audit-ready'],
    benefits: [
      'Automated checks for routing compliance and logic consistency',
      'Missing data pattern detection and reporting',
      'Range and distribution anomaly flagging',
      'Cross-variable consistency validation',
      'Configurable rule sets for project-specific requirements',
      'Detailed validation reports with issue severity scoring',
    ],
  },
  {
    id: 'fraud-detection',
    icon: Eye,
    title: 'Fraud Detection',
    subtitle: 'Protect your data from bad actors in real time',
    description:
      'Survey fraud — from bots and duplicate respondents to inattentive speeders and straight-liners — is a growing challenge in online research. Our Fraud Detection engine analyzes respondent behavior in real time, assigning trust scores and automatically flagging or removing suspect responses before they contaminate your data.',
    status: 'Planned',
    eta: 'Q4 2025',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/25',
    glowColor: 'rgba(168,85,247,0.08)',
    impact: ['Cleaner data', 'Real-time protection', 'Reduced waste'],
    benefits: [
      'Real-time bot detection using behavioral fingerprinting',
      'Speeder and straight-liner identification with configurable thresholds',
      'Duplicate respondent detection across devices and panels',
      'Open-ended gibberish and irrelevant response detection',
      'Respondent trust scoring with automated quarantine workflow',
      'Post-field fraud audit reports for client documentation',
    ],
  },
  {
    id: 'insights',
    icon: Lightbulb,
    title: 'Automated Data Insights',
    subtitle: 'From raw results to narrative insight in minutes',
    description:
      'Automated Data Insights transforms your processed survey data into structured, readable narratives. The engine identifies statistically significant findings, highlights key drivers, flags unexpected patterns, and produces an executive summary — giving your team a head start on interpretation before any human analysis begins.',
    status: 'Planned',
    eta: '2026',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    borderColor: 'border-amber-500/25',
    glowColor: 'rgba(245,158,11,0.08)',
    impact: ['Faster insights', 'No missed findings', 'Report-ready'],
    benefits: [
      'Automated identification of statistically significant differences',
      'Key driver and correlation analysis summaries',
      'Auto-generated executive narrative with key findings',
      'Anomaly and outlier highlighting with context',
      'Wave-over-wave change detection for tracker studies',
      'Export-ready summary slides and report starters',
    ],
  },
  {
    id: 'more',
    icon: Sparkles,
    title: 'More Tools On The Roadmap',
    subtitle: 'Our AI toolkit is growing',
    description:
      "We are actively developing additional AI co-pilots targeting every pain point in the survey research lifecycle — from questionnaire design assistance and automated weighting to real-time data storytelling. Our roadmap is driven by the real operational challenges we've spent 20+ years working through.",
    status: 'Roadmap',
    eta: '2026+',
    iconBg: 'bg-pink-500/10',
    iconColor: 'text-pink-400',
    borderColor: 'border-pink-500/25',
    glowColor: 'rgba(236,72,153,0.08)',
    impact: ['Continuously evolving', 'Built for researchers', 'Operationally grounded'],
    benefits: [
      'Questionnaire Design Assistant — AI-guided survey structure and question wording',
      'Automated Weighting Engine — intelligent demographic and RIM weighting',
      'Reporting Co-Pilot — AI-assisted report writing from data to narrative',
      'Panel Health Monitor — automated respondent quality tracking',
      'Multi-market Harmonization — automatic cross-country data alignment',
      'Research Brief Analyzer — extract key requirements from client briefs',
    ],
  },
];

const statusStyles: Record<string, string> = {
  'In Development': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'Planned':        'bg-blue-500/15 text-blue-400 border-blue-500/30',
  'Roadmap':        'bg-pink-500/15 text-pink-400 border-pink-500/30',
};

const gradientStyle = {
  background: 'linear-gradient(100deg, #10b981 0%, #06b6d4 55%, #22d3ee 100%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
};

export default function AIToolsPage() {
  return (
    <div className="overflow-hidden pt-20">

      {/* ── HERO ── */}
      <section className="relative py-24 mesh-bg">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-emerald-500/6 blur-3xl float-anim" />
          <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl float-anim-reverse" />
          <div className="absolute bottom-0 left-1/2 w-96 h-64 rounded-full bg-cyan-500/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-amber-400 text-sm">AI Tools</span>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-coming-soon mb-4 inline-block mx-auto">AI-Powered Suite</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The AI Toolkit Built by
              <br />
              <span style={gradientStyle}>Research Operators</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              After 20+ years of running survey operations manually, we are building the AI tools we always needed.
              Each one targets a specific, high-friction pain point in the research workflow — and every one is designed
              to work alongside your team, not replace them.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Request Early Access <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#161b27] border border-[#1e2d3d] text-slate-400 text-sm">
                <Bell className="w-4 h-4 text-amber-400" />
                Notify me when tools launch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY STRIP ── */}
      <section className="bg-[#090d13] border-y border-[#1e2d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-x divide-y sm:divide-y-0 divide-[#1e2d3d]">
            {[
              { icon: Brain,     title: 'Built For Research',      text: 'Every tool is purpose-built for market research workflows — not adapted from generic AI.' },
              { icon: Cpu,       title: 'Co-Pilot, Not Autopilot', text: "Our tools augment human expertise. Researchers stay in control; AI handles the repetitive heavy lifting." },
              { icon: TrendingUp,title: 'Operationally Grounded',  text: "Each feature on our roadmap solves a pain point we've personally experienced over 20+ years." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col items-center text-center px-8 py-10">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS LIST ── */}
      <section className="py-16 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              The Full <span style={gradientStyle}>AI Roadmap</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Five tools in active development or planning — each solving a distinct operational pain point.
            </p>
          </div>

          <div className="space-y-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                id={tool.id}
                className={`scroll-mt-24 card border ${tool.borderColor} p-8`}
                style={{ boxShadow: `0 0 40px ${tool.glowColor}` }}
              >
                <div className="grid lg:grid-cols-5 gap-8 items-start">

                  {/* Left: icon + description */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-xl ${tool.iconBg} flex items-center justify-center shrink-0`}>
                        <tool.icon className={`w-6 h-6 ${tool.iconColor}`} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${statusStyles[tool.status]}`}>
                            {tool.status}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="w-3 h-3" /> ETA: {tool.eta}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-white leading-snug">{tool.title}</h2>
                        <p className={`text-sm font-medium ${tool.iconColor} mt-1`}>{tool.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{tool.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.impact.map((tag) => (
                        <span key={tag} className={`px-3 py-1 rounded-full text-xs font-semibold ${tool.iconBg} ${tool.iconColor}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: capabilities */}
                  <div className="lg:col-span-3 lg:border-l lg:border-[#1e2d3d] lg:pl-8">
                    <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Zap className={`w-4 h-4 ${tool.iconColor}`} /> Key Capabilities
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tool.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <CheckCircle className={`w-4 h-4 ${tool.iconColor} shrink-0 mt-0.5`} />
                          <span className="text-slate-300 text-sm leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EARLY ACCESS CTA ── */}
      <section className="py-24 bg-[#0a0e17] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.08) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)',
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 pulse-glow" />
            Early Access Program
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Want to Be Among the First
            <br />
            <span style={gradientStyle}>to Use These Tools?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            We are opening a limited early access cohort for research teams who want to co-develop these tools
            with us. Early partners get priority access, direct input into the product roadmap, and preferred pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              <span className="flex items-center gap-2">Apply for Early Access <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link href="/services" className="btn-secondary w-full sm:w-auto">
              Explore Current Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
