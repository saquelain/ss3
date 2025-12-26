'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  BookOpen, 
  Shield, 
  Award, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Zap,
  Code,
  Globe,
  Beaker,
  Calculator,
  PenTool,
  Phone,
  Rocket,
  MessageCircle,
  Play
} from 'lucide-react';

// --- Data: Curriculum with Details ---
const CURRICULUM_DATA: Record<string, any> = {
  "Class 6": [
    {
      subject: "Mathematics",
      tagline: "Building Strong Maths Foundations",
      icon: Calculator,
      color: "text-blue-700",
      bg: "bg-blue-100",
      summary: ["Number System", "Integers & Fractions", "Algebra Intro", "Basic Geometry"],
      details: [
        { title: "Strong Number Sense", points: ["Master place value, integers, fractions", "Mental math accuracy", "Confidence in operations"] },
        { title: "Conceptual Understanding", points: ["Why formulas work", "Real-life examples", "Ratios and percentages"] },
        { title: "Problem-Solving Skills", points: ["Word problems strategy", "Logic puzzles", "Breaking down complex tasks"] },
        { title: "Geometry & Visualization", points: ["Lines, angles, symmetry", "Drawing and measuring", "Area and perimeter"] },
        { title: "Algebraic Thinking", points: ["Intro to variables", "Simple equations", "Pattern recognition"] },
        { title: "Data Handling", points: ["Bar graphs and pictographs", "Mean, median, mode", "Analytical skills"] },
        { title: "Consistent Practice", points: ["Daily quizzes", "Mixed problem sets", "Milestone tracking"] },
        { title: "Fun Methods", points: ["Gamified learning", "Peer discussions", "Interactive tools"] }
      ]
    },
    {
      subject: "English",
      tagline: "Communication & Creativity",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-100",
      summary: ["Vocabulary", "Grammar Mastery", "Creative Writing", "Literature"],
      details: [
        { title: "Strong Vocabulary", points: ["Contextual meanings", "Synonyms/Antonyms", "Word formation"] },
        { title: "Grammar Mastery", points: ["Tenses and parts of speech", "Punctuation and voice", "Sentence structure"] },
        { title: "Reading Comprehension", points: ["Skimming and scanning", "Critical reading", "Inference skills"] },
        { title: "Writing Skills", points: ["Essays and letters", "Storytelling", "Coherence and flow"] },
        { title: "Listening & Speaking", points: ["Pronunciation", "Presentation skills", "Active listening"] },
        { title: "Literature Analysis", points: ["Character analysis", "Themes and plots", "Literary devices"] },
        { title: "Daily Practice", points: ["Writing prompts", "Reading logs", "Grammar drills"] },
        { title: "Interactive Learning", points: ["Role-plays", "Multimedia stories", "Creative projects"] }
      ]
    },
    {
      subject: "Science",
      tagline: "Explore, Experiment, Excel",
      icon: Beaker,
      color: "text-teal-600",
      bg: "bg-teal-100",
      summary: ["Physics Basics", "Chemistry", "Biology", "Experiments"],
      details: [
        { title: "Conceptual Clarity", points: ["Fundamentals of matter", "Living vs non-living", "Energy basics"] },
        { title: "Hands-On Experiments", points: ["Home-safe labs", "Observation diaries", "Scientific method"] },
        { title: "Critical Thinking", points: ["Hypothesis testing", "Reasoning skills", "Asking 'Why'"] },
        { title: "Scientific Inquiry", points: ["Project-based learning", "Data recording", "Investigative skills"] },
        { title: "Real-World Application", points: ["Science in daily life", "Environmental awareness", "Tech connections"] },
        { title: "Research Skills", points: ["Reading diagrams", "Summarizing facts", "Independent study"] },
        { title: "Consistent Practice", points: ["Diagram labeling", "Concept mapping", "Weekly quizzes"] },
        { title: "Fun Learning", points: ["Simulations", "Nature walks", "Science games"] }
      ]
    },
    {
      subject: "Social Science",
      tagline: "Discover the World & History",
      icon: Globe,
      color: "text-orange-600",
      bg: "bg-orange-100",
      summary: ["History", "Geography", "Civics", "Maps"],
      details: [
        { title: "Society & Culture", points: ["Community traditions", "Diversity", "Heritage awareness"] },
        { title: "Geography", points: ["Maps and globes", "Landforms", "Climate basics"] },
        { title: "Civics", points: ["Local government", "Rights and duties", "Community roles"] },
        { title: "History", points: ["Timelines", "Ancient civilizations", "Historical sources"] },
        { title: "Critical Thinking", points: ["Cause and effect", "Evidence evaluation", "Perspective taking"] },
        { title: "Real-World Connections", points: ["Current events", "Global citizenship", "Cultural respect"] },
        { title: "Map Skills", points: ["Plotting locations", "Reading scales", "Directional sense"] },
        { title: "Interactive Learning", points: ["Virtual tours", "Role-playing history", "Debates"] }
      ]
    }
  ],
  "Class 7": [
    {
      subject: "Mathematics",
      tagline: "Advancing Logical Reasoning",
      icon: Calculator,
      color: "text-blue-700",
      bg: "bg-blue-100",
      summary: ["Integers", "Rational Numbers", "Algebraic Expressions", "Triangles"],
      details: [
        { title: "Number Systems", points: ["Properties of integers", "Fractions and decimals", "Rational numbers intro"] },
        { title: "Algebraic Mastery", points: ["Simple equations", "Formulating expressions", "Solving for X"] },
        { title: "Geometry In-Depth", points: ["Lines and angles", "Properties of triangles", "Congruence"] },
        { title: "Commercial Math", points: ["Comparing quantities", "Profit and loss", "Simple interest"] },
        { title: "Data Handling", points: ["Mean, median, mode", "Bar graphs", "Probability basics"] },
        { title: "Mensuration", points: ["Perimeter and area", "Circles and rectangles", "Real-life application"] },
        { title: "Logical Reasoning", points: ["Pattern finding", "Deductive reasoning", "Math puzzles"] },
        { title: "Visual Math", points: ["Symmetry", "Visualizing solid shapes", "3D understanding"] }
      ]
    },
    {
      subject: "Science",
      tagline: "Understanding Natural Phenomena",
      icon: Beaker,
      color: "text-teal-600",
      bg: "bg-teal-100",
      summary: ["Nutrition", "Heat & Temperature", "Acids & Bases", "Respiration"],
      details: [
        { title: "Biology: Life Processes", points: ["Nutrition in plants/animals", "Respiration in organisms", "Transport in plants"] },
        { title: "Chemistry: Matter", points: ["Acids, bases, and salts", "Physical and chemical changes", "Water management"] },
        { title: "Physics: Energy", points: ["Heat and temperature", "Electric current effects", "Light and reflection"] },
        { title: "Natural Phenomena", points: ["Winds and storms", "Soil profiles", "Weather and climate"] },
        { title: "Lab Skills", points: ["Handling apparatus", "Safety protocols", "Accurate measurement"] },
        { title: "Scientific Diagrams", points: ["Circuit diagrams", "Biological systems", "Chemical equations"] },
        { title: "Inquiry Projects", points: ["Model making", "Field observations", "Experiment reports"] },
        { title: "Tech in Science", points: ["Digital microscopes", "Simulation apps", "Data logging"] }
      ]
    },
    {
      subject: "English",
      tagline: "Refining Expression",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-100",
      summary: ["Grammar Mechanics", "Prose & Poetry", "Notice Writing", "Speeches"],
      details: [
        { title: "Advanced Grammar", points: ["Modals and determiners", "Active/Passive voice", "Reported speech"] },
        { title: "Creative Writing", points: ["Story completion", "Diary entries", "Descriptive writing"] },
        { title: "Formal Writing", points: ["Notice writing", "Formal letters", "Email etiquette"] },
        { title: "Literature", points: ["Analyzing themes", "Character sketches", "Poetic devices"] },
        { title: "Oral Skills", points: ["Debates", "Extempore", "Public speaking confidence"] },
        { title: "Vocabulary Building", points: ["Idioms and phrases", "One-word substitutions", "Confusing words"] },
        { title: "Reading Fluency", points: ["Speed reading", "Tone and mood", "Context clues"] },
        { title: "Exam Strategy", points: ["Time management", "Structuring answers", "Proofreading"] }
      ]
    },
    {
      subject: "Social Science",
      tagline: "Medieval World & Environment",
      icon: Globe,
      color: "text-orange-600",
      bg: "bg-orange-100",
      summary: ["Medieval History", "Environment", "State Government"],
      details: [
        { title: "Medieval History", points: ["New Kings and Kingdoms", "The Delhi Sultans", "Mughal Empire"] },
        { title: "Our Environment", points: ["Interior of the Earth", "Air and Water", "Human environment"] },
        { title: "Civics & Governance", points: ["Role of government in health", "State government working", "Gender equality"] },
        { title: "Tribes & Nomads", points: ["Social change", "Regional cultures", "Devotional paths"] },
        { title: "Market Economics", points: ["Understanding markets", "Chain of supply", "Advertising basics"] },
        { title: "Map Work", points: ["Historical maps", "River systems", "Vegetation zones"] },
        { title: "Source Analysis", points: ["Manuscripts", "Inscriptions", "Travelogues"] },
        { title: "Project Work", points: ["Case studies", "Heritage scrapbooks", "Mock parliament"] }
      ]
    }
  ],
  "Class 8": [
    {
      subject: "Mathematics",
      tagline: "Pre-High School Algebra",
      icon: Calculator,
      color: "text-blue-700",
      bg: "bg-blue-100",
      summary: ["Linear Equations", "Quadrilaterals", "Exponents", "Factorization"],
      details: [
        { title: "Rational Numbers", points: ["Properties and operations", "Number line representation", "Finding rational numbers"] },
        { title: "Linear Equations", points: ["One variable equations", "Application problems", "Reducing to linear form"] },
        { title: "Understanding Shapes", points: ["Polygons and quadrilaterals", "Constructing shapes", "3D visualization"] },
        { title: "Data Handling", points: ["Histograms", "Pie charts", "Probability"] },
        { title: "Squares & Cubes", points: ["Square roots methods", "Cube roots", "Estimation"] },
        { title: "Algebraic Expressions", points: ["Operations on expressions", "Standard identities", "Factorization"] },
        { title: "Mensuration", points: ["Surface area", "Volume of solids", "Capacity"] },
        { title: "Exponents & Powers", points: ["Laws of exponents", "Standard form", "Negative exponents"] }
      ]
    },
    {
      subject: "Science",
      tagline: "Physics & Micro-Biology",
      icon: Beaker,
      color: "text-teal-600",
      bg: "bg-teal-100",
      summary: ["Force & Pressure", "Sound & Light", "Microorganisms", "Reproduction"],
      details: [
        { title: "Physics: Forces", points: ["Contact/Non-contact forces", "Pressure principles", "Friction"] },
        { title: "Physics: Waves", points: ["Sound propagation", "Human ear structure", "Light reflection/refraction"] },
        { title: "Chemistry: Materials", points: ["Metals and non-metals", "Coal and petroleum", "Combustion and flame"] },
        { title: "Biology: Micro-world", points: ["Microorganisms: Friend & Foe", "Food preservation", "Nitrogen cycle"] },
        { title: "Biology: Life", points: ["Cell structure", "Reproduction in animals", "Adolescence"] },
        { title: "Natural Phenomena", points: ["Lightning", "Earthquakes", "Pollution of air/water"] },
        { title: "Electrical Effects", points: ["Chemical effects of current", "Electroplating", "Circuits"] },
        { title: "Space Science", points: ["Stars and solar system", "Constellations", "Satellites"] }
      ]
    },
    {
      subject: "English",
      tagline: "Complex Composition",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-100",
      summary: ["Reading Skills", "Report Writing", "Complex Grammar", "Poetry"],
      details: [
        { title: "Advanced Comprehension", points: ["Inference based questions", "Tone analysis", "Vocabulary in context"] },
        { title: "Grammar Precision", points: ["Conjunctions", "Prepositions", "Direct/Indirect speech mastery"] },
        { title: "Writing Composition", points: ["Article writing", "Report writing", "Short story creation"] },
        { title: "Poetry Analysis", points: ["Metaphor and simile", "Rhyme scheme", "Critical appreciation"] },
        { title: "Speaking Skills", points: ["Group discussions", "Interview skills", "Narrating events"] },
        { title: "Listening Skills", points: ["Note-taking", "Following instructions", "Audio comprehension"] },
        { title: "Vocabulary", points: ["Phrasal verbs", "Suffixes/Prefixes", "Technical vocabulary"] },
        { title: "Literary Classics", points: ["Reading abridged classics", "Understanding context", "Book reviews"] }
      ]
    },
    {
      subject: "Social Science",
      tagline: "Modern History & Law",
      icon: Globe,
      color: "text-orange-600",
      bg: "bg-orange-100",
      summary: ["British Raj", "Indian Constitution", "Agriculture", "Judiciary"],
      details: [
        { title: "Modern History", points: ["Establishment of company power", "Colonialism", "1857 Revolt"] },
        { title: "National Movement", points: ["Freedom struggle", "Women and reform", "Independence"] },
        { title: "Geography: Resources", points: ["Land, soil, water", "Natural vegetation", "Mineral resources"] },
        { title: "Agriculture & Industries", points: ["Farming types", "Major crops", "Industrial distribution"] },
        { title: "Civics: Constitution", points: ["Key features", "Fundamental rights", "Secularism"] },
        { title: "Judiciary & Law", points: ["Role of parliament", "Understanding laws", "Criminal justice system"] },
        { title: "Social Justice", points: ["Marginalization", "Public facilities", "Government schemes"] },
        { title: "Project Work", points: ["Disaster management", "Mock court", "Historical timelines"] }
      ]
    }
  ],
  "Class 9": [
    {
      subject: "Mathematics",
      tagline: "Advanced Geometry & Statistics",
      icon: Calculator,
      color: "text-blue-700",
      bg: "bg-blue-100",
      summary: ["Polynomials", "Coordinate Geometry", "Euclid's Geometry", "Statistics"],
      details: [
        { title: "Number Systems", points: ["Irrational numbers", "Real number operations", "Exponents"] },
        { title: "Polynomials", points: ["Remainder theorem", "Factorization", "Algebraic identities"] },
        { title: "Coordinate Geometry", points: ["Cartesian plane", "Plotting points", "Quadrants"] },
        { title: "Linear Equations", points: ["Two variables", "Graphing solutions", "Lines parallel to axes"] },
        { title: "Geometry", points: ["Euclid's geometry", "Lines and angles", "Triangles and congruence"] },
        { title: "Advanced Shapes", points: ["Quadrilaterals", "Circles", "Heron's formula"] },
        { title: "Surface Area & Volume", points: ["Cones, spheres, cylinders", "Volume calculations", "SA calculations"] },
        { title: "Statistics", points: ["Data collection", "Graphical representation", "Measures of central tendency"] }
      ]
    },
    {
      subject: "Science",
      tagline: "Foundations of Physics & Chem",
      icon: Beaker,
      color: "text-teal-600",
      bg: "bg-teal-100",
      summary: ["Motion & Force", "Atoms & Molecules", "Cell Theory", "Work & Energy"],
      details: [
        { title: "Matter", points: ["States of matter", "Interconversion", "Evaporation and cooling"] },
        { title: "Atoms & Molecules", points: ["Laws of chemical combination", "Atomic mass", "Mole concept"] },
        { title: "Cell Structure", points: ["Fundamental unit of life", "Organelles", "Tissues"] },
        { title: "Motion", points: ["Distance and displacement", "Equations of motion", "Uniform circular motion"] },
        { title: "Force & Laws of Motion", points: ["Newton's laws", "Inertia and mass", "Conservation of momentum"] },
        { title: "Gravitation", points: ["Universal law", "Free fall", "Mass vs Weight"] },
        { title: "Work & Energy", points: ["Kinetic and potential energy", "Law of conservation", "Power"] },
        { title: "Sound", points: ["Propagation", "Echo and reverberation", "Ultrasound applications"] }
      ]
    },
    {
      subject: "Social Science",
      tagline: "World History & Economics",
      icon: Globe,
      color: "text-orange-600",
      bg: "bg-orange-100",
      summary: ["French Revolution", "Democracy", "Economics", "Drainage"],
      details: [
        { title: "History: World Events", points: ["The French Revolution", "Socialism in Europe", "Nazism and Hitler"] },
        { title: "Geography: India", points: ["Size and location", "Physical features", "Drainage systems"] },
        { title: "Geography: Climate", points: ["Monsoon mechanism", "Natural vegetation", "Population dynamics"] },
        { title: "Civics: Democracy", points: ["What is Democracy?", "Constitutional design", "Electoral politics"] },
        { title: "Institutions", points: ["Working of institutions", "Democratic rights", "Parliamentary procedures"] },
        { title: "Economics: Village Story", points: ["Story of Village Palampur", "Factors of production", "Farming methods"] },
        { title: "People as Resource", points: ["Economic activities", "Quality of population", "Unemployment"] },
        { title: "Poverty & Security", points: ["Poverty as a challenge", "Food security in India", "PDS system"] }
      ]
    },
    {
      subject: "English",
      tagline: "Literary Analysis",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-100",
      summary: ["Beehive Prose", "Moments Reader", "Formal Letters", "Descriptive Writing"],
      details: [
        { title: "Prose Analysis", points: ["The Fun They Had", "Sound of Music", "Little Girl"] },
        { title: "Poetry Appreciation", points: ["The Road Not Taken", "Wind", "Rain on the Roof"] },
        { title: "Supplementary Reader", points: ["The Lost Child", "Adventures of Toto", "In the Kingdom of Fools"] },
        { title: "Grammar Integrated", points: ["Gap filling", "Editing", "Omission"] },
        { title: "Writing Skills", points: ["Descriptive paragraph (Person/Place)", "Diary entry", "Story writing"] },
        { title: "Reading Skills", points: ["Discursive passages", "Case-based factual passages", "Visual interpretation"] },
        { title: "Speaking & Listening", points: ["Assessment of speaking", "Listening comprehension", "Role plays"] },
        { title: "Vocabulary", points: ["Word origins", "Literary terms", "Contextual usage"] }
      ]
    }
  ],
  "Class 10": [
    {
      subject: "Mathematics",
      tagline: "Board Exam Mastery",
      icon: Calculator,
      color: "text-blue-700",
      bg: "bg-blue-100",
      summary: ["Trigonometry", "Quadratic Eq", "Arithmetic Progression", "Circles"],
      details: [
        { title: "Real Numbers", points: ["Fundamental theorem of arithmetic", "Irrational proofs", "LCM and HCF"] },
        { title: "Polynomials", points: ["Zeroes and coefficients", "Division algorithm", "Quadratic graphs"] },
        { title: "Linear Equations", points: ["Substitution method", "Elimination method", "Word problems"] },
        { title: "Quadratic Equations", points: ["Nature of roots", "Quadratic formula", "Factorization"] },
        { title: "Arithmetic Progressions", points: ["nth term", "Sum of n terms", "AP applications"] },
        { title: "Trigonometry", points: ["Trig ratios", "Trig identities", "Heights and distances"] },
        { title: "Circles & Construction", points: ["Tangents to a circle", "Lengths of tangents", "Geometric proofs"] },
        { title: "Stats & Probability", points: ["Mean/Median/Mode of grouped data", "Ogive curves", "Events probability"] }
      ]
    },
    {
      subject: "Science",
      tagline: "Advanced Concepts",
      icon: Beaker,
      color: "text-teal-600",
      bg: "bg-teal-100",
      summary: ["Reactions", "Electricity", "Life Processes", "Light"],
      details: [
        { title: "Chemical Reactions", points: ["Types of reactions", "Balancing equations", "Corrosion/Rancidity"] },
        { title: "Acids, Bases, Salts", points: ["pH scale", "Salt families", "Chemical properties"] },
        { title: "Metals & Non-Metals", points: ["Reactivity series", "Ionic compounds", "Metallurgy"] },
        { title: "Carbon Compounds", points: ["Covalent bonding", "Saturated/Unsaturated", "Homologous series"] },
        { title: "Life Processes", points: ["Nutrition", "Respiration", "Transportation", "Excretion"] },
        { title: "Control & Coordination", points: ["Nervous system", "Hormones", "Reflex arc"] },
        { title: "Light", points: ["Reflection (Mirrors)", "Refraction (Lenses)", "Human Eye"] },
        { title: "Electricity & Magnetism", points: ["Ohm's law", "Series/Parallel", "Magnetic effects", "Motors"] }
      ]
    },
    {
      subject: "Social Science",
      tagline: "India & Contemporary World",
      icon: Globe,
      color: "text-orange-600",
      bg: "bg-orange-100",
      summary: ["Nationalism", "Resources", "Power Sharing", "Manufacturing"],
      details: [
        { title: "History: Nationalism", points: ["Nationalism in Europe", "Nationalism in India", "Making of Global World"] },
        { title: "History: Industrialization", points: ["Age of industrialization", "Print culture", "Modern world"] },
        { title: "Geography: Resources", points: ["Resource planning", "Water resources", "Agriculture types"] },
        { title: "Geography: Economy", points: ["Minerals and energy", "Manufacturing industries", "Lifelines of economy"] },
        { title: "Civics: Power", points: ["Power sharing", "Federalism", "Gender, Religion, Caste"] },
        { title: "Civics: Parties", points: ["Political parties", "Outcomes of democracy", "Challenges"] },
        { title: "Economics: Development", points: ["Development indicators", "Sectors of economy", "Money and credit"] },
        { title: "Economics: Globalization", points: ["MNCs", "Consumer rights", "Fair trade"] }
      ]
    },
    {
      subject: "English",
      tagline: "Fluency & Literature",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-100",
      summary: ["First Flight", "Footprints Without Feet", "Analytical Paragraphs"],
      details: [
        { title: "Prose (First Flight)", points: ["Letter to God", "Nelson Mandela", "Two Stories about Flying"] },
        { title: "Poetry", points: ["Dust of Snow", "Tiger in the Zoo", "The Ball Poem"] },
        { title: "Supplementary Reader", points: ["Triumph of Surgery", "The Thief's Story", "The Midnight Visitor"] },
        { title: "Reading Skills", points: ["Discursive passages", "Case-based analysis", "Vocab inference"] },
        { title: "Writing: Formal", points: ["Letter to Editor", "Complaint letter", "Enquiry letter"] },
        { title: "Writing: Analytical", points: ["Analyzing charts/graphs", "Data interpretation", "Paragraph structure"] },
        { title: "Grammar Integrated", points: ["Tenses", "Modals", "Subject-verb concord"] },
        { title: "Exam Preparation", points: ["Sample papers", "Time management", "Answer presentation"] }
      ]
    }
  ],
  "Future Tech": [
    {
      subject: "Coding Foundation",
      tagline: "Logic & Algorithms",
      icon: Code,
      color: "text-purple-600",
      bg: "bg-purple-100",
      summary: ["Logic Building", "Block Coding", "Python Intro", "Games"],
      details: [
        { title: "Digital Fundamentals", points: ["Hardware vs Software", "OS basics", "File management"] },
        { title: "Intro to Coding", points: ["Variables and loops", "Conditionals (If/Else)", "Block-based coding (Scratch)"] },
        { title: "Python Basics", points: ["Syntax intro", "Data types", "Input/Output operations"] },
        { title: "Game Logic", points: ["Sprite movement", "Collision detection", "Score keeping"] },
        { title: "Web Basics", points: ["How internet works", "Browsers vs Search engines", "URL structure"] },
        { title: "Problem Solving", points: ["Decomposition", "Pattern recognition", "Debugging simple code"] },
        { title: "Digital Art", points: ["Pixel art", "Basic animation", "Digital storytelling"] },
        { title: "Projects", points: ["Calculator app", "Interactive story", "Simple maze game"] }
      ]
    },
    {
      subject: "Web Development",
      tagline: "Build Your Presence",
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-100",
      summary: ["HTML5", "CSS3", "Responsive Design", "Live Deployment"],
      details: [
        { title: "HTML Core", points: ["Tags and attributes", "Document structure", "Lists and tables"] },
        { title: "CSS Styling", points: ["Colors and fonts", "Box model", "Margins and padding"] },
        { title: "Layouts", points: ["Flexbox basics", "Grid introduction", "Positioning elements"] },
        { title: "Responsive Design", points: ["Media queries", "Mobile-first approach", "Fluid grids"] },
        { title: "Interactivity", points: ["Hover effects", "Transitions", "Simple buttons"] },
        { title: "Web Projects", points: ["Personal portfolio", "Recipe blog", "Tribute page"] },
        { title: "Dev Tools", points: ["Inspect element", "Debugging layout", "Browser testing"] },
        { title: "Deployment", points: ["GitHub basics", "Hosting on Netlify", "Domain names"] }
      ]
    },
    {
      subject: "AI & Data Science",
      tagline: "Future Intelligence",
      icon: Zap,
      color: "text-amber-600",
      bg: "bg-amber-100",
      summary: ["AI Basics", "Machine Learning", "Data Vis", "Ethics"],
      details: [
        { title: "What is AI?", points: ["AI vs Human Intelligence", "History of AI", "Daily life applications"] },
        { title: "Machine Learning", points: ["Supervised vs Unsupervised", "Training data", "Recognizing patterns"] },
        { title: "Computer Vision", points: ["Face detection", "Image classification", "Object recognition"] },
        { title: "NLP Basics", points: ["Chatbots", "Voice assistants", "Sentiment analysis"] },
        { title: "Data Science", points: ["Data collection", "Cleaning data", "Reading charts"] },
        { title: "Data Visualization", points: ["Bar charts", "Scatter plots", "Interpreting trends"] },
        { title: "AI Ethics", points: ["Bias in AI", "Privacy concerns", "Future of work"] },
        { title: "Projects", points: ["Train a model", "Smart chatbot", "Image sorter"] }
      ]
    },
    {
      subject: "App Design",
      tagline: "Mobile Innovation",
      icon: Phone,
      color: "text-pink-600",
      bg: "bg-pink-100",
      summary: ["UI/UX", "Prototyping", "User Research", "App Logic"],
      details: [
        { title: "UI vs UX", points: ["Visual design", "User experience", "Wireframing"] },
        { title: "Design Thinking", points: ["Empathize", "Define", "Ideate", "Prototype"] },
        { title: "Prototyping Tools", points: ["Figma basics", "Creating screens", "Linking flows"] },
        { title: "User Research", points: ["User personas", "Surveys", "Usability testing"] },
        { title: "App Logic", points: ["Flowcharts", "If-then scenarios", "Data storage basics"] },
        { title: "Mobile Guidelines", points: ["Touch targets", "Navigation patterns", "Screen sizes"] },
        { title: "Visual Design", points: ["Color theory", "Typography for mobile", "Iconography"] },
        { title: "Final Project", points: ["Design a school app", "Clickable prototype", "Presentation"] }
      ]
    }
  ]
};

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
                  <input type="text" placeholder="Parent's Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                  <input type="tel" placeholder="Phone Number (WhatsApp preferred)" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-gray-500">
                    <option>Select Student's Class</option>
                    <option>Class 6</option>
                    <option>Class 7</option>
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                  </select>
                  <button className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-200 hover:shadow-xl hover:scale-[1.02] transition-all">
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

      {/* --- Parent's Peace of Mind --- */}
      <section id="parents" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">Why Parents Trust SkillSnap</h2>
              <p className="text-lg text-gray-600">We balance academic rigour with modern skills.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
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
                title: "Safe & Distraction Free",
                desc: "A secure, ad-free environment dedicated solely to learning. No social media distractions."
              },
              {
                icon: Users,
                color: "text-purple-600",
                bg: "bg-purple-100",
                title: "Progress Reports",
                desc: "Get weekly WhatsApp reports on your child's attendance, test scores, and areas of improvement."
              }
            ].map((feature, idx) => (
              <FadeIn delay={idx * 0.1} key={idx}>
                <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <feature.icon size={28} className={feature.color} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
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

          {/* Horizontal Tabs - MODIFIED FOR FIX */}
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