import React, { useState } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContextUserProvider } from "../../../Providers/userProvider";
import signInImage from "../../../assets/signin.jpg";
import "./SignInForm.scss";

export const SignInForm = () => {
  const { setLoggedInUser, loggedInUser } = useContextUserProvider();
  const [userEmailFromSignInInput, setUserEmailFromSignInInput] = useState("");
  const [userPasswordFromSignInInput, setUserPasswordFromSignInInput] =
    useState("");

  const validateUserAndSignInSubmitInput = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(
      auth,
      userEmailFromSignInInput,
      userPasswordFromSignInInput
    )
      .then((userCredential) => {
        console.log("CREDENTIALS", userCredential);
        setLoggedInUser({ ...auth.currentUser });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="SignInForm">
      <img
        className="SignInForm__img"
        src={signInImage}
        alt="large moroccan door"
      />
      <form
        className="SignInForm__form"
        onSubmit={validateUserAndSignInSubmitInput}>
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
        </div>
        <button className="SignInForm__submitButton" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};
