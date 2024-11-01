import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zipcode: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      zipcode: formData.zipcode,
      service: formData.service,
      message: formData.message,
    };

    emailjs
  .send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_EMAILJS_USER_ID
  )
  .then(() => {
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Your message has been successfully sent. We will contact you soon.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      zipcode: '',
      service: '',
      message: '',
    });
  })
  .catch(() => {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Failed to send your message. Please try again later.',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Retry',
    });
  });

  };

  return (
    
      
    <div className="flex items-center justify-center min-h-screen px-4 pb-40 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone*</label>
                <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700">Zip Code*</label>
                <input
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Needed*</label>
                <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                >
                <option value="">Select a service</option>
                <option value="Home health care">Home health care</option>
                <option value="Adult day program">Adult day program</option>
                <option value="Transportation services">Transportation services</option>
                <option value="Employment">Employment</option>
                </select>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-300 transform hover:-translate-y-1"
            >
                Send
            </button>
            </form>
        </div>
    </div>

    
  );
};

export default Form;

