import { instance } from './index';

const adminAuth = () => {
  return instance.put('/admin/auth/approval');
};

export default adminAuth;
