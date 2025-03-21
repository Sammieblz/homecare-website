import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/HomeCareServices.css'
import { Link } from 'react-router-dom'

export default function HomeCareServices() {
  return (
    <>
      <div className="home-care-services"><Header logo="/Images/ogosa-logo-nobg.png" /></div>
      <body>
        <div className="card bg-blue-900 text-white flex items-center justify-center min-h-screen">
          <div className="text-center px-6 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Oghosa Services for New Clients</h1>
            <p className="text-lg md:text-xl mb-6">
              At Oghosa Homecare and Transportation Services, we pride ourselves on providing the highest 
              quality of personalized in-home care to our clients and their families with compassion and respect, 
              recognizing the valuable relationship with our caregivers and communities we serve.
            </p>
            <div className="scroll-down text-slate-200 text-lg">
              Scroll down
              <div className="arrow mt-2 text-slate-200"></div>
            </div>
          </div>
        </div>
        
        <div className="card bg-slate-200 text-black flex items-center justify-center min-h-screen">
          <div className="max-w-2xl text-center px-6 py-12">
            <h2 className="text-black text-3xl md:text-4xl font-extrabold mb-4">Home Health Care & Transportation Services</h2>
            <p className="text-black text-lg md:text-xl mb-6 font-medium">
              Our staff consists of a multidisciplinary team of DSP and ISP providers to meet the diverse needs of our participants.
            </p>
            <p className="text-black text-lg md:text-xl mb-6 font-medium">Our Staff are driven by valued Person-centered thinking a set of core skills that our Service Providers uses to see beyond a disability to support an individual in obtaining a life that he or she would like. </p>
            <div className="flex justify-center mt-4">
              <img src="/Images/caregiver1.jpg" alt="Home Health Care" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
          </div> 
        </div>
        <div className="card bg-blue-900 text-white flex items-center justify-center min-h-screen">
          <div className="max-w-2xl text-center px-6 py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Every Service Offered</h2>
            <ul className="text-lg md:text-xl font-light">
              <li><a href="/home-care-services" className="hover:underline">Home Health Care</a></li>
              <li><a href="/transportation-services" className="hover:underline">Transportation Services</a></li>
              <li><a href="/transportation-services" className="hover:underline">Transportation for Development Disability</a></li>
              <li><a href="/transportation-services" className="hover:underline">Transportation for the Cleveland School District</a></li>
            </ul>
            <div className="flex-col justify-center mt-4">
              <h5 className='font-bold'>Newer Services offered</h5>
              <p className='font-medium'>Private pay option</p>
              <p className='font-medium'>Day Program</p>
              <ul>
                <li>Community integration,</li>
                <li>Life skills training,</li>
                <li>Job coaching.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card bg-gradient-to-r from-blue-950 via-slate-700 to-slate-500 text-white flex items-center justify-center min-h-screen">
          <div className="max-w-2xl text-center px-6 py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Activity Day Center</h2>
            <p className="mb-4">
              Our Staff are driven by valued Person-centered thinking a set of core skills that our Service Providers uses to see 
              beyond a disability to support an individual in obtaining a life that he or she would like. Programming is hands-on, 
              experiential, and intended to encourage "adulting" as well as creativity.
            </p>
            <div className="flex flex-col items-center mt-4">
              <img 
                src="/Images/activity-center1.png" 
                alt="Activity Day Center" 
                className="w-full max-w-md rounded-lg shadow-lg mb-4" 
              />
              <Link 
                to="/activity-day-center" 
                className="bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition-all duration-300 mt-2"
              >
                Learn More About Our Activity Center
              </Link>
            </div>
          </div>
        </div>
        <div className="card bg-blue-800 text-white flex items-center justify-center min-h-screen">
          <div className="max-w-2xl text-center px-6 py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Companionship & Personal Care</h2>
            <p className="mb-5">
              At Oghosa Home Health Care & Transportation, we offer companionship as well as help with personal care tasks such as bathing, dressing, grocery shopping, laundry, house cleaning, food preparation, and more.
            </p>
            <div className="flex justify-center mt-4">
              <img 
                src="/Images/compasion.jpeg" 
                alt="Companionship & Personal Care" 
                className="w-full max-w-md rounded-lg shadow-lg" 
              />
            </div>
          </div>
        </div>
        <div className="card bg-slate-200 text-black flex items-center justify-center min-h-screen">
          <div className="max-w-2xl text-black text-center px-6 py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Elderly & Disabled Home Health Care</h2>
            <p className="text-lg md:text-xl mb-6 font-light">
            Our experienced and trained professionals at Oghosa Home Health Care & Transportation, LLC provide assistance with daily living activities for clients in Cleveland, OH and the surrounding areas. 
            </p>
            <div className="flex justify-center mt-4">
              <img src="/Images/homepage.png" alt="Activity Day Center" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        <div className="card bg-slate-400 text-white flex items-center justify-center min-h-screen">
          <div className="max-w-2xl text-black text-center px-6 py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Long-term and Short-term Care</h2>
            <p> Our experienced caregivers provide all the services you need to help our clients maintain as much independence as possible while providing them with the extra support they need.</p>
            <div className="flex justify-center mt-4">
              <img src="/Images/care.jpg" alt="Activity Day Center" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        <div className="card bg-gray-800 text-white flex items-center justify-center min-h-screen">
          <div className="max-w-2xl text-white text-center px-6 py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Alzheimer's and Dementia Care</h2>
            <p> At Oghosa Home Health Care & Transportation, our caregivers are experienced and can help your loved one be safe, protected, and cared for in their home. Remaining at home for as long as possible is often best for elderly patients struggling with memory problems because the familiar surroundings help them feel safe.</p>
            <div className="flex justify-center mt-4">
              <img src="/Images/independent-client.png" alt="Activity Day Center" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        <div className="card bg-white text-black flex flex-col items-center justify-center min-h-screen p-12">
          <h5 className="text-black font-semibold p-2 text-center sm:text-center">
            Click to see our BBB Rating & Accreditation
          </h5>
          
          <a 
            href="https://www.bbb.org/us/oh/cleveland/profile/home-care/oghosa-home-health-care-llc-0312-92018725" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline text-center flex flex-col items-center"
          >
            <img src="/Images/bbb-logo1.png" alt="See Our Better Business Profile A+" className="w-40 h-auto mb-4" />
            <div className="text-black text-center">
              <span><strong>Accredited Since:</strong> 8/20/2016</span><br/>
              <span><strong>Years in Business:</strong> 11</span>
            </div>
          </a>
        </div>

      </body>
      <Footer />
    </>
  )
}

