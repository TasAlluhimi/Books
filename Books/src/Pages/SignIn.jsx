import React from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function SignIn() {

  const navigate = useNavigate()
  // const [user, setUser] = React.useState([])
  const [errorMes, setErrorMes] = React.useState('')
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });
  const [users, setUsers] = React.useState([])

  const addUser = (event)=>{
    setUser({...user,
        [event.target.name]: event.target.value
    })
}

  React.useEffect(()=>{

}, [])

  const Sign_in = ()=>{

    
    if (!user.email) {
      setErrorMes('Please enter your email');
      return;
    }

    if (!user.password) {
      setErrorMes('Please enter your Password');
      return;
    }



    axios.get('https://655239d55c69a7790329ba98.mockapi.io/BooksUsers')
    .then((response) => {
      console.log(response.data);
      setUsers(response.data);
      
      const result = users.find(
        (item) => item.email === user.email && item.password === user.password
      );
      console.log(result);

      if (result) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isLoggIn', true);
        localStorage.setItem('userId', result.id)
        
        navigate('/');
      } else {
        setErrorMes('Email or Password is incorrect');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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
                <h1 className="text-3xl">Sign in!</h1>

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
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        value={user.email}
                        onChange={addUser}
                        />

                <input
                        className="shadow mb-4 appearance-none border rounded w-full 
                        py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                        focus:shadow-outline"
                        type="password" 
                        placeholder="password" 
                        name="password"
                        value={user.password}
                        onChange={addUser}
                        />

                <div className="flex justify-between">
                    <input
                        className="shadow bg-indigo-600 hover:bg-indigo-700 
                        text-white font-bold py-2 px-4 rounded focus:outline-none 
                        focus:shadow-outline"
                        type="button" value="Go ➤"
                        onClick={Sign_in}/>

                    <p>You don't Have an account?<br/> <Link to='/SignUp'>
                      
                      <span className='font-bold'>Sign up!</span></Link> </p>
                </div>

            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default SignIn