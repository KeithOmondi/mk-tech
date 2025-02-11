import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Navbar from "./Navbar";

const Header = () => {
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
    </>
  );
};

export default Header;
