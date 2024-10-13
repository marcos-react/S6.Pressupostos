import React, { useState } from "react";

function RequestCard({ handleSolicitarPressupost, services, total }) {
  const [clientInfo, setClientInfo] = useState({
    nom: "",
    telefon: "",
    email: ""
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo({
      ...clientInfo,
      [name]: value
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl p-6 mt-8">
      <h3 className="font-bold text-xl mb-4 flex items-start">Demanar pressupost</h3>

     
      <div className="grid grid-cols-4 gap-x-2 items-center"> 
        <input
          type="text"
          name="nom"
          value={clientInfo.nom}
          onChange={handleInputChange}
          placeholder="Nom"
          className="input input-bordered w-full rounded-none" 
        />
        <input
          type="tel"
          name="telefon"
          value={clientInfo.telefon}
          onChange={handleInputChange}
          placeholder="Telèfon"
          className="input input-bordered w-full rounded-none"
        />
        <input
          type="email"
          name="email"
          value={clientInfo.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="input input-bordered w-full rounded-none"
        />

        {/* Button */}
        <button
          onClick={() => handleSolicitarPressupost(clientInfo, total, services)}
          className="btn btn-success w-full md:w-auto text-white"
        >
          Solicitar pressupost {"->"}
        </button>
      </div>
    </div>
  );
}

export default RequestCard;




