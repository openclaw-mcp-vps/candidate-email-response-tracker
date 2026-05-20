export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          For Recruiters &amp; Hiring Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Which Recruiting Emails
          <span className="text-[#58a6ff]"> Actually Get Replies</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your email, track every template's response rate, and double down on what works. Stop guessing — start optimizing.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $12/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["3x", "Higher reply rates"],
            ["100%", "Template visibility"],
            ["Real-time", "Analytics dashboard"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$12<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to optimize outreach</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited email templates",
              "Response rate analytics",
              "Email provider integration",
              "Performance dashboard",
              "Weekly digest reports",
              "Priority support"
            ].map(feature => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "Which email providers are supported?",
              "ReplyTrack integrates with Gmail and Outlook via OAuth. More providers are on the roadmap."
            ],
            [
              "How does response tracking work?",
              "We monitor your sent emails and match incoming replies to the original template used, then calculate response rates per template automatically."
            ],
            [
              "Is my email data secure?",
              "Yes. We only read metadata and subject lines needed for tracking. Your email content is never stored on our servers."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ReplyTrack. All rights reserved.
      </footer>
    </main>
  )
}
