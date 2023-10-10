import React from "react";
import "./Navbar.css";
import { Link,useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../context";

const Navbar = () => {

    const location = useLocation()
    const [url, setUrl] = useState(null)
    const value = useContext(Context)

    useEffect(()=>{
        console.log(value);
        setUrl(location.pathname)
    },[location])
  return (
    <div>
      <ul>
        <li>
          <Link to="/" className={url === '/' ? 'active':''}>Home</Link>
        </li>
        <li>
          <Link to="/add-employee" className={url === '/add-employee' ? 'active':''}>Add Employee</Link>
        </li>
        <li>
          <Link to="/table" className={url === '/table' ? 'active':''}>Table</Link>
        </li>
        <li>
          <Link to="/form" className={url === '/form' ? 'active':''}>Form</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
