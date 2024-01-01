import React from "react";
import Image from "next/image";
import AboutImg from "../../assets/aboutUs.svg";

const MainCard = () => {
  return (
    <div className="w-[1240px] bg-[#211f54] rounded-3xl p-10">
      <div className="grid md:grid-cols-2 sm:grid-cols-1">
        <div>
          <Image src={AboutImg} width={200} height={200} />
        </div>
        <div>
          <p className="text-transparent  bg-clip-text bg-gradient-to-r from-[#4e94d0]  to-[#9ce1fb]">
            About Us
          </p>
          <p className="text-white">
            At INNOV8 FUSION, we lead the charge in technology innovation. Our
            mission is to redefine possibilities through cutting-edge solutions,
            shaping a future where businesses thrive in the digital era. Join us
            on this dynamic journey as we harness the power of innovation,
            unlocking limitless opportunities for growth and success.
          </p>
        </div>

        <div className="text-sm"></div>
      </div>
    </div>
  );
};

export default MainCard;
