const SubLabel = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="text-sm text-gray-500">
      {children}
    </label>
  );
};

export default SubLabel;
