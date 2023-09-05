import React from "react";
import FileInputComponent from "react-file-input-previews-base64";

const FileInput = () => {
  return (
    <div className="ml-10 w-64">
      <FileInputComponent
      parentStyle={{width:250, height: 180, position: "relative"}}
        labelText=""
        imageStyle={{boxShadow: "9px -45px 5px -200px rgba(0,0,0,0)", height: "100%", width: "100%"}}
        imageContainerStyle={{position: "absolute", width: "100%", height: "100%"}}
        buttonComponent={<button className="border-4 border-opacity-30 hover:opacity-90 rounded-lg border-dashed border-slate-600 absolute top-0 left-0 right-0 bottom-0 text-slate-600 font-semibold text-2xl">Upload your recipe</button>}
        // labelStyle={{ fontSize: 20, color: "#1e293b", fontWeight: 600, marginBottom: "20px" }}
        multiple={true}
        imagePreview={true}
        callbackFunction={(file_arr) => {
          console.log(file_arr);
        }}
        accept="image/*"
      />
    </div>
  );
};

export default FileInput;
