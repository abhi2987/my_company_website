import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, XIcon, FacebookIcon } from '@/components/SocialIcons';

const services = [
  { label: 'Survey Programming', href: '/services#survey-programming' },
  { label: 'Data Processing', href: '/services#data-processing' },
  { label: 'Data Engineering', href: '/services#data-engineering' },
  { label: 'Dashboarding', href: '/services#dashboarding' },
];

const aiTools = [
  { label: 'Survey Co-Pilot', href: '/ai-tools#co-pilot' },
  { label: 'Automated OE Code', href: '/ai-tools#oe-code' },
  { label: 'Data Validation AI', href: '/ai-tools#data-validation' },
  { label: 'Fraud Detection', href: '/ai-tools#fraud-detection' },
  { label: 'Automated Insights', href: '/ai-tools#insights' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'AI Tools', href: '/ai-tools' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: LinkedInIcon, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: InstagramIcon, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: XIcon, href: '#', label: 'X (Twitter)', color: 'hover:text-sky-400' },
  { icon: FacebookIcon, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0e17] border-t border-[#1e2d3d]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3.5 mb-6">
              <div className="relative w-11 h-11">
                <div className="absolute inset-0 rounded-[12px] bg-gradient-to-br from-emerald-500 via-cyan-400 to-blue-500 opacity-90" />
                <svg className="absolute inset-0 w-full h-full p-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <span className="font-extrabold text-[20px] tracking-tight" style={{
                  background: 'linear-gradient(100deg, #ffffff 0%, #ffffff 35%, #10b981 55%, #06b6d4 80%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>NeuralWeave</span>
                <span className="text-[9.5px] text-slate-500 tracking-[0.22em] uppercase font-medium mt-0.5">Solutions LLP</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Bridging the gap between traditional market research and the future of AI-powered survey operations. 20+ years of expertise, redefined for the modern era.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-slate-400">New Delhi, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-400">[contact@neuralweavesolutions.com]</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-slate-400">[+91 XXXXX XXXXX]</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg bg-[#161b27] border border-[#1e2d3d] flex items-center justify-center text-slate-400 ${color} transition-all duration-200 hover:border-current hover:scale-110`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              AI Tools
              <span className="ml-2 text-[9px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded-full uppercase tracking-wide">Soon</span>
            </h4>
            <ul className="space-y-3">
              {aiTools.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[#1e2d3d] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} NeuralWeave Solutions LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
