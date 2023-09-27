export const validateUserSignUpOrSignInEmailAndPassword = (
  userEmail,
  userPassword
) => {
  if (!userEmail.includes(".") || !userPassword.includes("@")) {
    return false;
  }
};
