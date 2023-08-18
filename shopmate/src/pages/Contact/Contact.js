import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();

  const submitHandler = ()=>{
    console.log("-----")   
    return navigate("/");
  }

  return (
    <main>
      <div className="component"> Contact</div>
      <Outlet/>
      <button onClick={submitHandler}>Submit Form</button>
    </main>
  )
}

export default Contact
 