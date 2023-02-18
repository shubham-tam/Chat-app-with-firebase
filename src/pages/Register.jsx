import React from "react";
import addAvatar from "../assets/icons/addAvatar.png";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form__container-form-wrapper">
        <span className="logo"> Chat App</span>
        <span className="title"> Regsiter </span>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={addAvatar} alt="Add picture" />
            <span>Add an avatar</span>
          </label>
          <button> Sign up</button>
        </form>
        <p>
          You do not have an account? <a href="">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
