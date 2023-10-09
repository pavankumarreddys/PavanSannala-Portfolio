import React from 'react'
import  heroImage from '../assets/heroImage.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import{Link} from 'react-scroll'

function Home() {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="justify-center items-center max-w-screen-lg mx-auto flex flex-col h-full px-4 md:flex-row">
        <div className="justify-center h-full flex flex-col">
          <h2 className='text-white text-4xl font-bold md:text-7xl'>I'am  a Front-End Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have hands on experience of building web applications.
            Currently, I love to work on web application using technologies like
            React, Tailwind, HTML, CSS, JavaScript
          </p>
          <div>
            
            <Link to='portfolio' smooth duration={500} className='group text-white flex items-center w-fit px-6 py-3
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-400 cursor-pointer'>
                Portfolio
                <span className='group-hover:rotate-90 duration-300 '><HiOutlineArrowNarrowRight size={20} className='ml-1' /></span>
              </Link>
          </div>
        </div>
        <div>
          <img src={heroImage} alt='my profile' className=' m-image rounded-2xl '/>
        </div>
      </div>
    </div>
  )
}

export default Home