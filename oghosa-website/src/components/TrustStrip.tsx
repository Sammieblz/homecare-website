const itemClass =
  'font-body min-w-0 border-l-2 border-slate-200 pl-3 text-sm leading-snug text-slate-600 break-words sm:pl-3.5';

export function TrustStrip() {
  return (
    <section className="border-b border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-16">
        <ul className="grid min-w-0 gap-x-6 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-5">
          <li className={itemClass}>DODD certified</li>
          <li className={itemClass}>Family-owned</li>
          <li className={itemClass}>Serving Euclid &amp; Greater Cleveland</li>
          <li className={itemClass}>Consistent, vetted staff &amp; drivers</li>
          <li className={itemClass}>
            <a
              href="https://www.bbb.org/us/oh/euclid/profile/home-care/oghosa-home-health-care-llc-0312-92018725"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-800 underline decoration-slate-300 underline-offset-2 transition-colors hover:text-brand-900 hover:decoration-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-sm"
            >
              BBB profile
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
