import React from "react";

const StatsSection = () => {
  return (
    <section className=" p-16 bg-[#2b2553]">
      <div className="container mx-auto px-8 text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="flex-grow h-px bg-gray-400"></span>
          <h2 className="text-xl font-semibold text-white">
            Time tracking & productivity metrics trusted by{" "}
            <span className="text-blue-500 font-bold">112,000+</span> businesses
          </h2>
          <span className="flex-grow h-px bg-gray-400"></span>
        </div>

        {/* Stats Section */}
        <div className="mt-12 flex flex-wrap justify-center gap-16">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-white">500k+</h3>
            <p className="mt-2 text-base text-white">Active users</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-white">21M+</h3>
            <p className="mt-2 text-base text-white">Total hours tracked</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-white">4M+</h3>
            <p className="mt-2 text-base text-white">Tasks completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-white">300k+</h3>
            <p className="mt-2 text-base text-white">Payments</p>
          </div>
        </div>


{/* moving image */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 marquee-content">
          <img
            src="https://a.storyblok.com/f/298810/79x20/4f5ce2a824/ahrefs-logo.svg"
            alt="ahrefs logo"
            className="h-6 opacity-80"
          />
          <img
            src="https://a.storyblok.com/f/298810/128x20/9e2e70ccb8/instacart-logo.svg"
            alt="Instacart logo"
            className="h-6  opacity-80"
          />
          <img
            src="https://a.storyblok.com/f/298810/99x16/364e2223b5/groupon-logo.svg"
            alt="Groupon logo"
            className="h-6 opacity-80"
          />
          <img
            src="https://a.storyblok.com/f/298810/143x16/1474e3dbaa/century21-logo.svg"
            alt="Century 21 logo"
            className="h-6 opacity-80"
          />
          <img
            src="https://a.storyblok.com/f/298810/166x20/495b032848/cleardesk-logo.svg"
            alt="ClearDesk logo"
            className="h-6 opacity-80"
          />
          <img
            src="https://a.storyblok.com/f/298810/107x20/9859e82bee/oneims-logo.svg"
            alt="OneIMS logo"
            className="h-6 opacity-80"
          />
          <img
            src="https://a.storyblok.com/f/298810/33x20/742b4a9222/ring-logo.svg"
            alt="Ring logo"
            className="h-6 opacity-80"
          />
        </div> 
      </div>
    </section>
  );
};

export default StatsSection;
