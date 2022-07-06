
import React from 'react'
// import digitalClock from '../assets/portfolio/digitalClock.png'
import movingTaxi from '../assets/portfolio/movingTaxi.png'
 import profileCard from '../assets/portfolio/profileCard.png'
import quiz from '../assets/portfolio/quiz.png'


function Portfolio() {

    const portfolios = [
    
        {
            id: 1,
            src: quiz,
            demoLink:'https://flashcardquiz-santoshkumarkuchettireactproject.netlify.app',
            codeLink:'https://github.com/santosh-kuchetti/flashCard-Quiz',
        },
        {
            id: 2,
            src: movingTaxi,
            demoLink:'https://santosh-kuchetti.github.io/movingTaxi/',
            codeLink:'https://github.com/santosh-kuchetti/movingTaxi',
        },
        
        // {
        //     id: 3,
        //     src: digitalClock,
        //     demoLink: 'https://santosh-kuchetti.github.io/digitalClock/',
        //     codeLink: 'https://github.com/santosh-kuchetti/digitalClock',
        // },
        {
            id: 3,
            src: profileCard,
            demoLink: 'https://santosh-kuchetti.github.io/profilrCardHoverEffect/',
            codeLink: 'https://github.com/santosh-kuchetti/profilrCardHoverEffect',
        },
     ]

  return (
      <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full h-full text-white  pt-40 pb-20'>
          <div className='max-w-screen-lg md:w-full p-4 mx-auto flex flex-col justify-center
          w-full h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
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
                              
                                <a href={codeLink} target='_blank' rel='noreferrer'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
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