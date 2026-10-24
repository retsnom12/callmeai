'use client';

import { useState } from 'react';

const benefits = [
  {
    title: 'Instant 24/7 Response',
    description: 'Every caller gets a helpful answer in seconds, even when your office is closed.',
  },
  {
    title: 'Zero Missed Opportunities',
    description: 'Qualify intent and capture the next step instead of sending a valuable lead to voicemail.',
  },
  {
    title: 'Direct Calendar Booking',
    description: 'Turn a late-night conversation into a confirmed appointment in your calendar or CRM.',
  },
];

export function AudioDemoCard() {
  const [deck, setDeck] = useState([0, 1, 2]);
  const [isAdvancing, setIsAdvancing] = useState(false);

  const advanceDeck = () => {
    if (isAdvancing) return;

    setIsAdvancing(true);
    window.setTimeout(() => {
      setDeck((currentDeck) => [...currentDeck.slice(1), currentDeck[0]]);
      setIsAdvancing(false);
    }, 280);
  };

  return (
    <section id="value-prop" className="relative scroll-mt-16 overflow-hidden bg-[#0b111d] px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,1fr)_22rem] md:gap-16">
        <div className="max-w-3xl text-center md:text-left">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#82E636]">
            The missed-call tax
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Turn every call into <em className="font-serif font-normal text-[#82E636]">qualified revenue.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            When your team is offline, CallMeAI answers in seconds, qualifies intent, handles questions naturally, and books the appointment directly to your calendar or CRM. One dependable voice for the hours your team cannot cover.
          </p>
        </div>

        <div className="mx-auto mt-0 w-full max-w-[22rem]">
          <div
            className="relative aspect-square w-full cursor-pointer"
            onClick={advanceDeck}
            role="button"
            tabIndex={0}
            aria-label="Show the next benefit"
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                advanceDeck();
              }
            }}
          >
            {deck.map((benefitIndex, position) => {
              const benefit = benefits[benefitIndex];
              const isTopCard = position === 0;
              const isExiting = isTopCard && isAdvancing;

              return (
                <article
                  key={benefit.title}
                  aria-hidden={!isTopCard}
                  className={`absolute inset-0 flex aspect-square flex-col items-center justify-center rounded-2xl border border-[#82E636]/30 bg-slate-900/80 p-6 text-center shadow-2xl shadow-black/30 transition-all duration-[280ms] ease-out will-change-transform ${
                    position === 0
                      ? `z-30 ${isExiting ? 'translate-x-[115%] -rotate-12 opacity-0' : 'translate-x-0 rotate-0 opacity-100'}`
                      : position === 1
                        ? 'z-20 translate-y-4 scale-[0.94] rotate-2 opacity-90'
                        : 'z-10 translate-y-8 scale-[0.88] -rotate-3 opacity-70'
                  }`}
                >
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#82E636]">
                    Benefit {String(benefitIndex + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{benefit.title}</h3>
                  <p className="mt-3 max-w-xs text-base leading-relaxed text-slate-400">{benefit.description}</p>
                  <p className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-500">Click to continue</p>
                </article>
              );
            })}
          </div>

          <p className="mt-12 text-center font-mono text-xs font-semibold tracking-[0.3em] text-[#82E636]" aria-live="polite">
            {String(deck[0] + 1).padStart(2, '0')} / 03
          </p>
        </div>
      </div>
    </section>
  );
}