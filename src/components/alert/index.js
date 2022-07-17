import React from 'react'
import 'animate.css';

export default function Alert() {
  return (
    <div>
        <div className="bg-indigo-900">
            <div className=" mx-auto py-3 px-3 sm:px-6 lg:px-8 sm:justify-center animate__animated animate__pulse ">
              <div className="w-full flex items-center justify-between  flex-wrap">
                <div className="flex-1 flex items-center ">
                  <span className="flex p-2 rounded-lg bg-indigo-400 text-indigo-800">
                      
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  </span>
                  <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden"> We announced 20% off Graphic Design. </span>
                    <span className="hidden md:inline"> Big news! We're excited to announce 20% off on all Graphic Design. </span>
                  </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                  <a href="https://wa.me/message/ATBJFUDKQLB6O1" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"> Get In Touch</a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
  )
}
