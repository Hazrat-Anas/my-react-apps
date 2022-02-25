import React from 'react'

function Home() {
  return (
   <div className="container">
       <div className="row py-3 text-center">
          <h1 className='display-1'>
          Welcome to Jataq
          </h1>
       </div>
       <div className="container">
               <div className="row text-center">
                   <div className=" offset-md-4 col-4">
                   <p className='lead'>
                       Please select an option
                   </p>
                   <button type="button" class="btn btn-primary my-3 w-50">Sign Up</button>
                   <br />
                   <button type="button" class="btn btn-success w-50">Sign In</button>
                   </div>
                   
               </div>
       </div>
   </div>
  )
}

export default Home