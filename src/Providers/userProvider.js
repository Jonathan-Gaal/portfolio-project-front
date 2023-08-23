import { createContext, useContext, useState } from "react";

export const UserAuthAndDataContext = createContext();

export function useContextUserProvider() {
  return useContext(UserAuthAndDataContext);
}

function UserAuthAndDataContextProvider({ children }) {
  const [userCity, setUserCity] = useState(null);
  const [user, setUser] = useState("my name is null");
  const [firstName, setFirstName] = useState(null);
  const [zipcode, setZipcode] = useState("");

  return (
    <UserAuthAndDataContext.Provider
      value={{
        user,
        setUser,
        firstName,
        setFirstName,
        zipcode,
        setZipcode,
        userCity,
        setUserCity,
      }}>
      {children}
    </UserAuthAndDataContext.Provider>
  );
}

export default UserAuthAndDataContextProvider;
