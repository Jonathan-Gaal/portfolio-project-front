import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import UnderConstruction from "./Components/UnderConstruction";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Index />} />
            <Route path="/gallery/:id" element={<Show />} />
            <Route path="/cart" element={<UnderConstruction />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
