import React from "react";
import { Link } from "react-router-dom";

export default function NavigationMenu(props) {
  return (
    <div className="font-normal p-2 mb-3">
      <ul>
        <li>
          <Link to="/" className="text-stone-800" onClick={props?.closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-stone-800"
            onClick={props?.closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
