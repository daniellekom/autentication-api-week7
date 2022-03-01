import { useState } from "react";
import Signup from './scenes/Signup'
import Login from './scenes/Login'

function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState();
  //if we have token we show user list if not user show sign up and show login
  return <section>
    {!token 
         ? isUser
               ?<Login setToken ={setToken} setIsUser={setIsUser}/>
               :<Signup setToken={setToken} setIsUser={setIsUser}/>
              
    : <h1>User List</h1>
    }
    </section>;
}

export default App;
