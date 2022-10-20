import React from "react";

const Stepper = () => {
  const displaySteps = (
    <div className="w-full flex items-center">
      <div className="relative flex flex-col items-center text-teal-600">
        <div className="rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3">{/* Display Number  */}
        1
        </div>
        <div className="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase">{/* Display Description  */}
        Description
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out">{/* Display Line  */}</div>
    </div>
  )


  return (
    <div className="flex items-center justify-between mx-4">
      {displaySteps}
    </div>
  );
};

export default Stepper;
