"use client";
import React from "react";
import {
  FileText,
  DollarSign,
  Clock,
  Users,
  BarChart2,
  Settings,
} from "lucide-react";

interface TrackingSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
const TrackingSidebar: React.FC<TrackingSidebarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { label: "Time tracking", icon: <Clock size={20} /> },
    { label: "Timesheets", icon: <FileText size={20} /> },
    { label: "Attendance management", icon: <Users size={20} /> },
    { label: "Reporting", icon: <BarChart2 size={20} /> },
    { label: "Pay rates", icon: <Settings size={20} /> },
    { label: "Expenses and invoicing", icon: <DollarSign size={20} /> },
  ];

  return (
    <div className="w-64 text-black h-screen py-6 px-2">
      <div className="flex flex-col gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex items-center gap-4 py-4 px-4 rounded-md text-left transition-all duration-200 ${
              activeTab === tab.label
                ? "bg-[#468FEA] text-white"
                : "text-black hover:bg-[#B9D9EB]"
            }`}
          >
            {tab.icon}
            <span className="text-[14px] font-semibold">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrackingSidebar;
