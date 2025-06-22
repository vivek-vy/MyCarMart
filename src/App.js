import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage";
import ContactPage from "./components/ContactPage";
import Layout from "./layout/layout";
import LoginPage from "./pages/loginPage";
import { CarDetails } from "./components/CarDetails";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "CarMart";
  }, []);

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />{" "}
          <Route path="/carDetails/:id" element={<CarDetails />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
