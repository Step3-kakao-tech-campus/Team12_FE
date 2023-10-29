import { instance } from './index';

const registerBank = (userInfo) => {
  return instance.post('/users/register/input', userInfo);
};

export default registerBank;
