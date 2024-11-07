import React from "react";
import image from "/image4.png";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";

function About() {
  return (
    <div
      id="about"
      className=" m-0  min-h-screen gap-5 bg-slate-900 pt-32 flex md:flex-row flex-col p-10 px-[10%]  "
    >
      <div className=" md:w-[50%] lg:w-[50%] flex flex-col   items-center md:items-start">
        <h1 className=" text-blue-500 font-bold text-xl pt-5 md:p-0">
          Discover
        </h1>
        <h1 className=" text-white text-4xl md:text-5xl font-semibold ">
          About Me
        </h1>
        <p className=" text-white/70 text-center md:text-left text-sm ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum odit
          fugit laboriosam nulla, tempora doloremque quis saepe autem ea
          adipisci repellendus illo? At asperiores facilis eveniet qui, suscipit
          corporis quae? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Earum odit fugit laboriosam nulla, tempora doloremque quis saepe
          autem ea adipisci repellendus illo?.
        </p>
        <div className=" w-full">
          <h1 className=" text-center md:text-left text-white/70 text-2xl font-semibold pt-8 lg:pt-16">
            Tech
          </h1>
          <div className="  flex flex-col gap-5 ">
            <div className=" flex gap-5">
              <BiLogoReact className=" cursor-pointer  text-orange-500 transition-all duration-300 hover:-translate-y-5 text-[90px] md:text-[50px]" />
              <BiLogoJavascript className=" cursor-pointer  text-orange-500 transition-all duration-300 hover:-translate-y-5 text-[90px] md:text-[50px]" />
              <BiLogoTypescript className=" cursor-pointer  text-sky-500 transition-all duration-300 hover:-translate-y-5 text-[90px] md:text-[50px]" />
              <BiLogoTailwindCss className=" cursor-pointer  text-sky-400 transition-all duration-300 hover:-translate-y-5 text-[90px] md:text-[50px]" />
            </div>
            <a
              className=" text-center w-[150px] bg-orange-400 px-5 p-2 text-sm"
              href="#home"
            >
              Download CVs
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-start order-first md:order-last ">
        <img
          src={image}
          alt=""
          className=" w-[400px] h-[400px] md:w-[350px] md:h-[500px]  lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-white/20 to-black"
        />
      </div>
    </div>
  );
}

export default About;
