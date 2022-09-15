import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/array">array</Link>
        </li>
        {/* <li>
          <Link to="/other">other</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
