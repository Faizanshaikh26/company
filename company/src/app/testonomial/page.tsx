import React from 'react';

export default function Testimonial() {

  const testimonials = [
    {
      id: 1,
      companyName: 'OneIMS',
      mainHeading: '25% cost savings by eliminating wasted tasks',
      projectSavings: '10% - 25% Project savings',
      costReduction: '25% Cost reduction from bad hires',
      feedback: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse adipisci, excepturi laborum porro delectus officiis illo nesciunt natus sequi quaerat?',
    },
    {
      id: 2,
      companyName: 'TechSpark',
      mainHeading: '30% efficiency boost in project workflows',
      projectSavings: '15% Project cost savings',
      costReduction: '20% Cost reduction from inefficiencies',
      feedback: 'Amazing tool that transformed our project management workflow! Highly recommended.',
    },
    {
      id: 3,
      companyName: 'InnovateX',
      mainHeading: '40% faster project completion time',
      projectSavings: '20% Project cost reduction',
      costReduction: '35% Cost saved from enhanced team collaboration',
      feedback: 'This tool helped us achieve milestones we thought were impossible. Excellent support team too!',
    },
  ];

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

      <div className='px-24 py-10 flex justify-between'>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='card'>
            <div className='first-content'>
              <div className='text-white p-6'>
                {/* Logo Section */}
                <div className='mb-4'>
                  <h1 className='text-xl font-semibold'>{testimonial.companyName}</h1>
                </div>

                {/* Main Heading */}
                <div className='mb-6'>
                  <h2 className='text-2xl font-bold leading-snug'>
                    {testimonial.mainHeading}
                  </h2>
                </div>

                {/* Savings Section */}
                <div className='space-y-4'>
                  <p className='text-lg'>
                    <span className='font-bold text-green-400'>{testimonial.projectSavings}</span>
                  </p>
                  <hr className='border-gray-500' />
                  <p className='text-lg'>
                    <span className='font-bold text-green-400'>{testimonial.costReduction}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='second-content'>
              <p>{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
