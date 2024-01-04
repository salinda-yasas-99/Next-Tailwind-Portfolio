import React from "react";
import TestimonialsCard from "../Testimonials Card/TestimonialsCard";

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 bg-[#211f54] sm:p-24 p-5 ">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#3980c5]  to-[#9ce1fb] sm:text-6xl text-4xl font-semibold text-left">
        What our clients have to say
      </h1>
      <p className="text-[#fff] my-8">
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
        phasellus mollis sit aliquam sit nullam.
      </p>
      <div className="grid md:grid-cols-3 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-6 gap-4">
        <div className="w-80 h-100">
          <TestimonialsCard />
        </div>
        <div className="w-80 h-100">
          <TestimonialsCard />
        </div>
        <div className="w-80 h-100">
          <TestimonialsCard />
        </div>
        <div className="w-80 h-100">
          <TestimonialsCard />
        </div>
        <div className="w-80 h-100">
          <TestimonialsCard />
        </div>
        <div className="w-80 h-100">
          <TestimonialsCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
