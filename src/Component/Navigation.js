import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import NavigationMenu from "./NavigationMenu";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <span>
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      <div
        className={`absolute left-0 top-0 w-screen h-screen bg-black bg-opacity-40 z-10 ${
          showMenu ? "block" : "hidden"
        } transition delay-1000`}
        onClick={() => setShowMenu(false)}
      ></div>
      <div
        className={`w-2/3 md:w-1/3 h-full fixed border bg-white top-0 p-2 z-20 ${
          !showMenu ? "-left-[700px] " : "left-0"
        } delay-150 ease-in-out duration-300`}
      >
        <div className="flex justify-between">
          <div className="font-bold">Menu</div>
          <button onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div>
          <NavigationMenu closeMenu={() => setShowMenu(false)} />
        </div>
      </div>
    </nav>
  );
}
