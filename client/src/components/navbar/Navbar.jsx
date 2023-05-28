import React, { useState } from "react";
import "./Navbar.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const PATH_URL = window.location.origin;
const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <div className="logo">
          <img src={`${PATH_URL}/assets/shared/logo.svg`} />
        </div>

        <div className="hamburger-btn" onClick={() => setOpen(true)}>
          <img src={`${PATH_URL}/assets/shared/icon-hamburger.svg`} />
        </div>
        <nav className={open ? "open-sidebar" : "close-sidebar"}>
          <div className="close-btn" onClick={() => setOpen(false)}>
            <img src={`${PATH_URL}/assets/shared/icon-close.svg`} />
          </div>
          <div className="line"></div>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="nav-options"
          >
            <div className="nav-options-wrapper">
              <span>00</span>
              Home
            </div>
            <div
              className={
                location.pathname === "/" ? "border border-active" : "border"
              }
            ></div>
          </Link>

          <Link
            to="/destination"
            style={{ textDecoration: "none" }}
            className="nav-options"
          >
            <div className="nav-options-wrapper">
              <span>01</span>Destination
            </div>
            <div
              className={
                location.pathname === "/destination"
                  ? "border border-active"
                  : "border"
              }
            ></div>
          </Link>

          <Link
            to="/crew"
            style={{ textDecoration: "none" }}
            className="nav-options"
          >
            <div className="nav-options-wrapper">
              <span>02</span>Crew
            </div>
            <div
              className={
                location.pathname === "/crew"
                  ? "border border-active"
                  : "border"
              }
            ></div>
          </Link>

          <Link
            to="/technology"
            style={{ textDecoration: "none" }}
            className="nav-options"
          >
            <div className="nav-options-wrapper">
              <span>03</span>Technology
            </div>
            <div
              className={
                location.pathname === "/technology"
                  ? "border border-active"
                  : "border"
              }
            ></div>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
