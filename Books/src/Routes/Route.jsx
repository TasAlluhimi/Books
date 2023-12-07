import React from 'react'
import Home from '../Pages/Home'
import { Routes, Route as R } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import Error from '../Errors/Error'
import Books from '../Pages/Books'
import Faivorate from '../Pages/Faivorate'
import Readed from '../Pages/Readed'
import BookDetails from '../Pages/BookDetails'

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<Home/>}></R>
            <R path='/SignIn' element={<SignIn/>}></R>
            <R path='/SignUp' element={<SignUp/>}></R>
            <R path='/*' element={<Error/>}></R>
            <R path='/Books' element={<Books/>}></R>
            <R path='/Faivorate' element={<Faivorate/>}></R>
            <R path='/Readed' element={<Readed/>}></R>
            <R path='/BookDetails/:rank' element={<BookDetails/>}></R>
        </Routes>
    </>
  )
}

export default Route