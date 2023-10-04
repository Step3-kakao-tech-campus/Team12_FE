import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';

const LoginNav = () => {
  return (
    <div>
      <div className="flex justify-between p-[25px] ">
        <Link to="/">
          <BsArrowLeft size={25} />
        </Link>
        <Link to="/">
          <MdHome size={25} />
        </Link>
      </div>
    </div>
  );
};

export default LoginNav;
