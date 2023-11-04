const TextArea = ({ register, placeholder, id, name, ...inputProps }) => {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      name={name}
      type="text"
      rows="3"
      {...inputProps}
      {...register}
      className="w-[18rem] rounded-lg border-gray-300 border-2 px-4 py-2 text-sm block my-4"
    />
  );
};

export default TextArea;
