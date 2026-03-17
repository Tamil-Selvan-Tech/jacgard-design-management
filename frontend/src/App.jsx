import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";   // ✅ missing import

import Navbar from "./components/Navbar";
import AddDesign from "./pages/AddDesign";
import DesignList from "./pages/DesignList";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <ToastContainer position="top-right" autoClose={2000} />

      <Routes>
        <Route path="/" element={<AddDesign />} />
        <Route path="/list" element={<DesignList />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;