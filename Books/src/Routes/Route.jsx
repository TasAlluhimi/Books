import React from 'react'
import Home from '../Pages/Home'
import { Routes, Route as R } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import Error from '../Errors/Error'
import Books from '../Componenets/Books'

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<Home/>}></R>
            <R path='/SignIn' element={<SignIn/>}></R>
            <R path='/SignUp' element={<SignUp/>}></R>
            <R path='/*' element={<Error/>}></R>
            <R path='/Books' element={<Books/>}></R>
        </Routes>
    </>
  )
}

export default Route