import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ingredientsImg from "../../assets/ingredients.jpg";
import BrandLogo from "../Elements/BrandLogo";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { HiArrowNarrowLeft } from "react-icons/hi";
// import { ImCross } from "react-icons/im";
import CreateForm from "./CreateForm/CreateForm";
import { useDispatch } from "react-redux";
import { createRecipe } from "../../redux/actions/recipes";
import { notify } from "../../helpers/notify";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen relative flex">
      <div className="overflow-hidden h-screen w-[30%] fixed">
        <img src={ingredientsImg} className="h-full w-full object-cover" alt="" />
      </div>
      <div className="w-full min-h-screen ml-[30%]">
        <div className="mt-6 ml-20 max-w-[800px]">
          <div className="flex gap-y-5 flex-col-reverse">
            <h2 className="font-bold text-slate-700 text-2xl">Create Recipe</h2>
            <BrandLogo logoSize={30} textSize="text-md" />
            {/* <div
              className="flex gap-x-2 items-center justify-center rounded-full cursor-pointer hover:bg-slate-500 hover:bg-opacity-20 w-[120px]"
              onClick={cancelHandler}
            >
              <HiArrowNarrowLeft size={18} color="gray" />
              <p className="font-semibold text-medium text-slate-700">Cancel</p>
            </div> */}
          </div>
          <Formik
            initialValues={{
              title: "",
              description: "",
              preparationTime: {
                count: 0,
                measure: "mins",
              },
              cookTime: {
                count: 0,
                measure: "mins",
              },
              ingredients: [{ name: "", placeholder: "ex: 500gr 0f chicken" }],
              steps: [{ name: "", placeholder: "ex: Pour salt into bowl" }],
              selectedFile: "",
            }}
            // validationSchema={Yup.object({
            //   firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
            //   lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
            //   email: Yup.string().email("Invalid email address").required("Required"),
            // })}
            onSubmit={(values) => {
              console.log("VALUES: ", values);
              dispatch(createRecipe(values, navigate, notify));
              
            }}
            component={CreateForm}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
