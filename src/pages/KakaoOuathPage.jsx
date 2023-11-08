import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { loginSuccessMessage } from '../utils/alert';
import getLoginInfo from '../apis/login';
import Loader from '../components/atoms/Loader';
import routes from '../constant/routes';

// 리다이렉팅 처리 화면
const KakaoOuathPage = () => {
  const navigate = useNavigate();
  const { data } = useQuery(['getLoginInfo'], getLoginInfo);

  // 로그인완료시 로그인 성공 메시지를 띄우고 유저 정보를 받아옴(토큰 등)
  // 그리고 로그인 완료 처리를 하고, 액세스 토큰을 계속 담아 보냄
  // 로그인 완료되면 홈 페이지로 이동시킴
  useEffect(() => {
    // 임시로 로그인 처리 할려고 넣어논거라 나중에 지울거
    localStorage.setItem('accessToken', 'accessToken');
    localStorage.setItem('userAuth', 'student');
    Swal.fire(loginSuccessMessage).then(navigate(routes.home));
    if (data) {
      const userInfo = data.response;
      localStorage.setItem('accessToken', userInfo.AccessToken);
      localStorage.setItem('userAuth', userInfo.userAuth);
      localStorage.setItem('username', userInfo.username);
      Swal.fire(loginSuccessMessage).then(navigate(routes.home));
    }
  }, []);

  return (
    <div className="page--layout">
      <div className="text-blue text-xl ml-[30px] mt-[200px]">
        로그인 중이에요! <br />
        잠시만 기다려주세요😊
      </div>
      <Loader />
    </div>
  );
};

export default KakaoOuathPage;
