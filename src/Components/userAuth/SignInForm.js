import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./SignInForm.scss";

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
    <div className="SignInForm">
      <form
        className="SignInForm__form"
        onSubmit={validateUserSignInSubmitInput}>
        <div className="header">Log In</div>
        <div className="SignInForm__emailAndPasswordContainer">
          <input
            className="SignInForm__input"
            type="email"
            onChange={(e) => setUserEmailFromSignInInput(e.target.value)}
            placeholder="Enter your email"
            value={userEmailFromSignInInput}></input>
          <input
            className="SignInForm__input"
            type="password"
            onChange={(e) => setUserPasswordFromSignInInput(e.target.value)}
            placeholder="Enter your password"
            value={userPasswordFromSignInInput}></input>
          <button className="SignInForm__submitButton" type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};
