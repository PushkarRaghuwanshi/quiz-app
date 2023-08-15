import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/pngtree-quiz-logo-with-speech-bubble-symbols-png-image_6568572.png'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-black '>
      
        <Link to='/'>
            <img src={logo} alt='logo' width={90}  loading='lazy' 
            className='flex justify-center items-center'/>
        </Link>

        <nav className='w-[40%] justify-evenly  items-center self-center place-content-center'>
            <ul className='flex text-white justify-evenly'>
                <li>
                <Link to="/">Home</Link>
                </li>

                <li>
                <Link to="/">About</Link>
                </li>

                <li>
                <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar
