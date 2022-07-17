import React from 'react';
import Beth from '../../img/beth.png'
import gain from '../../img/gain_new_logo_designs.png'
import oje from '../../img/oje.png'
import palvoice from '../../img/palvoice.png'
import women from '../../img/women.png'

export default function AboutBody() {
  return (
  <div>
        <div class="container max-w-screen-2xl  bg-indigo-900">
           <h2 className='flex justify-center item-center p-8 text-center font-bold text-4xl text-gray-300'>Selected  Clients</h2>
        </div>

        <div className='md:grid md:grid-cols-4  md:gap-x-8 '>
            
            
            <div className="flex justify-center m-4 item-center">
                <div className="rounded-lg shadow-lg bg-slate-100 item-center max-w-sm">
                    <div className='flex justify-center item-center'>
                        <img className="rounded-t-lg W-24 h-24 p-4 " src={Beth} alt=""/>
                    </div>
                    
                    <div className="p-6 bg-white ">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">BETH FRAGRANCE</h5>
                        {/* <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                    </div>
                </div>
            </div>
            <div className="flex justify-center m-4 item-center">
                <div className="rounded-lg shadow-lg bg-slate-100 item-center max-w-sm">
                    <div className='flex justify-center item-center'>
                        <img className="rounded-t-lg W-24 h-24 p-4 " src={gain} alt=""/>
                    </div>
                    
                    <div className="p-6 bg-white ">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">GAIN INCUBATOR</h5>
                        {/* <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center m-4 item-center">
                <div className="rounded-lg shadow-lg bg-slate-100 item-center max-w-sm">
                    <div className='flex justify-center item-center'>
                        <img className="rounded-t-lg W-24 h-24 p-4 " src={oje} alt=""/>
                    </div>
                    
                    <div className="p-6 bg-white ">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">OJE ARIS</h5>
                        {/* <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center m-4 item-center">
                <div className="rounded-lg shadow-lg bg-slate-100 item-center max-w-sm">
                    <div className='flex justify-center item-center'>
                        <img className="rounded-t-lg W-24 h-24 p-4 " src={palvoice} alt=""/>
                    </div>
                    
                    <div className="p-6 bg-white ">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">PALVOICE RECORD</h5>
                        {/* <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                    </div>
                </div>
            </div>
            
           <div className="flex justify-center m-4 item-center">
                <div className="rounded-lg shadow-lg bg-slate-100 item-center max-w-sm">
                    <div className='flex justify-center item-center'>
                        <img className="rounded-t-lg W-24 h-24 p-4 " src={women} alt=""/>
                    </div>
                    
                    <div className="p-6 bg-white ">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">WOMEN ON THE MISSION</h5>
                        {/* <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </p> */}
                    </div>
                </div>
            </div>
            
        </div>
  </div>
  )
}
