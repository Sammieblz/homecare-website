import React, { useMemo, useState } from 'react';
import Header from '../components/Header';
import { Seo } from '../components/Seo';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/FAQ.css';
import { SectionHeader } from '../components/SectionHeader';
import { FAQ_CATEGORIES, FAQ_ITEMS, FAQ_MOST_ASKED, type FAQItemData } from '../data/faq';

interface FAQItemState extends FAQItemData {
  isOpen: boolean;
}

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [faqItems, setFaqItems] = useState<FAQItemState[]>(() => FAQ_ITEMS.map((i) => ({ ...i, isOpen: false })));

  const toggleFAQ = (id: string) => {
    setFaqItems((prev) => prev.map((item) => (item.id === id ? { ...item, isOpen: !item.isOpen } : item)));
  };

  const filteredFAQs = useMemo(() => {
    const q = query.trim().toLowerCase();
    const pinned = new Set(FAQ_MOST_ASKED);
    const byCategory =
      activeCategory === 'all' ? faqItems : faqItems.filter((item) => item.category === activeCategory);
    const withoutPinnedDupes = byCategory.filter((item) => !pinned.has(item.id));
    if (!q) return withoutPinnedDupes;
    return withoutPinnedDupes.filter((item) => item.question.toLowerCase().includes(q));
  }, [activeCategory, faqItems, query]);

  const mostAsked = useMemo(() => {
    const q = query.trim().toLowerCase();
    const selected = FAQ_MOST_ASKED.map((id) => faqItems.find((x) => x.id === id)).filter(Boolean) as FAQItemState[];
    if (!q) return selected;
    return selected.filter((item) => item.question.toLowerCase().includes(q));
  }, [faqItems, query]);

  const faqPageJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.schemaAnswer,
        },
      })),
    }),
    [],
  );

  return (
    <>
      <Seo
        title="Frequently Asked Questions | Oghosa Home Health Care & Transportation"
        description="Find answers to common questions about Oghosa's home health care services, transportation, activity day center, and payment options in Cleveland, Ohio."
        path="/faq"
        keywords="Oghosa FAQ, home health care questions, transportation services Cleveland, adult day program FAQ, senior care questions, home care services, Cleveland Ohio healthcare, DODD certified care, elderly care questions, disability services"
        ogImage="/Images/homepage.png"
        twitterCard="summary"
        jsonLd={faqPageJsonLd}
      />

      <Header logo="/Images/ogosa-logo-nobg.png" />

      <div className="min-w-0 border-b border-slate-200/70 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Find answers to common questions about our home health care, transportation services, and adult day program in Cleveland, Ohio."
              align="center"
            />
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
            <label className="font-body mb-2 block text-sm font-semibold text-slate-900" htmlFor="faq-search">
              Search questions
            </label>
            <input
              id="faq-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a keyword (e.g., transportation, Medicaid, hours)"
              className="font-body w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
            />
          </div>

          <div className="mb-10 mt-8 -mx-1 overflow-x-auto px-3 sm:mx-0 sm:px-4">
            <div className="flex min-w-max justify-center gap-2 py-2 sm:gap-3 md:gap-4">
              {FAQ_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`font-body cursor-pointer rounded-full px-3 py-2 text-sm whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 sm:px-4 md:text-base ${
                    activeCategory === category.id ? 'bg-brand-800 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {mostAsked.length ? (
            <div className="max-w-4xl mx-auto mb-10">
              <h2 className="font-display text-xl text-slate-900 mb-4">Most asked</h2>
              {mostAsked.map((item) => (
                <div key={item.id} className="mb-4">
                  <button
                    type="button"
                    className={`font-body flex w-full cursor-pointer items-start justify-between gap-3 rounded-lg p-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 sm:p-5 ${
                      item.isOpen ? 'bg-brand-800 text-white' : 'bg-white text-brand-900 hover:bg-gray-100'
                    }`}
                    onClick={() => toggleFAQ(item.id)}
                  >
                    <span className="min-w-0 flex-1 break-words text-base font-medium sm:text-lg">{item.question}</span>
                    <span className="shrink-0 text-2xl leading-none">{item.isOpen ? '−' : '+'}</span>
                  </button>

                  {item.isOpen && (
                    <div className="p-5 bg-white border border-gray-200 rounded-b-lg shadow-inner">
                      <div className="text-gray-700 prose max-w-none">{item.answer}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : null}

          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((item) => (
              <div key={item.id} className="mb-4">
                <button
                  type="button"
                  className={`font-body flex w-full cursor-pointer items-start justify-between gap-3 rounded-lg p-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 sm:p-5 ${
                    item.isOpen ? 'bg-brand-800 text-white' : 'bg-white text-brand-900 hover:bg-gray-100'
                  }`}
                  onClick={() => toggleFAQ(item.id)}
                >
                  <span className="min-w-0 flex-1 break-words text-base font-medium sm:text-lg">{item.question}</span>
                  <span className="shrink-0 text-2xl leading-none">{item.isOpen ? '−' : '+'}</span>
                </button>

                {item.isOpen && (
                  <div className="p-5 bg-white border border-gray-200 rounded-b-lg shadow-inner">
                    <div className="text-gray-700 prose max-w-none">{item.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-lg border border-slate-200 bg-brand-50 p-5 text-center shadow-sm sm:p-8">
            <h2 className="mb-4 font-display text-xl font-semibold text-brand-900 sm:text-2xl">Still Have Questions?</h2>
            <p className="mb-6 font-body text-base text-slate-700 sm:text-lg">
              Our team is ready to assist you with any questions about our services or how we can help you or your loved one.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                to="/contact-us"
                className="font-body inline-flex min-h-[44px] items-center justify-center bg-brand-800 hover:bg-brand-900 text-white px-6 py-3 rounded-md font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                Contact Us
              </Link>
              <a
                href="tel:2162610880"
                className="font-body inline-flex min-h-[44px] items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                Call (216) 261-0880
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;

