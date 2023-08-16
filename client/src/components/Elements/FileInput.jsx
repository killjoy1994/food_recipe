import React from "react";
import Filebase64 from "react-file-base64";

const FileInput = ({ field, form: { touched, erros }, ...props }) => {
  const handleFilebase64Done = ({base64}) => {
    if (field.onChange) {
      // Extract the base64-encoded content from the files array

      // Call the Formik field's onChange method to update the value
      field.onChange({
        target: {
          name: field.name,
          value: base64,
        },
      });
    }
  };
  return (
    <div className="ml-10 w-64 mt-0">
      <h2 className="mb-1 text-slate-700 font-medium">Select your recipe image</h2>
      {/* <input {...field} {...props} type="file" /> */}
      <Filebase64 onDone={handleFilebase64Done} />
    </div>
  );
};

export default FileInput;
