import React, { useState } from "react";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { validateUserSignUpOrSignInEmailAndPassword } from "../../../helpers";
import "../SignInUpForm.scss";

export const SignUpForm = () => {
  const [newUserEmailFromSignUpInput, setNewUserEmailFromSignUpInput] =
    useState("");
  const [newUserPasswordFromSignUpInput, setNewUserPasswordFromSignUpInput] =
    useState("");

  const validateUserSignUpSubmitInput = (e) => {
    e.preventDefault();
    validateUserSignUpOrSignInEmailAndPassword(
      newUserEmailFromSignUpInput,
      newUserPasswordFromSignUpInput
    );
    console.log(validateUserSignUpOrSignInEmailAndPassword);
    if (validateUserSignUpOrSignInEmailAndPassword === "false") {
      window.alert("Please enter a valid email");
    } else {
      createUserWithEmailAndPassword(
        auth,
        newUserEmailFromSignUpInput,
        newUserPasswordFromSignUpInput
      )
        .then((userCredential) => {
          console.log("CREDENTIALS", userCredential);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="SignInUp Form">
      <form
        className="SignInUpForm__form"
        onSubmit={validateUserSignUpSubmitInput}>
        <div className="header">Create Account</div>
        <div className="SignIn/UpForm__emailAndPasswordContainer">
          <input
            className="SignInUpForm__input"
            type="email"
            onChange={(e) => setNewUserEmailFromSignUpInput(e.target.value)}
            placeholder="Enter your email"
            value={newUserEmailFromSignUpInput}></input>
          <input
            className="SignInUpForm__input"
            type="password"
            onChange={(e) => setNewUserPasswordFromSignUpInput(e.target.value)}
            placeholder="Enter your password"
            value={newUserPasswordFromSignUpInput}></input>
          <button className="SignInUpForm__submitButton" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
