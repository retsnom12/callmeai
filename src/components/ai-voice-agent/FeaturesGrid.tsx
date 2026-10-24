'use client';

import { useEffect, useRef, useState } from 'react';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Inbound Answering & FAQ',
    description: 'Answer common questions and route callers without a queue.',
  },
  {
    title: 'Calendar & CRM Integration',
    description: 'Keep appointments and customer records in sync with your existing tools.',
  },
  {
    title: 'Smart Outbound Qualification',
    description: 'Qualify leads, detect voicemail, and respect opt-outs consistently.',
  },
  {
    title: 'Human-Like Latency',
    description: 'Natural turn-taking powered by a low-latency voice stack.',
  },
];

export function FeaturesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleFeatures, setVisibleFeatures] = useState(0);
  const [sequence, setSequence] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let hasEntered = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEntered) {
          hasEntered = true;
          setVisibleFeatures(0);
          setSequence((current) => current + 1);
        } else if (!entry.isIntersecting) {
          hasEntered = false;
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (sequence === 0) return;

    const interval = window.setInterval(() => {
      setVisibleFeatures((current) => {
        if (current >= features.length) {
          window.clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, 560);

    return () => window.clearInterval(interval);
  }, [sequence]);

  return (
    <section ref={sectionRef} id="features" className="relative scroll-mt-16 overflow-hidden bg-transparent px-4 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#82E636]">Operational detail</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built for the calls that <em className="font-serif font-normal italic text-[#82E636]">matter</em>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl px-2 py-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2 md:gap-x-24 md:gap-y-20" role="tablist" aria-label="Feature stream">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`text-left transition-opacity duration-300 will-change-transform ${
                  visibleFeatures > index ? 'opacity-100' : 'opacity-35'
                }`}
              >
                <span className="flex items-start gap-4">
                  <span className={`relative mt-2 flex h-4 w-4 shrink-0 will-change-transform ${
                    visibleFeatures === index + 1 ? 'animate-pulse' : ''
                  }`}>
                    <span className="absolute inline-flex h-full w-full bg-[#82E636] opacity-40 blur-[2px]" />
                    <span className="relative inline-flex h-4 w-4 rounded-none bg-[#82E636] shadow-[0_0_15px_#82E636]" />
                  </span>
                  <span className="min-w-0">
                    <span
                      key={`${sequence}-${index}`}
                      className={`block font-mono text-lg font-bold tracking-tight text-white sm:text-xl ${
                        visibleFeatures > index
                          ? 'animate-[featureType_400ms_steps(32,end)] overflow-hidden whitespace-nowrap will-change-[max-width,opacity]'
                          : 'opacity-0'
                      }`}
                    >
                      {feature.title}
                    </span>
                    <span
                      className={`mt-3 block leading-relaxed text-slate-400 ${
                        visibleFeatures > index ? 'animate-[featureReveal_300ms_ease-out_100ms_both] will-change-[transform,opacity]' : 'opacity-0'
                      }`}
                    >
                      {feature.description}
                    </span>
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
