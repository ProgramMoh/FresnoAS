"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-luxury-black min-h-screen text-white selection:bg-purple-800/30">
      <Navbar />

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
        >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">Touch.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Experience our premium service firsthand. Visit our showroom or schedule a private viewing of our exclusive inventory.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Info Cards */}
            <div className="space-y-6">
                {[
                    { 
                        icon: MapPin, 
                        title: "Visit Our Showroom", 
                        details: ["3808 E Belmont Ave", "Fresno, CA 93702"],
                        color: "from-purple-500 to-indigo-600"
                    },
                    { 
                        icon: Phone, 
                        title: "Call Us Directly", 
                        details: ["(559) 233-2001", "Mon-Fri, 9am-7pm"],
                        color: "from-pink-500 to-rose-500"
                    },
                    { 
                        icon: Mail, 
                        title: "Email Support", 
                        details: ["sales@fresnoauto.com", "finance@fresnoauto.com"],
                        color: "from-red-500 to-orange-500"
                    }
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-5 group p-4 rounded-2xl hover:bg-slate-900/50 transition-colors duration-300">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg shadow-purple-900/20 group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon size={24} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-white mb-1 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                            {item.details.map((line, idx) => (
                                <p key={idx} className="text-slate-400 font-light">{line}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Hours Block */}
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                    <Clock className="text-purple-400" />
                    <h3 className="font-bold text-xl">Operating Hours</h3>
                </div>
                <div className="space-y-3 text-slate-300">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                        <span>Mon - Sat</span>
                        <span className="font-medium text-white">9:30 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                        <span>Sunday</span>
                        <span>Closed</span>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-900/10 relative overflow-hidden group"
          >
            {/* Decorative Gradient Border Effect */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />

            <h2 className="text-3xl font-bold text-slate-900 mb-2">Send a Message</h2>
            <p className="text-slate-500 mb-8">Have a specific car in mind? Let us know.</p>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">First Name</label>
                        <input type="text" className="w-full bg-slate-100 border-none rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-purple-500 transition-all outline-none" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Last Name</label>
                        <input type="text" className="w-full bg-slate-100 border-none rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-purple-500 transition-all outline-none" placeholder="Doe" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                    <input type="email" className="w-full bg-slate-100 border-none rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-purple-500 transition-all outline-none" placeholder="jane@example.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                    <textarea className="w-full bg-slate-100 border-none rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-purple-500 transition-all h-32 resize-none outline-none" placeholder="I am interested in..."></textarea>
                </div>

                <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all group-hover:shadow-lg">
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}