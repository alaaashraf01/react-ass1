import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaChrome } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="py-10 bg-cyan-950 text-center text-white">
        <div className="container mx-auto flex flex-wrap justify-center lg:justify-between gap-10 px-5 py-6">

       
          <div className="w-full lg:w-1/4">
            <h3 className="text-3xl font-semibold mb-2">LOCATION</h3>
            <p className="mb-3">2215 John Daniel Drive</p>
            <h5>Clark, MO 65243</h5>
          </div>


          <div className="w-full lg:w-1/4">
            <h2 className="text-3xl font-semibold mb-4">AROUND THE WEB</h2>
            <div className="flex justify-center gap-4">
              <i className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white ">
                <FaFacebookF />
              </i>

              <i className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white ">
                <FaTwitter />
              </i>

              <i className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white ">
                <FaLinkedinIn />
              </i>

              <i className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white ">
                <FaChrome />
              </i>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
          <h2 className='text-white text-3xl'>ABOUT FREELANCER</h2>
          <p className='text-white mt-2 text-center'>Freelance is a free to use, licensed Bootstrap theme created <br/> by Route</p>
          
          
          </div>
        </div>
      </div>
      <div className='text-center  bg-[#0c0c30] text-white py-5'>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}

