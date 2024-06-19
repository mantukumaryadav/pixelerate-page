import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import image from '../assets/images/team-02.png'

const teamMembers = [
  {
    name: 'Yash Sharma',
    title: 'Founder & CEO',
    description: 'Social Media and Performance Marketing Expert with 5 years of experience.',
    social: {
      twitter: '#',
      linkedin: '#',
      facebook: '#',
    },
  },
  {
    name: 'Yash Bhosale',
    title: 'Co-Founder & CTO',
    description: 'Full Stack Developer with 3 years of experience.',
    social: {
      twitter: '#',
      linkedin: '#',
      facebook: '#',
    },
  },
  // Add more team members as needed
];

const Founders = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <span className="text-lg text-blue-700 border-2 border-blue-700 rounded-full px-4 py-2 inline-block">
          Expert Team
        </span>
          <h2 className="text-4xl font-bold mt-2">Meet Our Team</h2>
          <p className="text-gray-600 mt-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full lg:w-1/2 xl:w-1/3 px-4 mb-8 flex justify-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                <div className="avatar w-24 mx-auto mb-4 mt-4"> 
                  <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                    <img src={image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold">{member.name}</h4>
                  <p className="text-gray-600 mb-4">{member.title}</p>
                  <p className="text-gray-700">{member.description}</p>
                  <ul className="flex mt-4 justify-center space-x-4">
                    <li>
                      <a href={member.social.twitter} className="text-blue-500 hover:text-blue-600">
                        <FaTwitter className="text-xl" />
                      </a>
                    </li>
                    <li>
                      <a href={member.social.linkedin} className="text-blue-500 hover:text-blue-600">
                        <FaLinkedin className="text-xl" />
                      </a>
                    </li>
                    <li>
                      <a href={member.social.facebook} className="text-blue-500 hover:text-blue-600">
                        <FaFacebook className="text-xl" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;

