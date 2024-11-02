import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/HomeCareServices.css'

export default function HomeCareServices() {
  return (
    <>
      <div className="home-care-services"><Header logo="/Images/oghosa-logo1.png" /></div>
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
              <li><a href="/transport-services" className="hover:underline">Transportation Services</a></li>
              <li><a href="/transport-services" className="hover:underline">Transportation for Development Disability</a></li>
              <li><a href="/transport-services" className="hover:underline">Transportation for the Cleveland School District</a></li>
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
            <p className="text-lg md:text-xl mb-6 font-light">
              OGHOSA Adult Day Activity Center provides a range of programs that enhance the care and support for each individual.
            </p>
            <p>Our Staff are driven by valued Person-centered thinking a set of core skills that our Service Providers uses to see 
              beyond a disability to support an individual in obtaining a life that he or she would like. Programming is hands-on, 
              experiential, and intended to encourage "adulting" as well as creativity. Activities address critical life skills through 
              the inclusion in community activities and opportunities to practice social skills, and appeal to member interests like art, 
              science, economic development, technology, math and gardening.</p>
            <div className="flex justify-center mt-4">
              <img src="/Images/activity-center1.png" alt="Activity Day Center" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        <div className="card bg-blue-800 text-white flex items-center justify-center min-h-screen">
          <div className="max-w-2xl text-center px-6 py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Companionship & Personal Care</h2>
            <p className="text-lg md:text-xl mb-6 font-light">
              Sometimes as people age, or if they become disabled, they can use assistance with day-to-day care tasks and often suffer from isolation and loneliness.
            </p>
            <p>At Oghosa Home Health Care & Transportation, we offer companionship as well as help with personal care tasks such as bathing, dressing, grocery shopping, laundry, house cleaning, food preparation, and more. </p>
            <div className="flex justify-center mt-4">
              <img src="/Images/compasion.jpeg" alt="Activity Day Center" className="w-full max-w-md rounded-lg shadow-lg" />
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
            <p className="text-lg md:text-xl mb-6 font-light">
              We offer home care services on both a long-term and short-term basis. Whether you are looking for some help after a surgery, or you need a more permanent arrangement, we can help. 
            </p>
            <p> Our experienced caregivers provide all the services you need to help our clients maintain as much independence as possible while providing them with the extra support they need.</p>
            <div className="flex justify-center mt-4">
              <img src="/Images/care.jpg" alt="Activity Day Center" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        <div className="card bg-gray-800 text-white flex items-center justify-center min-h-screen">
          <div className="max-w-2xl text-white text-center px-6 py-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Alzheimer's and Dementia Care</h2>
            <p className="text-lg md:text-xl mb-6 font-light">
              When a loved one has Alzheimer's or Dementia it can be hard for everyone. 
            </p>
            <p> At Oghosa Home Health Care & Transportation, our caregivers are experienced and can help your loved one be safe, protected, and cared for in their home. Remaining at home for as long as possible is often best for elderly patients struggling with memory problems because the familiar surroundings help them feel safe.</p>
            <div className="flex justify-center mt-4">
              <img src="/Images/independent-client.png" alt="Activity Day Center" className="w-full max-w-md rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
        <div className="card bg-white text-black flex-col items-center justify-center min-h-screen p-12">
          <h5 className='text-black font-semibold p-2'>Click to see our BBB Rating & Accreditation</h5>
          <a href="https://www.bbb.org/us/oh/cleveland/profile/home-care/oghosa-home-health-care-llc-0312-92018725" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <img src="/Images/bbb-logo1.png" alt="See Our Better Business Profile A+" className="w-40 h-auto" />
            <div className="text-black">
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

