import React from "react";
import "./Navbar.css";
import { Container } from "../../utils/Components";
import qongiroq from "../../images/qo'giroq.svg";
import savat from "../../images/savat.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return pathname.includes("/auth") ? (
    <></>
  ) : (
    <div className="navbar">
      <Container>
        <div className="navber__wrapper">
          <div className="navbar__left">
            <span>Hi!</span>
            <Link to="/auth/login" className="navbar__login">
              Sign in
            </Link>
            <span>or</span>
            <Link to="/auth/register" className="navbar__register">
              register
            </Link>
          </div>
          <div className="navbar__right">
            <img src={qongiroq} alt="" />
            <Link to="/cart">
              <img src={savat} alt="" />
            </Link>
          </div>
        </div>
        <div className="navbar__stick"></div>
      </Container>
    </div>
  );
};

export default Navbar;
