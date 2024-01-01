import React from "react";
import img1 from "../Images/template ex-1.jpg";
import img2 from "../Images/resume 2 pages copy 2.jpg";
import img3 from '../Images/skills.jpg'
import img4 from '../Images/Education and projects.jpg'
import img5 from '../Images/Experience timeline.jpg'

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import AnimatedArrow from "../components/AnimatedArrow";
import Scroll from "../components/scrollanimation";

const Box = ({ prop }) => {

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } },
    hidden: { opacity: 0, scale: 0.95 }
  };
  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="box">
      <>
        {prop}
      </>
    </motion.div>
  );
};


export default function HomeBody() {
  return (
    <div className="bg-black  text-[#A020F0] font-medium  ">
      {/* <Scroll props={<div className="h-32 bg-white w-32">hello</div>} /> */}
      <div className=" bg-black">

        <Box prop={<div className="flex flex-col items-center justify-center w-screen">
          <div className="flex">
          <div className=" flex flex-col justify-end items-start">
           
            <p className="text-[#A020F0] text-lg w-full md:w-96 p-4">
              1. Contact Information
              <br />{" "}
              <span className="font-normal text-sm md:text-lg text-white">
                This should include your full name, address, phone number, and
                email address.
              </span>
            </p>
            <div className="hidden md:block flex justify-start w-20">
              <AnimatedArrow props={<svg height="100px" viewBox="0 0 315 107" version="1.1" style={{ overflow: 'visible', display:'flex', justifyContent:'center', justifyItems:'end' }}>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchType="MSPage">
                  <path
                    id="Path-2"
                    className="path flex justify-start"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M 200, 200 C 300, 200 100,100 200,0"
                  />
                  {/* <polyline
                    id="arrow"
                    points="0,-9 18,0 0,9 5,0"
                    fill="white"
                  >
                    <animateMotion rotate="auto" dur="1s" repeatCount="1" fill="freeze">
                      <mpath xlinkHref="#Path-2" />
                    </animateMotion>
                  </polyline> */}
                </g>
              </svg>} />
              </div>
            <div className=" w-full  md:w-[35rem] p-5 relative">
              <img src={img1} className="object-scale-down w-full h-full" />
            </div>
          </div>

          <div className="hidden md:flex flex-col items-start justify-center ">
            <p className=" text-lg w-full lg:w-72 p-4">
              <br />{" "}
              <span className="font-normal text-sm md:text-lg text-white">
                {" "}
                A glimpse of your hobbies and interests to know you better.
              </span>
            </p>
            <AnimatedArrow props={<svg  height="80px" viewBox="0 0 315 107" version="1.1" style={{ overflow: 'visible' }}>
                <g id="Page-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchType="MSPage">
                  <path
                    id="Path-3"
                    className="path"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M -100, 180 C 100, 200 100, 100 100,0"
                  />
                  {/* <polyline
                    id="arrow"
                    points="0,-9 18,0 0,9 5,0"
                    fill="white"
                  > */}
                    {/* <animateMotion rotate="auto" dur="1s" repeatCount="1" fill="freeze">
                      <mpath xlinkHref="#Path-3" />
                    </animateMotion> */}
                  {/* </polyline> */}
                </g>
              </svg>} />
         
          </div>
          </div>
          <div className="flex md:hidden justify-center text-[#A020F0] font-normal text-sm px-4 md:text-lg text-white text-center  font-medium ">
              Summarizes your career goals, your future plans, what would you like to accomplish.
          </div>
        </div>} />

        {/* <p className="font-normal text-sm md:hidden text-left md:text-center text-white px-4">
          {" "}
          A glimpse of your hobbies and interests to know you better.
        </p> */}

        <Box prop={<div className="flex-col md:flex justify-center md:justify-start lg:ml-32 mt-20 md:mt-32 bg-black">
          <div className=" flex-col justify-center relative px-4">

            <div className="curvedLine hidden md:block absolute  md:mt-32 flex justify-end -rotate-[50deg]"></div>
            <p className="text-[#A020F0] h-52 md:h-96 md:pl-52 font-medium text-lg lg:w-[35rem] ">
              2. Summary About You
              <br />{" "}
              <span className="font-normal text-sm md:text-lg text-white">
                This is a brief statement at the beginning of your resume that summarizes you .
              </span>
            </p>
            <div className=" w-full  md:w-[35rem] p-5 -mt-28 lg:-ml-24">
              <img src={img2} className="object-scale-down w-full h-full " />
            </div>
          </div>
          <div className=" hidden md:block p-5 absolute md:ml-96 mt-[14.5rem] lg:mt-[16.5rem] ">
            <p className="text-[#A020F0] text-right  font-medium text-lg absolute left-32 lg:mt-8 -top-24 lg:-top-10">

              <br />{" "}
              <span className="font-normal text-sm md:text-lg text-white">
                {" "}
                Summarizes your career goals, your future plans, what would you like to accomplish.
              </span>
            </p>
            <div className="curvedLine rotate-[120deg] lg:rotate-[160deg]"></div>
          </div>
          <div className="flex md:hidden justify-center justify-center text-[#A020F0] text-center  font-medium ">
            <span className="font-normal text-sm px-4 md:text-lg text-white">
              {" "}
              Summarizes your career goals, your future plans, what would you like to accomplish.
            </span>
            
          </div>
         
        </div>} />


        <Box prop={<div className=" flexjustify-end w-full bg-black mt-20 md:mt-32  pb-16">
          <div className=" md:flex  justify-center md:justify-end  relative px-4">
            <div>

              <div className="curvedLine hidden md:block  md:flex -mr-28 mt-12 h-full -rotate-[30deg]"></div>
              <p className="text-[#A020F0] text-left lg:text-right md:absolute md:-mt-24 mb-4 md:mb-12  w-full md:w-[10rem] lg:-ml-60 font-medium text-lg lg:w-[20rem] ">
                3. Skills
                <br />{" "}
                <span className="font-normal text-center  md:text-right text-sm md:text-lg text-white">
                  tell them about your skills, what you are good at and what you like to work on ...
                </span>
              </p>
            </div>


            <div className=" w-full  md:w-[35rem] p-5 ">
              <img src={img3} className="object-scale-down w-full h-full " />
            </div>
          </div>
          <div className="flex md:hidden justify-center text-[#A020F0] text-center  font-medium ">
            <span className="font-normal text-sm px-4 md:text-lg text-white">
              {" "}
              Summarizes your career goals, your future plans, what would you like to accomplish.
            </span>
          </div>
        </div>} />

        <Box prop={<div className="flex flex-col justify-center md:justify-start lg:ml-32  md:mt-32 bg-black">
          <div className=" flex-col justify-center  relative px-4">

            <div className="curvedLine hidden md:block absolute  md:mt-32 flex justify-end -rotate-[50deg]"></div>
            <p className="text-[#A020F0] h-52 md:h-96 md:pl-52 font-medium text-lg lg:w-[35rem] ">
              4. Education and Projects
              <br />{" "}
              <span className="font-normal text-sm md:text-lg text-white">
                This should include your full name, address, phone number, and
                email address.
              </span>
            </p>
            <div className=" w-full  md:w-[35rem] p-5 -mt-28 lg:-ml-24">
              <img src={img4} className="object-scale-down w-full h-full " />
            </div>
          </div>
          <div className=" hidden md:block p-5 absolute md:ml-96 mt-[14.5rem] lg:mt-[16.5rem] ">
            <p className="text-[#A020F0] text-right  font-medium text-lg absolute left-32 lg:mt-12 -top-8 ">

              <br />{" "}
              <span className="font-normal text-sm md:text-lg text-white">
                {" "}
                Give the links to your three to five best projects.
              </span>
            </p>
            <div className="curvedLine rotate-[120deg] lg:rotate-[160deg]"></div>
          </div>
          <div className="flex md:hidden justify-center text-[#A020F0] text-center  font-medium ">
            <span className="font-normal text-sm px-4 md:text-lg text-white">
              {" "}
              Summarizes your career goals, your future plans, what would you like to accomplish.
            </span>
          </div>
        </div>} />


        {/* <p className="font-normal text-xs md:hidden text-left md:text-center text-white px-4">
          {" "}
          Currently 
        </p> */}
        <Box prop={<div className=" flexjustify-end w-full bg-black mt-20 md:mt-32 mb-32 pb-16">
          <div className=" md:flex  justify-center md:justify-end  relative px-4">
            <div>

              <div className="curvedLine hidden md:block  md:flex -mr-24 md:mt-8 h-full -rotate-[30deg]"></div>
              <p className="text-[#A020F0] text-left lg:text-right md:absolute md:-mt-24 md:mb-12 mb-4 w-full md:w-[14rem] lg:-ml-60 font-medium text-lg lg:w-[20rem] ">
                5. Your Experience Timeline
                <br />{" "}
                <span className="font-normal text-center  md:text-right text-sm md:text-lg text-white">
                  Add relevant experince and your learning curve to the job you are applying.
                </span>
              </p>
            </div>


            <div className=" w-full  md:w-[35rem] p-5 ">
              <img src={img5} className="object-scale-down w-full h-full " />
            </div>
          </div>
          <div className="flex md:hidden justify-center text-[#A020F0] text-center  font-medium ">
            <span className="font-normal text-sm px-4 md:text-lg text-white">
              {" "}
              Summarizes your career goals, your future plans, what would you like to accomplish.
            </span>
          </div>

        </div>} />


      </div>
    </div>
  );
}
