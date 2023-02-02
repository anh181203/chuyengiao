import React from 'react'
import "../components/Homecss.css";
function Update({visible,onClose}) {
  if(visible) return null;
  const handleOnClose = (e) =>{
   if(e.target.id === 'container') onClose();

  } 
  
  return (
    <div>
      <div id='container'
      onClick={handleOnClose}
      >

         <div className="bg-open">
      <div className="bg-white">
        <h1 className="font-semibold ">
          Welcome back
        </h1>
        <p className="text-center ">Sign in</p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border-gray-700 "
            placeholder="email@example.com"
          />
          <input
            type="text"
            className=" border-gray-700 "
            placeholder="********"
          />
        </div>
        <div className="text-center">
          <button className=" rounded">
            Sign in
          </button>
          <button onClick={onClose}>x</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Update