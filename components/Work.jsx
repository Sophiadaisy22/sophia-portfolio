import React from "react";
import Image from "next/image";
import { assets, workData } from "../asset/assets";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full px-[12%] py-10
    scroll-mt-20 bg-gray-200"
    >
      <h4 className="text-center mb-2 text-lg">My Portfolio</h4>
      <h2 className="text-center text-5xl">My Latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        Welcome to my portfolio. Here, you’ll find projects that reflect my
        skills in modern frontend development and creative problem-solving.
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-center bg-cover rounded-lg
                relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute
            bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
            justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9
              aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] 
              group-hover:bg-line-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700
      border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
      my-20 hover:bg-[var(--color-lightHover)] duration-500 ">
        Show more <Image src={assets.right_arrow_bold} alt="right arrow" className="w-4 "/>
      </a>
    </div>
  );
};

export default Work;
