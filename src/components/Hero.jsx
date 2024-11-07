import React from "react";
import bgImage from "/bgImage1.jpeg";
import bgImage2 from "/bgImage.png";
import heroImage from "/image4.png";

function Hero() {
  return (
    <div
      id="home"
      className=" bg-black/80 min-h-screen m-0 p-0   justify-center pt-24 flex"
    >
      <div className=" pb-16 flex flex-col items-center max-h-screen m-0">
        <div>
          <img
            src={heroImage}
            alt=""
            className=" h-[200px] w-[200px] rounded-full absolute"
          />
          <img
            src={bgImage2}
            alt=""
            className=" h-[200px] w-[200px] rounded-full -z-10"
          />
        </div>
        <h1 className=" pt-5 text-6xl font-bold text-blue-500">John Doe</h1>
        <h2 className=" text-white/80 font-semibold">
          A <span className=" text-blue-500">Frontend</span> Web Developer
        </h2>
        <a
          href="contact"
          className=" mt-3 border    border-opacity-55 text-blue-500 p-2 px-7 border-blue-500"
        >
          Hire Me!
        </a>
      </div>
      <img
        src={bgImage}
        alt=""
        className=" -z-20 w-full h-[115vh] screen top-0 absolute "
      />
    </div>
  );
}

export default Hero;
