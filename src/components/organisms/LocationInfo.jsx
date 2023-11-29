import { BsArrowDown } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import Location from '@components/molecules/Location';

const LocationInfo = ({ shopName, destination }) => {
  return (
    <div className="pt-4">
      <Location icon={MdOutlineLocationOn}>{shopName}</Location>
      <BsArrowDown className="ml-[6px] my-1" style={{ color: 'white' }} />
      <Location icon={IoLocationSharp}>{destination}</Location>
    </div>
  );
};

export default LocationInfo;
