import React from "react";
import { PiBowlFood } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

const AuthLoader = ({ message }) => {
    return (
        <div className="fixed inset-0  bg-slate-900 bg-opacity-80 flex justify-center items-center z-50">
            <div className="flex flex-col items-center justify-center animate-bounce">
                <PiBowlFood size={50} color="orange" />
                {/* <h1 className={twMerge("text-4xl text-slate-50 font-bold")}>masak.</h1> */}
                <p className="text-xl text-slate-50 font-semibold">{message}</p>
            </div>
        </div>
    );
};

export default AuthLoader;
