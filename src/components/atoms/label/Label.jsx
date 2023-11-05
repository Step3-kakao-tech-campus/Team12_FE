const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block">
      {children}
    </label>
  );
};

export default Label;
