import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const inputClass =
  'mt-1.5 block w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 sm:text-sm';

interface FormProps {
  /** When true, omit outer card wrapper (page provides the shell). */
  embedded?: boolean;
}

const Form: React.FC<FormProps> = ({ embedded = false }) => {
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
        import.meta.env.VITE_EMAILJS_USER_ID,
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

  const formInner = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email*
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
          Phone*
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="zipcode" className="block text-sm font-medium text-slate-700">
          Zip Code*
        </label>
        <input
          type="text"
          name="zipcode"
          id="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700">
          Service Needed*
        </label>
        <select
          name="service"
          id="service"
          value={formData.service}
          onChange={handleChange}
          required
          className={inputClass}
        >
          <option value="">Select a service</option>
          <option value="Home health care">Home health care</option>
          <option value="Adult day program">Adult day program</option>
          <option value="Transportation services">Transportation services</option>
          <option value="Employment">Employment</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`${inputClass} min-h-[120px] resize-y py-3`}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-brand-800 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
      >
        Send message
      </button>
    </form>
  );

  if (embedded) {
    return <div className="w-full min-w-0">{formInner}</div>;
  }

  return (
    <div className="flex w-full min-w-0 justify-center px-0 pb-8 sm:pb-10">
      <div className="w-full max-w-lg space-y-8 rounded-lg bg-white p-4 shadow-md sm:p-8">{formInner}</div>
    </div>
  );
};

export default Form;
