import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import logoImg from '../Assets/image 27.png'



//import {XIcon} from '@heroicons/react/outline'
//import { BeakerIcon, MenuIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const handleClose = () => setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-centerw-full h-full'>
        <div className='flex items-center'>
          <img src={logoImg} alt="/"className='text-3xl font-bold mr-4 sm:text-4xl'/>
            
          
          <ul className='hidden md:flex font-bold cursor-pointer'>
            <li><Link to="home" smooth={true} duration={500} className="underline">Home</Link></li>
            <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
            <li><Link to="platform" smooth={true} offset={-100} duration={500}>Platform</Link></li>
            <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4 font-bold'>Sign In</button>
          <button className='px-8 py-3 my-3 font-bold'>Sign Out</button>
        </div>
        <div className='md:hidden mt-5 mr-5' onClick={handleClick}>
          {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
          }

        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>

        <li className='border-b-2 border-zinc-300 w-full'><Link to="home" onClick={handleClose} smooth={true} duration={500}>Home</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link to="about"  onClick={handleClose} smooth={true} offset={-200} duration={500}>About</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link to="support" onClick={handleClose} smooth={true} offset={-50} duration={500}>Support</Link></li>
        <li className='border-b-2 border-zinc-300 w-full' ><Link to="platform" onClick={handleClose} smooth={true} offset={-100} duration={500}>Platform</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link to="pricing" onClick={handleClose} smooth={true} offset={-50} duration={500}>Pricing</Link></li>
        <div className='flex flex-col my-4'>
          <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Out</button>
        </div>
      </ul>


    </div>
  )
}

export default Navbar