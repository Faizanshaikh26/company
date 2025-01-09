// // "use client";

// // import React, { useState } from "react";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <nav className="fixed right-0 top-0 left-0 p-2 bg-white text-black shadow">
// //       <div className="container px-6 py-4 mx-auto">
// //         <div className="lg:flex lg:items-center lg:justify-between">
// //           <div className="flex items-center justify-between">
// //             <a href="#">
// //               <img
// //                 className="w-auto h-11 sm:h-"
// //                 src=""
// //                 alt="Logo"
// //               />
// //             </a>

// //             {/* Mobile menu button */}
// //             <div className="flex lg:hidden">
// //               <button
// //                 onClick={toggleMenu}
// //                 type="button"
// //                 className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
// //                 aria-label="toggle menu"
// //               >
// //                 {isOpen ? (
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className="w-6 h-6"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       d="M6 18L18 6M6 6l12 12"
// //                     />
// //                   </svg>
// //                 ) : (
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     className="w-6 h-6"
// //                     fill="none"
// //                     viewBox="0 0 24 24"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                   >
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       d="M4 8h16M4 16h16"
// //                     />
// //                   </svg>
// //                 )}
// //               </button>
// //             </div>
// //           </div>

// //           {/* Mobile Menu */}
// //           <div
// //             className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
// //               isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
// //             }`}
// //           >
// //             <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
// //               <a
// //                 href="#"
// //                 className="px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
// //               >
// //                 Join Slack
// //               </a>
// //               <a
// //                 href="#"
// //                 className="px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
// //               >
// //                 Browse Topics
// //               </a>
// //               <a
// //                 href="#"
// //                 className="px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
// //               >
// //                 Random Item
// //               </a>
// //               <a
// //                 href="#"
// //                 className="px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
// //               >
// //                 Experts
// //               </a>
// //             </div>

          
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;




import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-8 py-4 bg-white border-b border-gray-200 shadow-sm ">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 ">
        <img
          src="https://seekvectorlogo.com/wp-content/uploads/2019/01/hubstaff-vector-logo-small.png"
          alt="Hubstaff Logo"
          className="h-8 w-8"
        />
      
      </div>

      {/* Links Section */}
      <div className="flex items-center space-x-8">
        <div className="relative group">
          <button className="flex items-center text-gray-800 hover:text-blue-500">
            Product
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center text-gray-800 hover:text-blue-500">
            Solutions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center text-gray-800 hover:text-blue-500">
            Resources
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <a href="#" className="text-gray-800 hover:text-blue-500">
          Pricing
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-500">
          Demo
        </a>
      </div>

      {/* Buttons Section */}
      <div className="flex items-center space-x-4">
        <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-blue-600 rounded-md group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute bottom-0 left-0 h-full -ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-auto h-full opacity-100 object-stretch"
              viewBox="0 0 487 487"
            >
              <path
                fillOpacity=".1"
                fillRule="nonzero"
                fill="#FFF"
                d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
              ></path>
            </svg>
          </span>
          <span className="absolute top-0 right-0 w-12 h-full -mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="object-cover w-full h-full"
              viewBox="0 0 487 487"
            >
              <path
                fillOpacity=".1"
                fillRule="nonzero"
                fill="#FFF"
                d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
              ></path>
            </svg>
          </span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
          <span className="relative text-base font-semibold">Free 14 Day trial!</span>
        </button>

        <button className="flex items-center px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50">
          <span className="mr-2">Sign in</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-9a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 004.5 21h9a2.25 2.25 0 002.25-2.25V15m3-3H8.25m3-3-3 3m3 3-3-3"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

