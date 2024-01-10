import React, { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase";
import {
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { useAuth } from "../../../../Providers/userProvider";
import signInImage from "../../../../assets/signin.jpg";
import "./SignInForm.scss";

export const SignInForm = () => {
  const navigate = useNavigate();

  const { setLoggedInUser, loggedInUser } = useAuth();
  const [userEmailFromSignInInput, setUserEmailFromSignInInput] = useState("");
  const [userPasswordFromSignInInput, setUserPasswordFromSignInInput] =
    useState("");

  const validateUserAndSignInSubmitInput = async (e) => {
    e.preventDefault();

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return signInWithEmailAndPassword(
          auth,
          userEmailFromSignInInput,
          userPasswordFromSignInInput
        );
      })
      .then((userCredential) => {
        console.log("CREDENTIALS FROM SIGNIN FORM ON SIGNIN", userCredential);
        // setLoggedInUser({ ...auth.currentUser });
        if (auth.currentUser) {
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    //   await signInWithEmailAndPassword(
    //     auth,
    //     userEmailFromSignInInput,
    //     userPasswordFromSignInInput
    //   )
    //     .then((userCredential) => {
    //       console.log("CREDENTIALS", userCredential);
    //       setLoggedInUser({ ...auth.currentUser });
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
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
