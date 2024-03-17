/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";
import { loginUser } from '../../Redux/actions/authAction';
import notify from '../../notification/notify';
import { ToastContainer } from 'react-toastify';






const LoginPage = () => {
  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/')
    }
  },[])
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const user=useSelector(state=>state.authReducer.loginUser)
    const [loading,setLoading]=useState(false)

    const handelSubmit=async(e)=>{
      e.preventDefault()
        await dispatch(loginUser({
        username,
        password
      }))
      setLoading(true)
    }
    
    useEffect(()=>{
      if (user&&loading) {
        if(user.data.token){
          localStorage.setItem('token',user.data.token)
          localStorage.setItem('user',JSON.stringify(user.data.data))
          notify("تم تسجيل الدخول بنجاح","success")
          setTimeout(() => {
            navigate('/')
            window.location.reload()
          }, 1500);

      }else if(user.status=== 401){
          notify("الايميل او كلمة السر خطأ","error")
          localStorage.removeItem('token')
          localStorage.removeItem('user')
      }else{
          localStorage.removeItem('token')
          localStorage.removeItem('user')
      }
      }
    },[loading, navigate, user])
  return (
    <>
    <div class="main-content" style={{backgroundColor:'#172b4d',minHeight:'100vh'}}>
<nav id="navbar-main" class="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img src={logo} style={{borderRadius:'50%'}} alt="Argon Design - Template Starter Logo."/>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
      <div class="navbar-collapse-header">
        <div class="row">
          <div class="col-6 collapse-brand">
            <a href="/">
              <img src={logo}/>
            </a>
          </div>
          <div class="col-6 collapse-close">
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <ul class="navbar-nav mr-auto">
      </ul>
      <hr class="d-lg-none" />

    </div>
  </div>
</nav>
    <div class="header bg-gradient-primary py-6 py-lg-6">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-lg-5 col-md-6">
              <h1 class="text-white mt-4">
                <a target="_blank" class="text-white"
                   href="/" style={{textDecoration:'none'}}>WELCOME</a>
              </h1>
              <p class="text-lead text-light">
                PROVIDE YOUR CREDENTIALS TO LOGIN
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    

    <div class="container mt--8 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card border-0 mb-0">
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
              </div>
              <form role="form" action="/">
                <div class="form-group mb-3">
                  <div class="input-group input-group-merge input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                    </div>
                    <input class="form-control" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Email" type="email"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-merge input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input class="form-control"value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" type="password"/>
                  </div>
                </div>
                <div class="custom-control custom-control-alternative custom-checkbox">
                  <input class="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                  <label class="custom-control-label" for=" customCheckLogin">
                    <span class="text-muted">Remember me</span>
                  </label>
                </div>
                <div class="text-center">
                  {/* <Link to={'/'}> */}
                  <button type="button" class="btn btn-primary my-4"
                   onClick={ handelSubmit}
                  >Sign in</button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>



      </div>
  <ToastContainer/>
    </>
  );
};

export default LoginPage;

