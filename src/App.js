import React, { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
   
  // console.log(window)
  const handleFilePicker = () => {
    window.OneDrive.open({
      clientId: "2c560ec8-749c-4ce4-9642-32aa42180faf",
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
    <div>
      <button onClick={handleFilePicker}>Pick a file</button>
      {file && <p>{file.name}</p>}
    </div>
  );
}

export default App;
