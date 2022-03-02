import Account from ".";
import FormInput from "../../components/form";
import { Link } from "react-router-dom";
function Login() {
  const inputClass =
    "rounded h-14 w-80 outline-none px-4 focus:border-blue-500 border-2 shadow-inner";
  return (
    <Account>
      <p className="text-gray-700 font-semibold text-3xl text-center">Login</p>
      <div className="my-8 space-y-3">
        <div className="space-y-1">
          <FormInput
            styleClass={inputClass}
            hint={"Email"}
            type={"text"}
            focus={true}
          />
          <FormInput
            styleClass={inputClass}
            min={8}
            hint={"Password"}
            type={"password"}
          />
        </div>
        <Link
          to="recovery"
          className="text-sm font-semibold text-blue-500 hover:text-blue-600 block"
        >
          Forgot Email or Password?
        </Link>
      </div>
      <div className="flex items-center justify-between ">
        <Link
          to="/login/register"
          className="text-sm font-semibold text-blue-500 hover:text-blue-600"
        >
          Create account
        </Link>
        <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded  hover:bg-blue-600">
          Next
        </button>
      </div>
    </Account>
  );
}
export default Login;
