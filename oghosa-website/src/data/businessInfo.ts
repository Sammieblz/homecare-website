/**
 * Single source for BBB accreditation and tenure copy.
 * Years in business updates each calendar year from BUSINESS_FOUNDING_YEAR.
 */
export const BBB_ACCREDITED_DATE = new Date(2016, 7, 30);

/** First calendar year the business operated (inclusive). Adjust if BBB’s “years” diverges. */
export const BUSINESS_FOUNDING_YEAR = 2013;

export function formatBBBAccreditedSince(locale: string = 'en-US'): string {
  return BBB_ACCREDITED_DATE.toLocaleDateString(locale, {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
}

/** Full calendar years since founding year, as of `now` (e.g. 2026 − 2013 = 13). */
export function getYearsInBusiness(now: Date = new Date()): number {
  return now.getFullYear() - BUSINESS_FOUNDING_YEAR;
}
