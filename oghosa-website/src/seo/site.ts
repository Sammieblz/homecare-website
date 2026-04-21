/**
 * Single source for production URLs and business facts used in meta tags and JSON-LD.
 * Override in env: VITE_SITE_ORIGIN=https://www.yoursite.com (no trailing slash)
 */
export const SITE_ORIGIN_FALLBACK = 'https://oghosahomecare.com';

export function getSiteOrigin(): string {
  const raw = import.meta.env.VITE_SITE_ORIGIN as string | undefined;
  const trimmed = raw?.trim();
  if (trimmed) return trimmed.replace(/\/$/, '');
  return SITE_ORIGIN_FALLBACK;
}

/** Canonical page URL (path must start with `/`, use `/` for home). */
export function pageUrl(path: string): string {
  const origin = getSiteOrigin();
  if (!path || path === '/') return `${origin}/`;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${p}`;
}

/** Absolute URL for static assets under `public/` (path starts with `/`). */
export function absoluteAsset(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${getSiteOrigin()}${p}`;
}

export const SITE = {
  name: 'Oghosa Home Health Care & Transportation',
  legalName: 'Oghosa Home Health Care & Transportation, LLC',
  defaultOgImage: '/Images/homepage.png',
  locale: 'en_US',
  twitterHandle: undefined as string | undefined,
  phones: ['+12162610880', '+12162358774'],
  primaryPhoneDisplay: '(216) 261-0880',
  email: 'oghosatransport@gmail.com',
  address: {
    streetAddress: '26250 Euclid Ave suite 417',
    addressLocality: 'Euclid',
    addressRegion: 'OH',
    postalCode: '44132',
    addressCountry: 'US',
  },
} as const;

export function localBusinessJsonLd(overrides?: Record<string, unknown>): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    description:
      'Home health care, non-emergency medical transportation, and adult day activity programs in Greater Cleveland, Ohio.',
    url: pageUrl('/'),
    telephone: SITE.phones[0],
    email: SITE.email,
    image: absoluteAsset(SITE.defaultOgImage),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Greater Cleveland, Ohio',
    },
    priceRange: '$$',
    ...overrides,
  };
}

/** Adult day program page: same address as main business, distinct name/url for search. */
export function activityDayCenterJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Oghosa Adult Day Activity Center',
    description:
      'Person-centered adult day activities and life skills development for individuals with disabilities in Greater Cleveland.',
    image: absoluteAsset('/Images/activity-center1.png'),
    url: pageUrl('/activity-day-center'),
    telephone: SITE.phones[0],
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.5827,
      longitude: -81.5285,
    },
    openingHours: 'Mo-Fr 09:00-17:00',
    priceRange: '$$',
    parentOrganization: {
      '@type': 'Organization',
      name: SITE.legalName,
      url: pageUrl('/'),
    },
  };
}
