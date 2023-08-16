import React, { useEffect, useState } from "react";
import Filebase64 from "react-file-base64";
import BgUpload from "../../assets/bgupload.jpg";
import { AiOutlineCamera } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";
import { BsTrash } from "react-icons/bs";

const FileInput = ({ field, form: { touched, erros }, ...props }) => {
  const [background, setBackground] = useState(null);
  const [imageValue, setImageValue] = useState("");

  useEffect(() => {
    if (field.onChange) {
      // Extract the base64-encoded content from the files array
      // Call the Formik field's onChange method to update the value
      field.onChange({
        target: {
          name: field.name,
          value: imageValue,
        },
      });
    }
  }, [imageValue]);

  const handleFilebase64Done = ({ base64 }) => {
    setBackground(base64);
    setImageValue(base64);
  };
  return (
    <div className="ml-10 w-64 mt-8">
      {/* <h2 className="mb-1 text-slate-700 font-medium">Select your recipe image</h2> */}
      {/* <input {...field} {...props} type="file" /> */}
      <div
        className="relative h-[200px]"
        style={{ backgroundImage: `url(${background ? background : BgUpload})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px" }}
      >
        {!background && (
          <span className="text-white px-2 py-1 bg-opacity-20 rounded-[2px] font-bold absolute left-3 bg-black top-[70px]">Add recipe image</span>
        )}
        <div className={!background ? "file-input" : "file-input2"}>
          <Filebase64 onDone={handleFilebase64Done} />
        </div>
        {/* Edit Delete */}
        {background && (
          <div className="bg-black bg-opacity-20 w-[90px] h-[35px] absolute bottom-0 right-0 rounded-full mb-2 mr-2 flex justify-center items-center">
            <div className="flex items-center">
              <div className="flex gap-x-1 items-center">
                <AiOutlineCamera color="white" size={15} />
                <p className="text-slate-50 text-[14px]">Edit</p>
              </div>
              <RxDividerVertical color="white" size={15} />
              <button
                onClick={() => {
                  setBackground(null);
                  setImageValue("");
                }}
              >
                <BsTrash color="white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileInput;
