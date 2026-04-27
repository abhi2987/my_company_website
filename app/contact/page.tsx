'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Mail, Phone, Clock, Send,
  ChevronRight, CheckCircle, MessageSquare, ArrowRight,
} from 'lucide-react';
import { LinkedInIcon, InstagramIcon, XIcon, FacebookIcon } from '@/components/SocialIcons';

const services = [
  'Survey Programming',
  'Data Processing',
  'Data Engineering',
  'Dashboarding',
  'AI Tools – Early Access',
  'General Inquiry',
];

const contactDetails = [
  { icon: MapPin, label: 'Office Location', value: 'New Delhi, India',                  color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { icon: Mail,   label: 'Email',           value: 'contact@neuralweavesolutions.com',   color: 'text-cyan-400',    bg: 'bg-cyan-500/10'    },
  { icon: Phone,  label: 'Phone',           value: '+91 XXXXX XXXXX',                   color: 'text-blue-400',    bg: 'bg-blue-500/10'    },
  { icon: Clock,  label: 'Business Hours',  value: 'Mon – Fri, 9:00 AM – 6:00 PM IST', color: 'text-amber-400',   bg: 'bg-amber-500/10'   },
];

const socialLinks = [
  { icon: LinkedInIcon,  label: 'LinkedIn',    handle: '@NeuralWeaveSolutions', href: '#', color: 'hover:border-blue-400 hover:text-blue-400'  },
  { icon: InstagramIcon, label: 'Instagram',   handle: '@neuralweave',          href: '#', color: 'hover:border-pink-400 hover:text-pink-400'  },
  { icon: XIcon,         label: 'X (Twitter)', handle: '@NeuralWeave',          href: '#', color: 'hover:border-sky-400 hover:text-sky-400'    },
  { icon: FacebookIcon,  label: 'Facebook',    handle: 'NeuralWeave Solutions', href: '#', color: 'hover:border-blue-500 hover:text-blue-500'  },
];

const gradientStyle = {
  background: 'linear-gradient(100deg, #10b981 0%, #06b6d4 55%, #22d3ee 100%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden pt-20">

      {/* ── HERO ── */}
      <section className="relative py-20 mesh-bg">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-emerald-500/6 blur-3xl float-anim" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl float-anim-reverse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-emerald-400 text-sm">Contact</span>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <span className="badge-live mb-4 inline-block mx-auto">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
              Let&apos;s Talk About
              <br />
              <span style={gradientStyle}>Your Next Project</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Whether you have an active project, a question about our services, or want early access to our
              AI tools — we respond to every inquiry within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="py-16 section-alt border-t border-[#1e2d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* ── LEFT: info ── */}
            <div className="lg:col-span-2 space-y-5">

              <div className="card p-6">
                <h2 className="text-white font-semibold text-base mb-5">Contact Information</h2>
                <div className="space-y-4">
                  {contactDetails.map(({ icon: Icon, label, value, color, bg }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon className={`w-4 h-4 ${color}`} />
                      </div>
                      <div>
                        <p className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                        <p className="text-slate-300 text-sm font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card border-emerald-500/25 p-6" style={{ boxShadow: '0 0 30px rgba(16,185,129,0.07)' }}>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1.5">Quick Response Guarantee</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      All project inquiries receive a personal response within 24 business hours.
                      For urgent requirements, mention your deadline in the message.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-white font-semibold text-sm mb-4">Follow Us</h3>
                <div className="space-y-2.5">
                  {socialLinks.map(({ icon: Icon, label, handle, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      className={`flex items-center gap-3 p-3 rounded-lg bg-[#0d1117] border border-[#1e2d3d] ${color} text-slate-400 transition-all duration-200`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold leading-none">{label}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="card border-emerald-500/30 p-12 text-center flex flex-col items-center justify-center min-h-[480px]"
                  style={{ boxShadow: '0 0 40px rgba(16,185,129,0.08)' }}>
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">Message Received!</h2>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
                    Thank you for reaching out. A member of our team will get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', service: '', message: '' }); }}
                    className="btn-secondary text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="card p-8">
                  <div className="mb-7">
                    <h2 className="text-white font-semibold text-xl mb-1">Send Us a Message</h2>
                    <p className="text-slate-500 text-sm">Fill in the details below and we&apos;ll get back to you promptly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-400 text-[10px] font-semibold uppercase tracking-widest mb-2">
                          Full Name <span className="text-emerald-400">*</span>
                        </label>
                        <input
                          type="text" name="name" required
                          value={formData.name} onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full bg-[#0d1117] border border-[#1e2d3d] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 text-[10px] font-semibold uppercase tracking-widest mb-2">
                          Work Email <span className="text-emerald-400">*</span>
                        </label>
                        <input
                          type="email" name="email" required
                          value={formData.email} onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full bg-[#0d1117] border border-[#1e2d3d] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-[10px] font-semibold uppercase tracking-widest mb-2">
                        Company / Organisation
                      </label>
                      <input
                        type="text" name="company"
                        value={formData.company} onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full bg-[#0d1117] border border-[#1e2d3d] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 text-[10px] font-semibold uppercase tracking-widest mb-2">
                        Service / Area of Interest
                      </label>
                      <select
                        name="service" value={formData.service} onChange={handleChange}
                        className="w-full bg-[#0d1117] border border-[#1e2d3d] rounded-lg px-4 py-3 text-sm transition-colors appearance-none"
                        style={{ color: formData.service ? '#f0f6fc' : '#475569' }}
                      >
                        <option value="" disabled>Select a service or topic</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#161b27] text-white">{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 text-[10px] font-semibold uppercase tracking-widest mb-2">
                        Your Message <span className="text-emerald-400">*</span>
                      </label>
                      <textarea
                        name="message" required rows={5}
                        value={formData.message} onChange={handleChange}
                        placeholder="Tell us about your project — what you need, timelines, any specific requirements..."
                        className="w-full bg-[#0d1117] border border-[#1e2d3d] rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit" disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>Send Message <Send className="w-4 h-4" /></>
                      )}
                    </button>

                    <p className="text-slate-600 text-xs text-center">
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section className="py-16 mesh-bg border-t border-[#1e2d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              What Happens <span style={gradientStyle}>After You Write to Us</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto text-sm">
              No automated bots. No templated replies. A real conversation with people who understand your work.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-[#1e2d3d]">
            {[
              { step: '01', title: 'We Read Your Brief',     desc: 'Every message is read by a senior team member who understands the market research context.',    color: 'text-emerald-400' },
              { step: '02', title: 'We Respond in 24 Hours', desc: 'You get a personal reply — not a template — with initial thoughts and any clarifying questions.', color: 'text-cyan-400'    },
              { step: '03', title: 'We Scope Together',      desc: 'We discuss your project in depth and share a clear proposal before any engagement begins.',      color: 'text-blue-400'    },
            ].map(({ step, title, desc, color }, i) => (
              <div key={step} className={`p-8 bg-[#0d1117] ${i < 2 ? 'border-r border-b sm:border-b-0 border-[#1e2d3d]' : ''}`}>
                <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${color}`}>{step}</div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="bg-[#090d13] border-t border-[#1e2d3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl overflow-hidden border border-[#1e2d3d]">
            <div className="relative bg-[#0d1117] h-56 flex flex-col items-center justify-center gap-4">
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.06) 0%, transparent 70%)',
              }} />
              <div className="relative w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="relative text-center">
                <p className="text-white font-semibold text-sm mb-1">New Delhi, India</p>
                <p className="text-slate-500 text-xs">Interactive map coming soon</p>
              </div>
              <Link href="/contact" className="relative btn-secondary text-xs px-4 py-2 flex items-center gap-1.5">
                Get Directions <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
