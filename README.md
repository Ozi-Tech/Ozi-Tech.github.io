# ekenendubueze.com — Portfolio

Personal portfolio site built with React, Tailwind CSS, and Framer Motion. Features an AI-powered chatbot using OpenAI GPT-4o-mini via Vercel serverless function.

## Tech Stack

- **Frontend**: React 18, Tailwind CSS, Framer Motion
- **Chatbot API**: Vercel Serverless Functions + OpenAI GPT-4o-mini
- **Build Tool**: Vite
- **Hosting**: Vercel

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

```

## Chatbot

The AI chatbot is rate-limited to 5 messages per session (client-side) and 20 requests per IP per hour (server-side). It uses a system prompt built from the profile data in `src/data/profile.js` to ensure accurate responses.

Monthly cost estimate at low traffic: < $0.50/month (thereabout)

## License

MIT
