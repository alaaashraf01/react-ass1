import React, { useState } from 'react';
import img1 from '../../assets/poert1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [img1, img2, img3, img1, img2, img3];

  return (
    <>
      <div className="w-screen py-20 min-h-screen text-center mt-8 overflow-hidden">
        <h1 className="text-cyan-950 text-4xl md:text-5xl font-bold mb-4 uppercase">
          Portfolio Component
        </h1>

        <div className="flex items-center justify-center my-4 mb-5 text-cyan-950">
          <div className="w-20 h-1 bg-cyan-950 mx-3 rounded"></div>
          <span className="text-3xl mx-3">&#9733;</span>
          <div className="w-20 h-1 bg-cyan-950 mx-3 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10 px-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group cursor-pointer flex justify-center items-center overflow-hidden"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`portfolio item ${index + 1}`}
                className="w-96 h-72 object-cover rounded-lg shadow-lg"
              />

              <div
                className="absolute top-0 left-0 w-full h-full rounded-lg 
                bg-[#1ABC9C]/70 transform -translate-x-full group-hover:translate-x-0 
                transition-transform duration-[1200ms] ease-in-out flex justify-center items-center"
              >
                <span className="text-white text-[150px] font-bold leading-none">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-3 text-white text-4xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
