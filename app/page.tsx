'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CURRICULUM_DATA } from './curriculum';
import { 
  CheckCircle, 
  BookOpen, 
  Shield, 
  Award, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Code,
  Rocket,
  MessageCircle,
  Play,
  Headphones // Kept for the new Mentor card
} from 'lucide-react';

// --- Components ---
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const FloatingBadge = ({ icon: Icon, text, className }: { icon: any, text: string, className: string }) => (
  <motion.div 
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className={`absolute flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg z-10 ${className}`}
  >
    <div className="p-2 bg-orange-100 rounded-full">
      <Icon size={16} className="text-orange-600" />
    </div>
    <span className="text-sm font-bold text-gray-700">{text}</span>
  </motion.div>
);

export default function SkillsnapLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("Class 6");
  
  // State to track which card is expanded
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-orange-200">
      
      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Using the transparent logo image. */}
            <img 
              src="/skillsnaplogotransparent.png" 
              alt="SkillSnap Logo" 
              className="h-[120px] w-auto object-contain" 
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-900">
            <a href="#curriculum" className="hover:text-orange-600 transition-colors">Courses</a>
            <a href="#parents" className="hover:text-orange-600 transition-colors">For Parents</a>
            <button onClick={scrollToContact} className="hover:text-orange-600 transition-colors">Contact Us</button>
          </div>
          <button 
            onClick={scrollToContact}
            className="bg-blue-950 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-900 transition-all hover:scale-105 shadow-lg shadow-blue-200"
          >
            Talk to an Expert
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
          
          {/* Left: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                <Rocket size={14} fill="currentColor" />
                Strong Foundations for Future Skills
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-blue-950 mb-6">
                Master the Syllabus. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">
                  Crack the Future.
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
                The only platform for Class 6-10 that combines <strong>School Academics</strong> with <strong>Future Tech Skills</strong>. Get the guidance your child deserves.
              </p>
            </FadeIn>

            {/* Lead Form Box */}
            <FadeIn delay={0.2}>
              <div id="contact-form" className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-md w-full mx-auto lg:mx-0 scroll-mt-24 text-left">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-900">
                  <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                  Get a Call Back
                </h3>
                <form className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Parent's Name *"
                    required 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                  <input 
                    type="tel" 
                    placeholder="Phone Number (WhatsApp preferred) *" 
                    required
                    pattern='[0-9]{10}'
                    title='Please enter a valid 10-digit mobile number'
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                  <select 
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-gray-500">
                    <option value="" disabled>Select Student's Class *</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9</option>
                    <option value="10">Class 10</option>
                  </select>
                  <button 
                    type='submit' 
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-200 hover:shadow-xl hover:scale-[1.02] transition-all">
                    Request Call Back
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-2">Our counselors will call you within 24 hours.</p>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Right: Visual (Using PHOTO) */}
          <div className="relative block h-[400px] lg:h-[600px] mt-12 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none">
             {/* Student Image Container */}
             <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
                <img 
                  src="/hero-student-logo.png" 
                  alt="Happy student holding tablet showing coding project" 
                  className="w-full h-full object-cover object-[70%_center]"
                />
                 {/* Dark gradient overlay for photo depth */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
             </div>
             
             {/* Floating Elements */}
             <FloatingBadge 
               icon={Award} 
               text="Top Scorer" 
               className="top-6 -left-4 lg:top-12 lg:-left-8 scale-90 lg:scale-100" 
             />
             <FloatingBadge 
               icon={Code} 
               text="Tech Wizard" 
               className="bottom-16 -right-2 lg:bottom-24 lg:-right-6 scale-90 lg:scale-100" 
             />
             
             <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 p-3 lg:p-4 bg-white/95 backdrop-blur rounded-xl shadow-lg border border-teal-100 max-w-[160px] lg:max-w-[200px]">
                <div className="flex gap-2 items-center text-teal-600 mb-1">
                  <MessageCircle size={16} fill="currentColor" />
                  <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wide">Included</span>
                </div>
                <p className="text-xs lg:text-sm font-bold text-gray-800">Live Doubt Solving</p>
                <p className="text-[10px] lg:text-xs text-gray-500">Every Weekend</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- Social Proof --- */}
      <section className="py-10 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Designed for students from top schools</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {['DPS', 'Ryan International', 'Kendriya Vidyalaya', 'Dav Public School'].map((school) => (
               <span key={school} className="text-xl font-bold text-gray-400 hover:text-gray-800 transition-colors">{school}</span>
             ))}
          </div>
        </div>
      </section>

      {/* --- Parent's Peace of Mind (MERGED WITH MENTOR) --- */}
      <section id="parents" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">Why Parents Trust SkillSnap</h2>
              <p className="text-lg text-gray-600">We balance academic rigour with modern skills.</p>
            </div>
          </FadeIn>

          {/* Changed grid to 4 columns on Large screens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: BookOpen,
                color: "text-blue-600",
                bg: "bg-blue-100",
                title: "Curriculum Aligned",
                desc: "100% mapped to CBSE & ICSE syllabus. We don't distract them; we support their school exams."
              },
              {
                icon: Shield,
                color: "text-teal-600",
                bg: "bg-teal-100",
                title: "Safe & Focused",
                desc: "A secure, ad-free environment dedicated solely to learning. No social media distractions."
              },
              {
                icon: Users,
                color: "text-purple-600",
                bg: "bg-purple-100",
                title: "Progress Reports",
                desc: "Get weekly WhatsApp reports on your child's attendance, test scores, and areas of improvement."
              },
              {
                icon: Headphones,
                color: "text-orange-600",
                bg: "bg-orange-100",
                title: "24x7 Mentor Support",
                desc: "No student is left behind. Our dedicated mentors provide 1-on-1 doubt clearing whenever your child gets stuck."
              }
            ].map((feature, idx) => (
              <FadeIn delay={idx * 0.1} key={idx}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon size={28} className={feature.color} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- Curriculum Section --- */}
      <section id="curriculum" className="py-24 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">Explore Our Syllabus</h2>
            <p className="text-lg text-gray-600">Select your child's class to see what they will learn.</p>
          </div>

          {/* Horizontal Tabs */}
          <div className="flex justify-start md:justify-center mb-12 overflow-x-auto pb-4 no-scrollbar px-6 md:px-0">
            <div className="flex gap-2 p-1 bg-white rounded-full border border-gray-200 shadow-sm min-w-max">
              {Object.keys(CURRICULUM_DATA).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setExpandedCard(null); // Close any expanded cards when switching tabs
                  }}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === tab 
                    ? "bg-blue-950 text-white shadow-md" 
                    : "text-gray-500 hover:text-blue-900 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-start" 
            >
              {CURRICULUM_DATA[activeTab]?.length > 0 ? (
                CURRICULUM_DATA[activeTab].map((card: any, idx: number) => (
                  <div key={idx} className={`bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden ${expandedCard === idx ? 'ring-2 ring-orange-100' : ''}`}>
                    
                    {/* Card Header (Visible Always) */}
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 ${card.bg} rounded-lg flex items-center justify-center shrink-0`}>
                          <card.icon size={24} className={card.color} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{card.subject}</h3>
                          {card.tagline && <p className="text-xs text-gray-500 font-medium italic mt-1">{card.tagline}</p>}
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {card.summary.map((topic: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <CheckCircle size={18} className="text-teal-500 mt-1 shrink-0" />
                            <span className="text-sm font-medium">{topic}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Toggle Button */}
                      <button 
                        onClick={() => toggleCard(idx)}
                        className="w-full py-3 rounded-xl border border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-50 hover:text-blue-900 transition-colors flex items-center justify-center gap-2 group"
                      >
                        {expandedCard === idx ? (
                          <>Hide Curriculum <ChevronUp size={16} /></>
                        ) : (
                          <>View Detailed Curriculum <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" /></>
                        )}
                      </button>
                    </div>

                    {/* Detailed Curriculum (Expandable Inline Section) */}
                    <AnimatePresence>
                      {expandedCard === idx && card.details && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="bg-gray-50 border-t border-gray-100"
                        >
                          <div className="p-8 pt-4 space-y-8">
                            <div className="flex items-center justify-center">
                               <span className="bg-white border border-gray-200 px-4 py-1 rounded-full text-xs font-bold text-gray-400 uppercase tracking-widest">Full Syllabus</span>
                            </div>
                            
                            {card.details.map((section: any, sIdx: number) => (
                              <div key={sIdx}>
                                <h4 className={`text-lg font-bold mb-3 flex items-center gap-2 ${card.color}`}>
                                  <span className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs text-gray-500 shadow-sm">{sIdx + 1}</span>
                                  {section.title}
                                </h4>
                                <ul className="space-y-2 ml-8 border-l-2 border-gray-200 pl-4">
                                  {section.points.map((pt: string, pIdx: number) => (
                                    <li key={pIdx} className="text-sm text-gray-600 leading-relaxed relative">
                                      <span className="absolute -left-[21px] top-2 w-2 h-2 rounded-full bg-gray-300"></span>
                                      {pt}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}

                            <div className="pt-4 text-center">
                               <button onClick={scrollToContact} className="text-orange-600 font-bold hover:underline text-sm">
                                  Download PDF Syllabus
                               </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                  <p className="text-gray-500 text-lg">Curriculum coming soon!</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Want to see the full detailed brochure?</p>
            <button onClick={scrollToContact} className="text-orange-600 font-bold hover:underline flex items-center justify-center gap-2 mx-auto">
              Download Full Brochure <ChevronDown size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* --- Student's Excitement (The Vibe) --- */}
      <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-400 font-bold tracking-wider uppercase text-sm">For Students</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">Learning that doesn't feel like a chore.</h2>
              
              <div className="space-y-8">
                {[
                  { title: "Gamified Learning", desc: "Earn badges, climb leaderboards, and unlock rewards for finishing homework." },
                  { title: "Real Coding Projects", desc: "Don't just memorize. Build websites, games, and apps from Class 6." },
                  { title: "Bite-sized Videos", desc: "Short, high-energy videos that explain complex Physics concepts in minutes." }
                ].map((item, i) => (
                  <FadeIn delay={i * 0.2} key={i}>
                    <div className="flex gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0 font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-blue-100">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-900 to-blue-950 p-2 rounded-2xl border border-blue-800 shadow-2xl"
              >
                {/* Mock UI of the Platform */}
                <div className="aspect-video bg-black rounded-xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-orange-600/20 group-hover:bg-orange-600/10 transition-colors"></div>
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <Play size={32} fill="white" className="text-white ml-1" />
                  </div>
                </div>
                <div className="p-4 flex gap-4">
                  <div className="h-2 bg-gray-700 rounded-full flex-1 overflow-hidden">
                    <div className="h-full w-2/3 bg-orange-500"></div>
                  </div>
                  <span className="text-xs text-gray-400">65% Complete</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-950">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is this a replacement for school?", a: "No, Skillsnap is a companion. We help students master their school syllabus so they score higher, while adding future skills like coding that schools often miss." },
              { q: "How much time does a student need to spend?", a: "Just 40 minutes a day. We believe in smart learning, not long hours." },
              { q: "Do you offer a free trial?", a: "We offer a free consultation call where we assess your child's current level and recommend the right path. We do not offer a free trial of the software itself." }
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === i && (
                  <div className="p-4 bg-white text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA / Footer --- */}
      <footer className="bg-blue-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">Ready to boost your child's confidence?</h2>
              <p className="text-blue-200">Join 5,000+ students learning smarter, not harder.</p>
            </div>
            <button 
              onClick={scrollToContact} 
              className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-lg shadow-lg shadow-orange-900/50 transition-all hover:scale-105"
            >
              Contact Us Today
            </button>
          </div>
          
          <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300">
             <p>&copy; 2024 Skillsnap Learning Pvt. Ltd. All rights reserved.</p>
             <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-white">Privacy Policy</a>
               <a href="#" className="hover:text-white">Terms of Service</a>
             </div>
          </div>
        </div>
      </footer>

    </div>
  );
}