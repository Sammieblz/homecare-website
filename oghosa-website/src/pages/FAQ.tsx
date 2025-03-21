import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/FAQ.css';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  category: string;
  isOpen: boolean;
}

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: "What services does Oghosa Home Health Care & Transportation provide?",
      answer: (
        <div>
          <p className="mb-2">Oghosa provides a comprehensive range of services including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Home Health Care for elderly and disabled individuals</li>
            <li>Transportation Services for medical appointments, school, and more</li>
            <li>Adult Day Activity Center with person-centered programming</li>
            <li>Alzheimer's and Dementia Care</li>
            <li>Personal Care and Companionship</li>
            <li>Long-term and Short-term Care options</li>
          </ul>
          <p className="mt-2">Visit our <Link to="/home-care-services" className="text-blue-600 hover:underline">services page</Link> for more details.</p>
        </div>
      ),
      category: 'general',
      isOpen: false
    },
    {
      question: "What areas do you serve in Cleveland, Ohio?",
      answer: (
        <p>Oghosa Home Health Care & Transportation serves the Greater Cleveland area, including Cuyahoga County, Lake County, and surrounding communities in Northeast Ohio. We're based in Euclid, OH and provide comprehensive home care and transportation services throughout the region.</p>
      ),
      category: 'general',
      isOpen: false
    },
    {
      question: "Is Oghosa certified or licensed?",
      answer: (
        <p>Yes, Oghosa Home Health Care & Transportation, LLC is DODD (Department of Developmental Disabilities) Certified. We are also family-owned and operated, with over 11 years of experience in the industry. Our company maintains an A+ rating with the Better Business Bureau (BBB), where we have been accredited since 2016.</p>
      ),
      category: 'general',
      isOpen: false
    },
    {
      question: "How do I schedule services with Oghosa?",
      answer: (
        <p>To schedule services, you can contact us by phone at (216) 261-0880, email us at oghosatransport@gmail.com, or visit our <Link to="/contact-us" className="text-blue-600 hover:underline">Contact Us</Link> page to fill out our online form. Our team will promptly respond to discuss your specific needs and set up an initial consultation.</p>
      ),
      category: 'general',
      isOpen: false
    },
    {
      question: "What is the meaning of 'Oghosa'?",
      answer: (
        <p>"Oghosa" means "God's own" - a name that reflects our commitment to providing compassionate, dignified care as if each client is a member of our own family.</p>
      ),
      category: 'general',
      isOpen: false
    },
    {
      question: "What types of home health care services do you offer?",
      answer: (
        <div>
          <p className="mb-2">Our home health care services include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Personal care assistance (bathing, dressing, grooming)</li>
            <li>Medication reminders</li>
            <li>Meal preparation and nutrition monitoring</li>
            <li>Light housekeeping and laundry</li>
            <li>Companionship and social engagement</li>
            <li>Mobility assistance</li>
            <li>Specialized care for conditions like Alzheimer's and dementia</li>
          </ul>
        </div>
      ),
      category: 'home-care',
      isOpen: false
    },
    {
      question: "How are your caregivers selected and trained?",
      answer: (
        <p>All of our caregivers undergo thorough background checks, reference verification, and extensive training before joining our team. Our staff includes experienced DSP (Direct Support Professionals) and ISP (Individual Service Plan) providers who are trained in person-centered care approaches. We emphasize compassion, professionalism, and reliability when selecting caregivers, ensuring they have the skills necessary to provide exceptional care.</p>
      ),
      category: 'home-care',
      isOpen: false
    },
    {
      question: "Can you provide care for individuals with Alzheimer's or dementia?",
      answer: (
        <p>Yes, we specialize in Alzheimer's and dementia care. Our caregivers are specifically trained to assist individuals with memory-related conditions, providing a safe and familiar environment that helps them maintain dignity and quality of life. We understand the unique challenges faced by those with cognitive impairments and their families, and we tailor our care plans accordingly.</p>
      ),
      category: 'home-care',
      isOpen: false
    },
    {
      question: "What transportation services does Oghosa provide?",
      answer: (
        <div>
          <p className="mb-2">Our transportation services include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Transportation for individuals with developmental disabilities</li>
            <li>Medical appointment transportation</li>
            <li>Transportation for the Cleveland School District</li>
            <li>Non-emergency medical transportation</li>
            <li>Transportation to and from our Activity Day Center</li>
            <li>Senior transportation services</li>
          </ul>
          <p className="mt-2">All our vehicles are well-maintained and operated by trained, professional drivers to ensure safety and comfort.</p>
        </div>
      ),
      category: 'transportation',
      isOpen: false
    },
    {
      question: "Do you provide door-to-door transportation service?",
      answer: (
        <p>Yes, we provide complete door-to-door transportation service. Our drivers will assist clients from their home into the vehicle and from the vehicle to their destination, ensuring safety and comfort throughout the journey. This is especially important for elderly clients or those with mobility challenges.</p>
      ),
      category: 'transportation',
      isOpen: false
    },
    {
      question: "Are your vehicles accessible for wheelchairs and mobility devices?",
      answer: (
        <p>Yes, our fleet includes vehicles that are fully equipped to accommodate wheelchairs and other mobility devices. We prioritize accessibility to ensure that all clients, regardless of mobility status, can utilize our transportation services comfortably and safely.</p>
      ),
      category: 'transportation',
      isOpen: false
    },
    {
      question: "What is the Activity Day Center?",
      answer: (
        <p>The Oghosa Adult Day Activity Center is a program that provides structured activities and support for adults with disabilities in a safe, supervised environment. Our center offers person-centered programming that focuses on life skills development, social interaction, and creative engagement. Activities include art and creativity, math and numeracy, science and discovery, social skills development, gardening, and technology exploration.</p>
      ),
      category: 'day-center',
      isOpen: false
    },
    {
      question: "What are the hours of operation for the Activity Day Center?",
      answer: (
        <p>Our Activity Day Center operates Monday through Friday from 9:00 AM to 5:00 PM. We maintain a structured daily schedule that provides consistency and security for participants while allowing flexibility to accommodate individual needs and preferences.</p>
      ),
      category: 'day-center',
      isOpen: false
    },
    {
      question: "What makes your Activity Day Center different from others?",
      answer: (
        <p>Our Activity Day Center stands out through our commitment to person-centered thinking, where we look beyond disabilities to support individuals in achieving the life they desire. Our programming is hands-on and experiential, designed to encourage independence ("adulting") as well as creativity. We focus on integrating participants into the community and creating opportunities for meaningful social interaction and skill development in a supportive, respectful environment.</p>
      ),
      category: 'day-center',
      isOpen: false
    },
    {
      question: "Do you offer transportation to and from the Activity Day Center?",
      answer: (
        <p>Yes, we provide transportation services to and from our Activity Day Center for clients in the Greater Cleveland area. This integrated service ensures that participants can reliably attend our programs without transportation barriers, making our services more accessible to those who need them.</p>
      ),
      category: 'day-center',
      isOpen: false
    },
    {
      question: "What payment options do you accept?",
      answer: (
        <div>
          <p className="mb-2">We accept various payment options including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Private pay</li>
            <li>Medicaid waiver programs</li>
            <li>Long-term care insurance</li>
            <li>Veterans benefits (for eligible individuals)</li>
            <li>Some health insurance plans (varies by plan)</li>
          </ul>
          <p className="mt-2">Our team can help determine your coverage options and work with you to find the most appropriate payment solution for your needs.</p>
        </div>
      ),
      category: 'payment',
      isOpen: false
    },
    {
      question: "Do you accept Medicaid?",
      answer: (
        <p>Yes, we accept Medicaid waiver programs for many of our services. Our staff can assist with determining eligibility and navigating the Medicaid process to help clients access the care they need through available benefits programs.</p>
      ),
      category: 'payment',
      isOpen: false
    },
    {
      question: "Is there a minimum requirement for hours of service?",
      answer: (
        <p>Our care plans are customized based on individual needs, and we offer flexible scheduling options. While some services may have minimum hour requirements, we work with each client to develop a care plan that addresses their specific needs and preferences. Please contact us to discuss your particular situation and requirements.</p>
      ),
      category: 'payment',
      isOpen: false
    },
    {
      question: "How do you ensure quality of care?",
      answer: (
        <p>We ensure quality through comprehensive staff training, regular supervision, and ongoing feedback from clients and their families. Our team follows personalized care plans developed in collaboration with clients and their healthcare providers. We also maintain open communication with clients' families and conduct regular quality assurance reviews to ensure that our services consistently meet or exceed expectations.</p>
      ),
      category: 'quality',
      isOpen: false
    },
    {
      question: "What if I need to change my scheduled service time?",
      answer: (
        <p>We understand that circumstances change, and we strive to be flexible with scheduling. Please contact our office at least 24 hours in advance when possible to arrange schedule changes. For transportation services especially, advance notice helps us coordinate efficiently. In emergency situations, we'll do our best to accommodate last-minute changes.</p>
      ),
      category: 'quality',
      isOpen: false
    },
  ]);

  // Add structured data for FAQ page
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": typeof item.answer === 'string' 
            ? item.answer 
            : document.createElement("div").textContent = "See our website for detailed answer."
        }
      }))
    };
    
    script.innerHTML = JSON.stringify(faqData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setFaqItems(prevItems => 
      prevItems.map((item, i) => 
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'home-care', name: 'Home Care' },
    { id: 'transportation', name: 'Transportation' },
    { id: 'day-center', name: 'Activity Day Center' },
    { id: 'payment', name: 'Payment & Insurance' },
    { id: 'quality', name: 'Quality & Standards' },
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Oghosa Home Health Care & Transportation</title>
        <meta name="description" content="Find answers to common questions about Oghosa's home health care services, transportation, activity day center, and payment options in Cleveland, Ohio." />
        <meta name="keywords" content="Oghosa FAQ, home health care questions, transportation services Cleveland, adult day program FAQ, senior care questions, home care services, Cleveland Ohio healthcare, DODD certified care, elderly care questions, disability services" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Frequently Asked Questions | Oghosa Home Health Care" />
        <meta property="og:description" content="Find answers about Oghosa's home health care, transportation services, and adult day program in Cleveland, Ohio." />
        <meta property="og:url" content="https://oghosa-homecare.com/faq" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Oghosa Home Health Care FAQ" />
        <meta name="twitter:description" content="Frequently asked questions about home health care and transportation services in Cleveland." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://oghosa-homecare.com/faq" />
      </Helmet>

      <Header logo="/Images/ogosa-logo-nobg.png" />
      
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Find answers to common questions about our home health care, transportation services, 
            and adult day program in Cleveland, Ohio.
          </p>
          
          {/* Category navigation */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 md:space-x-4 justify-center min-w-max py-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* FAQ accordion */}
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  className={`w-full text-left p-5 rounded-lg flex justify-between items-center transition-colors ${
                    item.isOpen ? 'bg-blue-800 text-white' : 'bg-white text-blue-900 hover:bg-gray-100'
                  }`}
                  onClick={() => toggleFAQ(faqItems.indexOf(item))}
                >
                  <span className="font-medium text-lg">{item.question}</span>
                  <span className="text-2xl ml-4">
                    {item.isOpen ? '−' : '+'}
                  </span>
                </button>
                
                {item.isOpen && (
                  <div className="p-5 bg-white border border-gray-200 rounded-b-lg shadow-inner">
                    <div className="text-gray-700 prose max-w-none">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Contact CTA */}
          <div className="text-center mt-12 p-8 bg-blue-50 rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our team is ready to assist you with any questions about our services or how we can help you or your loved one.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                to="/contact-us"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:2162610880"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium transition-colors"
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

export default FAQ; 