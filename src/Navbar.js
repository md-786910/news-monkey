import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      {/* <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        {/* <!-- Container wrapper --> */}
        <div class="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <Link exact class="navbar-brand mt-2 mt-lg-0" to="/">
              {/* https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png */}
              <img
                src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                height="15"
                alt=""
                loading="lazy"
              />
            </Link>
            {/* <!-- Left links --> */}
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link exact class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li class="nav-item">
                <Link exact class="nav-link" to="/entertain">
                  Entertainment
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/cricket">
                  Cricket
                </Link>
              </li>
              <li class="nav-item">
                <Link exact class="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li class="nav-item">
                <Link exact class="nav-link" to="/topa">
                  Topa
                </Link>
              </li>
              <li class="nav-item">
                <Link exact class="nav-link" to="/search">
                  Search box
                </Link>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div class="d-flex align-items-center text-white">
            {/* <!-- Icon --> */}
            <Link exact class="text-reset me-3" to="#">
              <i class="fas fa-shopping-cart"></i>
            </Link>

            {/* <!-- Notifications --> */}
            <Link
              exact
              class="text-reset me-3 dropdown-toggle hidden-arrow"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-bell"></i>
              <span class="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </Link>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link exact class="dropdown-item" to="/us">
                  Worlds news
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/corona">
                  Corona news
                </Link>
              </li>
              <li>
                <Link exact class="dropdown-item" to="/funny">
                  Funny news
                </Link>
              </li>
            </ul>

            {/* <!-- Avatar --> */}
            <Link
              exact
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                class="rounded-circle"
                height="25"
                alt=""
                loading="lazy"
              />
            </Link>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link exact class="dropdown-item" to="#">
                  My profile
                </Link>
              </li>
              <li>
                <Link exact class="dropdown-item" to="#">
                  Settings
                </Link>
              </li>
              <li>
                <Link exact class="dropdown-item" to="#">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </div>
  );
}

export default Navbar;
