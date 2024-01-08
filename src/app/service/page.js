import Choose from "@/components/Service Page Components/Choose";
import ServiceHero from "@/components/Service Page Components/ServiceHero";
import Solutions from "@/components/Service Page Components/Solutions";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <>
        <ServiceHero />
      </>
      <>
        <Solutions />
      </>
      <>
        <Choose />
      </>
    </div>
  );
};

export default page;
