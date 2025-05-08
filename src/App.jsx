import React from 'react'
import { useState } from 'react'
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import Userdata from './Component/Userdata';


const App = () => {
  const [toggler, settoggler] = useState(true);
  const [users, setusers] = useState([])
  return (
    <div className='w-screen h-screen bg-[url(https://plus.unsplash.com/premium_photo-1719955772986-a9d426f1448b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center text-white p-15 flex justify-center items-center'>

      <div className=' w-[70%] w-screen '>

        {toggler? ( <Signup
                    users={users}
                    setusers={setusers} 
                    toggler={toggler} 
                    settoggler={settoggler}
                    />): <Signin toggler={toggler}  settoggler={settoggler} />}
      </div>
      <div className='w-[30%]'>
        <Userdata/>
      </div>
      
    </div>
  )
}

export default App


