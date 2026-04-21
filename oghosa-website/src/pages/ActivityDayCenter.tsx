import React, { useRef } from 'react';
import { Parallax } from 'react-parallax';
import { motion, useReducedMotion } from 'framer-motion';
import { FaPaintBrush, FaCalculator, FaBook, FaUsers, FaSeedling, FaLaptopCode } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ActivityDayCenter.css';
import { SectionHeader } from '../components/SectionHeader';
import { ScrollReveal, RevealItem } from '../components/ScrollReveal';
import { Seo } from '../components/Seo';
import { activityDayCenterJsonLd } from '../seo/site';

// Import the useIsVisible hook from AboutUs.tsx
const useIsVisible = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

/** Fill the parallax layer; height:auto leaves gray bands under the hero on narrow viewports. */
function activityHeroBgStyle(reduceMotion: boolean | null): React.CSSProperties {
  return {
    objectFit: 'cover',
    objectPosition: 'center 30%',
    width: '100%',
    minHeight: '100%',
    height: reduceMotion ? '100%' : `${124}%`,
  };
}

const ActivityDayCenter: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  // Activities offered
  const activities = [
    { 
      icon: <FaPaintBrush className="text-brand-600 text-4xl mb-4" />, 
      title: 'Art & Creativity', 
      description: 'Expressing creativity through drawing, painting, crafts, and other artistic activities.'
    },
    { 
      icon: <FaCalculator className="text-brand-600 text-4xl mb-4" />, 
      title: 'Math & Numeracy', 
      description: 'Developing mathematical skills through practical, everyday applications and games.'
    },
    { 
      icon: <FaBook className="text-brand-600 text-4xl mb-4" />, 
      title: 'Science & Discovery', 
      description: 'Engaging in hands-on science activities that explore the world around us.'
    },
    { 
      icon: <FaUsers className="text-brand-600 text-4xl mb-4" />, 
      title: 'Social Skills', 
      description: 'Building relationships and developing appropriate social interactions through group activities.'
    },
    { 
      icon: <FaSeedling className="text-brand-600 text-4xl mb-4" />, 
      title: 'Gardening', 
      description: 'Learning about plants, growing food, and caring for the environment.'
    },
    { 
      icon: <FaLaptopCode className="text-brand-600 text-4xl mb-4" />, 
      title: 'Technology', 
      description: 'Developing computer skills and exploring digital creativity and communication.'
    }
  ];

  return (
    <div className="activity-day-center min-w-0">
      <Seo
        title="Oghosa Adult Day Activity Center | Euclid, OH"
        description="OGHOSA Adult Day Activity Center in Euclid provides person-centered programs that enhance care and support for individuals with disabilities through hands-on activities."
        path="/activity-day-center"
        keywords="Activity Day Center, Adult Day Program, Euclid Ohio, Oghosa, Adult Day Care, Person-centered thinking, Disability Support, Life Skills Training, Community Integration, Special Needs Activities, Day Program Euclid, Adult Day Services"
        ogImage="/Images/activity-center1.png"
        jsonLd={activityDayCenterJsonLd()}
      />

      <Header logo="/Images/ogosa-logo-nobg.png" />
      
      {/* Parallax Banner */}
      <Parallax
        bgImage="/Images/activity-center2.png"
        strength={reduceMotion ? 0 : 500}
        className="parallax-banner"
        bgImageStyle={activityHeroBgStyle(reduceMotion)}
      >
        <div className="overlay">
          <h1 className="banner-title">Activity Day Center</h1>
        </div>
      </Parallax>

      {/* Main Description Section */}
      <div ref={ref1} className={`description-section bg-brand-900 text-white py-12 px-4 sm:py-16 sm:px-6 lg:px-16 text-center transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <motion.h2 
          className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl md:text-4xl text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OGHOSA Adult Day Activity Program
        </motion.h2>
        <motion.p 
          className="mx-auto max-w-4xl text-base leading-relaxed sm:text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our Adult Day Activity Center provides a range of programs that enhance the care and support for each individual. 
          We create a nurturing environment where adults with disabilities can engage in meaningful activities, develop skills, 
          and build relationships in a safe and supportive setting.
        </motion.p>
      </div>

      {/* Our Approach Section */}
      <div ref={ref2} className={`approach-section py-12 px-4 sm:py-16 sm:px-6 lg:px-16 bg-gray-100 transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              eyebrow="Approach"
              title="Our approach"
              description="Person-centered thinking and hands-on, experiential programming that supports independence and community integration."
              align="center"
            />
          </div>
          
          <div className="mb-12 flex min-w-0 flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="w-full min-w-0 md:mb-0 md:w-1/2 md:pr-8">
              <img src="/Images/ADC1.jpg" alt="Person-centered Approach to Adult Day Program" className="h-auto max-h-[55vh] w-full rounded-lg object-cover shadow-xl sm:max-h-none" />
            </div>
            <div className="w-full min-w-0 md:w-1/2">
              <h3 className="mb-4 text-xl font-bold text-brand-800 sm:text-2xl">Person-Centered Thinking</h3>
              <p className="mb-4 text-base sm:text-lg">
                Our staff are driven by valued Person-centered thinking, a set of core skills that our Service Providers 
                use to see beyond a disability to support an individual in obtaining a life that he or she would like.
              </p>
              <p className="text-base sm:text-lg">
                We focus on each person's unique strengths, preferences, and needs, ensuring that every individual has 
                a voice in their daily activities and long-term goals.
              </p>
            </div>
          </div>
          
          <div className="flex min-w-0 flex-col items-center gap-8 md:flex-row-reverse md:items-start">
            <div className="w-full min-w-0 md:mb-0 md:w-1/2 md:pl-8">
              <img src="/Images/IMG_0184.jpg" alt="Experiential Learning in Adult Day Program" className="h-auto max-h-[55vh] w-full rounded-lg object-cover shadow-xl sm:max-h-none" />
            </div>
            <div className="w-full min-w-0 md:w-1/2">
              <h3 className="mb-4 text-xl font-bold text-brand-800 sm:text-2xl">Hands-On, Experiential Programming</h3>
              <p className="mb-4 text-base sm:text-lg">
                Programming is hands-on, experiential, and intended to encourage "adulting" as well as creativity. 
                Activities address critical life skills through the inclusion in community activities and opportunities 
                to practice social skills.
              </p>
              <p className="text-base sm:text-lg">
                We believe in learning by doing, creating opportunities for meaningful engagement that build confidence, 
                independence, and a sense of accomplishment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div ref={ref3} className={`activities-section py-12 px-4 sm:py-16 sm:px-6 lg:px-16 transition-opacity ease-in duration-1000 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="Programs"
            title="Our activities"
            description="Activities are designed to build skills while having fun, promoting growth, learning, and social connection."
            align="center"
          />
        </div>
        
        <ScrollReveal className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-10" staggerChildren={0.06}>
          {activities.map((activity, index) => (
            <RevealItem key={index}>
              <div className="activity-card text-center p-6 bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <div className="icon-container">{activity.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-brand-800">{activity.title}</h3>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            </RevealItem>
          ))}
        </ScrollReveal>
      </div>

      {/* Benefits Section for SEO */}
      <div className="benefits-section py-12 px-4 sm:py-16 sm:px-6 lg:px-16 bg-white text-center">
        <h2 className="mb-6 text-2xl font-bold text-brand-900 sm:mb-8 sm:text-3xl md:text-4xl text-balance px-1">
          Benefits of Our Adult Day Program
        </h2>
        <div className="mx-auto grid min-w-0 max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="benefit-card p-6 bg-brand-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-brand-800">Enhanced Social Interaction</h3>
            <p>Our program provides opportunities for meaningful social connections and friendships, reducing isolation.</p>
          </div>
          <div className="benefit-card p-6 bg-brand-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-brand-800">Skill Development</h3>
            <p>Participants develop life skills, communication abilities, and increased independence through structured activities.</p>
          </div>
          <div className="benefit-card p-6 bg-brand-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-brand-800">Caregiver Support</h3>
            <p>Provides respite for caregivers while ensuring loved ones are engaged in enriching activities in a safe environment.</p>
          </div>
          <div className="benefit-card p-6 bg-brand-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-brand-800">Community Integration</h3>
            <p>Activities include community outings that help participants connect with the broader Cleveland community.</p>
          </div>
          <div className="benefit-card p-6 bg-brand-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-brand-800">Structured Routine</h3>
            <p>Consistent daily schedule provides structure that promotes emotional well-being and cognitive function.</p>
          </div>
          <div className="benefit-card p-6 bg-brand-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-brand-800">Professional Support</h3>
            <p>Qualified staff with expertise in disability support services ensure personalized attention and care.</p>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="cta-section text-center py-12 px-4 sm:py-16 sm:px-6 lg:px-16 bg-brand-800 text-white">
        <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl text-balance px-1">
          Interested in Our Activity Day Center?
        </h2>
        <p className="mx-auto mb-8 max-w-3xl px-1 text-base sm:text-lg md:text-xl">
          Contact us today to learn more about enrollment, schedules, and how our Activity Day Center in Euclid, Ohio can benefit you or your loved one.
        </p>
        <a 
          href="/contact-us" 
          className="cta-button inline-flex min-h-[44px] max-w-full items-center justify-center rounded-full bg-white px-6 py-3 text-center text-base font-bold text-brand-800 transition-transform duration-300 hover:bg-brand-100 sm:px-8 sm:text-lg md:inline-block md:hover:scale-105"
        >
          Contact Us
        </a>
      </div>

      {/* FAQ Section for SEO */}
      <div className="faq-section py-12 px-4 sm:py-16 sm:px-6 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center text-2xl font-bold text-brand-900 sm:mb-12 sm:text-3xl text-balance px-1">
            Frequently Asked Questions
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-brand-800">What is an Adult Day Activity Center?</h3>
            <p className="text-gray-700">
              An Adult Day Activity Center provides a structured program of activities and support services for adults with disabilities in a safe, supervised environment during daytime hours.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-brand-800">Who can benefit from the Oghosa Activity Day Program?</h3>
            <p className="text-gray-700">
              Our program is designed for adults with developmental disabilities, physical challenges, or other special needs who would benefit from structured activities, socialization, and skill development.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-brand-800">What are the hours of operation?</h3>
            <p className="text-gray-700">
              Our Activity Day Center operates Monday through Friday from 9:00 AM to 5:00 PM. Please contact us for information about specific scheduling options.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-brand-800">Is transportation provided?</h3>
            <p className="text-gray-700">
              Yes, Oghosa provides transportation services to and from our Activity Day Center for clients in the Greater Cleveland area, including Cuyahoga County and Lake County.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-brand-800">How do I enroll someone in the program?</h3>
            <p className="text-gray-700">
              To enroll, please contact us through our website or call (216) 261-0880 to schedule an initial assessment. We'll discuss individual needs and determine the most appropriate program options.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ActivityDayCenter; 