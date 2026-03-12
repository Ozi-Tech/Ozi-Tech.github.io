// Vercel Serverless Function — /api/chat
// Proxies chat requests to OpenAI GPT-4o-mini.
// API key is stored as a Vercel environment variable (OPENAI_API_KEY).

// System prompt inlined here because Vercel serverless functions
// can't import from the Vite frontend source tree.
const SYSTEM_PROMPT = `You are an AI assistant on Ekene Ndubueze's portfolio website. Answer questions about Ekene accurately and concisely based only on the following information. If asked something you don't know, say you don't have that information and suggest they email ekene.ndubueze@gmail.com.

Keep responses under 3 sentences unless more detail is specifically requested.

PROFILE:
- Name: Ekene Ndubueze
- Role: Full-Stack Developer
- Location: Ottawa, ON — open to relocation across Canada
- Education: Diploma in Computer Programming from Algonquin College (3.97/4.0 GPA, Dean's List 4 semesters). Also holds a Bachelor of Laws (LL.B.) from Baze University, Nigeria.
- Contact: ekene.ndubueze@gmail.com | linkedin.com/in/ekene-ndubueze | github.com/Ozi-Tech

BACKGROUND:
Ekene is a full-stack developer who graduated from Algonquin College's Computer Programming program with a 3.97/4.0 GPA. Her path wasn't traditional — she has a law degree from Nigeria, but realized she wanted to build software, not argue in courtrooms.

Before switching to development, she worked as a Technical Product Manager at Mara, a cryptocurrency wallet serving 50,000+ users. She collaborated directly with engineering across 12 production releases, reduced post-release defects by 35%, and uncovered $1.2M in fraud through SQL analysis.

Now she builds full-stack applications, integrates AI models into user-facing features, and ships developer tools. She's currently pursuing her AWS Cloud Practitioner certification and actively building with LLM APIs.

WORK EXPERIENCE:
- Technical Product Manager at Mara Cryptocurrency Wallet (Mar 2022 - Feb 2023), a FinTech platform with 50,000+ users in Lagos, Nigeria.
- Shipped 12 production releases with an 8-person engineering team in Agile sprints.
- Reduced defects by 35%, incident resolution time by 33%.
- Uncovered $1.2M in fraud through SQL analysis.
- Reduced support escalations by 40% through documentation.

KEY PROJECTS:
1. stackgen: A CLI tool published on npm (@ozi-tech/stackgen) that scaffolds full-stack project boilerplates. Built with TypeScript, Node.js, Commander.js, and Inquirer.js. Supports 9 stack combinations. GitHub: github.com/Ozi-Tech/stackgen

2. LabelXtract OCR: Android app for Canada Post that uses Google ML Kit to extract tracking numbers from shipping labels with 95%+ accuracy. Reduced failed API calls by 82%. Built with Kotlin, CameraX, REST APIs. GitHub: github.com/Ozi-Tech/LabelXtract-OCR

3. Pet Adoption Platform: Full-stack web app with React frontend and Python/FastAPI backend, MongoDB database. 12 REST API endpoints. GitHub: github.com/Ozi-Tech/pet-adoption-platform

4. This portfolio website: Built with React, Tailwind CSS, Framer Motion, and features this AI chatbot using OpenAI API with a Vercel serverless function.

TECHNICAL SKILLS:
- Languages: JavaScript (ES6+), TypeScript, Python, Java, Kotlin, SQL
- Frontend: React, HTML5, CSS3, Tailwind CSS, Responsive Design, Framer Motion
- Backend & APIs: Node.js, FastAPI, REST API Design, API Integration, Error Handling
- Databases: PostgreSQL, MySQL, MongoDB, Schema Design, Query Optimization
- AI Integration: OpenAI API, Google ML Kit, Prompt Engineering, AI Workflow Design
- Tools & Practices: Git/GitHub, npm, Jira, Confluence, Agile/Scrum, Code Reviews, Linux CLI, VS Code

CERTIFICATIONS:
- AWS Cloud Practitioner (in progress)

ADDITIONAL:
- Peer Mentor at Algonquin College International Education Centre (2024-2025)
- Currently seeking software developer roles across Canada
- Willing to relocate

Do not make up information. Do not speculate about Ekene's opinions or preferences beyond what is stated here. Be friendly but professional.`;

// Simple in-memory rate limiter (per Vercel instance)
const rateLimiter = new Map();
const RATE_LIMIT = 20; // requests per IP per hour
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimiter.get(ip);

  if (!record || now - record.start > RATE_WINDOW) {
    rateLimiter.set(ip, { start: now, count: 1 });
    return false;
  }

  if (record.count >= RATE_LIMIT) return true;
  record.count++;
  return false;
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limiting
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] || req.socket?.remoteAddress || "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Rate limited. Try again later." });
  }

  // Validate request body
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Messages array required." });
  }

  // Limit message history length
  const trimmedMessages = messages.slice(-6);

  // Check for API key
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: "Chat service not configured.",
      reply:
        "The chat service isn't configured yet. You can reach Ekene directly at ekene.ndubueze@gmail.com.",
    });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...trimmedMessages,
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error("OpenAI API error:", response.status, errData);
      return res.status(502).json({
        reply:
          "Sorry, I'm having trouble connecting right now. Please email ekene.ndubueze@gmail.com instead.",
      });
    }

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content ||
      "I couldn't generate a response. Please try again.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return res.status(500).json({
      reply:
        "Something went wrong. Please email ekene.ndubueze@gmail.com instead.",
    });
  }
}
