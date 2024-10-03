import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/");
  };
  return (
    <>
      <div className="not-found-main h-[100vh] w-[100vw] bg--800 flex justify-center items-center">
        <div className="404-box h-[70%] w-[80%] bg--800 flex flex-col justify-center items-center">
          <div className="text-404 h-auto w-full flex flex-col justify-center items-center">
            <h1 className="text-[8vw] text-white max-sm:text-[12vh]">404</h1>
            <p className="text-[1.5vw] text-white max-sm:text-[2.5vh]">
              PAGE NOT FOUND
            </p>
          </div>
          <button
            onClick={goTo}
            className={`btn px-[2.2vw] mt-[5vh] py-[1.4vh] bg-transparent border-[1px] border-solid border-white text-white md:text-[0.9vw] rounded-full max-sm:px-[8vw] max-sm:text-[1.6vh]`}
          >
            GO BACK
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
