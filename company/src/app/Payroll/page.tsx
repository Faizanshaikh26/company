import React from 'react';

export default function Payroll() {
  return (
    <div className="bg-[#f2f8ff] py-12">
      <h1 className="text-4xl text-center text-[#253053] font-semibold">
        Automate payroll functionality and much more
      </h1>

      <div className="max-w-7xl mx-auto px-4 mt-14 flex flex-wrap justify-center gap-11">
        {/* Card 1 */}
        <div className="w-[355px] h-[400px] bg-white p-6 rounded-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-[#e6f2ff] rounded-full mb-4">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12C24 5.372 18.628 0 12 0zM12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"></path>
              <path d="M12 4.5C8.411 4.5 5.5 7.411 5.5 11s2.911 6.5 6.5 6.5 6.5-2.911 6.5-6.5S15.589 4.5 12 4.5zM12 15c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4S14.206 15 12 15z"></path>
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-[#253053] mb-4">
            Calculate payroll hours
          </h2>
          <p className="text-gray-600 mt-4">
            Check out our guide to calculating payroll hours. You’ll discover the tools, techniques, and personnel you’ll need to manage billable and non-billable hours, run payroll, and manage your business more efficiently.
          </p>
          <p className="text-[#294dff] font-semibold text-lg hover:underline mt-12 text-right">
            Calculate payroll hours →
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-[355px] h-[400px] bg-white p-6 rounded-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-[#e6f2ff] rounded-full mb-4">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12C24 5.372 18.628 0 12 0zM12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"></path>
              <path d="M12 4.5C8.411 4.5 5.5 7.411 5.5 11s2.911 6.5 6.5 6.5 6.5-2.911 6.5-6.5S15.589 4.5 12 4.5zM12 15c-2.206 0-4-1.794-4-4s1.794-4 4-4 4-1.794 4 4S14.206 15 12 15z"></path>
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-[#253053] mb-4">
            Time conversion chart
          </h2>
          <p className="text-gray-600 mt-4">
            Discover how to create a time conversion chart for payroll processing. Conversion charts are a win-win that saves employees time and employers money. Check out these tips to get started.
          </p>
          <p className="text-[#294dff] font-semibold text-lg hover:underline mt-12 text-right">
            See time conversions →
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-[355px] h-[400px] bg-white p-6 rounded-lg">
          <div className="flex items-center justify-center w-12 h-12 bg-[#e6f2ff] rounded-full mb-4">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12s12-5.372 12-12C24 5.372 18.628 0 12 0zM12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"></path>
              <path d="M12 4.5C8.411 4.5 5.5 7.411 5.5 11s2.911 6.5 6.5 6.5 6.5-2.911 6.5-6.5S15.589 4.5 12 4.5zM12 15c-2.206 0-4-1.794-4-4s1.794-4 4-4 4-1.794 4 4S14.206 15 12 15z"></path>
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-[#253053] mb-4">
            Free pay stub templates
          </h2>
          <p className="text-gray-600 mt-4">
            Looking to create your own custom pay stubs to manage payroll? Explore a variety of free pay stub templates for Google Sheets, Google Docs, and PDFs in our guide.
          </p>
          <p className="text-[#294dff] font-semibold text-lg hover:underline mt-12 text-right">
            See pay stub templates →
          </p>
        </div>
      </div>
    </div>
  );
}
