import { instance } from './index';

const getLoginInfo = () => {
  return instance.get('/login/callback');
};

export default getLoginInfo;
