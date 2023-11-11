import axios from 'axios';

const axiosConfig = {
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

// 크램폴린 환경에서 경로가 잘못 설정되어 요청되어 다음 로직으로 바꿔서 적용
export const adminAuth = () => {
  return axios.put('/admin/auth/approval', {}, axiosConfig);
};

export const adminAuthReject = () => {
  return axios.put('/admin/auth/reject', {}, axiosConfig);
};

export const adminAuthDetail = (id = 1) => {
  return axios.get(`/admin/auth/list/${id}`, axiosConfig);
};

export const adminAuthList = (offset = '') => {
  return axios.get(`/admin/auth/list?offset=${offset}&limit=10`, axiosConfig);
};

// import { instance } from './index';

// export const adminAuth = () => {
//   return instance.put('/admin/auth/approval');
// };

// export const adminAuthReject = () => {
//   return instance.put('admin/auth/reject');
// };

// export const adminAuthDetail = (id = 1) => {
//   return instance.get(`/admin/auth/list/${id}`);
// };

// export const adminAuthList = (offset = '') => {
//   return instance.get(`/admin/auth/list?offset=${offset}&limit=10`);
// };
