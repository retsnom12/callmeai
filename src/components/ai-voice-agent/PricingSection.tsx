const valueHighlights = [
  'No setup fees or long-term lock-in',
  'Custom voice prompt & CRM integration included',
  'Sub-second latency & 24/7 dedicated support',
];

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-transparent px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#82E636]">
            Commercial clarity
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tailored Plans for <em className="font-serif font-normal italic text-[#82E636]">Every</em> Business
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Pricing is based on your monthly call volume and CRM workflows. Pay only for what you use.
          </p>

          <ul className="mx-auto mt-8 grid max-w-3xl gap-4 text-left text-sm leading-relaxed text-slate-300 sm:grid-cols-3 sm:gap-6">
            {valueHighlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-4">
                <span
                  className="mt-1.5 h-3 w-3 shrink-0 rounded-none bg-[#82E636] shadow-[0_0_12px_#82E636]"
                  aria-hidden="true"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <a
            href="mailto:contact.callmeai@gmail.com?subject=Custom%20Quote%20-%20CallMeAI"
            className="mt-9 inline-flex items-center justify-center rounded-lg bg-[#82E636] px-7 py-3.5 text-sm font-bold text-[#06110d] shadow-[0_0_24px_rgba(130,230,54,0.25)] transition hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#92F547,#6ECE2B)] hover:shadow-[0_0_32px_rgba(130,230,54,0.35)]"
          >
            Talk to Sales
          </a>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-500">
            We can build a free 3-minute demo agent for your business before you commit.
          </p>
        </div>
      </div>
    </section>
  );
}
