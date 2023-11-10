import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { MdHome } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import routes from '@/constant/routes';

const LoginNav = () => {
  const navigate = useNavigate();
  const goPreviousPage = () => {
    navigate(-1); // 바로 이전 페이지로 이동
  };

  const ICON_SIZE = '25';

  return (
    <div>
      <div className="flex justify-between p-[25px] ">
        <BsArrowLeft className="cursor-pointer" onClick={goPreviousPage} size={ICON_SIZE} />
        <Link to={routes.home}>
          <MdHome size={ICON_SIZE} />
        </Link>
      </div>
    </div>
  );
};

export default LoginNav;
