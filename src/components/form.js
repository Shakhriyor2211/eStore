function FormInput(props) {
  return (
    <div className="space-y-2">
      <label className="text-lg md:text-xl" htmlFor={props.id}>
        {props.title}
      </label>
      <input
        autoFocus={props.focus}
        onChange={(e) => {
          e.preventDefault();
          props.valueState(e.target.value);
        }}
        className={props.styleClass}
        value={props.value}
        type={props.type}
        id={props.title}
        placeholder={props.hint}
        minLength={props.min}
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
        className={props.styleClass}
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
