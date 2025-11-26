import Link from 'next/link';
import { Car, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* COLUMN 1: BRANDING */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-1.5 rounded-lg text-white">
                <Car size={20} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Fresno<span className="text-red-500">Auto</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Redefining the car buying experience. Premium vehicles, transparent pricing, and a commitment to excellence.
            </p>
          </div>

          {/* COLUMN 3: VISIT US (Location Only) */}
          <div>
            <h3 className="text-white font-bold mb-4">Visit Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-purple-500 shrink-0 mt-0.5" />
                <span>3808 E Belmont Av, Fresno, CA 93702</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CONNECT (Phone, Email, Socials) */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex gap-3 flex-wrap">
              {/* Phone - Hovers Pink */}
              <a href="tel:+15592332001" className="bg-slate-900 p-2 rounded-full hover:bg-slate-800 hover:text-white transition-all group" title="Call Us">
                <Phone size={20} className="group-hover:text-pink-500 transition-colors" />
              </a>
              
              {/* Mail - Hovers Red */}
              <a href="mailto:sales@fresnoauto.com" className="bg-slate-900 p-2 rounded-full hover:bg-slate-800 hover:text-white transition-all group" title="Email Us">
                <Mail size={20} className="group-hover:text-red-500 transition-colors" />
              </a>

              {/* Socials */}
              <a href="#" className="bg-slate-900 p-2 rounded-full hover:bg-slate-800 hover:text-white transition-all group">
                <Facebook size={20} className="group-hover:text-blue-500 transition-colors" />
              </a>
              <a href="#" className="bg-slate-900 p-2 rounded-full hover:bg-slate-800 hover:text-white transition-all group">
                <Instagram size={20} className="group-hover:text-pink-400 transition-colors" />
              </a>
              <a href="#" className="bg-slate-900 p-2 rounded-full hover:bg-slate-800 hover:text-white transition-all group">
                <Twitter size={20} className="group-hover:text-sky-400 transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Fresno Auto Sales. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}