import React from "react";

const MoneyLeaksSection = () => {
  return (
    <section className="max-w-6xl mx-auto  flex items-center gap-10 mb-40 ">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="max-w-lg">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-100 flex items-center justify-center rounded-full">
              <span className="text-blue-500 text-lg">🛠️</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find and fix money leaks
          </h2>
          <p className="text-gray-600 mb-6">
            Is a project or client hurting your profit margins? Hubstaff will
            let you know. You'll have access to{" "}
            <a href="#" className="text-blue-500 underline">
              detailed time reports
            </a>{" "}
            and dashboards that provide insights into where your company's
            billable hours are going and how that impacts revenue.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Get your priorities straight
          </h3>
          <p className="text-gray-600 mb-6">
            Reports show you which projects are most profitable and which ones
            drain your team’s time.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Control expenses
          </h3>
          <p className="text-gray-600 mb-6">
            <a href="#" className="text-blue-500 underline">
              Track time and expenses
            </a>{" "}
            and set weekly budgets or time limits for teams. Get alerts when
            projects go over.
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold underline mt-4 inline-block"
          >
            Project cost tracking →
          </a>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src="https://a.storyblok.com/f/172398/1214x1405/70ee0b00a0/find-and-fix-money-leaks-2x.png/m/filters:format(webp):quality(70)"
            alt="Find and fix money leaks"
            className="rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default MoneyLeaksSection;
