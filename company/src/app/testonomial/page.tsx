import React from 'react';
import {
 
  Star,
  
} from "lucide-react";


export default function Testimonial() {


  const data=[
    {
      id:1,
      img:"https://hubstaff.com/images/logos/getapp-dark.svg",
      content:"4.6 out of 5 stars from 1500 reviews",
      rating:4.6

    },
    {
      id:2,
      img:"https://hubstaff.com/images/logos/capterra-dark.svg",
      content:"4.6 out of 5 stars from 1500 reviews",
      rating:4.6

    },
    {
      id:3,
      img:"https://hubstaff.com/images/logos/g2-dark.svg",
      content:"4.5 out of 5 stars from 1500 reviews",
      rating:4.5

    },
  ]


  

  return (
    <div className='bg-[#f2f8ff] my-4 '>
      <div className='text-center py-10'>
        <p className='font-medium text-lg text-[#294dff]'>
          Time tracking tools to maximize your team’s productivity
        </p>
        <h3 className='text-[46px] font-medium text-[#253053]'>
          See what our customers say
        </h3>
      </div>

      <div className='flex justify-between '> 
      <div className='px-24 py-10 flex justify-between '>
      <div className="bg-[#1E293B] text-white w-[331px] h-[475px] py-6 px-8 rounded-lg shadow-lg">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-[#61DAFB] p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 3a7 7 0 107 7h-4a3 3 0 11-3-3V3z" />
            <path d="M7 7a3 3 0 11-3-3v4a7 7 0 003 3z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold">OneIMS</h2>
      </div>
      <p className="text-3xl font-bold text-[#38BDF8] mb-4">
        25% cost savings by eliminating wasted tasks
      </p>
      <div className="text-lg space-y-6">
        <div className='mt-10'>
          <span className="text-[#38BDF8] font-bold text-[30px] ">10% - 25%</span>
          <span className="ml-1 font-bold block ]">Project savings</span>
        </div>
        <hr className="border-[#94A3B8] my-2" />
        <div>
          <span className="text-[#38BDF8] font-bold text-[30px]">25%</span>
          <span className="font-bold block">Cost reduction from bad hires</span>
        </div>
      </div>
    </div>
      </div>
      <div className='px-24 py-10 flex justify-between'>
      <div className="bg-[#1E293B] text-white w-[331px] h-[475px] py-6 px-8 rounded-lg shadow-lg">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-[#61DAFB] p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 3a7 7 0 107 7h-4a3 3 0 11-3-3V3z" />
            <path d="M7 7a3 3 0 11-3-3v4a7 7 0 003 3z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold">OneIMS</h2>
      </div>
      <p className="text-3xl font-bold text-[#38BDF8] mb-4">
        25% cost savings by eliminating wasted tasks
      </p>
      <div className="text-lg space-y-6">
        <div className='mt-10'>
          <span className="text-[#38BDF8] font-bold text-[30px] ">10% - 25%</span>
          <span className="ml-1 font-bold block ]">Project savings</span>
        </div>
        <hr className="border-[#94A3B8] my-2" />
        <div>
          <span className="text-[#38BDF8] font-bold text-[30px]">25%</span>
          <span className="font-bold block">Cost reduction from bad hires</span>
        </div>
      </div>
    </div>
      </div>
      <div className='px-24 py-10 flex justify-between'>
      <div className="bg-[#1E293B] text-white w-[331px] h-[475px] py-6 px-8 rounded-lg shadow-lg">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-[#61DAFB] p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 3a7 7 0 107 7h-4a3 3 0 11-3-3V3z" />
            <path d="M7 7a3 3 0 11-3-3v4a7 7 0 003 3z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold">OneIMS</h2>
      </div>
      <p className="text-3xl font-bold text-[#38BDF8] mb-4">
        25% cost savings by eliminating wasted tasks
      </p>
      <div className="text-lg space-y-6">
        <div className='mt-10'>
          <span className="text-[#38BDF8] font-bold text-[30px] ">10% - 25%</span>
          <span className="ml-1 font-bold block ]">Project savings</span>
        </div>
        <hr className="border-[#94A3B8] my-2" />
        <div>
          <span className="text-[#38BDF8] font-bold text-[30px]">25%</span>
          <span className="font-bold block">Cost reduction from bad hires</span>
        </div>
      </div>
    </div>
      </div>
      </div>

    <div className='max-w-4xl mx-auto py-20 flex gap-10'>

      {
        data.map((itrm)=>{
          return (<>
             <div key={itrm.id} >
      <img src={itrm.img} />
      <p>{itrm.content}</p>
      <Star/>
    </div>
          </>)
        })
      }
 
    </div>
      
    </div>
  );
}







