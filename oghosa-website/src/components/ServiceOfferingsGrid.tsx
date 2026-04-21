import { Link } from 'react-router-dom';
import { HOME_SERVICE_OFFERINGS } from '../data/serviceOfferings';
import { ScrollReveal, RevealItem } from './ScrollReveal';

export function ServiceOfferingsGrid() {
  return (
    <ScrollReveal className="mt-10 grid gap-6 lg:grid-cols-3" staggerChildren={0.08}>
      {HOME_SERVICE_OFFERINGS.map((s) => (
        <RevealItem key={s.id}>
          <Link
            to={s.path}
            className="group block h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
          >
            <h3 className="font-display text-xl text-slate-900">{s.title}</h3>
            <p className="font-body mt-3 text-slate-700">{s.summary}</p>
            <ul className="font-body mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {s.bullets.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <span className="font-body mt-5 inline-block text-sm font-semibold text-brand-900 underline underline-offset-4 group-hover:text-brand-800">
              {s.cta}
            </span>
          </Link>
        </RevealItem>
      ))}
    </ScrollReveal>
  );
}
