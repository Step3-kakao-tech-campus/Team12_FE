const Input = ({ type, value, name, placeholder, width = 'w-[18rem]', ...inputProps }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      {...inputProps}
      className={`${width} rounded-lg border-gray-300 border-2 px-5 py-2 text-sm block my-2`}
    />
  );
};

export default Input;
