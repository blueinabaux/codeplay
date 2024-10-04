import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import gsap from "gsap";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const toPage = (link) => {
    navigate(link);
  };

  const resLinks = [
    {
      id: 1,
      name: "HOME",
      link: "/",
    },
    {
      id: 2,
      name: "PROBLEM STATEMENTS",
      link: "/problems",
    },

    {
      id: 3,
      name: "GUIDELINES",
      link: "/guidelines",
    },
    {
      id: 4,
      name: "COMMITTEES",
      link: "/committees",
    },

    {
      id: 5,
      name: "REGISTER",
      link: "/register",
    },
    {
      id: 6,
      name: "ARCHIVES",
      link: "/archives",
    },
  ];

  const [menuClick, setMenuClick] = useState(false);

  return (
    <>
      <div className="navbar z-[7000] h-[10vh] w-full bg--500 flex justify-between items-center fixed top-0">
        <div className="nav-left text-[1.5vw] text-white h-full w-[10%] max-sm:w-[40%] bg--700 flex justify-center items-center ">
            <h1>CP</h1>
        </div>
        <div className="nav-right h-full w-[20%] max-sm:w-[30%] bg--700 flex justify-evenly items-center ">

          <button
            onClick={() => toPage("/register")}
            className="menuBtn z-[7000] px-[2vw] max-sm:px-[5vw] max-sm:py-[1.5vh] bg-white py-[1.5vh] rounded-full text-[#181818] text-[0.9vw]">
              <h1 className="max-sm:text-[1.5vh]">REGISTER</h1>
          </button>
        </div>
      </div>
      <div className="resNav z-[5000] fixed top-0 right-[-50%] h-[100%] w-[50%] max-sm:w-[100%] max-sm:right-[-100%] bg-[#212121d2] backdrop-blur-[30px] flex flex-col justify-center items-center ">
        <div className="res-links h-[80%] w-full px-[3vw] bg--500 flex flex-col justify-center items-center">
          {resLinks.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  toPage(item.link);
                  setMenuClick(!menuClick);
                }}
                className="linkBox overflow-hidden max-sm:h-[10vh] h-[20vh] w-full bg--700 flex justify-start items-end border-b-[#585858] border-solid border-b-[1px] text-white"
              >
                <h2 className="text-[2.2vw] max-sm:text-[5vw]">{item.name}</h2>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
