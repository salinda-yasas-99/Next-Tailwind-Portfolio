import NavBar from "@/components/NavBar/NavBar";
import React from "react";
import heroImg from "../assets/hero.svg";
import Image from "next/image";
import MainCard from "@/components/MainCard/MainCard";
import OurServices from "@/components/OurServices/OurServices";
import Testimonials from "@/components/Testimonials/Testimonials";
import ContactUs from "@/components/HomeContactUs/ContactUs";
import FreqQuestions from "@/components/QuestionsSection/FreqQuestions";

const page = () => {
  return (
    <section className="w-full flex-center flex-col mt-4 grid grid-cols-1">
      <div className="grid md:grid-cols-2 sm:grid-cols-1">
        <div>
          <h1 className="head_text text-left">
            Shaping a Limitless Digital Future
          </h1>
          <p className="desc text-left mt-4 italic">
            Join us in pushing boundaries and helping businesses thrive in the
            digital era....
          </p>
        </div>
        <div className="flex justify-center">
          <Image src={heroImg} height={"auto"} width={"auto"} />
        </div>
      </div>
      <div className="flex justify-center grid grid-cols-1 p-10">
        <MainCard />
      </div>
      <div className="flex justify-center grid grid-cols-1 p-10">
        <OurServices />
      </div>
      <div className="flex justify-center grid grid-cols-1 p-10">
        <Testimonials />
      </div>
      <div className="flex justify-center grid grid-cols-1 p-10">
        <ContactUs />
      </div>
      <div className="flex justify-center grid grid-cols-1 p-10">
        <FreqQuestions />
      </div>
    </section>
  );
};

export default page;
