import { Helmet } from 'react-helmet';
import { absoluteAsset, pageUrl, SITE } from '../seo/site';

export interface SeoProps {
  /** Document title (include site name if desired). */
  title: string;
  description: string;
  /** Route path including leading slash, e.g. `/faq` or `/`. */
  path: string;
  /** Path under `public/` for Open Graph / Twitter images. */
  ogImage?: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
  /** One or more JSON-LD objects (serialized as separate script tags). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function Seo({
  title,
  description,
  path,
  ogImage = SITE.defaultOgImage,
  keywords,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  jsonLd,
}: SeoProps) {
  const canonical = pageUrl(path);
  const imageAbs = ogImage.startsWith('http') ? ogImage : absoluteAsset(ogImage);

  const jsonLdList = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="author" content={SITE.legalName} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageAbs} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageAbs} />

      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}

      {jsonLdList.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
