import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <form className="signupForm">
      <p className="heading">Signup</p>
      <input
        type="text"
        placeholder="email or phone number"
        name="email"
        required
      />
      <input type="password" placeholder="password" name="password" required />
      <input
        type="password"
        placeholder="confirm password"
        name="confirmpassword"
        required
      />
      <button className="signupbtn" type="submit">
        Signup
      </button>
      <p>
        Already have an account?
        <Link to="/">
          <button type="submit">Signin</button>
        </Link>
      </p>
    </form>
  );
};

export default Signup;
