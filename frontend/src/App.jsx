import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Desktop from "./Components/Desktop";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Browser from "./Components/Browser";
import Bash from "./Components/Bash";
import Editor from "./Components/Editor";
import FileExplorer from "./Components/FileExplorer";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  const user = localStorage.getItem("user");

  return (
    <Routes>
      <Route index element={<Desktop />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/signup"
        element={user ? <Navigate to="/" replace /> : <Signup />}
      />
      <Route path="/browser" element={<Browser />} />
      <Route path="/bash" element={<Bash />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/file-explorer" element={<FileExplorer />} />
    </Routes>
  );
};

export default App;
