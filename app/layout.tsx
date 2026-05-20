import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReplyTrack — Track Which Recruiting Emails Get Responses',
  description: 'Analyze recruiting email templates and track response rates to optimize your outreach. Built for recruiters and hiring managers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1a57f9d7-b01e-4f5e-ab82-77283a8cd24f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
