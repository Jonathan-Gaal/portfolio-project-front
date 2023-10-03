export const validateUserSignUpOrSignInEmail = (userEmail) => {
  if (!userEmail.includes(".") || !userPassword.includes("@")) {
    return false;
  }
};

export const validateUserPassword = (passwordToTest) => {
  if (
    /[a-z]/.test(passwordToTest) &&
    /[A-Z]/.test(passwordToTest) &&
    /[0-9]/.test(passwordToTest) &&
    /[!@#$%^&*]/.test(passwordToTest) &&
    passwordToTest.length > 8 &&
    passwordToTest.length < 128
  ) {
    return true;
  }

  return false;
};