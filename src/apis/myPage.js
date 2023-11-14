import { instance } from './index';

// 마이페이지 조회 (닉네임, 유저등급)
// eslint-disable-next-line import/prefer-default-export
export const getMyPage = () => {
  return instance.get('/mypage');
};

// presigned URL 가져오기
// eslint-disable-next-line import/prefer-default-export
export const getPresignedUrl = () => {
  return instance.get('/mypage/image/url');
};

// 유저등급 조회
// eslint-disable-next-line import/prefer-default-export
export const getUserAuth = () => {
  return instance.get('/mypage/auth');
};

// 회원수정
export const modifyUserInfo = (userInfo) => {
  return instance.put('/articles/modify', userInfo);
};
