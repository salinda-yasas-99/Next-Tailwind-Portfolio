import SvgComponent from "@/components/HomeSvg";
import Test from "@/components/Testing/Test.";
import React from "react";
import dynamic from "next/dynamic";

const page = () => {
  const NoSSR = dynamic(() => import("../../components/HomeSvg"), {
    ssr: false,
  });
  return (
    <div>
      <h1>This is contact</h1>
      <NoSSR />
      {/* <Test /> */}
      {/* <SvgComponent /> */}
    </div>
  );
};

export default page;
