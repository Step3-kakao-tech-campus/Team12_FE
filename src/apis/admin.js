import { instance } from './index';

export const adminAuth = () => {
  return instance.put('/admin/auth/approval');
};

export const adminAuthDetail = (id = 1) => {
  return instance.get(`/admin/auth/list/${id}`);
};

export const adminAuthList = (offset = '') => {
  return instance.get(`/admin/auth/list?offset=${offset}`);
};
