export const validateUserSignUpOrSignInEmail = (userEmail) => {
  if (!userEmail.includes(".") || !userPassword.includes("@")) {
    return false;
  }
};

export const validateUserPassword = (password) => {
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

export const checkIfItemExistsInUserShoppingCart = async (
  userShoppingCart,
  currentProductId
) =>
  await userShoppingCart.find((currentUserShoppingCartItem) => {
    return Number(currentProductId) === currentUserShoppingCartItem.item_id;
  });
