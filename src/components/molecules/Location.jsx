const Location = ({ icon, children }) => {
  const LocationIcon = icon;

  return (
    <div className="flex items-center">
      <LocationIcon className="mr-1" size="30" style={{ color: 'white' }} />
      <span className="text-white text-lg">{children}</span>
    </div>
  );
};

export default Location;
