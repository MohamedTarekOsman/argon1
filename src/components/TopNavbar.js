/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
const TopNavbar = () => {
  return (
  //   <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
  // <div className="container-fluid">
  //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //     <form className="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
  //       <div className="form-group mb-0">
  //         <div className="input-group input-group-alternative input-group-merge">
  //           <div className="input-group-prepend">
  //             <span className="input-group-text"><i className="fas fa-search"></i></span>
  //           </div>
  //           <input className="form-control" placeholder="Search" type="text"/>
  //         </div>
  //       </div>
  //       <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
  //         <span aria-hidden="true">×</span>
  //       </button>
  //     </form>
  
  //     <ul className="navbar-nav align-items-center  ml-md-auto ">
  //       <li className="nav-item d-xl-none">
         
  //         <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
  //           <div className="sidenav-toggler-inner">
  //             <i className="sidenav-toggler-line"></i>
  //             <i className="sidenav-toggler-line"></i>
  //             <i className="sidenav-toggler-line"></i>
  //           </div>
  //         </div>
  //       </li>
  //       <li className="nav-item d-sm-none">
  //         <a className="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
  //           <i className="ni ni-zoom-split-in"></i>
  //         </a>
  //       </li>
  //       <li className="nav-item dropdown">
  //         <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //           <i className="ni ni-bell-55"></i>
  //         </a>
  //         <div className="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden">
     
  //           <div className="px-3 py-3">
  //             <h6 className="text-sm text-muted m-0">You have <strong className="text-primary">1</strong> notifications.</h6>
  //           </div>
          
  //           <div className="list-group list-group-flush">
  //             <Link to="/notifications" className="list-group-item list-group-item-action">
  //               <div className="row align-items-center">
  //                 <div className="col-auto">
          
  //                   <img alt="Image placeholder" src="../static/assets/img/theme/team-1.jpg" className="avatar rounded-circle"/>
  //                 </div>
  //                 <div className="col ml--2">
  //                   <div className="d-flex justify-content-between align-items-center">
  //                     <div>
  //                       <h4 className="mb-0 text-sm">John Snow</h4>
  //                     </div>
  //                     <div className="text-right text-muted">
  //                       <small>2 hrs ago</small>
  //                     </div>
  //                   </div>
  //                   <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
  //                 </div>
  //               </div>
  //             </Link>
              
  //           </div>
       
  //           <Link to="/notifications" className="dropdown-item text-center text-primary font-weight-bold py-3">View all</Link>
  //         </div>
  //       </li>
  //       <li className="nav-item dropdown">
  //         <Link className="nav-link" to="/notes" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //           <i className="ni ni-ungroup"></i>
  //         </Link>
  //         {/* <div className="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default  dropdown-menu-right ">
  //           <div className="row shortcuts px-4">
  //             <a href="#!" className="col-4 shortcut-item">
  //               <span className="shortcut-media avatar rounded-circle bg-gradient-red">
  //                 <i className="ni ni-calendar-grid-58"></i>
  //               </span>
  //               <small>Calendar</small>
  //             </a>
  //             <a href="#!" className="col-4 shortcut-item">
  //               <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
  //                 <i className="ni ni-email-83"></i>
  //               </span>
  //               <small>Email</small>
  //             </a>
  //             <a href="#!" className="col-4 shortcut-item">
  //               <span className="shortcut-media avatar rounded-circle bg-gradient-info">
  //                 <i className="ni ni-credit-card"></i>
  //               </span>
  //               <small>Payments</small>
  //             </a>
  //             <a href="#!" className="col-4 shortcut-item">
  //               <span className="shortcut-media avatar rounded-circle bg-gradient-green">
  //                 <i className="ni ni-books"></i>
  //               </span>
  //               <small>Reports</small>
  //             </a>
  //             <a href="#!" className="col-4 shortcut-item">
  //               <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
  //                 <i className="ni ni-pin-3"></i>
  //               </span>
  //               <small>Maps</small>
  //             </a>
  //             <a href="#!" className="col-4 shortcut-item">
  //               <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
  //                 <i className="ni ni-basket"></i>
  //               </span>
  //               <small>Shop</small>
  //             </a>
  //           </div>
  //         </div> */}
  //       </li>
  //     </ul>
  //     <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
  //       <li className="nav-item dropdown">
  //         <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //           <div className="media align-items-center">
  //             <span className="avatar avatar-sm rounded-circle">
  //               <img alt="Image placeholder" src={logo}/>
  //             </span>
  //             <div className="media-body  ml-2  d-none d-lg-block">
  //               <span className="mb-0 text-sm  font-weight-bold">
  //                 PapperLessPro
  //               </span>
  //             </div>
  //           </div>
  //         </a>
  //         <div className="dropdown-menu  dropdown-menu-right ">
  //           <div className="dropdown-header noti-title">
  //             <h6 className="text-overflow m-0">Welcome!</h6>
  //           </div>
  //           <a href="/profile.html" className="dropdown-item">
  //             <i className="ni ni-single-02"></i>
  //             <span>My profile</span>
  //           </a>
  //           <a target="_blank" href="https://www.creative-tim.com/support" className="dropdown-item" rel="noreferrer">
  //             <i className="ni ni-support-16"></i>
  //             <span>Support</span>
  //           </a>
  //           <div className="dropdown-divider"></div>
  //           <a href="{{ url_for('authentication_blueprint.logout') }}" className="dropdown-item">
  //             <i className="ni ni-user-run text-red"></i>
  //             <span>Logout</span>
  //           </a>
  //         </div>
  //       </li>
  //     </ul>
  //   </div>
  // </div>
  //   </nav>
  <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
      <div class="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-white" href="javascript:;">Pages</a></li>
            <li class="breadcrumb-item text-sm text-white active" aria-current="page">Dashboard</li>
          </ol>
          <h6 class="font-weight-bolder text-white mb-0">Dashboard</h6>
        </nav>
        <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div class="ms-md-auto pe-md-3 d-flex align-items-center">
            <div class="input-group">
              <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
              <input type="text" class="form-control" placeholder="Type here..."/>
            </div>
          </div>
          <ul class="navbar-nav  justify-content-end">
            <li class="nav-item d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-white font-weight-bold px-0">
                <i class="fa fa-user me-sm-1"></i>
                <span class="d-sm-inline d-none">Sign In</span>
              </a>
            </li>
            <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-white p-0" id="iconNavbarSidenav">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line bg-white"></i>
                  <i class="sidenav-toggler-line bg-white"></i>
                  <i class="sidenav-toggler-line bg-white"></i>
                </div>
              </a>
            </li>
            <li class="nav-item px-3 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-white p-0">
                <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
              </a>
            </li>
            <li class="nav-item dropdown pe-2 d-flex align-items-center">
              <a href="javascript:;" class="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa fa-bell cursor-pointer"></i>
              </a>
              <ul class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                <li class="mb-2">
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    <div class="d-flex py-1">
                      <div class="my-auto">
                        <img src="./assets/img/team-2.jpg" class="avatar avatar-sm  me-3 "/>
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          <span class="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mb-2">
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    <div class="d-flex py-1">
                      <div class="my-auto">
                        <img src="./assets/img/small-logos/logo-spotify.svg" class="avatar avatar-sm bg-gradient-dark  me-3 "/>
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          <span class="font-weight-bold">New album</span> by Travis Scott
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item border-radius-md" href="javascript:;">
                    <div class="d-flex py-1">
                      <div class="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                        
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p class="text-xs text-secondary mb-0">
                          <i class="fa fa-clock me-1"></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar