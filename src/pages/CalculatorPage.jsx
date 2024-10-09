import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarCard from "../components/NavbarCard/NavbarCard.jsx";
import CheckboxCard from "./../components/CheckboxCard/CheckboxCard.jsx";

function CalculatorPage() {
  const navigate = useNavigate();

  const handleBackToWelcome = () => {

    navigate("/");
  };

  return (
    <div className="p-4">
      <NavbarCard />
      <CheckboxCard />
      <button onClick={handleBackToWelcome} className="btn btn-secondary mt-4">
        Tornar a la benvinguda
      </button>
    </div>
  );
}

export default CalculatorPage;
