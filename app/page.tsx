'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { CURRICULUM_DATA } from './curriculum1';
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
  Headphones,
  Calendar,
  Clock,
  Lock,
  Smartphone,
  Mail,
  MapPin
} from 'lucide-react';

const iconPaths: Record<string, string> = {
  Calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  Clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
  Lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4",
  Code: "M16 18l6-6-6-6M8 6l-6 6 6 6"
};

// ===========================================
// ANIMATION 1: Character-by-Character Text Reveal
// ===========================================
const AnimatedText = ({ 
  text, 
  className = "", 
  delay = 0,
  staggerDelay = 0.03,
  once = true 
}: { 
  text: string; 
  className?: string; 
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}) => {
  const words = text.split(' ');
  
  return (
    <motion.span 
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => {
            const overallIndex = words.slice(0, wordIndex).join(' ').length + charIndex + wordIndex;
            return (
              <motion.span
                key={charIndex}
                className="inline-block"
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 20,
                    filter: "blur(10px)"
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    filter: "blur(0px)"
                  }
                }}
                transition={{
                  duration: 0.4,
                  delay: delay + overallIndex * staggerDelay,
                  ease: [0.2, 0.65, 0.3, 0.9]
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
};

// particles animation
const ParticleField = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 20,
        delay: Math.random() * -20,
        opacity: Math.random() * 0.4 + 0.1
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  );
};

// IconDrawing
const DrawingIcon = ({ 
  iconName, 
  color 
}: { 
  iconName: string; 
  color: string;
}) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={color}
  >
    <motion.path
      d={iconPaths[iconName] || iconPaths.Calendar}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.4, 0.6, 1]
      }}
    />
  </svg>
);

// Gradient text with character animation
const AnimatedGradientText = ({ 
  text, 
  className = "", 
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  delay?: number;
}) => {
  const words = text.split(' ');
  
  return (
    <motion.span 
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => {
            const overallIndex = words.slice(0, wordIndex).join(' ').length + charIndex + wordIndex;
            return (
              <motion.span
                key={charIndex}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500"
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 20,
                    filter: "blur(10px)"
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    filter: "blur(0px)"
                  }
                }}
                transition={{
                  duration: 0.4,
                  delay: delay + overallIndex * 0.04,
                  ease: [0.2, 0.65, 0.3, 0.9]
                }}
              >
                {char}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
};

// ===========================================
// ANIMATION 3: Animated Hero Image (Tilt Animation)
// ===========================================
const TiltHeroImage = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-8deg", "8deg"]);

  React.useEffect(() => {
  // Mouse movement for desktop
  const handleMouseMove = (e: MouseEvent) => {
    const xPct = e.clientX / window.innerWidth - 0.5;
    const yPct = e.clientY / window.innerHeight - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  // Device orientation for mobile
  const handleOrientation = (e: DeviceOrientationEvent) => {
    if (e.gamma === null || e.beta === null) return;
    
    // gamma: left/right tilt (-90 to 90)
    // beta: front/back tilt (-180 to 180)
    const xPct = Math.max(-0.5, Math.min(0.5, e.gamma / 45));
    const yPct = Math.max(-0.5, Math.min(0.5, (e.beta - 45) / 45));
    
    x.set(xPct);
    y.set(yPct);
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('deviceorientation', handleOrientation);
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('deviceorientation', handleOrientation);
  };
}, [x, y]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ===========================================
// Supporting Components (FadeIn, FloatingBadge, etc.)
// ===========================================
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

// ===========================================
// Learning Journey Section
// ===========================================
const LearningJourney = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">How You Learn</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We don't just teach; we structure your child's success. 
              Structured, engaging, and personalized to each student's pace.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <FadeIn delay={0.1}>
            <div className="h-full bg-blue-50/50 rounded-3xl p-8 border border-blue-100 flex flex-col hover:shadow-lg transition-all duration-300">
               <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                 <DrawingIcon iconName="Calendar" color="text-blue-600" />
               </div>
               <h3 className="text-xl font-bold text-blue-950 mb-3">Structured Weekday Learning</h3>
               <p className="text-gray-600 mb-6 flex-grow">
                 Classes run Monday to Friday with a personalized timetable. We include short 5–15 minute breaks between subjects to ensure students stay fresh and focused.
               </p>
               <div className="bg-white p-4 rounded-xl text-sm font-semibold text-blue-800 border border-blue-100">
                 ✨ 24/7 Access: Missed a class? All lectures are available on weekends too.
               </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="h-full bg-orange-50/50 rounded-3xl p-8 border border-orange-100 flex flex-col hover:shadow-lg transition-all duration-300">
               <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                 <DrawingIcon iconName="Clock" color="text-orange-600" />
               </div>
               <h3 className="text-xl font-bold text-blue-950 mb-3">The 50-Minute Power Cycle</h3>
               <p className="text-gray-600 mb-6 flex-grow">
                 We don't do boring hour-long lectures. Every session is scientifically structured for maximum retention:
               </p>
               <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-sm text-gray-700">
                   <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-orange-600 border border-orange-100">35</span>
                   <span>Mins Lecture (Visual & Interactive)</span>
                 </li>
                 <li className="flex items-center gap-3 text-sm text-gray-700">
                   <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-teal-600 border border-teal-100">10</span>
                   <span>Mins Quick Revision & Key Notes</span>
                 </li>
                 <li className="flex items-center gap-3 text-sm text-gray-700">
                   <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-purple-600 border border-purple-100">05</span>
                   <span>Mins Interactive Test</span>
                 </li>
               </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="h-full bg-teal-50/50 rounded-3xl p-8 border border-teal-100 flex flex-col hover:shadow-lg transition-all duration-300">
               <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                 <DrawingIcon iconName="Lock" color="text-teal-600" />
               </div>
               <h3 className="text-xl font-bold text-blue-950 mb-3">The "Unlock" System</h3>
               <p className="text-gray-600 mb-6 flex-grow">
                 We ensure strong foundations. A student cannot move to the next chapter until they clear the tests for the current one. No rushing, just mastering.
               </p>
               <div className="flex gap-2">
                 <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold">Weekly Mini-Tests</span>
                 <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold">Quarterly Major Exams</span>
               </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="h-full bg-purple-50/50 rounded-3xl p-8 border border-purple-100 flex flex-col hover:shadow-lg transition-all duration-300">
               <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                 <DrawingIcon iconName="Code" color="text-purple-600" />
               </div>
               <h3 className="text-xl font-bold text-blue-950 mb-3">Weekend Innovation Labs</h3>
               <p className="text-gray-600 mb-6 flex-grow">
                 Saturdays and Sundays are for builders. In our 2-hour practical sessions, students apply what they learned by building apps, websites, and solving real-world logic puzzles.
               </p>
               <div className="bg-white p-4 rounded-xl text-sm font-semibold text-purple-800 border border-purple-100 flex items-center gap-2">
                 <Rocket size={16} /> Hands-on projects, not theory.
               </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

// ===========================================
// App Download Section
// ===========================================
const AppDownload = () => {
  return (
    <section className="bg-blue-950 py-24 overflow-hidden relative">
       <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
       <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

       <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           
           <div className="text-center lg:text-left">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-900 text-blue-200 rounded-full text-sm font-bold mb-6 border border-blue-800">
               <Smartphone size={16} />
               <span>Learning in your pocket</span>
             </div>
             
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
               Go at your own rhythm.<br />
               <span className="text-orange-500">24/7 Access from anywhere.</span>
             </h2>
             
             <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto lg:mx-0">
               Download the Skillsnap Learning App – India's Out-of-the-Box Learning Platform.
               Watch lectures, take quizzes, and track progress on the go.
             </p>

             <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start">
               <button className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 font-medium w-full sm:w-auto justify-center sm:justify-start">
                 <div className="w-6 h-6 text-green-600 shrink-0">
                   <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm11.75 11.622l5.77 5.77a.998.998 0 0 0 1.416 0l1.325-1.325-8.51-4.445zM15.359 10.564l8.51-4.446-1.325-1.325a.998.998 0 0 0-1.416 0l-5.77 5.771zM4.708 23.367l9.743-9.743 4.87 2.544-13.68 7.148a1 1 0 0 1-.933.051zM4.708.633a1 1 0 0 1 .933.051l13.68 7.148-4.87 2.544L4.708.633z"/></svg>
                 </div>
                 <div className="text-left">
                   <div className="text-[10px] uppercase font-bold text-gray-500 leading-none">GET IT ON</div>
                   <div className="text-base font-bold leading-none mt-0.5">Google Play</div>
                 </div>
               </button>

               <button className="flex items-center gap-3 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 font-medium backdrop-blur-sm w-full sm:w-auto justify-center sm:justify-start">
                 <div className="w-6 h-6 text-white shrink-0">
                   <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.68-.83 1.14-1.99 1.01-3.02-1.03.05-2.28.69-3.02 1.6-.66.82-1.24 2.12-1.08 3.01 1.15.09 2.33-.63 3.09-1.59z"/></svg>
                 </div>
                 <div className="text-left">
                   <div className="text-[10px] uppercase font-bold text-gray-400 leading-none">Download on the</div>
                   <div className="text-base font-bold leading-none mt-0.5">App Store</div>
                 </div>
               </button>
             </div>
           </div>

           <div className="relative mx-auto w-full max-w-md lg:max-w-full font-sans">
             <div className="absolute top-10 -left-6 z-20 bg-white p-3 rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   <span className="text-xs font-bold text-gray-800">Anytime, Anywhere</span>
                </div>
             </div>
             
             <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img 
                  src="/girl-holding-phone.png" 
                  alt="Happy Indian student showing learning app on phone" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent"></div>
             </div>
           </div>

         </div>
       </div>
    </section>
  )
}

// ===========================================
// MAIN PAGE COMPONENT
// ===========================================
export default function SkillsnapLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("Class 6");
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

  const features = [
    {
      icon: BookOpen,
      color: "text-blue-600",
      bg: "bg-blue-100",
      title: "Immersive Skill-Building Sessions",
      desc: "These sessions are designed to develop real-world competencies through hands-on practice and guided learning."
    },
    {
      icon: Shield,
      color: "text-teal-600",
      bg: "bg-teal-100",
      title: "Tailored Learning Experiences",
      desc: "We deliver tailored learning experiences that adapt to individual strengths and learning needs."
    },
    {
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-100",
      title: "Consistent Smart Progress Insights for Parents",
      desc: "Parents receive consistent, data driven insights to confidently track their child's academic progress."
    },
    {
      icon: Award,
      color: "text-rose-600",
      bg: "bg-rose-100",
      title: "Gamified Learning",
      desc: "Our modern teaching approach blends visuals, quizzes, and gamified learning for better understanding."
    },
    {
      icon: Headphones,
      color: "text-orange-600",
      bg: "bg-orange-100",
      title: "24x7 Mentor Support",
      desc: "Our mentors provide one-on-one support to ensure every learner stays on track with our modern Ed-Tech approach."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-orange-200">
      
      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
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

      {/* --- Hero Section with ANIMATED TEXT --- */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        {/* Floating Particles */}
        <ParticleField />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
          
          {/* Left: Content with ANIMATED TEXT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                <Rocket size={14} fill="currentColor" />
                Strong Foundations for Future Skills
              </div>
            </motion.div>
            
            {/* ✨ ANIMATION 1: Character-by-character headline reveal */}
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-blue-950 mb-6">
              <AnimatedText text="Master the Syllabus." delay={0.2} />
              <br/>
              <AnimatedGradientText text="Crack the Future." delay={0.8} />
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              The only platform for Class 6-10 that combines <strong>School Academics</strong> with <strong>Future Tech Skills</strong>. Get the guidance your child deserves.
            </motion.p>

            {/* Lead Form Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
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
            </motion.div>
          </div>

          {/* Right: Visual */}
        <div className="relative block h-[400px] lg:h-[600px] mt-12 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none" style={{ perspective: "1000px" }}>
        <TiltHeroImage className="absolute inset-0">
            <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100"
            >
                <img 
                src="/hero-student-logo.png" 
                alt="Happy student holding tablet showing coding project" 
                className="w-full h-full object-cover object-[70%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>
        </TiltHeroImage>
        
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
        
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 p-3 lg:p-4 bg-white/95 backdrop-blur rounded-xl shadow-lg border border-teal-100 max-w-[160px] lg:max-w-[200px] z-10"
        >
            <div className="flex gap-2 items-center text-teal-600 mb-1">
                <MessageCircle size={16} fill="currentColor" />
                <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wide">Included</span>
            </div>
            <p className="text-xs lg:text-sm font-bold text-gray-800">Live Doubt Solving</p>
            <p className="text-[10px] lg:text-xs text-gray-500">Every Weekend</p>
        </motion.div>
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

    {/* All 5 cards in a single grid with responsive layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {features.map((feature, idx) => (
        <FadeIn delay={idx * 0.1} key={idx}>
          <div className={`p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full ${
            idx === 3 ? 'md:col-start-1 lg:col-start-auto' : ''
          } ${
            idx === 4 ? 'md:col-start-2 lg:col-start-auto' : ''
          } ${
            idx >= 3 ? 'lg:col-span-1 lg:mx-0' : ''
          }`}>
            <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                    }}
                >
                    <feature.icon size={28} className={feature.color} />
                </motion.div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
          </div>
        </FadeIn>
      ))}
    </div>

    {/* Wrapper for centering last 2 cards on large screens */}
    <style jsx>{`
      @media (min-width: 1024px) {
        .grid > *:nth-child(4) {
          grid-column-start: 1;
          margin-left: auto;
          margin-right: 0;
          max-width: calc(100% - 2rem);
        }
        .grid > *:nth-child(5) {
          grid-column-start: 3;
          margin-left: 0;
          margin-right: auto;
          max-width: calc(100% - 2rem);
        }
      }
    `}</style>
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
                    setExpandedCard(null); 
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

      {/* --- Learning Journey Section --- */}
      <LearningJourney />

      {/* --- Student's Excitement --- */}
      <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
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
              <motion.div 
                key={i} 
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={false}
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-4 bg-white text-gray-600 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- App Download Section --- */}
      <AppDownload />

      {/* --- Footer --- */}
      <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200 text-gray-600">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
            
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center justify-center md:justify-start gap-2 -mb-2 -mt-7">
                <img 
                    src="/skillsnaplogotransparent.png" 
                    alt="SkillSnap Logo" 
                    className="h-32 w-auto object-contain -ml-2" 
                />
                </div>
                <p className="text-gray-500 max-w-sm leading-relaxed mx-auto md:mx-0">
                We create unique learning paths for every student, ensuring the curriculum matches their abilities and inspires growth.
                </p>
            </div>

            <div>
                <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
                <ul className="space-y-4">
                <li><a href="#" className="hover:text-orange-600 transition-colors">About Us</a></li>
                <li><button onClick={scrollToContact} className="hover:text-orange-600 transition-colors">Contact Us</button></li>
                <li><a href="mailto:hello@skillsnap.com" className="hover:text-orange-600 transition-colors">Email Us</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-gray-900 mb-6">Get in Touch</h4>
                <div className="flex items-start justify-center md:justify-start gap-3 mb-4">
                <Mail size={20} className="text-orange-500 mt-1" />
                <span>support@skillsnap.com</span>
                </div>
                <div className="flex items-start justify-center md:justify-start gap-3">
                <MapPin size={20} className="text-orange-500 mt-1" />
                <span>New Delhi, India</span>
                </div>
            </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 text-center md:text-left">
                <p>&copy; 2026 Skillsnap Learning Pvt. Ltd. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                <a href="#" className="hover:text-gray-900">Terms of Use</a>
                </div>
            </div>
        </div>
      </footer>

    </div>
  );
}