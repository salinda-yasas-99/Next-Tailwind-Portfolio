import AbtHero from "@/components/About Page Components/AbtHero";
import CoreValues from "@/components/About Page Components/CoreValues";
import Team from "@/components/About Page Components/Team";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <>
        <AbtHero />
      </>
      <>
        <CoreValues />
      </>
      <>
        <Team />
      </>
    </div>
  );
};

export default page;
