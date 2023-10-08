import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { loginSuccessMessage } from '../utils/alert';
import Loader from '../components/atoms/Loader';
// import axios from 'axios';

// 리다이렉팅 처리 화면
const KakaoOuathPage = () => {
  // params로 받은 인가 코드를 code 변수에 저장
  const kakaoOauthCode = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  // 토큰 발급 이후 서비스 사용을 위해 임시로 가볍게 만든 토큰 발급 코드
  // 실제 과정은 인가 코드를 백엔드 API로 보내고 나서 토큰 정보를 발급받아 이용하게 된다.
  // 우선은 임시 토큰을 이용하여 이를 서비스 이용시 인증하는데 사용!
  useEffect(() => {
    setTimeout(() => {
      if (kakaoOauthCode) {
        try {
          // console.log('login success!');
          localStorage.setItem('accessToken', 'token');
          Swal.fire(loginSuccessMessage).then(navigate('/'));
        } catch (error) {
          // console.log(error);
        }
      }
    }, [2000]);
  }, []);

  // 백엔드로 인가 코드를 넘기고 토큰을 받아오는 코드, 이후 로그인 처리 완료
  // useEffect(() => {
  //   if (kakaoOauthCode) {
  //     try {
  //       axios
  //         .post(
  //           // 백엔드에서 원하는 API로 request
  //           // "Content-Type: application/x-www-form-urlencoded" (공식문서 내용)
  //           // 인가 코드와 함께 post 요청을 보내고, 결과로 토큰을 받아 활용
  //           // 토큰은 JWT Access Token & Refresh Token 2가지를 사용한다고 하심
  //           'https://kauth.kakao.com/...',
  //           {
  //             authorizaitonCode: kakaoOauthCode,
  //           },
  //           {
  //             headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
  //           },
  //         )
  //         .then((res) => {
  //           console.log(res);
  //           const ACCESS_TOKEN = res.data.accessToken;
  //           const REFRESH_TOKEN = res.data.refreshToken;
  //           localStorage.setItem('acc_token', ACCESS_TOKEN);
  //           localStorage.setItem('ref_token', REFRESH_TOKEN);
  //         });
  //     } catch (err) {
  //       console.log('error message : ', err);
  //     }
  //   }
  // }, []);

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
