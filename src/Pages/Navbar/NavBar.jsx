import React, { useState } from "react";
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../img/logo.png";
// import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = (props) => {
  const [activeProfile, setActiveProfile] = useState(null);


  return (
    <div className="shadow-sm px-2 py-1 bg-white" style={{ height: 'fit-content' }}>
      <nav className="d-flex aline-items-center justify-content-between">
        <span className="my-auto d-flex d-sm-none shadow-sm p-1"><RxHamburgerMenu className="my-auto" style={{ height: '25px', width: '25px' }} /></span>
        <Navbar.Brand className="my-auto" style={{ width: '120px' }}>
          <img style={{ width: '100%' }} src={Logo} alt="" />
        </Navbar.Brand>
        <div className="ml-auto my-auto d-flex">
          <span className="navbar-right-content my-auto d-flex  fw-bold">
            <div onMouseEnter={() => setActiveProfile("name")}
              onMouseLeave={() => setActiveProfile(null)} style={{ height: '45px', width: '45px', border: '1px solid blue', borderRadius: '50%', position: 'relative' }}>
              <img style={{ height: '100%', width: '100%', objectFit: 'cover', border: '1px solid red', borderRadius: '50%' }} src="https://www.pngitem.com/pimgs/m/394-3947057_circular-profile-picture-png-transparent-png.png" alt="" />

              <div className="bg-white shadow pb-3 pt-1 px-3 flex-column gap-3" style={{ position: 'absolute', zIndex: "100", width: 'fit-content', right: '0', top: '90%', display: activeProfile === "name" ? "flex" : "none" }}>
                <span> <p className="m-0 p-0">Hello <span className="text-capitalize m-0 p-0 text-primary">{props.loginInfo["Name"]}</span> </p>
                  <p style={{ fontSize: '.9rem' }} className="m-0 text-muted p-0">{props.loginInfo["Email"]}</p></span>
                <p>Profile</p>
                <button
                  onClick={props.onLogout}
                  style={{ cursor: "pointer" }}
                  className="btn w-100 p-0 m-0 border-0 d-flex justify-content-between aline-items-center  navbar-right-content"
                >
                  Logout
                  <FontAwesomeIcon className="my-auto fs-6 text-muted" icon={faSignOutAlt} />
                </button>
              </div>
            </div>
            <span className="text-muted">
            </span>
          </span>

        </div>
      </nav>
    </div>
  );
};

export default NavBar;
