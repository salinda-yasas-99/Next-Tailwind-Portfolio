"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const FaqCard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-5">
      <div
        className="card bg-white p-4 border border-solid border-cyan-500 rounded-lg text-lg"
        style={{ color: "#387FC4", fontFamily: "inter" }}
      >
        <div className="bg-[#f5fcff] flex justify-between">
          <div> How long does a web design project take?</div>
          <div>
            <RxCross1 />
          </div>
        </div>
      </div>
      <div
        className="card p-4 border border-solid border-cyan-500 rounded-lg text-xl"
        style={{ color: "#387FC4", fontFamily: "inter" }}
      >
        <div className="bg-[#f5fcff] flex justify-between">
          <div>What factors affect the cost of web design?</div>
          <div>
            <FaPlus />
          </div>
        </div>
        <p className="mt-2 text-xl">
          Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit.
          Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend
          tellus nonole tincidunt aliquet. Fusce aliquam mi felis.
        </p>
      </div>
      <div
        className="card bg-white p-4 border border-solid border-cyan-500 rounded-lg text-xl"
        style={{ color: "#387FC4", fontFamily: "inter" }}
      >
        <div className="bg-[#f5fcff] flex justify-between">
          <div>Do you provide ongoing support?</div>
          <div>
            <RxCross1 />
          </div>
        </div>
      </div>
      <div
        className="card bg-white p-4 text-red-900 border border-solid border-cyan-500 rounded-lg text-xl"
        style={{ color: "#387FC4", fontFamily: "inter" }}
      >
        <div className="bg-[#f5fcff] flex justify-between">
          <div> What is your web design process?</div>
          <div>
            <RxCross1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
