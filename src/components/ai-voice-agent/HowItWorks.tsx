'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Design Your AI Agent',
    description: 'Define the voice, workflow, and rules for your use case.',
  },
  {
    number: '02',
    title: 'Integrate & Configure',
    description: 'Connect your phone system, CRM, and data sources.',
  },
  {
    number: '03',
    title: 'Go Live & Scale',
    description: 'Launch, monitor, and improve the agent with your team.',
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [sequence, setSequence] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let hasEntered = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEntered) {
          hasEntered = true;
          setVisibleSteps(0);
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
      setVisibleSteps((current) => {
        if (current >= steps.length) {
          window.clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, 560);

    return () => window.clearInterval(interval);
  }, [sequence]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative scroll-mt-16 overflow-hidden bg-transparent px-4 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#82E636]">
            A considered rollout
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From brief to <em className="font-serif font-normal italic text-[#82E636]">live</em> agent
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-[16.666%] right-[16.666%] top-2 hidden h-px bg-white/10 md:block"
            aria-hidden="true"
          />
          <div
            key={sequence}
            className={`absolute left-[16.666%] top-2 hidden h-px bg-[#82E636] shadow-[0_0_12px_#82E636] md:block ${
              sequence > 0 ? 'animate-[roadmapFlow_1500ms_ease-out_forwards] will-change-[width]' : 'w-0'
            }`}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-12">
            {steps.map((step, index) => {
              const isVisible = visibleSteps > index;

              return (
                <article
                  key={step.number}
                  className={`relative text-center transition-all duration-400 ease-out will-change-transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <div className="flex justify-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-none border text-xs font-bold transition-all duration-300 ease-out will-change-[background-color,box-shadow,color] ${
                        isVisible
                          ? 'border-[#82E636] bg-[#82E636] text-[#090d16] shadow-[0_0_18px_#82E636]'
                          : 'border-white/20 bg-transparent text-slate-500'
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>
                  <h3
                    className={`mt-7 text-xl font-bold tracking-tight text-white transition-all duration-400 ease-out will-change-[transform,opacity] sm:text-2xl ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-3 leading-relaxed text-slate-400 transition-all delay-75 duration-400 ease-out will-change-[transform,opacity] ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'
                    }`}
                  >
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
