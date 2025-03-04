import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Import images from assets folder (matching your working Carousel paths)
import sugarImg from '../../assets/sugar.jpeg';
import steelImg from '../../assets/vi.jpg';
import textileImg from '../../assets/factory.jpg';
import dairyImg from '../../assets/dairy.jpg';
import chemicalImg from '../../assets/chemical.jpeg';
import paperImg from '../../assets/paper.jpg';

// Industry data with imported images
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
      {/* Heading with Red Line */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold uppercase text-red-600">Industries</h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-2 mb-6"></div>

        {/* Subheading and Description */}
        <h3 className="text-2xl font-semibold text-red-600 mb-2">
          Serving Diverse Sectors
        </h3>
        <p className="text-gray-700 mb-8">
          We provide tailored boiler and steam piping solutions for every industry.
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
          slidesPerView={4} // Show 4 images at a time
          spaceBetween={16} // Margin between slides (1rem = 16px)
          className="w-full h-64" // Fixed height for consistency
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index} className="relative h-full">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load ${industry.name} image`);
                    e.target.src = 'https://via.placeholder.com/320x256.png?text=Image+Not+Found';
                  }}
                />
              </div>
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-red-600 bg-opacity-50 flex flex-col justify-center items-center text-white rounded-lg">
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