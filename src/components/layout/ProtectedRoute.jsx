import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import routes from '@/constant/routes';
import { loginNeedMessage, authInvalidMessage } from '@/utils/alert';

const ProtectedRoute = ({ children, requiredAuth }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthVaild, setIsAuthValid] = useState(false);

  // eslint-disable-next-line consistent-return
  const checkUserToken = () => {
    const userToken = localStorage.getItem('accessToken');
    if (!userToken) {
      setIsLoggedIn(false);
      Swal.fire(loginNeedMessage);
      navigate(routes.login);
    }
    setIsLoggedIn(true);
  };

  const checkUserAuth = () => {
    // requiredAuth(ADMIN, STUDENT, USER)가 존재할 경우, 현재 유저 권한에 대한 유효성을 검증
    // 사실상 USER 권한의 경우는 로그인 토큰 자체만으로도 검증이 가능하기 때문에, 별도로 requiredAuth prop을 넘겨줄 필요 없음
    // [ADMIN, STUDENT] 이렇게 넘겨줄 수도 있는 경우를 감안하여 다음과 같이 처리
    // requiredAuth 중 하나라도 만족하면, 페이지 접근 권한 유효함
    const userAuth = localStorage.getItem('userAuth');
    if (!requiredAuth || requiredAuth.includes(userAuth)) {
      setIsAuthValid(true);
    } else {
      setIsAuthValid(false);
      Swal.fire(authInvalidMessage);
      navigate(routes.mypage);
    }
  };

  useEffect(() => {
    checkUserToken();
    checkUserAuth();
  }, [isLoggedIn, isAuthVaild]);

  // eslint-disable-next-line react/jsx-no-useless-fragment, react/destructuring-assignment
  return <>{isLoggedIn && isAuthVaild ? children : null}</>;
};
export default ProtectedRoute;
