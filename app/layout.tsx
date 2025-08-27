import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Visual Notetaker",
    "one_liner": "Transform your screenshots into shareable insights with context.",
    "why_now": "Remote work and digital communication have surged, creating a need for efficient information sharing.",
    "novel_mechanism": "Combines OCR with natural language processing to summarize and categorize extracted text.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision",
      "Agents"
    ],
    "edge_use_cases": [
      "Team collaboration tools",
      "Personal productivity app"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Screenshot upload",
        "Automatic summarization",
        "Shareable link generation"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Stripe"
      ],
      "data_bootstrap": [
        "public dataset of documents",
        "synthetic via LLM"
      ],
      "risk": [
        "Limited OCR accuracy",
        "User adoption challenges"
      ],
      "mitigation": [
        "Implement user feedback loops",
        "Focus on core use cases initially"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Before/After demo showing increased productivity",
        "Pattern interrupt with unconventional use cases"
      ],
      "channels": [
        "ProductHunt",
        "Twitter",
        "Discord"
      ],
      "pricing": {
        "free": "Basic features with ads",
        "pro": "$9.99/month for advanced features",
        "business": "$99/month for team collaboration tools"
      }
    },
    "moat": [
      "Data network effect",
      "Early adopters lead to word-of-mouth distribution"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 8,
      "defensibility": 6
    },
    "total_score": 29,
    "reasoning": "This product leverages a unique combination of AI technologies to enhance the utility of screenshots, solving a common pain point that current tools don't address effectively."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}