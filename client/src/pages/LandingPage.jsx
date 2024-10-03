import gsap from "gsap";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cpVid from '../assets/codeplay.gif';

import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);


const LandingPage = () => {

  return (
    <>
      <div className="landing-main relative min-h-auto w-[100vw] bg-transparent flex flex-col justify-center items-center">
        <img className="absolute h-[100vh] w-[100vw] top-0 opacity-[80%]" src={cpVid} alt="" />
        
        <div className="land-content bg--600 h-[100vh] w-full relative bg--600 flex flex-col justify-center items-center">
            <h1 className="text-[8vw] text-white max-sm:text-[12vh]">CODEPLAY</h1>
            <p  className="text-[1vw] text-white max-sm:text-[8vh]" >A fun to learn and play gamified coding platform</p>

            <div className="btn-get h-[10vh] w-full absolute bottom-[16%] bg--600 flex justify-center items-center ">
                <button className="get-button py-[0.3vh] px-[0.3vw] w-[13vw]  bg-yellow-500 flex justify-between items-center rounded-full ">
                    <p className="font-bold text-[1vw] w-[80%] bg--700 h-full">GET STARTED</p>
                    <div className="circle p-[0.8vw] rounded-full bg-yellow-600 flex justify-center items-center ">
                    <FaArrowRight size={20} />
                    </div>
                </button>
            </div>
        </div>

      </div>
    </>
  );
};

export default LandingPage;
