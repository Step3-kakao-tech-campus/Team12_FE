import { instance } from './index';

export const adminAuth = (userId) => {
  return instance.put('/admin/auth/approval', userId);
};

export const adminAuthReject = (userId) => {
  return instance.put('admin/auth/reject', userId);
};

export const adminAuthDetail = (id = 1) => {
  return instance.get(`/admin/auth/list/${id}`);
};

export const adminAuthList = (offset = '') => {
  return instance.get(`/admin/auth/list?offset=${offset}&limit=10`);
};

// 이 방법도 안 통함...
// import axios from 'axios';

// const axiosConfig = {
//   timeout: 1000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   withCredentials: true,
// };

// // 크램폴린 환경에서 경로가 잘못 설정되어 요청되어 다음 로직으로 바꿔서 적용
// export const adminAuth = () => {
//   return axios.put('api/admin/auth/approval', {}, axiosConfig);
// };

// export const adminAuthReject = () => {
//   return axios.put('api/admin/auth/reject', {}, axiosConfig);
// };

// export const adminAuthDetail = (id = 1) => {
//   return axios.get(`api/admin/auth/list/${id}`, axiosConfig);
// };

// export const adminAuthList = (offset = '') => {
//   return axios.get(`api/admin/auth/list?offset=${offset}&limit=10`, axiosConfig);
// };
