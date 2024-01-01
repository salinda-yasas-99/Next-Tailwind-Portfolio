import React from "react";

const TestimonialsCard = () => {
  return (
    <div className="p-4 text-gray-800 rounded-lg shadow-md">
      <div className="mb-2">
        <p className="mb-2 text-center text-gray-600 ">
          " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          sapiente iusto esse. "
        </p>
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
            <img
              src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
              alt="img"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <h5 className="font-bold text-indigo-600">michael james</h5>
          <p className="text-sm text-gray-600">web developer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
