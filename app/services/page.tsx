import Link from 'next/link';
import {
  Code2, Database, Layers, BarChart3, CheckCircle,
  ArrowRight, ChevronRight,
  Settings, Zap, Shield, Target,
} from 'lucide-react';

const services = [
  {
    id: 'survey-programming',
    icon: Code2,
    title: 'Survey Programming',
    tagline: 'Precision scripting that gets it right the first time.',
    description:
      'Survey programming is the backbone of every research project, and a single logic error can invalidate an entire study. Our team of expert programmers has spent decades scripting complex, multi-market surveys across every major platform. We treat programming as an engineering discipline — not a data entry task.',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    accentBar: 'bg-gradient-to-b from-emerald-400 to-cyan-400',
    glow: 'rgba(16,185,129,0.08)',
    useCases: ['Consumer Insights', 'Brand Tracking', 'Ad Testing', 'Customer Satisfaction', 'Employee Engagement', 'Political Research'],
    capabilities: [
      'Multi-platform scripting — Decipher, Confirmit, Qualtrics, SurveyMonkey, Voxco',
      'Complex skip logic, piping, and dynamic question routing',
      'Multi-language and multi-market survey setup',
      'Mobile-first, responsive survey design',
      'Quota management and respondent balancing',
      'A/B testing and experimental design implementation',
      'Full QA testing and cross-device validation',
      'API integrations with panel providers and CRM systems',
    ],
  },
  {
    id: 'data-processing',
    icon: Database,
    title: 'Data Processing',
    tagline: 'Clean data is the foundation of every reliable insight.',
    description:
      'Raw survey data is rarely analysis-ready. It needs cleaning, coding, weighting, and validation before it can tell you anything meaningful. Our data processing team handles the full transformation pipeline — delivering structured, verified datasets in your preferred format, on time and without surprises.',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    accentBar: 'bg-gradient-to-b from-cyan-400 to-blue-400',
    glow: 'rgba(6,182,212,0.08)',
    useCases: ['Tracker Studies', 'Ad Hoc Research', 'Segmentation Studies', 'NPS Programs', 'Omnibus Surveys', 'Conjoint Analysis'],
    capabilities: [
      'Data cleaning, deduplication, and integrity checks',
      'Open-ended verbatim coding and sentiment classification',
      'Statistical weighting and normalization (RIM, cell, demographic)',
      'Cross-tabulation and banner table production',
      'SPSS, Excel, CSV, and custom format deliverables',
      'Multi-wave and longitudinal data merging',
      'Data suppression and confidentiality compliance',
      'Net Promoter Score (NPS) and key driver analysis preparation',
    ],
  },
  {
    id: 'data-engineering',
    icon: Layers,
    title: 'Data Engineering',
    tagline: 'Infrastructure that scales with your research ambitions.',
    description:
      'Modern market research generates more data than ever before — from surveys, panels, behavioral sources, and third-party integrations. We design and build the data infrastructure that connects these sources, automates ingestion, and ensures your research data flows seamlessly from collection to consumption.',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    accentBar: 'bg-gradient-to-b from-blue-400 to-purple-400',
    glow: 'rgba(59,130,246,0.08)',
    useCases: ['Continuous Research Programs', 'Panel Management', 'Multi-source Data Fusion', 'Real-time Tracking', 'Research Automation', 'Enterprise Clients'],
    capabilities: [
      'ETL and ELT pipeline design and development',
      'Cloud data warehouse setup (BigQuery, Snowflake, Redshift)',
      'Survey platform API integration and automation',
      'Real-time data streaming for live survey tracking',
      'Data lake architecture for large-scale research programs',
      'Automated data quality and schema validation frameworks',
      'Legacy system migration and modernization',
      'Role-based access control and data governance policies',
    ],
  },
  {
    id: 'dashboarding',
    icon: BarChart3,
    title: 'Dashboarding',
    tagline: 'Turn your data into a story your stakeholders will act on.',
    description:
      'A great dataset buried in a spreadsheet creates zero impact. We design and build interactive dashboards and reporting systems that put the right insight in front of the right person, in the right format. Whether you need an executive summary or a full self-serve analytics portal, we build it to your research context.',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
    accentBar: 'bg-gradient-to-b from-amber-400 to-orange-400',
    glow: 'rgba(245,158,11,0.08)',
    useCases: ['Brand Health Tracking', 'C-Suite Reporting', 'Retail Insights', 'Campaign Effectiveness', 'Customer Experience', 'Market Share Monitoring'],
    capabilities: [
      'Power BI, Tableau, and Looker dashboard development',
      'Custom web-based interactive dashboards (React/Next.js)',
      'Automated scheduled reporting and PDF/PPT export',
      'Real-time tracker and wave-over-wave trend views',
      'KPI monitoring with threshold alerts',
      'Multi-market and multi-brand comparison views',
      'Mobile-optimized dashboards for on-the-go stakeholders',
      'Role-based views for different organizational levels',
    ],
  },
];

const processSteps = [
  { icon: Target,   step: '01', title: 'Brief & Scoping',    description: 'We start by understanding your research objectives, timelines, and technical requirements in detail.' },
  { icon: Settings, step: '02', title: 'Planning & Setup',   description: 'A dedicated team is assigned, tools are selected, and a delivery plan is documented and shared.' },
  { icon: Zap,      step: '03', title: 'Execution & QA',     description: 'Work is delivered in stages with multi-point quality checks at every milestone.' },
  { icon: Shield,   step: '04', title: 'Review & Handover',  description: 'Final deliverables are reviewed together before handover, with full documentation and support.' },
];

const gradientStyle = {
  background: 'linear-gradient(100deg, #10b981 0%, #06b6d4 55%, #22d3ee 100%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
};

export default function ServicesPage() {
  return (
    <div className="overflow-hidden pt-20">

      {/* ── HERO ── */}
      <section className="relative py-24 mesh-bg">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-emerald-500/6 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className="text-emerald-400 text-sm">Services</span>
            </div>
            <span className="badge-live mb-4 inline-block mx-auto">What We Offer</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive Survey
              <br />
              <span style={gradientStyle}>Operations Services</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Four core disciplines, delivered by specialists with 20+ years of market research experience.
              From the first line of survey script to the final dashboard, we own the entire delivery lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUICK NAV ── */}
      <section className="bg-[#090d13] border-b border-[#1e2d3d] sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-none">
            {services.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-150 ${
                  i === 0
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05] border border-transparent'
                }`}
              >
                <s.icon className={`w-3.5 h-3.5 ${s.iconColor}`} />
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      <section className="py-4 bg-[#0a0e17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-[#1e2d3d]">
            {services.map((service, idx) => (
              <div key={service.id} id={service.id} className="scroll-mt-32 py-20">
                <div className={`grid lg:grid-cols-2 gap-14 items-start ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                  {/* ── Text side ── */}
                  <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                    {/* Service label */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${service.iconBg} mb-5`}>
                      <service.icon className={`w-4 h-4 ${service.iconColor}`} />
                      <span className={`text-xs font-bold uppercase tracking-wider ${service.iconColor}`}>
                        {service.title}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                      {service.tagline}
                    </h2>
                    <p className="text-slate-400 leading-relaxed mb-8 text-[15px]">{service.description}</p>

                    {/* Use cases */}
                    <div className="mb-8">
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-3">
                        Common Use Cases
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((uc) => (
                          <span
                            key={uc}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${service.iconBg} ${service.iconColor}`}
                          >
                            {uc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                      Discuss This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* ── Capabilities card ── */}
                  <div className={`card p-8 ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                    style={{ boxShadow: `0 0 40px ${service.glow}` }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-1 h-8 rounded-full ${service.accentBar}`} />
                      <h3 className="text-white font-semibold text-base">What We Deliver</h3>
                    </div>
                    <ul className="space-y-3">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3">
                          <CheckCircle className={`w-4 h-4 ${service.iconColor} shrink-0 mt-0.5`} />
                          <span className="text-slate-300 text-sm leading-relaxed">{cap}</span>
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

      {/* ── HOW WE WORK ── */}
      <section className="py-24 mesh-bg border-t border-[#1e2d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-live mb-4 inline-block mx-auto">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">How We Work With You</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A straightforward, accountable process — so you always know what&apos;s happening and what&apos;s
              coming next.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 bg-[#1e2d3d]/30 rounded-2xl overflow-hidden border border-[#1e2d3d]">
            {processSteps.map(({ icon: Icon, step, title, description }, i) => (
              <div key={step} className={`relative p-8 bg-[#0d1117] ${i < processSteps.length - 1 ? 'border-r border-b lg:border-b-0 border-[#1e2d3d]' : ''}`}>
                <div className="text-5xl font-black text-white/[0.04] absolute top-4 right-5 select-none leading-none">{step}</div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-xs text-emerald-500/70 font-bold uppercase tracking-widest mb-2">{step}</div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 section-alt border-t border-[#1e2d3d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Ready to <span style={gradientStyle}>Get Started?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll put together a tailored proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              <span className="flex items-center gap-2">Request a Proposal <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link href="/ai-tools" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
              Explore AI Tools <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
