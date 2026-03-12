// ─── Profile Data ────────────────────────────
// Single source of truth for all site content.
// Also used to build the chatbot system prompt.

export const profile = {
  name: "Ekene Ndubueze",
  title: "Full-Stack Developer",
  tagline:
    "I build reliable software and integrate AI into real applications.",
  location: "Ottawa, ON — open to relocation across Canada",
  email: "ekene.ndubueze@gmail.com",
  phone: "(514) 608-8765",
  linkedin: "https://linkedin.com/in/ekene-ndubueze",
  github: "https://github.com/Ozi-Tech",
  website: "https://ekenendubueze.com",
  resumePath: "/assets/ekene-ndubueze-resume.pdf",
};

export const about = [
  "I'm a full-stack developer who graduated from Algonquin College's Computer Programming program with a 3.97/4.0 GPA. My path wasn't traditional — I have a law degree from Nigeria, but realized I wanted to build software, not argue in courtrooms.",
  "Before switching to development, I worked as a Technical Product Manager at Mara, a cryptocurrency wallet serving 50,000+ users. I collaborated directly with engineering across 12 production releases, reduced post-release defects by 35%, and uncovered $1.2M in fraud through SQL analysis. That experience gave me something most junior developers don't have: production instincts.",
  "Now I build full-stack applications, integrate AI models into user-facing features, and ship developer tools. I'm currently pursuing my AWS Cloud Practitioner certification and actively building with LLM APIs.",
];

export const highlights = [
  { value: "3.97", label: "GPA", detail: "Dean's List — 4 semesters" },
  {
    value: "50K+",
    label: "Users",
    detail: "Production FinTech platform",
  },
  {
    value: "12",
    label: "Releases",
    detail: "Shipped in Agile sprints",
  },
];

export const projects = [
  {
    id: "stackgen",
    title: "stackgen",
    subtitle: "CLI Developer Tool — Published on npm",
    description:
      "Interactive CLI that scaffolds full-stack project boilerplates. Pick your frontend, backend, database, and Docker setup — get a production-ready project structure in under 60 seconds.",
    longDescription:
      "Built to solve a real problem I kept running into: spending 30+ minutes wiring up a new project with the same boilerplate every time. stackgen generates complete project scaffolding with proper connections between layers — API proxy config, database connection strings, Docker networking, environment files, and Git setup. Supports React or Vue frontends, Express or FastAPI backends, PostgreSQL or MongoDB, and optional Docker compose.",
    tech: ["TypeScript", "Node.js", "Commander.js", "Inquirer.js", "npm"],
    metrics: [
      "Published to npm as @ozi-tech/stackgen",
      "9 stack combinations with Docker support",
      "Setup time: 30+ min → under 60 seconds",
    ],
    github: "https://github.com/Ozi-Tech/stackgen",
    npm: "https://www.npmjs.com/package/@ozi-tech/stackgen",
    image: null,
    role: "Solo — designed, built, published",
    featured: true,
  },
  {
    id: "labelxtract",
    title: "LabelXtract OCR",
    subtitle: "AI-Powered Mobile App for Canada Post",
    description:
      "Android application using on-device ML to extract tracking numbers from shipping labels with 95%+ accuracy. Built the full AI pipeline from camera input through model inference to structured API submission.",
    longDescription:
      "Capstone project built for Canada Post's shipping workflow. Designed the complete pipeline: camera capture via CameraX, real-time text recognition through Google ML Kit, structured data extraction with regex and validation logic, and API submission with retry and fallback handling. Tackled real-world challenges like label variability, lighting conditions, and camera focus across different Android devices.",
    tech: [
      "Kotlin",
      "Google ML Kit",
      "CameraX",
      "REST APIs",
      "Material Design",
    ],
    metrics: [
      "95%+ OCR accuracy on standard labels",
      "82% reduction in failed API calls",
      "~8 sec processing vs ~60 sec manual entry",
    ],
    github: "https://github.com/Ozi-Tech/LabelXtract-OCR",
    npm: null,
    image: "/assets/ocr-demo.gif",
    role: "Team of 5 — ML integration lead",
    featured: true,
  },
  {
    id: "petadoption",
    title: "Pet Adoption Platform",
    subtitle: "Full-Stack Web Application",
    description:
      "End-to-end web application managing pet adoption records across shelters. React frontend with real-time filtering and search, Python/FastAPI backend with REST APIs, MongoDB data layer.",
    longDescription:
      "Built as a team project to demonstrate full-stack capability. I worked across the entire stack: designed the MongoDB schema, built CRUD endpoints in FastAPI with input validation and error handling, and implemented the React frontend with dynamic filtering by species, status, and shelter location. Used Git workflows with feature branches, PRs, and code reviews.",
    tech: ["React", "Python", "FastAPI", "MongoDB", "Axios"],
    metrics: [
      "12 RESTful API endpoints",
      "99.2% uptime during testing",
      "Real-time filtering across 500+ records",
    ],
    github: "https://github.com/Ozi-Tech/pet-adoption-platform",
    npm: null,
    image: "/assets/data-app-1.png",
    images: [
      "/assets/data-app-1.png",
      "/assets/data-app-2.png",
      "/assets/data-app-3.png",
      "/assets/data-app-4.png",
    ],
    role: "Team of 3 — full-stack development",
    featured: false,
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    subtitle: "React + Tailwind + AI Chatbot",
    description:
      "The site you're on right now. Built with React, Tailwind CSS, and Framer Motion. Features an AI-powered chatbot using the OpenAI API via serverless function with rate limiting and session management.",
    longDescription:
      "Designed and built from scratch as a single-page React application. Deployed on Vercel with a serverless API route that proxies OpenAI GPT-4o-mini calls for the chatbot, keeping the API key server-side. Implements rate limiting (5 messages per session), context-aware responses using a system prompt built from my profile data, and responsive design across all breakpoints.",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "OpenAI API",
      "Vercel Serverless",
    ],
    metrics: [
      "AI chatbot with server-side API proxy",
      "Rate-limited to control costs",
      "Custom domain with DNS migration",
    ],
    github: "https://github.com/Ozi-Tech/Ozi-Tech.github.io",
    npm: null,
    image: null,
    role: "Solo — design, development, deployment",
    featured: false,
  },
];

export const experience = [
  {
    title: "Technical Product Manager",
    company: "Mara Cryptocurrency Wallet",
    location: "Lagos, Nigeria",
    period: "Mar 2022 — Feb 2023",
    context: "FinTech platform serving 50,000+ users",
    achievements: [
      "Shipped 12 production releases collaborating with an 8-person engineering team in Agile sprints",
      "Reduced post-release defects by 35% and incident resolution time by 33%",
      "Uncovered $1.2M in fraudulent activity through SQL analysis and data investigation",
      "Produced 15+ pages of technical documentation, reducing support escalations by 40%",
    ],
    tags: ["Agile/Scrum", "SQL", "Amplitude", "Jira", "Confluence"],
  },
];

export const education = [
  {
    degree: "Diploma in Computer Programming",
    school: "Algonquin College, School of Advanced Technology",
    location: "Ottawa, ON",
    period: "Sep 2023 — Jun 2025",
    gpa: "3.97 / 4.0",
    honours: "Dean's List — 4 consecutive semesters",
    coursework:
      "OOP (Java), Data Structures & Algorithms, Database Design & SQL, Web Development, Mobile Development, Software Architecture",
  },
  {
    degree: "Bachelor of Laws (LL.B.)",
    school: "Baze University",
    location: "Abuja, Nigeria",
    period: "2015 — 2021",
    gpa: null,
    honours: null,
    coursework: null,
  },
];

export const skills = {
  "Languages": [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "Java",
    "Kotlin",
    "SQL",
  ],
  "Frontend": [
    "React",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "Framer Motion",
  ],
  "Backend & APIs": [
    "Node.js",
    "FastAPI",
    "REST API Design",
    "API Integration",
    "Error Handling",
  ],
  "Databases": [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Schema Design",
    "Query Optimization",
  ],
  "AI Integration": [
    "OpenAI API",
    "Google ML Kit",
    "Prompt Engineering",
    "AI Workflow Design",
  ],
  "Tools & Practices": [
    "Git/GitHub",
    "npm",
    "Jira",
    "Confluence",
    "Agile/Scrum",
    "Code Reviews",
    "Linux CLI",
    "VS Code",
  ],
};

export const certifications = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "In Progress",
  },
];

// ─── Chatbot System Prompt ───────────────────
// Built from the data above so the chatbot stays accurate.

export const chatbotSystemPrompt = `You are an AI assistant on Ekene Ndubueze's portfolio website. Answer questions about Ekene accurately and concisely based only on the following information. If asked something you don't know, say you don't have that information and suggest they email ${profile.email}.

Keep responses under 3 sentences unless more detail is specifically requested.

PROFILE:
- Name: ${profile.name}
- Role: ${profile.title}
- Location: ${profile.location}
- Education: Diploma in Computer Programming from Algonquin College (3.97/4.0 GPA, Dean's List 4 semesters). Also holds a Bachelor of Laws (LL.B.) from Baze University, Nigeria.
- Contact: ${profile.email} | ${profile.linkedin} | ${profile.github}

BACKGROUND:
${about.join(" ")}

WORK EXPERIENCE:
- Technical Product Manager at Mara Cryptocurrency Wallet (Mar 2022 - Feb 2023), a FinTech platform with 50,000+ users in Lagos, Nigeria.
- Shipped 12 production releases with an 8-person engineering team in Agile sprints.
- Reduced defects by 35%, incident resolution time by 33%.
- Uncovered $1.2M in fraud through SQL analysis.
- Reduced support escalations by 40% through documentation.

KEY PROJECTS:
1. stackgen: A CLI tool published on npm (@ozi-tech/stackgen) that scaffolds full-stack project boilerplates. Built with TypeScript, Node.js, Commander.js, and Inquirer.js. Supports 9 stack combinations. GitHub: ${projects[0].github}

2. LabelXtract OCR: Android app for Canada Post that uses Google ML Kit to extract tracking numbers from shipping labels with 95%+ accuracy. Reduced failed API calls by 82%. Built with Kotlin, CameraX, REST APIs. GitHub: ${projects[1].github}

3. Pet Adoption Platform: Full-stack web app with React frontend and Python/FastAPI backend, MongoDB database. 12 REST API endpoints. GitHub: ${projects[2].github}

4. This portfolio website: Built with React, Tailwind CSS, Framer Motion, and features this AI chatbot using OpenAI API with a Vercel serverless function.

TECHNICAL SKILLS:
${Object.entries(skills)
  .map(([cat, items]) => `- ${cat}: ${items.join(", ")}`)
  .join("\n")}

CERTIFICATIONS:
- AWS Cloud Practitioner (in progress)

ADDITIONAL:
- Peer Mentor at Algonquin College International Education Centre (2024-2025)
- Currently seeking software developer roles across Canada
- Willing to relocate

Do not make up information. Do not speculate about Ekene's opinions or preferences beyond what is stated here. Be friendly but professional.`;
