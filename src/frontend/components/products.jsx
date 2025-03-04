import React from 'react';
import { motion } from 'framer-motion';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

// Replace these imports with your actual image paths
import product1 from "../../assets/steam-boiler.jpg";
import product2 from "../../assets/heater.jpg";
import product3 from "../../assets/prs.jpg";
import product4 from "../../assets/airpreheater.jpg";

const products = [
  {
    id: 1,
    name: "Steam Boiler",
    image: product1,
  },
  {
    id: 2,
    name: "Heater",
    image: product2,
  },
  {
    id: 3,
    name: "PRS",
    image: product3,
  },
  {
    id: 4,
    name: "Air Preheater",
    image: product4,
  },
];

export default function Products() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -5 }}
            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
                  Enquire Now
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {product.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}