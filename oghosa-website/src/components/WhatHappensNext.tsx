export function WhatHappensNext() {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-slate-50 p-6">
      <p className="font-body text-xs uppercase tracking-[0.18em] text-slate-500">What happens next</p>
      <h3 className="font-display mt-2 text-xl text-slate-900">A simple 3-step process</h3>
      <ol className="font-body mt-4 space-y-3 text-slate-700">
        <li className="flex gap-3">
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-900 text-xs font-semibold text-white">
            1
          </span>
          <span>You send a message with your needs.</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-900 text-xs font-semibold text-white">
            2
          </span>
          <span>We respond within 1 business day.</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-900 text-xs font-semibold text-white">
            3
          </span>
          <span>We confirm next steps and schedule if needed.</span>
        </li>
      </ol>
    </section>
  );
}

