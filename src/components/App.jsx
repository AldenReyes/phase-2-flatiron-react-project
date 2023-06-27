import "../styles/App.css"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About"
import About2 from "./About2";

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="about2" element={<About2 />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
