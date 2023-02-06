import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import  '../../App.css'

import {signOut} from 'firebase/auth'
import { auth } from '../../config/firebase'

function Home({name}) {
  const [logoutMsg, setlogoutMsg] = useState(false)

  signOut(auth).then(() => {
    setlogoutMsg(true)
    setlogoutMsg("Logout succesfull")
  }).catch((err) => {
    setlogoutMsg(err)
  })

  return (
    <>
    <div className='navstyle'>
      <h2><Link to='./'>Home</Link></h2>
      <h2><Link to='./login'>LogIn</Link></h2>
      <h2><Link to='./signup'>Signup</Link></h2>
      <h2><Link to='./login'>Log Out</Link></h2>
    </div>
    <div>
      <h2 className='heading'>
         {name ? `Welcome - ${name}` : "Login please"}
      </h2>
      <h2 className='heading'>
         {(logoutMsg === true) ? `Welcome - ${logoutMsg}` : "logout unsuccesfull"}
      </h2>
    </div>
    </>
  )
}

export default Home