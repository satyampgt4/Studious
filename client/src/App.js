import { useState } from "react";
import Login from "./Pages/login";

function App() {

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')? JSON.parse(localStorage.getItem('loginData')) : null
  );

  const setLoginState = (loginData) => {
    setLoginData(loginData);
    localStorage.setItem('loginData', JSON.stringify(loginData));
  }

  return (
    <div className="App">
        <Login setLoginState = {setLoginState}></Login>
    </div>
  );
}

export default App;
