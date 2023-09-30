import { BsArrowDown } from 'react-icons/bs';
import { MdOutlineLocationOn, MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import comma from '../../utils/comma';
import date from '../../utils/date';

// to : 해당 공고글의 링크로 이동
const Card = ({
  orderLocation = '주문 매장',
  pickupLocation = '픽업 위치',
  pickupTip = 3000,
  deadline = 1696992289,
  to = './',
}) => {
  return (
    <Link to={to}>
      <div className="w-80 h-20 rounded-xl border-[#8B8B8B] border my-4 py-2 px-3 flex justify-between">
        <div>
          <div className="flex items-center">
            <MdOutlineLocationOn className="mr-1" style={{ color: '#0075FF' }} />
            {orderLocation}
          </div>
          <BsArrowDown style={{ color: '8B8B8B' }} />
          <div className="flex items-center">
            <MdLocationPin className="mr-1" style={{ color: '#0075FF' }} />
            {pickupLocation}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid justify-items-end text-[1rem] font-bold">{`${comma(pickupTip)}원`}</div>
          <div className="grid justify-items-end text-[0.5rem] text-[#FF0000]">{date(deadline)}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;