import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import {FaTwitter } from 'react-icons/fa';
import {FaInstagramSquare } from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io';
import {HiMail} from 'react-icons/hi';
import {IoMdCall} from 'react-icons/io';
import 'animate.css';

export default function ContaactBody() {
  return (
            <div className='h-auto'>
        
            
                <div className="flex justify-center items-center my-24  ">
                <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                    <div className="py-3 px-6 border-b border-gray-300 font-semibold">
                        <h3 className='text-gray-600'>Feel Like Contacting Us</h3>
                    </div>
                    <div className="p-6 flex flex-auto justify-center items-center animate__animated animate__bounce">
                        <a href='https://web.facebook.com/Connectwithetoo' target="_blank" rel="noopener noreferrer" className='mx-4  text-indigo-800'><FaFacebook/></a>
                        <a href='https://twitter.com/connectwithetoo' target="_blank" rel="noopener noreferrer"className='mx-4 text-indigo-800' ><FaTwitter/></a>
                        <a href='https://www.instagram.com/connectwithetoo/' target="_blank" rel="noopener noreferrer" className='mx-4 text-indigo-800'><FaInstagramSquare/></a>
                        <a href='https://wa.me/message/ATBJFUDKQLB6O1' target="_blank" rel="noopener noreferrer" className='mx-4 text-indigo-800'><IoLogoWhatsapp/></a>
                    
                    </div>
                    <div className="p-6 flex flex-auto justify-center items-center animate__animated animate__bounce border-b border-gray-300">
                    <a href = "mailto:oladumiyetolase@gmail.com?subject = Feedback&body = Message" target="_blank" rel="noopener noreferrer" className='mx-4 text-indigo-800'>
                        <HiMail/>
                    </a>
                    <a href="tel:+2348131314645" className='mx-4 text-indigo-800'><IoMdCall/></a>

                    </div>
                    <div className="mx-4 text-indigo-800 p-6">
                        <h4>I am available 24/7....</h4>
                    </div>
                </div>
        </div>
    </div>
  )
}
