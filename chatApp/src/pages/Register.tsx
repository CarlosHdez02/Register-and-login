import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import classes from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register: React.FC = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>("");
  const [validName, setValidName] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const navigate = useNavigate(); 

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus(); // Focus on name input when component mounts
    }
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(name));
  }, [name]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log("Form submitted with:", name, email, password);
    navigate('/todo')
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        <div className={classes.message}>
          <h1>Register:</h1>
        </div>
        <div className={classes.labelInputContainer}>
          <label htmlFor="name">Name:</label>
          <input
            className={classes.inputs}
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            ref={nameRef}
            required
          />
        </div>
        <div className={classes.labelInputContainer}>
          <label htmlFor="email">Email:</label>
          <input
            className={classes.inputs}
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className={classes.labelInputContainer}>
          <label htmlFor="password">Password:</label>
          <input
            className={classes.inputs}
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className={classes.labelInputContainer}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className={classes.inputs}
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <Button disabled={!validName || password !== confirmPassword ? true : false}>Create Account</Button>
      </form>
    </section>
  );
};

export default Register;
