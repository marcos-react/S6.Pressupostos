import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext.jsx';

function CheckboxCard() {
  const data = useContext(DataContext);
  const [total, setTotal] = useState(0);
  const [services, setServices] = useState(data);

  {/* Calculate total amount */}

  const calculateTotal = (updatedServices) => {
    const result = updatedServices
      .filter((service) => service.checkbox === true)
      .reduce((acc, service) => acc + service.price, 0);
    setTotal(result);
  };

  {/* Handle if service has been changed. Then it will be updated the service and the total */}

  const handleCheckboxChange = (id) => {
    const updatedServices = services.map((service) =>
      service.id === id ? { ...service, checkbox: !service.checkbox } : service
    );
    setServices(updatedServices);
    calculateTotal(updatedServices);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 p-4">
        {services.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-xl">
            <div className="card-body p-2"> {/* Reduce padding card-body */}
              <div className="grid grid-cols-3 gap-1 items-center">
                {/* First column: item.service up and item.detail down */}
                <div className='flex flex-col space-y-2 space-x-0'>
                  <h2 className="card-title">{item.service}</h2>
                  <p className='font-bold'>{item.detail}</p>
                </div>

                {/* Second column: item.price */}
                <div>
                  <p className="text-3xl font-bold items-end">{item.price}€</p>
                </div>

                {/* Third column: checkbox with label */}
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>



      <div className="p-4">
        <h2 className="mt-4 text-lg font-bold text-right">Preu Pressuposat: {total}€</h2>
      </div>

    </>
  );
}

export default CheckboxCard;


