"use client";

import {
  CalendarDays,
  ChevronRight,
  ChevronUp,
  Globe,
  Users,
} from "lucide-react";
import  { useState } from "react";

const PrivacyPrinciples: React.FC = () => {
  const [open, setOpen] = useState<number | null>(1);

  const toggle = (index: number): void => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="bg-blue-50 py-16 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-40">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hubstaff&#39;s privacy-first guiding principles
          </h2>
          <div className="space-y-4">
            {/* Principle 1 */}
            <div>
              <button
                onClick={() => toggle(1)}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-800"
              >
                <span className="flex items-center gap-2">
                  <Globe className="text-blue-700" /> Principle 1: Transparency
                </span>
                <span>{open === 1 ? <ChevronUp /> : <ChevronRight />}</span>
              </button>
              {open === 1 && (
                <div className="mt-2 text-gray-600">
                  <p>
                    Achieve transparency in your team&#39;s productivity —
                    without compromising privacy. That&#39;s why Hubstaff offers
                    the option to blur apps, URLs, and screenshots. Plus:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>No keystroke logging</li>
                    <li>No email monitoring</li>
                    <li>No access to cameras and webcams</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Principle 2 */}
            <div>
              <button
                onClick={() => toggle(2)}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-800"
              >
                <span className="flex items-center gap-2">
                  <CalendarDays className="text-blue-700" /> Principle 2: Access
                </span>
                <span>{open === 2 ? <ChevronUp /> : <ChevronRight />}</span>
              </button>
              {open === 2 && (
                <div className="mt-2 text-gray-600">
                  <p>
                    Ensure your team has the appropriate access without
                    overstepping privacy boundaries. Hubstaff ensures:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Customizable permissions for team roles</li>
                    <li>Data is stored securely</li>
                    <li>Access logs for transparency</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Principle 3 */}
            <div>
              <button
                onClick={() => toggle(3)}
                className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-800"
              >
                <span className="flex items-center gap-2">
                  <Users className="text-blue-700" /> Principle 3: Control
                </span>
                <span>{open === 3 ? <ChevronUp /> : <ChevronRight />}</span>
              </button>
              {open === 3 && (
                <div className="mt-2 text-gray-600">
                  <p>
                    Empower managers and employees with tools to manage their
                    workflows and data efficiently, while respecting privacy:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Managers can monitor without micromanaging</li>
                    <li>Employees control their visibility settings</li>
                    <li>Comprehensive audit trails</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={
              open === 1
                ? "https://a.storyblok.com/f/172398/1256x864/330cfeca26/principle-1-image.png/m/filters:format(webp):quality(70)"
                : open === 2
                ? "https://a.storyblok.com/f/172398/1256x864/1e6d255b2a/principle-2-image.png/m/filters:format(webp):quality(70)"
                : "https://a.storyblok.com/f/172398/1256x864/46d0570bb7/principle-3-image.png/m/filters:format(webp):quality(70)"
            }
            alt={`Principle ${open} illustration`}
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PrivacyPrinciples;
