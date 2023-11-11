import { BsArrowDown } from 'react-icons/bs';
import { MdOutlineLocationOn, MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import comma from '@/utils/comma';
import { getDeadlineDate } from '@/utils/date';
import { MATCHING_STATE } from '@/constant/article';

// to : 해당 공고글의 링크로 이동
const Card = ({
  orderLocation = '주문 매장',
  pickupLocation = '픽업 위치',
  pickupTip = 3000,
  deadline = 1696992289,
  match = false,
  to = './',
}) => {
  const arrowColor = {
    color: match ? '#555555' : '#8B8B8B',
  };

  return (
    <div
      className={`w-80 h-20 rounded-xl border-[#8B8B8B] border m-auto my-[15px] 
      ${match ? 'bg-[#000000]/50' : ''}`}
    >
      <Link to={to} className={`relative flex justify-between py-2 px-3 ${match ? 'cursor-default' : ''}`}>
        <div>
          <div className="flex items-center">
            <MdOutlineLocationOn className="mr-1" style={{ color: '#0075FF' }} />
            {orderLocation}
          </div>
          <BsArrowDown style={arrowColor} />
          <div className="flex items-center">
            <MdLocationPin className="mr-1" style={{ color: '#0075FF' }} />
            {pickupLocation}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid justify-items-end text-[1rem] font-bold">{`${comma(pickupTip)}원`}</div>
          <div
            className={`grid justify-items-end text-[0.5rem] 
            ${match ? 'text-[#000]' : 'text-[#FF0000]'} `}
          >
            {getDeadlineDate(deadline)}
          </div>
        </div>
        {match ? (
          <div className="text-[#fff] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-medium">
            {MATCHING_STATE.COMPLETE_MATCHING}
          </div>
        ) : (
          ''
        )}
      </Link>
    </div>
  );
};

export default Card;
