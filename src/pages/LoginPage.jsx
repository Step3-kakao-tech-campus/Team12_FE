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
    <div className="page--layout flex flex-col justify-between">
      <LoginNav />
      <section className="grid">
        <div className="text-blue text-xl ml-[30px]">
          <p className="animate-fade-in-move-right">{INFO.FIRST_MSG}</p>
          <p className="opacity-0 animate-fade-in-move-right-delayed">{INFO.SECOND_MSG}</p>
        </div>
        <div className="flex justify-center mb-14">
          <img
            onClick={loginHandler}
            src={loginIcon}
            alt={INFO.KAKAO}
            className="justify-self-center mt-[500px] cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
