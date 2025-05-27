# AgentSync - AI Multi-Agent Dashboard

AgentSync is a multi-agent AI platform designed to automate and assist with a variety of tasks such as email summarization, calendar planning, video summarization, chat assistance, and social media analytics. This dashboard integrates intelligent agents to enhance productivity and streamline user interactions.

## 🚀 Features

- 📬 **Email Assistant** - Summarize, plan, and respond to emails automatically.
- 📅 **Calendar Planner** - Organize your schedule and get smart meeting suggestions.
- 📺 **YouTube Summarizer** - Get quick summaries and recommendations of YouTube videos.
- 💬 **Chat Assistant** - Your personal AI assistant for general queries.
- 🐦 **Twitter Analyzer** - Track trends and summarize your Twitter feed.
- 📸 **Instagram Helper** - Content suggestions and engagement analytics.

## 🛠 Tech Stack

- Frontend: Next.js, Tailwind CSS
- Backend: Node.js, Express (optional), API integrations
- AI: OpenAI API / Langchain / Custom LLM Agents
- Hosting: Vercel

![image](https://github.com/user-attachments/assets/459bd61d-9e21-48fa-a498-cbc5a134845f)

## 🔧 Installation & Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/agent-sync-ai-dashboard.git
cd agent-sync-ai-dashboard

# 2. Install dependencies
npm install

# 3. Create .env.local file in the root directory and add the following:
# Example:
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# 4. Run the development server
npm run dev

# 5. Visit the app in your browser
http://localhost:3000

OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
# Run the development server
npm run dev

# Visit in browser
http://localhost:3000

/pages
  index.tsx
  /agent
    email-agent.tsx
    calendar-agent.tsx
    ...
/components
/utils
/styles

