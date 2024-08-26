import PropTypes from "prop-types";
import React, { useState } from "react";
import {Link} from 'react-router-dom';
export default function Navbar(props) {

  

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} ` } >
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode==="dark"?"light":"dark"} `} href="/">
            {props.title.name}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode==="dark"?"light":"dark"}`} aria-current="page" to="/" >
                  {props.title.ul1}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode==="dark"?"light":"dark"}`} aria-current="page" to="/about" >
                  {props.title.ul2}
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <div onClick={()=>{document.body.style.backgroundColor ='rgb(72, 50, 110)',document.body.style.color = "white"}} className="circle" style = {
              {
                width: 25+'px',
                height: 25+'px',
                marginRight: 8+'px',
                borderRadius: '100%',
                backgroundColor: 'rgb(72, 50, 110)',
                cursor:'pointer'
              }
            }></div>
            <div onClick={()=>{document.body.style.backgroundColor ='#006699',document.body.style.color = "white"}} className="circle" style = {
              {
                width: 25+'px',
                height: 25+'px',
                marginRight: 8+'px',
                borderRadius: '100%',
                backgroundColor: '#006699',
                cursor:'pointer'
              }
            }></div>
            <div onClick={()=>{document.body.style.backgroundColor ='#666699',document.body.style.color = "white"}} className="circle" style = {
              {
                width: 25+'px',
                height: 25+'px',
                marginRight: 8+'px',
                borderRadius: '100%',
                backgroundColor: '#666699',
                cursor:'pointer'
              }
            }></div>
            <div onClick={()=>{document.body.style.backgroundColor ='#669999',document.body.style.color = "white"}} className="circle" style = {
              {
                width: 25+'px',
                height: 25+'px',
                marginRight: 8+'px',
                borderRadius: '100%',
                backgroundColor: '#669999',
                cursor:'pointer'
              }
            }></div>
          </div>
          <div className="form-check form-switch">
            <input onClick={props.toggleMode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`}
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode==="dark"?"Switch to light mode":"Switch to dark mode"}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
//It is used to define prop types and good practice to use .isRequired
Navbar.propTypes = {
  title: PropTypes.object.isRequired,
};
//It is used to set default props value
Navbar.defaultProps = {
  title: {
    name: "Alien 311",
    ul: "Neptune story",
  },
};
