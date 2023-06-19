import React, { useContext } from 'react'
import styled from "./Login.module.css"
import { AppContext } from '../../App'

export default function Login() {
  const {setIsLogin} = useContext(AppContext)
  return (
    <div className={styled.login} >
      <div className={styled.loginWrapper}>
        <h3>Login</h3>
        <label >UserName</label>
        <input type="text" />
        <label >Password</label>
        <input type="text" />
        <button  onClick={()=>setIsLogin(true)} className={styled.loginBtn}>Login</button>
        
      </div>
    </div>
  )
}
