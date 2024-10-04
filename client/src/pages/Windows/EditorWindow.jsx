import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LangSwitch from "../../components/Lang/LangSwitch";
import { Box } from "@chakra-ui/react";

const INITIAL_VALUE = "// some comment";

function EditorWindow() {
  const editorRef = useRef(null);
  const [value, setValue] = useState(INITIAL_VALUE);
  const [language, setLanguage] = useState("javascript");

  const handleMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="h-[100%]">
      <LangSwitch language={language} onSelect={handleLanguageChange} />
      <Editor
        height="90%"
        width="100%"
        language={language} 
        defaultValue={INITIAL_VALUE}
        onMount={handleMount}
        value={value}
        onChange={handleChange}
        ref={editorRef}
      />
    </div>
  );
}

export default EditorWindow;
