import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shaurya Rohatgi - LLM Researcher & AI Scientist",
  description: "Shaurya Rohatgi - Applied Scientist specializing in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) systems, and AI for scientific discovery. PhD in Informatics with expertise in search engines and information retrieval.",
  keywords: "LLM researcher, AI for science, RAG systems, retrieval-augmented generation, academic search, fine-tuning, agentic frameworks, information retrieval, search engines",
  generator: 'v0.dev',
  authors: [{ name: 'Shaurya Rohatgi' }],
  openGraph: {
    title: 'Shaurya Rohatgi - LLM Researcher & AI Scientist',
    description: 'Applied Scientist with expertise in LLMs, RAG systems, and AI for scientific applications',
    url: 'https://shaurya.ai',
    siteName: 'Shaurya Rohatgi',
    images: [
      {
        url: 'https://shaurya.ai/assets/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Shaurya Rohatgi - LLM Researcher & AI Scientist',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaurya Rohatgi - LLM Researcher & AI Scientist',
    description: 'Applied Scientist with expertise in LLMs, RAG systems, and AI for scientific applications',
    images: ['https://shaurya.ai/assets/profile.jpg'],
    creator: '@shauryr'
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}



import './globals.css'