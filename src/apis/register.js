import { instance } from './index';

// 크램폴린 환경에서 경로가 잘못 설정되어 요청되어 해당 페이지에서 별도 구현하여 사용함
const registerBank = (userInfo) => {
  return instance.post('/signup', userInfo);
};

export default registerBank;
