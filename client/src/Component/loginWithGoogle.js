import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'

export default function LoginWithGoogle({setLoginState}) {

  const handleLogin = (googleData) => {
     setLoginState(googleData);
     const userObj = jwt_decode(googleData.credential);
     console.log(userObj);
  }
  
  useEffect(()=>{
    /*global google*/
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleLogin
    });

    google.accounts.id.renderButton(
      document.querySelector("#signInDiv"),
      {theme: 'outline', size: 'large'}
    );
  }, []);
 
  return (
    <div id='signInDiv'></div>
  )
}
