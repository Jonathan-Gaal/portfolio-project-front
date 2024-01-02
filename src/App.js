import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { Dashboard } from "./Pages/Dashboard";
import { Account } from "./Pages/Account";
import { UserFavorites } from "./Components/UserComponents/UserFavorites";
import { UserShoppingCart } from "./Components/UserComponents/UserCheckout/UserShoppingCart";
import { PaymentSuccess } from "./Pages/PaymentSuccess";
import { PaymentFailed } from "./Pages/PaymentFailed";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import UnderConstruction from "./Components/UnderConstruction";
import { UserAuthAndDataContextProvider } from "../src/Providers/userProvider";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <UserAuthAndDataContextProvider>
          <NavBar />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />
              <Route path="/changeaccount" element={<UnderConstruction />} />
              <Route path="/favorites" element={<UnderConstruction />} />
              <Route path="/cart" element={<UserShoppingCart />} />
              <Route path="/success" element={<PaymentSuccess />} />
              <Route path="/cancel" element={<PaymentFailed />} />
              <Route path="/gallery" element={<Index />} />
              <Route path="/gallery/:id" element={<Show />} />
              <Route path="/cart" element={<UnderConstruction />} />
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </main>
        </UserAuthAndDataContextProvider>
      </Router>
    </div>
  );
}

export default App;
