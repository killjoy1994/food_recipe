import React, { useState } from "react";
import Filebase from "react-file-base64";

const initialState = {
  title: "",
  description: "",
  tags: "",
  selectedFile: "",
};

const RecipeForm = () => {
  const [formValues, setFormValues] = useState(initialState);

  const submithandler = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <>
      <h2 className="text-center text-slate-700 font-semibold text-2xl">Create Your Recipe</h2>
      <form action="" className="bg-white w-full mt-3 shadow-md mx-auto p-3 flex flex-col gap-y-3" onSubmit={submithandler}>
        <input
          placeholder="Title..."
          className="px-3 py-1 w-full border-2 border-slate-300 outline-none rounded-sm"
          type="text"
          value={formValues.title}
          onChange={(e) => setFormValues({ ...formValues, title: e.target.value })}
        />
        <textarea
          placeholder="Description..."
          className="rounded-sm px-3 py-1 w-full border-2 border-slate-300 outline-none resize-none h-[100px]"
          type="text"
          value={formValues.description}
          onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
        />
        <div>
          <input
            placeholder="Tags..."
            className="rounded-sm px-3 py-1 w-full border-2 border-slate-300 outline-none"
            type="text"
            value={formValues.tags}
            onChange={(e) => setFormValues({ ...formValues, tags: e.target.value })}
          />
        </div>
        <div>
          <Filebase type="file" multiple={false} onDone={(file) => setFormValues({ ...formValues, selectedFile: file.base64 })} />
        </div>
        <button type="submit" className="bg-blue-600 p-1 rounded-sm text-slate-50 font-semibold">
          Submit
        </button>
      </form>
    </>
  );
};

export default RecipeForm;
