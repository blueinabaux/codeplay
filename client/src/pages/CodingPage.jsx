import { FaArrowRight } from "react-icons/fa";

const CodingPage = () => {
  return (
    <>
      <div className=" bg--500 min-h-auto h-[100vh] w-[100vw] flex justify-center items-end px-[2vw] py-[1vh]">
        <div className="left-box w-[46%] h-[90vh] bg--300 flex flex-col justify-between items-center">
          <div className="top w-[95%] h-[56%] bg-pink-300 flex justify-center items-end"></div>
          <div className="bottom w-[95%] h-[42%] bg-[#243346] flex justify-center items-end"></div>
        </div>
        <div className="right-box w-[54%] h-[90vh] bg-[#243346] flex flex-col gap-3 justify-center items-center">
            <div className="head h-[2%]">

            </div>
          <div className="top w-[95%] h-[60%] bg-[#2D4058] flex justify-center items-end"></div>
          <div className="bottom w-[95%] h-[30%] bg-[#2D4058] flex justify-end items-end">
            <div className="flex justify-end items-end p-5 gap-5">
              <button className="get-button py-[0.3vh] px-[0.1vw] w-[8vw] bg-blue-500 flex justify-between items-center rounded-full ">
                <p className="font-bold text-[1vw] w-[80%] bg--700 h-full">
                  RUN
                </p>
                <div className="circle p-[0.5vw] rounded-full bg-blue-600 flex justify-center items-center ">
                  <FaArrowRight size={15} />
                </div>
              </button>
              <button className="get-button py-[0.3vh] px-[0.1vw] w-[8vw]  bg-yellow-500 flex justify-between items-center rounded-full ">
                <p className="font-bold text-[1vw] w-[80%] bg--700 h-full">
                  SUBMIT
                </p>
                <div className="circle p-[0.5vw] rounded-full bg-yellow-600 flex justify-center items-center ">
                  <FaArrowRight size={15} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodingPage;
