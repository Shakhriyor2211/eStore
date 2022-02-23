function FormInput(props) {
  return (
    <div className="space-y-2">
      <label className="text-lg md:text-xl" htmlFor={props.id}>
        {props.title}
      </label>
      <input
        onChange={(e) => {
          e.preventDefault();
          props.valueState(e.target.value);
        }}
        className="border-2 border-gray-200 px-2 h-10 sm:h-12 w-full outline-none focus:border-indigo-400 rounded"
        value={props.value}
        type={props.type}
        id={props.title}
        placeholder={props.hint}
        required
      />
    </div>
  );
}

export function FormSelect(props) {
  return (
    <div className="space-y-2">
      <label className="text-lg md:text-xl block" htmlFor={props.id}>
        {props.title}
      </label>
      <select
        className="border-2 border-gray-200 px-2 h-10 sm:h-12 w-24 outline-none focus:border-indigo-400 rounded text-sm"
        onChange={(e) => {
          e.preventDefault();
          props.valueState(e.target.value);
        }}
      >
        {props.value.map((values, i) => {
          return (
            <option key={i} value={values}>
              {values}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormInput;
