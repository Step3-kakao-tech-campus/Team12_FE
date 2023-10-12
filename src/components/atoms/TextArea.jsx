const TextArea = ({ placeholder, id, ...inputProps }) => {
  return (
    <textarea
      type="text"
      rows="3"
      id={id}
      className="w-[18rem] rounded-lg border-gray-300 border-2 px-4 py-2 text-sm block my-4"
      placeholder={placeholder}
      {...inputProps}
    />
  );
};

export default TextArea;
