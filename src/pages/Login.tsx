import { useState } from "react";
import logo from "../assets/logo.svg";

import signIn from "../assets/pablo-sign-in 1.svg";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!loginDetails.email && !loginDetails.password) {
      return;
    }
    localStorage.setItem("credentials", JSON.stringify(loginDetails));
    navigate("/dashboard")
  };
  return (
    <main className="login-container">
      <div className="logo-container">
        <div className="main-logo">
          <img src={logo} alt="" />
        </div>
        <div className="sign-in-picture">
          <img src={signIn} alt="" />
        </div>
      </div>
      <div className="inputField-container">
        <div>
          <h1 className="welcome-text">Welcome!</h1>

          <p className="welcome-paragraph">Enter details to login.</p>

          <div className="input-field">
            <InputField
              type="email"
              placeholder="Email"
              value={loginDetails.email}
              onChange={handleInputChange}
              name="email"
            />

            <InputField
              type="password"
              placeholder="Password"
              value={loginDetails.password}
              onChange={handleInputChange}
              name="password"
            />

            <p className="forgot-password">FORGOT PASSWORD?</p>
          </div>

          <Button label="LOG IN" onClick={handleSubmit} variant="primary" data={loginDetails} />
        </div>
      </div>
    </main>
  );
};

export default Login;
