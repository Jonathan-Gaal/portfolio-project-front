import { createContext, useContext, useState } from "react";

export const UserAuthAndDataContext = createContext();

export function useContextUserProvider() {
  return useContext(UserAuthAndDataContext);
}

function UserAuthAndDataContextProvider({ children }) {
  // the "pseudo prop or pseudo selector" children is being destructured in param parens to allow access to all child nodes within App

  const [userCity, setUserCity] = useState(null);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(null);
  const [user, setUser] = useState(null);
  const [prefs, setPrefs] = useState(null);
  const [users, setUsers] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [zipcode, setZipcode] = useState("");

  return (
    <UserAuthAndDataContext.Provider
      value={{
        user,
        setUser,
        prefs,
        setPrefs,
        users,
        setUsers,
        profilePhotoUrl,
        setProfilePhotoUrl,
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
// go to index.js and see how our App component is wrapped inside of our custom context component. Then you can import that context in each component on a need to basis.

export default UserAuthAndDataContextProvider;
