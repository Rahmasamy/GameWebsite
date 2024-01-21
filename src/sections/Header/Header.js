import React from "react";
import "./Header.css";
import Logo from '../../assets/images/logo.png';
import Navitem from "../../components/Navitem/Navitem";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
    <div className="navbar navbar-expand-md   bg-dark navbar-dark text-white  fixed-top">
        <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="err"/>
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#mainmenu" >
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className=" navbar-collapse"  id="mainmenu">
                <ul className="navbar-nav ms-auto" >
                    <Navitem><Link to="/" className="nav-link">Home</Link>
                    </Navitem>
                    <Navitem><Link to="/browse" className="nav-link">Browse</Link></Navitem>
                    <Navitem><Link to="/details" className="nav-link">Details</Link></Navitem>
                    <Navitem><Link to="/streams" className="nav-link">Streams</Link></Navitem>
                    <Navitem><Link to="/profile" className="nav-link">Profile</Link></Navitem>
                </ul>
            </div>
        </div>
    </div>
    </>
  );
};

export default Header;
