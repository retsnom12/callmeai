import Link from 'next/link';
import type { ReactNode } from 'react';

function LogoMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-5 w-5 text-[#82E636] drop-shadow-[0_0_5px_rgba(130,230,54,0.7)]"
      fill="none"
      aria-hidden="true"
    >
      <path d="m16 4 11 6.25v11.5L16 28 5 21.75v-11.5L16 4Z" stroke="currentColor" strokeWidth="2.35" strokeLinejoin="round" />
      <path d="m16 9 6.5 3.75v6.5L16 23l-6.5-3.75v-6.5L16 9Z" stroke="currentColor" strokeWidth="2.15" strokeLinejoin="round" />
      <path d="M16 4v5M27 10.25l-4.5 2.5M27 21.75l-4.5-2.5M16 28v-5M5 21.75l4.5-2.5M5 10.25l4.5 2.5" stroke="currentColor" strokeWidth="2.15" strokeLinecap="butt" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <nav className="border-b border-white/10 bg-[#090d16]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-[0.16em] text-white transition hover:text-[#82E636]">
          <LogoMark />
          CALLMEAI
        </Link>
        <Link href="/" className="text-sm text-slate-400 transition hover:text-[#82E636]">
          Back to Home
        </Link>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#090d16] px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 CallMeAI. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="transition hover:text-[#82E636]">Privacy</Link>
          <Link href="/terms" className="transition hover:text-[#82E636]">Terms</Link>
          <Link href="/faq" className="transition hover:text-[#82E636]">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}

export function InformationPage({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#090d16] text-slate-100">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-16 sm:px-8 sm:py-24">{children}</main>
      <SiteFooter />
    </div>
  );
}

