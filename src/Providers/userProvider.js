import { useEffect, createContext, useContext, useState } from "react";
//importing our auth / getAuth -- auth is the specific data stream related to the state of the users authentication credentials with firebase at any given moment.
//importing the userSignOut function which in turn invokes firebase' signOut
import { auth, userSignOut } from "../firebase";

// this gives us userAuthAndaDataContext.Provider - see below\
// this allows us to access global state
// this is the instance of our global context invoked
const UserAuthAndDataContext = createContext();

//children provides the prospective context to any prospective child components that may be wraped wirthin the context data provider
export function UserAuthAndDataContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loggedInUserDataFromDB, setLoggedInUserDataFromDB] = useState({});
  const [userShoppingCart, setUserShoppingCart] = useState([]);

  //runs only on comnent load and does NOT track the user state
  useEffect(() => {
    // onAuthStateChanged is a method / function of the auth datastream that tracks any change in the auth instance, e.g., sigin or signout etc. this is an event listener
    //when this useEffect is first run the value of loggedInUser in the context is still the initial null
    // NOTE * when you navigate away or refresh the entire context provider is also refreshed, therefore any state it had is not null again since it was re-initialized, thats why we have run useEffect ewach time the component reloads to restablish the datastream

    auth.onAuthStateChanged((user) => {
      console.log("AUTH STATE CHANGED USER", user);
      // if there is a "user" object as a result of the datastream "phone call" it sets the state to the value of user || null
      user ? setLoggedInUser(user) : setLoggedInUser(null);
    });
  }, []);

  return (
    // ALWAYS HAS TO BE VALUE
    <UserAuthAndDataContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        loggedInUserDataFromDB,
        setLoggedInUserDataFromDB,
        userShoppingCart,
        setUserShoppingCart,
        userSignOut,
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
