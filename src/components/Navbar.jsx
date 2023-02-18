import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo"> Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/15579683/pexels-photo-15579683.jpeg"
          alt=""
        />
        <span> Not John</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
