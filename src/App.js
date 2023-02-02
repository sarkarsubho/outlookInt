import React, { useState } from "react";
import "./App.css";
import { Fileloader } from "./components/Fileloader";
import { BoxCntent } from "./components/BoxCntent";

function App() {
  const [file, setFile] = useState(null);
   
  // console.log(window)
  const handleFilePicker = () => {
    window.OneDrive.open({
      clientId: "8aaed5cf-1e4f-42f0-9583-1a7385669201",
      action: "pick",
      multiSelect: false,
      success: (files) => {
        setFile(files[0]);
      },
      cancel: () => {
        console.log("File picker was cancelled.");
      },
      error: (error) => {
        console.error(error);
      },
    });
  };
  return (
    <div className="App">
      {/* <div>
          <button onClick={handleFilePicker}>Pick a file</button>
      {file && <p>{file.name}</p>}
      <br></br>
      <br></br>
      <br></br>
      <Fileloader></Fileloader>
      </div> */}
      <BoxCntent></BoxCntent>
    
    </div>
  );
}

export default App;
