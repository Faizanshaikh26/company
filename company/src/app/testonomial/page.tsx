import React from "react";
import { Star, StarHalf } from "lucide-react";

type TestimonialData = {
  id: number;
  img: string;
  content: string;
  rating: number;
};

export default function Testimonial() {
  const data: TestimonialData[] = [
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

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, index) => (
          <Star key={`full-${index}`} className="text-yellow-400 w-4" />
        ))}
        {halfStar && <StarHalf className="text-yellow-400 w-4" />}
        {[...Array(emptyStars)].map((_, index) => (
          <Star key={`empty-${index}`} className="text-gray-300 w-4" />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#f2f8ff] py-12 ">
      <div className="text-center py-10">
        <p className="font-medium text-lg text-[#294dff]">
          Time tracking tools to maximize your team’s productivity
        </p>
        <h3 className="text-[46px] font-medium text-[#253053]">
          See what our customers say
        </h3>
      </div>

      <div className="flex justify-between px-28">
        {/* First Card */}
        <div className="py-10">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-[#253053] text-white w-[391px] h-[475px] py-6 px-10 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://a.storyblok.com/f/293525/116x40/68c8932d45/oneims_logo.svg"
                    alt="OneIMS Logo"
                  />
                </div>
                <p className="text-4xl font-bold text-white mb-4">
                  <span className="text-[#08ba98]">25%</span> cost savings by
                  eliminating wasted tasks
                </p>
                <div className="text-lg space-y-6">
                  <div className="mt-10">
                    <span className="text-[#08ba98] font-bold text-[28px]">
                      10% - 25%
                    </span>
                    <span className="ml-1 font-bold block">Project savings</span>
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
              <div className="flip-card-back bg-[#ffffff] text-[#636b83] w-[391px] h-[475px] py-6 px-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://a.storyblok.com/f/293525/117x40/faf4fdb088/group-283.svg"
                    alt="OneIMS Logo"
                  />
                </div>

                <div className="mt-8 pb-10 ">
                  <p className="text-[18px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod veritatis minima molestiae quia deleniti aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, soluta.</p>
                </div>

                <div className="mt-28">
                  <h3 className="font-semibold text-black">Solomi Triputji</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="py-10">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white w-[391px] h-[475px] py-6 px-8 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://a.storyblok.com/f/293525/168x114/54f107a54f/bachv4tmzickvpdgj90c-1.png/m/filters:format(webp):quality(70)"
                    alt="Bach Logo"
                    className="w-16"
                  />
                </div>
                <p className="text-4xl font-bold text-[#253053] mb-4">
                  <span className="text-[#294dff]">30%</span> faster project
                  completion
                </p>
                <div className="text-lg space-y-6">
                  <div className="mt-10">
                    <span className="text-[18px]">Bookkeeping reduced</span>
                    <span className="text-[#294dff] font-bold text-[25px] block">
                      1 week to 1-2 days
                    </span>
                  </div>
                  <hr className="border-[#94A3B8] my-2" />
                  <div>
                    <span className="text-[#294dff] font-bold text-[28px]">
                      Over 100% ROI
                    </span>
                    <span className="font-bold block text-base">
                      By improving productivity and visibility
                    </span>
                  </div>
                </div>
              </div>
              <div className="flip-card-back bg-[#ffffff] text-[#636b83] w-[391px] h-[475px] py-6 px-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
              <img
                    src="https://a.storyblok.com/f/293525/168x114/54f107a54f/bachv4tmzickvpdgj90c-1.png/m/filters:format(webp):quality(70)"
                    alt="Bach Logo"
                    className="w-16"
                  />
                </div>

                <div className="mt-8 pb-10 ">
                  <p className="text-[18px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod veritatis minima molestiae quia deleniti aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, soluta.</p>
                </div>

                <div className="mt-28">
                  <h3 className="font-semibold text-black">Solomi Triputji</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="py-10">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-[#ffe7aa] text-white w-[391px] h-[475px] py-6 px-8 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src="https://a.storyblok.com/f/293525/115x31/0d1406e2bb/group-323.svg"
                    alt="Group Logo"
                  />
                </div>
                <p className="text-4xl font-bold text-[#253053] mb-4">
                  <span className="text-[#1f95ff]">10%</span> cost savings by
                  eliminating wasted tasks
                </p>
                <div className="text-lg space-y-6">
                  <div className="mt-10">
                    <span className="text-[#1f95ff] font-bold text-[30px]">
                      10% - 25%
                    </span>
                    <span className="ml-1 mt-2 font-semibold block text-[#253053]">
                      Project savings
                    </span>
                  </div>
                  <hr className="border-[#94A3B8] my-2" />
                  <div>
                    <span className="text-[#1f95ff] font-bold text-[25px]">
                      100% confidence
                    </span>
                    <span className="font-bold block text-[#253053]">
                      In running remote operations
                    </span>
                  </div>
                </div>
              </div>
              <div className="flip-card-back bg-[#ffffff] text-[#636b83] w-[391px] h-[475px] py-6 px-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
              <img
                    src="https://a.storyblok.com/f/293525/115x31/0d1406e2bb/group-323.svg"
                    alt="Group Logo"
                  />
                </div>

                <div className="mt-8 pb-10 ">
                  <p className="text-[18px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod veritatis minima molestiae quia deleniti aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, soluta.</p>
                </div>

                <div className="mt-28">
                  <h3 className="font-semibold text-black">Solomi Triputji</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-20 flex gap-14">
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.img} className="mb-3" alt="Testimonial Logo" />
            <p className="text-base mb-3">{item.content}</p>
            <div className="ml-10">{renderStars(item.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
