import React from "react";
import Card from "./Process Card/Card";
import contactImg from "../../assets/contactImg.svg";
import Image from "next/image";

const Process = () => {
  return (
    <div className="flex flex-col relative">
      <div>
        <h1 className="head_text text-left mb-28">Process We Follow</h1>
      </div>
      <div className="absolute top-0 right-0">
        <Image
          src={contactImg}
          className="w-[600px] h-auto"
          alt="contact img"
        />
      </div>
      <div className="flex flex-row gap-[57px]">
        <Card /> <Card />
      </div>
      <div className="flex flex-row gap-[57px] my-[57px]">
        <Card /> <Card /> <Card />
      </div>
      <div className="flex flex-row gap-[57px]">
        <Card /> <Card />
      </div>
    </div>
  );
};

export default Process;
