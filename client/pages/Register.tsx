import React, { useState } from "react";
import { signupUser } from "./api/user";
const signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      const response = await signupUser({ username, password });
      console.log(response);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup} method="post">
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            name="username"
            placeholder="Enter your username"
            required
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="name">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Signup
        </button>
      </form>{" "}
    </div>
  );
};
export default signup;
