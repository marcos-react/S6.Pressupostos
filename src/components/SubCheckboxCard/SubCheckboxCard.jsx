export default function SubCheckboxCard({
  item,
  handlePaginesChange,
  handleLlenguatgesChange,
}) {
  return (
    <>
      {item.service === "Web" && item.checkbox && (
        <div className="flex flex-col items-end space-y-1">
          <div className="flex flex-row items-center space-x-2 md:space-x-4">
            <label className="text-sm font-bold">Nombre de pàgines</label>
            <div className="flex items-center space-x-2">
              <button
                className="btn btn-circle btn-sm"
                onClick={() => handlePaginesChange(item.id, item.pagines - 1)}
              >
                -
              </button>
              <input
                value={item.pagines}
                onChange={(e) =>
                  handlePaginesChange(item.id, parseInt(e.target.value) || 0)
                }
                className="input input-bordered w-16 sm:w-12 text-center"
              />
              <button
                className="btn btn-circle btn-sm"
                onClick={() => handlePaginesChange(item.id, item.pagines + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-2 md:space-x-4">
            <label className="text-sm font-bold">Nombre de llenguatges</label>
            <div className="flex items-center space-x-2">
              <button
                className="btn btn-circle btn-sm"
                onClick={() =>
                  handleLlenguatgesChange(item.id, item.llenguatges - 1)
                }
              >
                -
              </button>
              <input
                value={item.llenguatges}
                onChange={(e) =>
                  handleLlenguatgesChange(
                    item.id,
                    parseInt(e.target.value) || 0
                  )
                }
                className="input input-bordered w-16 sm:w-12 text-center"
              />
              <button
                className="btn btn-circle btn-sm"
                onClick={() =>
                  handleLlenguatgesChange(item.id, item.llenguatges + 1)
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
