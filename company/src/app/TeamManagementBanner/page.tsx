import { SlidersHorizontal } from "lucide-react";
import React from "react";

const TeamManagementBanner = () => {
  return (
    <div className="max-w-6xl mx-auto  flex items-center gap-10  mb-40  ">
      {/* Image Section */}
      <div className="flex-1">
        <img
          src="https://a.storyblok.com/f/257366/1229x1510/092562b6a5/hubstaff-automate-team-management-44f195ded2274fa41f68749bf60b3ef0ed71d0b3048c25022692373f73bd0aed.webp/m/filters:format(webp):quality(70)"
          alt="Automate Team Management"
          className="rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 mb-16">
      <SlidersHorizontal size={40} className="mb-4 text-blue-700" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Automate team operations
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Hubstaff tackles time-draining admin work, provides peace of mind, and
          helps ensure that your team is working hard. With real-time team
          management features, you can balance and track billable hours,
          productivity, and seamlessly automate invoicing and payroll.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Advanced reporting
        </h2>
        <p className="text-gray-600 mb-6">
          With 20+ customizable reports for tracking employee activity, project
          progress, and budget adherence, Hubstaff streamlines decision-making
          across your business.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Easy-to-use dashboards
        </h2>
        <p className="text-gray-600">
          Access data-driven workforce analytics dashboards for managers and
          teams, reducing disruptions and check-in meetings.
        </p>

        <a
          href="#"
          className="text-blue-600 font-medium mt-6 inline-block hover:underline"
        >
          Workforce management software →
        </a>
      </div>
    </div>
  );
};

export default TeamManagementBanner;
