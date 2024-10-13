import React from "react";

function ShowCard({ presupuestos }) {
  return (
    <div className="mt-8 p-4 border-t-2">
      <h3 className="font-bold text-xl mb-4 flex items-start">Pressupostos en curs:</h3>
      {presupuestos.map((presupuesto, index) => (
        <div key={index} className="card bg-base-100 shadow-lg p-6 mb-4">
          <div className="grid grid-cols-3 md:grid-cols-3  ms:grid-cols-3 gap-4">
            
            {/* First column info*/}
            <div className="ml-4">
              <h3 className="font-bold text-2xl">{presupuesto.nom}</h3>
              <p>{presupuesto.email}</p>
              <p>{presupuesto.telefon}</p>
            </div>

            {/* Second column: Services */}
            <div>
              <h3 className="font-bold text-lg">Serveis contractats:</h3>
              <ul className="list-disc list-inside ml-4">
                {presupuesto.serveis.map((servei, index) => (
                  <li key={index}>
                    {servei.service === "Web" ? (
                      <>Web ({servei.pagines} pàgines, {servei.llenguatges} llenguatges)</>
                    ) : (
                      servei.service
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Third column: Total */}
            <div className="text-right">
              <h3 className="text-lg">Total:</h3>
              <p className="text-2xl font-bold">{presupuesto.total}€</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowCard;



