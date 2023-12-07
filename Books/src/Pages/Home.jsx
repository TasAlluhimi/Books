import React from 'react'
import main from '../assets/fly.svg'
import NavPar from '../Componenets/NavPar'
import Books from '../Componenets/Books'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate()
  return (
    <>
    {/* <NavPar/> */}
    <body className='bg-[#EAEAF5]'>

      <NavPar/>

        <div className='container mx-auto p-8 
        h-screen overflow-hidden md:rounded-lg md:p-10 lg:p-12'>

          {/* <div className="h-32 md:h-40"></div> */}

          <div className='max-sm:flex max-sm:flex-col md:flex md:flex-col 
          max-md:flex max-md:flex-col lg:grid lg:grid-cols-2'>

              <div className='font-sans text-4xl font-bold 
            max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl mt-16'>it's never too late
              to start reading c:
              <button
                  className="px-3 py-2.5 leading-none text-gray-200 
                  rounded-lg focus:outline-none focus:shadow-outline 
                  bg-gradient-to-b hover:from-indigo-500 from-[#35297B] to-[#35297B]
                  text-xl"
                  type="button" 
                  onClick={()=>{{navigate('/Books')}}}
                >
                  Books
                </button></div>
              
              <div className='border flex items-center 
              justify-center'>
                <img src={main}
                className='w-96'
                alt="" />
              </div>

          </div>
          
        </div>

        {/* <Books/> */}

        </body>
    </>
  )
}

export default Home