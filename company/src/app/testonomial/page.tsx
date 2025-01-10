import React from "react";
import { Star, StarHalf } from "lucide-react";

export default function Testimonial() {
  const data = [
    {
      id: 1,
      img: "https://hubstaff.com/images/logos/getapp-dark.svg",
      content: "4.6 out of 5 stars from 1500 reviews",
      rating: 4.6,
    },
    {
      id: 2,
      img: "https://hubstaff.com/images/logos/capterra-dark.svg",
      content: "4.6 out of 5 stars from 1500 reviews",
      rating: 4.6,
    },
    {
      id: 3,
      img: "https://hubstaff.com/images/logos/g2-dark.svg",
      content: "4.5 out of 5 stars from 1500 reviews",
      rating: 4.5,
    },
  ];

  const renderStars = (rating:any) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, index) => (
          <Star key={`full-${index}`} className="text-yellow-400 w-4 " />
        ))}
        {halfStar && <StarHalf className="text-yellow-400 w-4" />}
        {[...Array(emptyStars)].map((_, index) => (
          <Star key={`empty-${index}`} className="text-gray-300 " />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#f2f8ff] my-4 ">
      <div className="text-center py-10">
        <p className="font-medium text-lg text-[#294dff]">
          Time tracking tools to maximize your team’s productivity
        </p>
        <h3 className="text-[46px] font-medium text-[#253053]">
          See what our customers say
        </h3>
      </div>

      <div className="flex justify-between px-28">
        <div className=" py-10  ">
          <div className="bg-[#253053] text-white w-[391px] h-[475px] py-6 px-10 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
             <img src="https://a.storyblok.com/f/293525/116x40/68c8932d45/oneims_logo.svg" alt="" />
            </div>
            <p className="text-4xl font-bold text-white mb-4">
              <span className="text-[#08ba98]">25%</span> cost savings by eliminating wasted tasks
            </p>
            <div className="text-lg space-y-6">
              <div className="mt-10">
                <span className="text-[#08ba98] font-bold text-[28px] ">
                  10% - 25%
                </span>
                <span className="ml-1 font-bold block ]">Project savings</span>
              </div>
              <hr className="border-[#94A3B8] my-2" />
              <div>
                <span className="text-[#08ba98] font-bold text-[28px]">
                  25%
                </span>
                <span className="font-bold block">
                  Cost reduction from bad hires
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className=" py-10 ">
          <div className="bg-white w-[391px] h-[475px] py-6 px-8 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
             <img src="https://a.storyblok.com/f/293525/168x114/54f107a54f/bachv4tmzickvpdgj90c-1.png/m/filters:format(webp):quality(70)" alt="" className="w-16" />
            </div>
            <p className="text-4xl font-bold text-[#253053] mb-4">
             <span className="text-[#294dff]"> 30% </span> faster project complition
            </p>
            <div className="text-lg space-y-6">
              <div className="mt-10">
                <span className="  text-[18px] ">
                  Book keeping reduced
                </span>
                <span className=" text-[#294dff] font-bold text-[25px] block ]">1 week to 1-2 days</span>
              </div>
              <hr className="border-[#94A3B8] my-2" />
              <div>
                <span className="text-[#294dff] font-bold text-[28px] mt-4 ">
                  Over 100% ROI
                </span>
                <span className="font-bold block text-base mt-4">
                 By Improving produnctivty and visiblity
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-10 ">
          <div className="bg-[#ffe7aa] text-white w-[391px] h-[475px] py-6 px-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              
              <img src="https://a.storyblok.com/f/293525/115x31/0d1406e2bb/group-323.svg" alt="" />
            </div>
            <p className="text-4xl font-bold text-[#253053] mb-4">
              <span className="text-[#1f95ff]">10%</span> cost savings by eliminating wasted tasks
            </p>
            <div className="text-lg space-y-6">
              <div className="mt-10">
                <span className="text-[#1f95ff] font-bold text-[30px]  ">
                  10% - 25%
                </span>
                <span className="ml-1  mt-2 font-semibold block  text-[#253053]">Project savings</span>
              </div>
              <hr className="border-[#94A3B8] my-2" />
              <div>
                <span className="text-[#1f95ff] font-bold text-[25px]">
                  100% confidenece
                </span>
                <span className="font-bold block text-[#253053]">
                  In running a remote opertains
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-20 flex gap-14">
        {data.map((itrm) => {
          return (
            <>
              <div key={itrm.id}>
                <img src={itrm.img} className="mb-3" />
                <p className="text-base mb-3">{itrm.content}</p>
                <p className="ml-10">{renderStars(itrm.rating)}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
