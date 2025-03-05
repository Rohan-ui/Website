import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import sugarImg from '../../assets/sugar.jpeg';
import steelImg from '../../assets/dairy.jpg';
import textileImg from '../../assets/sugar.jpeg';
import dairyImg from '../../assets/dairy.jpg';
import chemicalImg from '../../assets/chemical.jpeg';
import paperImg from '../../assets/paper.jpg';

const industries = [
  { name: 'Sugar', text: 'Powering Sweet Success', image: sugarImg },
  { name: 'Steel', text: 'Forging Strength', image: steelImg },
  { name: 'Textile', text: 'Weaving Innovation', image: textileImg },
  { name: 'Dairy', text: 'Milking Efficiency', image: dairyImg },
  { name: 'Chemical', text: 'Mixing Precision', image: chemicalImg },
  { name: 'Paper', text: 'Crafting Solutions', image: paperImg },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold uppercase text-red-600">Industries</h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-2 mb-6"></div>
        <h3 className="text-2xl font-semibold text-red-600 mb-2">Serving Diverse Sectors</h3>
        <p className="text-gray-700 mb-8">We provide tailored boiler and steam piping solutions for every industry.</p>
      </div>

      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="w-full h-64"
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index} className="relative h-64 flex justify-center items-center">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/320x256.png?text=Image+Not+Found';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-lg">
                <h4 className="text-xl font-bold">{industry.name}</h4>
                <p className="text-sm">{industry.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}