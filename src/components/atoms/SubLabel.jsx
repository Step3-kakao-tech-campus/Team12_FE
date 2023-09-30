const SubLabel = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="text-sm text-gray-500 block">
      {children}
    </label>
  );
};

export default SubLabel;
