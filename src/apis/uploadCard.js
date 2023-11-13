import axios from 'axios';

const imageInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  withCredentials: true,
});

imageInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

imageInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error.response);
  },
);

const uploadCard = (formData) => {
  console.log('formData : ', formData);
  // eslint-disable-next-line no-restricted-syntax
  for (const pair of formData.entries()) {
    console.log(`formData Pairs : ${pair[0]}, ${pair[1]}`);
  }
  return imageInstance.put('/mypage/image/url', formData);
};

// const uploadCard = (imageData) => {
//   const formData = {
//     key: 'image',
//     value: imageData,
//   };
//   console.log(formData);
//   return imageInstance.put('/mypage/image/url', formData);
// };

export default uploadCard;
