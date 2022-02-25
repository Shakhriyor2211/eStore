import FormInput from "../../components/form";
import Account from ".";

function Recovery() {
  const inputClass =
    "rounded h-14 w-80 outline-none px-4 focus:border-blue-500 border-2 truncate shadow-inner";
  return (
    <Account>
      <div className="mt-8">
        <p className="text-gray-700 font-semibold text-xl text-center w-80">
          Enter a phone number or backup email address
        </p>
        <div className="my-10">
          <FormInput
            styleClass={inputClass}
            hint={"Enter a phone number or backup email address"}
            type={"text"}
            focus={true}
          />
        </div>

        <div className="flex justify-end">
          <button className=" right-0 bg-blue-500 text-white font-semibold px-6 py-2 rounded  hover:bg-blue-600">
            Next
          </button>
        </div>
      </div>
    </Account>
  );
}
export default Recovery;
