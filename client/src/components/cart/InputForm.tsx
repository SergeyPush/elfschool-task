interface InputFormInterface {
  name: string;
  placeholder: string;
  label: string;
}

function InputForm({ name, placeholder, label }: InputFormInterface) {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={name} className="text-lg mb-1">
        {label}
      </label>
      <input
        required
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        className="border rounded-md px-3 py-1 text-lg"
      />
    </div>
  );
}

export default InputForm;
