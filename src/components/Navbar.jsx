import React, { useState } from "react";
import { BiMenu, BiTaskX, BiX } from "react-icons/bi";
import { motion, useAnimationControls } from "framer-motion";
function Navbar() {
  const [showNav, setSHowNav] = useState(false);
  const controls = useAnimationControls();
  function handleClick() {
    controls.start("slide");
    setSHowNav((prev) => !prev);
  }
  return (
    <nav className="  bg-black/70  md:px-20 z-10 top-0 sticky text-white flex p-6 justify-between items-center">
      <a
        href="#home"
        className=" text-blue-500 z-10  font-semibold text-4xl md:text-5xl "
      >
        <span className=" text-white">Babs</span>Tech
      </a>

      <ul className=" z-10  gap-5 hidden md:flex">
        <li>
          <a
            className=" hover:text-white/80 transition-all duration-300"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className=" hover:text-white/80 transition-all duration-300"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className=" hover:text-white/80 transition-all duration-300"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className=" border hover:bg-white/5 transition-all duration-200 text-blue-500 p-2 px-5 border-blue-500"
          >
            Contact Me
          </a>
        </li>
      </ul>
      <div className=" md:hidden">
        {showNav ? (
          <BiX
            className=" md:hidden text-5xl cursor-pointer z-30"
            onClick={() => setSHowNav(!showNav)}
          />
        ) : (
          <BiMenu
            className=" md:hidden text-5xl cursor-pointer z-10"
            onClick={handleClick}
          />
        )}
      </div>
      {showNav && (
        <motion.div
          variants={{
            initial: {
              x: 1,
            },
            slide: {
              x: 299,
            },
          }}
          initial="initial"
          animate={controls}
          className={` transition-all duration-500 ease-in -z-10 md:hidden absolute  top-0  h-screen  w-64 backdrop-blur-md bg-black/40 right-0`}
        >
          <nav className=" text-white mt-24">
            <ul className=" flex flex-col gap-5 justify-center items-center">
              <li>
                <a
                  className=" hover:text-white/80 transition-all duration-300"
                  onClick={() => setSHowNav((prev) => !prev)}
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className=" hover:text-white/80 transition-all duration-300"
                  onClick={() => setSHowNav((prev) => !prev)}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className=" hover:text-white/80 transition-all duration-300"
                  onClick={() => setSHowNav((prev) => !prev)}
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => setSHowNav((prev) => !prev)}
                  href="#contact"
                  className=" border text-blue-500 p-2 px-5 border-blue-500"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
