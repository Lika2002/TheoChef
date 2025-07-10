import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <h2 className="text-4xl font-semibold mb-6">Contact</h2>
      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
