import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputControl from '../inputControl/InputControl'
import styles from './Login.module.css'

import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../config/firebase'



const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: ""
  })
  const [errMsg,setErrMsg] = useState("")
  const [disabledbtn, setDisabledbtn] = useState(false)

  const handleSubmit = () => {
    if(!values.email || !values.password){
      setErrMsg("All fields are mandarory to fill")
      return;
    }setErrMsg("")

    setDisabledbtn(true)
    signInWithEmailAndPassword(auth, values.email, values.password).then(
      async(res) => {
        setDisabledbtn(false)
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

        <InputControl label='Email' placeholder='Enter your email ...'
        onChange= {(e) => setValues((prev) => ({...prev , email: e.target.value}))}/>
        <InputControl label='Password' placeholder='Enter your password ...'
        onChange= {(e) => setValues((prev) => ({...prev , password: e.target.value}))}/>

        <div className={styles.footer}>
        <strong className={styles.error}>{errMsg}</strong>
          <button onClick={handleSubmit} disabled ={disabledbtn}>Login</button>
          <p>If you new here ?, please{" "}
            <span>
              <Link to='/signup'>Sign Up</Link>
            </span>  
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login