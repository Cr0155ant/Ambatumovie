import React, { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "johndoe@example.com" && password === "johnthor") {
      onLogin();
      localStorage.setItem("isLoggedIn", "true");
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="px-2 h-[100vh] bg-chocolate3">
      <div className="bg-chocolate4 text-center p-6 rounded-lg mx-auto w-full relative top-1/4 shadow-lg">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhhiuoSxxNE0XhitrlwbrJcuT3jkFrah-rgw&s"
          alt="masamba"
          className="mx-auto mb-4 size-[10vh] rounded-lg"
        />
        <h2 className="mb-3 text-4xl italic font-extrabold"> Ambatumovie </h2>{" "}
        <div className="grid grid-cols-1 gap-4">
          <h2 className="text-2xl font-bold"> Login </h2>{" "}
          <input
            className="p-2 rounded-md shadow-md"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            onKeyPress={handleKeyPress}
          />{" "}
          <input
            className="p-2 rounded-md shadow-md"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            onKeyPress={handleKeyPress}
          />{" "}
          <button
            className="p-2 font-bold text-white rounded-md shadow-md bg-chocolate1"
            onClick={handleLogin}
          >
            {" "}
            Login{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Login;
