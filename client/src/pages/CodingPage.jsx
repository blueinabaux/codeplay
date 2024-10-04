import { FaArrowRight } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
import EditorWindow from "./Windows/EditorWindow";
import { useState, useRef } from "react";
import { executeCode } from "../api/api.js";

import game from "../assets/game.png";

const CodingPage = () => {
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(1); // Manage active tab state

  const editorRef = useRef(null); // Define editorRef here

  const runCode = async () => {
    if (!editorRef.current) return;

    const sourceCode = editorRef.current.getValue();
    setIsLoading(true);
    setError(null);
    try {
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
      setActiveTab(2); // Switch to OUTPUT tab
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className=" bg--500 min-h-auto h-[100vh] w-[100vw] flex justify-center items-end px-[2vw] py-[1vh]">
        <div className="left-box w-[46%] h-[90vh] bg--300 flex flex-col justify-between items-center">
          <div className="top w-[95%] h-[56%] bg--300 flex justify-center items-end">
            <img src={game} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="bottom w-[95%] h-[42%] bg-[#243346] flex flex-col justify-start items-start text-white p-[1vw] gap-4 overflow-y-scroll">
            <div className="ques-scroll min-h-auto w-full flex flex-col justify-start items-start">
            <p>
              <strong>Question:</strong> In a Pokémon battle, your Pokémon has 4
              different moves, each with a specified attack power and a limited
              number of uses. The opposing Pokémon has a total of{" "}
              <strong>200 HP</strong>. You need to determine the minimum number
              of moves required to faint the enemy Pokémon, ensuring you do not
              exceed the number of uses for any of your attacks.
            </p>
            <p>
              <strong>Details of the moves are as follows:</strong>
              <ul>
                <li>
                  <strong>Move 1:</strong> Attack Power = 40, Available Uses = 5
                </li>
                <li>
                  <strong>Move 2:</strong> Attack Power = 30, Available Uses = 4
                </li>
                <li>
                  <strong>Move 3:</strong> Attack Power = 50, Available Uses = 3
                </li>
                <li>
                  <strong>Move 4:</strong> Attack Power = 20, Available Uses = 6
                </li>
              </ul>
            </p>
            <p>
              What is the minimum number of moves required to bring the
              opponent's HP to 0 or less?
            </p>
            </div>
          </div>
        </div>

        <div className="right-box w-[54%] h-[90vh] bg-[#243346] flex flex-col gap-3 justify-center items-center">
          <div className="top w-[98%] h-[65%] bg-[#2D4058] flex flex-col justify-center items-end">
            <Box h="100%" w="100%" bg="#" color="gray.500">
              <EditorWindow
                language={language}
                setLanguage={setLanguage}
                output={output}
                isLoading={isLoading}
                error={error}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                editorRef={editorRef}
              />
            </Box>
          </div>

          <div className="bottom w-[98%] h-[30%] bg-[#2D4058] flex justify-end items-end">
            <div className="flex justify-end items-end p-5 gap-5">
              <button
                onClick={runCode}
                className="run-button py-[0.3vh] px-[0.1vw] w-[8vw] bg-blue-500 flex justify-between items-center rounded-full "
              >
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
