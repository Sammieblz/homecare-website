import { motion, useReducedMotion } from 'framer-motion';
import { Seo } from '../components/Seo';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Van from '../components/Van';
import Footer from '../components/Footer';
import { SectionHeader } from '../components/SectionHeader';
import { ScrollReveal, RevealItem } from '../components/ScrollReveal';
import { TrustStrip } from '../components/TrustStrip';
import { WhatHappensNext } from '../components/WhatHappensNext';
import { TRANSPORTATION_SERVICE_POINTS } from '../data/transportationPage';

const TransportationServices = () => {
  const reduceMotion = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Seo
        title="Transportation Services | Oghosa Home Health Care"
        description="Safe door-to-door transportation in Greater Cleveland, Cuyahoga County, and Lake County: medical appointments, Activity Day Center, developmental disability services, and more."
        path="/transportation-services"
        keywords="transportation Cleveland, NEMT Ohio, senior transportation, developmental disabilities transport, Activity Day Center transportation, Cleveland schools transportation"
        ogImage="/Images/van1.png"
      />

      <Header logo="/Images/ogosa-logo-nobg.png" />

      <main className="min-w-0 bg-white">
        <section className="relative overflow-hidden bg-brand-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 opacity-95" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pt-12 lg:px-16 lg:pb-14 lg:pt-16">
            <motion.div
              initial={reduceMotion ? false : 'hidden'}
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
              className="max-w-3xl min-w-0"
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className="font-body text-xs uppercase tracking-[0.18em] text-white/80"
              >
                Transportation
              </motion.p>
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="font-display mt-3 text-balance text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
              >
                Reliable rides when it matters most
              </motion.h1>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="font-body mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
              >
                Door-to-door service for appointments, our Activity Day Center, school-related routes we support, and
                everyday community access, served by consistent, professional drivers.
              </motion.p>
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/contact-us"
                  className="font-body inline-flex min-h-[44px] items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 shadow-sm transition-colors hover:bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Request a ride
                </Link>
                <Link
                  to="/faq"
                  className="font-body inline-flex min-h-[44px] items-center justify-center rounded-md border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Read the FAQ
                </Link>
              </motion.div>
            </motion.div>

            <div className="mt-10 max-w-4xl">
              <Van appearance="onDark" />
            </div>
          </div>
        </section>

        <TrustStrip />

        <section className="border-b border-slate-200/70 bg-slate-50 py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">
              <div className="lg:col-span-5">
                <img
                  src="/Images/van1.png"
                  alt=""
                  role="presentation"
                  className="w-full max-w-md rounded-xl border border-slate-200/80 bg-white object-contain p-4 shadow-sm lg:mx-0"
                />
              </div>
              <div className="lg:col-span-7">
                <SectionHeader
                  eyebrow="Why families choose Oghosa"
                  title="Safe vehicles, consistent drivers"
                  description="Our staff treats client care as the priority. Vehicles are maintained for safety and comfort, whether it is a scheduled medical visit or a ride that keeps someone connected to their community."
                />
                <div className="mt-6 max-w-none font-body text-base leading-relaxed text-slate-700">
                  <p>
                    We coordinate dependable pickups and drop-offs across Greater Cleveland, including Cuyahoga County
                    and Lake County, so participants and families spend less time worrying about logistics, and more time
                    on what matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-16" aria-labelledby="transport-services-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
            <SectionHeader
              titleId="transport-services-heading"
              eyebrow="What we provide"
              title="Transportation built around your schedule"
              description="Services reflect what we routinely provide for participants and partners. Availability can vary by program, contract, and county. Ask us and we will confirm what applies to you."
            />
            <ScrollReveal className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TRANSPORTATION_SERVICE_POINTS.map(({ Icon, title, description }) => (
                <RevealItem key={title}>
                  <article className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                    <Icon className="text-brand-600" aria-hidden size={28} />
                    <h3 className="font-display mt-3 text-lg text-slate-900">{title}</h3>
                    <p className="font-body mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                  </article>
                </RevealItem>
              ))}
            </ScrollReveal>
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-brand-50 py-12 lg:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
            <SectionHeader
              eyebrow="Service area"
              title="Greater Cleveland and neighboring counties"
              description="We regularly serve clients traveling to appointments, programs, and community destinations throughout Greater Cleveland, with coverage extending into Cuyahoga County and Lake County depending on service type and scheduling."
            />
          </div>
        </section>

        <section
          id="development-disability"
          className="scroll-mt-24 border-b border-slate-200/70 py-14 lg:py-16"
          aria-labelledby="dd-transport-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
            <SectionHeader
              titleId="dd-transport-heading"
              eyebrow="Developmental disabilities"
              title="Transportation for individuals we serve"
              description="We provide transportation aligned with person-centered plans for many individuals with developmental disabilities: respectful assistance, predictable scheduling, and drivers who understand the importance of dignity on every trip."
            />
            <p className="font-body mt-6 max-w-3xl text-slate-700 leading-relaxed">
              If you receive services through a waiver or ISP, share your coordinator&apos;s contact when you reach out
              so we can align rides with authorized destinations and documentation. We will explain what we need on the
              first call.
            </p>
            <Link
              to="/contact-us"
              className="font-body mt-6 inline-flex min-h-[44px] items-center justify-center rounded-md bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              Contact us about DD transportation
            </Link>
          </div>
        </section>

        <section
          id="cleveland-school"
          className="scroll-mt-24 bg-slate-50 py-14 lg:py-16"
          aria-labelledby="school-transport-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
            <SectionHeader
              titleId="school-transport-heading"
              eyebrow="Cleveland Metropolitan School District"
              title="School-related transportation"
              description="Where we are engaged for Cleveland Metropolitan School District transportation, we operate assigned routes with the same focus on safety, communication, and timeliness that guides all Oghosa transport work."
            />
            <p className="font-body mt-6 max-w-3xl text-slate-700 leading-relaxed">
              District programs and eligibility change by school year. If you are a family or district representative,
              contact us with route or student details and we will confirm whether Oghosa is the assigned provider for
              your situation.
            </p>
            <Link
              to="/contact-us"
              className="font-body mt-6 inline-flex min-h-[44px] items-center justify-center rounded-md border border-brand-800 bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 shadow-sm transition-colors hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              School transportation inquiries
            </Link>
          </div>
        </section>

        <section className="py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
              <div className="lg:col-span-5">
                <WhatHappensNext />
              </div>
              <div className="lg:col-span-7">
                <h2 className="font-display text-2xl text-slate-900 md:text-3xl">Ready to schedule?</h2>
                <p className="font-body mt-3 text-slate-700 leading-relaxed">
                  Tell us pickup and destination, date and time window, and any accessibility needs. We typically respond
                  within one business day with next steps or clarifying questions.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/contact-us"
                    className="font-body inline-flex min-h-[44px] items-center justify-center rounded-md bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                  >
                    Contact us
                  </Link>
                  <Link
                    to="/activity-day-center"
                    className="font-body inline-flex min-h-[44px] items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                  >
                    Activity Day Center
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TransportationServices;
