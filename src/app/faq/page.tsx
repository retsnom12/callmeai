import type { Metadata } from 'next';
import { InformationPage } from '@/components/SiteChrome';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'FAQ | CallMeAI',
  description: 'Answers to common questions about deploying and operating CallMeAI.',
};

export default function FAQPage() {
  return (
    <InformationPage>
      <header className="mb-14 border-b border-white/10 pb-10">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#82E636]">Answers for operators</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">Frequently Asked Questions</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">The practical details behind deploying a dependable AI receptionist for your business.</p>
      </header>
      <FAQAccordion />
    </InformationPage>
  );
}
