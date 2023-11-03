import { instance } from './index';

// eslint-disable-next-line import/prefer-default-export
export const myPage = () => {
  return instance.get('/mypage');
};

// eslint-disable-next-line import/prefer-default-export
export const requestPresignedUrl = () => {
  return instance.get('/mypage/image/url');
};
