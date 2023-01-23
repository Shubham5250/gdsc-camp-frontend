import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import styles from "../Styles/components/Layout.module.css";

const Layout = ({ children }) => {
  const { user, dispatch } = useUserContext();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: "LOGIN", payload: null });
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/">
          <img src="/images/logo.svg" alt="GDSC-PESMCOE-LOGO" />
        </Link>

        <ul className={open ? styles.active_navbar : ""}>
          <i
            className={`uil uil-times-circle ${styles.close_icon}`}
            onClick={() => setOpen(!open)}
          ></i>
          <li>
            <Link to="/" onClick={() => setOpen(!open)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" onClick={() => setOpen(!open)}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/team" onClick={() => setOpen(!open)}>
              Team
            </Link>
          </li>
          {/* <li>
            <Link to="/quiz" onClick={() => setOpen(!open)}>
              Quiz
            </Link>
          </li> */}
          <li>
            <Link to="/contact" onClick={() => setOpen(!open)}>
              Contact Us
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/profile" onClick={() => setOpen(!open)}>
                  Profile
                </Link>
              </li>
              <li>
                <Link onClick={handleLogout} className={styles.active}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/signup"
                onClick={() => setOpen(!open)}
                className={styles.active}
              >
                Register
              </Link>
            </li>
          )}
        </ul>
        <div className={styles.icon_div}>
          {user && (
            <Link to="/profile">
              <i className={`uil uil-user-circle ${styles.account}`}></i>
            </Link>
          )}
          <i
            className={`uil uil-bars ${styles.hamburger}`}
            onClick={() => setOpen(!open)}
          ></i>
        </div>
      </nav>

      {children}

      {/* /* Footer */}
    </div>
  );
};

export default Layout;
