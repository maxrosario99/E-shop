import Link from "next/link";
import React, { useEffect } from "react";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { isLoggedIn, username, toggleLogin } = useAuth();

  useEffect(() => {
    console.log("Navbar isLoggedIn:", isLoggedIn);
    console.log("Navbar username:", username);
  }, [isLoggedIn, username]);

  const handleLogout = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    toggleLogin();
  };

  return (
    <ul id="header">
      {isLoggedIn ? (
        <>
          <li>Welcome, {username}</li>
          <li>
            <Link href="/Register">Register</Link>
          </li>
          <li>
            <Link href="/Products">Products</Link>
          </li>
          <li>
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link href="/Login">Login</Link>
          </li>
          <li>
            <Link href="/Register">Register</Link>
          </li>
        </>
      )}
      <li>
        <Link href="/">Home</Link>
      </li>
    </ul>
  );
};

export default Navbar;
