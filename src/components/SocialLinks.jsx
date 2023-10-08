import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function SocialLinks() {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/sannala-pavan-kumar-reddy-748123154/',
            style:'rounded-tr-md'
                
                
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/pavankumarreddys',
            
                
                
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:pavanreddyr34.gmail.com',
            
                
                
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: './PAVAN SANNALA RESUME (2).pdf',
            style: "rounded-br-md",
            download:true,
                
                
        },
    ]

  return (
      <div className='hidden lg:flex  flex flex-col top-[35%] left-0 fixed'>
          
          

          <ul>
              {links.map(({ id, child, href, style, download }) => (
                  // eslint-disable-next-line no-useless-concat
                  <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md" + " " +style}>
                      <a
                          href={href}
                          className="flex justify-between items-center w-full text-white"
                          download={download}
                          target='_blank'
                          rel='noreferrer'
                          
                      >
                        {child}
                      </a>
                  </li>
                ))}
          </ul>
    </div>
  )
}

export default SocialLinks;