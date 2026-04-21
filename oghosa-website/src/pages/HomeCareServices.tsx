import Header from '../components/Header'
import Footer from '../components/Footer'
import { Seo } from '../components/Seo'
import '../styles/HomeCareServices.css'
import { Link } from 'react-router-dom'
import { formatBBBAccreditedSince, getYearsInBusiness } from '../data/businessInfo'

const inner =
  'w-full max-w-2xl text-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8 mx-auto min-w-0'

export default function HomeCareServices() {
  return (
    <div className="home-care-services-page min-w-0">
      <Seo
        title="Home Health Care & Transportation Services | Oghosa"
        description="Personalized in-home care and coordinated transportation for individuals and families in Greater Cleveland. Person-centered plans, DODD-certified services, and compassionate staff."
        path="/home-care-services"
        keywords="home health care Cleveland, in-home care Ohio, transportation NEMT, adult day program, DODD certified, Euclid home care"
        ogImage="/Images/caregiver1.jpg"
      />
      <Header logo="/Images/ogosa-logo-nobg.png" />
      <main className="min-w-0">
        <div className="card bg-brand-900 text-white flex items-center justify-center">
          <div className={inner}>
            <h1 className="font-display text-3xl font-semibold sm:text-4xl md:text-5xl mb-4 text-balance break-words">
              Oghosa Services for New Clients
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl mb-6 text-white/90 max-w-prose mx-auto">
              At Oghosa Homecare and Transportation Services, we pride ourselves on providing the highest
              quality of personalized in-home care to our clients and their families with compassion and respect,
              recognizing the valuable relationship with our caregivers and communities we serve.
            </p>
            <div className="scroll-down text-slate-200 text-base sm:text-lg">
              Scroll down
              <div className="arrow mt-2 text-slate-200" />
            </div>
          </div>
        </div>

        <div className="card bg-slate-200 text-black flex items-center justify-center">
          <div className={inner}>
            <h2 className="font-display text-black text-2xl font-semibold sm:text-3xl md:text-4xl mb-4 text-balance break-words">
              Home Health Care & Transportation Services
            </h2>
            <p className="font-body text-black text-base sm:text-lg md:text-xl mb-6 font-medium max-w-prose mx-auto">
              Our staff consists of a multidisciplinary team of DSP and ISP providers to meet the diverse needs of our participants.
            </p>
            <p className="font-body text-black text-base sm:text-lg md:text-xl mb-6 font-medium max-w-prose mx-auto">
              Our Staff are driven by valued Person-centered thinking a set of core skills that our Service Providers uses to see beyond a disability to support an individual in obtaining a life that he or she would like.
            </p>
            <div className="flex justify-center mt-4">
              <img
                src="/Images/caregiver1.jpg"
                alt="Home Health Care"
                className="w-full max-w-full h-auto max-h-[55vh] object-cover rounded-lg shadow-lg sm:max-h-none sm:max-w-md"
              />
            </div>
          </div>
        </div>
        <div className="card bg-brand-900 text-white flex items-center justify-center">
          <div className={inner}>
            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl mb-4 text-balance break-words">Every Service Offered</h2>
            <ul className="text-base sm:text-lg md:text-xl font-light space-y-2 break-words">
              <li><a href="/home-care-services" className="hover:underline">Home Health Care</a></li>
              <li><a href="/transportation-services" className="hover:underline">Transportation Services</a></li>
              <li><a href="/transportation-services" className="hover:underline">Transportation for Development Disability</a></li>
              <li><a href="/transportation-services" className="hover:underline">Transportation for the Cleveland School District</a></li>
            </ul>
            <div className="mt-6 text-center">
              <h5 className="font-bold">Newer Services offered</h5>
              <p className="font-medium">Private pay option</p>
              <p className="font-medium">Day Program</p>
              <ul className="mt-1 space-y-1 list-none">
                <li>Community integration,</li>
                <li>Life skills training,</li>
                <li>Job coaching.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card bg-gradient-to-r from-brand-950 via-slate-700 to-slate-500 text-white flex items-center justify-center">
          <div className={inner}>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl md:text-4xl mb-4 text-balance break-words">Activity Day Center</h2>
            <p className="font-body mb-4 text-white/90 text-base sm:text-lg max-w-prose mx-auto">
              Our Staff are driven by valued Person-centered thinking a set of core skills that our Service Providers uses to see
              beyond a disability to support an individual in obtaining a life that he or she would like. Programming is hands-on,
              experiential, and intended to encourage &quot;adulting&quot; as well as creativity.
            </p>
            <div className="flex flex-col items-center mt-4">
              <img
                src="/Images/activity-center1.png"
                alt="Activity Day Center"
                className="w-full max-w-full h-auto max-h-[50vh] object-contain rounded-lg shadow-lg mb-4 sm:max-h-none sm:max-w-md"
              />
              <Link
                to="/activity-day-center"
                className="font-body inline-flex min-h-[44px] w-full max-w-md items-center justify-center bg-white text-brand-900 px-4 py-3 rounded-full font-semibold hover:bg-brand-100 transition-colors duration-200 mt-2 text-center text-sm sm:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Learn More About Our Activity Center
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-brand-800 text-white flex items-center justify-center">
          <div className={inner}>
            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl mb-4 text-balance break-words">Companionship & Personal Care</h2>
            <p className="mb-5 text-base sm:text-lg max-w-prose mx-auto">
              At Oghosa Home Health Care & Transportation, we offer companionship as well as help with personal care tasks such as bathing, dressing, grocery shopping, laundry, house cleaning, food preparation, and more.
            </p>
            <div className="flex justify-center mt-4">
              <img
                src="/Images/compasion.jpeg"
                alt="Companionship & Personal Care"
                className="w-full max-w-full h-auto max-h-[50vh] object-cover rounded-lg shadow-lg sm:max-h-none sm:max-w-md"
              />
            </div>
          </div>
        </div>
        <div className="card bg-slate-200 text-black flex items-center justify-center">
          <div className={`${inner} text-black`}>
            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl mb-4 text-balance break-words">Elderly & Disabled Home Health Care</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 font-light max-w-prose mx-auto">
              Our experienced and trained professionals at Oghosa Home Health Care & Transportation, LLC provide assistance with daily living activities for clients in Cleveland, OH and the surrounding areas.
            </p>
            <div className="flex justify-center mt-4">
              <img
                src="/Images/homepage.png"
                alt="Home health care"
                className="w-full max-w-full h-auto max-h-[50vh] object-cover rounded-lg shadow-lg sm:max-h-none sm:max-w-md"
              />
            </div>
          </div>
        </div>
        <div className="card bg-slate-400 text-white flex items-center justify-center">
          <div className={`${inner} text-black`}>
            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl mb-4 text-balance break-words">Long-term and Short-term Care</h2>
            <p className="max-w-prose mx-auto text-base sm:text-lg">
              Our experienced caregivers provide all the services you need to help our clients maintain as much independence as possible while providing them with the extra support they need.
            </p>
            <div className="flex justify-center mt-4">
              <img
                src="/Images/care.jpg"
                alt="Long-term and short-term care"
                className="w-full max-w-full h-auto max-h-[50vh] object-cover rounded-lg shadow-lg sm:max-h-none sm:max-w-md"
              />
            </div>
          </div>
        </div>
        <div className="card bg-gray-800 text-white flex items-center justify-center">
          <div className={`${inner} text-white`}>
            <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl mb-4 text-balance break-words">Alzheimer&apos;s and Dementia Care</h2>
            <p className="max-w-prose mx-auto text-base sm:text-lg">
              At Oghosa Home Health Care & Transportation, our caregivers are experienced and can help your loved one be safe, protected, and cared for in their home. Remaining at home for as long as possible is often best for elderly patients struggling with memory problems because the familiar surroundings help them feel safe.
            </p>
            <div className="flex justify-center mt-4">
              <img
                src="/Images/independent-client.png"
                alt="Independent client at home"
                className="w-full max-w-full h-auto max-h-[50vh] object-cover rounded-lg shadow-lg sm:max-h-none sm:max-w-md"
              />
            </div>
          </div>
        </div>
        <div className="card bg-white text-black flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12">
          <h5 className="text-black font-semibold p-2 text-center text-sm sm:text-base max-w-prose">
            Click to see our BBB Rating & Accreditation
          </h5>

          <a
            href="https://www.bbb.org/us/oh/cleveland/profile/home-care/oghosa-home-health-care-llc-0312-92018725"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-center flex flex-col items-center min-w-0 max-w-full px-2"
          >
            <img src="/Images/bbb-logo1.png" alt="See Our Better Business Profile A+" className="w-32 sm:w-40 h-auto mb-4 max-w-full" />
            <div className="text-black text-center text-sm sm:text-base break-words">
              <span>
                <strong>BBB Accredited Since:</strong> {formatBBBAccreditedSince()}
              </span>
              <br />
              <span>
                <strong>Years in Business:</strong> {getYearsInBusiness()}
              </span>
            </div>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
