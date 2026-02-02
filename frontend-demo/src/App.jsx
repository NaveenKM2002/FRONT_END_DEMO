import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Company from "./pages/Company";
import RequestDemo from "./pages/RequestDemo";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/company" element={<Company />} />
        <Route path="/demo" element={<RequestDemo />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
