import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = () => {
    if (email === "bluebox.admin@gmail.com" && password === "admin@662639") {
      navigate("/");
      Cookies.set("user", "admin", { expires: 1 });
    } else {
      alert("wrong email or password!");
    }
  };

  return (
    <div
      className=" w-100 d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div style={{ width: 500 }}>
        <div className="form-outline mb-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="form2Example1"
            className="form-control"
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="form2Example2"
            className="form-control"
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-start">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
              />
              <label className="form-check-label" htmlFor="form2Example31">
                Remember me
              </label>
            </div>
          </div>
        </div>

        <button
          onClick={onSubmitHandler}
          className="btn btn-primary btn-block mb-4"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;
