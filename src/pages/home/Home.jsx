import React, { useContext } from 'react'

import Login from '../../components/login/Login'
import { AppContext } from '../../App'

export default function Home() {
  const {isLogin} = useContext(AppContext)
  return (
    <div>
      {isLogin ? <p>you are loged in</p> :<Login/> }
      
    </div>
  )
}
