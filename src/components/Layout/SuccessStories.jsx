import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const SuccessStories = () => {
  const stories = [
    {
      name: "Greenwood Academy",
      feedback:
        "MK Technologies completely revamped our computer lab. Our students now have access to modern technology, making learning more interactive and efficient!",
      image: "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Bright Future School",
      feedback:
        "Thanks to MK Technologies, our school now has a state-of-the-art lab. The setup process was seamless, and their support team is fantastic!",
      image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Sunrise High",
      feedback:
        "From outdated equipment to a cutting-edge computer lab! We are now integrating digital skills into our curriculum effectively.",
      image: "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Success Stories</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {stories.map((story, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
              {/* Left - Circular Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-600">
                <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
              </div>

              {/* Right - Quote */}
              <div className="ml-4 md:ml-8 text-center md:text-left">
                <p className="text-gray-700 text-lg italic">“{story.feedback}”</p>
                <h3 className="text-xl font-semibold text-gray-900 mt-4">{story.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SuccessStories;
