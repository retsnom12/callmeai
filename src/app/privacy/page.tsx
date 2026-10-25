import type { Metadata } from 'next';
import { InformationPage } from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: 'Privacy Policy | CallMeAI',
  description: 'How CallMeAI handles voice recordings, transcripts, call data, and user rights.',
};

const sections = [
  {
    title: 'Data Collection: Voice Recordings & Transcripts',
    body: 'When enabled by a customer, CallMeAI processes voice recordings, call transcripts, caller-provided details, and business instructions to provide AI receptionist services. We collect only the information needed to answer calls, qualify opportunities, schedule appointments, and improve service reliability.',
  },
  {
    title: 'Call Data Retention',
    body: 'Customers control retention settings for recordings and transcripts. Data is retained only for the period needed to deliver the service, meet documented business instructions, resolve support requests, or comply with legal obligations. We support deletion requests and configurable retention windows where available.',
  },
  {
    title: 'Third-Party AI Sub-processors',
    body: 'We may use carefully selected infrastructure, telephony, scheduling, CRM, and AI technology providers to operate the service. Sub-processors receive only the data necessary for their contracted function, are bound by confidentiality and security obligations, and are reviewed as part of our vendor management process.',
  },
  {
    title: 'Security Standards',
    body: 'CallMeAI applies access controls, encryption in transit, least-privilege operational practices, monitoring, and secure service configuration to protect customer data. Security controls are continuously reviewed as the service and applicable enterprise requirements evolve.',
  },
  {
    title: 'User Rights',
    body: 'Depending on your location and role, you may have rights to access, correct, export, restrict, or delete personal information, and to object to certain processing. Contact us at contact.callmeai@gmail.com with a description of your request and we will coordinate with the relevant customer where CallMeAI processes data on its behalf.',
  },
];

export default function PrivacyPage() {
  return (
    <InformationPage>
      <header className="mb-14 border-b border-white/10 pb-10">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#82E636]">Trust &amp; governance</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">Privacy Policy</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">A clear overview of how CallMeAI protects the information entrusted to its AI voice operations.</p>
      </header>
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            <p className="mt-3 leading-8 text-slate-400">{section.body}</p>
          </section>
        ))}
      </div>
    </InformationPage>
  );
}

