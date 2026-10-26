'use client';

import { useState } from 'react';

const questions = [
  ['How fast can we deploy?', 'Most teams can move from a discovery call to a working pilot quickly. We map your call flow, configure the agent, connect the required tools, and test the experience before launch. The exact timeline depends on integrations and approval requirements.'],
  ['Can it integrate with Google Calendar & HubSpot?', 'Yes. CallMeAI is designed to connect with scheduling and CRM workflows, including Google Calendar and HubSpot where supported by your plan and configuration. We can capture caller details, qualify intent, and route the next step into your workflow.'],
  ['How does latency compare to human receptionists?', 'CallMeAI responds in seconds with consistent availability, while maintaining natural conversational turn-taking. Actual latency varies with telephony, network conditions, integrations, and the complexity of the request.'],
  ['Is call data secure?', 'Security is built into the operating model with access controls, encryption in transit, least-privilege practices, monitoring, and configurable retention options. Review our Privacy Policy for more detail about recordings, transcripts, and sub-processors.'],
];

export function FAQAccordion() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0b111d]">
      {questions.map(([question, answer], index) => {
        const isOpen = openQuestion === index;
        return (
          <div key={question}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-base font-semibold text-white transition hover:text-[#82E636] sm:px-7">
              {question}
              <span className="shrink-0 font-mono text-xl font-normal text-[#82E636]" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <p className="px-5 pb-6 leading-7 text-slate-400 sm:px-7">{answer}</p>}
          </div>
        );
      })}
    </div>
  );
}

