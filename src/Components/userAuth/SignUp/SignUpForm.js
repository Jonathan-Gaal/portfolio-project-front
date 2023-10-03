import React, { useState } from "react";
import axios from "axios";
import { auth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContextUserProvider } from "../../../Providers/userProvider";
import signUpImage from "../../../assets/signup.jpg";
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

  const { setUser } = useContextUserProvider();

  //TODO: CHECK UP ON SIGNINING INTO CURRENT USER USING BESTMATES REGISTER AS A REFERENCE. THIS WILL BE WHAT WE USE TO HAVE THE INFO OF THE LOGGED IN USER

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
          console.log("CREDENTIALS", userCredential.user);
          if (userCredential.user.accessToken) {
            axios.post(`${API}/users`, {
              user_id: userCredential.user.uid,
              firstName: newUserFirstNameFromSignUpInput,
              lastName: newUserLastNameFromSignUpInput,
              email: newUserEmailFromSignUpInput,
            });
            window.alert("Congrats, account created!");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="SignInUpForm">
      <img
        className="SignInUpForm__img"
        src={signUpImage}
        alt="large moroccan door"
      />
      <form
        className="SignInUpForm__form"
        onSubmit={validateUserSignUpSubmitInput}>
        <input
          className="SignInUpForm__input SignInUpForm__email"
          type="email"
          onChange={(e) => setNewUserEmailFromSignUpInput(e.target.value)}
          placeholder="Enter your email"
          value={newUserEmailFromSignUpInput}
          required
        />

        <input
          className="SignInUpForm__input SignInUpForm__passwordInputBox"
          type="password"
          onChange={(e) => setNewUserPasswordFromSignUpInput(e.target.value)}
          placeholder="Enter Your Password"
          value={newUserPasswordFromSignUpInput}
          required
          minLength="8"
          maxLength="128"
        />
        <div className="SignInUpForm__passwordLabel">
          At least: 8 chars, 1 lower and uppercase letter, 1 digit, and special
          character"
        </div>
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
      </form>
    </div>
  );
};
