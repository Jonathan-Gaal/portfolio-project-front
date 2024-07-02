export const validateUserSignUpOrSignInEmail = (userEmail) => {
  if (!userEmail.includes(".") || !userPassword.includes("@")) {
    return false;
  }
};

export const validateUserPassword = (passwordToTest) => {
  console.log(passwordToTest);
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

export const calculateUserShoppingCartOrUserCheckoutTotal = (
  userShoppingCart
) => {
  return userShoppingCart.reduce(
    (userShoppingCartTotalAccumulator, userShoppingCartItemPrice) => {
      return (
        userShoppingCartTotalAccumulator +
        Number(userShoppingCartItemPrice.item_price)
      );
    },
    0
  );
};
