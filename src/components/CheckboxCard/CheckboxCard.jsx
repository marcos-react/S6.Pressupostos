import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext.jsx";
import TotalCard from "../TotalCard/TotalCard.jsx";
import SubCheckboxCard from "../SubCheckboxCard/SubCheckboxCard.jsx";
import RequestCard from "../RequestCard/RequestCard.jsx";
import ShowCard from "../ShowCard/ShowCard.jsx";

function CheckboxCard() {
  const data = useContext(DataContext);
  const [total, setTotal] = useState(0);
  const [services, setServices] = useState(data);
  const [presupuestos, setPresupuestos] = useState([]);
  const [pagines, setPagines] = useState(1);
  const [llenguatges, setLlenguatges] = useState(1);

  const calculateTotal = (updatedServices) => {
    const result = updatedServices
      .filter((service) => service.checkbox === true)
      .reduce((acc, service) => acc + service.price, 0);

    const webService = updatedServices.find(
      (service) => service.service === "Web" && service.checkbox
    );

    const extraCost = webService
      ? (webService.pagines + webService.llenguatges) * 30
      : 0;
    setTotal(result + extraCost);
  };

  const handleCheckboxChange = (id) => {
    const updatedServices = services.map((service) =>
      service.id === id ? { ...service, checkbox: !service.checkbox } : service
    );
    setServices(updatedServices);
    calculateTotal(updatedServices);
  };

  const handlePaginesChange = (id, newPagines) => {
    const updatedServices = services.map((service) =>
      service.id === id ? { ...service, pagines: newPagines } : service
    );
    setServices(updatedServices);
    setPagines(newPagines);
    calculateTotal(updatedServices);
  };

  const handleLlenguatgesChange = (id, newLlenguatges) => {
    const updatedServices = services.map((service) =>
      service.id === id ? { ...service, llenguatges: newLlenguatges } : service
    );
    setServices(updatedServices);
    setLlenguatges(newLlenguatges);
    calculateTotal(updatedServices);
  };

  const handleSolicitarPressupost = (clientInfo, total, services) => {
    const selectedServices = services.filter((service) => service.checkbox);

    const newPresupuesto = {  // all info
      nom: clientInfo.nom,
      telefon: clientInfo.telefon,
      email: clientInfo.email,
      serveis: selectedServices, // save all selected Services
      pagines: pagines,
      llenguatges: llenguatges,
      total: total,
    };

    setPresupuestos([...presupuestos, newPresupuesto]);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 p-4">
        {services.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-xl">
            <div className="card-body p-2">
              
              {/* This div contain all information */}
              <div className="grid grid-cols-3 gap-1 items-center">
                <div className="flex flex-col space-y-2 space-x-0">
                  <h2 className="card-title">{item.service}</h2>
                  <p className="font-bold">{item.detail}</p>
                </div>

                <div>
                  <p className="text-3xl font-bold items-end">{item.price}€</p>
                </div>

                <div className="flex flex-col items-end">
                  <label className="cursor-pointer label flex items-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={item.checkbox}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                    <span className="label-text ml-1">Afegir</span>
                  </label>
                </div>
              </div>

              {/* This div is outside the main one */}
              <div className="grid grid-cols-3 gap-1">
                <div></div> {/* first empty column */}
                <div></div> {/* second empty column */}
                <div> {/* Third column for SubCheckboxCard */}
                  <SubCheckboxCard
                    item={item}
                    handlePaginesChange={handlePaginesChange}
                    handleLlenguatgesChange={handleLlenguatgesChange}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <TotalCard total={total} />

      <RequestCard
        handleSolicitarPressupost={handleSolicitarPressupost}
        services={services}
        total={total}
      />

      <ShowCard presupuestos={presupuestos} />
    </>
  );
}

export default CheckboxCard;


