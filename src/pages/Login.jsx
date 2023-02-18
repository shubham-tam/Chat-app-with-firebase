import React from "react";

const Login = () => {
  return (
    <div className="form-container">
      <div className="form__container-form-wrapper">
        <span className="logo"> Chat App</span>
        <span className="title"> Login </span>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <button> Sign In</button>
        </form>
        <p>
          You do not have an account? <a href="">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
