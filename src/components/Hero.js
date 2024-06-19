
import React from 'react';
import { FiPlay } from 'react-icons/fi';
import image from '../assets/images/hero-image.jpg';

const Hero = () => {
  return (
    <section className="bg-blue-700 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-8 md:py-12 flex-1 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          
          {/* Text Content Section */}
          <div className="order-2 md:order-1">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Empower Your Business with Cutting-Edge Software Solutions.
              </h1>
              <p className="text-gray-300 mb-4 md:mb-6">
                We are a digital agency that helps brands to achieve their
                business outcomes. We see technology as a tool to create amazing
                things.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-8">
                <button className="bg-white text-blue-700 font-semibold py-2 px-4 border hover:border-white rounded transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white hover:border-transparent mb-4 md:mb-0 md:mr-4">
                  Get Started
                </button>
                <a
                  href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                  className="glightbox video-button flex items-center bg-white rounded-full px-3 py-2"
                >
                  <FiPlay className="text-xl" />
                  <span className="ml-2 font-semibold">Watch Intro</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="order-1 md:order-2">
            <div className="header-image w-full h-full">
              <img
                src={image}
                alt="Hero section visual representation"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
