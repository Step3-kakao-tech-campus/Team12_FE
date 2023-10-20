import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import axios from 'axios';
import { loginSuccessMessage } from '../utils/alert';
import Loader from '../components/atoms/Loader';
import routes from '../constant/routes';

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
          console.log(kakaoOauthCode);
          localStorage.setItem('accessToken', 'token');
          localStorage.setItem('grade', 'user');
          localStorage.setItem('username', '김김김');
          Swal.fire(loginSuccessMessage).then(navigate(routes.home));
        } catch (error) {
          // console.log(error);
        }
      }
    }, [2000]);
  }, [kakaoOauthCode]);

  // 백엔드 API에 get을 요청하여 인가코드를 보내는 형태
  // useEffect(() => {
  //   if (kakaoOauthCode) {
  //     (async () => {
  //       try {
  //         // 명세서의 내용에 따라 Body의 토큰을 받아서 로컬 스토리지에 저장하는 형태
  //         const res = await axios.get(`백엔드 API 링크/kakao?code=${kakaoOauthCode}`);
  //         const ACCESS_TOKEN = res.response.AccessToken;
  //         await localStorage.setItem('accessToken', ACCESS_TOKEN);
  //         await Swal.fire(loginSuccessMessage).then(navigate(routes.home));
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     })();
  //   }
  // }, [kakaoOauthCode]);

  // 백엔드 API에 post를 요청하여 인가코드를 보내는 형태
  // 필요에 따라 API 연동 시점에 코드 리팩토링
  // useEffect(() => {
  //   if (kakaoOauthCode) {
  //     (async () => {
  //       try {
  //         const res = await axios.post(
  //           `백엔드 API 링크/kakao?code=${kakaoOauthCode}`,
  //           {
  //             authorizaitonCode: kakaoOauthCode,
  //           },
  //           {
  //             headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
  //           },
  //         );
  //         const ACCESS_TOKEN = res.response.AccessToken;
  //         await localStorage.setItem('accessToken', ACCESS_TOKEN);
  //         await Swal.fire(loginSuccessMessage).then(navigate(routes.home));
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     })();
  //   }
  // }, [kakaoOauthCode]);

  // 백엔드 API에 post를 요청하여 인가코드를 보내는 형태2
  // 필요에 따라 API 연동 시점에 코드 리팩토링
  // useEffect(() => {
  //   if (kakaoOauthCode) {
  //     try {
  //       axios
  //         .post(
  //           // 백엔드에서 원하는 API로 request
  //           // "Content-Type: application/x-www-form-urlencoded" (공식문서 내용)
  //           // 인가 코드와 함께 post 요청을 보내고, 결과로 토큰을 받아 활용
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
  //           const ACCESS_TOKEN = res.response.AccessToken;
  //           localStorage.setItem('accessToken', ACCESS_TOKEN);
  //           Swal.fire(loginSuccessMessage).then(navigate(routes.home));
  //         });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // }, [kakaoOauthCode]);

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
