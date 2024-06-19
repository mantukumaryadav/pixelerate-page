import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../assets/images/team-02.png"; 

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-14 bg-gray-200 text-center">
      <span className="text-lg text-blue-700 border-2 border-blue-700 rounded-full px-4 py-2 inline-block">
        Clients Message
      </span>
      <h2 className="text-4xl font-bold mb-2 mt-4">Testimonials</h2>
      <p className="text-gray-600">
        There are many variations of passages of Lorem Ipsum available.
      </p>
      <div className="max-w-4xl mx-auto mt-4">
        <Slider {...settings}>
          <div>
            <blockquote className="mb-8">
              <img
                src={image}
                className="mx-auto mb-6 rounded-full w-40 h-40 object-cover"
                alt="Brand A"
              />
              <p className="text-lg">
                "Outstanding social media marketing services! Our engagement has
                increased significantly."
              </p>
              <footer className="text-gray-600">- Brand A</footer>
            </blockquote>
          </div>
          <div>
            <blockquote className="mb-8">
              <img
                src={image}
                className="mx-auto mb-6 rounded-full w-40 h-40 object-cover"
                alt="Brand B"
              />
              <p className="text-lg">
                "Highly recommend their website development services. Our new
                site is beautiful and functional."
              </p>
              <footer className="text-gray-600">- Brand B</footer>
            </blockquote>
          </div>
          <div>
            <blockquote>
              <img
                src={image}
                className="mx-auto mb-6 rounded-full w-40 h-40 object-cover"
                alt="Brand C"
              />
              <p className="text-lg">
                "Their paid media marketing campaigns delivered great ROI. Very
                pleased with the results."
              </p>
              <footer className="text-gray-600">- Brand C</footer>
            </blockquote>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
