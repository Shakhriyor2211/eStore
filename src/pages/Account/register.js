import { useState } from "react";
import { Link } from "react-router-dom";
import Account from ".";
import FormInput from "../../components/form";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const inputClass =
    "rounded h-12 outline-none px-4 focus:border-blue-500 border-2 shadow-inner w-full";
  return (
    <Account>
      <p className="text-gray-700 font-semibold text-3xl text-center">
        Sign Up
      </p>
      <div className="my-8 gap-y-2 gap-x-3 grid grid-cols-2">
        <FormInput
          styleClass={inputClass}
          hint={"Name"}
          type={"text"}
          focus={true}
        />
        <FormInput styleClass={inputClass} hint={"Surname"} type={"text"} />
        <div className="col-span-2 ">
          <FormInput styleClass={inputClass} hint={"Email"} type={"email"} />
        </div>

        <FormInput
          styleClass={inputClass}
          min={8}
          hint={"Password"}
          type={showPassword ? "text" : "password"}
        />
        <FormInput
          styleClass={inputClass}
          min={8}
          hint={"Confirm Password"}
          type={showPassword ? "text" : "password"}
        />
        <div className="flex col-span-2 gap-x-8">
          <div className="flex items-center gap-2">
            <label htmlFor="check">Show password</label>
            <input
              id="check"
              className="-order-1 w-4 h-4 outline-blue-500 "
              type={"checkBox"}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          </div>

          <div className="flex-1 relative">
            <FormInput styleClass={`pl-12 ${inputClass}`} type={"number"} />
            <span className="absolute left-2 inset-y-5">+998</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <Link
          to="/login"
          className="p-2 rounded font-semibold text-blue-500 hover:text-blue-600 outline-none focus:bg-blue-200"
        >
          Login
        </Link>
        <button className="outline-none bg-blue-500 text-white font-semibold px-6 py-2 rounded  hover:bg-blue-600 focus:bg-blue-600">
          Next
        </button>
      </div>
    </Account>
  );
}

export default Register;
