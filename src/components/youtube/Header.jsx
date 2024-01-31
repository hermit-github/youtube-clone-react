import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../store/appSlice";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="px-4 py-1 flex justify-between items-center shadow-lg ">
      <div className="flex gap-2 hover:cursor-pointer">
        <img
          src="/icons/hamburger.svg"
          alt="menu"
          width="40px"
          onClick={handleSidebarToggle}
        />
        <Link to={"/"}>
          <img src="/icons/youtube.svg" alt="youtube-logo" width="50px" />
        </Link>
      </div>
      <Search/>
      <div>
        <img src="/icons/user.svg" alt="user-icon" width="50px" />
      </div>
    </div>
  );
};

export default Header;
