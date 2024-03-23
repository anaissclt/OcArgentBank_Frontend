// IMPORT
import { BrowserRouter, Route, Routes } from "react-router-dom";

// STYLE
import "./app.css";

// LAYOUTS
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";

// PAGES
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
