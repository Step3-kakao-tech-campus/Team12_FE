import { BsArrowDown } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import Location from '@components/molecules/Location';

const LocationInfo = ({ shopName, destination }) => {
  return (
    <div className="pt-4">
      <Location icon={MdOutlineLocationOn}>{shopName}</Location>
      <BsArrowDown className="ml-2 my-1" style={{ color: 'white' }} />
      <Location icon={MdOutlineLocationOn}>{destination}</Location>
    </div>
  );
};

export default LocationInfo;
