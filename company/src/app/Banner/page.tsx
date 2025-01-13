import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r   from-blue-500 to-blue-600 text-white h-[300px] rounded-lg max-w-7xl mx-auto my-10 mb-40 flex items-center ">
      {/* Text Section */}
      <div className="max-w-[50%] p-10">
        <h1 className="text-4xl font-bold mb-4">See Hubstaff in action</h1>
        <p className="mb-6 text-xl">
          See how our all-in-one workforce management tool can help you manage
          time, productivity, payroll, and more
        </p>
        <button className="bg-gray-800 text-white px-7 py-4 mt-6 rounded-lg font-medium hover:bg-gray-900 transition">
          Sign up today
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-end pr-10">
        <img
          src="https://a.storyblok.com/f/172398/950x612/e1f59833eb/dashboard-2x.png/m/filters:format(webp):quality(70)"
          alt="Dashboard"
          className="h-auto max-h-[270px] w-auto object-contain mt-[32px] mr-[-40px]"
        />
      </div>
    </div>
  );
};

export default Banner;
