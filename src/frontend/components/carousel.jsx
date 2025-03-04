import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import image1 from "../../assets/factory.jpg";
import image2 from "../../assets/infra.jpg";
import image3 from "../../assets/roll.jpg";
import image4 from "../../assets/vi.jpg";

const images = [image1, image2, image3, image4];

export default function Carousel() {
  return (
    <div className="relative h-[80vh] z-0">
      {/* Text overlay with Big Shoulders font */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-50 text-center pointer-events-none px-4">
        <h1 className="text-white text-4xl font-black font-big-shoulders tracking-tighter
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-2 uppercase">
          Welcome to Vinay Engineering
        </h1>
        <h2 className="text-red-500 text-xl font-bold font-big-shoulders
          drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] uppercase tracking-tight">
          Your Trusted Partner in Boiler Fabrication & Repair
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative h-full">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover [filter:blur(2px)] brightness-75"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.2)_0%,_rgba(0,0,0,0.5)_100%)]"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}