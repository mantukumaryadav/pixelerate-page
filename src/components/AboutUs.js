
import React, { useState } from "react";
import image from "../assets/images/about-img1.jpg";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("who");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="about-area bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="relative">  
            <img
              src={image}
              alt="about"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column */}
          <div className="p-6">
            <span className="text-lg text-blue-700 border-2 border-blue-700 rounded-full px-4 py-2 inline-block">
              About
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Our team comes with the experience and knowledge
            </h2>

            {/* Tab Navigation */}
            <div className="space-y-4">
              <nav>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                  <button
                    className={`py-3 px-6 bg-white text-black rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:bg-blue-700 ${
                      activeTab === "who" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handleTabClick("who")}
                  >
                    Who We Are
                  </button>
                  <button
                    className={`py-3 px-6 bg-white text-black rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:bg-blue-700 ${
                      activeTab === "vision" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handleTabClick("vision")}
                  >
                    Our Vision
                  </button>
                  <button
                    className={`py-3 px-6 bg-white text-black rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:bg-blue-700 ${
                      activeTab === "history" ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handleTabClick("history")}
                  >
                    Our History
                  </button>
                </div>
              </nav>

              {/* Tab Content */}
              <div className="space-y-6">
                <div
                  className={`prose lg:prose-xl ${
                    activeTab === "who" ? "" : "hidden"
                  }`}
                >
                  <p className="text-lg leading-relaxed">
                    Content for Who We Are... It is a long established fact that
                    a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less normal distribution of
                    letters, look like readable English.
                  </p>
                  <p className="text-lg leading-relaxed">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have in some form, by injected
                    humour.
                  </p>
                </div>
                <div
                  className={`prose lg:prose-xl ${
                    activeTab === "vision" ? "" : "hidden"
                  }`}
                >
                  <p className="text-lg leading-relaxed">
                    Content for Our Vision... It is a long established fact that
                    a reader will be distracted by the readable content of a
                    page when looking at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less normal distribution of
                    letters, look like readable English.
                  </p>
                  <p className="text-lg leading-relaxed">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have in some form, by injected
                    humour.
                  </p>
                </div>
                <div
                  className={`prose lg:prose-xl ${
                    activeTab === "history" ? "" : "hidden"
                  }`}
                >
                  <p className="text-lg leading-relaxed">
                    Content for Our History... It is a long established fact
                    that a reader will be distracted by the readable content of
                    a page when looking at its layout. The point of using Lorem
                    Ipsum is that it has a more-or-less normal distribution of
                    letters, look like readable English.
                  </p>
                  <p className="text-lg leading-relaxed">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have in some form, by injected
                    humour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
