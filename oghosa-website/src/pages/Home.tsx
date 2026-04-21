import React, { useState } from 'react';
import { PopupModal } from 'react-calendly';
import { motion, useReducedMotion } from 'framer-motion';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { localBusinessJsonLd } from '../seo/site';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BBBLogo from '/Images/blue-seal-153-100-oghosahomehealthcare-b8fbfd2.png';
import { TrustStrip } from '../components/TrustStrip';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceOfferingsGrid } from '../components/ServiceOfferingsGrid';
import { ScrollReveal, RevealItem } from '../components/ScrollReveal';

const Home: React.FC = () => {
  const [isCalendlyOpen, setCalendlyOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Seo
        title="Oghosa Home Health Care & Transportation | Euclid, Ohio"
        description="Oghosa provides compassionate in-home health care, transportation services, and adult day programs in Cleveland, Ohio. DODD-certified and family-owned."
        path="/"
        keywords="home health care, transportation services, adult day program, developmental disabilities, Cleveland, Euclid, Ohio, DODD certified"
        ogImage="/Images/homepage.png"
        jsonLd={localBusinessJsonLd()}
      />

      <Header logo="/Images/ogosa-logo-nobg.png" />

      <main className="min-w-0 bg-white">
        <section className="relative min-h-0">
          <img
            src="/Images/homepage.png"
            alt=""
            role="presentation"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-end px-4 pb-12 pt-20 supports-[min-height:1dvh]:min-h-[85dvh] sm:px-6 sm:pb-16 sm:pt-24 lg:items-center lg:px-16 lg:pb-24 lg:pt-28">
            <motion.div
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
              className="max-w-2xl min-w-0 text-white"
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
                className="font-display mt-4 text-balance text-3xl leading-[1.05] tracking-tight sm:text-4xl md:text-5xl"
              >
                Compassionate care at home.
                <br />
                Reliable rides when you need them.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="font-body mt-6 text-base leading-relaxed text-white/90 sm:text-lg"
              >
                Family-owned in Northeast Ohio. We support independence with respectful in-home care, safe transportation,
                and a person-centered adult day program.
              </motion.p>

              <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact-us"
                  className="font-body inline-flex min-h-[44px] items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-900 shadow-sm transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
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

        <TrustStrip />

        <section className="border-b border-slate-200/70 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-16">
            <SectionHeader
              eyebrow="Our services"
              title="Trusted, consistent support for families across Greater Cleveland."
              description="We deliver dependable care and transportation with dignity and professionalism, so your loved ones can keep living the life they want, in the place they’re most comfortable. Not sure where to start? Review the three options below or reach out and we’ll help you choose."
            />

            <ScrollReveal className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-center" staggerChildren={0.06}>
              <RevealItem className="lg:col-span-8">
                <a
                  href="https://www.bbb.org/us/oh/euclid/profile/home-care/oghosa-home-health-care-llc-0312-92018725"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 cursor-pointer"
                >
                  <img src={BBBLogo} alt="Better Business Bureau profile" className="h-10 w-auto" />
                  <span className="font-body text-sm font-semibold text-slate-900">BBB profile</span>
                </a>
              </RevealItem>
            </ScrollReveal>

            <ServiceOfferingsGrid />
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="font-display text-2xl text-balance text-slate-900 sm:text-3xl">Schedule a consultation</h2>
                <p className="font-body mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                  Tell us what you need. We&apos;ll help you choose the right service plan and next steps.
                </p>
                <button
                  type="button"
                  onClick={() => setCalendlyOpen(true)}
                  className="font-body mt-7 inline-flex min-h-[44px] items-center justify-center rounded-md bg-brand-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                >
                  Open scheduling
                </button>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                  <p className="font-body text-sm uppercase tracking-[0.18em] text-slate-500">Why families choose us</p>
                  <ul className="font-body mt-4 space-y-3 text-slate-700">
                    <li>Consultation to match the right service and schedule</li>
                    <li>Person-centered planning around your goals</li>
                    <li>Responsive coordination with your family</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200/70 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-16">
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
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-brand-600 transition-colors hover:text-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
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
