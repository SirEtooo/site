import React from 'react';
import profile from '../../img/profile.png'

export default function Header() {
  return (
     
    <div className=" max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl m-2">
        <div className="md:flex   place-content-center  py-12">
          <div className="">
              <img src={profile} alt='Omotolase' className='  rounded-full w-32 shadow-lg md:round  mx-auto'  />
          </div>
        
        <div clasNames="lg:flex item-center text-center ">
            <div className="text-sm tracking-wide text-indigo-600 lg:py-8 lg:px-6 font-semibold">
              <p>Hi; My name is</p>
                <h2 className='uppercase   block mt-1 text-lg leading-tight font-bold text-black hover:underline'>Omotolase Emmanual</h2>
                <h3 className="text-slate-500">Front - End Developer | Graphic Designer</h3>
        </div>  
        </div>
        </div>
    </div>
    
  )
}
