import type React from 'react';
import { formatBBBAccreditedSince, getYearsInBusiness } from './businessInfo';

export interface FAQItemData {
  id: string;
  question: string;
  answer: React.ReactNode;
  /** Plain text for FAQPage JSON-LD (Google rich results). */
  schemaAnswer: string;
  category: string;
}

export interface FAQCategory {
  id: string;
  name: string;
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  { id: 'all', name: 'All Questions' },
  { id: 'general', name: 'General' },
  { id: 'home-care', name: 'Home Care' },
  { id: 'transportation', name: 'Transportation' },
  { id: 'day-center', name: 'Activity Day Center' },
  { id: 'payment', name: 'Payment & Insurance' },
  { id: 'quality', name: 'Quality & Standards' },
];

export const FAQ_MOST_ASKED: string[] = ['services', 'areas', 'schedule', 'transportation'];

export const FAQ_ITEMS: FAQItemData[] = [
  {
    id: 'services',
    question: 'What services does Oghosa Home Health Care & Transportation provide?',
    answer: (
      <div>
        <p className="mb-2">Oghosa provides a comprehensive range of services including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Home Health Care for elderly and disabled individuals</li>
          <li>Transportation Services for medical appointments, school, and more</li>
          <li>Adult Day Activity Center with person-centered programming</li>
          <li>Alzheimer&apos;s and Dementia Care</li>
          <li>Personal Care and Companionship</li>
          <li>Long-term and Short-term Care options</li>
        </ul>
        <p className="mt-2">
          Visit our{' '}
          <a href="/home-care-services" className="text-brand-600 hover:underline">
            services page
          </a>{' '}
          for more details.
        </p>
      </div>
    ),
    schemaAnswer:
      'Oghosa offers home health care, transportation (including medical and school routes), an adult day activity center, Alzheimer and dementia care, personal care and companionship, and short- or long-term care options in Greater Cleveland.',
    category: 'general',
  },
  {
    id: 'areas',
    question: 'What areas do you serve in Cleveland, Ohio?',
    answer: (
      <p>
        Oghosa Home Health Care & Transportation serves the Greater Cleveland area, including Cuyahoga County, Lake County,
        and surrounding communities in Northeast Ohio. We&apos;re based in Euclid, OH and provide comprehensive home care
        and transportation services throughout the region.
      </p>
    ),
    schemaAnswer:
      'Oghosa serves Greater Cleveland, including Cuyahoga County, Lake County, and nearby Northeast Ohio communities, with offices in Euclid, Ohio.',
    category: 'general',
  },
  {
    id: 'certified',
    question: 'Is Oghosa certified or licensed?',
    answer: (
      <p>
        Yes, Oghosa Home Health Care & Transportation, LLC is DODD (Department of Developmental Disabilities) Certified.
        We are also family-owned and operated, with over {getYearsInBusiness()} years of experience in the industry. Our
        company maintains an A+ rating with the Better Business Bureau (BBB), where we have been accredited since{' '}
        {formatBBBAccreditedSince()}.
      </p>
    ),
    schemaAnswer:
      'Oghosa is DODD certified, family-owned, BBB accredited with an A+ rating, and has served the community for many years.',
    category: 'general',
  },
  {
    id: 'schedule',
    question: 'How do I schedule services with Oghosa?',
    answer: (
      <p>
        To schedule services, you can contact us by phone at (216) 261-0880, email us at oghosatransport@gmail.com, or
        visit our <a href="/contact-us" className="text-brand-600 hover:underline">Contact Us</a> page to fill out our
        online form. Our team will promptly respond to discuss your specific needs and set up an initial consultation.
      </p>
    ),
    schemaAnswer:
      'Call (216) 261-0880, email oghosatransport@gmail.com, or use the Contact Us form on the website to schedule services and arrange a consultation.',
    category: 'general',
  },
  {
    id: 'meaning',
    question: "What is the meaning of 'Oghosa'?",
    answer: (
      <p>
        &ldquo;Oghosa&rdquo; means &ldquo;God&apos;s own&rdquo;, a name that reflects our commitment to compassionate,
        dignified care.
      </p>
    ),
    schemaAnswer:
      'The name Oghosa means "God\'s own" and reflects the organization\'s commitment to compassionate, dignified care.',
    category: 'general',
  },
  {
    id: 'homecare-types',
    question: 'What types of home health care services do you offer?',
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
          <li>Specialized care for conditions like Alzheimer&apos;s and dementia</li>
        </ul>
      </div>
    ),
    schemaAnswer:
      'Home health services include personal care, medication reminders, meal preparation, light housekeeping, companionship, mobility help, and specialized support for conditions such as Alzheimer\'s and dementia.',
    category: 'home-care',
  },
  {
    id: 'caregiver-training',
    question: 'How are your caregivers selected and trained?',
    answer: (
      <p>
        All of our caregivers undergo background checks, reference verification, and training before joining our team.
        Our staff includes experienced DSP (Direct Support Professionals) and ISP (Individual Service Plan) providers who
        are trained in person-centered care approaches.
      </p>
    ),
    schemaAnswer:
      'Caregivers complete background checks, reference verification, and training. Staff include experienced DSP and ISP providers trained in person-centered care.',
    category: 'home-care',
  },
  {
    id: 'alzheimer',
    question: "Can you provide care for individuals with Alzheimer's or dementia?",
    answer: (
      <p>
        Yes. We specialize in Alzheimer&apos;s and dementia care. Our caregivers are trained to assist individuals with
        memory-related conditions, providing support in a safe and familiar environment.
      </p>
    ),
    schemaAnswer:
      'Yes. Oghosa provides specialized Alzheimer\'s and dementia care with trained caregivers supporting clients in a safe, familiar environment.',
    category: 'home-care',
  },
  {
    id: 'transportation',
    question: 'What transportation services does Oghosa provide?',
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
        <p className="mt-2">
          All our vehicles are well-maintained and operated by trained, professional drivers to ensure safety and
          comfort.
        </p>
      </div>
    ),
    schemaAnswer:
      'Transportation includes rides for individuals with developmental disabilities, medical appointments, Cleveland School District routes, non-emergency medical transport, the Activity Day Center, and senior transportation, with trained drivers and maintained vehicles.',
    category: 'transportation',
  },
];

