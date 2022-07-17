import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import {FaTwitter } from 'react-icons/fa';
import {FaInstagramSquare } from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io';
import {HiMail} from 'react-icons/hi';
import {IoMdCall} from 'react-icons/io';
import 'animate.css';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div class="container max-w-screen-2xl  bg-gray-800 h-auto">
           <h2 className='flex justify-center item-center px-8 py-4 text-center font-bold text-md text-gray-300'>© Copyright 2022 </h2>

           <nav className=" ">
                <ul className='flex justify-center item-center  text-center font-md text-md text-gray-300 '>
                    <li className='px-3 hover:font-semibold '>
                    <Link to="/about">About</Link>
                    </li>
                    <li className=' px-3 hover:font-semibold'>
                    <Link to="/experience">Experience</Link>
                    </li>
                    <li className='px-3 hover:font-semibold'>
                    <Link to="/work">Work</Link>
                    </li>
                    <li className='px-3 hover:font-semibold'>
                        <Link to='/contactUs'>Contact</Link>
                    </li>
                </ul>
            </nav>
           <div className="px-6 py-4 flex flex-auto justify-center items-center animate__animated animate__bounce">
                <a href='https://web.facebook.com/Connectwithetoo' target="_blank" rel="noopener noreferrer" className='mx-4  text-gray-200'><FaFacebook/></a>
                <a href='https://twitter.com/connectwithetoo' target="_blank" rel="noopener noreferrer"className='mx-4 text-gray-200' ><FaTwitter/></a>
                <a href='https://www.instagram.com/connectwithetoo/' target="_blank" rel="noopener noreferrer" className='mx-4 text-gray-200'><FaInstagramSquare/></a>
                <a href='https://wa.me/message/ATBJFUDKQLB6O1' target="_blank" rel="noopener noreferrer" className='mx-4 text-gray-200'><IoLogoWhatsapp/></a>
                <a href = "mailto:oladumiyetolase@gmail.com?subject = Feedback&body = Message" target="_blank" rel="noopener noreferrer" className='mx-4 text-gray-200'><HiMail/></a>
                <a href="tel:+2348131314645" className='mx-4 text-gray-200'><IoMdCall/></a>

            </div>

        </div>
  )
}
