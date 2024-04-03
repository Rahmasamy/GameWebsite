import React, { useState } from "react";
import "./Header.css";
import Logo from '../../assets/images/logo.png';
import Navitem from "../../components/Navitem/Navitem";
import { Link } from "react-router-dom";
import { CgMenuOreos } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";
const Header = () => {
  const [toggle,settoggle]=useState(false);
  return (
    <div className="navbar-cont">
    {/* <div className="navbar navbar-expand-md   bg-dark navbar-dark text-white  fixed-top">
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
    </div> */}
    <header className="headernav">
      <nav className="navItems">
      <Link to="/" className="navbar-brand">
              <img src={Logo} alt="err"/>
      </Link>
      <div className="linksItems-bigdevice"  id="menue">
                <ul className="ulListed" >
                    <Navitem><Link to="/" className="navitems">Home</Link>
                    </Navitem>
                    <Navitem><Link to="/browse" className="navitems">Browse</Link></Navitem>
                    <Navitem><Link to="/details" className="navitems">Details</Link></Navitem>
                    <Navitem><Link to="/streams" className="navitems">Streams</Link></Navitem>
                    <Navitem><Link to="/profile" className="navitems">Profile</Link></Navitem>
                </ul>
      </div>
      </nav>
      {/* for small and meduim devices  */}
     
        <div className="navbar-smalldevices">
          <CgMenuOreos onClick={()=>settoggle(true)} fontSize={"30px"} color="#E95793"/>
          {toggle && (
              
              <div className="overlay" >
                 <div className="linksItems"  id="menue">
                 <IoCloseCircleOutline onClick={()=>settoggle(false)} className="close-item" fontSize={"30px"}/>
                <ul className="ulListed" >
                    <Navitem><Link to="/" className="navitems" onClick={()=> settoggle(!toggle)}>Home</Link>
                    </Navitem>
                    <Navitem><Link to="/browse" className="navitems" onClick={()=> settoggle(!toggle)}>Browse</Link></Navitem>
                    <Navitem><Link to="/details" className="navitems" onClick={()=> settoggle(!toggle)}>Details</Link></Navitem>
                    <Navitem><Link to="/streams" className="navitems" onClick={()=> settoggle(!toggle)}>Streams</Link></Navitem>
                    <Navitem><Link to="/profile" className="navitems" onClick={()=> settoggle(!toggle)}>Profile</Link></Navitem>
                </ul>
                </div>
              </div>
            )
          }
        </div>
       
    </header>

    </div>
  );
};

export default Header;
