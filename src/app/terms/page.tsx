import type { Metadata } from 'next';
import { InformationPage } from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: 'Terms of Service | CallMeAI',
  description: 'The service, usage, billing, intellectual property, and liability terms for CallMeAI.',
};

const sections = [
  ['Service Scope: AI Voice Receptionist Services', 'CallMeAI provides configurable AI voice receptionist capabilities, including call answering, FAQ handling, lead qualification, appointment booking, and supported CRM workflows. Service behavior depends on the configuration, integrations, and information supplied by the customer.'],
  ['Account & Usage Limitations', 'Customers are responsible for accurate account information, lawful call flows, notices and consents required in their jurisdictions, and the credentials used to access integrations. Do not use the service for unlawful, deceptive, abusive, or high-risk activity, or to make decisions that require human judgment without appropriate review.'],
  ['Payment & Billing Terms', 'Plans and usage charges are presented at the time of order or in a written commercial agreement. Customers agree to pay applicable recurring, usage-based, implementation, and third-party pass-through charges. Taxes, late payments, cancellations, and refunds are handled according to the applicable order terms.'],
  ['Intellectual Property', 'CallMeAI and its licensors retain rights in the platform, software, models, designs, and documentation. Customers retain rights in their content, scripts, brand assets, and business data. Customers grant CallMeAI the limited permissions needed to provide, secure, and support the service.'],
  ['Liability Disclaimers', 'The service is provided to support business operations, not to replace professional, legal, medical, or emergency advice. To the fullest extent permitted by law, CallMeAI is not liable for indirect, incidental, consequential, or loss-of-profit damages, and any direct liability is subject to the limits in the applicable agreement.'],
];

export default function TermsPage() {
  return (
    <InformationPage>
      <header className="mb-14 border-b border-white/10 pb-10">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#82E636]">Service agreement</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">Terms of Service</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">The operating terms for deploying CallMeAI as part of your customer communication stack.</p>
      </header>
      <div className="space-y-10">
        {sections.map(([title, body]) => (
          <section key={title}>
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-3 leading-8 text-slate-400">{body}</p>
          </section>
        ))}
      </div>
    </InformationPage>
  );
}

