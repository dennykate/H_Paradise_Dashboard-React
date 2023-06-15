import React from "react";
import {
  CreateAccount,
  Table,
  Login,
  Guard,
  IsAlreadyLogin,
} from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className=" container">
      <Routes>
        <Route
          path="/"
          element={
            <Guard>
              <Table />
            </Guard>
          }
        />
        <Route
          path="/create"
          element={
            <Guard>
              <CreateAccount />
            </Guard>
          }
        />
        <Route
          path="/login"
          element={
            <IsAlreadyLogin>
              <Login />
            </IsAlreadyLogin>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
