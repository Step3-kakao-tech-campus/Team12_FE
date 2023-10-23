import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import MyPageTemplate from '../components/templates/MyPageTemplate';
import { loginNeedMessage } from '../utils/alert';
import routes from '../constant/routes';

const MyPage = () => {
  const navigate = useNavigate();

  // 마이페이지 접속시 로그인 상태가 아니라면 로그인 페이지로 이동
  useEffect(() => {
    if (localStorage.getItem('accessToken') == null) {
      Swal.fire(loginNeedMessage);
      navigate(routes.login);
    }
  }, [navigate]);

  return <MyPageTemplate />;
};

export default MyPage;
