
import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xl text-blue-700 border-2 border-blue-700 rounded-full px-4 py-2 inline-block">
            Contact Us
          </span>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-4xl text-blue-500">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Contact</h4>
                  <p className="text-gray-600">0984537278623</p>
                  <p className="text-gray-600">yourmail@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-4xl text-blue-500">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Address</h4>
                  <p className="text-gray-600">175 5th Ave, New York, NY 10010</p>
                  <p className="text-gray-600">United States</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-4xl text-blue-500">
                  <FaClock />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Schedule</h4>
                  <p className="text-gray-600">24 Hours / 7 Days Open</p>
                  <p className="text-gray-600">Office time: 10 AM - 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-12">
                <span className="text-blue-500 text-xl">Get in Touch</span>
                <h2 className="text-4xl font-semibold mt-2">Ready to Get Started</h2>
                <p className="mt-4 text-gray-600">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
              </div>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Name" className="border border-gray-300 p-3 w-full rounded-lg focus:border-blue-500" required />
                  <input type="email" name="email" placeholder="Email" className="border border-gray-300 p-3 w-full rounded-lg focus:border-blue-500" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="phone" placeholder="Phone" className="border border-gray-300 p-3 w-full rounded-lg focus:border-blue-500" required />
                  <input type="text" name="subject" placeholder="Subject" className="border border-gray-300 p-3 w-full rounded-lg focus:border-blue-500" required />
                </div>
                <textarea name="message" placeholder="Type Message" rows="5" className="border border-gray-300 p-3 w-full rounded-lg focus:border-blue-500"></textarea>
                <div className="text-center">
                  <button type="submit" className="bg-blue-500 font-semibold text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
