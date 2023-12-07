import React from 'react'
import { useNavigate } from 'react-router-dom'
import main from '../assets/fly.svg'


function Error() {

  const navigate = useNavigate()
  return (
    <>
        
        <div className='bg-[#EAEAF5]'>

        <div className='container mx-auto p-8 
         md:rounded-lg md:p-10 lg:p-12'>

          <div className='max-sm:flex max-sm:flex-col md:flex md:flex-col 
          max-md:flex max-md:flex-col lg:grid lg:grid-cols-2'>

            <div className='flex flex-col justify-center items-center gap-10'>
            <div className='font-sans text-4xl font-bold 
            max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl mt-16 text-center'>404 <br /> Nothing here ~</div>
              <button
                  className="px-3 py-2.5 leading-none text-gray-200 
                  rounded-lg focus:outline-none focus:shadow-outline 
                  bg-gradient-to-b hover:from-indigo-500 from-[#35297B] to-[#35297B]
                  text-xl"
                  type="button" 
                  onClick={()=>{{navigate('/')}}}
                >
                  Home
                </button>

                </div>
              
              <div className='border flex items-center 
              justify-center'>
                <img src={main}
                className='w-[100%]'
                alt="" />
              </div>

          </div>
          
        </div>

       
        </div>

    </>
  )
}

export default Error