import React from "react";

export default function Brand() {
  return (
    <div>
      <div className="py-12 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Brands</h2>
          <p className="text-gray-600 mb-8">
            Explore Sky Brands... Think to the Sky.
          </p>

          <div className="flex justify-center items-center space-x-10">
            <img
              src="https://skyshipbd.com/_next/static/media/logo.2d8160b9.svg"
              alt="SkyBuy"
              className="h-16 md:h-20 object-contain hover:scale-105 transition-transform duration-300"
            />

            <img
              src="https://skyshipbd.com/_next/static/media/logo_color.28c56c27.svg"
              alt="SkyShip"
              className="h-16 md:h-20 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
