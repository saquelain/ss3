import { 
  Zap,
  Code,
  Globe,
  Beaker,
  Calculator,
  PenTool,
  Phone,
} from 'lucide-react';


// --- Data: Curriculum with Details ---
export const CURRICULUM_DATA: Record<string, any> = {
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