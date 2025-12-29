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
      subject: "Mathematics: Building Strong Maths Foundations the Fun Way",
      tagline: "Building Strong Maths Foundations the Fun Way",
      icon: Calculator,
      color: "text-blue-700",
      bg: "bg-blue-100",
      summary: [
        "Strong Number Sense",
        "Conceptual Understanding",
        "Problem-Solving Skills",
        "Geometry & Visualization",
        "Algebraic Thinking",
        "Data Handling & Logical Thinking",
        "Consistent Practice",
        "Fun & Engaging Methods"
      ],
      details: [
        {
          title: "Strong Number Sense",
          points: [
            "Master place value, integers, fractions, and decimals",
            "Develops mental math and calculation accuracy",
            "Build confidence in basic operations"
          ]
        },
        {
          title: "Conceptual Understanding",
          points: [
            "Focus on why formulas work, not just memorizing",
            "Use real-life examples to relate concepts",
            "Grasp ratios, proportions, and percentages practically"
          ]
        },
        {
          title: "Problem-Solving Skills",
          points: [
            "Step-by-step approach for word problems",
            "Break complex problems into manageable parts",
            "Fun puzzles and challenges to strengthen logic"
          ]
        },
        {
          title: "Geometry & Visualization",
          points: [
            "Learn lines, angles, shapes, and symmetry",
            "Hands-on activities: drawing, measuring, and modeling",
            "Apply area, perimeter, and volume in practical contexts"
          ]
        },
        {
          title: "Algebraic Thinking",
          points: [
            "Introduction to variables and simple equations",
            "Identify patterns and relationships",
            "Apply algebra in everyday problems"
          ]
        },
        {
          title: "Data Handling & Logical Thinking",
          points: [
            "Interpret bar graphs, pictographs, and charts",
            "Learn basic mean, median, and mode",
            "Develop critical thinking and analytical skills"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Daily exercises and quizzes to reinforce learning",
            "Mix of numerical, word, and real-life problems",
            "Track progress and celebrate milestones"
          ]
        },
        {
          title: "Fun & Engaging Methods",
          points: [
            "Graphics, interactive quizzes, and gamified learning",
            "Collaborative group activities and peer discussions",
            "Learning through exploration and experimentation"
          ]
        }
      ]
    },

    {
      subject: "English: English Made Easy, Engaging, and Effective",
      tagline: "English Made Easy, Engaging, and Effective",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-100",
      summary: [
        "Strong Vocabulary",
        "Grammar Mastery",
        "Reading Comprehension",
        "Writing Skills",
        "Listening & Speaking Skills",
        "Literature & Text Analysis",
        "Consistent Practice",
        "Fun & Interactive Learning"
      ],
      details: [
        {
          title: "Strong Vocabulary",
          points: [
            "Learn new words and their meanings contextually",
            "Use words effectively in sentences and writing",
            "Develop spelling, synonyms, antonyms, and word formation skills"
          ]
        },
        {
          title: "Grammar Mastery",
          points: [
            "Understand parts of speech, tenses, and sentence structure",
            "Learn punctuation, subject-verb agreement, and voice",
            "Apply grammar rules in writing and speaking confidently"
          ]
        },
        {
          title: "Reading Comprehension",
          points: [
            "Develop skills to understand and interpret texts",
            "Practice skimming, scanning, and critical reading",
            "Answer comprehension questions with accuracy"
          ]
        },
        {
          title: "Writing Skills",
          points: [
            "Practice paragraph writing, letters, and essays",
            "Develop creative writing, storytelling, and descriptive skills",
            "Focus on clarity, coherence, and correct grammar"
          ]
        },
        {
          title: "Listening & Speaking Skills",
          points: [
            "Enhance pronunciation, intonation, and clarity",
            "Practice conversational English and presentations",
            "Listening comprehension and response exercises"
          ]
        },
        {
          title: "Literature & Text Analysis",
          points: [
            "Explore poems, stories, and plays from the curriculum",
            "Learn to analyze characters, plots, and themes",
            "Develop appreciation for language and literary devices"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Daily exercises for vocabulary, grammar, and writing",
            "Regular reading and comprehension practice",
            "Quizzes and assessments to track progress"
          ]
        },
        {
          title: "Fun & Interactive Learning",
          points: [
            "Gamified exercises for vocabulary and grammar",
            "Role-plays, storytelling, and creative writing activities",
            "Interactive worksheets, quizzes, and multimedia resources"
          ]
        }
      ]
    },

    {
      subject: "Interactive Science: Explore, Experiment, Excel in Science",
      tagline: "Explore, Experiment, Excel in Science",
      icon: Beaker,
      color: "text-teal-600",
      bg: "bg-teal-100",
      summary: [
        "Conceptual Understanding",
        "Hands-On Visual Experiments",
        "Critical Thinking & Problem Solving",
        "Scientific Inquiry & Exploration",
        "Application & Real-World Connections",
        "Reading & Research Skills",
        "Consistent Practice",
        "Fun & Interactive Learning"
      ],
      details: [
        {
          title: "Conceptual Understanding",
          points: [
            "Learn the fundamentals of Physics, Chemistry, and Biology",
            "Understand scientific concepts, not just memorize facts",
            "Connect theory with real-life examples"
          ]
        },
        {
          title: "Hands-On Visual Experiments",
          points: [
            "Conduct experiments to see concepts in action",
            "Learn through observation, analysis, and discovery",
            "Safe and guided practical activities"
          ]
        },
        {
          title: "Critical Thinking & Problem Solving",
          points: [
            "Develop logical reasoning and analytical skills",
            "Solve scientific problems step by step",
            "Encourage curiosity and asking “why”"
          ]
        },
        {
          title: "Scientific Inquiry & Exploration",
          points: [
            "Learn to ask questions, form hypotheses, and test them",
            "Explore concepts through projects and experiments",
            "Develop research and investigative skills"
          ]
        },
        {
          title: "Application & Real-World Connections",
          points: [
            "Relate science to everyday life and technology",
            "Understand how science impacts the world around us",
            "Apply learning in practical scenarios"
          ]
        },
        {
          title: "Reading & Research Skills",
          points: [
            "Read scientific texts and interpret information",
            "Summarize and present findings clearly",
            "Build independent learning habits"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Daily exercises, quizzes, and mini-experiments",
            "Reinforce learning through revision and application",
            "Track progress and celebrate achievements"
          ]
        },
        {
          title: "Fun & Interactive Learning",
          points: [
            "Gamified experiments, simulations, and multimedia content",
            "Collaborative projects and peer discussions",
            "Learning science through curiosity and exploration"
          ]
        }
      ]
    },

    {
      subject: "Exploratory Social Studies: Discover, Analyze, and Connect with the World",
      tagline: "Discover, Analyze, and Connect with the World",
      icon: Globe,
      color: "text-orange-600",
      bg: "bg-orange-100",
      summary: [
        "Understanding Society & Culture",
        "Geography & Environment",
        "Civics & Governance",
        "History & Timeline Exploration",
        "Research & Critical Thinking",
        "Application & Real-World Connections",
        "Consistent Practice",
        "Fun & Interactive Learning"
      ],
      details: [
        {
          title: "Understanding Society & Culture",
          points: [
            "Learn about communities, traditions, and cultural practices",
            "Explore history, heritage, and diversity",
            "Connect past events to present-day society"
          ]
        },
        {
          title: "Geography & Environment",
          points: [
            "Study maps, landforms, climate, and ecosystems",
            "Understand human-environment interaction",
            "Explore local and global geography through interactive activities"
          ]
        },
        {
          title: "Civics & Governance",
          points: [
            "Learn about government, democracy, and citizen responsibilities",
            "Understand laws, rights, and duties",
            "Explore social issues and civic engagement"
          ]
        },
        {
          title: "History & Timeline Exploration",
          points: [
            "Discover historical events and timelines",
            "Analyze causes, effects, and significance of events",
            "Learn to critically evaluate sources and evidence"
          ]
        },
        {
          title: "Research & Critical Thinking",
          points: [
            "Conduct small projects and investigations",
            "Develop analytical and reasoning skills",
            "Interpret data, charts, and historical texts"
          ]
        },
        {
          title: "Application & Real-World Connections",
          points: [
            "Relate lessons to real-world scenarios and current events",
            "Learn practical life skills through social understanding",
            "Understand global perspectives and local relevance"
          ]
        },
        {
          title: "Consistent Practice",
          points: [
            "Daily exercises, quizzes, and map activities",
            "Reinforce knowledge through review and reflection",
            "Track learning milestones and achievements"
          ]
        },
        {
          title: "Fun & Interactive Learning",
          points: [
            "Gamified activities, simulations, and role-playing exercises",
            "Collaborative projects and discussions",
            "Learning through exploration, storytelling, and interactive content"
          ]
        }
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