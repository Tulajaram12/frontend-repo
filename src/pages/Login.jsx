import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);

    alert("Login request sent");
  };

  return (
    <div className="page">
      <h2>Login</h2>

      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
