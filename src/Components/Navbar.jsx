import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })

  }, [])

  return (
    <nav className={`text-white p-4 flex justify-between items-center px-32 fixed w-full z-10 ${sticky ? 'bg-black hover:text-white' : ''}`}>
      <h1 className='h-10 font-bold text-4xl'>Educato.</h1>
      <ul className="flex gap-12 items-center">
        <li className='text-lg font-semibold cursor-pointer transform duration-300 hover:scale-125 hover:text-gray-300'>
          <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li className='text-lg font-semibold cursor-pointer transform duration-300 hover:scale-125 hover:text-gray-300'>
          <Link to='program' smooth={true} offset={-280} duration={500}>Program</Link>
        </li>
        <li className='text-lg font-semibold cursor-pointer transform duration-300 hover:scale-125 hover:text-gray-300'>
          <Link to='about' smooth={true} offset={-180} duration={500}>About us</Link>
        </li>
        <li className='text-lg font-semibold cursor-pointer transform duration-300 hover:scale-125 hover:text-gray-300'>
          <Link to='campus' smooth={true} offset={-130} duration={500}>Campus</Link>
        </li>
        <li className='text-lg font-semibold cursor-pointer transform duration-300 hover:scale-125 hover:text-gray-300'>
          <Link to='testimonial' smooth={true} offset={-310} duration={500}>Testimonials</Link>
        </li>
        <li>
          <button className="bg-white text-black rounded-full py-3 px-7 cursor-pointer hover:bg-gray-200">
            <Link to='contact' smooth={true} offset={-280} duration={500}>Contact us</Link>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

