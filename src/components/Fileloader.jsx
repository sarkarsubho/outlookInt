import React, { useState } from "react";

export const Fileloader = () => {
  const oneDriveApplicationId = "8aaed5cf-1e4f-42f0-9583-1a7385669201";
  let [src,setSrc]=useState("");

  function launchOneDrivePicker() {
    return new Promise((resolve, reject) => {
      var odOptions = {
        clientId: oneDriveApplicationId,
        action: "download",
        multiSelect: true,
        openInNewWindow: true,
        advanced: {
          //filter: "folder,.png" // Show only folders and png files
          //filter: "folder,photo" // Show only folders and photos
        },
        success: function (files) {
          resolve(files);
        },
        cancel: function () {
          resolve(null);
        },
        error: function (e) {
          reject(e);
        },
      };

      window.OneDrive.open(odOptions);
    });
  }

  function handleClick(e) {
     e.preventDefault();
    launchOneDrivePicker().then((result) => {
      if (result) {
        for (const file of result.value) {
          const name = file.name;
          const url = file["@microsoft.graph.downloadUrl"];
          console.log({ name: name, url: url });

          fetch(url)
            .then((response) => {
              return response.blob();
            })
            .then((blob) => {
              const url = URL.createObjectURL(blob);
              setSrc(url);
              // (<HTMLImageElement>document.getElementById("preview")).src = url;
            });
        }
      }
    }).catch(reason => {
      console.error(reason);
  });
  }
  return (
    <div>
      <div id="preview">
        <img src={src} alt="previewimage" />

      </div>
      <button id="OpenOneDrive" type="button" onClick={(e) => handleClick(e)}>
        Open from OneDrive
      </button>
    </div>
  );
};
