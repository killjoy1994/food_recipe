import { ErrorMessage, Field, FieldArray, Form } from "formik";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import FileBase64 from "react-file-base64";
import FileInput from "../../Elements/FileInput";

const CreateForm = (props) => {
  const { values } = props;
  // console.log(values);

  return (
    <Form className="mt-8 mb-20 flex flex-row-reverse justify-between">
      <Field component={FileInput} name="selectedFile" />
      <div className=" w-full">
        <div className="flex flex-col gap-y-2">
          <div className="flex w-full flex-col">
            <label className="text-slate-700 font-semibold" htmlFor="title">
              Title
            </label>
            <Field
              className="border border-solid pl-2 py-1 text-slate-700 border-slate-800 border-opacity-40 rounded-sm outline-none mt-1"
              name="title"
              type="text"
              placeholder="Title for your recipe..."
            />
            <ErrorMessage name="title" />
          </div>

          <div className="flex w-full flex-col">
            <label className="text-slate-700 font-semibold" htmlFor="description">
              Description
            </label>
            <Field
              className="border border-solid border-opacity-40 border-slate-800 rounded-sm outline-none mt-1 pl-2 py-1 text-slate-700"
              name="description"
              as="textarea"
              placeholder="Descripe your recipe..."
            />
            <ErrorMessage name="description" />
          </div>

          {/* <Field name="selectedFile" type="file"/> */}
          {/* <FileBase64 onDone={(files) => console.log(files)} /> */}

          {/* ================= INGREDIENTS ===================== */}
          <div>
            <label className="text-slate-700 font-semibold" htmlFor="ingredients">
              Ingredients
            </label>
            <FieldArray
              name="ingredients"
              render={(arrayHelpers) => (
                <div className="flex flex-col gap-y-1">
                  {values.ingredients.map((ingredient, index) => {
                    return (
                      <div className="flex gap-x-3" key={index}>
                        <Field
                          className="border border-solid border-opacity-40 border-slate-800 rounded-sm outline-none mt-1 pl-2 py-1 text-slate-700 w-full"
                          type="text"
                          name={`ingredients.${index}.name`}
                          placeholder={ingredient.placeholder}
                        />
                        {values.ingredients.length > 1 && (
                          <button
                            className=""
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            <LiaTimesSolid color="gray" />
                          </button>
                        )}
                        {/* <button
                              type="button"
                              onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                            >
                              +
                            </button> */}
                      </div>
                    );
                  })}

                  <button
                    className="mt-2 py-2 text-[13px] text-slate-50 font-medium bg-slate-400 rounded-lg w-[120px]"
                    type="button"
                    onClick={() => arrayHelpers.push({ placeholder: "ex: 1 spoon of salt", name: "" })}
                  >
                    {/* show this when user has removed all ingredients from the list */}
                    Add Ingredients
                  </button>
                </div>
              )}
            />
          </div>
          {/* ================= STEPS ===================== */}
          <div className="flex flex-col gap-y-1 my-2">
            <label className="text-slate-700 font-semibold" htmlFor="ingredients">
              Directions
            </label>
            <FieldArray
              name="steps"
              render={(arrayHelpers) => (
                <div className="flex flex-col gap-y-1">
                  {values.steps.map((ingredient, index) => {
                    return (
                      <div className="flex flex-col gap-x-3" key={index}>
                        <h4 className="text-[14px] font-medium text-slate-700">Step {index + 1}</h4>
                        <div className="flex gap-x-2">
                          <Field
                            as="textarea"
                            className="border border-solid border-opacity-40 border-slate-800 rounded-sm outline-none mt-1 pl-2 py-1 text-slate-700 w-full"
                            type="text"
                            name={`steps.${index}.name`}
                            placeholder={ingredient.placeholder}
                          />
                          {values.steps.length > 1 && (
                            <button
                              className=""
                              type="button"
                              onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                              <LiaTimesSolid color="gray" />
                            </button>
                          )}
                        </div>
                        {/* <button
                              type="button"
                              onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                            >
                              +
                            </button> */}
                      </div>
                    );
                  })}

                  <button
                    className="mt-2 py-2 text-[13px] text-slate-50 font-medium bg-slate-400 rounded-lg w-[120px]"
                    type="button"
                    onClick={() => arrayHelpers.push({ placeholder: "ex: 1 spoon of salt", name: "" })}
                  >
                    {/* show this when user has removed all ingredients from the list */}
                    Add Steps
                  </button>
                </div>
              )}
            />
          </div>
          {/* <label htmlFor="email">Email Address</label>
               <Field name="email" type="email" />
               <ErrorMessage name="email" /> */}
        </div>
        <button className="mt-3 w-full py-2 bg-orange-500 font-semibold text-lg rounded-md text-slate-50" type="submit">
          Create Recipe
        </button>
      </div>
    </Form>
  );
};

export default CreateForm;
