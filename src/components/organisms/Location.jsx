import { BsArrowDown } from 'react-icons/bs';
import { MdLocationPin, MdOutlineLocationOn } from 'react-icons/md';

const Location = () => {
  return (
    <div className="p-4">
      <div className="flex items-center">
        <MdOutlineLocationOn className="mr-1" size="30" style={{ color: 'white' }} />
        <span className="text-white">스타벅스 전대후문점</span>
      </div>
      <BsArrowDown className="ml-2 my-1" style={{ color: 'white' }} />
      <div className="flex items-center">
        <MdLocationPin className="mr-1" size="30" style={{ color: 'white' }} />
        <span className="text-white">공과대학 7호관</span>
      </div>
    </div>
  );
};

export default Location;
