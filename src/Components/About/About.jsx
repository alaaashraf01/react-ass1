
import React from 'react';

export default function About() {
  return (
    <>
      <div className="bg-[#1ABC9C] w-screen py-20 min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="max-w-6xl px-4">
          <h1 className="text-white text-4xl md:text-5xl text-center font-bold mb-4 uppercase">
            About Component
          </h1>

          <div className="flex items-center justify-center my-4">
            <div className="w-20 h-1 bg-white mx-3 rounded"></div>
            <span className="text-white text-3xl mx-3">&#9733;</span>
            <div className="w-20 h-1 bg-white mx-3 rounded"></div>
          </div>

          <div className="mx-auto flex flex-col md:flex-row text-white gap-8 lg:w-10/12">
            <div className="md:w-1/2">
              <p className="leading-relaxed text-center md:text-left">
                Freelancer is a free bootstrap theme created by Route. The download
                includes the complete source files including HTML, CSS, and
                JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>

            <div className="md:w-1/2">
              <p className="leading-relaxed text-center md:text-left">
                Freelancer is a free bootstrap theme created by Route. The download
                includes the complete source files including HTML, CSS, and
                JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
