import React ,{useState,useContext}from 'react'
import { useLocation, useNavigate ,createSearchParams } from 'react-router-dom'
import { GlobalData } from './App'
export default function Search() {
    const {url,setUrl} = useContext(GlobalData)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const params = {
      q:'search'
    }
    const navButton = ()=>{
        navigate(
          `/job?${createSearchParams(params)}`
        )
    }
  return (
    
    <div>
        <input type="text" onChange={(e)=>setUrl(e.target.value)}></input>
        <button onClick={navButton}>GO</button>
         
    </div>
  )
}
