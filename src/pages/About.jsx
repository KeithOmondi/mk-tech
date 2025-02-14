import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const About = () => {
  return (
    <>
    <div>
        <Navbar />
    </div>

    <div className="max-w-6xl mx-auto mt-6 p-3 pt-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Side - Slider */}
          <div className="md:col-span-2">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className="w-full h-[250px] md:h-[350px] lg:h-[372px] rounded-lg shadow-lg"
            >
              <SwiperSlide>
                <img
                  src="https://images.pexels.com/photos/5530488/pexels-photo-5530488.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Slide 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images.pexels.com/photos/5621947/pexels-photo-5621947.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Slide 2"
                  className="w-full h-full object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://images.pexels.com/photos/5621933/pexels-photo-5621933.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Slide 3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Right Side - Two Image Banners with Descriptions & CTA Buttons */}
          <div className="flex flex-col gap-4">
            {/* First Banner */}
            <div className="relative w-full h-40 sm:h-44 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5530488/pexels-photo-5530488.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Upgrade Computer Lab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-3 sm:p-4 text-center">
                <h3 className="text-sm sm:text-lg font-bold">
                  Upgrade Your Computer Lab
                </h3>
                <p className="text-xs sm:text-sm mt-1">
                  Enhance learning with modern tech solutions.
                </p>
                <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm py-1 px-3 rounded-md">
                  Learn More
                </button>
              </div>
            </div>

            {/* Second Banner */}
            <div className="relative w-full h-40 sm:h-44 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5530479/pexels-photo-5530479.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Get a Free Consultation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-3 sm:p-4 text-center">
                <h3 className="text-sm sm:text-lg font-bold">
                  Get a Free Consultation
                </h3>
                <p className="text-xs sm:text-sm mt-1">
                  Let us help you create the perfect lab setup.
                </p>
                <button className="mt-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm py-1 px-3 rounded-md">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* About Us - Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        <p className="text-lg text-gray-600 mt-4">
          Empowering businesses with cutting-edge technology solutions.
        </p>
      </div>

      {/* Company Story */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-semibold mb-4">Our Story</h3>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2020, we have been dedicated to transforming the digital
            landscape. With a team of passionate experts, we specialize in
            providing IT solutions that drive growth, efficiency, and innovation.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Company Story"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-700">
            To deliver innovative and tailored IT solutions that empower
            businesses to thrive in a digital-first world.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-700">
            To be the leading technology partner for businesses seeking digital
            transformation and efficiency.
          </p>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold mb-6">Meet Our Team</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src="data:image/png;base64,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"
              alt="CEO"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold">Margaret Mwakima</h4>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src="data:image/png;base64,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"
              alt="CTO"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold">Dennis Keith</h4>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src="data:image/png;base64,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"
              alt="CMO"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold">Michael Johnson</h4>
            <p className="text-gray-600">CMO</p>
          </div>
        </div>
      </div>
    </div>
    <div>
        <Footer />
    </div>
    </>
  );
};

export default About;
