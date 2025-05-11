import React from 'react'
import { useState } from 'react'
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import Userdata from './Component/Userdata';


const App = () => {
  const [toggler, settoggler] = useState(true);
  const [users, setusers] = useState([])
  return (
    <div className='w-screen h-screen text-white p-10 flex justify-center items-center bg-gradient-to-r from-[#AAB99A] to-[#D0DDD0]'>

      <div className=' w-[50%] w-full w-screen '>
        
        {toggler? ( <Signup
                    users={users}
                    setusers={setusers} 
                    toggler={toggler} 
                    settoggler={settoggler}
                    />)
                    : <Signin users={users}
                    setusers={setusers} 
                    toggler={toggler} 
                    settoggler={settoggler} />}
      </div>
      <div className='w-[50%]'>
        <Userdata   
                    users={users}
                    setusers={setusers} />
      </div>
      
    </div>
  )
}

export default App


