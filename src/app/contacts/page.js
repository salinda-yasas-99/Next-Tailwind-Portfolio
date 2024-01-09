import SvgComponent from "@/components/HomeSvg";
import Test from "@/components/Testing/Test.";
import React from "react";
import dynamic from "next/dynamic";
import ContactMore from "@/components/Contact/Contact";

const page = () => {
  //   const NoSSR = dynamic(() => import("../../components/HomeSvg"), {
  //     ssr: false,
  //   });
  return (
    <div>
      <ContactMore />
      {/* <NoSSR /> */}
      {/* <Test /> */}
      {/* <SvgComponent /> */}
    </div>
  );
};

export default page;
