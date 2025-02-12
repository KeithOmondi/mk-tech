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
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="CEO"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold">Margaret Mwakima</h4>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="CTO"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold">Dennia Keith</h4>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
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
