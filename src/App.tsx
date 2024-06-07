import React, { useEffect, useState } from "react";
import Companies from "./compannies.json";
import ListStartups from "./components/ListStartups";
import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridRowsProp,
} from "@mui/x-data-grid";

// const rows :GridRowsProp = [
//   {id:1, col1:"startUpId"}
// ]

// const columns: GridColDef[] = [
//   { field: "fldNQSQCtbyTp7Vo1", headerName: "STARTUP ID", width: 150 },
//   { field: "fldVszoQrD4uqIN7x", headerName: "STARTUP NAME", width: 150 },
// ];
function App() {
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);
  // const [rows, setRows] = useState();

  // useEffect(() => {
  //   console.log(
  //     "Company Columns",
  //     Companies.companies.map((company) => company.cellValuesByColumnId)
  //   );

  //   setRows((rows)=>[...rows,{id:}])
  // }, []);

  // const rows: GridRowsProp = Object.keys(
  //   Companies.companies[0].cellValuesByColumnId
  // ).map((key, index) => ({
  //   id: index + 1,
  //   key: key,
  //   value: JSON.stringify(Companies.companies[0].cellValuesByColumnId[key]),
  // }));

  const keys = Object.keys(Companies.companies[0].cellValuesByColumnId);

  const transformName = (key: string) => {
    switch (key) {
      case "fldNQSQCtbyTp7Vo1":
        return "STARTUP_ID";
      case "fldVszoQrD4uqIN7x":
        return "STARTUP NAME";

      case "fldGttbJ2kqS8IKav":
        return "Hall";

      case "fldue3JJD9aEEEAsH":
        return "DAYS OF PRESENCE";

      case "fldcZUAG4Ippah21c":
        return "DESCRIPTION";

      case "fldhcmQ3lzZL3Zad0":
        return "WEBSITE";

      case "fld9YkUY3oVOv4qxl":
        return "FACEBOOK";
      case "fldrRAdBTsFQ02Hj4":
        return "LINKEDIN";
      case "flduBynFcGQoagFzO":
        return "TWITTER";
      case "fldeyDU8YJMxN5pcA":
        return "LOGO";
      case "fld1RBjoqArS3J3LY":
        return "PRESENTATION VIDEO";
      case "fldUlVOv6BrmaLrrt":
        return "INSTAGRAM";
      case "fld5EHOcenu4ShIEG":
        return "YOUTUBE";
      case "fld3VJr8Gqy4fBrl4":
        return "BUSINESS SECTOR";
      case "flde1Gb5xTCFzi6Sy":
        return "INTERESTS";
      case "fldXQWXXWyXD2i9pH":
        return "ZIP CODE";
      case "fldnBXHuSNtOndFyc":
        return "COUNTRY";
      case "fldVUyUhwHundC7Jh":
        return "LOOKING FOR";
      case "fldPKjsQuSSHRUnTw":
        return "SU CONTACT FIRST NAME";
      case "fld9MOGu7MVaP609w":
        return "SU CONTACT LAST NAME";
      case "fldbk0moLT0n1NIYm":
        return "SU CONTACT MAIL";
      case "fldw6BMolhUf89qa2":
        return "SU CONTACT PHONE";
      case "fldo5bIr0FPbaWht8":
        return "SU_CEO CONTACT FIRST NAME";
      case "fldiM9YRqQdcAw3Yo":
        return "SU_CEO CONTACT LAST NAME";
      case "fldsolCfY1egg2bLu":
        return "SU_CEO CONTACT EMAIL";
      case "fldqCGOQmNq2qioMG":
        return "SU_CITY";
      case "fldKGttsYAcXh72vc":
        return "YEAR_OF_CREATION_OF_THE_COMPANY";
      case "fldINMm8j3xaPDh1t":
        return "SU TEAM MEMBER";
      case "fldqaCTZGrifxKDTl":
        return "SU_DEVELOPMENT_STAGE";
      case "fldDGtvqQLB6b5QlX":
        return "FUNDRAISING AMOUNT";
      case "flduPWFTpeecUOJIo":
        return "SU ROUNDS OF FUNDRAISING COMPLETED";
      case "fldCBS1LkUKLGtwhD":
        return "SU CURRENTLY RAISING FUNDS";
      case "fldGCF3DwcNrUbcjP":
        return "SU NEXT FUNDING ROUND (EUR)";
      case "fldnL5FhYjin0OSo1":
        return "SU EXPECTED NUMBER OF RECRUITMENTS FOR THE NEXT 12 MONTHS";
      case "fldko8ouHvjI5GPUN":
        return "SU BUSINESS TARGET";
      case "fldVfKeshf3YSvowa":
        return "SU BUSINESS MODEL";
      case "fldyaPQfPktaPXzzQ":
        return "SU BUSINESS TYPE";
      case "fldnOuOR5VsZKqrWR":
        return "SU TECHNOLOGIES EMPLOYED";
      case "fldU18zbpvdYy0Ws9":
        return " SU DIRECT COMPETITORS";
      case "fldjr8W6CqhLNGUPo":
        return "LAST MODIFICATION";
      case "flduuZxq4vmrAPjtK":
        return "PITCH DECK";
      default:
        return "Hi";
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  const rowsMap = Companies.companies.map((company, i) => {
    return {
      id: i,
      ...company.cellValuesByColumnId,
    };
  });

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };
  const filteredRows = rowsMap.filter((row) =>
    row.fldVszoQrD4uqIN7x.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns: GridColDef[] = keys.map((key) => ({
    field: key,
    headerName: transformName(key),
    width: 200,
    valueFormatter: (params: any) => {
      if (params === undefined || params.value === null) {
        return "";
      }
      return typeof params.value === "object"
        ? JSON.stringify(params.value)
        : params.value;
    },
  }));

  useEffect(() => {
    console.log("rowSelectionModel", rowSelectionModel);
  }, [rowSelectionModel]);

  console.log("filteredRows", filteredRows);
  return (
    <div className="h-screen m-4 p-4 bg-gray-50">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="border rounded px-4 py-2 h-10"
        style={{
          marginBottom: "16px",
        }}
      />
      {/* <ListStartups /> */}
      <DataGrid
        checkboxSelection
        columns={columns}
        rows={filteredRows}
        onRowSelectionModelChange={(newRowSelectionModel) =>
          setRowSelectionModel(newRowSelectionModel)
        }
        rowSelectionModel={rowSelectionModel}
      />
    </div>
  );
}

export default App;
