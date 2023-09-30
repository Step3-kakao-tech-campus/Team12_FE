const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-lg">
      {children}
    </label>
  );
};

export default Label;
