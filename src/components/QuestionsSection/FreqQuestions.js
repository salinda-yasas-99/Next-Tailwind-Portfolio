import React from "react";
import FaqCard from "../FreqCard/FreqCard";

const FreqQuestions = () => {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 w-[1400px] ">
      <div>
        <h1 className="head_text text-left">Frequently Asked Questions</h1>
        <p className="desc text-left mt-4 italic">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sitoler aliquam sit nullam.
        </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-1">
        <div>
          <FaqCard />
        </div>
      </div>
    </div>
  );
};

export default FreqQuestions;
