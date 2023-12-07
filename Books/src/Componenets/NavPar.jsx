import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function NavPar() {

  const user = localStorage.getItem('user')
  const userData = JSON.parse(user);
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('isLoggIn'));

 

    const navigate = useNavigate()

    const sign_out = () => {
        localStorage.clear()
        setLoggedIn(false);
    };


  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const mobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  
  return (
    <div>
           <nav className={`border-gray-200 w-full border-none`}>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src='https://cdn-icons-png.flaticon.com/128/5448/5448104.png' className="h-16" alt="Logo" /> */}
          <p className='font-sans text-2xl font-bold 
          max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl text-black'>B<span className='text-[#F4C4BB]'>oo</span>ks</p>

        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          
        {loggedIn ? (
            
            
            <div className='flex justify-center items-center gap-3'>
                <p className='text-black'>Hey Reader♡</p>
             <button
              type="button"
              onClick={sign_out}
              className="px-3 py-2.5 leading-none text-gray-200 
              rounded-lg focus:outline-none focus:shadow-outline 
              bg-gradient-to-b hover:from-indigo-500 from-[#35297B] to-[#35297B]"
            >
              Sign out
            </button>
            </div>
             

            ) : (
                <button
                  className="px-3 py-2.5 leading-none text-gray-200 
                  rounded-lg focus:outline-none focus:shadow-outline 
                  bg-gradient-to-b hover:from-indigo-500 from-[#35297B] to-[#35297B]"
                  type="button" 
                  onClick={()=>{{navigate('/SignUp')}}}
                >
                  Sign Up
                </button>
            )}


          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
            dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={showMobileMenu}
            onClick={mobileMenuClick}
          >

            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${showMobileMenu ? 'block' : 'hidden'}`}
          id="navbar-cta"
        >
          <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg 
          md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0
          dark:border-gray-700 mr-10`}>
            <li>
              <Link to="/" className={`block py-2 px-3 md:p-0 rounded 
               md:dark:hover:bg-transparent`}>
                Home
              </Link>
            </li>
            <li>
            </li>

            {loggedIn? 
           
            <li>
              <Link
                to="/Faivorate"
                className={`block py-2 px-3 md:p-0 rounded 
                md:dark:hover:bg-transparent `}
              >
                Faivorate
              </Link>
            </li>
            :''}

              {loggedIn? 
             <li>
             <Link
               to="/Readed"
               className={`block py-2 px-3 md:p-0 rounded 
               md:dark:hover:bg-transparent `}
             >
               Readed
             </Link>
           </li>
           :''}

           
            
          </ul>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default NavPar