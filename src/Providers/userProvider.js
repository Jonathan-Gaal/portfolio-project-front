import { createContext, useContext, useState } from "react";

export const UserAuthAndDataContext = createContext();

export function useContextUserProvider() {
  return useContext(UserAuthAndDataContext);
}

function UserAuthAndDataContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  return (
    <UserAuthAndDataContext.Provider
      value={{
        users,
        setUsers,
      }}>
      {children}
    </UserAuthAndDataContext.Provider>
  );
}

export default UserAuthAndDataContextProvider;
