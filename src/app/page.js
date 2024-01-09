import NavBar from "@/components/NavBar/NavBar";
import React from "react";
import heroImg from "../assets/hero.svg";
import Image from "next/image";
import MainCard from "@/components/MainCard/MainCard";
import OurServices from "@/components/OurServices/OurServices";
import Testimonials from "@/components/Testimonials/Testimonials";
import ContactUs from "@/components/HomeContactUs/ContactUs";
import FreqQuestions from "@/components/QuestionsSection/FreqQuestions";
import { FaArrowRight } from "react-icons/fa";
import Process from "@/components/Home Process/Process";
import Pioneer from "@/components/Pioneer/Pioneer";

const page = () => {
  return (
    <div className="w-full flex-center flex-col mt-4 grid grid-cols-1">
      <div className="grid md:grid-cols-2 sm:grid-cols-1">
        <div className="px-10">
          <h1 className="head_text text-left p-2">
            Shaping a Limitless <br />
            Digital Future
          </h1>
          <p className="desc sm:text-left text-center mt-4 italic p-2">
            Join us in pushing boundaries and helping businesses thrive in the
            digital era....
          </p>
          <button className="text-[white] w-full sm:w-[250px] bg-[#201f54] mt-4 px-5 py-3 rounded-full ml-2">
            <div className="flex items-center gap-2 justify-center">
              <div>Get in Touch</div>
              <div>
                <FaArrowRight />
              </div>
            </div>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Image src={heroImg} height={"auto"} width={"auto"} />
        </div>
      </div>
      <div className="grid-cols-1 flex justify-center items-center  p-10">
        <MainCard />
      </div>
      <div className="flex justify-center grid grid-cols-1 p-10">
        <OurServices />
      </div>
      <div className="flex justify-center grid grid-cols-1 p-10">
        <Testimonials />
      </div>
      <div className="flex justify-center grid grid-cols-1 p-10">
        {/* <ContactUs /> */}
        <Process />
      </div>
      <div className="flex justify-center grid grid-cols-1 p-10">
        <Pioneer />
      </div>
      <div className="flex justify-center grid grid-cols-1 p-10">
        <FreqQuestions />
      </div>
    </div>
  );
};

export default page;
