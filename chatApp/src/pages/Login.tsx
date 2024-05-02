import React, { ChangeEvent, useState } from "react";
import classes from "./Login.module.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset form fields after submission (optional)
    console.log(email, password)
    setEmail("");
    setPassword("");
    
  };

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };


  return (
    <>
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <div className={classes.message}>
         <h1>Login</h1>
        </div>
        <div className={classes.labelInputContainer}>
          <label htmlFor="email">Your email:</label>
          <input
            className={classes.inputs}
            type="email"
            id="email"
            onChange={handleEmailInput}
            value={email}
            placeholder="email@example.com"
            required
          />
        </div>
        <div className={classes.labelInputContainer}>
          <label htmlFor="password">Password:</label>
          <input
            className={classes.inputs}
            type="password"
            id="password"
            onChange={handlePasswordInput}
            value={password}
            required
          />
        </div>
        <Button  > Login</Button>
      </form>
    </>
  );
};

export default Login;
