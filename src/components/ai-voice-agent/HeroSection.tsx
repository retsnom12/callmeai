'use client';

import { CallCenterScene } from './CallCenterScene';

export function HeroSection() {
  const mailtoLink = encodeURI(
    'mailto:contact.callmeai@gmail.com?subject=Inquiry: CallMeAI Demo&body=Hello,%0D%0A%0D%0AI am interested in learning more about CallMeAI.%0D%0A%0D%0APlease provide details about:%0D%0A- Custom demo%0D%0A- Integration options%0D%0A- Pricing%0D%0A%0D%0AThank you,'
  );

  return (
    <header id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090d16] px-4 py-20 sm:px-8">
      <CallCenterScene />

      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#82E636]/10 blur-3xl"></div>
        <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-[#82E636]/5 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(130,230,54,0.07)_0%,transparent_52%)]"></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-[#92F547]">CallMeAI / Voice operations</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          The 24/7 AI receptionist for <em className="font-serif font-normal text-[#92F547]">high-growth businesses.</em>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          Answer every call, qualify every opportunity, and book the next step—without adding another shift to your team.
        </p>

        <div className="mt-10">
          <a
            href={mailtoLink}
            className="inline-block rounded-lg bg-[#82E636] px-8 py-4 text-center font-semibold text-[#06110d] shadow-[0_0_24px_rgba(130,230,54,0.25)] transition duration-200 ease-out will-change-transform hover:-translate-y-1 hover:bg-[#92F547] hover:shadow-[0_0_30px_rgba(130,230,54,0.35)]"
          >
            Request a Demo
          </a>
        </div>

      </div>
    </header>
  );
}
