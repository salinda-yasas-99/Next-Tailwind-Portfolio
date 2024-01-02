"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logoImg from "../../assets/logo.png";
import styles from "./styles.css";
import Link from "next/link";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex bg-white justify-between items-center h-24 max-w-[1850px] mx-auto px-4 text-white">
      <h1 className="w-full">
        <Link href={"/"}>
          <Image src={logoImg} width={100} height={100} alt={"logo"} />
        </Link>
      </h1>
      <ul className="hidden md:flex">
        <Link href={"/"}>
          <li className="des_li blue_btn">Home</li>
        </Link>
        <Link href={"/about"}>
          <li className="des_li blue_btn">About</li>
        </Link>
        <Link href={"/service"}>
          <li className="des_li blue_btn">Services</li>
        </Link>
        <Link href={"/contacts"}>
          <li className="des_li blue_btn">Contact</li>
        </Link>
      </ul>
      <div
        role="button"
        onClick={handleNav}
        className="block md:hidden cursor-pointer"
      >
        {nav ? (
          <AiOutlineClose size={20} color="#387fc4" />
        ) : (
          <AiOutlineMenu size={20} color="#387fc4" />
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-[#387fc4] bg-[#fff] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="p-5 ">
          <Image src={logoImg} width={100} height={100} alt={"logo"} />
        </div>
        <ul className="uppercase p-4">
          <li className="p-4 border-b-2 text-[#387fc4] border-[#387fc4]">
            Home
          </li>
          <li className="p-4 border-b-2 text-[#387fc4] border-[#387fc4]">
            About
          </li>
          <li className="p-4 border-b-2 text-[#387fc4] border-[#387fc4]">
            Services
          </li>
          <li className="p-4 border-b-2 text-[#387fc4] border-[#387fc4]">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
