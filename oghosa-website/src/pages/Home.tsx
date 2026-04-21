import React, { useState } from 'react';
import { PopupModal } from 'react-calendly';
import { motion, useReducedMotion } from 'framer-motion';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BBBLogo from '/Images/blue-seal-153-100-oghosahomehealthcare-b8fbfd2.png';

const Home: React.FC = () => {
  const [isCalendlyOpen, setCalendlyOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>Oghosa Home Health Care & Transportation | Euclid, Ohio</title>
        <meta
          name="description"
          content="Oghosa provides compassionate in-home health care, transportation services, and adult day programs in Cleveland, Ohio. DODD-certified and family-owned."
        />
        <meta
          name="keywords"
          content="home health care, transportation services, adult day program, developmental disabilities, Cleveland, Euclid, Ohio, DODD certified"
        />
        <meta property="og:title" content="Oghosa Home Health Care & Transportation" />
        <meta
          property="og:description"
          content="Compassionate home health care, transportation services, and adult day programs for individuals with developmental disabilities in Cleveland, Ohio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oghosahomecare.com/" />
        <meta property="og:image" content="/Images/homepage.png" />
        <link rel="canonical" href="https://oghosahomecare.com/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Oghosa Home Health Care & Transportation",
              "description": "Home health care, transportation services, and adult day programs",
              "url": "https://oghosahomecare.com/",
              "telephone": "+1-216-800-9152",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Euclid",
                "addressLocality": "Cleveland",
                "addressRegion": "OH",
                "postalCode": "44117",
                "addressCountry": "US"
              }
            }
          `}
        </script>
      </Helmet>

      <Header logo="/Images/ogosa-logo-nobg.png" />

      <main className="bg-white">
        <section className="relative">
          <img
            src="/Images/homepage.png"
            alt=""
            role="presentation"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-end px-6 pb-16 pt-24 lg:items-center lg:pb-24 lg:pt-28 lg:px-16">
            <motion.div
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
              className="max-w-2xl text-white"
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="font-body text-sm uppercase tracking-[0.18em] text-white/80"
              >
                Home health care • Transportation • Adult day program
              </motion.p>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="font-display mt-4 text-4xl leading-[1.05] tracking-tight sm:text-5xl"
              >
                Compassionate care at home.
                <br />
                Reliable rides when you need them.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="font-body mt-6 text-lg leading-relaxed text-white/90"
              >
                Family-owned in Northeast Ohio. We support independence with respectful in-home care, safe transportation,
                and a person-centered adult day program.
              </motion.p>

              <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact-us"
                  className="font-body inline-flex min-h-[44px] items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-sm transition-colors hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Get started
                </Link>
                <Link
                  to="/home-care-services"
                  className="font-body inline-flex min-h-[44px] items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Explore services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-slate-200/70 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h2 className="font-display text-3xl leading-tight text-slate-900">
                  Trusted, consistent support for families across Greater Cleveland.
                </h2>
                <p className="font-body mt-4 text-lg leading-relaxed text-slate-700">
                  We deliver dependable care and transportation with dignity and professionalism—so your loved ones can
                  keep living the life they want, in the place they&apos;re most comfortable.
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <a
                  href="https://www.bbb.org/us/oh/euclid/profile/home-care/oghosa-home-health-care-llc-0312-92018725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <img src={BBBLogo} alt="Better Business Bureau profile" className="h-10 w-auto" />
                  <span className="font-body text-sm font-semibold text-slate-900">BBB profile</span>
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <a
                href="/home-care-services"
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-xl text-slate-900">Home health care</h3>
                <p className="font-body mt-3 text-slate-700">
                  Personal care, companionship, and tailored support delivered with respect.
                </p>
                <span className="font-body mt-4 inline-block text-sm font-semibold text-blue-900 underline underline-offset-4">
                  Learn more
                </span>
              </a>

              <a
                href="/transportation-services"
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-xl text-slate-900">Transportation</h3>
                <p className="font-body mt-3 text-slate-700">
                  Safe, dependable rides to appointments, programs, and community activities.
                </p>
                <span className="font-body mt-4 inline-block text-sm font-semibold text-blue-900 underline underline-offset-4">
                  Learn more
                </span>
              </a>

              <a
                href="/activity-day-center"
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-xl text-slate-900">Activity day center</h3>
                <p className="font-body mt-3 text-slate-700">
                  Person-centered activities and life skills in a supportive social environment.
                </p>
                <span className="font-body mt-4 inline-block text-sm font-semibold text-blue-900 underline underline-offset-4">
                  Learn more
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl text-slate-900">Schedule a consultation</h2>
                <p className="font-body mt-4 text-lg leading-relaxed text-slate-700">
                  Tell us what you need. We&apos;ll help you choose the right service plan and next steps.
                </p>
                <button
                  type="button"
                  onClick={() => setCalendlyOpen(true)}
                  className="font-body mt-7 inline-flex min-h-[44px] items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  Open scheduling
                </button>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <p className="font-body text-sm uppercase tracking-[0.18em] text-slate-500">Why families choose us</p>
                  <ul className="font-body mt-4 space-y-3 text-slate-700">
                    <li>Consistent, vetted staff and drivers</li>
                    <li>Person-centered approach</li>
                    <li>Clear communication with families</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200/70 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-16">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div>
                <h3 className="font-display text-2xl text-slate-900">We&apos;d love your feedback</h3>
                <p className="font-body mt-2 text-slate-700">Facebook & Google Reviews</p>
              </div>
              <div className="flex items-center gap-5">
                <a
                  href="https://www.facebook.com/OghosaHomeHealthCareLLC/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-blue-600 transition-colors hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-label="Facebook reviews"
                >
                  <FaFacebook className="h-9 w-9" />
                </a>
                <a
                  href="https://www.google.com/search?q=oghosa+home+care+euclid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-red-600 transition-colors hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  aria-label="Google reviews"
                >
                  <FaGoogle className="h-9 w-9" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <PopupModal
          url="https://calendly.com/oghosatransport"
          onModalClose={() => setCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.getElementById('root') as HTMLElement}
        />
      </main>

      <Footer />
    </>
  );
};

export default Home;
