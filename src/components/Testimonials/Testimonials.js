import React from "react";
import TestimonialsCard from "../Testimonials Card/TestimonialsCard";

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1">
      <h1 className="head_text text-left">What our clients have to say</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
        phasellus mollis sit aliquam sit nullam.
      </p>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
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
