import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  const handleStart = () => {

    navigate('/calculator');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-6">Benvingut/da!</h1>
      <p className="text-lg mb-8">
        Aquesta web et permet calcular el cost dels serveis que necessitis.
      </p>
      <p className="text-lg mb-8">
        Selecciona els serveis, ajusta els paràmetres i obtindràs el total.
      </p>
      <button
        onClick={handleStart}
        className="btn btn-primary text-white px-4 py-2 rounded"
      >
        Començar
      </button>
    </div>
  );
}

export default WelcomePage;
