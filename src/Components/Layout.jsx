import React from 'react'
import './Layout.css'
import { Link, Outlet,NavLink } from 'react-router-dom'
export default function Layout() {
    return (
        <div>
        <div className='col-lg-2'>

          <header >
            {/* <!-- Sidebar --> */}
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
              <div class="position-sticky">
                <div class="list-group list-group-flush ">
                  <Link to={"/layout/maindashboard"}
                    class="list-group-item list-group-item-action py-2 ripple" >
                    <i class="fas fa-tachometer-alt fa-fw me-2 mr-2"></i><span>Main dashboard</span>
                  </Link>
                  <Link to={"/layout/products"}
                    class="list-group-item list-group-item-action py-2 ripple" >
                    <i class="fa-solid fa-cart-shopping"></i><span>Products</span>
                  </Link>
                  <Link to={"/layout/salestable"}
                    class="list-group-item list-group-item-action py-2 ripple" >
                    <i class="fa-solid fa-bag-shopping"></i><span>Sales Table</span>
                  </Link>
                  <Link to={"/layout/salesexpensedata" }
                    class="list-group-item list-group-item-action py-2 ripple" >
                   <i class="fa-solid fa-wallet"></i><span>Sales Expense Table</span>
                   
                  </Link>
                  
                  <Link to={"/logout"}
                    class="list-group-item list-group-item-action py-2 ripple" >
                   <i class="fa-solid fa-right-from-bracket"></i><span>Logout</span>
                  </Link>

                </div>
              </div>
            </nav>
            {/* <!-- Sidebar --> */}

            {/* <!-- Navbar --> */}
            <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
              {/* <!-- Container wrapper --> */}
              <div class="container-fluid">
                {/* <!-- Toggle button --> */}
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-bars"></i></button>

                {/* <!-- Brand --> */}
                <a class="navbar-brand" href="#">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                    height="25"
                    alt="MDB Logo"
                    loading="lazy"
                  />
                </a>
                {/* <!-- Search form --> */}

                {/* {/* <!-- Right links --> */}
                <ul class="navbar-nav ms-auto d-flex flex-row">
                  {/* <!-- Notification dropdown --> */}
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false" >
                   
                      <i class="fas fa-bell"></i>
                      <span class="badge rounded-pill badge-notification bg-danger">1</span>
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="#">Some news</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Another news</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Icon --> */}
                  <li class="nav-item">
                    <a class="nav-link me-3 me-lg-0" href="#">
                      <i class="fas fa-fill-drip"></i>
                    </a>
                  </li>
                  {/* <!-- Icon --> */}
                  <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="#">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>

                  {/* <!-- Icon dropdown --> */}
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="flag-united-kingdom flag m-0"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#"
                        ><i class="flag-united-kingdom flag"></i>English
                          <i class="fa fa-check text-success ms-2"></i
                          ></a>
                      </li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-poland flag"></i>Polski</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-china flag"></i>中文</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-japan flag"></i>日本語</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-germany flag"></i>Deutsch</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-france flag"></i>Français</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-spain flag"></i>Español</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-russia flag"></i>Русский</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"><i class="flag-portugal flag"></i>Português</a>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- Avatar --> */}
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                        class="rounded-circle"
                        height="22"
                        alt="Avatar"
                        loading="lazy"
                      />
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a class="dropdown-item" href="#">My profile</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Settings</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Logout</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
          </header>
        </div>


        <div className='col-lg-12'>
          <Outlet />

        </div>
      </div>
    )
}
