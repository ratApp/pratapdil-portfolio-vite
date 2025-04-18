import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_bjnt1hc',
        'template_cq3upum',
        form.current,
        'Bhf41NIeWMxIOL-XR'
      )
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900" data-aos="fade-up">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 dark:text-indigo-300 mb-8">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-xl shadow-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-indigo-600 dark:text-indigo-300">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;