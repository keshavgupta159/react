import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { getRecords, getColumn } from "./data/data";
import DataGrid from "./components/dataGrid";

function App() {
  return (
    <div className="container-fluid">
      <DataGrid tableData={getRecords()} tableHeads={getColumn()} />
    </div>
  );
}

export default App;
