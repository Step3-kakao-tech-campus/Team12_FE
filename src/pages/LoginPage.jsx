import React from 'react';
import loginIcon from '../assets/images/kakao_login_medium_wide.png';
import LoginNav from '../components/atoms/LoginNav';

// 버튼을 눌러 개인정보 동의 후 계속하기를 하면 REDIRECT_URI로 리다이렉트 된다.
// 이후 주소에 카카오에서 보낸 인가 코드가 있는데, 이를 파싱해서 백엔드로 전송
const LoginPage = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'https://k0e9f032b0b45a.user-app.krampoline.com/login/kakao';
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = KAKAO_AUTH_URI;
  };

  return (
    <div className="page--layout">
      <LoginNav />
      <section className="grid mt-[80px]">
        <div className="text-blue text-lg ml-[30px]">
          이제 편리하게
          <br />
          음료를 픽업하고, 픽업받아요!
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
