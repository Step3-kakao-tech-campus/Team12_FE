import axios from 'axios';

// 프론트에서 API를 활용하기 위한 기본 axios 인스턴스
// eslint-disable-next-line import/prefer-default-export
export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // production level 에서는 env에서 baseURL을 넣어주어야함(보안 관련)
  timeout: 1000, // 타임아웃이 없으면 무한정 wait가 걸려버릴 수 있음
  headers: {
    'Content-Type': 'multipart/form-data', // 서버단에서 JSON 형태를 많이써서, 프론트단에서 쏴줄 때 이러한 형태로 많이 쓴다(헤더 기본 설정)
  },
});

/* eslint-disable-next-line */
export const uploadCard = (formData) => {
  return instance.post('/mypage/image/url', {
    key: 'image',
    formData,
  });
};
