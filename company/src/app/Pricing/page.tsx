import React from "react";

const PricingTable = () => {
  const plans = [
    {
      name: "Suite Team",
      description:
        "Deliver seamless, conversational service with out-of-the-box tools that are quick to set up.",
      price: "US$ 55",
      billing: "per agent/month billed annually",
      buttonText: "Free trial",
      secondaryButton: "Buy now →",
      features: [
        "Ticketing system",
        "Email, chat, voice, social messaging and more",
        "Help centre",
        "AI Agents",
        "Prebuilt analytics dashboards",
        "1,000+ apps and integrations",
        "Pre-defined responses (macros)",
        "Customised business rules",
      ],
    },
    {
      name: "Suite Growth",
      description:
        "Boost efficiency and deliver quality service at scale with enhanced self-service, and automation capabilities.",
      price: "US$ 89",
      billing: "per agent/month billed annually",
      buttonText: "Free trial",
      secondaryButton: "Buy now →",
      features: [
        "Ticketing system",
        "Email, chat, voice, social messaging and more",
        "Help centre",
        "AI Agents",
        "Prebuilt analytics dashboards",
        "1,000+ apps and integrations",
        "Pre-defined responses (macros)",
        "Customised business rules",
      ],
    },
    {
      name: "Suite Professional",
      description:
        "Optimise your operations with powerful collaboration tools, skills-based ticket routing, and analytics.",
      price: "US$ 115",
      billing: "per agent/month billed annually",
      buttonText: "Free trial",
      secondaryButton: "Buy now →",
      mostPopular: true,
      features: [
        "Ticketing system",
        "Email, chat, voice, social messaging and more",
        "Help centre",
        "AI Agents",
        "Prebuilt analytics dashboards",
        "1,000+ apps and integrations",
        "Pre-defined responses (macros)",
        "Customised business rules",
      ],
    },
    {
      name: "Suite Enterprise",
      description:
        "Deliver personalised experiences at scale with AI-powered content cues, and custom roles and permissions.",
      price: "Talk to Sales",
      buttonText: "Talk to Sales",
      secondaryButton: "Buy now →",
      features: [
        "Ticketing system",
        "Email, chat, voice, social messaging and more",
        "Help centre",
        "AI Agents",
        "Prebuilt analytics dashboards",
        "1,000+ apps and integrations",
        "Pre-defined responses (macros)",
        "Customised business rules",
      ],
    },
  ];

  return (
    <>
      <div className="bg-[#f2f8ff] py-10 px-4">

      <div className=" py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-6">
        {/* Left Section */}
        <div>
          <h2 className="text-sm font-semibold uppercase text-gray-600">
            Plans and Pricing
          </h2>
          <h1 className="text-4xl font-bold text-black mt-2">
            Zendesk Suite plans
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            The complete, AI-powered CX solution with ticketing, live chat and
            messaging, help centre and voice. All plans drive efficiency with
            automations and AI agents, available 24/7 to solve customer issues.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-start text-left border-l-4 border-purple-700 ">
          <span className="text-3xl font-bold text-[#8ecf42]">US$ 19</span>
          <p className="text-sm font-semibold text-gray-600 mt-2">
            Build your own plan, great for small businesses
          </p>
          <p className="text-lg font-medium text-black mt-4">
            Starting at <span className="font-semibold">US$ 19/month</span>
          </p>
          <a
            href="#"
            className="mt-4 text-sm font-medium text-[#8ecf42] hover:underline"
          >
            Learn more →
          </a>
        </div>
      </div>
    </div>


        {/* Card Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg  bg-white p-6 ${
                plan.mostPopular ? "border-black" : ""
              }`}
            >
              {plan.mostPopular && (
                <div className="bg-black text-white text-xs px-2 py-1 rounded-tl-lg rounded-br-lg mb-4 inline-block">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              <div className="mt-4">
                <p className="text-2xl font-bold">{plan.price}</p>
                {plan.billing && (
                  <p className="text-xs text-gray-500">{plan.billing}</p>
                )}
              </div>
              <button className="bg-purple-600 text-white py-2 px-4 rounded mt-6 w-full hover:bg-purple-700">
                {plan.buttonText}
              </button>
              <button className="mt-4 text-purple-600 font-medium hover:underline">
                {plan.secondaryButton}
              </button>
              <ul className="mt-6 text-sm text-gray-700 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


          {/* Btn Section */}
        <div className="py-6 items-center text-center">
          <>
            <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-purple-600 rounded-md group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-700 rounded-full group-hover:w-56 group-hover:h-56" />
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
                  />
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
                  />
                </svg>
              </span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200" />
              <span className="relative text-base font-semibold">
                See all Features
              </span>
            </button>
          </>
        </div>
      </div>
    </>
  );
};

export default PricingTable;
