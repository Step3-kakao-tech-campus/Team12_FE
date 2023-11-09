import React from 'react';
import LoginNav from '@components/atoms/nav/LoginNav';
import loginIcon from '@/assets/images/kakao_login_medium_wide.png';

const LoginPage = () => {
  // 카카오 연동 로그인 페이지로 이동
  const KAKAO_AUTH_URI = `${process.env.REACT_APP_API_URL}/oauth2/authorization/kakao`;

  const loginHandler = () => {
    window.location.href = KAKAO_AUTH_URI;
  };

  return (
    <div className="page--layout">
      <LoginNav />
      <section className="grid mt-[80px]">
        <div className="text-blue text-xl ml-[30px]">
          <p className="animate-fade-in-move-right">이제 편리하게</p>
          <p className="opacity-0 animate-fade-in-move-right-delayed">음료를 픽업하고, 픽업받아요!</p>
        </div>
        <img
          onClick={loginHandler}
          src={loginIcon}
          alt="카카오 로그인"
          className="justify-self-center mt-[500px] cursor-pointer"
        />
      </section>
    </div>
  );
};

export default LoginPage;
