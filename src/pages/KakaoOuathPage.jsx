import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loader from '@components/atoms/Loader';
// import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import routes from '@/constant/routes';
import { loginSuccessMessage } from '@/utils/alert';
import { WAITING_LOGIN } from '@/constant/auth';
import getLoginInfo from '@/apis/login';

// 리다이렉팅 처리 화면
const KakaoOuathPage = () => {
  const navigate = useNavigate();

  const { data } = useQuery(['/login/callback'], getLoginInfo);

  // 회원가입 유무에 따라 2가지로 분기됨
  // 회원가입 O - 토큰을 저장하고 바로 로그인 처리하고 홈페이지 이동
  // 회원가입 X - 토큰을 저장하고 계좌정보 입력 페이지 이동 - 계좌정보를 입력하고 나면 바로 로그인 처리하고 홈페이지 이동

  useEffect(() => {
    if (data) {
      console.log('data', data);
      const status = data?.response.status;
      if (status === 200) {
        const userInfo = data.data.response;
        const { userAuth, AccessToken, nickName } = userInfo;
        localStorage.setItem('accessToken', AccessToken);
        localStorage.setItem('userAuth', userAuth);
        localStorage.setItem('nickName', nickName);
        if (userAuth === 'GUEST') {
          navigate(routes.registerBank); // GUEST인 경우 은행 등록 페이지로 이동
        } else {
          Swal.fire(loginSuccessMessage).then(() => {
            navigate(routes.home); // 로그인 성공 메시지 후 홈으로 이동
          });
        }
      }
    }
  }, [data]);

  // useEffect(() => {
  //   axios
  //     .get('/api/login/callback')
  //     .then((response) => {
  //       console.log('response 값 : ', response);
  //       const { status } = response;
  //       if (status === 200) {
  //         const userInfo = response.data.response;
  //         const { userAuth, AccessToken, nickName } = userInfo;
  //         localStorage.setItem('accessToken', AccessToken);
  //         localStorage.setItem('userAuth', userAuth);
  //         localStorage.setItem('nickName', nickName);
  //         if (userAuth === 'GUEST') {
  //           navigate(routes.registerBank); // GUEST인 경우 은행 등록 페이지로 이동
  //         } else {
  //           Swal.fire(loginSuccessMessage).then(() => {
  //             navigate(routes.home); // 로그인 성공 메시지 후 홈으로 이동
  //           });
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       // 요청 중 오류가 발생한 경우 처리
  //       console.error('Login Callback Error:', error);
  //       Swal.fire(unknownErrorMessage).then(routes.error);
  //     });
  // }, []);

  return (
    <div className="page--layout">
      <p className="text-blue text-xl ml-[30px] mt-[200px] whitespace-pre">{WAITING_LOGIN}</p>
      <Loader />
    </div>
  );
};

export default KakaoOuathPage;
