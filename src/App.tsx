import React, { useEffect, useState } from "react";
import Companies from "./compannies.json";
import ListStartups from "./components/ListStartups";
import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridRowsProp,
} from "@mui/x-data-grid";
import { Cards } from "./components/Cards";


function App() {


  return (
    <div className="p-4">

      <div className="flex justify-center p-12">
        <Cards />

      </div>
    </div>
  );
}

export default App;
