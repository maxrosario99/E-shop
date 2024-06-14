import React, { useState, useEffect } from "react";
import { LoginUser, checkSession } from "./api/user";
import { useAuth } from "../components/AuthContext";

const Login = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn, setUsername } = useAuth();
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await LoginUser({ username: usernameInput, password });
      console.log(response);
      setIsLoggedIn(true);
      setUsername(usernameInput);
      setError("");
    } catch (error: any) {
      console.log(error);
      setError("Failed to log in. Please check your username and password.");
    }
  };
  const handleCheckSession = async () => {
    const response = await checkSession();
    console.log(response);
  };
  useEffect(() => {
    console.log("Login component mounted");
  }, []);

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            placeholder="Enter your username"
            required
            autoComplete="off"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
        {error && <p className="error-message">{error}</p>}
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
      <button onClick={handleCheckSession}>CheckSession</button>
    </div>
  );
};

export default Login;
