import React from "react";
import { CreateAccount, Navbar, Table } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className=" container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/create" element={<CreateAccount />} />
      </Routes>
    </div>
  );
};

export default App;
