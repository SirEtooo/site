import React from 'react';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (  
    <nav className="h-12  justify-between flex bg-gray-200 p-2 lg:px-12 flex-auto text-black ">
  

        <Link to="/" className="flex p-1">
          <img src={logo} alt='logo'/>
        </Link>

        <ul className='lg:flex-auto flex-end inline-flex font-sans py-2 text-sm font-normal sm:font-bold md:font-normal  lg:font-normal lg:gap-12 '>
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
           <Link to="/contactUs">Contact</Link>
           </li>
       </ul>
   </nav>
  )
}
