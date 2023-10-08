const Input = ({ type, value, name, placeholder, width = '15rem', ...inputProps }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      {...inputProps}
      className={`w-[${width}] rounded-xl border-gray-300 border-2 px-5 py-2 text-sm block my-4`}
    />
  );
};

export default Input;
