
import React from "react";
import {
  FaCapsules,
  FaBootstrap,
  FaCode,
  FaTachometerAlt,
  FaLayerGroup,
  FaRedo,
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Start Section Title */}
      <div className="text-center mb-12 px-4">
        <span className="text-lg text-blue-700 border-2 border-blue-700 rounded-full px-4 py-2 inline-block">
          Services
        </span>
        <h2 className="text-3xl font-bold mt-5">Our Best Services</h2>
        <p className="text-gray-600 mt-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-100">
            <div className="text-4xl text-indigo-500 mb-4 transition duration-300 ease-in-out transform hover:text-indigo-600">
              <FaCapsules />
            </div>
            <h4 className="text-xl font-semibold mb-2">Website Development</h4>
            <p className="text-gray-600">
              We specialize in crafting visually appealing, user-friendly
              websites customized for your business needs. Our skilled
              developers prioritize performance optimization, responsiveness
              across all devices, and visitor-to-customer conversion.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-100">
            <div className="text-4xl text-indigo-500 mb-4 transition duration-300 ease-in-out transform hover:text-indigo-600">
              <FaBootstrap />
            </div>
            <h4 className="text-xl font-semibold mb-2">
              Social Media Marketing
            </h4>
            <p className="text-gray-600">
              Boost your online presence with our comprehensive social media
              marketing services. We craft engaging content, manage your
              profiles, and implement strategies to grow your audience, increase
              engagement, and drive traffic to your website.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-100">
            <div className="text-4xl text-indigo-500 mb-4 transition duration-300 ease-in-out transform hover:text-indigo-600">
              <FaCode />
            </div>
            <h4 className="text-xl font-semibold mb-2">Paid Media Marketing</h4>
            <p className="text-gray-600">
              Maximize your ROI with our targeted paid media marketing
              campaigns. From PPC ads to social media advertising, we utilize
              data-driven strategies to reach your ideal audience, optimize ad
              performance, and achieve your marketing goals.
            </p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-100">
            <div className="text-4xl text-indigo-500 mb-4 transition duration-300 ease-in-out transform hover:text-indigo-600">
              <FaTachometerAlt />
            </div>
            <h4 className="text-xl font-semibold mb-2">Speed Optimized</h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, adipiscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna.
            </p>
          </div>
          {/* Service Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-100">
            <div className="text-4xl text-indigo-500 mb-4 transition duration-300 ease-in-out transform hover:text-indigo-600">
              <FaLayerGroup />
            </div>
            <h4 className="text-xl font-semibold mb-2">Fully Customizable</h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, adipiscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna.
            </p>
          </div>
          {/* Service Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-100">
            <div className="text-4xl text-indigo-500 mb-4 transition duration-300 ease-in-out transform hover:text-indigo-600">
              <FaRedo />
            </div>
            <h4 className="text-xl font-semibold mb-2">Regular Updates</h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, adipiscing elitr, sed diam nonumy
              eirmod tempor ividunt labor dolore magna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
