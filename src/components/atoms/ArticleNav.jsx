import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { BiSolidUser } from 'react-icons/bi';
import { MdHome } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const ArticleNav = ({ iconColor = '#000', bgColor = 'bg-[#FFF]' }) => {
  const navigate = useNavigate();
  const goPreviousPage = () => {
    navigate(-1); // 바로 이전 페이지로 이동
  };

  return (
    <div>
      <div className={`flex justify-between p-[25px] ${bgColor}`}>
        <BsArrowLeft className="cursor-pointer" onClick={goPreviousPage} size={25} color={iconColor} />
        <div className="flex">
          <Link className="mr-4" to="/">
            <MdHome size={25} color={iconColor} />
          </Link>
          <Link to="/mypage">
            <BiSolidUser size={25} color={iconColor} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleNav;
