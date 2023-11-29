import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import { MdHome } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import routes from '@/constant/routes';

const OtherNav = ({ iconColor = 'black', bgColor = 'bg-white' }) => {
  const navigate = useNavigate();
  const goPreviousPage = () => {
    navigate(-1); // 바로 이전 페이지로 이동
  };

  const ICON_SIZE = '25';

  return (
    <div>
      <div className={`flex justify-between p-[25px] ${bgColor}`}>
        <BsArrowLeft className="cursor-pointer" onClick={goPreviousPage} size={ICON_SIZE} color={iconColor} />
        <div className="flex">
          <Link className="mr-4" to={routes.home}>
            <MdHome size={ICON_SIZE} color={iconColor} />
          </Link>
          <Link to={routes.mypage}>
            <BiSolidUser size={ICON_SIZE} color={iconColor} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherNav;
