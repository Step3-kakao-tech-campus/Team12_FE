import axios from 'axios';
import Swal from 'sweetalert2';

// 프론트에서 API를 활용하기 위한 기본 axios 인스턴스
// eslint-disable-next-line import/prefer-default-export
export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // production level 에서는 env에서 baseURL을 넣어주어야함(보안 관련)
  timeout: 1000, // 타임아웃이 없으면 무한정 wait가 걸려버릴 수 있음
  headers: {
    'Content-Type': 'application/json', // 서버단에서 JSON 형태를 많이써서, 프론트단에서 쏴줄 때 이러한 형태로 많이 쓴다(헤더 기본 설정)
  },
  withCredentials: true,
});

// request - 요청
// 아래와 같이 설정해주면 axios 요청시 자동으로 header에 토큰을 넣어서 보내준다.
// 백엔드에서 받아온 JWT Access Token을 request header에 담아서 보내주는 코드
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// response - 응답
// 백엔드로부터 오는 response를 중간에 처리해주는 미들웨어 역할
// 400번대 에러들에 대한 에러 핸들링
// 현재 Swal을 통해 보여주는 알림창의 내용 중 text에 해당하는 내용은 백엔드쪽에서 보내주는 내용에 따라 변경예정
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 401 error : 인증되지 않음 - 로그인 화면으로 이동
    // token은 백엔드에서 유효하지 않다면 401(Unauthorized) Http code를 보내주기에, 로그인하도록 처리
    if (error.data.error.status === 401) {
      Swal.fire({
        icon: 'error',
        title: '로그인을 진행해주세요!',
        text: error.data.error.message,
        confirmButtonText: '확인',
      }).then(() => {
        window.location.href = '/login';
      });
      return Promise.reject(error);
    }

    // 404 error : 지정한 리소스를 찾을 수 없음
    // 에러 메시지를 띄워주고 & 잘못된 경로로 이동 시 ErrorPage로 이동
    if (error.data.error.status === 404) {
      Swal.fire({
        icon: 'error',
        title: '아이쿠! 에러가 발생했네요😅',
        text: error.data.error.message,
        confirmButtonText: '확인',
      }).then(() => {
        window.location.href = '/errorPage';
      });
      return Promise.reject(error);
    }

    // 401, 404 외의 다른 error에 대한 처리 및 에러 메시지 확인 가능
    Swal.fire({
      icon: 'error',
      title: '아래와 같은 에러가 발생했습니다!',
      text: error.data.error.message,
      confirmButtonText: '확인',
    });
    // 성공인지 실패인지 여부에 따라 resolve, reject 처리
    // response를 제대로 받아도 만약 특정 데이터가 없을때 에러로 처리하고 싶다면 reject 처리
    return Promise.reject(error);
  },
);
