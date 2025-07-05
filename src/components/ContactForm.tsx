// ✅ 21. src/components/ContactForm.tsx
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { submitContactForm } from '../features/contact/contactSlice';

const ContactForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.contact);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitContactForm(formData));
  };

  return (
    <section className="container py-12 px-4 mx-auto md:w-1/2">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.message}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-200"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send'}
          </button>
        </form>
        {status === 'succeeded' && <p className="mt-4 text-green-600">Message sent successfully!</p>}
        {status === 'failed' && <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>}
      </div>
    </section>
  );
};

export default ContactForm;
