"use client";

import React, { useState } from "react";
import TrackingSidebar from "./side-bar";

export default function Tracking() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <>
      <div className="text-[#253053]">
        {/* Header Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-semibold mb-4">
            Seamless <span className="text-[#294dff]">payroll solutions</span>{" "}
            for global teams.
          </h1>
          <p className="text-2xl text-[#636b83] mb-8">
            Manage with time tracking, timesheets, leave management, reporting, and more.
          </p>
        </div>

        {/* Main Content Section */}

        <div className="max-w-7xl mx-auto ">
        <div className="bg-[#f2f8ff] w-full flex justify-between gap-6 p-5 rounded-xl">
          {/* Sidebar */}
          <div id="sidebar" className="w-[20%] ">
            <TrackingSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          {/* Content Area */}

          <div id="content" className="w-[80%]  rounded-lg  bg-white p-6">
            
                    <div> 
                        <h2 className="text-[#253053] text-xl font-bold">Time and Activity Tracking</h2>
                        <p className="text-[#636b83] text-[16px] py-2">Track time and productivity anywhere — from the web, mobile app, or Google Chrome extension. Then, convert time tracking data into automated timesheets to provide peace of mind and streamline payroll through various providers directly from the app.</p>

                        <div className="mt-4">
                            <img src="https://a.storyblok.com/f/172398/1860x1219/608b6f8c0c/multi-device-time-tracking_logos-2x.png/m/filters:format(webp):quality(70)" alt="" />
                        </div>
                    </div>
         
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
