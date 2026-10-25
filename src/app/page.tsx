import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/ai-voice-agent/HeroSection';
import { AudioDemoCard } from '@/components/ai-voice-agent/AudioDemoCard';
import { FeaturesGrid } from '@/components/ai-voice-agent/FeaturesGrid';
import { HowItWorks } from '@/components/ai-voice-agent/HowItWorks';
import { FinalCTA } from '@/components/ai-voice-agent/FinalCTA';
import { PricingSection } from '@/components/ai-voice-agent/PricingSection';
import { SmoothScrollLink } from '@/components/ai-voice-agent/SmoothScrollLink';

export const metadata: Metadata = {
  title: 'CallMeAI | The 24/7 AI Receptionist',
  description:
    'CallMeAI gives high-growth businesses a reliable 24/7 AI receptionist for customer calls, lead qualification, and appointment booking.',
  keywords: [
    'AI voice agent',
    'call center automation',
    'AI phone system',
    'inbound call handling',
    'outbound lead qualification',
    'appointment scheduling',
    'CRM integration',
    'voice recognition',
  ],
  openGraph: {
    title: 'CallMeAI | The 24/7 AI Receptionist',
    description:
      'Deploy human-like 24/7 AI voice agents to handle inbound customer calls, answer FAQs, and automatically book appointments to your CRM without missed opportunities.',
    url: 'https://aicallcenter.all-tools.dev/',
    siteName: 'CallMeAI',
    type: 'website',
    images: [
      {
        url: '/favicon.svg',
        width: 1200,
        height: 630,
        alt: 'CallMeAI AI receptionist service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CallMeAI | The 24/7 AI Receptionist',
    description:
      'A reliable 24/7 AI receptionist for customer calls, lead qualification, and appointment booking.',
    images: ['/favicon.svg'],
  },
  alternates: {
    canonical: 'https://aicallcenter.all-tools.dev/',
  },
};

export default function AIVoiceAgentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://aicallcenter.all-tools.dev/#service',
    name: 'CallMeAI',
    url: 'https://aicallcenter.all-tools.dev/',
    description:
      'A 24/7 AI receptionist for inbound customer calls, FAQ handling, lead qualification, and CRM appointment booking.',
    serviceType: 'AI voice agent and call center automation',
    provider: {
      '@type': 'Organization',
      name: 'CallMeAI',
      url: 'https://aicallcenter.all-tools.dev/',
    },
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      url: 'https://aicallcenter.all-tools.dev/#contact',
      description: 'Custom AI voice agent implementation quote available on request.',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <div id="top" className="min-h-full bg-[#090d16] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#090d16]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
          <SmoothScrollLink href="#top" className="flex items-center gap-2 text-sm font-bold tracking-[0.16em] text-white">
            <svg
              viewBox="0 0 32 32"
              className="h-5 w-5 text-[#82E636] drop-shadow-[0_0_5px_rgba(130,230,54,0.7)]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m16 4 11 6.25v11.5L16 28 5 21.75v-11.5L16 4Z"
                stroke="currentColor"
                strokeWidth="2.35"
                strokeLinejoin="round"
              />
              <path
                d="m16 9 6.5 3.75v6.5L16 23l-6.5-3.75v-6.5L16 9Z"
                stroke="currentColor"
                strokeWidth="2.15"
                strokeLinejoin="round"
              />
              <path
                d="M16 4v5M27 10.25l-4.5 2.5M27 21.75l-4.5-2.5M16 28v-5M5 21.75l4.5-2.5M5 10.25l4.5 2.5"
                stroke="currentColor"
                strokeWidth="2.15"
                strokeLinecap="butt"
                strokeLinejoin="round"
              />
            </svg>
            CALLMEAI
          </SmoothScrollLink>
          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <SmoothScrollLink className="transition hover:text-white" href="#overview">Overview</SmoothScrollLink>
            <SmoothScrollLink className="transition hover:text-white" href="#features">Features</SmoothScrollLink>
            <SmoothScrollLink className="transition hover:text-white" href="#process">Process</SmoothScrollLink>
            <SmoothScrollLink className="transition hover:text-white" href="#pricing">Pricing</SmoothScrollLink>
            <SmoothScrollLink className="transition hover:text-white" href="#contact">Contact</SmoothScrollLink>
          </div>
        </div>
      </nav>
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Audio Demo Card */}
        <AudioDemoCard />

        {/* Features Grid */}
        <FeaturesGrid />

        {/* How It Works */}
        <HowItWorks />

        <PricingSection />

        {/* Final CTA Section */}
        <FinalCTA />

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#090d16] px-4 py-12 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Product
                </h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <SmoothScrollLink href="#features" className="text-sm text-slate-300 transition hover:text-[#82E636]">
                      Features
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink href="#overview" className="text-sm text-slate-300 transition hover:text-[#82E636]">
                      Overview
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink href="#process" className="text-sm text-slate-300 transition hover:text-[#82E636]">
                      How It Works
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink href="#pricing" className="text-sm text-slate-300 transition hover:text-[#82E636]">
                      Pricing
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink href="#overview" className="text-sm text-slate-300 transition hover:text-[#82E636]">
                      Integrations
                    </SmoothScrollLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Company
                </h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <SmoothScrollLink href="#top" className="text-sm text-slate-300 transition hover:text-[#82E636]">
                      About CallMeAI
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink href="#features" className="text-sm text-slate-300 transition hover:text-[#82E636]">
                      Why Choose Us
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <Link href="/faq" className="text-sm text-slate-300 transition hover:text-[#82E636]">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <SmoothScrollLink href="#contact" className="text-sm text-slate-300 transition hover:text-[#82E636]">
                      Book a Demo
                    </SmoothScrollLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Legal
                </h2>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="/privacy" className="text-sm text-slate-300 transition hover:text-[#82E636]">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm text-slate-300 transition hover:text-[#82E636]">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-sm text-slate-300 transition hover:text-[#82E636]">
                      Data Security &amp; Privacy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Contact
                </h2>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="mailto:contact.callmeai@gmail.com"
                      className="text-sm text-slate-300 transition hover:text-[#82E636]"
                    >
                      contact.callmeai@gmail.com
                    </a>
                  </li>
                  <li>
                    <SmoothScrollLink
                      href="#contact"
                      className="inline-flex text-sm font-semibold text-slate-200 transition hover:text-[#82E636]"
                    >
                      Talk to Sales
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink
                      href="#contact"
                      className="inline-flex rounded-full border border-[#82E636]/40 bg-[#82E636]/10 px-3 py-1.5 text-xs font-semibold text-[#82E636] transition hover:border-[#82E636] hover:bg-[#82E636]/20"
                    >
                      Request Free 3-Min Demo Agent
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <span className="text-xs text-slate-500">Response within 24 hours</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-800 pt-8">
              <p className="text-center text-sm text-slate-400">
                © 2026 CallMeAI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
