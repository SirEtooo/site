import React from 'react';
import 'animate.css';

export default function HomeBody
() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg animate__animated animate__fadeInDown">
        <div className="px-4 py-5 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-4 ">
          <h3 className="text-lg leading-6 font-medium text-gray-500">Personal Information</h3> 
          <p className="mt-1 sm:max-w-prose text-sm text-gray-900 flex-col justify-center">I am a Senior Graphic Designer, UI/UX Designer and Front-End Developer with a strong sense for aesthetics and interaction. 
            My first priority is to satisfy my clients. If you are looking for quality, perfection, speed, professional looking designs, user friendly and fully responsive site feel free to contact me.<br/><span className='font-semibold'> I am the best man for the job.</span> </p>
        </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full Name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Omotolase Emmanuel OLADUMIYE</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Specialization</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Frontend Developer | Graphic Design</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Other Specialization</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Social Media Manager | Brand Naming | Brand Consultant</dd>
          </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
          <dt className="text-sm font-medium text-gray-500">Email Address</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">oladumiyetolase@gmail.com</dd>
        </div>
          
          
          <div className=" ">
            <div className="max-w-screen-2xl mx-auto">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide  lg:font-bold lg:text-xl uppercase overline decoration-gray-900">Why Me</h2>
                </div>

                <div className="mt-10 bg-indigo-800 py-4 ">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 p-8">
                        <div className="relative">
                        <dt>
               
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                
                            <svg className=" h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            </div>
                            <p className="ml-16 text-lg leading-6 font-semibold text-gray-100 ">Fast Delivery</p>  
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-400 text-center items-center">Your project is my piority. Completing your project on or before the agreed day is guaranty as i will always put you first.</dd>
                        </div>

                        <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                            </div>
                            <p className="ml-16 text-lg leading-6 font-semibold text-gray-100">Fluent in English</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-400">Good Communication is the bridge between confussion and clarity. I have the ability to express any idea without hesitation, with good vocabulary and grammar; people understand me easily. Both my spoken and written skills are good.</dd>
                        </div>

                        <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            </div>
                            <p className="ml-16 text-lg leading-6 font-semibold text-gray-100">Affordable Price</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-400">Price is what you pay. Value is what you get. For me, it's not about price. It's about necessity, quality, and usefulness. I take my time to deliver quality beyound your price as all penny count.</dd>
                        </div>

                        <div className="relative">
                        <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            </div>
                            <p className="ml-16 text-lg leading-6 font-semibold text-gray-100">Project Understanding</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-400 ">Profit in business comes from repeat customers, customers that boast about your project or service, and that bring friends with them. i believe Understanding the project will give room for job well done and job well done will come back for more.</dd>
                        </div>
                    </dl>
                </div>
            </div>
            </div>

      </dl>
    </div>

    

  </div>
  )
}
