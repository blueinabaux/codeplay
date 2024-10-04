import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LangSwitch from "../../components/Lang/LangSwitch";
import { CODE_TEMPLATES } from "../../../constants";
import Output from "./Output";

const INITIAL_VALUE = "// some comment";

function EditorWindow({
  language,
  setLanguage,
  editorRef,
  output,
  isLoading,
  error,
  activeTab,
  setActiveTab,
}) {
  const [value, setValue] = useState(INITIAL_VALUE);
  const [code, setCode] = useState(CODE_TEMPLATES.python);

  const handleMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setCode(CODE_TEMPLATES[newLanguage]);
  };

  return (
    <div className="h-[100%] w-full bg--200">
      <div className="top-nav w-full h-[12%] bg--600 flex justify-between items-center ">
        <LangSwitch language={language} onSelect={handleLanguageChange} />
        <div className="windowOptions h-full w-auto flex justify-center gap-2 items-center">
          <button
            onClick={() => {
              setActiveTab(1);
            }}
            className="get-button py-[1vh] px-[2vw] text-white  bg-blue-500   flex justify-between items-center rounded-full font-bold text-[1vw] "
          >
            CONSOLE
          </button>
          <button
            onClick={() => {
              setActiveTab(2);
            }}
            className="get-button py-[1vh] px-[2vw] text-white  bg-green-500   flex justify-between items-center rounded-full font-bold text-[1vw] "
          >
            OUTPUT
          </button>
        </div>
      </div>

      {activeTab === 1 ? (
        <Editor
          theme="vs-dark"
          height="88%"
          width="100%"
          language={language}
          defaultValue={INITIAL_VALUE}
          onMount={handleMount}
          value={code}
          onChange={handleChange}
        />
      ) : (
        <Output output={output} isLoading={isLoading} error={error} />
      )}
    </div>
  );
}

export default EditorWindow;
