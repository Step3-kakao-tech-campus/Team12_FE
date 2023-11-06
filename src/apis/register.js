import { instance } from './index';

const registerBank = (userInfo) => {
  console.log('계좌정보 등록 : ', userInfo);
  return instance.post('/signup', userInfo);
};

export default registerBank;
