const Input = ({ type, value, name, placeholder, ...inputProps }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      {...inputProps}
      className="w-[20rem] rounded-xl border-gray-300 border-2 px-5 py-2 text-sm block"
    />
  );
};

export default Input;
