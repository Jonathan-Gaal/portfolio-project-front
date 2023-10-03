import { createContext, useContext, useState } from "react";
export const UserAuthAndDataContext = createContext();

export function useContextUserProvider() {
  return useContext(UserAuthAndDataContext);
}

function UserAuthAndDataContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserAuthAndDataContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
      }}>
      {children}
    </UserAuthAndDataContext.Provider>
  );
}

export default UserAuthAndDataContextProvider;
