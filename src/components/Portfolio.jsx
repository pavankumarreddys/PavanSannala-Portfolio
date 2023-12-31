
import React from 'react'
import nxtrendz from '../assets/portfolio/nxtrendz.png'
import nxtvideo from '../assets/portfolio/nxtvideo.png'
import foodmunch from '../assets/portfolio/foodmunch.png'
function Portfolio() {

    const portfolios = [
    
        {
            id: 1,
            src: nxtvideo,
            demoLink:'https://pavanvideosnxt.ccbp.tech',
        },
        {
            id: 2,
            src: nxtrendz,
            demoLink:'https://pavantrends.ccbp.tech',
        },
        
        {
            id: 3,
            src: foodmunch,
            demoLink: 'https://pavanfoodies.ccbp.tech/',
        },
     ]

  return (
      <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full h-full text-white  pt-40 pb-20'>
          <div className='max-w-screen-lg md:w-full p-4 mx-auto flex flex-col justify-center
          w-full h-full'>
              <div className='pb-8'>
                  <div className="waviy text-4xl font-bold inline border-b-4 border-gray-500">
                        <span style={{ "--i": "1" }}>P</span>
                        <span style={{ "--i": "2" }}>o</span>
                        <span style={{ "--i": "3" }}>r</span>
                        <span style={{ "--i": "5" }}>t</span>
                        <span style={{ "--i": "4" }}>f</span> 
                        <span style={{ "--i": "4" }}>o</span> 
                        <span style={{ "--i": "4" }}>l</span> 
                        <span style={{ "--i": "4" }}>i</span> 
                        <span style={{ "--i": "4" }}>o</span>
                  </div>
                  <p className='py-6 text-xl'>Check out some of my work right here</p>
              </div>
              <div className='grid sm:grid-cols-3 md:grid-col-1 lg-grid-col-1 gap-8 px-12 sm:px-0'>
              {
                portfolios.map(({ id, src, codeLink,demoLink }) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt='' className='rounded-t-md  duration-200 hover:scale-105 hover:rounded-md' />
                        <div className='flex items-center justify-center'>
                            <a href={demoLink} target='_blank' rel='noreferrer'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            </a>
                        </div>
                    </div>
                  ))
              }
              </div>
           </div>
    </div>
  )
}

export default Portfolio