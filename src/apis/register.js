import { instance } from './index';

const registerBank = (userInfo) => {
  return instance.post('/signup', userInfo);
};

export default registerBank;
