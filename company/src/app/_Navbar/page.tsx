// "use client";

// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="fixed right-0 top-0 left-0 p-2 bg-white text-black shadow">
//       <div className="container px-6 py-4 mx-auto">
//         <div className="lg:flex lg:items-center lg:justify-between">
//           <div className="flex items-center justify-between">
//             <a href="#">
//               <img
//                 className="w-auto h-11 sm:h-"
//                 src=""
//                 alt="Logo"
//               />
//             </a>

//             {/* Mobile menu button */}
//             <div className="flex lg:hidden">
//               <button
//                 onClick={toggleMenu}
//                 type="button"
//                 className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
//                 aria-label="toggle menu"
//               >
//                 {isOpen ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 8h16M4 16h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <div
//             className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
//               isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
//             }`}
//           >
//             <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
//               <a
//                 href="#"
//                 className="px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
//               >
//                 Join Slack
//               </a>
//               <a
//                 href="#"
//                 className="px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
//               >
//                 Browse Topics
//               </a>
//               <a
//                 href="#"
//                 className="px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
//               >
//                 Random Item
//               </a>
//               <a
//                 href="#"
//                 className="px-3 py-2 mx-3 mt-2 text-black transition-colors duration-300 transform rounded-md lg:mt-0 hover:bg-gray-100"
//               >
//                 Experts
//               </a>
//             </div>

          
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"; 


const logoUrl='data:image/png;base64,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'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50 p-2">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img
              src={logoUrl} 
              alt="Logo"
              className="h-10 w-auto"
            />
 
          </a>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-6">
              {/* Menu Item 1 */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-black">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="bg-white p-4 shadow-lg rounded-md">
                    <li>
                      <NavigationMenuLink
                        href="/feature1"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Feature 1
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/feature2"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Feature 2
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/feature3"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Feature 3
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Menu Item 2 */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-black">
                  Pricing
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="bg-white p-4 shadow-lg rounded-md">
                    <li>
                      <NavigationMenuLink
                        href="/basic-plan"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Basic Plan
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/pro-plan"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pro Plan
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/enterprise-plan"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Enterprise Plan
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Menu Item 3 */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="text-gray-700 hover:text-black px-3 py-2"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuIndicator />
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

