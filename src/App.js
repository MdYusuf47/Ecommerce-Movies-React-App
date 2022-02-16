import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./Footer";
import MainHome from "./MainHome";
import Movies from "./Movies";
import Nav from './Nav';
import Shopping from "./Shopping";
import Checkout from "./shopping/Checkout";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
