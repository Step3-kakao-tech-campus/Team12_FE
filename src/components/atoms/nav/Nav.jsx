import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidUser } from 'react-icons/bi';
import logo from '@/assets/images/logo.png';
import routes from '@/constant/routes';
import { HOME } from '@/constant/home';

const Nav = () => {
  const STYLE = 'absolute p-5 left-0 right-0 flex items-center';

  return (
    <div>
      <nav className={`h-16 top-0 justify-between ${STYLE}`}>
        <Link to={routes.home}>
          <div>
            <img src={logo} className="float-left" alt="logo" size={35} />
            <div className="float-left p-2">{HOME.PICKUP_SHUTTLE}</div>
          </div>
        </Link>
        <Link to={routes.mypage}>
          <div>
            <BiSolidUser size={30} />
          </div>
        </Link>
      </nav>
      <div className={`h-12 top-16 ${STYLE}`}>
        <Link to={routes.articleWriteIntro}>
          <div className="p-1">{HOME.WRITE_ARTICLE}</div>
        </Link>
        <Link to={routes.article}>
          <div className="pl-3">{HOME.ARTICLE}</div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
