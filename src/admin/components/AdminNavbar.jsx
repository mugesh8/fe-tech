import React, { useState, useEffect, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import userLogo from "../assets/user-logo.png";
import notify from "../assets/notify.png";
import Propic from "../assets/profile-pic.png";
import "../components/AdminNavbar.css";
import hamburger from "../assets/hamburger.png";
import AdminSidebar from "./AdminSidebar";

const AdminNavbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHamburgerClick = () => {
    console.log("clicked");
    setIsSidebarOpen(true);
  };

  const handleBackClick = () => {
    setIsSidebarOpen(false);
  };

  const handleNavigation = (path, e) => {
    e.preventDefault();
    // Add navigation logic here
    console.log(`Navigating to ${path}`);
    setIsSidebarOpen(false); // Close sidebar after navigation
  };

  useEffect(() => {
    // Update screen width when window is resized
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    // Update the `tab` based on the current pathname
    switch (location.pathname) {
      case "/Dashboard":
        setTab("Enterprise Ai hub");
        break;
      case "/Dashboard/forum":
        setTab("Forum");
        break;
      case "/Dashboard/products":
        setTab("Products");
        break;
      case "/Dashboard/Distributors":
        setTab("Distributors");
        break;
      case "/Dashboard/OrderSummary":
        setTab("OrderSummary");
        break;
      default:
        setTab("Product");
        break;
    }
  }, [location.pathname]); // Only re-run the effect if the pathname changes

  return (
    <>
      {isSidebarOpen ? (
        <div>
          <AdminSidebar handleBackClick={handleBackClick} />
        </div>
      ) : (
        <div></div>
      )}
      <div>
        {screenWidth > 768 ? (
          <div className="adminNav" style={{ width: "100%" }}>
            <Navbar
              expand="lg"
              className="m-0"
              style={{ border: "none", backgroundColor: "white" }}
            >
              <Navbar.Brand
                as={Link}
                to="/"
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                  color: "#111111",
                }}
              >
                {tab}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <input
                    placeholder="Search Anything..."
                    type="search"
                    name="search"
                    id="search"
                  />
                  <Nav.Link as={Link} to="/cart">
                    <img
                      src={notify}
                      alt="notify"
                      style={{ marginTop: "7px" }}
                    />
                  </Nav.Link>
                  <Nav.Link as={Link} to="/logout">
                    <img
                      src={userLogo}
                      alt="logout"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "5px",
                      }}
                    />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        ) : (
          <div className="Mob-nav">
            <div onClick={handleHamburgerClick}>
              <img
                src={hamburger}
                alt="Hamburger Menu"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div>My cart</div>
            <div>
              <img src={Propic} alt="Profile" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminNavbar;
