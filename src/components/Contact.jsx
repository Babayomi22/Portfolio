import React, { useState } from "react";
import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoTwitter,
  BiLogoYoutube,
  BiTaskX,
  BiX,
  BiXCircle,
} from "react-icons/bi";

function Contact() {
  return (
    <div
      id="contact"
      className=" px-[10%]   bg-slate-900 min-h-[85vh] flex flex-col pt-28  "
    >
      <div className=" w-[80%]  flex flex-col  items-start ">
        <h1 className=" text-blue-500  font-bold text-xl pt-5 md:p-0">My</h1>
        <h1 className=" text-white text-4xl md:text-5xl font-semibold  ">
          Contact
        </h1>
      </div>
      <div className="flex flex-col md:items-start gap-5 mt-10">
        <textarea
          name=""
          id=""
          cols="50"
          rows="10"
          className=" md:w-[80%] lg:w-[70%] outline-none bg-slate-600 rounded-md text-md"
        ></textarea>
        <button className=" bg-blue-600 p-2 px-5 rounded-lg hover:bg-blue-500 transition-all duration-300 text-white">
          Send Mail
        </button>
        <div>
          <div className=" flex gap-5 justify-center items-center">
            <BiLogoGithub className=" text-4xl text-white/50 cursor-pointer hover:text-white transition-all duration-300" />
            <BiLogoTwitter className=" text-4xl text-blue-600 cursor-pointer hover:text-blue-500 transition-all duration-300" />
            <BiLogoYoutube className=" text-4xl text-red-600  cursor-pointer hover:text-red-500 transition-all duration-300" />
            <BiLogoInstagram className=" text-4xl text-red-400 cursor-pointer hover:text-white transition-all duration-300" />
            <BiLogoTiktok className=" text-4xl text-white/50 cursor-pointer hover:text-white transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
