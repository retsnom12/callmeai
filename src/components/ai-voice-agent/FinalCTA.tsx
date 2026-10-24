'use client';

import { useEffect, useRef, useState } from 'react';

const metrics = [
  { value: '68%', label: 'Average Operational Cost Savings' },
  { value: '10+', label: 'Active Deployments' },
  { value: '99.9%', label: 'Uptime & Availability' },
];

function randomMetricValue(value: string) {
  return value.replace(/\d/g, () => Math.floor(Math.random() * 10).toString());
}

export function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const timersRef = useRef<number[]>([]);
  const [displayValues, setDisplayValues] = useState(metrics.map((metric) => metric.value));
  const [isSpinning, setIsSpinning] = useState(false);
  const [animationRun, setAnimationRun] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const runSlotAnimation = () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current = [];
      setIsSpinning(true);
      setAnimationRun((current) => current + 1);

      const spinTimer = window.setInterval(() => {
        setDisplayValues(metrics.map((metric) => randomMetricValue(metric.value)));
      }, 80);

      const stopTimer = window.setTimeout(() => {
        window.clearInterval(spinTimer);
        setDisplayValues(metrics.map((metric) => metric.value));
        setIsSpinning(false);
      }, 900);

      timersRef.current.push(spinTimer, stopTimer);
    };

    let hasEntered = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEntered) {
          hasEntered = true;
          runSlotAnimation();
        } else if (!entry.isIntersecting) {
          hasEntered = false;
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const mailtoLink = encodeURI(
    'mailto:contact.callmeai@gmail.com?subject=Inquiry: CallMeAI Demo&body=Hello,%0D%0A%0D%0AI am interested in deploying CallMeAI for my business.%0D%0A%0D%0APlease provide information about:%0D%0A-%20Custom demo%20with%20our%20use%20case%0D%0A-%20Integration%20timeline%0D%0A-%20Pricing%20and%20options%0D%0A%0D%0AThank%20you,'
  );

  return (
    <section ref={sectionRef} id="contact" className="relative scroll-mt-16 overflow-hidden bg-transparent px-4 py-20 sm:px-8 sm:py-24">
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Make every conversation <em className="font-serif font-normal italic text-[#82E636]">count.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
          Tell us about your call flow and we will map the right setup.
        </p>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="text-center">
              <p
                key={`${animationRun}-${index}`}
                className={`font-mono text-4xl font-bold tracking-tight text-[#82E636] sm:text-5xl ${
                  isSpinning ? 'animate-[slotRoll_80ms_linear_infinite] will-change-[transform,opacity]' : ''
                }`}
                aria-live="polite"
              >
                {displayValues[index]}
              </p>
              <p className="mx-auto mt-3 max-w-48 text-sm leading-relaxed text-slate-400">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-5">
          <a
            href="mailto:contact.callmeai@gmail.com"
            className="inline-flex items-center gap-3 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            <span className="h-3 w-3 rounded-none bg-[#82E636] shadow-[0_0_15px_#82E636]" aria-hidden="true" />
            contact.callmeai@gmail.com
          </a>
          <a
            href={mailtoLink}
            className="inline-flex items-center justify-center rounded-lg bg-[#82E636] px-8 py-4 font-semibold text-[#06110d] shadow-[0_0_24px_rgba(130,230,54,0.25)] transition hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#92F547,#6ECE2B)] hover:shadow-[0_0_32px_rgba(130,230,54,0.35)]"
          >
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
}
