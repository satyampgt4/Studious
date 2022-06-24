import React from 'react'
import { GoogleLogin } from 'react-google-login'

export default function loginWithGoogle({setLoginState}) {

  const handleLogin = async (googleData) => {
    
    const res = await fetch('/google-login' , {
        method: 'POST',
        body: JSON.stringify({token: googleData.tokenId }),
        headers :{ 'Content-Type' : 'application/json'}
      });

    const loginData = await res.json();
    setLoginState(loginData);
  }

  const handleFailure = (result) => {
    console.log(result);
  }

  return (
    <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in With Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
    />
  )
}
