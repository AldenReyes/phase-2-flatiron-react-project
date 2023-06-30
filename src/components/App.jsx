import "../styles/App.css"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./Deals";
import SavedDeals from "./SavedDeals"
import About from "./About";

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="saved-deals" element={<SavedDeals />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
