import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Import client images from assets folder
import client1Img from '../../assets/voxco.png';
import client2Img from '../../assets/steam-house.webp';
import client3Img from '../../assets/voxco.png';
import client4Img from '../../assets/steam-house.webp';
import client5Img from '../../assets/voxco.png';

// Client data with imported images
const clients = [
  { name: 'Client 1', image: client1Img },
  { name: 'Client 2', image: client2Img },
  { name: 'Client 3', image: client3Img },
  { name: 'Client 4', image: client4Img },
  { name: 'Client 5', image: client5Img },
];

export default function ClientsSection() {
  return (
    <section className="bg-white py-8 md:py-12">
      {/* Heading with Red Line */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase text-red-600">
          Our Clients
        </h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-2 mb-4 md:mb-6"></div>
        <p className="text-gray-700 text-sm md:text-base mb-6 md:mb-8">
          Trusted by industry leaders across diverse sectors.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="h-48 md:h-96 relative overflow-visible"
        >
          {clients.map((client, index) => (
            <SwiperSlide 
              key={index} 
              className="flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-32 md:h-48 max-w-[200px] md:max-w-[300px] bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    console.error(`Failed to load ${client.name} image`);
                    e.target.src = 'https://via.placeholder.com/300x150.png?text=Image+Not+Found';
                  }}
                />
              </div>
            </SwiperSlide>
          ))}

          {/* Gradient overlays for better visibility */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </Swiper>
      </div>
    </section>
  );
}