import Header from '../components/Header';
import { Seo } from '../components/Seo';
import Form from '../components/Form';
import { FaMapMarkerAlt, FaPhone, FaClock, FaFacebook, FaGoogle, FaEnvelope } from 'react-icons/fa';
import MapEmbed from '../components/MapEmbed';
import ScrollingCards from '../components/ScrollingCards';
import Footer from '../components/Footer';
import { WhatHappensNext } from '../components/WhatHappensNext';
import { SectionHeader } from '../components/SectionHeader';
import { pageUrl } from '../seo/site';

export default function ContactUs() {
  return (
    <>
      <Seo
        title="Contact Us | Oghosa Home Health Care &amp; Transportation"
        description="Reach Oghosa Home Health Care & Transportation in Euclid, OH. Call, email, or send a message. Monday–Friday 9am–5pm."
        path="/contact-us"
        keywords="contact Oghosa, home health Euclid, transportation Cleveland, adult day center Ohio"
        ogImage="/Images/homepage.png"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Oghosa Home Health Care & Transportation',
          url: pageUrl('/contact-us'),
        }}
      />

      <Header logo="/Images/ogosa-logo-nobg.png" />

      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 opacity-95" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-16 lg:pb-14 lg:pt-16">
          <SectionHeader
            tone="onDark"
            align="center"
            eyebrow="Get in touch"
            title="Contact us"
            description="Send a message, call, or visit. We’ll respond as soon as we can during business hours."
          />
        </div>
      </section>

      <section className="min-w-0 border-b border-slate-200/70 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-16 lg:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="flex min-w-0 flex-col gap-8 lg:col-span-7">
              <WhatHappensNext />
              <div
                id="contact-form"
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
              >
                <h2 className="font-display text-xl font-semibold text-brand-900 sm:text-2xl">
                  Send a message
                </h2>
                <p className="font-body mt-2 text-slate-600">
                  Tell us how we can help. Fields marked with * are required.
                </p>
                <div className="mt-6">
                  <Form embedded />
                </div>
              </div>
            </div>

            <aside className="min-w-0 space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-display text-lg font-semibold text-slate-900">Reach us directly</h2>
                <p className="font-body mt-2 text-sm text-slate-600">
                  Our team is available to answer questions during the hours below.
                </p>

                <dl className="mt-6 space-y-6">
                  <div className="flex gap-4">
                    <dt className="shrink-0 pt-0.5">
                      <FaPhone className="text-xl text-brand-600" aria-hidden />
                      <span className="sr-only">Phone</span>
                    </dt>
                    <dd className="min-w-0">
                      <p className="font-display text-sm font-semibold text-slate-900">Phone</p>
                      <p className="font-body mt-1 text-slate-700">
                        <a href="tel:2162610880" className="text-brand-700 hover:underline">
                          216-261-0880
                        </a>
                        <span className="text-slate-400"> · </span>
                        <a href="tel:2162358774" className="text-brand-700 hover:underline">
                          216-235-8774
                        </a>
                      </p>
                    </dd>
                  </div>

                  <div className="flex gap-4">
                    <dt className="shrink-0 pt-0.5">
                      <FaEnvelope className="text-xl text-brand-600" aria-hidden />
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="min-w-0">
                      <p className="font-display text-sm font-semibold text-slate-900">Email</p>
                      <p className="font-body mt-1">
                        <a
                          href="mailto:oghosatransport@gmail.com"
                          className="break-all text-brand-700 hover:underline"
                        >
                          oghosatransport@gmail.com
                        </a>
                      </p>
                    </dd>
                  </div>

                  <div className="flex gap-4">
                    <dt className="shrink-0 pt-0.5">
                      <FaClock className="text-xl text-brand-600" aria-hidden />
                      <span className="sr-only">Hours</span>
                    </dt>
                    <dd>
                      <p className="font-display text-sm font-semibold text-slate-900">Hours</p>
                      <ul className="font-body mt-1 space-y-1 text-slate-700">
                        <li>Monday – Friday: 9:00 AM – 5:00 PM</li>
                        <li>Saturday: Closed</li>
                        <li>Sunday: Closed</li>
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="mt-0.5 shrink-0 text-xl text-brand-600" aria-hidden />
                  <div className="min-w-0">
                    <h2 className="font-display text-lg font-semibold text-slate-900">Location</h2>
                    <p className="font-body mt-2 text-slate-700">
                      26250 Euclid Ave suite 417, Euclid, OH 44132
                    </p>
                  </div>
                </div>
                <MapEmbed />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-brand-200/50 bg-gradient-to-br from-brand-50 via-white to-brand-50/80 px-4 py-12 sm:px-6 sm:py-14 lg:px-16">
        <div className="mx-auto max-w-3xl min-w-0 text-center">
          <h2 className="font-display text-2xl font-semibold text-balance text-brand-950 sm:text-3xl">
            Career opportunities
          </h2>
          <p className="font-body mt-3 text-base text-slate-700 sm:text-lg">
            Oghosa Home Health Care &amp; Transportation is looking for home health care professionals with flexible hours,
            supportive team, meaningful work.
          </p>
          <p className="font-body mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            If you are a home care professional seeking a new role, mention employment in the form or call us. We&apos;d love
            to hear from you.
          </p>
          <a
            href="#contact-form"
            className="font-body mt-8 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            Apply via the contact form
          </a>
        </div>
      </section>

      <section className="min-w-0 bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            align="center"
            eyebrow="Testimonials"
            title="Reviews"
            description="Our patients and their families have shared their experiences with us. Here are some of these testimonials."
          />
          <div className="mt-10 flex min-w-0 justify-center px-1">
            <ScrollingCards />
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-6 sm:flex-row sm:justify-center sm:gap-8 sm:px-8">
            <div className="text-center sm:text-left">
              <p className="font-display text-base font-semibold text-slate-900 sm:text-lg">We&apos;d love your feedback</p>
              <p className="font-body mt-1 text-sm text-slate-600">Find us on Facebook and Google</p>
            </div>
            <div className="flex items-center justify-center gap-5">
              <a
                href="https://www.facebook.com/OghosaHomeHealthCareLLC/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                aria-label="Oghosa on Facebook"
              >
                <FaFacebook className="text-4xl text-brand-600 transition-colors duration-300 hover:text-brand-500 sm:text-5xl" />
              </a>
              <a
                href="https://www.google.com/search?q=oghosa+home+care+euclid&rlz=1C1RXQR_enUS1112US1112&oq=ogh&gs_lcrp=EgZjaHJvbWUqCAgDEEUYJxg7MgYIABBFGDwyBggBEEUYPDIICAIQRRgnGDsyCAgDEEUYJxg7MgYIBBBFGDsyBggFEEUYOTIGCAYQRRg8MgYIBxBFGDzSAQgyOTM2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x88310008a756c841:0x51b5b3f4e5a9add3,3,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                aria-label="Oghosa on Google Reviews"
              >
                <FaGoogle className="text-4xl text-red-600 transition-colors duration-300 hover:text-red-500 sm:text-5xl" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
