import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="w-screen py-20 min-h-screen text-center mt-8 overflow-hidden">
        <div className="max-w-xl mx-auto px-4">
          
          <h1 className="text-cyan-950 text-4xl md:text-5xl font-bold mb-4 uppercase">
            Contact Section
          </h1>

          <div className="flex items-center justify-center my-4 mb-5 text-cyan-950">
            <div className="w-20 h-1 bg-cyan-950 mx-3 rounded"></div>
            <span className="text-3xl mx-3">&#9733;</span>
            <div className="w-20 h-1 bg-cyan-950 mx-3 rounded"></div>
          </div>

          <form className="w-full text-left mt-8">
            {[
              { id: 'userName', label: 'User Name', type: 'text' },
              { id: 'userAge', label: 'User Age', type: 'number' },
              { id: 'userEmail', label: 'User Email', type: 'email' },
              { id: 'userPassword', label: 'User Password', type: 'password' },
            ].map(({ id, label, type }) => (
              <div key={id} className="mb-10">
                <label
                  htmlFor={id}
                  className="block text-gray-500 text-lg mb-1"
                >
                  {label}
                </label>

                <input
                  type={type}
                  name={id}
                  id={id}
                  className="block py-2 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
                             focus:outline-none focus:border-[#1ABC9C] transition-colors duration-300"
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              className="text-white bg-[#1ABC9C] hover:bg-[#159a7d] font-medium rounded text-lg px-5 py-2.5 mt-4 transition duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
