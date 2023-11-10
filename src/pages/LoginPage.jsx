import React from 'react';
import LoginNav from '@components/atoms/nav/LoginNav';
import loginIcon from '@/assets/images/kakao_login_medium_wide.png';
import { INFO } from '@/constant/auth';

const LoginPage = () => {
  const KAKAO_AUTH_URI = `${process.env.REACT_APP_API_URL}/oauth2/authorization/kakao`;

  const loginHandler = () => {
    window.location.href = KAKAO_AUTH_URI;
  };

  return (
    <div className="page--layout">
      <LoginNav />
      <section className="grid mt-[80px]">
        <div className="text-blue text-xl ml-[30px]">
          <p className="animate-fade-in-move-right">{INFO.FIRST_MSG}</p>
          <p className="opacity-0 animate-fade-in-move-right-delayed">{INFO.SECOND_MSG}</p>
        </div>
        <img
          onClick={loginHandler}
          src={loginIcon}
          alt={INFO.KAKAO}
          className="justify-self-center mt-[500px] cursor-pointer"
        />
      </section>
    </div>
  );
};

export default LoginPage;
