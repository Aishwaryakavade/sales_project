import React, { useState } from 'react'
import backgroundimg from '../Assests/bg1.jpg'
import { useNavigate } from 'react-router-dom';

export default function LogOut() {

  const [user, setUser]=useState();
  const [password, setPassword]=useState();

  const navigate=useNavigate();

  function hanndleUser(e){
      setUser(e.target.value);
  }

  function handlePassword(e){
    setPassword(e.target.value);
  }

  function handleSubmit(e){
       e.preventDefault();
    if(user=="admin" && password=="admin"){

      navigate("/layout/maindashboard")

    }

  }
  return (

    <div className="row" style={{backgroundImage:`url(${backgroundimg})`, height:"100vh", backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
      
      <div className="col-lg-12" >
        <div> 
          <div class="">
            <section class="background-radial-gradient overflow-hidden">
              <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div class="row gx-lg-5 align-items-center mb-5">
                  <div class="col-lg-6 mb-5 mb-lg-0" style={{zIndex: "10;"}}>
                    <h1 class="my-5 display-5 fw-bold ls-tight" style={{ color: "#E8EFFD" }}>The best offer <br />
                      <span style={{ color: "#8CB1F3" }}>for your business</span>
                    </h1>
                    <p class="mb-4 opacity-70" style={{ color: "#BAD0F8" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos?</p>
                  </div>
                  <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                    <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong">
                    </div>
                    <div id="radius-shape-2" class="position-absolute shadow-5-strong">
                    </div>
                    <div class="card bg-glass">
                      <div class="card-body px-4 py-5 px-md-5">
                        <form>
                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example3">User name</label>
                            <input id="username" onChange={(e)=>hanndleUser(e)} type="text" class="form-control" />
                          </div>
                          <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example4">Password</label>
                            <input id="passward" onChange={(e)=>handlePassword(e)} type="password" class="form-control" />
                          </div>
                          <button type="submit" onClick={(e)=>handleSubmit(e)} class="btn btn-primary btn-block mb-4">Sign In</button>
                          <div class="text-center">
                            <p>or sign up with:</p>
                            <button type="button" class="btn btn-link btn-floating mx-1">
                              <i class="fab fa-facebook-f"></i>
                            </button>
                            <button type="button" class="btn btn-link btn-floating mx-1">
                              <i class="fab fa-google"></i>
                            </button>
                            <button type="button" class="btn btn-link btn-floating mx-1">
                              <i class="fab fa-twitter"></i>
                            </button>
                            <button type="button" class="btn btn-link btn-floating mx-1">
                              <i class="fab fa-github"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
