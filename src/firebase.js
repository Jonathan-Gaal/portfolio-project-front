// Import the functions you need from the SDKs you need
//we are importing the firebase initialize function to create an instance of firebase in our react project
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// we are importing firebase' function to access a logged in user authentication credentials with getAuth, and we are importing their signout function with signOut
import { getAuth, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase -- similar to importing express and app = const app = express()
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// auth is our instance of getAuth() invoked -- instead of exporting the entire app, we are exporting just the auth part
// firebase uses data streams to manage authentication, these streams are all accessed through the auth object
//for example analytics, and authentication are specific data streams and that allows it to point to our app, and to persist the data -- e.g, it keeps a conversation going betweeen your app and the firebase API and it can refresh the users login token automaticaly for example.
export const auth = getAuth(app);

// here we use a custom signout function which invokes the firebase signOut
export const userSignOut = () => {
  return signOut(auth);
};
