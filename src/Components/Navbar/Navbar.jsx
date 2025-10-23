
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full shadow bg-cyan-950 py-5 z-50">
        <div className="container w-[80%] mx-auto">
          <div className="text-white flex justify-between items-center">
            <h1 className="text-4xl font-bold">
              <Link to="/">Start Framework</Link>
            </h1>

            <div>
              <ul className="hidden lg:flex gap-6 py-3 text-lg">
                {["about", "portfolio", "contact"].map((path) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-[#0E6251] text-white shadow-md"
                            : null
                        }`
                      }
                    >
                      {path.toUpperCase()}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className={`size-10 lg:hidden cursor-pointer rounded-md p-1 transition-all duration-200 ${
                  expand ? "border-4 border-black" : ""
                }`}
                onClick={() => setExpand(!expand)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>

          {expand && (
            <ul className="text-white mt-4 text-lg flex flex-col items-start gap-4">
              {["about", "portfolio", "contact"].map((path) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#0E6251] text-white shadow-md"
                          : null
                      }`
                    }
                  >
                    {path.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
