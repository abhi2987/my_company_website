'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Code2, Database, Layers, BarChart3, Bot, Braces, ShieldCheck, Eye, Lightbulb } from 'lucide-react';

const serviceLinks = [
  { href: '/services#survey-programming', icon: Code2,      label: 'Survey Programming', desc: 'Multi-platform scripting & QA',         color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { href: '/services#data-processing',    icon: Database,   label: 'Data Processing',    desc: 'Cleaning, coding & weighted datasets',  color: 'text-cyan-400',    bg: 'bg-cyan-500/10'    },
  { href: '/services#data-engineering',   icon: Layers,     label: 'Data Engineering',   desc: 'Pipelines, ETL & cloud warehousing',    color: 'text-blue-400',    bg: 'bg-blue-500/10'    },
  { href: '/services#dashboarding',       icon: BarChart3,  label: 'Dashboarding',       desc: 'Power BI, Tableau & custom dashboards', color: 'text-amber-400',   bg: 'bg-amber-500/10'   },
];

const aiToolLinks = [
  { href: '/ai-tools#co-pilot',        icon: Bot,         label: 'Survey Co-Pilot',     desc: 'AI-assisted scripting & QA',    color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { href: '/ai-tools#oe-code',         icon: Braces,      label: 'Automated OE Coding', desc: 'NLP verbatim coding at scale',  color: 'text-cyan-400',    bg: 'bg-cyan-500/10'    },
  { href: '/ai-tools#data-validation', icon: ShieldCheck, label: 'Data Validation AI',  desc: 'Smart QC & anomaly detection',  color: 'text-blue-400',    bg: 'bg-blue-500/10'    },
  { href: '/ai-tools#fraud-detection', icon: Eye,         label: 'Fraud Detection',     desc: 'Real-time respondent scoring',  color: 'text-purple-400',  bg: 'bg-purple-500/10'  },
  { href: '/ai-tools#insights',        icon: Lightbulb,   label: 'Automated Insights',  desc: 'Narrative from data instantly', color: 'text-amber-400',   bg: 'bg-amber-500/10'   },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]             = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const [dropOpen, setDropOpen]             = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();
  const dropRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [pathname]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const onServices = pathname.startsWith('/services') || pathname.startsWith('/ai-tools');
  const onAbout    = pathname.startsWith('/about');
  const onContact  = pathname.startsWith('/contact');

  const activeDot = (active: boolean) =>
    active ? (
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
    ) : null;

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#080d14]/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
        : 'bg-[#080d14]/80 backdrop-blur-lg border-b border-white/[0.04]'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center h-[72px] justify-between">

          {/* ══════ LOGO ══════ */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative w-12 h-12 shrink-0">
              <div className="absolute inset-0 rounded-[13px] bg-gradient-to-br from-emerald-500 via-cyan-400 to-blue-500 opacity-90 group-hover:opacity-100 group-hover:scale-105 transform transition-all duration-200" />
              <svg className="absolute inset-0 w-full h-full p-2.5 text-white" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="2.5" />
                <circle cx="4" cy="4" r="1.8" />
                <circle cx="20" cy="4" r="1.8" />
                <circle cx="4" cy="20" r="1.8" />
                <circle cx="20" cy="20" r="1.8" />
                <line x1="5.8" y1="5.8" x2="10.2" y2="10.2" />
                <line x1="13.8" y1="10.2" x2="18.2" y2="5.8" />
                <line x1="5.8" y1="18.2" x2="10.2" y2="13.8" />
                <line x1="13.8" y1="13.8" x2="18.2" y2="18.2" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-extrabold text-[22px] tracking-tight"
                style={{
                  background: 'linear-gradient(100deg, #ffffff 0%, #ffffff 35%, #10b981 55%, #06b6d4 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                NeuralWeave
              </span>
              <span className="text-[9.5px] text-slate-500 tracking-[0.22em] uppercase font-medium mt-0.5">
                Solutions LLP
              </span>
            </div>
          </Link>

          {/* ══════ DESKTOP NAV (right-aligned) ══════ */}
          <div className="hidden md:flex items-center gap-0.5">

            {/* About */}
            <Link href="/about"
              className={`relative px-4 py-2.5 rounded-lg text-[13.5px] font-medium transition-all duration-150 whitespace-nowrap group ${
                onAbout ? 'text-white bg-white/[0.08]' : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              About
              {activeDot(onAbout)}
            </Link>

            {/* Services + AI Tools mega-dropdown */}
            <div ref={dropRef} className="relative">
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className={`relative flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-[13.5px] font-medium transition-all duration-150 whitespace-nowrap ${
                  onServices ? 'text-white bg-white/[0.08]' : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropOpen ? 'rotate-180 text-emerald-400' : ''}`} />
                {activeDot(onServices)}
              </button>

              {dropOpen && (
                <div className="absolute top-[calc(100%+10px)] right-0 w-[580px] rounded-2xl bg-[#0c1220] border border-white/[0.09] shadow-[0_24px_64px_rgba(0,0,0,0.7)] overflow-hidden">
                  <div className="grid grid-cols-2 divide-x divide-white/[0.06]">

                    {/* Services column */}
                    <div>
                      <div className="px-4 pt-4 pb-2">
                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-semibold">Our Services</p>
                      </div>
                      <div className="px-2 pb-3 space-y-0.5">
                        {serviceLinks.map(({ href, icon: Icon, label, desc, color, bg }) => (
                          <Link key={href} href={href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                          >
                            <div className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                              <Icon className={`w-3.5 h-3.5 ${color}`} />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[12.5px] font-medium text-slate-200 group-hover:text-white transition-colors leading-none">{label}</p>
                              <p className="text-[11px] text-slate-500 mt-0.5">{desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mx-4 mb-3 pt-2 border-t border-white/[0.06]">
                        <Link href="/services" className="text-[11.5px] text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                          View all services →
                        </Link>
                      </div>
                    </div>

                    {/* AI Tools column */}
                    <div>
                      <div className="px-4 pt-4 pb-2 flex items-center gap-2">
                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.15em] font-semibold">AI Tools</p>
                        <span className="text-[8px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded-full uppercase tracking-wide font-bold">Soon</span>
                      </div>
                      <div className="px-2 pb-3 space-y-0.5">
                        {aiToolLinks.map(({ href, icon: Icon, label, desc, color, bg }) => (
                          <Link key={href} href={href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group"
                          >
                            <div className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                              <Icon className={`w-3.5 h-3.5 ${color}`} />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[12.5px] font-medium text-slate-200 group-hover:text-white transition-colors leading-none">{label}</p>
                              <p className="text-[11px] text-slate-500 mt-0.5">{desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mx-4 mb-3 pt-2 border-t border-white/[0.06]">
                        <Link href="/ai-tools" className="text-[11.5px] text-amber-400 hover:text-amber-300 font-medium transition-colors">
                          Explore AI roadmap →
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <Link href="/contact"
              className={`relative px-4 py-2.5 rounded-lg text-[13.5px] font-medium transition-all duration-150 whitespace-nowrap ${
                onContact ? 'text-white bg-white/[0.08]' : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              Contact Us
              {activeDot(onContact)}
            </Link>

            {/* Divider + CTA */}
            <div className="h-6 w-px bg-white/[0.08] mx-2" />
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Get in Touch
            </Link>
          </div>

          {/* ══════ HAMBURGER ══════ */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.07] transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ══════ MOBILE DRAWER ══════ */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#080d14]/99 backdrop-blur-2xl border-t border-white/[0.07] px-4 pt-3 pb-5 space-y-1">

          <Link href="/about"
            className={`flex items-center px-4 py-3 rounded-xl text-[13.5px] font-medium transition-all ${
              onAbout ? 'text-white bg-white/[0.08]' : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >About</Link>

          {/* Services + AI Tools accordion */}
          <div>
            <button
              onClick={() => setMobileServices(!mobileServices)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[13.5px] font-medium transition-all ${
                onServices ? 'text-white bg-white/[0.08]' : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Services & AI Tools
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${mobileServices ? 'rotate-180' : ''}`} />
            </button>
            {mobileServices && (
              <div className="ml-3 mt-1 pl-3 border-l border-white/[0.07] space-y-0.5">
                <p className="text-[10px] text-slate-600 uppercase tracking-widest font-semibold px-3 pt-2 pb-1">Services</p>
                {serviceLinks.map(({ href, icon: Icon, label, color, bg }) => (
                  <Link key={href} href={href}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                  >
                    <div className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-3.5 h-3.5 ${color}`} />
                    </div>
                    {label}
                  </Link>
                ))}
                <p className="text-[10px] text-slate-600 uppercase tracking-widest font-semibold px-3 pt-3 pb-1">
                  AI Tools <span className="text-amber-500 normal-case">(Coming Soon)</span>
                </p>
                {aiToolLinks.map(({ href, icon: Icon, label, color, bg }) => (
                  <Link key={href} href={href}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                  >
                    <div className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                      <Icon className={`w-3.5 h-3.5 ${color}`} />
                    </div>
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact"
            className={`flex items-center px-4 py-3 rounded-xl text-[13.5px] font-medium transition-all ${
              onContact ? 'text-white bg-white/[0.08]' : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
            }`}
          >Contact Us</Link>

          <div className="pt-3 border-t border-white/[0.07]">
            <Link href="/contact" className="btn-primary w-full justify-center">Get in Touch</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
