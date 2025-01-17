import { useState ,useEffect, useContext} from 'react'

import './App.css'

import Routering from './Router'
import { DataContext } from './Components/DataProvider/DataProvider'
import {auth} from "./utility/firebase"
import { Type } from './utility/actiontype'

function App() {
  const [{user},dispatch]= useContext(DataContext)
  useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    dispatch({
      type:Type.SET_USER,
      user:authUser
    })
  } else{
     dispatch({
       type: Type.SET_USER,
       user: null,
     });
  }
})
  },[])


  return (
    <>
      <Routering/>
    </>
  )
}

export default App
