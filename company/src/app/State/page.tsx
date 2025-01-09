import React from "react";

const StatsSection = () => {
  return (
    <section className=" pb-10">
      <div className="container mx-auto px-8 text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="flex-grow h-px bg-gray-400"></span>
          <h2 className="text-xl font-semibold text-gray-700">
            Time tracking & productivity metrics trusted by{" "}
            <span className="text-blue-500 font-bold">112,000+</span> businesses
          </h2>
          <span className="flex-grow h-px bg-gray-400"></span>
        </div>

        {/* Stats Section */}
        <div className="mt-12 flex flex-wrap justify-center gap-16">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">500k+</h3>
            <p className="mt-2 text-base text-gray-600">Active users</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">21M+</h3>
            <p className="mt-2 text-base text-gray-600">Total hours tracked</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">4M+</h3>
            <p className="mt-2 text-base text-gray-600">Tasks completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">300k+</h3>
            <p className="mt-2 text-base text-gray-600">Payments</p>
          </div>
        </div>

      {/* Logos Section */}
<div className="mt-16 max-w-7xl mx-auto flex flex-wrap justify-center gap-12 marquee">
  <div className="marquee-row left-to-right mb-8">
    <img
      src="https://a.storyblok.com/f/172398/79x20/8f0a8d27e9/ahrefs-logo-dark.svg"
      alt="ahrefs logo"
      className="h-10 opacity-80 mr-9"
    />
    <img
      src="https://a.storyblok.com/f/172398/128x20/9b196bb512/instacart-logo-dark.svg"
      alt="Instacart logo"
      className="h-10 opacity-80 mr-9"
    />
    <img
      src="https://a.storyblok.com/f/172398/99x16/6f80521995/groupon-logo-dark.svg"
      alt="Groupon logo"
      className="h-10 opacity-80 mr-9"
    />
    <img
      src="https://a.storyblok.com/f/172398/143x16/f7dcf7c08f/century21-logo-dark.svg"
      alt="Century 21 logo"
      className="h-10 opacity-80 "
    />
  </div>
  <div className="marquee-row right-to-left">
    <img
      src="https://a.storyblok.com/f/172398/167x20/8eb02bfdca/cleardesk-logo-dark.svg"
      alt="ClearDesk logo"
      className="h-10 opacity-80 mr-9"
    />
    <img
      src="https://a.storyblok.com/f/172398/108x20/487786ba7c/oneims-logo-dark.svg"
      alt="OneIMS logo"
      className="h-10 opacity-80 mr-9"
    />
    <img
      src="https://a.storyblok.com/f/172398/32x20/4997d0de6a/ring-logo-dark.svg"
      alt="Ring logo"
      className="h-10 opacity-80 mr-9"
    />
      <img
      src="https://a.storyblok.com/f/172398/79x20/8f0a8d27e9/ahrefs-logo-dark.svg"
      alt="ahrefs logo"
      className="h-10 opacity-80 mr-9"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default StatsSection;
