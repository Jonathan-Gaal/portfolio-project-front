import React, { useState } from "react";
import axios from "axios";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  validateUserSignUpOrSignInEmail,
  validateUserPassword,
} from "../../../helpers";
import "../SignInUpForm.scss";

const API = process.env.REACT_APP_API_URL;

export const SignUpForm = () => {
  const [newUserEmailFromSignUpInput, setNewUserEmailFromSignUpInput] =
    useState("");
  const [newUserPasswordFromSignUpInput, setNewUserPasswordFromSignUpInput] =
    useState("");
  const [newUserFirstNameFromSignUpInput, setNewUserFirstNameFromSignUpInput] =
    useState("");
  const [newUserLastNameFromSignUpInput, setNewUserLastNameFromSignUpInput] =
    useState("");

  const validateUserSignUpSubmitInput = async (e) => {
    e.preventDefault();

    if (
      (await validateUserPassword(newUserPasswordFromSignUpInput)) === false
    ) {
      window.alert("Please enter a valid password");
    } else {
      createUserWithEmailAndPassword(
        auth,
        newUserEmailFromSignUpInput,
        newUserPasswordFromSignUpInput
      )
        .then((userCredential) => {
          console.log("CREDENTIALS", userCredential);
          if (userCredential.user.accessToken) {
            axios.post(`${API}/users`);
            window.alert("Congrats, account created!");
          }
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
            value={newUserEmailFromSignUpInput}
            required
          />

          <input
            className="SignInUpForm__input"
            type="password"
            onChange={(e) => setNewUserPasswordFromSignUpInput(e.target.value)}
            placeholder="Enter your password"
            value={newUserPasswordFromSignUpInput}
            required
            minLength="8"
            maxLength="128"
          />
          <input
            className="SignInUpForm__input"
            type="text"
            onChange={(e) => setNewUserFirstNameFromSignUpInput(e.target.value)}
            placeholder="First name: John/Jane"
            value={newUserFirstNameFromSignUpInput}
            required
          />
          <input
            className="SignInUpForm__input"
            type="text"
            onChange={(e) => setNewUserLastNameFromSignUpInput(e.target.value)}
            placeholder="Last name: Doe"
            value={newUserLastNameFromSignUpInput}
            required
          />
          <button className="SignInUpForm__submitButton" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
