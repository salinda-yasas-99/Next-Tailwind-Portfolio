import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsCard = () => {
  return (
    <div className="p-4 text-gray-800 rounded-lg shadow-md bg-white">
      <div className="mb-2">
        <div className="flex gap-3 my-2 text-left text-gray-600">
          <FaStar color="#ffc93f" />
          <FaStar color="#ffc93f" />
          <FaStar color="#ffc93f" />
          <FaStar color="#ffc93f" />
          <FaStar color="#ffc93f" />
        </div>
        <p className="my-2 text-left text-gray-600">
          “Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid saya
          jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu kuliah
          nomor satu! 👈😎👉”
        </p>
        <div className="flex flex-row">
          <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
            <img
              src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
              alt="img"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="m-3">
            <h5 className="font-bold text-[#000000]">Sanusi Sulivan</h5>
            <p className="text-xs text-[#6a7193]">
              Dosen di Boating School Ny. Puff
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
            <img
              src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
              alt="img"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <h5 className="font-bold text-indigo-600">michael james</h5>
          <p className="text-sm text-gray-600">web developer</p>
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialsCard;
