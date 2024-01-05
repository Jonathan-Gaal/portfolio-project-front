import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { auth } from "../../../../firebase";
import { useAuth } from "../../../../Providers/userProvider";
import signUpImage from "../../../../assets/signup.jpg";
import {
  validateUserSignUpOrSignInEmail,
  validateUserPassword,
} from "../../../../helpers";
import "./SignUpForm.scss";

const API = process.env.REACT_APP_API_URL;

export const SignUpForm = () => {
  const navigate = useNavigate();
  // this is how we get user state from now on
  // not on the components
  const { loggedInUser } = useAuth();
  // console.log("SIGNUP", auth);

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
      setInvalidPassword(true);
      window.alert("Please enter a valid password");
    } else {
      createUserWithEmailAndPassword(
        auth,
        newUserEmailFromSignUpInput,
        newUserPasswordFromSignUpInput
      )
        .then((userCredential) => {
          // console.log("CREDENTIALS", userCredential.user);
          if (userCredential.user.accessToken) {
            axios.post(`${API}/users`, {
              user_id: userCredential.user.uid,
              firstName: newUserFirstNameFromSignUpInput,
              lastName: newUserLastNameFromSignUpInput,
              email: newUserEmailFromSignUpInput,
            });
            window.alert("Congrats, account created!");
            setTimeout(() => {
              navigate("/signin");
            }, 2000);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="SignUpForm">
      <img
        className="SignUpForm__img"
        src={signUpImage}
        alt="large moroccan door"
      />
      <form
        className="SignUpForm__form"
        onSubmit={validateUserSignUpSubmitInput}>
        <input
          className="SignUpForm__input SignUpForm__email"
          type="email"
          onChange={(e) => setNewUserEmailFromSignUpInput(e.target.value)}
          placeholder="Enter your email"
          value={newUserEmailFromSignUpInput}
          required
        />

        <input
          className="SignUpForm__input SignUpForm__passwordInputBox"
          type="password"
          onChange={(e) => setNewUserPasswordFromSignUpInput(e.target.value)}
          placeholder="Create Your Password"
          value={newUserPasswordFromSignUpInput}
          required
          minLength="8"
          maxLength="128"
        />
        <div className="SignUpForm__passwordLabel">
          At least: 8 chars, 1 lower and uppercase letter, 1 digit, and special
          character"
        </div>

        <input
          className="SignUpForm__input"
          type="text"
          onChange={(e) => setNewUserFirstNameFromSignUpInput(e.target.value)}
          placeholder="First name: John/Jane"
          value={newUserFirstNameFromSignUpInput}
          required
        />
        <input
          className="SignUpForm__input"
          type="text"
          onChange={(e) => setNewUserLastNameFromSignUpInput(e.target.value)}
          placeholder="Last name: Doe"
          value={newUserLastNameFromSignUpInput}
          required
        />

        <button className="SignUpForm__submitButton" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
