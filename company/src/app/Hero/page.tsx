import {
  CalendarCheck,
  ChartColumn,
  NotebookText,
  Timer,
  Wallet,
} from "lucide-react";
import Carousel from "./carousel";

export default function Hero() {
  return (
    <div className="bg-white w-full">
      <div className="bg-gradient-to-r from-[#433795] via-[#222d4f] to-[#253053] px-32 mx-auto pt-32">
        <h1 className="text-6xl leading-[70px] text-center bg-clip-text  font-semibold mb-6 text-[#ffffff] max-w-4xl bg-red-300 mx-auto">
          Time tracking software for the global workforce
        </h1>

        <p className="text-lg text-center bg-clip-text text-[#ffffff] font-semibold">
          Integrated time tracking, productivity metrics, and payroll for your
          distributed team.
        </p>

        <div className="flex justify-center py-6">
          <input
            className="bg-white px-4 py-4 outline-none w-[280px] rounded-md border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            name="text"
            placeholder="Enter email or username"
            type="text"
          />
          <button className="cursor-pointer bg-violet-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-violet-700 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-violet-500 focus:ring-violet-300 focus:shadow-violet-400 px-5 py-2">
            Create Account
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 text-white  pb-3">
          <span className="text-[14px]">Free 14-day trial</span>
          <span className="h-4 w-px bg-white"></span>
          <span className="text-[14px]">No credit card required</span>
          <span className="h-4 w-px bg-white"></span>
          <span className="text-[14px]">Cancel anytime</span>
        </div>

        <div className="flex items-center justify-center gap-6  px-4 mt-14">
          {/* Card 1 */}
          <div className="group relative flex items-center gap-1 px-6 py-3 rounded-md bg-transparent backdrop-blur-md border border-white/10 text-white overflow-hidden cursor-pointer transition-all duration-300 hover:border-white">
            <span>
              <Timer size={20} />
            </span>
            <span className="font-semibold text-[14px]">
              Global time tracking
            </span>
            {/* Shining Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Card 2 */}
          <div className="group relative flex items-center gap-1 px-6 py-3 rounded-lg bg-transparent backdrop-blur-md border border-white/10 text-white overflow-hidden cursor-pointer transition-all duration-300 hover:border-white">
            <span>
              <ChartColumn size={20} />
            </span>
            <span>Productivity data</span>
            {/* Shining Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Card 3 */}
          <div className="group relative flex items-center gap-1 px-6 py-3 rounded-lg bg-transparent backdrop-blur-md border border-white/10 text-white overflow-hidden cursor-pointer transition-all duration-300 hover:border-white">
            <span>
              <Wallet size={20} />
            </span>
            <span>Flexible payroll</span>
            {/* Shining Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Card 4 */}
          <div className="group relative flex items-center gap-1 px-6 py-3 rounded-lg bg-transparent backdrop-blur-md border border-white/10 text-white overflow-hidden cursor-pointer transition-all duration-300 hover:border-white">
            <span>
              <CalendarCheck size={20} />
            </span>
            <span>Attendance management</span>
            {/* Shining Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Card 5 */}
          <div className="group relative flex items-center gap-1 px-6 py-3 rounded-lg bg-transparent backdrop-blur-md border border-white/10 text-white overflow-hidden cursor-pointer transition-all duration-300 hover:border-white">
            <span>
              <NotebookText size={20} />
            </span>
            <span>Project cost and budgeting</span>
            {/* Shining Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className=" max-w-5xl mx-auto " > 
          <Carousel />
        </div>
      </div>
    </div>
  );
}
