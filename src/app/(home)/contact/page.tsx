// app/contact/page.tsx (or src/pages/contact.tsx for older Next.js)

"use client"; // Only if you're using Next.js App Router with client-side interactivity

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to API or service like EmailJS/Formspree
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-lg">Have questions? We’re here to help vendors, customers, and partners.</p>
      </div>

      {/* Form + Info */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            Whether you are a customer, seller, or potential partner, feel free to reach out for support, onboarding,
            or general queries.
          </p>
          <div>
            <p className="font-semibold">📍 HQ:</p>
            <p>123 E-Commerce Ave, Dhaka, Bangladesh</p>
          </div>
          <div>
            <p className="font-semibold">📞 Support:</p>
            <p>+880 123 456 7890</p>
          </div>
          <div>
            <p className="font-semibold">✉️ Email:</p>
            <p>support@yourmarketplace.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow space-y-6">
  <div>
    <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
      Full Name
    </label>
    <input
      id="name"
      name="name"
      type="text"
      required
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your full name"
      title="Your full name"
      className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
      Email Address
    </label>
    <input
      id="email"
      name="email"
      type="email"
      required
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      title="Your email address"
      className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={5}
      required
      value={formData.message}
      onChange={handleChange}
      placeholder="Type your message here..."
      title="Your message"
      className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
  </div>

  <button
    type="submit"
    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
  >
    Send Message
  </button>
</form>

      </section>

      {/* Optional Map Embed */}
      <section className="px-4 py-16 bg-gradient-to-br from-blue-50 to-white">
  <div className="max-w-6xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
      📍 Our Location
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
      Visit our main office, situated in the heart of Dhaka. We welcome vendors, clients, and partners!
    </p>
  </div>

  <div className="relative w-full max-w-6xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100 hover:border-blue-300 transition duration-300 group">
    <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-20 transition duration-300 pointer-events-none"></div>

    <iframe
      title="Company Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9027091710544!2d90.39067287442678!3d23.75089408877019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c0e7b0e9d1%3A0x3bb9480d72d5119f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1723025456594!5m2!1sen!2sbd"
      width="100%"
      height="100%"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full border-none rounded-2xl"
    ></iframe>
  </div>
</section>

    </div>
  );
};

export default ContactPage;
