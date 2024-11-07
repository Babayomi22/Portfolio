import React from "react";
import bgImage from "/bgImage3.jpeg";
import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import image4 from "/4.png";
import image5 from "/1.png";
import { ul } from "framer-motion/client";

const projectData = [
  {
    image: image1,
    title: "Quiz App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi tempora voluptatibus fugit numquam eaque aut ipsum id velit officia, ipsam nobis consectetur quo veritatis quam. Eligendi blanditiis aliquam magni.",
    technology: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    image: image2,
    title: "Todo App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi tempora voluptatibus fugit numquam eaque aut ipsum id velit officia, ipsam nobis consectetur quo veritatis quam. Eligendi blanditiis aliquam magni.",
    technology: ["TypeScript", "NextJs", "Tailwind", "PostGre"],
  },
  {
    image: image3,
    title: "Social Media App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi tempora voluptatibus fugit numquam eaque aut ipsum id velit officia, ipsam nobis consectetur quo veritatis quam. Eligendi blanditiis aliquam magni.",
    technology: ["TypeScript", "React", "Tailwind", "Superbase"],
  },

  {
    image: image4,
    title: "Resturant Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi tempora voluptatibus fugit numquam eaque aut ipsum id velit officia, ipsam nobis consectetur quo veritatis quam. Eligendi blanditiis aliquam magni.",
    technology: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    image: image5,
    title: "Admin Dashboard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi tempora voluptatibus fugit numquam eaque aut ipsum id velit officia, ipsam nobis consectetur quo veritatis quam. Eligendi blanditiis aliquam magni.",
    technology: ["React", "Tailwind", "Dorker", "MySQL"],
  },
];
function Projects() {
  return (
    <div
      id="projects"
      className=" m-0  min-h-screen gap-5 bg-slate-800 pt-32 flex flex-col  "
    >
      <div className=" w-full flex  flex-col md:justify-around pl-[10%]">
        <div className=" w-[80%]  flex flex-col items-start ">
          <h1 className=" text-blue-500  font-bold text-xl pt-5 md:p-0">My</h1>
          <h1 className=" text-white text-4xl md:text-5xl font-semibold  ">
            Projects
          </h1>
        </div>
        <div className=" flex flex-wrap gap-5   pr-5">
          {projectData.map((project, index) => (
            <ul
              key={index}
              className=" border border-blue-500 border-opacity-20 w-[100%] lg:w-[30%] md:w-[45%] md:mt mt-16 flex flex-col  "
            >
              <li className=" p-5 text-white/80 font-semibold text-2xl">
                {project.title}
              </li>
              <li>
                <img
                  src={project.image}
                  alt=""
                  className=" opacity-80 hover:opacity-100 cursor-pointer "
                />
              </li>
              <li className=" p-5 text-white/70 text-sm">
                {project.description}
              </li>
              <li className="flex gap-5 p-5">
                <button className=" bg-orange-500 p-2 text-white transition-all duration-300 px-5 hover:bg-orange-400">
                  Check Demo
                </button>

                <button className=" bg-purple-500 p-2 text-white px-5 hover:bg-purple-400 transition-all duration-300">
                  Get Code
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
