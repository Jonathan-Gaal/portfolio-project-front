import React, { useState } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../SignInUpForm.scss";

export const SignInForm = () => {
  const [userEmailFromSignInInput, setUserEmailFromSignInInput] = useState("");
  const [userPasswordFromSignInInput, setUserPasswordFromSignInInput] =
    useState("");

  const validateUserSignInSubmitInput = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      userEmailFromSignInInput,
      userPasswordFromSignInInput
    )
      .then((userCredential) => {
        console.log("CREDENTIALS", userCredential);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="SignInUp Form">
      <form
        className="SignInUpForm__form"
        onSubmit={validateUserSignInSubmitInput}>
        <div className="header">Sign into your account</div>
        <div className="SignIn/UpForm__emailAndPasswordContainer">
          <input
            className="SignInUpForm__input"
            type="email"
            onChange={(e) => setUserEmailFromSignInInput(e.target.value)}
            placeholder="Enter your email"
            value={userEmailFromSignInInput}></input>
          <input
            className="SignInUpForm__input"
            type="password"
            onChange={(e) => setUserPasswordFromSignInInput(e.target.value)}
            placeholder="Enter your password"
            value={userPasswordFromSignInInput}></input>
          <button className="SignInUpForm__submitButton" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
