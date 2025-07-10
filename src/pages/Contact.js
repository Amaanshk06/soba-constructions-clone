import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!form.name) tempErrors.name = "Name is required.";
    if (!form.email) tempErrors.email = "Email is required.";
    if (!form.phone) tempErrors.phone = "Phone number is required.";
    if (!form.message) tempErrors.message = "Message is required.";
    return tempErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      console.log("Form submitted", form); // Replace with API call if needed
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } else {
      setErrors(tempErrors);
    }
  };

  return (
    <div className="py-12 px-4 max-w-2xl mx-auto" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-center">Enquire Now</h2>
      {submitted && <p className="text-green-600 text-center mb-4">Your message has been sent successfully!</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2" placeholder="Enter your name" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2" placeholder="Enter your email" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-1">Phone</label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2" placeholder="Enter your phone number" />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2" placeholder="Enter your message"></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button type="submit" className="w-full py-3 bg-black text-white font-bold rounded hover:bg-gray-800 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
