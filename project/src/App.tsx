import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/loading/LoadingScreen";
import FloatingNav from "./components/navigation/FloatingNav";
import LoginPage from "./components/auth/LoginPage";
import { useLoading } from "./hooks/useLoading";
import HomePage from "./pages/HomePage";
import MedicalFormsPage from "./pages/MedicalFormsPage";

export default function App() {
  const isLoading = useLoading();
  const [showLogin, setShowLogin] = useState(false);

  if (showLogin) {
    return <LoginPage onClose={() => setShowLogin(false)} />;
  }

  return (
    <Router>
      <LoadingScreen isLoading={isLoading} />
      <FloatingNav onLoginClick={() => setShowLogin(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/medical-forms" element={<MedicalFormsPage />} />
      </Routes>
    </Router>
  );
}