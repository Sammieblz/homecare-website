import { Link } from 'react-router-dom';

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl gap-2 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:gap-3 sm:px-4">
        <a
          href="tel:2162610880"
          className="font-body inline-flex min-h-[44px] flex-1 items-center justify-center rounded-md bg-brand-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 cursor-pointer"
        >
          Call now
        </a>
        <Link
          to="/contact-us"
          className="font-body inline-flex min-h-[44px] flex-1 items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-brand-900 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 cursor-pointer"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

