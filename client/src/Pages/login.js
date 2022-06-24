import React from 'react'
import LoginWithGoogle from '../Component/loginWithGoogle'

export default function login({setLoginState}) {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen bg-gray-200' >
      <h1 style={{"fontFamily":"Lato", "fontSize":"30px", "marginBottom":"22px"}}>
        Login With Google Account
      </h1>
      <LoginWithGoogle setLoginState = {setLoginState}/>
    </div>
    </>
  )
}
