import React from 'react'

function Contact() {
  return (
      <div name='contact' className='w-full h-full bg-gradient-to-b from-gray-800 via-black to-gray-800 p-4 text-white pt-40'>
          <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                  <p className='text-4xl font-bold border-b-4 inline border-gray-500'>Contact</p>
                  <p className='py-6 text-xl'>submit the form below to get in touch with me</p>
              </div>
              
              <div className='flex  justify-center items-center'>
                  <form action="https://getform.io/f/74049272-7867-499c-a36b-b5f7a71f1a64" method='post' className='flex flex-col w-full md:w-1/2' >
                      <input type="text" name='name' placeholder='Enter your name'
                          className='p-2 bg-transparent border-2 text-white rounded-md  focus:outline-none '/>
                      <input type="email" name='email' placeholder='Enter your email'
                          className='my-4 p-2 bg-transparent border-2 text-white rounded-md  focus:outline-none ' />
                      <textarea name="message" id="" rows="10" placeholder='Enter your message' className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none '></textarea>
                      <button className='flex text-white bg-gradient-to-b from-cyan-500
                      to-blue-500 px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Contact