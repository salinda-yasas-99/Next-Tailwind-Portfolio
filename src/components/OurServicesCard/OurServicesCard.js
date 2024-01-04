import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import php from "../../assets/CSD icons/php.png";
import Image from "next/image";

import cakePhp from "../../assets/CSD icons/cakephp.png";
import drupal from "../../assets/CSD icons/drupal.png";
import wordPress from "../../assets/CSD icons/wordpress.png";
import laravel from "../../assets/CSD icons/laravel.png";

const OurServicesCard = () => {
  return (
    <div className="border-[#9ee3fc] border-2 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(56,127,296,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-70 h-70">
      <div className="flex flex-col p-6 items-center">
        <div className="flex justify-center items-center bg-[#ebf2f9] rounded-xl  h-10 w-10">
          <HiOutlineDesktopComputer color={"#387fc4"} />
        </div>
        <h5 className="mb-2 text-xl font-medium leading-tight text-#6d758f">
          Custom Software Development
        </h5>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 border-[#9ee3fc] border-t-2 px-6 py-3 bg-[#f5fcff] gap-2">
        {/* Row1 */}
        <div className="grid grid-cols-2 grid-row-1 gap-0 items-center">
          <div className="pl-4">
            <Image src={php} alt="php" />
          </div>
          <div className="text-xs">PHP</div>
        </div>

        <div className="col-span-2 grid grid-cols-2 grid-row-1 items-center">
          <div className="pl-6">
            <Image src={wordPress} alt="php" className="h-6 w-6" />
          </div>
          <div className="text-xs"> Wordpress</div>
        </div>

        <div className=" grid grid-cols-2 grid-row-1 items-center">
          <div className="pl-0">
            <Image src={drupal} alt="php" className="h-6 w-6" />
          </div>
          <div className="text-xs">Drupal</div>
        </div>
        {/* Row2  */}
        <div className="col-auto grid grid-cols-2 grid-row-1 items-center" />
        <div className="col-auto grid grid-cols-2 grid-row-1 items-center">
          <div className="">
            <Image src={cakePhp} alt="Cake PHP" className="h-6 w-6" />
          </div>
          <div className="text-xs"> CakePHP</div>
        </div>

        <div className="col-auto grid grid-cols-2  grid-row-1 items-center gap-2">
          <div className="pl-4">
            <Image src={laravel} alt="php" className="h-6 w-6" />
          </div>
          <div className="text-xs"> Laravel</div>
        </div>
        <div className="col-auto grid grid-cols-2 grid-row-1 items-center" />
      </div>
    </div>
  );
};

export default OurServicesCard;

{
  /* <div className="grid grid-cols-1 justify-center items-center border-[#9ee3fc] border-t-2 0 px-6 py-3 bg-[#f5fcff]">
        <div className="grid grid-col-3 grid-rows-1">
          <div className="grid grid-col-2 grid-rows-1">
            <div>
              <Image src={php} alt="php" className="h-6 w-6" />
            </div>
            <div> PHP</div>
          </div>
          <div>
            <Image src={wordPress} alt="php" className="h-6 w-6" />
            Wordpress
          </div>
          <div>
            <Image src={drupal} alt="php" className="h-6 w-6" />
            Drupal
          </div>
        </div>

        <div className="grid grid-col-2 grid-rows-1">
          <div>
            <Image src={cakePhp} alt="Cake PHP" className="h-6 w-6" />
            CakePHP
          </div>
          <div>
            <Image src={laravel} alt="php" className="h-6 w-6" />
            Laravel
          </div>
        </div>
      </div> */
}
