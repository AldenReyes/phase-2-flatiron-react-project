import "../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import SavedDeals from "./SavedDeals";
import About from "./About";
import Results from "./Results";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="saved-deals" element={<SavedDeals />} />
          <Route path="about" element={<About />} />
          <Route path="results" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
