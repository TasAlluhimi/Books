import React from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function SignUp() {

  const navigate = useNavigate()
  const [errorMes, setErrorMes] = React.useState('')
  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const addInputs = (event)=>{
    setInputs({...inputs,
        [event.target.name]: event.target.value
    })
}

const Sign_up = ()=>{

  if (inputs.name.length < 3) {
    setErrorMes('Name should be at least 3 characters long');
    return;
  }

  if (inputs.email.length < 1 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
    setErrorMes('Please enter a valid email');
    return;
  }

  if (!inputs.password || inputs.password.length < 6 || !/[a-zA-Z]/.test(inputs.password) || !/\d/.test(inputs.password)) {
    setErrorMes('Password should be longer than 6 characters and include both letters and numbers');
    return;
  }


    axios.put('https://655239d55c69a7790329ba98.mockapi.io/BooksUsers', {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
    })
    .then((response)=>{
        console.log("created");
        // localStorage.setItem('user', JSON.stringify(inputs))
        // localStorage.setItem('isLoggIn', true)
        
        navigate('/SignIn')

    })
}

  return (
    <>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
            className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 
            shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="text-white relative px-4 py-10 
        bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">

            <div className="text-center pb-6">
                <h1 className="text-3xl">Create an account!</h1>

                <p className="text-red-500 font-bold">
                    {/* error mess */}
                    {errorMes}
                </p>
            </div>

            <div>

                <input
                        className="shadow mb-4 appearance-none border rounded w-full 
                        py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                        focus:shadow-outline"
                        type="text" 
                        placeholder="Name" 
                        name="name"
                        value={inputs.name}
                        onChange={addInputs}
                        />

                <input
                        className="shadow mb-4 appearance-none border rounded w-full 
                        py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                        focus:shadow-outline"
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        value={inputs.email}
                        onChange={addInputs}
                        />

                <input
                        className="shadow mb-4 appearance-none border rounded w-full 
                        py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                        focus:shadow-outline"
                        type="password" 
                        placeholder="password" 
                        name="password"
                        value={inputs.password}
                        onChange={addInputs}
                        />

                <div className="flex justify-between">
                    <input
                        className="shadow bg-indigo-600 hover:bg-indigo-700 
                        text-white font-bold py-2 px-4 rounded focus:outline-none 
                        focus:shadow-outline"
                        type="button" value="Go ➤"
                        onClick={Sign_up}/>

                    <p>You Have an account?<br/> <Link to='/SignIn'>
                      
                      <span className='font-bold'>Sign in!</span></Link> </p>
                </div>

            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default SignUp