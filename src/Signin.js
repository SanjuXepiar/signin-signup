import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div className="signinForm">
      <p className="heading">Login</p>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button className="forgetbtn" type="submit">
        Forget password?
      </button>
      <button className="signinbtn">Signin</button>
      <p style={{ marginBottom: "0" }}>
        Dont have an account?
        <Link to="/signup">
          <button type="submit">Signup</button>
        </Link>
      </p>
    </div>
  );
};

export default Signin;
