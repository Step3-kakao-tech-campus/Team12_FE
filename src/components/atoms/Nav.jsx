/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidUser } from 'react-icons/bi';
import logo from '../../assets/images/logo.png';

const Nav = () => {
  return (
    <div>
      <nav className="absolute h-16 p-5 top-0 left-0 right-0 flex justify-between items-center">
        <Link to={'/'}>
          <div>
            <img src={logo} className="float-left" size={35} />
            <div className="float-left p-2">픽업셔틀</div>
          </div>
        </Link>
        <Link to={'/mypage'}>
          <div>
            <BiSolidUser size={30} />
          </div>
        </Link>
      </nav>
      <div className="absolute h-12 p-5 top-16 left-0 right-0 flex items-center">
        <Link to={'/post-write-intro'}>
          <div className="p-1">공고작성</div>
        </Link>
        <Link to={'/post'}>
          <div className="pl-3">공고현황</div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
