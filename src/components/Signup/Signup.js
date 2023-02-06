import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputControl from '../inputControl/InputControl'
import styles from './Signup.module.css'

import {auth} from '../../config/firebase'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [errMsg,setErrMsg] = useState("")
  const [disabledbtn, setDisabledbtn] = useState(false)

  const handleSubmit = () => {
    if(!values.name || !values.email || !values.password){
      setErrMsg("All fields are mandarory to fill")
      return;
    }setErrMsg("")

    setDisabledbtn(true)
    createUserWithEmailAndPassword(auth, values.email, values.password).then(
      async(res) => {
        setDisabledbtn(false)
        const user = res.user
        await updateProfile(user, {
          displayName: values.name
        })
        navigate('/');
      }
    ).catch((err) => {
      setDisabledbtn(false)
      setErrMsg(err.message)
  })
  }



  return (
    <div className={styles.container}>
      <div className={styles.innerbox}>
        <h2 className={styles.heading}>Login</h2>
        <InputControl label='Name' placeholder='Enter your Name ...' 
          onChange= {(e) => setValues((prev) => ({...prev , name: e.target.value}))}
        />
        <InputControl label='Email' placeholder='Enter your email ...'
          onChange= {(e) => setValues((prev) => ({...prev , email: e.target.value}))}
        />
        <InputControl label='Password' placeholder='Enter your password ...'
          onChange= {(e) => setValues((prev) => ({...prev , password: e.target.value}))}
        />

        <div className={styles.footer}>
          <strong className={styles.error}>{errMsg}</strong>
          <button onClick={handleSubmit}
            disabled ={disabledbtn}
          >Sign Up</button>
          <p>Already have an account ?{" "}
            <span>
              <Link to='/login'>Login</Link>
            </span>  
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup