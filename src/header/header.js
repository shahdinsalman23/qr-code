import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"

import { baseurl } from "../baseurl";

import { GoogleLogin } from "@react-oauth/google";
import SignUp from "../login/signup";
import Login from "../login/login";
import logo1 from "../img/head-log.svg";

const Header = () => {




  
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile or not
  const [showsignup, setshowsignup] = useState(true);
  const [showlogin, setshowlogin] = useState(false);
  const [showdashboard, setdashboard] = useState(false)

  const [data, setData] = useState({
    sub: null,
    user_name: null,
    email: null,
    email_verified: null,
    picture: null,
  });

  const [g_obj, setobj] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen width is less than or equal to 768px
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  //

  const [googleLoaded, setGoogleLoaded] = useState(false);

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token: " + response.credential);
    var userobj = jwtDecode(response.credential);
    console.log(userobj, "TS");
    setobj(userobj);

    setData({ ...data, sub: g_obj.sub });
    setData({ ...data, email: g_obj.email });
    setData({ ...data, email_verified: g_obj.email_verified });
    setData({ ...data, picture: g_obj.picture });
    setData({ ...data, user_name: g_obj.name });

    if (userobj) {
      console.log("true");
    } else {
      console.log("false");
      console.log(g_obj);
    }
  }

  useEffect(() => {
    /* global google */
    if (typeof google !== "undefined" && google.accounts) {
      google.accounts.id.initialize({
        client_id:
          "908977573799-5d32tvsej91ipptrunk5orilqn3l02qk.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });
      setGoogleLoaded(true);
    }
  }, []);

  const handleCustomSignIn = () => {
    if (googleLoaded) {
      google.accounts.id.prompt();
    } else {
      console.error("Google API not loaded");
    }
  };
  const Stored_userID = g_obj.sub;

  const demo = async () => {
    try {
      // Make a POST request using axios
      const response = await axios.post(`${baseurl}/createuser`, g_obj);

      const Local_UserID = JSON.stringify(Stored_userID);
      localStorage.setItem("userid", Local_UserID);

      console.log(Local_UserID, "localstorage");

      window.location.href = "/dashboard";
      // Set the response data in state
    } catch (error) {
      // Handle errors
      console.error("Error:", error.message);
      // Display an error message to the user
      alert("Please Login First!");
    }
  };



  // Dropdown--js--codeDropdown--js--codeDropdown--js--codeDropdown--js--code
  // Dropdown--js--codeDropdown--js--codeDropdown--js--codeDropdown--js--code
  // Dropdown--js--codeDropdown--js--codeDropdown--js--codeDropdown--js--code

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const [isOpenz, setIsOpenz] = useState(false);
  const toggleDropdownz = () => {
    setIsOpenz(!isOpenz);
  };


  const closeDropdown = (event) => {
    if (!event.target.matches('.dropbtn')) {
      setIsOpen(false);
      setIsOpenz(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

  // Dropdown--js--codeDropdown--js--codeDropdown--js--codeDropdown--js--code
  // Dropdown--js--codeDropdown--js--codeDropdown--js--codeDropdown--js--code
  // Dropdown--js--codeDropdown--js--codeDropdown--js--codeDropdown--js--code
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  const login = () => {
    navigate("/login");
  };

  const sigup = () => {
    navigate("/signup");
  };
  return (
    <>
      <header className="hero-header">
        <div class="main-row">
          <div className="your-main-logo-ul">
            <div className="your-logo" onClick={home}>
              <img src={logo1} alt="" />
            </div>
            <ul>
              <li>Plans and prices</li>
              <li>FAQ</li>
              <li>API</li>

              <div className="dropdown">
                <li onClick={toggleDropdown} className="dropbtn">

                  Resources
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M5.91996 7.49998C5.78835 7.50074 5.65789 7.47551 5.53605 7.42575C5.41422 7.37598 5.3034 7.30266 5.20996 7.20998L0.209961 2.20998L1.62996 0.789978L5.91996 5.08998L10.21 0.789978L11.63 2.20998L6.62996 7.20998C6.53652 7.30266 6.4257 7.37598 6.30387 7.42575C6.18203 7.47551 6.05157 7.50074 5.91996 7.49998Z" fill="#96949C" />
                  </svg>
                </li>

                <div id="myDropdown" className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                  <a>Types of QR code</a>
                  <a >QR Codes for</a>
                  <a>QR Codes on</a>
                  <a>QR Code Generator</a>

                </div>
              </div>


              <div className="dropdown">
                <li onClick={toggleDropdownz} className="dropbtn">

                  Features
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M5.91996 7.49998C5.78835 7.50074 5.65789 7.47551 5.53605 7.42575C5.41422 7.37598 5.3034 7.30266 5.20996 7.20998L0.209961 2.20998L1.62996 0.789978L5.91996 5.08998L10.21 0.789978L11.63 2.20998L6.62996 7.20998C6.53652 7.30266 6.4257 7.37598 6.30387 7.42575C6.18203 7.47551 6.05157 7.50074 5.91996 7.49998Z" fill="#96949C" />
                  </svg>
                </li>

                <div id="myDropdownz" className={`dropdown-content ${isOpenz ? 'show' : ''}`}>
                  <a>Types of QR code</a>
                  <a >QR Codes for</a>
                  <a>QR Codes on</a>
                  <a>QR Code Generator</a>

                </div>
              </div>


            </ul>
          </div>

          {isMobile && (
            <button className="menu-button" onClick={toggleMenu}>
              <label class="byby" for="burger">
                <input type="checkbox" id="burger" />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </button>
          )}

          <div
            className={`header-btn-box ${isMobile && showMenu ? "show" : ""}`}
          >



            <button className="Register" onClick={sigup}>
              Register
            </button>

            <button className="Login" onClick={login}>
              Log In
            </button>
            {
              showdashboard &&
              <button onClick={demo}>Dashboard</button>
            }
          </div>

        </div>
      </header>


    </>
  );
};

export default Header;
