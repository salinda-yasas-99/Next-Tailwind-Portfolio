import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";

const ContactMore = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center flex-col  w-[85%] mt-[120px] rounded-[30px] md:space-x-10 h-[700px] bg-[#211F54]">
        <div className="flex mt-[40px] flex-col justify-center items-center ">
          <h1 className="text-[36px] font-[700] bg-gradient-to-r  from-[#387fc4]  to-[#9ee3fc] bg-clip-text text-transparent">
            Let us know what{" "}
          </h1>
          <h1 className="text-[36px] font-[700] bg-gradient-to-r  from-[#387fc4]  to-[#9ee3fc] bg-clip-text text-transparent">
            you think!
          </h1>
          <p className="w-[400px] text-center text-[#D8F4FE] text-[16px]">
            From inquiry to implementation, we've got your solutions covered.
            Contact us today.
          </p>
        </div>

        {/* form area  */}

        <div className="flex justify-center items-center w-[80%] mt-8 h-[450px] ">
          <div className="mt-1 flex flex-col justify-center w-[38%] h-[420px] ">
            <h1 className="text-white text-xl font-semibold">
              Want to reach out directly?
            </h1>
            <h1 className="text-base text-[#FDFDFD] ">
              Contact us for Tech Excellence.
            </h1>

            <div className="mt-[24px]">
              <div className="flex gap-[16px] items-center">
                <div className="flex justify-center items-center h-[48px] w-[48px] bg-[#EBF2F9] rounded-[13px]"></div>
                <div className="">
                  <h1 className="text-sm text-white font-normal">Email:</h1>
                  <h1 className="text-sm text-[#9EE3FC]  font-semibold ">
                    innov8fusion@gmail.com
                  </h1>
                </div>
              </div>
            </div>

            <div className="mt-[24px]">
              <div className="flex gap-[16px] items-center">
                <div className="flex justify-center items-center h-[48px] w-[48px] bg-[#EBF2F9] rounded-[13px]"></div>
                <div>
                  <h1 className="text-sm text-white font-normal">Phone::</h1>
                  <h1 className="text-sm text-[#9EE3FC]  font-semibold ">
                    0766171998 / 0777600791{" "}
                  </h1>
                </div>
              </div>
            </div>

            {/* <div className="mt-4">
              <div>
                <h1 className="text-lg font-extrabold bg-gradient-to-r  from-[#387fc4]  to-[#9ee3fc] bg-clip-text text-transparent">
                  Follow us on social media
                </h1>
              </div>
              <div className="flex space-x-[16px] mt-[32px]">
                <div className="bg-gradient-to-r  from-[#387fc4] to-[#9ee3fc] w-[28px] h-[28px] flex justify-center items-center rounded-md">
                  <img
                    src={Facebook}
                    className="h-[16px] w-auto"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="bg-gradient-to-r  from-[#387fc4] to-[#9ee3fc] w-[28px] h-[28px] flex justify-center items-center rounded-md">
                  <img
                    src={Twitter}
                    className="h-[16px] w-auto"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="bg-gradient-to-r  from-[#387fc4] to-[#9ee3fc] w-[28px] h-[28px] flex justify-center items-center rounded-md">
                  <img
                    src={Instagram}
                    className="h-[16px] w-auto"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="bg-gradient-to-r  from-[#387fc4] to-[#9ee3fc] w-[28px] h-[28px] flex justify-center items-center rounded-md">
                  <img
                    src={LinkedIn}
                    className="h-[16px] w-auto"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="bg-gradient-to-r  from-[#387fc4] to-[#9ee3fc] w-[28px] h-[28px] flex justify-center items-center rounded-md">
                  <img
                    src={YouTube}
                    className="h-[16px] w-auto"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div> */}
            <div className="mt-4">
              <div className="flex gap-[10px] justify-center items-center sm:mx-20">
                <div className="bg-[#4a91ce] p-2 rounded-md">
                  <FaFacebookF color="white" />
                </div>
                <div className="bg-[#4a91ce] p-2 rounded-md">
                  <FaXTwitter color="white" />
                </div>
                <div className="bg-[#4a91ce] p-2 rounded-md">
                  <IoLogoInstagram color="white" />
                </div>
                <div className="bg-[#4a91ce] p-2 rounded-md">
                  <FaLinkedinIn color="white" />
                </div>
              </div>
            </div>
          </div>
          {/* form  */}
          <div className="mt-1 flex flex-col w-[58%] h-[420px] bg-white rounded-3xl">
            {/* name  */}
            <div className="ml-6 flex justify-center items-center w-[90%] mt-[32px] space-x-[32px]">
              <div>
                <h1 className="text-slate-500 text-sm font-semibold">Name</h1>
                <input
                  className=" rounded-md w-[100%] h-[49px] py-2 px-3 mt-1 text-gray-700 leading-tight focus:outline-none shadow-md "
                  id="Name"
                  type="text"
                  placeholder="Enter your Name"
                />
              </div>

              <div>
                <h1 className="text-slate-500 text-sm font-semibold">Email</h1>
                <input
                  className=" rounded-md w-[100%] h-[49px] py-2 px-3 mt-1 text-gray-700 leading-tight focus:outline-none shadow-md "
                  id="Email"
                  type="email"
                  placeholder="Enter your Email"
                />
              </div>
            </div>
            {/* subject  */}

            <div className="ml-6 mt-4">
              <div>
                <h1 className="text-slate-500 text-sm font-semibold">Email</h1>
                <input
                  className=" rounded-md w-[95%] h-[49px] py-2 mt-1 px-3 text-gray-700 leading-tight focus:outline-none shadow-md "
                  id="Email"
                  type="email"
                  placeholder="Enter your Email"
                />
              </div>
            </div>
            <div className="ml-6 mt-4">
              <div>
                <h1 className="text-slate-500 text-sm font-semibold">
                  Message
                </h1>
                <input
                  className=" rounded-md w-[95%] mt-1 h-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none shadow-md "
                  id="Email"
                  type="email"
                  placeholder="Enter your Message"
                />
              </div>
            </div>

            <div className="w-32 h-10 ml-6 mt-4 bg-[#211F54] rounded-full flex justify-center items-center cursor-pointer">
              <h1 className="text-[14px] font-[600] text-white">
                Get in touch
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[68px] flex w-[85%] mb-[135px] rounded-lg h-[450px] bg-[#f5fcff] shadow-md items-center justify-center border-[#a4dbf0] border-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.179760974355!2d79.89390887570605!3d6.869051519049872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b4a4de12f63%3A0xccfc95c3b4c43b6b!2sINNOV8%20FUSION!5e0!3m2!1sen!2slk!4v1704772197276!5m2!1sen!2slk"
          width="1106"
          height="358"
          style={{ border: "0" }}
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMore;
