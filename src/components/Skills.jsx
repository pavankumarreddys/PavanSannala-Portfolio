import React from 'react'
import java from '../assets/java.png'
import express from '../assets/express.png'
import mongodb from '../assets/mongodb.png'
import bootstrap from '../assets/bootstrap.png'
import mysql from '../assets/mysql.png'

function Skills() {

    const techs = [
        {
            id: 1,
            link: java,
            style: 'shadow-sky-600',
            title:'Java'
        },
        {
            id: 2,
            link: mongodb,
            style: 'shadow-green-400',
            title: 'MongoDB'
        },
        {
            id: 3,
            link: mysql,
            style: 'shadow-sky-700',
            title: 'MySQL'
        },
        {
            id: 4,
            link: express,
            style: 'shadow-slate-500',
            title: 'Express'
        },
        {
            id: 5,
            link: bootstrap,
            style: 'shadow-purple-500',
            title: 'Bootstrap'
        },
    ]

  return (
      <div name='skills' className='bg-gradient-to-b from-black via-black to-gray-800  w-full h-full pt-40'>
          <div className='flex flex-col justify-center w-full h-full text-white max-w-screen-lg mx-auto p-4'>
              <div>
                  <p className='text-4xl font-bold p-2 inline border-b-4 border-gray-500 '>Skills</p>
                  <p className='py-6 text-xl'>Few more technologies that I've worked are</p>
              </div>

              <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 pt-30'>
                  {
                      techs.map(({ id, link, title, style }) => (
                          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                              <img src={link} alt='' className='w-20 mx-auto' />
                              <p className='mt-4'>{title}</p>
                          </div>

                      ))}



              </div>

          </div>


      </div>
      
      
  )
}

export default Skills