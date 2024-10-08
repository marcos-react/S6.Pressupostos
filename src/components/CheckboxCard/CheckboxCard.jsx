import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext.jsx";
import TotalCard from "../TotalCard/TotalCard.jsx";
import SubCheckboxCard from "../SubCheckboxCard/SubCheckboxCard.jsx";

function CheckboxCard() {
  // variables and Context hook

  const data = useContext(DataContext);
  const [total, setTotal] = useState(0);
  const [services, setServices] = useState(data);
  const [pagines, setPagines] = useState(1);
  const [llenguatges, setLlenguatges] = useState(1);

  // Calculate Total function

  const calculateTotal = (updatedServices) => {
    const result = updatedServices
      .filter((service) => service.checkbox === true)
      .reduce((acc, service) => acc + service.price, 0);
    // If checkbox is true then calculate the total price.

    // Find the Webservice when the service is Web and checkbox is true.
    const webService = updatedServices.find(
      (service) => service.service === "Web" && service.checkbox
    );

    // If Webservice is true then calculate price of pagines and llenguatges
    const extraCost = webService
      ? (webService.pagines + webService.llenguatges) * 30
      : 0;
    setTotal(result + extraCost); // update value total
  };

  // Manage change in checkbox
  // Example { id: 2, service: "Ads", ... , price: 400, checkbox:false}
  // then if handleCheckboxChange(2) then change checkbox to true
  // { id: 2, service: "Ads", ... , price: 400, checkbox:true}
  // Otherwise leave it as checkbox false.

  const handleCheckboxChange = (id) => {
    const updatedServices = services.map((service) =>
      service.id === id ? { ...service, checkbox: !service.checkbox } : service
    );
    setServices(updatedServices); // update service
    calculateTotal(updatedServices); // update total
  };

  // Manage change in input box pagines
  //{ id: 3, service: "Web", ..., price: 560, checkbox: true, pagines: 1, llenguatges: 1 }
  // then if handlePaginesChange(1,2) then change pagines for 2
  //{ id: 3, service: "Web", ..., price: 590, checkbox: true, pagines: 2, llenguatges: 1 }

  const handlePaginesChange = (id, newPagines) => {
    const updatedServices = services.map((service) =>
      service.id === id ? { ...service, pagines: newPagines } : service
    );
    setServices(updatedServices);
    calculateTotal(updatedServices);
  };

  // Manage change in input box llenguatges
  //{ id: 3, service: "Web", ..., price: 560, checkbox: true, pagines: 1, llenguatges: 1 }
  // then if handlePaginesChange(1,2) then change llenguatges for 2
  //{ id: 3, service: "Web", ..., price: 590, checkbox: true, pagines: 1, llenguatges: 2 }

  const handleLlenguatgesChange = (id, newLlenguatges) => {
    const updatedServices = services.map((service) =>
      service.id === id ? { ...service, llenguatges: newLlenguatges } : service
    );
    setServices(updatedServices);
    calculateTotal(updatedServices);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 p-4">
        {services.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-xl">
            <div className="card-body p-2">
              <div className="grid grid-cols-3 gap-1 items-center">
                <div className="flex flex-col space-y-2 space-x-0">
                  <h2 className="card-title">{item.service}</h2>
                  <p className="font-bold">{item.detail}</p>
                </div>

                <div>
                  <p className="text-3xl font-bold items-end">{item.price}€</p>
                </div>

                <div className="flex flex-col items-end">
                  <label className="cursor-pointer  label flex items-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={item.checkbox}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                    <span className="label-text ml-1 ">Afegir</span>
                  </label>
                  {/* SubcheckboxCard is when id.service is Web and the checkbox is true */}
                  <SubCheckboxCard
                    item={item}
                    handlePaginesChange={handlePaginesChange}
                    handleLlenguatgesChange={handleLlenguatgesChange}
                  ></SubCheckboxCard>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <TotalCard total={total}></TotalCard>
      {/* Prop total in component. total is updated with setTotal, setTotal is modified in CalculateTotal function */}
    </>
  );
}

export default CheckboxCard;
