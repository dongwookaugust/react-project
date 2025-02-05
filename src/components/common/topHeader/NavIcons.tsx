import React from "react";
import { FaGripHorizontal, FaExpand } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { PiBellSimple } from "react-icons/pi";
import "./NavIcons.css";

const NavIcons = () => {
  return (
    <ul className="nav-icons">
      <li>
        <PiBellSimple title="Notifications" />
      </li>
      <li>
        <FaGripHorizontal title="Apps" />
      </li>
      <li>
        <HiOutlineCog6Tooth title="Settings" />
      </li>
      <li>
        <IoMoonOutline title="Dark Mode" />
      </li>
      <li>
        <FaExpand title="Fullscreen" />
      </li>
    </ul>
  );
};

export default NavIcons;
