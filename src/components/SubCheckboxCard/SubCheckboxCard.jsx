import React from "react";

export default function SubCheckboxCard({ item, handlePaginesChange, handleLlenguatgesChange }) {
  return (
    <>
      {item.service === "Web" && item.checkbox && (
        <div className="flex flex-col items-end mt-2 space-y-1">
          <div className="flex flex-row space-x-10">
            <label className="text-sm font-bold">Nombre de pàgines</label>
            <input
              value={item.pagines}
              onChange={(e) =>
                handlePaginesChange(item.id, parseInt(e.target.value) || 0)
              }
              className="input input-bordered w-12"
            />
          </div>
          <div className="flex flex-row space-x-10">
            <label className="text-sm font-bold">Nombre de llenguatges</label>
            <input
              value={item.llenguatges}
              onChange={(e) =>
                handleLlenguatgesChange(item.id, parseInt(e.target.value) || 0)
              }
              className="input input-bordered w-12"
            />
          </div>
        </div>
      )}
    </>
  );
}
