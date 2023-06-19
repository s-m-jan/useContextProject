import React, { useContext } from 'react'
import styled from "./Navbar.module.css"
import {Link} from "react-router-dom"
import { AppContext } from '../../App'

export default function Navbar() {
  const {isLogin, setIsLogin} = useContext(AppContext)
  return (
    <div className={styled.navbar}>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link onClick={()=>setIsLogin(false)}>Log Out</Link>
      <span className={styled.username}>{isLogin ? "Mehdi janfeshan " : "UserName"}</span>
      
    </div>
  )
}
