const Input = ({ register, required, type, value, name, placeholder, width = 'w-[18rem]', ...inputProps }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      {...register(name, { required })}
      {...inputProps}
      className={`${width} rounded-lg border-gray-300 border-2 px-4 py-2 text-sm block my-2`}
    />
  );
};

export default Input;
