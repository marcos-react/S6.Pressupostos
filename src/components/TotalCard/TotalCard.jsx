import React from "react";

export default function TotalCard({total}) {
  return (
    <>
      <div className="p-4">
        <h2 className="mt-4 text-lg font-bold text-right">
          Preu Pressuposat: {total}€
        </h2>
      </div>
    </>
  );
}
