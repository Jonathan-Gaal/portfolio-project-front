import React from "react";
import { UserAuthAndDataContextProvider } from "../Providers/userProvider";

const { user } = UserAuthAndDataContextProvider();

export const User = () => {
  return <div>User</div>;
};
