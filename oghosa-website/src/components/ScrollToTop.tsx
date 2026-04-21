import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Restores scroll position on navigation: window top for normal routes, or the
 * element matching the hash when present (e.g. /transportation-services#development-disability).
 */
export function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, search, hash]);

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.replace(/^#/, '')).trim();
    if (!id) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return;
    }

    let cancelled = false;

    const scrollToTarget = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    };

    scrollToTarget();
    const t0 = window.setTimeout(scrollToTarget, 0);
    const t1 = window.setTimeout(scrollToTarget, 100);

    return () => {
      cancelled = true;
      window.clearTimeout(t0);
      window.clearTimeout(t1);
    };
  }, [pathname, search, hash]);

  return null;
}
