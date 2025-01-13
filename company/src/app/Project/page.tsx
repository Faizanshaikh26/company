import React from "react";
const opportunities = [
    {
      title: "Staffing and Recruiting",
      description: "Helping companies find the best talent.",
      imageUrl:
        "https://a.storyblok.com/f/172398/618x632/d19e67600d/industries-staffing-and-recruiting.png",
    },
    {
      title: "Software Development",
      description: "Building scalable and innovative solutions.",
      imageUrl:
        "https://a.storyblok.com/f/172398/619x632/15eaa07068/industries-software-development.png",
    },
    {
      title: "E-Commerce",
      description: "Creating seamless online shopping experiences.",
      imageUrl:
        "https://a.storyblok.com/f/172398/619x632/3c3685cec1/industries-ecommerce.png",
    },
    {
      title: "Healthcare",
      description: "Improving patient outcomes through technology.",
      imageUrl:
        "https://a.storyblok.com/f/172398/618x632/efdf7227ef/industries-consulting.png",
    },
    {
      title: "Education",
      description: "Delivering modern learning experiences.",
      imageUrl:
        "https://a.storyblok.com/f/172398/619x632/1b43e11447/industries-real-estate.png",
    },
    {
      title: "Logistics and Supply Chain",
      description: "Optimizing delivery and distribution networks.",
      imageUrl:
        "https://a.storyblok.com/f/172398/619x632/5af1ca29e1/industries-marketing-agencies.png",
    },
  ];
  

export default function Project() {
  return (
    <div className="p-8">
      {/* Header Section */}
      <section className="text-center max-w-lg mx-auto py-8 px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#253053]">
          Global time tracking that adapts to any industry
        </h1>
        <p className="mt-4 text-base text-[#636b83]">
          Seamlessly manage your global team from one powerful platform.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto p-4  rounded-lg ">
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div
            id="left"
            className="w-full md:w-[75%]  text-white p-4 rounded-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {opportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg bg-white border border-gray-300 transform transition-all duration-300 hover:shadow-xl"
                >
                  {/* Opportunity Image */}
                  <img
                    src={opportunity.imageUrl}
                    alt={opportunity.title}
                    className="w-full h-[300px] object-cover transform group-hover:scale-110 transition duration-500"
                  />

                  {/* Overlay with Text */}
                  <div className="absolute inset-0 bg-[#225ce58c] bg-opacity-90 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end">
                    <div>
                      <p className="text-[16px] mb-2">{opportunity.title}</p>

                      <p className="text-xs">{opportunity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          
          <div
  id="right"
  className="w-full md:w-[25%] mt-4 text-black rounded-lg border border-gray-300 overflow-hidden"
>
 
  <div id="image" className="w-full h-[50%]">
    <img
      src="https://a.storyblok.com/f/298810/734x632/7a1bf68f20/industries-one-central-dashboard_desktop.png"
      alt="Dashboard Overview"
      className="w-full h-[314px] object-cover"
    />
  </div>


  <div id="content" className="bg-[#f2f8ff] text-[#253053] p-4 h-[50%]">
    <h2 className="font-bold text-lg">One central dashboard</h2>
    <p className="text-sm my-2">
      Hubstaff provides clarity, no matter the industry, by showing you:
    </p>
    <ul className="list-disc list-inside text-sm space-y-1">
      <li>Time tracking data</li>
      <li>Automated payroll</li>
      <li>Productivity metrics & much more</li>
    </ul>
    <a
      href="#"
      className="text-blue-600 font-semibold mt-4 inline-block"
    >
      Explore solutions for your industry →
    </a>
  </div>
</div>


        </div>
      </section>
    </div>
  );
}
