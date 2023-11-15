import { createContext, useContext, useState } from "react";

// this gives us userAuthAndaDataContext.Provider - see below\
// this allows us to access global state
const UserAuthAndDataContext = createContext();

export function UserAuthAndDataContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    // ALWAYS HAS TO BE VALUE
    <UserAuthAndDataContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
      }}>
      {/* 
      we need to make flexible components - we don't know what will be passed
      children lets us pass in any nested components without declaring them first
      */}
      {children}
    </UserAuthAndDataContext.Provider>
  );
}

// this wraps the entire thing in an easy to use custom Hook
// we can destructure ANY user from context state by using  const { user } = useAuth;
export function useAuth() {
  // this hook will SEARCH THE COMPONENT TREE
  // until it finds a context
  return useContext(UserAuthAndDataContext);
}
