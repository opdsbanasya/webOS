import React from "react";
import { Route, Routes } from "react-router";
import Desktop from "./Components/Desktop";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Browser from "./Components/Browser";
import Bash from "./Components/Bash";
import Editor from "./Components/Editor";
import FileExplorer from "./Components/FileExplorer";

const App = () => {
  return (
    <Routes>
      <Route index element={<Desktop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/bash" element={<Bash />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/file-explorer" element={<FileExplorer />} />
    </Routes>
  );
};

export default App;
/**
 * - /
- login
- register
- terminal
- file-explorer
- text-editor
- browser
 */
